#!/bin/bash

# PostureTips.com Component Setup Script
# Copies reusable components from neckhump.com to posturetips.com
# Usage: bash setup-posturetips-components.sh /path/to/posture-tips-site

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if target directory provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide target directory${NC}"
    echo "Usage: bash setup-posturetips-components.sh /path/to/posture-tips-site"
    exit 1
fi

TARGET_DIR="$1"
SOURCE_DIR="/Users/thxu/Desktop/cursor-workspace/projects/posture-site"

# Verify source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source directory not found: $SOURCE_DIR${NC}"
    exit 1
fi

# Verify target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${RED}Error: Target directory not found: $TARGET_DIR${NC}"
    exit 1
fi

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}PostureTips.com Component Setup${NC}"
echo -e "${BLUE}================================${NC}"
echo ""
echo -e "Source: ${GREEN}$SOURCE_DIR${NC}"
echo -e "Target: ${GREEN}$TARGET_DIR${NC}"
echo ""

# Create components directory if it doesn't exist
echo -e "${YELLOW}Creating components directory...${NC}"
mkdir -p "$TARGET_DIR/components"

# List of components to copy
COMPONENTS=(
    "FAQSection.js"
    "ReadingProgress.js"
    "TableOfContents.js"
    "Breadcrumbs.js"
    "InternalLinking.js"
    "RelatedArticles.js"
    "NavigationPathway.js"
    "PeopleAlsoAsk.js"
    "ComparisonTable.js"
    "Citations.js"
)

# Copy components
echo -e "${YELLOW}Copying components...${NC}"
COPIED=0
FAILED=0

for component in "${COMPONENTS[@]}"; do
    SOURCE_FILE="$SOURCE_DIR/components/$component"
    TARGET_FILE="$TARGET_DIR/components/$component"
    
    if [ -f "$SOURCE_FILE" ]; then
        cp "$SOURCE_FILE" "$TARGET_FILE"
        echo -e "  ${GREEN}✓${NC} Copied $component"
        ((COPIED++))
    else
        echo -e "  ${RED}✗${NC} Not found: $component"
        ((FAILED++))
    fi
done

# Copy globals.css
echo ""
echo -e "${YELLOW}Copying globals.css...${NC}"
if [ -f "$SOURCE_DIR/app/globals.css" ]; then
    mkdir -p "$TARGET_DIR/app"
    cp "$SOURCE_DIR/app/globals.css" "$TARGET_DIR/app/globals.css"
    echo -e "  ${GREEN}✓${NC} Copied globals.css"
else
    echo -e "  ${RED}✗${NC} globals.css not found"
fi

# Update Breadcrumbs.js domain reference
echo ""
echo -e "${YELLOW}Updating Breadcrumbs.js domain reference...${NC}"
BREADCRUMBS_FILE="$TARGET_DIR/components/Breadcrumbs.js"

if [ -f "$BREADCRUMBS_FILE" ]; then
    # Use sed to replace domain (macOS compatible)
    sed -i '' 's/www\.neckhump\.com/www.posturetips.com/g' "$BREADCRUMBS_FILE"
    sed -i '' 's/neckhump\.com/posturetips.com/g' "$BREADCRUMBS_FILE"
    sed -i '' 's/NeckHump\.com/PostureTips.com/g' "$BREADCRUMBS_FILE"
    echo -e "  ${GREEN}✓${NC} Updated domain references in Breadcrumbs.js"
else
    echo -e "  ${RED}✗${NC} Breadcrumbs.js not found"
fi

# Create SimpleAuthor.js
echo ""
echo -e "${YELLOW}Creating SimpleAuthor.js...${NC}"

cat > "$TARGET_DIR/components/SimpleAuthor.js" << 'EOF'
export default function SimpleAuthor({ 
  authorName = "PostureTips Team",
  authorTitle = "Posture Improvement Specialists",
  lastUpdated 
}) {
  return (
    <div className="border-t border-b border-gray-200 py-4 my-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">{authorName}</p>
          <p className="text-xs text-gray-600">{authorTitle}</p>
        </div>
        {lastUpdated && (
          <p className="text-xs text-gray-500">
            Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </div>
    </div>
  )
}
EOF

echo -e "  ${GREEN}✓${NC} Created SimpleAuthor.js"

# Summary
echo ""
echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}Setup Complete!${NC}"
echo -e "${BLUE}================================${NC}"
echo ""
echo -e "Components copied: ${GREEN}$COPIED${NC}"
if [ $FAILED -gt 0 ]; then
    echo -e "Components failed: ${RED}$FAILED${NC}"
fi
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Review copied components in $TARGET_DIR/components/"
echo "2. Test components: cd $TARGET_DIR && npm run dev"
echo "3. Create test page to verify all components render"
echo "4. Read REUSE_GUIDE_NECKHUMP_TO_POSTURETIPS.md for usage examples"
echo ""
echo -e "${GREEN}Ready to build!${NC} 🚀"




