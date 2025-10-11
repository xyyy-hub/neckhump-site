#!/usr/bin/env node

/**
 * Add dateModified to Article/HowTo schemas
 * 
 * Scans pages with Article or HowTo schemas and adds dateModified field
 * Uses file modification time as the date
 * 
 * Usage: node scripts/add-datemodified.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const APP_DIR = path.join(__dirname, '..', 'app');

/**
 * Get last git commit date for a file, fallback to file mtime
 */
function getLastModifiedDate(filePath) {
  try {
    // Try to get last commit date from git
    const command = `git log -1 --format=%cI -- "${filePath}"`;
    const gitDate = execSync(command, { encoding: 'utf8' }).trim();
    if (gitDate) {
      return new Date(gitDate);
    }
  } catch (error) {
    // Fallback to file modification time
  }
  
  const stats = fs.statSync(filePath);
  return stats.mtime;
}

/**
 * Check if schema already has dateModified
 */
function hasDateModified(content) {
  return /["']dateModified["']\s*:/.test(content);
}

/**
 * Add dateModified to Article schema
 */
function addDateModifiedToArticle(content, dateModified) {
  // Pattern: Find Article schema with datePublished
  const articlePattern = /("@type":\s*"Article",[\s\S]*?"datePublished":\s*"[^"]+",)/;
  
  if (articlePattern.test(content)) {
    return content.replace(
      articlePattern,
      `$1\n                  "dateModified": "${dateModified}",`
    );
  }
  
  // Fallback: Add after @type if no datePublished found
  const fallbackPattern = /("@type":\s*"Article",)/;
  if (fallbackPattern.test(content)) {
    return content.replace(
      fallbackPattern,
      `$1\n                  "dateModified": "${dateModified}",`
    );
  }
  
  return content;
}

/**
 * Add dateModified to HowTo schema
 */
function addDateModifiedToHowTo(content, dateModified) {
  // Pattern: Find HowTo schema
  const howToPattern = /("@type":\s*"HowTo",)/;
  
  if (howToPattern.test(content)) {
    return content.replace(
      howToPattern,
      `$1\n                  "dateModified": "${dateModified}",`
    );
  }
  
  return content;
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if already has dateModified
  if (hasDateModified(content)) {
    console.log(`⏭️  ${relativePath} - Already has dateModified`);
    return false;
  }
  
  // Check if has Article or HowTo schema
  const hasArticle = /"@type":\s*"Article"/.test(content);
  const hasHowTo = /"@type":\s*"HowTo"/.test(content);
  
  if (!hasArticle && !hasHowTo) {
    console.log(`⚠️  ${relativePath} - No Article or HowTo schema found`);
    return false;
  }
  
  // Get last modified date
  const lastModified = getLastModifiedDate(filePath);
  const dateModified = lastModified.toISOString();
  
  let modified = false;
  let updatedContent = content;
  
  // Add to Article schemas
  if (hasArticle) {
    updatedContent = addDateModifiedToArticle(updatedContent, dateModified);
    if (updatedContent !== content) {
      modified = true;
      console.log(`✅ ${relativePath} - Added dateModified to Article (${dateModified.split('T')[0]})`);
    }
  }
  
  // Add to HowTo schemas
  if (hasHowTo) {
    const beforeHowTo = updatedContent;
    updatedContent = addDateModifiedToHowTo(updatedContent, dateModified);
    if (updatedContent !== beforeHowTo) {
      modified = true;
      console.log(`✅ ${relativePath} - Added dateModified to HowTo (${dateModified.split('T')[0]})`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, updatedContent);
    return true;
  } else {
    console.log(`⚠️  ${relativePath} - Could not add dateModified (check schema format)`);
    return false;
  }
}

/**
 * Find all page files recursively
 */
function findPageFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (entry.isFile() && /^page\.(js|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Adding dateModified to Article/HowTo schemas\n');
  
  const pageFiles = findPageFiles(APP_DIR);
  console.log(`📄 Found ${pageFiles.length} page files\n`);
  
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const filePath of pageFiles) {
    try {
      const result = processFile(filePath);
      if (result) {
        processedCount++;
      } else {
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${path.relative(process.cwd(), filePath)}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Files processed: ${processedCount}`);
  console.log(`   Files skipped: ${skippedCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log('');
  
  if (processedCount > 0) {
    console.log('✅ Success! Run your build to verify:\n   npm run build\n');
  }
}

// Run
if (require.main === module) {
  main();
}

module.exports = { processFile, getLastModifiedDate };

