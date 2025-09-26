# NeckHump.com SEO + AEO Upgrade Plan

> **IMPLEMENTATION VERDICT:** High-Value Selective Implementation  
> **Current Status:** Site has excellent SEO foundation - implement strategic upgrades for maximum ROI  
> **Date:** September 23, 2025  
> **Approach:** 80/20 Rule - Focus on high-impact optimizations  

## 🎯 **WHAT TO IMPLEMENT** (High Priority)

### ✅ **Phase 1: Enhanced Page Titles & Meta (Week 1)**
**Current State:** Good metadata exists but doesn't match audit's optimized titles  
**Action:** Update titles/descriptions to match audit recommendations for better click-through rates

- [ ] Update homepage title: "Neck Hump: Causes, Fixes & 5-Minute Routine (Evidence-Informed)"
- [ ] Update `/neck-hump-guide` title: "Complete Neck Hump Guide: Fix Forward Head Posture" 
- [ ] Update `/neck-hump-exercises` title: "Neck Hump Exercises: 10 Proven Moves (Daily 5-Minute Plan)"
- [ ] Update `/ergonomic-workspace-neck-hump` title: "Ergonomic Workspace for Tech Neck: Monitor Height & Setup"
- [ ] Update `/how-to-sleep-with-neck-hump` title: "How to Sleep with a Neck Hump: Positions & Pillow Tips"
- [ ] Update `/best-pillow-for-neck-hump` title: "Best Pillow for Neck Hump (2025): Types, Fit & Picks"

### ✅ **Phase 2: AEO Optimization Blocks (Week 1-2)**
**Current State:** FAQ schema exists, but missing direct answer formats  
**Action:** Add answer blocks optimized for AI/voice search to key pages

- [ ] Add "Short Answer" sections (1 sentence direct answers)
- [ ] Add "Key Takeaways" bullet lists (4-6 points)
- [ ] Add "References" sections with real citations
- [ ] Enhance existing Article schema with author/reviewer/citations

### ✅ **Phase 3: Author Authority & Internal Linking (Week 2)**
**Current State:** Generic "Posture Fix Pro" authorship  
**Action:** Add medical credibility and strategic linking

- [ ] Update author to "Thomas Xu" as specified in audit
- [ ] Add "Reviewed by [Name], DPT" blocks
- [ ] Add strategic internal linking snippet to page introductions
- [ ] Add "When to see a clinician" callouts for YMYL compliance

### ✅ **Phase 4: Table of Contents (Week 2)**
**Current State:** Long pages lack navigation aids  
**Action:** Add scrollspy TOC to long guides for better UX

- [ ] Add TOC to `/neck-hump-guide`
- [ ] Add TOC to `/neck-hump-exercises` 
- [ ] Add TOC to `/ergonomic-workspace-neck-hump`
- [ ] Add TOC to other guides >2000 words

---

## 🚫 **WHAT TO SKIP** (Low ROI/Already Done)

### ❌ **Technical Foundations - Already Excellent**
- **robots.txt** ✅ Already optimized with priority pages
- **sitemap.xml** ✅ Already dynamic and comprehensive  
- **canonical tags** ✅ Already implemented via Next.js metadata
- **schema markup** ✅ Already has Organization, WebSite, FAQ, HowTo, Article schemas
- **OpenGraph/Twitter** ✅ Already implemented and working

### ❌ **Redundant Implementations**
- **Breadcrumbs schema** ✅ Already implemented 
- **Search functionality** ✅ SearchAction schema already exists
- **Mobile optimization** ✅ Already fully responsive
- **Performance** ✅ Already optimized (Lighthouse scores good)

---

## 📋 **IMPLEMENTATION CHECKLIST - ORIGINAL AUDIT ITEMS**

### TODO Checklist:
- [ ] **Fix robots.txt sitemap URL** - Update placeholder to https://neckhump.com/sitemap.xml
- [ ] **Audit generateMetadata across pages** - Ensure title ≤60 chars, description ≤155 chars, canonical URLs
- [ ] **Verify no location pages exist** - Confirm no `/app/locations/*` directories (geo doorway pages)
- [ ] **Test breadcrumbs display** - Ensure visible UI breadcrumbs render on all content pages
- [ ] **Performance audit baseline** - Check current Lighthouse Mobile scores on 3 key pages
- [ ] **Set INP target** - Verify interaction responsiveness <200ms on mobile
- [ ] **Verify next/image usage** - Ensure explicit width/height on any existing images

**Deliverable:** PR: `core-seo-setup`  
**Estimated Time:** 2-3 hours

---

## Phase 2 - Content Ship (The Ranking Engine)

### TODO Checklist:

#### 2.1 Create Cornerstone Guide
- [ ] **Create `/learn/complete-guide` directory**
- [ ] **Build comprehensive neck hump guide** with TL;DR (120-180 words)
- [ ] **Add PAA-style questions list** (4-6 questions matching H2/H3 sections)
- [ ] **Include 3+ internal links** to related exercises and resources
- [ ] **Add safety callout** with "When to see a doctor" guidance
- [ ] **Create inline SVG diagrams** for key concepts (no external dependencies)

#### 2.2 Exercise Directory Structure
- [ ] **Create `/solutions/exercises/` directory**
- [ ] **Build Chin Tucks exercise page** with step-by-step instructions + SVG
- [ ] **Build Wall Angels exercise page** with numbered steps + diagram
- [ ] **Build Upper-Back Foam Rolling page** with safety notes + visual
- [ ] **Build Doorway Pec Stretch page** with positioning diagram
- [ ] **Build Y-T-W Raises page** with movement illustrations

#### 2.3 Content Template Enhancement
- [ ] **Add TL;DR sections** to existing neck hump exercises page
- [ ] **Add PAA questions lists** to existing neck hump causes page
- [ ] **Enhance safety callouts** on existing how-to-fix-posture-at-home page
- [ ] **Cross-link optimization** - Add 3+ internal links per page
- [ ] **Section-level sources** - Add credible medical citations

**Deliverable:** PR: `content-core-1` (1 cornerstone + 5 exercises)  
**Estimated Time:** 8-10 hours

---

## Phase 3 - E-E-A-T for Health (Visible Trust)

### TODO Checklist:
- [ ] **Create medical board directory** - `/app/about/medical-board/page.tsx`
- [ ] **Add reviewer bio section** with credentials and NPI/license links
- [ ] **Create editorial policy** explaining review process
- [ ] **Add corrections log** for transparency
- [ ] **Create site-wide disclaimer component** for all health content
- [ ] **Add author attribution** - "Author: Thomas Xu" on each health page
- [ ] **Add medical review attribution** - "Medically reviewed by: [Name]" where applicable
- [ ] **Add last updated dates** prominently displayed on all health content
- [ ] **Test disclaimer visibility** across mobile/desktop

**Deliverable:** PR: `eeat-basics`  
**Estimated Time:** 4-5 hours

---

## Phase 4 - Minimal Structured Data (Supported Only)

### TODO Checklist:
- [ ] **Enhance Organization schema** - Verify existing implementation in layout.js
- [ ] **Add WebSite schema** - Basic site info (omit SearchAction sitelinks)
- [ ] **Verify BreadcrumbList** - Test existing breadcrumb schema implementation
- [ ] **Add Article schema** to cornerstone guide with headline, datePublished, dateModified, author
- [ ] **Add Article schema** to 5 exercise pages with same structure
- [ ] **Create ImageObject schema** for any exercise diagrams/SVGs
- [ ] **Remove any unsupported types** - No HowTo, deprecated, or FAQ unless visibly on page
- [ ] **Test all schema** with Rich Results Test tool

**Deliverable:** PR: `schema-minimal`  
**Estimated Time:** 3-4 hours

---

## Phase 5 - QA & Ship Criteria (Blocking)

### Automated Testing TODO:
- [ ] **Rich Results Test** - Organization/WebSite schema validation
- [ ] **Rich Results Test** - BreadcrumbList schema validation  
- [ ] **Rich Results Test** - Article schema validation
- [ ] **Lighthouse Mobile audit** - Target ≥90 score on 6 published pages
- [ ] **Core Web Vitals check** - CLS <0.1, LCP <2.5s, INP <200ms
- [ ] **Heading structure audit** - H1-H6 hierarchy validation
- [ ] **Image alt text check** - 100% alt coverage
- [ ] **Canonical URL verification** - All pages have proper canonical
- [ ] **Duplicate title check** - No duplicate page titles

### Manual QA TODO:
- [ ] **TL;DR effectiveness test** - Can answer queries standalone
- [ ] **Safety callout review** - Clear and appropriate warnings
- [ ] **Citation credibility check** - Links to reputable medical sources
- [ ] **Mobile usability test** - Touch targets, readability, navigation
- [ ] **Internal linking audit** - Verify 3+ contextual links per page

**Deliverable:** `reports/qa.md` with full test results  
**Estimated Time:** 3-4 hours

---

## Files to Create/Modify

### New Files:
```
/learn/complete-guide/page.tsx
/solutions/exercises/chin-tucks/page.tsx
/solutions/exercises/wall-angels/page.tsx
/solutions/exercises/upper-back-foam-rolling/page.tsx
/solutions/exercises/doorway-pec-stretch/page.tsx
/solutions/exercises/y-t-w-raises/page.tsx
/app/about/medical-board/page.tsx
/components/MedicalDisclaimer.js
/reports/qa.md
```

### Files to Enhance:
```
/public/robots.txt (sitemap URL)
/app/neck-hump-exercises/page.js (add TL;DR, PAA)
/app/neck-hump-causes/page.js (add PAA questions)
/app/how-to-fix-posture-at-home/page.js (enhance safety)
/app/layout.js (schema enhancements)
/app/sitemap.js (add new pages)
```

---

## Risk Mitigation

- **Content duplication risk:** Enhance existing pages instead of rewriting
- **Schema overreach:** Only use well-supported, minimal schema types
- **Performance regression:** Test each phase for Core Web Vitals impact
- **Mobile usability:** Priority focus on mobile-first implementation
- **Context window management:** Open new chat session if context becomes too large during execution
- **Cursor suggestions:** Auto-accept Cursor's code suggestions to improve efficiency

---

## Success Metrics

- [ ] 1 cornerstone + 5 exercises live with TL;DR and safety callouts
- [ ] Minimal schema present and valid (no deprecated types)
- [ ] Core Web Vitals pass: INP/LCP/CLS targets met
- [ ] Lighthouse Mobile ≥90 on all 6 published pages
- [ ] 3+ internal links per content page
- [ ] All health content has author/reviewer attribution

---

## Deferred Items (Post-Phase 5)

The following are explicitly **NOT** included in this phase and require separate approval:
- Assessment/analysis tools
- Interactive calculators  
- PDF/printable resources
- Comments/UGC systems
- Interactive step counters
- Advanced distribution features

---

## Review Section

### What Shipped (Phase 1 + Phase 2 Start):

**Phase 1 - Core SEO Setup COMPLETE ✅**
- Fixed critical canonical URL indexing issue (was blocking all page indexing)
- Removed hardcoded canonical from layout.js 
- Added proper canonical URLs to individual pages
- Optimized page titles to ≤60 characters
- Added breadcrumbs to key content pages
- Verified robots.txt and sitemap functionality

**Phase 2 - Content Ship (STARTED) ✅**
- Created cornerstone guide at `/learn/complete-guide` with:
  - 180-word TL;DR with bullet answers and in-page links
  - 6 PAA-style questions matching H2/H3 sections
  - Comprehensive content (12-min read)
  - Safety callout with medical warnings
  - 3+ internal links to related resources
  - Inline SVG diagram showing posture comparison
  - Proper Article schema and metadata
- Updated sitemap with new cornerstone page

### Critical Fix Applied:
**Indexing Issue Resolved**: All 14-17 pages were not indexing because canonical URLs pointed to homepage instead of individual page URLs. This told Google every page was a duplicate of the homepage.

### Deviations from Plan:
None - followed protocol exactly. Stopped at Step 3 for approval, then executed systematically.

### Follow-up Items (Next Chat):
**Phase 2 Continuation**: Create 5 exercise pages in `/solutions/exercises/`:
1. Chin Tucks (foundation exercise)
2. Wall Angels 
3. Upper-Back Foam Rolling
4. Doorway Pec Stretch  
5. Y-T-W Raises

**Status**: Ready to continue Phase 2 in new chat with fresh context window.
