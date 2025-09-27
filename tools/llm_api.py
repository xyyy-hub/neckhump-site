#!/usr/bin/env python3

import google.generativeai as genai
from openai import OpenAI, AzureOpenAI
from anthropic import Anthropic
import argparse
import os
from dotenv import load_dotenv
from pathlib import Path
import sys
import base64
from typing import Optional, Union, List
import mimetypes

def load_environment():
    """Load environment variables from .env files in order of precedence"""
    # Order of precedence:
    # 1. System environment variables (already loaded)
    # 2. .env.local (user-specific overrides)
    # 3. .env (project defaults)
    # 4. .env.example (example configuration)
    
    env_files = ['.env.local', '.env', '.env.example']
    env_loaded = False
    
    print("Current working directory:", Path('.').absolute(), file=sys.stderr)
    print("Looking for environment files:", env_files, file=sys.stderr)
    
    for env_file in env_files:
        env_path = Path('.') / env_file
        print(f"Checking {env_path.absolute()}", file=sys.stderr)
        if env_path.exists():
            print(f"Found {env_file}, loading variables...", file=sys.stderr)
            load_dotenv(dotenv_path=env_path)
            env_loaded = True
            print(f"Loaded environment variables from {env_file}", file=sys.stderr)
            # Print loaded keys (but not values for security)
            with open(env_path) as f:
                keys = [line.split('=')[0].strip() for line in f if '=' in line and not line.startswith('#')]
                print(f"Keys loaded from {env_file}: {keys}", file=sys.stderr)
    
    if not env_loaded:
        print("Warning: No .env files found. Using system environment variables only.", file=sys.stderr)
        print("Available system environment variables:", list(os.environ.keys()), file=sys.stderr)

# Load environment variables at module import
load_environment()

def encode_image_file(image_path: str) -> tuple[str, str]:
    """
    Encode an image file to base64 and detect its MIME type
    Returns (base64_string, mime_type)
    """
    # Detect MIME type
    mime_type, _ = mimetypes.guess_type(image_path)
    if not mime_type or not mime_type.startswith('image/'):
        # Default to common image formats if detection fails
        ext = Path(image_path).suffix.lower()
        mime_map = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.webp': 'image/webp'
        }
        mime_type = mime_map.get(ext, 'image/jpeg')
    
    # Read and encode the image
    with open(image_path, 'rb') as image_file:
        image_data = image_file.read()
        base64_string = base64.b64encode(image_data).decode('utf-8')
    
    return base64_string, mime_type

def query_llm(prompt: str, provider: str = "openai", model: Optional[str] = None, image_path: Optional[str] = None) -> str:
    """
    Query an LLM with the given prompt and optional image
    
    Args:
        prompt: The text prompt to send
        provider: LLM provider ("openai", "azure", "anthropic", "gemini", "deepseek", "local")
        model: Specific model to use (optional, uses defaults)
        image_path: Path to image file for vision models (optional)
    
    Returns:
        Response text from the LLM
    """
    
    if provider == "openai":
        client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
        model = model or "gpt-4o"
        
        if image_path:
            base64_image, mime_type = encode_image_file(image_path)
            messages = [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:{mime_type};base64,{base64_image}"
                            }
                        }
                    ]
                }
            ]
        else:
            messages = [{"role": "user", "content": prompt}]
        
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            max_tokens=4000
        )
        return response.choices[0].message.content
    
    elif provider == "azure":
        azure_endpoint = os.getenv('AZURE_OPENAI_ENDPOINT')
        azure_key = os.getenv('AZURE_OPENAI_API_KEY')
        azure_model = os.getenv('AZURE_OPENAI_MODEL_DEPLOYMENT', 'gpt-4o-ms')
        
        if not azure_endpoint or not azure_key:
            raise ValueError("Azure OpenAI requires AZURE_OPENAI_ENDPOINT and AZURE_OPENAI_API_KEY environment variables")
        
        client = AzureOpenAI(
            azure_endpoint=azure_endpoint,
            api_key=azure_key,
            api_version="2024-02-15-preview"
        )
        
        model = model or azure_model
        
        if image_path:
            base64_image, mime_type = encode_image_file(image_path)
            messages = [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:{mime_type};base64,{base64_image}"
                            }
                        }
                    ]
                }
            ]
        else:
            messages = [{"role": "user", "content": prompt}]
        
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            max_tokens=4000
        )
        return response.choices[0].message.content
    
    elif provider == "anthropic":
        client = Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY'))
        model = model or "claude-3-sonnet-20240229"
        
        if image_path:
            base64_image, mime_type = encode_image_file(image_path)
            message_content = [
                {"type": "text", "text": prompt},
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": mime_type,
                        "data": base64_image
                    }
                }
            ]
        else:
            message_content = prompt
        
        message = client.messages.create(
            model=model,
            max_tokens=4000,
            messages=[{"role": "user", "content": message_content}]
        )
        return message.content[0].text
    
    elif provider == "gemini":
        genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
        model = model or "gemini-pro"
        
        if image_path:
            # For Gemini with images, we need to use gemini-pro-vision
            model = "gemini-pro-vision"
            import PIL.Image
            img = PIL.Image.open(image_path)
            llm_model = genai.GenerativeModel(model)
            response = llm_model.generate_content([prompt, img])
        else:
            llm_model = genai.GenerativeModel(model)
            response = llm_model.generate_content(prompt)
        
        return response.text
    
    elif provider == "deepseek":
        client = OpenAI(
            api_key=os.getenv('DEEPSEEK_API_KEY'),
            base_url="https://api.deepseek.com"
        )
        model = model or "deepseek-chat"
        
        # DeepSeek doesn't support images yet
        if image_path:
            raise ValueError("DeepSeek provider doesn't support image inputs yet")
        
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=4000
        )
        return response.choices[0].message.content
    
    elif provider == "local":
        # For local LLM via OpenAI-compatible API
        client = OpenAI(
            api_key="dummy-key",  # Some local servers require a dummy key
            base_url=os.getenv('LOCAL_LLM_BASE_URL', 'http://localhost:8000/v1')
        )
        model = model or os.getenv('LOCAL_LLM_MODEL', 'Qwen/Qwen2.5-32B-Instruct-AWQ')
        
        # Most local LLMs don't support images yet
        if image_path:
            raise ValueError("Local LLM provider doesn't support image inputs yet")
        
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=4000
        )
        return response.choices[0].message.content
    
    else:
        raise ValueError(f"Unknown provider: {provider}")

def main():
    parser = argparse.ArgumentParser(description="Query various LLM providers")
    parser.add_argument("--prompt", required=True, help="The prompt to send to the LLM")
    parser.add_argument("--provider", default="openai", 
                       choices=["openai", "azure", "anthropic", "gemini", "deepseek", "local"],
                       help="LLM provider to use")
    parser.add_argument("--model", help="Specific model to use (optional)")
    parser.add_argument("--image", help="Path to image file for vision models")
    
    args = parser.parse_args()
    
    try:
        response = query_llm(args.prompt, args.provider, args.model, args.image)
        print(response)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
