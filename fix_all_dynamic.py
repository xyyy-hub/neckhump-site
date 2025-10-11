#!/usr/bin/env python3
import os
import glob

def add_force_dynamic(file_path):
    """Add force-dynamic export to a file if it doesn't already have it."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Check if force-dynamic is already present
        if 'force-dynamic' in content:
            print(f"force-dynamic already present in {file_path}")
            return
        
        # Find the end of the metadata export and add force-dynamic after it
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            new_lines.append(line)
            
            # Look for the closing brace of metadata export
            if line.strip() == '}' and i > 0 and 'metadata' in lines[i-1]:
                # Add force-dynamic export after the closing brace
                new_lines.append('')
                new_lines.append('// Force dynamic rendering to avoid static generation issues')
                new_lines.append("export const dynamic = 'force-dynamic'")
                print(f"Added force-dynamic to {file_path}")
            
            i += 1
        
        # Write the modified content back
        with open(file_path, 'w') as f:
            f.write('\n'.join(new_lines))
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    # Find all help center page.js files
    help_pages = glob.glob('app/help/**/page.js', recursive=True)
    
    for page in help_pages:
        add_force_dynamic(page)
    
    print(f"Processed {len(help_pages)} files")

if __name__ == '__main__':
    main()

