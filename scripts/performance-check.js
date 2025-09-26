#!/usr/bin/env node

/**
 * Core Web Vitals Performance Monitor
 * Run this script to check performance metrics
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runPerformanceAudit(url = 'http://localhost:3000') {
  console.log(`🚀 Running performance audit on ${url}...`);
  
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'seo', 'accessibility'],
    port: chrome.port,
  };

  try {
    const runnerResult = await lighthouse(url, options);
    const report = runnerResult.lhr;
    
    console.log('\n=== CORE WEB VITALS ===');
    console.log(`Performance Score: ${(report.categories.performance.score * 100).toFixed(0)}/100`);
    console.log(`LCP: ${report.audits['largest-contentful-paint'].displayValue}`);
    console.log(`FCP: ${report.audits['first-contentful-paint'].displayValue}`);
    console.log(`CLS: ${report.audits['cumulative-layout-shift'].displayValue}`);
    console.log(`Speed Index: ${report.audits['speed-index'].displayValue}`);
    
    console.log('\n=== OTHER SCORES ===');
    console.log(`SEO: ${(report.categories.seo.score * 100).toFixed(0)}/100`);
    console.log(`Accessibility: ${(report.categories.accessibility.score * 100).toFixed(0)}/100`);
    
    // Performance recommendations
    console.log('\n=== RECOMMENDATIONS ===');
    const opportunities = report.audits;
    
    if (opportunities['largest-contentful-paint'].score < 0.9) {
      console.log('🔴 LCP needs improvement - Consider optimizing hero content');
    } else {
      console.log('✅ LCP is good');
    }
    
    if (opportunities['cumulative-layout-shift'].score < 0.9) {
      console.log('🔴 CLS needs improvement - Avoid layout shifts');
    } else {
      console.log('✅ CLS is good');
    }
    
    if (opportunities['first-contentful-paint'].score < 0.9) {
      console.log('🔴 FCP needs improvement - Optimize critical resources');
    } else {
      console.log('✅ FCP is good');
    }
    
  } catch (error) {
    console.error('Error running audit:', error);
  } finally {
    await chrome.kill();
  }
}

// Run the audit
const url = process.argv[2] || 'http://localhost:3000';
runPerformanceAudit(url);
