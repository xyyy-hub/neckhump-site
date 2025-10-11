#!/usr/bin/env node

/**
 * Internal Link Validation Script
 * 
 * Scans all pages for internal links and validates them against the filesystem
 * Reports broken links and orphan pages (pages with no incoming links)
 * 
 * Usage: node scripts/validate-links.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');

/**
 * Find all page files recursively
 */
function findPageFiles(dir, baseDir = dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...findPageFiles(fullPath, baseDir));
    } else if (entry.isFile() && /\.(js|tsx|jsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Convert file path to URL route
 */
function filePathToRoute(filePath) {
  let route = filePath.replace(APP_DIR, '');
  route = route.replace(/\/page\.(js|tsx)$/, '');
  return route || '/';
}

/**
 * Extract internal links from file content
 */
function extractInternalLinks(content) {
  const links = new Set();
  
  // Pattern 1: href="/..." in Link or anchor tags
  const hrefPattern1 = /href=["'](\/([\w\-\/]*))["']/g;
  let match;
  while ((match = hrefPattern1.exec(content)) !== null) {
    links.add(match[1]);
  }
  
  // Pattern 2: href={"/..."} or href={'...'} in JSX
  const hrefPattern2 = /href=\{["'](\/([\w\-\/]*))["']\}/g;
  while ((match = hrefPattern2.exec(content)) !== null) {
    links.add(match[1]);
  }
  
  // Pattern 3: router.push("/...")
  const routerPattern = /router\.push\(["'](\/([\w\-\/]*))['"]/g;
  while ((match = routerPattern.exec(content)) !== null) {
    links.add(match[1]);
  }
  
  // Pattern 4: Link in template literals
  const templatePattern = /href=["']`(\/([\w\-\/\$\{\}]*))["']/g;
  while ((match = templatePattern.exec(content)) !== null) {
    // Skip if contains template variables
    if (!match[1].includes('${')) {
      links.add(match[1]);
    }
  }
  
  return Array.from(links).filter(link => {
    // Filter out external links, anchors, and special paths
    return link.startsWith('/') && 
           !link.startsWith('//') &&
           !link.includes('#') &&
           !link.includes('?') &&
           !link.startsWith('/_next') &&
           !link.startsWith('/api');
  });
}

/**
 * Get all valid routes from filesystem
 */
function getValidRoutes() {
  const pageFiles = findPageFiles(APP_DIR);
  return new Set(pageFiles.map(filePathToRoute));
}

/**
 * Main validation
 */
function validateLinks() {
  console.log('🔍 Internal Link Validation\n');
  
  // Get all valid routes
  const validRoutes = getValidRoutes();
  console.log(`✅ Found ${validRoutes.size} valid routes\n`);
  
  // Track all links found
  const allLinks = new Map(); // link -> [files that reference it]
  const brokenLinks = new Map(); // broken link -> [files that reference it]
  
  // Scan all page files
  const pageFiles = findPageFiles(APP_DIR);
  const componentFiles = findPageFiles(COMPONENTS_DIR);
  const allFiles = [...pageFiles, ...componentFiles];
  
  console.log(`📄 Scanning ${allFiles.length} files for links...\n`);
  
  for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = extractInternalLinks(content);
    const relativePath = path.relative(process.cwd(), filePath);
    
    for (const link of links) {
      // Track all links
      if (!allLinks.has(link)) {
        allLinks.set(link, []);
      }
      allLinks.get(link).push(relativePath);
      
      // Check if link is valid
      if (!validRoutes.has(link)) {
        if (!brokenLinks.has(link)) {
          brokenLinks.set(link, []);
        }
        brokenLinks.get(link).push(relativePath);
      }
    }
  }
  
  // Report broken links
  if (brokenLinks.size > 0) {
    console.log('❌ BROKEN LINKS FOUND:\n');
    for (const [link, files] of brokenLinks) {
      console.log(`   ${link}`);
      console.log(`   Referenced in ${files.length} file(s):`);
      files.forEach(file => console.log(`     → ${file}`));
      console.log('');
    }
  } else {
    console.log('✅ No broken links found!\n');
  }
  
  // Find orphan pages (pages with no incoming links)
  const orphanPages = [];
  for (const route of validRoutes) {
    // Skip special pages
    if (route === '/' || route === '/privacy' || route === '/terms' || 
        route.includes('/not-found') || route.includes('/error')) {
      continue;
    }
    
    if (!allLinks.has(route)) {
      orphanPages.push(route);
    }
  }
  
  if (orphanPages.length > 0) {
    console.log('⚠️  ORPHAN PAGES (no incoming links):\n');
    orphanPages.sort().forEach(page => {
      console.log(`   ${page}`);
    });
    console.log(`\n   Total: ${orphanPages.length} orphan pages\n`);
    console.log('   💡 Tip: Add links to these pages from related content\n');
  } else {
    console.log('✅ No orphan pages found!\n');
  }
  
  // Statistics
  console.log('📊 Statistics:\n');
  console.log(`   Total routes: ${validRoutes.size}`);
  console.log(`   Unique internal links found: ${allLinks.size}`);
  console.log(`   Broken links: ${brokenLinks.size}`);
  console.log(`   Orphan pages: ${orphanPages.length}`);
  
  // Most linked pages
  const linkCounts = Array.from(allLinks.entries())
    .map(([link, files]) => ({ link, count: files.length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  console.log('\n   🔗 Top 10 most linked pages:');
  linkCounts.forEach(({ link, count }, index) => {
    console.log(`      ${index + 1}. ${link} (${count} references)`);
  });
  
  console.log('');
  
  // Exit with error if broken links found
  if (brokenLinks.size > 0) {
    process.exit(1);
  }
}

// Run
if (require.main === module) {
  validateLinks();
}

module.exports = { validateLinks, extractInternalLinks };

