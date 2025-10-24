# Vercel Setup for PostureTips.com - Detailed Instructions

**Created:** October 24, 2025  
**Purpose:** Step-by-step Vercel deployment guide  
**Status:** Ready to execute

---

## PREREQUISITES

**What You Need:**
- [ ] Vercel account (free tier works)
- [ ] Domain posturetips.com purchased and accessible
- [ ] Git/GitHub account
- [ ] Terminal access
- [ ] Node.js installed (v18+ recommended)

**Time Estimate:** 30-45 minutes total

---

## PHASE 1: CREATE NEW PROJECT REPOSITORY

### Step 1: Clone neckhump.com Structure

```bash
# Navigate to your projects directory
cd /Users/thxu/Desktop/cursor-workspace/projects/

# Create new directory for posturetips.com
mkdir posture-tips-site
cd posture-tips-site

# Initialize new Git repository
git init

# Create .gitignore
cat > .gitignore << 'EOF'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF
```

### Step 2: Copy Core Files from neckhump.com

```bash
# Copy package.json and modify
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/package.json ./

# Copy configuration files
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/next.config.js ./
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/postcss.config.js ./
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/tsconfig.json ./

# Copy and customize tailwind config (we'll modify this)
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/tailwind.config.js ./
```

### Step 3: Update package.json

Open `package.json` and update the name:

```json
{
  "name": "posture-tips-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.13",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4"
  }
}
```

### Step 4: Create Basic Directory Structure

```bash
# Create app directory structure
mkdir -p app
mkdir -p components
mkdir -p public

# Create basic globals.css
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
EOF
```

### Step 5: Update tailwind.config.js with Brand Colors

```bash
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
EOF
```

### Step 6: Create Minimal Homepage for Testing

```bash
# Create root layout
cat > app/layout.js << 'EOF'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'PostureTips.com - Improve Your Posture Naturally',
  description: 'Practical tips for better posture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
EOF

# Create homepage
cat > app/page.js << 'EOF'
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          <span className="text-primary-600">Posture</span>
          <span className="text-secondary-600">Tips</span>
        </h1>
        <p className="text-xl text-gray-600">
          Coming Soon
        </p>
      </div>
    </main>
  )
}
EOF
```

### Step 7: Install Dependencies and Test Locally

```bash
# Install all dependencies
npm install

# Test local development server
npm run dev
```

**Expected Result:** Site runs at `http://localhost:3000` with "PostureTips Coming Soon" message

**Troubleshooting:**
- If port 3000 is busy: `npm run dev -- -p 3001`
- If node version error: Update Node.js to v18 or higher
- If dependency errors: Delete `node_modules/` and `package-lock.json`, then run `npm install` again

### Step 8: Create GitHub Repository

```bash
# Add all files
git add .

# Initial commit
git commit -m "Initial commit: PostureTips.com foundation"

# Create repository on GitHub (do this via GitHub website):
# 1. Go to https://github.com/new
# 2. Repository name: posture-tips-site
# 3. Description: "PostureTips.com - Practical posture improvement tips"
# 4. Set to Private
# 5. Do NOT initialize with README (we already have code)
# 6. Create repository

# After creating on GitHub, link and push:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/posture-tips-site.git
git push -u origin main
```

**✅ Checkpoint:** Code is now on GitHub and ready for Vercel deployment

---

## PHASE 2: DEPLOY TO VERCEL

### Step 1: Log in to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Sign in with GitHub (recommended for easy imports)

### Step 2: Import GitHub Repository

1. From Vercel dashboard, click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find `posture-tips-site` in your repo list
4. Click **"Import"**

### Step 3: Configure Project Settings

**Framework Preset:** Next.js (should auto-detect)

**Root Directory:** `./` (default)

**Build Settings:**
- Build Command: `next build` (default)
- Output Directory: `.next` (default)
- Install Command: `npm install` (default)

**Environment Variables:** None needed yet (add later for analytics)

**Domain:** Leave default for now (we'll add custom domain next)

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete

**Expected Result:**
- Build succeeds
- Site is live at `https://posture-tips-site.vercel.app` (or similar)
- You can visit the URL and see "PostureTips Coming Soon"

**Troubleshooting:**
- Build fails with "Module not found": Check `package.json` dependencies
- Build fails with syntax error: Check Next.js version compatibility
- Deployment succeeds but shows blank page: Check browser console for errors

**✅ Checkpoint:** Site is live on Vercel default domain

---

## PHASE 3: ADD CUSTOM DOMAIN

### Step 1: Add Domain in Vercel

1. From your project dashboard, click **"Settings"**
2. Click **"Domains"** in left sidebar
3. Enter `posturetips.com` in the domain field
4. Click **"Add"**

### Step 2: Configure DNS Records

Vercel will show you DNS records to add. You need to add these to your domain registrar:

**If using www as primary (RECOMMENDED):**

Add these records at your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Step-by-Step for Common Registrars:**

**Namecheap:**
1. Log in to Namecheap
2. Go to Domain List → Manage
3. Click "Advanced DNS"
4. Delete any existing A or CNAME records for @ and www
5. Add new records as shown above
6. Save changes

**GoDaddy:**
1. Log in to GoDaddy
2. My Products → DNS
3. Delete existing A or CNAME for @ and www
4. Add new records
5. Save

**Cloudflare:**
1. Log in to Cloudflare
2. Select domain
3. Go to DNS settings
4. Delete any proxy records (orange cloud)
5. Add records as shown above
6. Click "Save"

### Step 3: Set Primary Domain

Back in Vercel:
1. After DNS propagates (5-60 minutes), domain status changes to "Valid"
2. Click the three dots `...` next to `www.posturetips.com`
3. Click **"Set as Primary Domain"**
4. Vercel will auto-redirect `posturetips.com` → `www.posturetips.com`

### Step 4: Verify SSL Certificate

1. Wait 5-10 minutes after DNS validation
2. Visit `https://www.posturetips.com`
3. Check for green padlock (SSL working)
4. Visit `https://posturetips.com` (should redirect to www)

**Troubleshooting:**
- "Domain not verified" after 24 hours: Check DNS records match exactly
- SSL certificate error: Wait longer, SSL can take up to 24 hours
- Redirect loop: Clear browser cache or try incognito mode
- "Domain already in use": Domain might be linked to another Vercel account

**✅ Checkpoint:** Site is live at www.posturetips.com with SSL

---

## PHASE 4: CONFIGURE ANALYTICS AND SEO

### Step 1: Set Up Google Analytics 4

1. Go to https://analytics.google.com
2. Click "Admin" (gear icon bottom left)
3. Click "+ Create Property"
4. Property name: "PostureTips.com"
5. Select timezone and currency
6. Click "Next"
7. Business details: Select "Small" and relevant category
8. Click "Create"
9. Choose platform: "Web"
10. Set up data stream:
    - Website URL: `https://www.posturetips.com`
    - Stream name: "PostureTips.com"
11. Click "Create stream"
12. Copy "Measurement ID" (format: G-XXXXXXXXXX)

### Step 2: Add Google Analytics to Site

Add to `app/layout.js` in the `<head>` section:

```javascript
// Add this to the metadata export or in a separate component
<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

**Better approach:** Store in environment variable

Add to Vercel project settings:
1. Settings → Environment Variables
2. Add variable:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
3. Save

Then in code, reference: `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Step 3: Set Up Google Search Console

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix" method
4. Enter: `https://www.posturetips.com`
5. Verification method: **HTML file** (easiest)
6. Download verification file (e.g., `google1234567890abcdef.html`)
7. Add file to `/public/` directory in your project
8. Commit and push to GitHub:
   ```bash
   git add public/google1234567890abcdef.html
   git commit -m "Add Google Search Console verification"
   git push
   ```
9. Wait for Vercel to deploy (~2 minutes)
10. Go back to GSC and click "Verify"

**✅ Verification should succeed**

### Step 4: Submit Sitemap to GSC

1. Create basic sitemap at `app/sitemap.js`:

```javascript
export default function sitemap() {
  const baseUrl = 'https://www.posturetips.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
```

2. Commit and push:
   ```bash
   git add app/sitemap.js
   git commit -m "Add sitemap"
   git push
   ```

3. After deployment, visit `https://www.posturetips.com/sitemap.xml` to verify

4. In Google Search Console:
   - Click "Sitemaps" in left sidebar
   - Enter: `sitemap.xml`
   - Click "Submit"

**✅ Sitemap submitted**

### Step 5: Create robots.txt

Add file `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://www.posturetips.com/sitemap.xml
```

Commit and push:
```bash
git add public/robots.txt
git commit -m "Add robots.txt"
git push
```

**✅ Checkpoint:** Analytics and GSC configured

---

## PHASE 5: PERFORMANCE OPTIMIZATION

### Step 1: Configure Next.js Image Optimization

Already enabled by default in Next.js 14. No action needed.

### Step 2: Add Metadata for SEO

Update `app/layout.js`:

```javascript
export const metadata = {
  metadataBase: new URL('https://www.posturetips.com'),
  title: {
    default: 'PostureTips.com - Improve Your Posture Naturally',
    template: '%s | PostureTips.com',
  },
  description: 'Practical, evidence-based tips to improve your posture at home, work, and everywhere else. Simple daily habits for better health.',
  keywords: ['posture tips', 'improve posture', 'desk ergonomics', 'posture exercises'],
  authors: [{ name: 'PostureTips.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.posturetips.com',
    siteName: 'PostureTips.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PostureTips.com - Improve Your Posture Naturally',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
}
```

### Step 3: Test Core Web Vitals

1. Visit https://pagespeed.insights.google.com
2. Enter: `https://www.posturetips.com`
3. Click "Analyze"

**Target Scores:**
- Performance: 90+ (green)
- Accessibility: 90+ (green)
- Best Practices: 90+ (green)
- SEO: 90+ (green)

**Common issues and fixes:**
- Low performance: Optimize images, reduce JavaScript
- Low accessibility: Add alt text, improve color contrast
- Low SEO: Add meta descriptions, improve heading structure

### Step 4: Enable Vercel Speed Insights (Optional but Recommended)

1. In Vercel project settings, go to "Speed Insights"
2. Click "Enable"
3. Add package to your project:
   ```bash
   npm install @vercel/speed-insights
   ```
4. Add to layout:
   ```javascript
   import { SpeedInsights } from '@vercel/speed-insights/next'
   
   // Inside <body> tag
   <SpeedInsights />
   ```
5. Commit and push

**✅ Checkpoint:** Site optimized for performance

---

## PHASE 6: FINAL VERIFICATION

### Checklist

**Domain & Hosting:**
- [ ] Site loads at `https://www.posturetips.com`
- [ ] `https://posturetips.com` redirects to www
- [ ] SSL certificate valid (green padlock)
- [ ] No mixed content warnings

**SEO:**
- [ ] Google Search Console verified
- [ ] Sitemap submitted to GSC
- [ ] robots.txt accessible
- [ ] Meta tags present (check view source)
- [ ] Canonical URL set

**Analytics:**
- [ ] Google Analytics tracking code present
- [ ] Real-time analytics showing visits (test by visiting site)
- [ ] GA4 tracking your own test visit

**Performance:**
- [ ] PageSpeed Insights score 90+ on all metrics
- [ ] Mobile responsive (test on phone or DevTools)
- [ ] Images optimized (if any added)
- [ ] Core Web Vitals passing

**Functionality:**
- [ ] All links work (none broken)
- [ ] All pages load correctly
- [ ] Forms work (if any)
- [ ] No console errors (check browser DevTools)

### Test URLs to Verify

- `https://www.posturetips.com` → Homepage loads
- `https://posturetips.com` → Redirects to www
- `https://www.posturetips.com/sitemap.xml` → XML sitemap displays
- `https://www.posturetips.com/robots.txt` → robots.txt displays
- `https://www.posturetips.com/not-a-real-page` → 404 page works

---

## COMMON ISSUES & SOLUTIONS

### Issue: Build Fails on Vercel

**Symptoms:** Red "Failed" status in Vercel deployment

**Solutions:**
1. Check build logs in Vercel for error message
2. Test build locally: `npm run build`
3. Common fixes:
   - Missing dependencies: `npm install [package]`
   - Syntax errors: Check error line number
   - Next.js version mismatch: Update package.json

### Issue: Domain Won't Verify

**Symptoms:** "Invalid Configuration" in Vercel domains

**Solutions:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS records with: https://dnschecker.org
3. Ensure records match Vercel's requirements exactly
4. Try removing domain and re-adding
5. Contact domain registrar support if needed

### Issue: SSL Certificate Error

**Symptoms:** "Your connection is not private" browser warning

**Solutions:**
1. Wait 10-30 minutes for SSL provisioning
2. Clear browser cache and try incognito mode
3. Verify domain is validated in Vercel
4. Check that DNS is fully propagated
5. If persists after 24 hours, contact Vercel support

### Issue: Site Loads but Styling is Broken

**Symptoms:** Plain HTML with no CSS

**Solutions:**
1. Check that `globals.css` is imported in layout
2. Verify Tailwind is configured correctly
3. Check browser console for CSS load errors
4. Rebuild: `npm run build` then `npm start`

### Issue: Google Analytics Not Tracking

**Symptoms:** No data in GA4 dashboard

**Solutions:**
1. Wait 24-48 hours for data to appear
2. Test in GA4 real-time reports (visit site, check if shown)
3. Verify Measurement ID is correct
4. Check browser console for GA errors
5. Ensure ad blockers disabled when testing
6. Verify Script component is in layout

---

## NEXT STEPS AFTER SETUP

### Week 2: Brand Identity
- [ ] Design logo (text-based or icon)
- [ ] Create favicons (use https://realfavicongenerator.net)
- [ ] Create og-image.png (1200x630)
- [ ] Implement Header and Footer components
- [ ] Customize color scheme

### Week 3-4: Content Creation
- [ ] Write homepage
- [ ] Write 5 pillar pages
- [ ] Write 10 category articles
- [ ] Add internal linking
- [ ] Implement structured data (FAQ, Article schemas)

### Month 2: Launch Preparation
- [ ] Run Copyscape on all content
- [ ] Verify all internal links work
- [ ] Test mobile responsiveness
- [ ] Check Core Web Vitals
- [ ] Get feedback from test users

### Launch Day:
- [ ] Submit all pages for indexing in GSC
- [ ] Monitor GA4 for traffic
- [ ] Check GSC for crawl errors
- [ ] Celebrate! 🎉

---

## SUPPORT RESOURCES

**Vercel Documentation:**
- https://vercel.com/docs
- https://vercel.com/docs/concepts/projects/domains

**Next.js Documentation:**
- https://nextjs.org/docs

**Google Search Console Help:**
- https://support.google.com/webmasters

**Google Analytics Help:**
- https://support.google.com/analytics

**Community Support:**
- Vercel Discord: https://vercel.com/discord
- Next.js GitHub Discussions: https://github.com/vercel/next.js/discussions

---

## ESTIMATED COSTS

**Free Tier (Current Plan):**
- Vercel: Free (100 GB bandwidth, unlimited builds)
- Google Analytics: Free
- Google Search Console: Free
- SSL Certificate: Free (auto-provisioned by Vercel)

**Only Cost:**
- Domain registration: ~$10-15/year (posturetips.com)

**Total Monthly Cost:** $0 (until hitting bandwidth limits)

---

**Status:** ✅ Complete setup guide ready  
**Execution Time:** 30-45 minutes  
**Next Action:** Begin Phase 1 when ready to deploy




