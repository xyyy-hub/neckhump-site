#!/usr/bin/env node

/**
 * Automated Sitemap Route Generator
 * 
 * Scans the app directory for all page.{js,tsx} files and generates
 * a list of routes with metadata for sitemap.js
 * 
 * Usage: node scripts/generate-sitemap-routes.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const APP_DIR = path.join(__dirname, '..', 'app');
const BASE_URL = 'https://www.neckhump.com';

// Routes to exclude from sitemap
const EXCLUDED_ROUTES = [
  '/not-found',
  '/error',
  '/api',
  '/_next',
];

// Priority and change frequency based on path patterns
const ROUTE_CONFIG = {
  // Homepage
  '/': { priority: 1.0, changeFrequency: 'weekly' },
  
  // Main guides (high priority)
  '/neck-hump-guide': { priority: 0.95, changeFrequency: 'monthly' },
  '/neck-hump-exercises': { priority: 0.95, changeFrequency: 'monthly' },
  '/posture-correction-guide': { priority: 0.95, changeFrequency: 'monthly' },
  '/exercise-library': { priority: 0.95, changeFrequency: 'monthly' },
  
  // Product/commercial pages
  '/best-pillow-for-neck-hump': { priority: 0.9, changeFrequency: 'monthly' },
  '/how-to-fix-posture-at-home': { priority: 0.9, changeFrequency: 'monthly' },
  '/how-to-sleep-with-neck-hump': { priority: 0.85, changeFrequency: 'monthly' },
  
  // Category pages
  '/learn': { priority: 0.9, changeFrequency: 'weekly' },
  '/solutions': { priority: 0.9, changeFrequency: 'weekly' },
  '/help': { priority: 0.8, changeFrequency: 'weekly' },
  
  // Help center categories
  '/help/exercises-safety': { priority: 0.7, changeFrequency: 'monthly' },
  '/help/specific-situations': { priority: 0.7, changeFrequency: 'monthly' },
  '/help/product-questions': { priority: 0.7, changeFrequency: 'monthly' },
  '/help/timeline-questions': { priority: 0.7, changeFrequency: 'monthly' },
  '/help/troubleshooting': { priority: 0.7, changeFrequency: 'monthly' },
};

/**
 * Recursively find all page.{js,tsx} files in a directory
 */
function findPageFiles(dir, baseDir = dir) {
  const files = [];
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively search subdirectories
      files.push(...findPageFiles(fullPath, baseDir));
    } else if (entry.isFile() && /^page\.(js|tsx)$/.test(entry.name)) {
      // Found a page file
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Convert file path to URL route
 */
function filePathToRoute(filePath) {
  // Remove app directory prefix
  let route = filePath.replace(APP_DIR, '');
  
  // Remove /page.js or /page.tsx
  route = route.replace(/\/page\.(js|tsx)$/, '');
  
  // Convert to URL format
  route = route || '/';
  
  return route;
}

/**
 * Get last modified date for a file
 */
function getLastModified(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (error) {
    return new Date();
  }
}

/**
 * Determine priority based on route depth and pattern
 */
function getRoutePriority(route) {
  // Check for exact match in config
  if (ROUTE_CONFIG[route]) {
    return ROUTE_CONFIG[route].priority;
  }
  
  // Default priorities based on depth
  const depth = route.split('/').filter(Boolean).length;
  
  if (depth === 0) return 1.0;  // Homepage
  if (depth === 1) return 0.8;  // Top-level pages
  if (depth === 2) return 0.7;  // Second-level pages
  if (depth === 3) return 0.6;  // Help center articles
  return 0.5;  // Deeper pages
}

/**
 * Determine change frequency based on route pattern
 */
function getChangeFrequency(route) {
  // Check for exact match in config
  if (ROUTE_CONFIG[route]) {
    return ROUTE_CONFIG[route].changeFrequency;
  }
  
  // Default frequencies based on pattern
  if (route === '/') return 'weekly';
  if (route.includes('/help/')) return 'monthly';
  if (route.includes('/exercises/')) return 'monthly';
  if (route.includes('/about/')) return 'yearly';
  if (route === '/privacy' || route === '/terms') return 'yearly';
  
  return 'monthly';  // Default
}

/**
 * Check if route should be excluded
 */
function shouldExcludeRoute(route) {
  return EXCLUDED_ROUTES.some(excluded => route.startsWith(excluded));
}

/**
 * Generate sitemap entries
 */
function generateSitemapEntries() {
  console.log('🔍 Scanning for page files...\n');
  
  const pageFiles = findPageFiles(APP_DIR);
  const routes = [];
  
  for (const filePath of pageFiles) {
    const route = filePathToRoute(filePath);
    
    if (shouldExcludeRoute(route)) {
      console.log(`⏭️  Skipping: ${route}`);
      continue;
    }
    
    const lastModified = getLastModified(filePath);
    const priority = getRoutePriority(route);
    const changeFrequency = getChangeFrequency(route);
    
    routes.push({
      route,
      url: `${BASE_URL}${route}`,
      lastModified,
      priority,
      changeFrequency,
      filePath: path.relative(process.cwd(), filePath)
    });
    
    console.log(`✅ Added: ${route} (priority: ${priority})`);
  }
  
  // Sort by priority (descending) then by route
  routes.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority;
    }
    return a.route.localeCompare(b.route);
  });
  
  return routes;
}

/**
 * Export routes to JSON file
 */
function exportToJSON(routes) {
  const outputPath = path.join(__dirname, 'sitemap-routes.json');
  
  const data = {
    generated: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalRoutes: routes.length,
    routes: routes.map(r => ({
      route: r.route,
      url: r.url,
      priority: r.priority,
      changeFrequency: r.changeFrequency,
      lastModified: r.lastModified.toISOString()
    }))
  };
  
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`\n📄 Exported to: ${outputPath}`);
}

/**
 * Generate JavaScript code for sitemap.js
 */
function generateSitemapCode(routes) {
  const entries = routes.map(r => `  {
    url: '${r.url}',
    lastModified: new Date('${r.lastModified.toISOString()}'),
    changeFrequency: '${r.changeFrequency}',
    priority: ${r.priority},
  }`).join(',\n');
  
  return `export default function sitemap() {
  return [
${entries}
  ]
}
`;
}

/**
 * Display summary statistics
 */
function displaySummary(routes) {
  console.log('\n📊 Summary:');
  console.log(`   Total routes: ${routes.length}`);
  console.log(`   High priority (≥0.9): ${routes.filter(r => r.priority >= 0.9).length}`);
  console.log(`   Medium priority (0.7-0.89): ${routes.filter(r => r.priority >= 0.7 && r.priority < 0.9).length}`);
  console.log(`   Lower priority (<0.7): ${routes.filter(r => r.priority < 0.7).length}`);
  
  const depths = {};
  routes.forEach(r => {
    const depth = r.route.split('/').filter(Boolean).length;
    depths[depth] = (depths[depth] || 0) + 1;
  });
  
  console.log('\n   By depth:');
  Object.keys(depths).sort().forEach(depth => {
    console.log(`     Level ${depth}: ${depths[depth]} routes`);
  });
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Automated Sitemap Route Generator\n');
  console.log(`   Base URL: ${BASE_URL}`);
  console.log(`   Scanning: ${APP_DIR}\n`);
  
  try {
    const routes = generateSitemapEntries();
    
    displaySummary(routes);
    
    // Export to JSON for reference
    exportToJSON(routes);
    
    // Generate sitemap.js code
    const sitemapCode = generateSitemapCode(routes);
    const sitemapPath = path.join(__dirname, '..', 'app', 'sitemap-generated.js');
    fs.writeFileSync(sitemapPath, sitemapCode);
    console.log(`\n✅ Generated sitemap code: ${sitemapPath}`);
    
    console.log('\n💡 Next steps:');
    console.log('   1. Review the generated sitemap-generated.js');
    console.log('   2. Replace or merge with existing app/sitemap.js');
    console.log('   3. Test with: npm run build');
    console.log('   4. Verify at: http://localhost:3000/sitemap.xml\n');
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSitemapEntries, filePathToRoute };

