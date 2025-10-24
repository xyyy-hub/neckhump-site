# PostureTips.com Setup Guide

**Date:** October 24, 2025  
**Status:** Week 1 - Foundation Setup

---

## STEP 1: VERCEL PROJECT SETUP

### 1.1 Create New Vercel Project

**Action Items:**
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import from Git (will create after project clone)
4. OR manually deploy after local setup

### 1.2 Domain Configuration

**Domain:** posturetips.com

**DNS Settings (at domain registrar):**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**Vercel Settings:**
1. Go to Project Settings → Domains
2. Add domain: `posturetips.com`
3. Add domain: `www.posturetips.com`
4. Verify DNS propagation (can take 24-48 hours)

### 1.3 SSL Certificate
- Vercel auto-provisions SSL certificates
- Wait for DNS propagation
- Verify HTTPS works

---

## STEP 2: GOOGLE SERVICES SETUP

### 2.1 Google Analytics (GA4)

**Create Property:**
1. Go to https://analytics.google.com
2. Admin → Create Property
3. Property name: "PostureTips.com"
4. Time zone: Your timezone
5. Currency: USD (or your preference)

**Get Measurement ID:**
- Will look like: `G-XXXXXXXXXX`
- Save for Next.js configuration

**Add to Next.js:**
```javascript
// app/layout.js
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 2.2 Google Search Console

**Add Property:**
1. Go to https://search.google.com/search-console
2. Add property → Domain property: `posturetips.com`
3. Verify via DNS TXT record OR HTML file upload

**DNS TXT Record Verification (Recommended):**
```
Type: TXT
Name: @
Value: google-site-verification=XXXXXXXXXXXXX
```

**Submit Sitemap:**
1. After site launch: GSC → Sitemaps
2. Submit: `https://www.posturetips.com/sitemap.xml`

---

## STEP 3: ENVIRONMENT VARIABLES

Create `.env.local` file:
```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.posturetips.com
NEXT_PUBLIC_SITE_NAME=PostureTips.com

# Optional: If using any APIs
# API_KEY=your-api-key-here
```

**Add to Vercel:**
1. Project Settings → Environment Variables
2. Add each variable
3. Apply to: Production, Preview, Development

---

## STEP 4: BRAND IDENTITY CHECKLIST

### Logo Design
- [ ] Create simple, friendly logo
- [ ] Export as SVG (scalable)
- [ ] Save to `/public/logo.svg`
- [ ] Create favicon sizes (16x16, 32x32, 192x192)

### Color Palette (Friendly, Approachable)
```css
/* Primary Colors */
--primary-green: #10b981;  /* Emerald green - growth, health */
--primary-blue: #3b82f6;   /* Bright blue - trust, calm */

/* Secondary Colors */
--secondary-teal: #14b8a6; /* Teal - balance */
--secondary-sky: #0ea5e9;  /* Sky blue - openness */

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-600: #4b5563;
--gray-900: #111827;

/* Background */
--bg-primary: #ffffff;
--bg-secondary: #f9fafb;

/* Text */
--text-primary: #111827;
--text-secondary: #4b5563;
```

### Typography
```css
/* Headings: Clean, modern */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Body: Readable, friendly */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

---

## STEP 5: HEADER & FOOTER CUSTOMIZATION

### Header Component Changes (vs neckhump.com)
- Logo: Friendly, rounded design (vs clinical)
- Colors: Green/blue palette (vs neutral medical)
- Navigation: "Tips", "Guides", "Setup" (vs "Exercises", "Treatment")
- Tone: Encouraging, accessible (vs medical, authoritative)

### Footer Component Changes
- Remove medical disclaimer (not YMYL like neckhump)
- Add: "About", "Contact", "Privacy", "Terms"
- Social links: Optional (not required for SEO-only strategy)
- Copyright: "© 2025 PostureTips.com"

---

## STEP 6: DEPLOYMENT CHECKLIST

Before launching posturetips.com:

**Content:**
- [ ] 15 pages minimum written
- [ ] All pages have canonical URLs
- [ ] All pages have meta titles/descriptions
- [ ] FAQ schema added (10+ questions per page)
- [ ] Internal links added (5-8 per page)

**Technical:**
- [ ] sitemap.xml generated
- [ ] robots.txt created
- [ ] Vercel deployment successful
- [ ] DNS propagated (test with https://dnschecker.org)
- [ ] HTTPS certificate active
- [ ] Core Web Vitals passing (Lighthouse >90)

**SEO:**
- [ ] Google Analytics tracking
- [ ] Google Search Console verified
- [ ] Sitemap submitted to GSC
- [ ] Request indexing for 5 key pages

**QA:**
- [ ] Mobile responsive (test all breakpoints)
- [ ] All links work (no 404s)
- [ ] Forms work (if any)
- [ ] No console errors
- [ ] Copyscape check (100% unique vs neckhump.com)

---

## STEP 7: POST-LAUNCH MONITORING

**Week 1:**
- [ ] Check GSC for indexing status
- [ ] Verify Analytics tracking
- [ ] Monitor for any errors
- [ ] Check mobile usability

**Week 2:**
- [ ] Review initial traffic (if any)
- [ ] Check for crawl errors
- [ ] Verify sitemap processed

**Month 1:**
- [ ] First keyword rankings check
- [ ] GSC cannibalization review
- [ ] Traffic analysis
- [ ] Plan Month 2 content

---

## CRITICAL: AVOID THESE MISTAKES

❌ **DO NOT:**
1. Copy-paste content from neckhump.com
2. Use same color scheme as neckhump.com
3. Add cross-links in Month 1 (wait until Month 3)
4. Rush launch without QA
5. Forget to add canonical URLs
6. Skip Copyscape check

✅ **DO:**
1. Create completely unique content
2. Use different brand identity
3. Focus on general prevention (not medical)
4. Launch with minimum 15 solid pages
5. Set up proper tracking from day 1
6. Monitor for cannibalization monthly

---

## TIMELINE ESTIMATE

| Task | Time Required | Status |
|------|--------------|--------|
| Vercel setup | 30 min | Pending |
| DNS configuration | 15 min (+ 24h propagation) | Pending |
| GA4 setup | 15 min | Pending |
| GSC setup | 15 min | Pending |
| Logo design | 2 hours | Pending |
| Color/typography | 1 hour | Pending |
| Header customization | 1 hour | Pending |
| Footer customization | 30 min | Pending |
| Environment variables | 15 min | Pending |
| **TOTAL (active work)** | **~6 hours** | **Week 1** |

---

## CONTACT INFORMATION

**Domain Registrar:** [Where you bought posturetips.com]  
**Hosting:** Vercel  
**DNS Provider:** [Your registrar or Cloudflare]

**Support Resources:**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GA4 Setup: https://support.google.com/analytics
- GSC Help: https://support.google.com/webmasters

---

**Status:** ⏳ In Progress  
**Next Step:** Clone neckhump.com project structure

