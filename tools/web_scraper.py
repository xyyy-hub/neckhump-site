#!/usr/bin/env python3

import asyncio
import argparse
import sys
import os
from typing import List, Optional
from playwright.async_api import async_playwright
import html5lib
from multiprocessing import Pool
import time
from urllib.parse import urlparse
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stderr
)

async def scrape_url_async(url: str, output_file: Optional[str] = None, 
                          include_links: bool = False, timeout: int = 30000) -> str:
    """
    Scrape a single URL asynchronously using Playwright
    
    Args:
        url: URL to scrape
        output_file: Optional file to save content to
        include_links: Whether to include links in output
        timeout: Timeout in milliseconds
    
    Returns:
        Scraped content as string
    """
    try:
        async with async_playwright() as p:
            # Use chromium browser
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            )
            page = await context.new_page()
            
            # Set timeout
            page.set_default_timeout(timeout)
            
            logging.info(f"Navigating to: {url}")
            await page.goto(url, wait_until='domcontentloaded')
            
            # Wait a bit for dynamic content
            await page.wait_for_timeout(2000)
            
            # Extract text content
            content = await page.evaluate('''() => {
                // Remove script and style elements
                const scripts = document.querySelectorAll('script, style, nav, footer, header');
                scripts.forEach(el => el.remove());
                
                // Get main content
                const main = document.querySelector('main, article, .content, #content, .main');
                const body = main || document.body;
                
                return body.innerText;
            }''')
            
            # Extract links if requested
            links_content = ""
            if include_links:
                links = await page.evaluate('''() => {
                    const links = Array.from(document.querySelectorAll('a[href]'));
                    return links.map(link => ({
                        text: link.innerText.trim(),
                        href: link.href
                    })).filter(link => link.text && link.href);
                }''')
                
                if links:
                    links_content = "\n\n--- LINKS ---\n"
                    for link in links[:20]:  # Limit to first 20 links
                        links_content += f"{link['text']}: {link['href']}\n"
            
            full_content = f"URL: {url}\n\n{content}{links_content}"
            
            # Save to file if specified
            if output_file:
                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(full_content)
                logging.info(f"Content saved to: {output_file}")
            
            await browser.close()
            return full_content
            
    except Exception as e:
        error_msg = f"Error scraping {url}: {str(e)}"
        logging.error(error_msg)
        return error_msg

def scrape_url_sync(url: str, output_file: Optional[str] = None, 
                   include_links: bool = False, timeout: int = 30000) -> str:
    """
    Synchronous wrapper for async scraping function
    """
    return asyncio.run(scrape_url_async(url, output_file, include_links, timeout))

async def scrape_multiple_urls(urls: List[str], max_concurrent: int = 3, 
                              include_links: bool = False, timeout: int = 30000) -> List[str]:
    """
    Scrape multiple URLs concurrently
    
    Args:
        urls: List of URLs to scrape
        max_concurrent: Maximum number of concurrent requests
        include_links: Whether to include links in output
        timeout: Timeout per request in milliseconds
    
    Returns:
        List of scraped content strings
    """
    semaphore = asyncio.Semaphore(max_concurrent)
    
    async def scrape_with_semaphore(url: str) -> str:
        async with semaphore:
            return await scrape_url_async(url, include_links=include_links, timeout=timeout)
    
    tasks = [scrape_with_semaphore(url) for url in urls]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    # Convert exceptions to error strings
    final_results = []
    for i, result in enumerate(results):
        if isinstance(result, Exception):
            final_results.append(f"Error scraping {urls[i]}: {str(result)}")
        else:
            final_results.append(result)
    
    return final_results

def main():
    """Command-line interface for web scraping"""
    parser = argparse.ArgumentParser(description="Scrape web pages using Playwright")
    parser.add_argument("urls", nargs="+", help="URLs to scrape")
    parser.add_argument("--output", help="Output file (for single URL)")
    parser.add_argument("--include-links", action="store_true", 
                       help="Include links in output")
    parser.add_argument("--max-concurrent", type=int, default=3,
                       help="Maximum concurrent requests")
    parser.add_argument("--timeout", type=int, default=30000,
                       help="Timeout per request in milliseconds")
    
    args = parser.parse_args()
    
    try:
        if len(args.urls) == 1:
            # Single URL
            content = scrape_url_sync(
                args.urls[0], 
                args.output, 
                args.include_links,
                args.timeout
            )
            if not args.output:
                print(content)
        else:
            # Multiple URLs
            if args.output:
                logging.warning("Output file ignored for multiple URLs")
            
            results = asyncio.run(scrape_multiple_urls(
                args.urls,
                args.max_concurrent,
                args.include_links,
                args.timeout
            ))
            
            for result in results:
                print(result)
                print("\n" + "="*80 + "\n")
                
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
