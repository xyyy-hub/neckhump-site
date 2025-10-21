# Deployment Verification Checklist
**Purpose:** Ensure SEO/AEO implementation works correctly in production  
**Date Created:** January 21, 2025  
**Complete this checklist BEFORE submitting to GSC**

---

## ✅ PRE-DEPLOYMENT CHECKS (Local/Staging)

### 1. Build & Compile Check
- [ ] Run `npm run build` successfully (no errors)
- [ ] Run `npm run start` and site loads at localhost:3000
- [ ] Check console for JavaScript errors (should be none)
- [ ] Verify all pages render without breaking

**Command to run:**
```bash
npm run build && npm run start
```

### 2. New Pages Accessible
- [ ] Visit `http://localhost:3000/help/product-questions/side-sleeper-pillow-guide`
- [ ] Visit `http://localhost:3000/help/product-questions/foam-roller-complete-guide`
- [ ] Both pages load correctly with full content
- [ ] Images/styling render properly
- [ ] Mobile responsive (test with browser DevTools)

### 3. Redirects Work Locally
Test these URLs redirect to new comprehensive guides:

Old Pillow Pages → New Comprehensive Guide:
- [ ] `/help/product-questions/best-pillow-side-sleepers` → redirects
- [ ] `/help/product-questions/pillow-height-for-side-sleepers` → redirects
- [ ] `/help/product-questions/best-pillow-height-side-sleepers` → redirects

Old Foam Roller Pages → New Comprehensive Guide:
- [ ] `/help/product-questions/foam-roller-size-guide` → redirects
- [ ] `/help/product-questions/foam-roller-size-guide-neck` → redirects

**Note:** Redirects may only work in production with Next.js. If they don't work locally, that's expected.

### 4. Internal Links Check
Click through and verify these work:

From Homepage:
- [ ] Help center section loads with 12 links
- [ ] All 12 links are clickable and go to correct pages
- [ ] "Browse All 60+ Help Articles" button works

From Neck Hump Exercises Page:
- [ ] Help center section loads with 40+ links
- [ ] Spot check 10 random links work correctly
- [ ] Updated links point to new comprehensive guides (not old URLs)

From Posture Correction Guide:
- [ ] Help center section loads with 30+ links
- [ ] Spot check 10 random links work correctly

### 5. Sitemap Check
- [ ] Visit `http://localhost:3000/sitemap.xml`
- [ ] New comprehensive guide URLs appear in sitemap
- [ ] Old duplicate URLs removed from sitemap
- [ ] No XML errors (valid XML format)
- [ ] All URLs use `https://www.neckhump.com` format

### 6. Meta Tags & SEO Check
New comprehensive guides should have:
- [ ] Proper `<title>` tags (under 60 characters)
- [ ] Meta descriptions (under 160 characters)
- [ ] Canonical URLs pointing to www.neckhump.com
- [ ] Open Graph tags for social sharing

**Check using browser DevTools:**
1. Right-click → Inspect
2. Look at `<head>` section
3. Verify meta tags present

---

## 🚀 POST-DEPLOYMENT CHECKS (Production)

### 1. Production URLs Load
- [ ] Visit `https://www.neckhump.com/help/product-questions/side-sleeper-pillow-guide`
- [ ] Visit `https://www.neckhump.com/help/product-questions/foam-roller-complete-guide`
- [ ] Both pages load with HTTPS (not HTTP)
- [ ] No certificate warnings
- [ ] Content displays correctly

### 2. 301 Redirects Working (CRITICAL)
Use browser or redirect checker tool (redirectdetective.com):

Test Old → New Redirects:
- [ ] `https://www.neckhump.com/help/product-questions/best-pillow-side-sleepers` → 301 → new guide
- [ ] `https://www.neckhump.com/help/product-questions/pillow-height-for-side-sleepers` → 301 → new guide
- [ ] `https://www.neckhump.com/help/product-questions/best-pillow-height-side-sleepers` → 301 → new guide
- [ ] `https://www.neckhump.com/help/product-questions/foam-roller-size-guide` → 301 → new guide
- [ ] `https://www.neckhump.com/help/product-questions/foam-roller-size-guide-neck` → 301 → new guide

**Response Code MUST be 301** (not 302, 307, or meta refresh)

**How to check:**
```bash
curl -I https://www.neckhump.com/help/product-questions/best-pillow-side-sleepers
```
Look for: `HTTP/2 301` and `location:` header pointing to new URL

**Or use online tool:**
- https://httpstatus.io/
- https://www.redirect-checker.org/

### 3. Sitemap.xml Accessible
- [ ] Visit `https://www.neckhump.com/sitemap.xml`
- [ ] XML loads without errors
- [ ] New comprehensive guides appear in sitemap
- [ ] Old duplicate URLs removed
- [ ] All URLs show `https://www.neckhump.com` (not http or non-www)

### 4. Robots.txt Check
- [ ] Visit `https://www.neckhump.com/robots.txt`
- [ ] Sitemap URL listed: `Sitemap: https://www.neckhump.com/sitemap.xml`
- [ ] No accidental `Disallow: /help/` rules
- [ ] Help center is crawlable

### 5. Mobile Responsiveness (Production)
Test on actual mobile device or browser DevTools:
- [ ] Homepage help center section displays correctly on mobile
- [ ] Neck hump exercises help section displays correctly
- [ ] New comprehensive guides are mobile-friendly
- [ ] No horizontal scrolling issues
- [ ] Text is readable (not too small)
- [ ] Buttons/links are tappable (not too small)

**Test devices:**
- iPhone (Safari)
- Android phone (Chrome)
- Or use Chrome DevTools mobile emulation

### 6. Page Load Speed Check
Use PageSpeed Insights or GTmetrix:
- [ ] Homepage loads in <3 seconds
- [ ] New comprehensive guides load in <3 seconds
- [ ] Core Web Vitals pass (LCP <2.5s, FID <100ms, CLS <0.1)
- [ ] No new performance regressions

**Tools:**
- https://pagespeed.web.dev/
- https://gtmetrix.com/

### 7. Internal Links Working (Production)
- [ ] Click through 10-15 help center links from homepage
- [ ] All links go to correct destinations
- [ ] No 404 errors
- [ ] No broken links

### 8. Search Console Integration
- [ ] Sitemap submitted to GSC (if not already)
- [ ] No new errors appearing in GSC → Coverage report
- [ ] No mobile usability issues
- [ ] No security issues

---

## 🔍 ADVANCED VERIFICATION (Optional but Recommended)

### 1. Schema Markup Validation
- [ ] Test comprehensive guides with Rich Results Test
- [ ] No structured data errors
- [ ] FAQ schema valid (if present)

**Tool:** https://search.google.com/test/rich-results

### 2. Link Integrity Scan
Run a broken link checker on your site:
- [ ] No broken internal links
- [ ] All help center links resolve correctly
- [ ] No orphaned pages

**Tools:**
- https://www.brokenlinkcheck.com/
- Screaming Frog SEO Spider (desktop tool)

### 3. Canonical URL Consistency
- [ ] All pages have canonical tags
- [ ] All canonicals point to www.neckhump.com (not non-www)
- [ ] No conflicting canonical signals

### 4. Indexing Test (Pre-GSC Submission)
Search in Google for new pages:
- [ ] `site:neckhump.com/help/product-questions/side-sleeper-pillow-guide` (not indexed yet is normal)
- [ ] `site:neckhump.com` shows your site is indexed
- [ ] No unusual indexing issues

---

## 🚨 COMMON ISSUES & FIXES

### Issue 1: Redirects Return 404
**Symptom:** Old URLs show 404 error instead of redirecting  
**Fix:** 
- Check `next.config.js` redirects syntax
- Ensure `async redirects()` function is properly formatted
- Redeploy with `npm run build`

### Issue 2: New Pages Show 404
**Symptom:** Comprehensive guides return 404 error  
**Fix:**
- Verify files exist in `/app/help/product-questions/[page-name]/page.js`
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

### Issue 3: Sitemap Shows Old URLs
**Symptom:** Sitemap.xml still lists duplicate URLs  
**Fix:**
- Check `app/sitemap.js` file was updated correctly
- Redeploy application
- Wait 5-10 minutes for CDN cache to clear
- Force refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Issue 4: Internal Links Point to Old URLs
**Symptom:** Links still go to old duplicate pages  
**Fix:**
- Search all files for old URLs: `grep -r "best-pillow-side-sleepers" app/`
- Update any remaining references
- Old URLs will redirect, but better to update links directly

### Issue 5: Mobile Layout Breaks
**Symptom:** Help center sections overlap or don't display correctly on mobile  
**Fix:**
- Check responsive classes: `md:grid-cols-2 lg:grid-cols-3`
- Test with Chrome DevTools mobile emulation
- Adjust spacing/padding if needed

---

## 📋 SIGN-OFF

Once all checks pass, complete this sign-off:

**Deployment Date:** _________________

**Verified By:** _________________

**Production URL Tested:** ✅ / ❌

**Redirects Working:** ✅ / ❌

**Internal Links Working:** ✅ / ❌

**Sitemap Updated:** ✅ / ❌

**Mobile Responsive:** ✅ / ❌

**Ready for GSC Submission:** ✅ / ❌

---

## 🎯 NEXT STEP AFTER VERIFICATION

Once all checks pass:
1. ✅ Go to `GSC_SUBMISSION_PRIORITY_LIST.md`
2. ✅ Submit Day 1 priority URLs (10 URLs)
3. ✅ Start monitoring with `MONITORING_DASHBOARD.md`

---

**Estimated Time to Complete:** 30-45 minutes  
**Critical Items:** Redirects working (301), New pages load, Sitemap updated  
**Nice-to-Have:** Schema validation, Advanced link checks

