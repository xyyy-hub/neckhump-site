#!/usr/bin/env python3

import asyncio
import argparse
import sys
from pathlib import Path
from playwright.async_api import async_playwright
import logging
from typing import Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stderr
)

async def take_screenshot_async(url: str, output_path: str, 
                               width: int = 1280, height: int = 800,
                               wait_time: int = 3000, full_page: bool = False) -> str:
    """
    Take a screenshot of a webpage asynchronously
    
    Args:
        url: URL to screenshot
        output_path: Path to save screenshot
        width: Viewport width in pixels
        height: Viewport height in pixels  
        wait_time: Time to wait after page load in milliseconds
        full_page: Whether to capture full page or just viewport
    
    Returns:
        Path to saved screenshot
    """
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(
                viewport={'width': width, 'height': height},
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            )
            page = await context.new_page()
            
            logging.info(f"Navigating to: {url}")
            await page.goto(url, wait_until='domcontentloaded')
            
            # Wait for page to settle
            await page.wait_for_timeout(wait_time)
            
            # Take screenshot
            logging.info(f"Taking screenshot: {output_path}")
            await page.screenshot(
                path=output_path,
                full_page=full_page,
                type='png'
            )
            
            await browser.close()
            logging.info(f"Screenshot saved: {output_path}")
            return output_path
            
    except Exception as e:
        error_msg = f"Error taking screenshot of {url}: {str(e)}"
        logging.error(error_msg)
        raise Exception(error_msg)

def take_screenshot_sync(url: str, output_path: str, 
                        width: int = 1280, height: int = 800,
                        wait_time: int = 3000, full_page: bool = False) -> str:
    """
    Synchronous wrapper for async screenshot function
    """
    return asyncio.run(take_screenshot_async(url, output_path, width, height, wait_time, full_page))

def main():
    """Command-line interface for taking screenshots"""
    parser = argparse.ArgumentParser(description="Take screenshots of web pages using Playwright")
    parser.add_argument("url", help="URL to screenshot")
    parser.add_argument("--output", default="screenshot.png", 
                       help="Output file path (default: screenshot.png)")
    parser.add_argument("--width", type=int, default=1280,
                       help="Viewport width in pixels (default: 1280)")
    parser.add_argument("--height", type=int, default=800,
                       help="Viewport height in pixels (default: 800)")
    parser.add_argument("--wait", type=int, default=3000,
                       help="Wait time after page load in milliseconds (default: 3000)")
    parser.add_argument("--full-page", action="store_true",
                       help="Capture full page instead of just viewport")
    
    args = parser.parse_args()
    
    try:
        # Ensure output directory exists
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        screenshot_path = take_screenshot_sync(
            args.url,
            str(output_path),
            args.width,
            args.height,
            args.wait,
            args.full_page
        )
        
        print(f"Screenshot saved: {screenshot_path}")
        
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
