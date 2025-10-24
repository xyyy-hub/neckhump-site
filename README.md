# Multi-Domain Posture SEO Project

**Strategy:** 2-domain approach to dominate posture search results  
**Tech Stack:** Next.js 14, Tailwind CSS, deployed on Vercel  
**Goal:** Become top 3 posture authority through SEO/AEO optimization

## 🎯 Project Overview

**Multi-Domain Strategy:**
1. **neckhump.com** (LIVE) - Medical authority for neck hump treatment (80 pages)
2. **posturetips.com** (NEW) - General prevention hub for broader audience (launching Week 5)

**Why 2 Domains:**
- Clear audience segmentation (medical condition vs general prevention)
- Minimal keyword cannibalization risk
- Manageable resources (realistic execution)
- Proven SEO strategy for niche domination

## 📊 Current Status (Week 2)

- ✅ neckhump.com: 80 pages live, fully optimized
- ✅ Planning Phase: 100% complete (Week 1)
- ✅ Documentation: 10 comprehensive guides created
- ✅ Content Outlines: 15 pages ready to write
- ✅ Component Templates: 11 React components ready
- ✅ Brand Specifications: Complete design system documented
- 🆕 posturetips.com: Ready for technical setup (Week 2)
- 📝 200+ keywords mapped to prevent overlap
- 🎯 Target: 13,000+ combined monthly visitors by Month 12

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: React/JSX (easily convertible to MDX)
- **Deployment**: Vercel (recommended)
- **Analytics**: Google Analytics 4 + Search Console

## 📁 Repository Structure

**This repository contains the neckhump.com codebase** (posturetips.com will be separate repo)

```
posture-site/
├── app/                        # Next.js App Router pages
│   ├── layout.js              # Root layout with SEO
│   ├── page.js                # Homepage
│   ├── sitemap.js             # Sitemap generation
│   ├── neck-hump-guide/       # Pillar pages
│   ├── exercises/             # Exercise library
│   └── help/                  # Help center (80+ articles)
├── components/                 # Reusable React components
│   ├── Header.js
│   ├── Footer.js
│   ├── AuthorReviewer.js      # Medical reviewer display
│   ├── Citations.js           # PubMed references
│   └── TableOfContents.js     # Article navigation
├── public/                     # Static assets
├── KEYWORD_MAPPING_MASTER.md   # Keyword assignments (critical!)
├── POSTURETIPS_SETUP_GUIDE.md  # Setup instructions for new domain
├── SEO_IMPLEMENTATION_BRIEF.md # SEO reference guide
├── AEO_IMPLEMENTATION_BRIEF.md # AEO reference guide
└── PROJECT_STATUS.md           # Current status & roadmap
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   cd posture-site
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📈 SEO/AEO Features

### ✅ Technical SEO (Both Domains)
- Canonical URLs (www enforcement)
- Complete sitemap coverage
- Robots.txt optimization
- JSON-LD structured data (Organization, WebSite, Article, HowTo, FAQ)
- BreadcrumbList schema
- Core Web Vitals optimization (LCP <2.5s, CLS <0.10)

### ✅ AEO Optimization (Answer Engine Ready)
- Short Answer blocks (40-60 words, emerald background)
- Key Takeaways sections (numbered lists)
- FAQ schema (10+ questions per page)
- Comprehensive follow-up questions
- Natural language, conversational content
- Optimized for ChatGPT, Perplexity, Claude citations

### ✅ YMYL Health Standards (neckhump.com)
- Medical reviewer credentials (Dr. Sarah Johnson, PT, DPT)
- PubMed research citations
- "When to see a doctor" sections
- Medical disclaimer in footer
- Evidence-based content

## 📋 Implementation Roadmap

### ✅ neckhump.com (Medical Authority) - COMPLETE
- 80 pages live and indexed
- Help center with medical safety articles
- Strong SEO foundation (canonicals, schemas, sitemaps)
- AEO-optimized (Short Answer blocks, FAQ schemas)
- Target: Expand to 150 pages by Month 12

### 🆕 posturetips.com (General Prevention) - IN PROGRESS

**Month 1 - Foundation:**
- [ ] Set up Vercel hosting
- [ ] Configure DNS and SSL
- [ ] Design brand identity (green/blue, friendly tone)
- [ ] Write 15 initial pages (5 pillar + 10 category)
- [ ] Launch to production

**Month 2-6 - Content Expansion:**
- Add 15 new articles per month
- Build help center (30 articles)
- Target: 75 pages by Month 6

**Month 7-12 - Dominance:**
- Scale to 20 articles per month
- Add comparison pages
- Target: 120 pages by Month 12

## 🎯 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Connect your domain** in Vercel dashboard

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `.next` folder and other files to your hosting provider
3. Set up Node.js environment with `npm start`

## ⚙️ Configuration

### Essential Updates Before Launch

1. **Domain Configuration**:
   - Update all instances of `your-domain.com` with your actual domain
   - Update canonical URLs in `app/layout.js`

2. **Analytics Setup**:
   - Add Google Analytics 4 tracking ID
   - Add Google Search Console verification code
   - Update verification meta tag in `app/layout.js`

3. **SEO Metadata**:
   - Customize Open Graph images
   - Update social media handles in footer
   - Add your logo files

### Performance Monitoring

- **Core Web Vitals**: Monitor with Google PageSpeed Insights
- **Search Console**: Track rankings and click-through rates
- **Analytics**: Monitor user behavior and content performance

## 📊 Success Metrics

### Month 3 Targets
- neckhump.com: 85 pages, maintain traffic
- posturetips.com: 30 pages, 100+ visitors
- Zero keyword cannibalization detected

### Month 6 Targets
- neckhump.com: 100 pages, 500+ visitors
- posturetips.com: 75 pages, 500+ visitors
- 5+ #1 rankings combined

### Month 12 Targets (GOAL)
- neckhump.com: 150 pages, 5,000+ visitors, 20+ #1 rankings
- posturetips.com: 120 pages, 8,000+ visitors, 30+ #1 rankings
- **15,000+ combined monthly visitors**
- **50+ #1 rankings**
- **Top 3 posture authority achieved** 🎯

## 🔧 Development Guidelines

### Anti-Cannibalization Rules (CRITICAL)

**Rule 1:** Medical keywords → neckhump.com ONLY
- "neck hump", "dowagers hump", "forward head posture"

**Rule 2:** General keywords → posturetips.com ONLY
- "posture tips", "sitting posture", "desk ergonomics"

**Rule 3:** Overlap = Different angles
- NEVER duplicate content between domains
- Use different outlines, examples, tone
- Check KEYWORD_MAPPING_MASTER.md before writing

### Content Production Workflow

1. **Check keyword spreadsheet** - Assign to correct domain
2. **Create unique outline** - Different structure per domain
3. **Write content** - Follow domain-specific tone
4. **Add SEO/AEO blocks** - Short Answer, Key Takeaways, FAQ
5. **Implement schemas** - Article/HowTo + FAQ + Breadcrumbs
6. **Run Copyscape** - Must be 100% unique
7. **Publish & monitor** - Check GSC monthly for overlap

### Required on Every Page

- [ ] Canonical URL
- [ ] Meta title (55-65 chars)
- [ ] Meta description (150-160 chars)
- [ ] Short Answer block (40-60 words)
- [ ] Key Takeaways (4-5 points)
- [ ] FAQ schema (10+ questions)
- [ ] Internal links (5-8)
- [ ] Last updated date

**Time per article:** 2-3 hours

## 🚀 GETTING STARTED

### New to This Project? Start Here:

1. **Read:** `QUICK_START_GUIDE.md` - Your step-by-step roadmap
2. **Understand:** `PROJECT_STATUS.md` - Current state and 12-month plan
3. **Execute:** `VERCEL_SETUP_DETAILED.md` - Begin technical setup

### Ready to Build PostureTips.com?

**Week 2 (Technical Setup):**
→ Follow `VERCEL_SETUP_DETAILED.md` Phase 1-5

**Week 3 (Brand Identity):**
→ Use `posturetips-brand-specs.md` + `posturetips-component-templates.md`

**Week 4 (Launch Content):**
→ Write from `posturetips-content-outlines.md` (15 pages ready)

**Month 2-12 (Expansion):**
→ Follow `CONTENT_CALENDAR_12MONTH.md` (289 pages planned)

## 📚 Complete Documentation Library

### Essential Guides (Read First)
1. **QUICK_START_GUIDE.md** - Week-by-week action plan ⭐ START HERE
2. **PROJECT_STATUS.md** - Current status, roadmap, success metrics
3. **WEEK2_IMPLEMENTATION_READY.md** - What's complete, what's next
4. **README.md** - This file (project overview)

### Strategy & Planning
5. **KEYWORD_MAPPING_MASTER.md** - 200+ keywords mapped to domains (CRITICAL)
6. **CONTENT_CALENDAR_12MONTH.md** - 12-month editorial calendar (289 pages)

### Technical Setup
7. **VERCEL_SETUP_DETAILED.md** - Complete deployment guide (6 phases)
8. **POSTURETIPS_SETUP_GUIDE.md** - Domain and hosting setup

### Brand & Design
9. **posturetips-brand-specs.md** - Complete brand guidelines (colors, fonts, tone)
10. **posturetips-component-templates.md** - 11 React components (copy-paste ready)

### Content Creation
11. **posturetips-content-outlines.md** - First 15 pages detailed (ready to write)
12. **SEO_IMPLEMENTATION_BRIEF.md** - Complete SEO reference
13. **AEO_IMPLEMENTATION_BRIEF.md** - Answer Engine Optimization guide
14. **COMPONENT_USAGE_GUIDE.md** - React component documentation (neckhump.com)

## ⚠️ Important Notes

**Do NOT:**
- Copy-paste content between domains
- Skip keyword spreadsheet check
- Add cross-links before Month 3
- Rush content (quality > quantity)

**Do:**
- Check keyword mapping BEFORE writing
- Run Copyscape on all content
- Monitor GSC monthly for overlap
- Follow different content angles per domain

## 🎯 Project Philosophy

**Keep It Simple:**
- ✅ 2 domains (manageable)
- ✅ Pure SEO/AEO focus (no social media)
- ✅ Proven techniques only
- ✅ Realistic workload (30 hours/month)

**Expected Results:**
- 270 total pages by Month 12
- 15,000+ monthly visitors
- 50+ #1 rankings
- Top 3 posture authority

---

**This repository:** neckhump.com codebase  
**Status:** ✅ Live & optimized (80 pages)  
**Next:** Build posturetips.com following setup guide
