#!/usr/bin/env node

/**
 * SEO & AEO Implementation Verification Script
 * 
 * Tests all implementations against SEO/AEO requirements from the plan
 * 
 * Usage: node scripts/verify-seo-aeo.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');

console.log('🔍 SEO & AEO Implementation Verification\n');
console.log('Testing implementations against plan requirements...\n');

let passed = 0;
let failed = 0;
let warnings = 0;

function pass(test) {
  console.log(`✅ PASS: ${test}`);
  passed++;
}

function fail(test, reason) {
  console.log(`❌ FAIL: ${test}`);
  console.log(`   Reason: ${reason}\n`);
  failed++;
}

function warn(test, reason) {
  console.log(`⚠️  WARN: ${test}`);
  console.log(`   Note: ${reason}\n`);
  warnings++;
}

// ============================================================================
// PHASE 1: Critical Domain & Schema Fixes
// ============================================================================

console.log('📋 PHASE 1: Critical Domain & Schema Fixes\n');

// Test 1.1: Breadcrumb Schema Domain
const breadcrumbsFile = path.join(COMPONENTS_DIR, 'Breadcrumbs.js');
const breadcrumbsContent = fs.readFileSync(breadcrumbsFile, 'utf8');
if (breadcrumbsContent.includes('https://www.neckhump.com${item.href}')) {
  pass('Breadcrumb schema uses www.neckhump.com domain');
} else if (breadcrumbsContent.includes('https://neckhump.com${item.href}')) {
  fail('Breadcrumb schema uses non-www domain', 'Should use www.neckhump.com for consistency');
} else {
  warn('Could not verify breadcrumb schema domain', 'Manual check recommended');
}

// Test 1.2: SearchAction URL
const layoutFile = path.join(APP_DIR, 'layout.js');
const layoutContent = fs.readFileSync(layoutFile, 'utf8');
if (layoutContent.includes('https://www.neckhump.com/search?q=')) {
  pass('SearchAction URL uses www domain and /search endpoint');
} else if (layoutContent.includes('https://neckhump.com')) {
  fail('SearchAction URL uses non-www domain', 'Should use www.neckhump.com');
} else {
  warn('Could not verify SearchAction URL', 'Manual check recommended');
}

// Test 1.3: dateModified in schemas
const pagesWithArticleSchema = [
  'neck-hump-guide/page.tsx',
  'best-pillow-for-neck-hump/page.js',
  'neck-hump-exercises/page.js',
  'exercises/chin-tucks/page.js',
  'exercises/wall-angels/page.js'
];

let schemasWithDateModified = 0;
let schemasTotal = 0;

pagesWithArticleSchema.forEach(pagePath => {
  const fullPath = path.join(APP_DIR, pagePath);
  if (fs.existsSync(fullPath)) {
    schemasTotal++;
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('"dateModified"')) {
      schemasWithDateModified++;
    }
  }
});

if (schemasWithDateModified === schemasTotal && schemasTotal > 0) {
  pass(`All ${schemasTotal} sampled pages have dateModified in schemas`);
} else {
  fail(`Only ${schemasWithDateModified}/${schemasTotal} sampled pages have dateModified`, 'Add dateModified to all Article/HowTo schemas');
}

console.log('');

// ============================================================================
// PHASE 2: Automated Sitemap Generation
// ============================================================================

console.log('📋 PHASE 2: Automated Sitemap Generation\n');

// Test 2.1: Sitemap generation script exists
const sitemapScriptPath = path.join(__dirname, 'generate-sitemap-routes.js');
if (fs.existsSync(sitemapScriptPath)) {
  pass('Sitemap generation script exists');
  
  // Test 2.2: Script is functional
  try {
    const script = require(sitemapScriptPath);
    if (typeof script.generateSitemapEntries === 'function') {
      pass('Sitemap generation script exports functional API');
    }
  } catch (error) {
    warn('Could not verify sitemap script functionality', 'Manual test recommended');
  }
} else {
  fail('Sitemap generation script not found', 'Create scripts/generate-sitemap-routes.js');
}

// Test 2.3: Sitemap includes routes
const sitemapFile = path.join(APP_DIR, 'sitemap.js');
if (fs.existsSync(sitemapFile)) {
  const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
  const urlMatches = sitemapContent.match(/url: ['"]https:\/\/www\.neckhump\.com/g);
  
  if (urlMatches && urlMatches.length > 50) {
    pass(`Sitemap contains ${urlMatches.length} routes with www domain`);
  } else if (urlMatches && urlMatches.length > 20) {
    warn(`Sitemap contains ${urlMatches.length} routes`, 'Expected 79 routes - some may be missing');
  } else {
    fail('Sitemap has insufficient routes', 'Should include all 79 discovered routes');
  }
  
  // Test www consistency
  const nonWwwMatches = sitemapContent.match(/url: ['"]https:\/\/neckhump\.com[^w]/g);
  if (!nonWwwMatches || nonWwwMatches.length === 0) {
    pass('All sitemap URLs use www domain');
  } else {
    fail('Sitemap contains non-www URLs', 'All URLs should use www.neckhump.com');
  }
} else {
  fail('Sitemap file not found', 'app/sitemap.js is required');
}

console.log('');

// ============================================================================
// PHASE 3: Search Implementation
// ============================================================================

console.log('📋 PHASE 3: Search Implementation\n');

// Test 3.1: Search page exists
const searchPagePath = path.join(APP_DIR, 'search/page.js');
if (fs.existsSync(searchPagePath)) {
  pass('Search page exists at /search');
  
  const searchContent = fs.readFileSync(searchPagePath, 'utf8');
  
  // Test 3.1a: Uses useSearchParams
  if (searchContent.includes('useSearchParams')) {
    pass('Search page uses useSearchParams for query handling');
  } else {
    fail('Search page does not use useSearchParams', 'Required for query parameter handling');
  }
  
  // Test 3.1b: Has Suspense boundary
  if (searchContent.includes('Suspense')) {
    pass('Search page wrapped in Suspense boundary (Next.js requirement)');
  } else {
    fail('Search page missing Suspense boundary', 'Required for useSearchParams in Next.js 15');
  }
  
  // Test 3.1c: Handles no results
  if (searchContent.includes('No results') || searchContent.includes('no results')) {
    pass('Search page handles no results state');
  } else {
    warn('Could not verify no results handling', 'Manual test recommended');
  }
} else {
  fail('Search page not found', 'Create app/search/page.js');
}

// Test 3.2: Header has search
const headerFile = path.join(COMPONENTS_DIR, 'Header.js');
if (fs.existsSync(headerFile)) {
  const headerContent = fs.readFileSync(headerFile, 'utf8');
  
  if (headerContent.includes('/search?q=') || headerContent.includes('/search')) {
    pass('Header component includes search functionality');
  } else {
    fail('Header missing search functionality', 'Add search input that routes to /search');
  }
  
  if (headerContent.includes('useRouter')) {
    pass('Header uses Next.js router for search navigation');
  } else {
    warn('Header may not use proper routing', 'Check search implementation');
  }
}

// Test 3.3: Search index exists
const searchIndexPath = path.join(__dirname, '..', 'public/search-index.json');
if (fs.existsSync(searchIndexPath)) {
  pass('Search index file exists');
  
  try {
    const searchIndex = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
    if (Array.isArray(searchIndex) && searchIndex.length > 0) {
      pass(`Search index contains ${searchIndex.length} indexed pages`);
      
      // Check index structure
      const firstEntry = searchIndex[0];
      if (firstEntry.title && firstEntry.url && firstEntry.description) {
        pass('Search index has proper structure (title, url, description)');
      } else {
        warn('Search index may have incomplete structure', 'Verify all entries have title, url, description');
      }
    } else {
      fail('Search index is empty', 'Index should contain page data');
    }
  } catch (error) {
    fail('Search index is invalid JSON', error.message);
  }
} else {
  fail('Search index not found', 'Create public/search-index.json');
}

console.log('');

// ============================================================================
// PHASE 4: AEO Optimization
// ============================================================================

console.log('📋 PHASE 4: AEO Optimization\n');

// Test 4.1: Check AEO blocks on exercise pages
const exercisePages = [
  'exercises/chin-tucks/page.js',
  'exercises/wall-angels/page.js',
  'exercises/doorway-pec-stretch/page.js',
  'exercises/upper-back-foam-rolling/page.js',
  'exercises/y-t-w-raises/page.js'
];

let exercisesWithShortAnswer = 0;
let exercisesWithKeyTakeaways = 0;

exercisePages.forEach(pagePath => {
  const fullPath = path.join(APP_DIR, pagePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    if (content.includes('short-answer') || content.includes('Short Answer')) {
      exercisesWithShortAnswer++;
    }
    
    if (content.includes('key-takeaways') || content.includes('Key Takeaways')) {
      exercisesWithKeyTakeaways++;
    }
  }
});

if (exercisesWithShortAnswer === exercisePages.length) {
  pass(`All ${exercisePages.length} exercise pages have Short Answer blocks`);
} else {
  fail(`Only ${exercisesWithShortAnswer}/${exercisePages.length} exercise pages have Short Answer`, 'Add Short Answer blocks to remaining pages');
}

if (exercisesWithKeyTakeaways === exercisePages.length) {
  pass(`All ${exercisePages.length} exercise pages have Key Takeaways blocks`);
} else {
  fail(`Only ${exercisesWithKeyTakeaways}/${exercisePages.length} exercise pages have Key Takeaways`, 'Add Key Takeaways blocks to remaining pages');
}

// Test 4.2: Check main pages have AEO blocks
const mainPages = [
  'neck-hump-guide/page.tsx',
  'best-pillow-for-neck-hump/page.js',
  'page.js' // Homepage
];

let mainPagesWithAEO = 0;

mainPages.forEach(pagePath => {
  const fullPath = path.join(APP_DIR, pagePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    if ((content.includes('Short Answer') || content.includes('short-answer')) &&
        (content.includes('Key Takeaways') || content.includes('key-takeaways'))) {
      mainPagesWithAEO++;
    }
  }
});

if (mainPagesWithAEO >= 2) {
  pass(`${mainPagesWithAEO}/${mainPages.length} sampled main pages have AEO blocks`);
} else {
  warn(`Only ${mainPagesWithAEO}/${mainPages.length} sampled main pages have AEO blocks`, 'Consider adding to all priority pages');
}

console.log('');

// ============================================================================
// PHASE 5: Link Validation
// ============================================================================

console.log('📋 PHASE 5: Link Validation\n');

// Test 5.1: Link validation script exists
const linkValidationScriptPath = path.join(__dirname, 'validate-links.js');
if (fs.existsSync(linkValidationScriptPath)) {
  pass('Link validation script exists');
  
  try {
    const script = require(linkValidationScriptPath);
    if (typeof script.validateLinks === 'function' || typeof script.extractInternalLinks === 'function') {
      pass('Link validation script exports functional API');
    }
  } catch (error) {
    warn('Could not verify link validation script functionality', 'Manual test recommended');
  }
} else {
  fail('Link validation script not found', 'Create scripts/validate-links.js');
}

console.log('');

// ============================================================================
// PHASE 6: Performance Optimization
// ============================================================================

console.log('📋 PHASE 6: Performance Optimization\n');

// Test 6.1: No <img> tags (should use next/image)
let imgTagFound = false;
const scanDirs = [APP_DIR, COMPONENTS_DIR];

function scanForImgTags(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      scanForImgTags(fullPath);
    } else if (entry.isFile() && /\.(js|jsx|tsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (/<img\s/.test(content)) {
        imgTagFound = true;
        console.log(`   Found <img> tag in: ${path.relative(process.cwd(), fullPath)}`);
      }
    }
  }
}

scanForImgTags(APP_DIR);
scanForImgTags(COMPONENTS_DIR);

if (!imgTagFound) {
  pass('No <img> tags found - using Next.js Image component');
} else {
  fail('Found <img> tags', 'Replace with next/image for better performance');
}

// Test 6.2: Font optimization
if (layoutContent.includes('next/font')) {
  pass('Using next/font for optimized font loading');
} else if (layoutContent.includes('system-ui') || layoutContent.includes('font-family: system')) {
  pass('Using system fonts (optimal performance, no web font loading)');
} else if (layoutContent.includes('fonts.googleapis.com')) {
  warn('Using Google Fonts CDN', 'Consider migrating to next/font or system fonts');
} else {
  warn('Could not determine font strategy', 'Manual check recommended');
}

console.log('');

// ============================================================================
// SEO REQUIREMENTS CHECK
// ============================================================================

console.log('📋 SEO REQUIREMENTS VERIFICATION\n');

// Test: Canonical URLs
let pagesWithCanonical = 0;
let pagesTotal = 0;

function checkCanonicals(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      checkCanonicals(fullPath, baseDir);
    } else if (entry.isFile() && /^page\.(js|tsx)$/.test(entry.name)) {
      pagesTotal++;
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('canonical:') || content.includes('canonical =')) {
        pagesWithCanonical++;
      }
    }
  }
}

checkCanonicals(APP_DIR);

const canonicalPercentage = Math.round((pagesWithCanonical / pagesTotal) * 100);
if (canonicalPercentage >= 95) {
  pass(`${pagesWithCanonical}/${pagesTotal} pages (${canonicalPercentage}%) have canonical URLs`);
} else if (canonicalPercentage >= 80) {
  warn(`${pagesWithCanonical}/${pagesTotal} pages (${canonicalPercentage}%) have canonical URLs`, 'Should be 100% for optimal SEO');
} else {
  fail(`Only ${pagesWithCanonical}/${pagesTotal} pages (${canonicalPercentage}%) have canonical URLs`, 'All pages should have canonical URLs');
}

console.log('');

// ============================================================================
// AEO REQUIREMENTS CHECK
// ============================================================================

console.log('📋 AEO REQUIREMENTS VERIFICATION\n');

// Count pages with AEO elements
let pagesWithSpeakable = 0;
let pagesWithFAQSchema = 0;

function checkAEOElements(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      checkAEOElements(fullPath);
    } else if (entry.isFile() && /^page\.(js|tsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      if (content.includes('speakable') || content.includes('SpeakableSpecification')) {
        pagesWithSpeakable++;
      }
      
      if (content.includes('"@type": "FAQPage"')) {
        pagesWithFAQSchema++;
      }
    }
  }
}

checkAEOElements(APP_DIR);

if (pagesWithSpeakable > 0) {
  pass(`${pagesWithSpeakable} pages have speakable schema (voice assistant optimization)`);
} else {
  warn('No pages with speakable schema', 'Consider adding to main content pages for voice search');
}

if (pagesWithFAQSchema >= 5) {
  pass(`${pagesWithFAQSchema} pages have FAQPage schema`);
} else {
  warn(`Only ${pagesWithFAQSchema} pages have FAQPage schema`, 'Add to pages with Q&A sections');
}

console.log('');

// ============================================================================
// SUMMARY
// ============================================================================

console.log('═'.repeat(80));
console.log('📊 VERIFICATION SUMMARY\n');

const total = passed + failed + warnings;
const passRate = Math.round((passed / total) * 100);

console.log(`   ✅ Passed:   ${passed}/${total} (${passRate}%)`);
console.log(`   ❌ Failed:   ${failed}/${total}`);
console.log(`   ⚠️  Warnings: ${warnings}/${total}`);
console.log('');

if (failed === 0 && warnings === 0) {
  console.log('🎉 EXCELLENT: All implementations verified and contributing to SEO/AEO goals!\n');
} else if (failed === 0) {
  console.log('✅ GOOD: All critical tests passed. Review warnings for optional improvements.\n');
} else if (failed <= 3) {
  console.log('⚠️  NEEDS WORK: Some implementations missing or incomplete.\n');
} else {
  console.log('❌ ATTENTION REQUIRED: Multiple implementations need fixes.\n');
}

console.log('💡 Next Steps:');
if (failed > 0) {
  console.log('   1. Fix failed tests');
}
if (warnings > 0) {
  console.log('   2. Review warnings for additional optimizations');
}
console.log('   3. Run: npm run build');
console.log('   4. Test locally: npm run dev');
console.log('   5. Deploy to production');
console.log('');

process.exit(failed > 0 ? 1 : 0);

