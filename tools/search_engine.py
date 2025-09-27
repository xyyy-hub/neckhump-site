#!/usr/bin/env python3

import argparse
import sys
from duckduckgo_search import DDGS
import logging
from typing import List, Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.WARNING,  # Reduce log noise
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stderr
)

def search_web(query: str, max_results: int = 10, region: str = 'us-en', safesearch: str = 'moderate') -> List[Dict[str, Any]]:
    """
    Search the web using DuckDuckGo
    
    Args:
        query: Search query
        max_results: Maximum number of results to return
        region: Region for search (default: 'us-en')
        safesearch: Safe search setting ('on', 'moderate', 'off')
    
    Returns:
        List of search results with 'title', 'url', and 'snippet' keys
    """
    try:
        with DDGS() as ddgs:
            results = []
            
            # Use text search with specified parameters
            search_results = ddgs.text(
                keywords=query,
                region=region,
                safesearch=safesearch,
                timelimit=None,  # No time limit
                max_results=max_results
            )
            
            for result in search_results:
                results.append({
                    'title': result.get('title', ''),
                    'url': result.get('href', ''),
                    'snippet': result.get('body', '')
                })
            
            return results
            
    except Exception as e:
        logging.error(f"Search failed: {e}")
        return []

def format_results(results: List[Dict[str, Any]]) -> str:
    """
    Format search results for display
    
    Args:
        results: List of search result dictionaries
    
    Returns:
        Formatted string of results
    """
    if not results:
        return "No results found."
    
    formatted = []
    for i, result in enumerate(results, 1):
        formatted.append(f"Result {i}:")
        formatted.append(f"URL: {result['url']}")
        formatted.append(f"Title: {result['title']}")
        formatted.append(f"Snippet: {result['snippet']}")
        formatted.append("")  # Empty line between results
    
    return "\n".join(formatted)

def main():
    """Command-line interface for web search"""
    parser = argparse.ArgumentParser(description="Search the web using DuckDuckGo")
    parser.add_argument("query", help="Search query")
    parser.add_argument("--max-results", type=int, default=10, 
                       help="Maximum number of results (default: 10)")
    parser.add_argument("--region", default="us-en",
                       help="Search region (default: us-en)")
    parser.add_argument("--safesearch", choices=['on', 'moderate', 'off'], 
                       default='moderate', help="Safe search setting")
    parser.add_argument("--format", choices=['text', 'json'], default='text',
                       help="Output format")
    
    args = parser.parse_args()
    
    try:
        results = search_web(
            query=args.query,
            max_results=args.max_results,
            region=args.region,
            safesearch=args.safesearch
        )
        
        if args.format == 'json':
            import json
            print(json.dumps(results, indent=2))
        else:
            print(format_results(results))
            
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
