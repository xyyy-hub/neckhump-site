# Week 1 Setup Instructions - Action Items

**Status:** Documentation ✅ | Setup Tasks ⏳  
**Estimated Time:** 6 hours remaining  
**Dependencies:** External access to Vercel, domain registrar

---

## ✅ COMPLETED (Documentation Phase)

1. ✅ Keyword mapping spreadsheet created (185+ keywords)
2. ✅ Setup guide written (POSTURETIPS_SETUP_GUIDE.md)
3. ✅ Project status documented
4. ✅ Old files cleaned up (24 files deleted)
5. ✅ README updated for 2-domain strategy

---

## ⏳ REMAINING TASKS (Require External Access)

### TASK 1: Set Up Vercel Project (30 minutes)

**What you need:**
- Vercel account login
- posturetips.com domain purchased

**Steps:**

1. **Log in to Vercel**
   - Go to https://vercel.com/dashboard
   - Sign in with your account

2. **Create New Project**
   - Click "Add New..." → "Project"
   - Choose "Import Git Repository" (we'll create this in Task 3)
   - OR choose "Deploy with Template" → "Next.js"

3. **Project Settings**
   - Project Name: `posturetips`
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Environment Variables** (Add these now)
   ```
   NEXT_PUBLIC_GA_ID=(leave blank for now, add after Task 5)
   NEXT_PUBLIC_SITE_URL=https://www.posturetips.com
   NEXT_PUBLIC_SITE_NAME=PostureTips.com
   ```

5. **Save Project**
   - Click "Deploy" (or save if importing Git later)
   - Note your Vercel project URL: `posturetips.vercel.app`

**Expected Result:** Vercel project created, ready for deployment

---

### TASK 2: Configure DNS (15 min + 24-48hr wait)

**What you need:**
- Access to domain registrar where you bought posturetips.com
- Vercel project created (Task 1)

**Steps:**

1. **In Vercel Dashboard**
   - Go to your posturetips project
   - Navigate to Settings → Domains
   - Click "Add Domain"
   - Enter: `posturetips.com`
   - Enter: `www.posturetips.com`
   - Vercel will show DNS configuration instructions

2. **In Your Domain Registrar** (e.g., Namecheap, GoDaddy, Cloudflare)
   - Log in to your domain registrar
   - Find DNS settings for posturetips.com
   - Add these records:

   **A Record (for root domain):**
   ```
   Type: A
   Name: @ (or blank)
   Value: 76.76.21.21
   TTL: 3600 (or Auto)
   ```

   **CNAME Record (for www subdomain):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (or Auto)
   ```

3. **Verify DNS Propagation**
   - Wait 15-30 minutes (can take up to 48 hours)
   - Check status: https://dnschecker.org
   - Enter: posturetips.com
   - Look for IP: 76.76.21.21
   - Check: www.posturetips.com points to Vercel

4. **Verify in Vercel**
   - Go back to Vercel → Settings → Domains
   - Check if domains show "Valid Configuration"
   - SSL certificates auto-provision (takes ~10 minutes)

**Expected Result:** posturetips.com and www.posturetips.com both resolve to Vercel, HTTPS working

---

### TASK 3: Clone Project & Create Git Repo (2 hours)

**What you need:**
- Terminal access
- Git installed
- GitHub account (or GitLab/Bitbucket)

**Steps:**

1. **Navigate to workspace**
   ```bash
   cd /Users/thxu/Desktop/cursor-workspace/projects/
   ```

2. **Clone neckhump.com project**
   ```bash
   # Create new directory for posturetips
   mkdir posturetips-site
   cd posturetips-site
   
   # Copy all files from neckhump (posture-site)
   cp -r ../posture-site/* .
   cp -r ../posture-site/.gitignore .
   cp -r ../posture-site/.next .
   ```

3. **Clean up content (keep structure)**
   ```bash
   # Remove documentation files (not needed in new site)
   rm KEYWORD_MAPPING_MASTER.md
   rm POSTURETIPS_SETUP_GUIDE.md
   rm PROJECT_STATUS.md
   rm WEEK1_COMPLETION_SUMMARY.md
   rm COMPONENT_USAGE_GUIDE.md
   
   # Keep SEO/AEO briefs as reference
   # Keep package.json, next.config.js, tailwind.config.js
   ```

4. **Remove all content pages** (we'll rewrite these)
   ```bash
   # Navigate to app directory
   cd app
   
   # Keep layout.js and sitemap.js
   # Remove all other page directories
   rm -rf about/
   rm -rf best-*/
   rm -rf buffalo-*/
   rm -rf desk-*/
   rm -rf dowagers-*/
   rm -rf ergonomic-*/
   rm -rf exercise-library/
   rm -rf exercises/
   rm -rf help/
   rm -rf how-to-*/
   rm -rf learn/
   rm -rf military-*/
   rm -rf neck-*/
   rm -rf posture-*/
   rm -rf privacy/
   rm -rf search/
   rm -rf solutions/
   rm -rf tech-*/
   rm -rf terms/
   rm -rf text-*/
   
   # Keep only: layout.js, page.js (we'll rewrite), globals.css, sitemap.js
   ```

5. **Update configuration files**

   **app/layout.js:**
   ```javascript
   // Change metadataBase
   export const metadata = {
     metadataBase: new URL('https://www.posturetips.com'),
     // ... rest stays same
   }
   ```

   **public/robots.txt:**
   ```
   User-agent: *
   Allow: /
   
   Sitemap: https://www.posturetips.com/sitemap.xml
   ```

6. **Initialize new Git repository**
   ```bash
   # Remove old git history
   rm -rf .git
   
   # Initialize new repo
   git init
   git add .
   git commit -m "Initial commit: PostureTips.com base structure"
   ```

7. **Create GitHub repository**
   - Go to https://github.com/new
   - Repository name: `posturetips-site`
   - Description: "General posture prevention hub - PostureTips.com"
   - Private or Public (your choice)
   - DO NOT initialize with README (we already have one)
   - Click "Create repository"

8. **Push to GitHub**
   ```bash
   # Add remote (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/posturetips-site.git
   
   # Push code
   git branch -M main
   git push -u origin main
   ```

9. **Connect to Vercel**
   - Go back to Vercel dashboard
   - Import Git repository
   - Select `posturetips-site` from GitHub
   - Deploy

**Expected Result:** 
- New Git repository created
- Clean project structure (components kept, content removed)
- Connected to Vercel
- Ready for brand customization

---

### TASK 4: Design Brand Identity (4 hours)

**What you need:**
- Code editor (Cursor/VS Code)
- Logo design tool (Figma, Canva, or AI tool like DALL-E)

**Steps:**

1. **Choose Color Palette**

   Create `tailwind.config.js` updates:
   ```javascript
   theme: {
     extend: {
       colors: {
         // Primary colors (PostureTips brand)
         'primary': {
           50: '#f0fdf4',   // Very light green
           100: '#dcfce7',
           200: '#bbf7d0',
           300: '#86efac',
           400: '#4ade80',
           500: '#10b981',  // Main green
           600: '#059669',
           700: '#047857',
           800: '#065f46',
           900: '#064e3b',
         },
         'secondary': {
           50: '#eff6ff',   // Very light blue
           100: '#dbeafe',
           200: '#bfdbfe',
           300: '#93c5fd',
           400: '#60a5fa',
           500: '#3b82f6',  // Main blue
           600: '#2563eb',
           700: '#1d4ed8',
           800: '#1e40af',
           900: '#1e3a8a',
         },
       },
     },
   }
   ```

2. **Design Logo** (or use text-based logo for MVP)

   **Option A: Simple Text Logo** (fast, professional)
   ```html
   <!-- In Header.js -->
   <div className="text-2xl font-bold">
     <span className="text-primary-600">Posture</span>
     <span className="text-secondary-600">Tips</span>
   </div>
   ```

   **Option B: Create SVG Logo**
   - Use Figma/Canva to create simple icon
   - Export as SVG
   - Save to `/public/logo.svg`
   - Reference in Header component

3. **Update Header Component**

   `components/Header.js`:
   ```javascript
   // Change from medical/neutral to friendly/approachable
   
   // Color scheme: Use primary-600 (green) instead of gray
   // Navigation: Change from "Exercises", "Treatment" to "Tips", "Guides"
   // Tone: More casual, encouraging
   
   const navigation = [
     { name: 'Tips', href: '/tips' },
     { name: 'Guides', href: '/guides' },
     { name: 'Setup', href: '/desk-setup' },
     { name: 'About', href: '/about' },
   ]
   ```

4. **Update Footer Component**

   `components/Footer.js`:
   ```javascript
   // Remove medical disclaimer (not YMYL like neckhump)
   // Update copyright: "© 2025 PostureTips.com"
   // Keep Privacy, Terms, Contact
   // Optional: Add "Improve your posture, improve your life" tagline
   ```

5. **Update Typography** (if desired)

   In `app/layout.js`:
   ```javascript
   // Import friendlier font (optional, or keep Inter)
   import { Inter } from 'next/font/google'
   
   const inter = Inter({ 
     subsets: ['latin'],
     display: 'swap',
   })
   ```

6. **Create Favicon**
   - Use https://favicon.io or Figma
   - Create 32x32 icon
   - Save to `/public/favicon.ico`
   - Add apple-touch-icon (180x180) for iOS

**Expected Result:**
- Friendly green/blue color scheme applied
- Logo created (text or SVG)
- Header navigation updated
- Footer updated
- Favicon created

---

### TASK 5: Set Up Google Services (30 minutes)

**What you need:**
- Google account
- posturetips.com DNS configured (Task 2 complete)

**Steps:**

**A. Google Analytics 4**

1. **Create Property**
   - Go to https://analytics.google.com
   - Admin (bottom left) → Create Property
   - Property name: "PostureTips.com"
   - Reporting time zone: (your timezone)
   - Currency: USD
   - Click "Next"

2. **Business Details**
   - Industry: Health & Fitness
   - Business size: Small
   - Intended use: Generate leads, Examine user behavior
   - Click "Create"

3. **Get Measurement ID**
   - After creation, go to Admin → Data Streams
   - Click "Add stream" → Web
   - Website URL: https://www.posturetips.com
   - Stream name: PostureTips Main
   - Click "Create stream"
   - **Copy the Measurement ID** (looks like `G-XXXXXXXXXX`)

4. **Add to Next.js**
   
   In `app/layout.js`:
   ```javascript
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

5. **Update Vercel Environment Variables**
   - Go to Vercel → Settings → Environment Variables
   - Update `NEXT_PUBLIC_GA_ID` with your Measurement ID

**B. Google Search Console**

1. **Add Property**
   - Go to https://search.google.com/search-console
   - Click "Add property" → Domain property
   - Enter: `posturetips.com`
   - Click "Continue"

2. **Verify Ownership** (DNS method)
   - Google will show a TXT record
   - Copy the verification code
   - Go to your domain registrar DNS settings
   - Add new TXT record:
     ```
     Type: TXT
     Name: @ (or blank)
     Value: google-site-verification=XXXXXXXXXXXXX
     TTL: 3600
     ```
   - Wait 15-30 minutes
   - Click "Verify" in GSC

3. **Alternative: HTML File Upload**
   - Download verification file from GSC
   - Upload to `/public/` in your Next.js project
   - Deploy to Vercel
   - Click "Verify"

4. **Submit Sitemap** (after site launch)
   - In GSC, go to Sitemaps (left sidebar)
   - Add new sitemap: `https://www.posturetips.com/sitemap.xml`
   - Click "Submit"

**Expected Result:**
- Google Analytics tracking active
- Google Search Console verified
- Ready to monitor traffic and rankings

---

## VERIFICATION CHECKLIST

Before moving to Week 2 (content creation), verify:

### Hosting & DNS
- [ ] Vercel project created
- [ ] DNS records added at registrar
- [ ] posturetips.com resolves to Vercel
- [ ] www.posturetips.com resolves to Vercel
- [ ] HTTPS certificate active (green padlock)
- [ ] DNS propagation complete (check dnschecker.org)

### Project Structure
- [ ] New Git repository created
- [ ] Old content removed from /app directory
- [ ] Configuration files updated (layout.js, robots.txt)
- [ ] Connected to Vercel via GitHub
- [ ] Deploys successfully

### Brand Identity
- [ ] Color palette defined (green/blue)
- [ ] Logo created (text or SVG)
- [ ] Header component customized
- [ ] Footer component customized
- [ ] Favicon created
- [ ] Typography set

### Analytics
- [ ] Google Analytics 4 property created
- [ ] Measurement ID added to Next.js
- [ ] Environment variable in Vercel
- [ ] Google Search Console property created
- [ ] Domain ownership verified
- [ ] Tracking code firing (test with browser console)

---

## TROUBLESHOOTING

### DNS Not Propagating
- Wait 24-48 hours (can take time)
- Check TTL settings (lower = faster updates)
- Try incognito browser or different device
- Use https://dnschecker.org to check status globally

### Vercel Deployment Fails
- Check build logs in Vercel dashboard
- Ensure package.json dependencies are correct
- Verify next.config.js has no syntax errors
- Try deploying manually: `vercel --prod`

### Analytics Not Tracking
- Check browser console for errors
- Verify Measurement ID is correct
- Make sure Script tags are in layout.js
- Test in incognito (ad blockers can block GA)
- Wait 24 hours for data to show in GA4

### Search Console Verification Fails
- Ensure TXT record is in DNS (no typos)
- Wait 30 minutes after adding record
- Try HTML file upload method instead
- Check domain is correct (no http://, just posturetips.com)

---

## NEXT STEPS (After Week 1 Complete)

**Week 2: Write Content**
- Homepage (800 words)
- 5 pillar pages (2000 words each)
- 10 category articles (1200 words each)

**Estimated time:** 40-50 hours total

**Before writing ANY content:**
1. Check KEYWORD_MAPPING_MASTER.md
2. Verify keyword assigned to posturetips.com (not neckhump.com)
3. Use posturetips.com outline structure (not medical angle)

---

## TIME TRACKING

| Task | Estimated | Actual | Status |
|------|-----------|--------|--------|
| Documentation | 10 hours | ~9.5 hours | ✅ Done |
| Vercel setup | 30 min | - | ⏳ Pending |
| DNS configuration | 15 min | - | ⏳ Pending |
| Clone & Git repo | 2 hours | - | ⏳ Pending |
| Brand identity | 4 hours | - | ⏳ Pending |
| Google services | 30 min | - | ⏳ Pending |
| **TOTAL WEEK 1** | **~16 hours** | **9.5 hours** | **56% complete** |

---

## CONTACT & RESOURCES

**Vercel Docs:** https://vercel.com/docs  
**Next.js Docs:** https://nextjs.org/docs  
**Google Analytics:** https://support.google.com/analytics  
**Google Search Console:** https://support.google.com/webmasters  

**Support:**
- Vercel Support: support@vercel.com
- Domain registrar support (varies)

---

**Status:** Week 1 Documentation ✅ | Setup Tasks ⏳  
**Next Action:** Complete Tasks 1-5 above, then proceed to Week 2 content creation




