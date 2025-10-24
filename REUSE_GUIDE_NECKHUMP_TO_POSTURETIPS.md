# Component Reuse Guide: neckhump.com → posturetips.com

**Created:** October 24, 2025  
**Purpose:** Accelerate development by reusing existing components and patterns  
**Status:** Ready to implement

---

## 🎯 REUSE STRATEGY

**Key Principle:** Reuse functionality, customize branding. Most components are domain-agnostic and can be copied directly.

**Time Saved:** ~15-20 hours of component development

---

## ✅ COMPONENTS TO COPY DIRECTLY (No Changes Needed)

These components are purely functional with no branding or domain-specific content:

### 1. FAQSection.js ⭐ HIGH PRIORITY
**Location:** `/Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/FAQSection.js`

**Why reuse:** Generic FAQ renderer with JSON-LD schema

**Copy to:** `posture-tips-site/components/FAQSection.js`

**Changes needed:** NONE (already brand-agnostic)

**Usage:**
```javascript
<FAQSection 
  faqs={[
    {
      question: "How long does it take to improve posture?",
      answer: "Most people see noticeable improvements in 4-6 weeks..."
    }
  ]} 
/>
```

---

### 2. ReadingProgress.js ⭐ HIGH PRIORITY
**Location:** `components/ReadingProgress.js`

**Why reuse:** Generic progress bar for long articles

**Copy to:** `posture-tips-site/components/ReadingProgress.js`

**Changes needed:** NONE

**Usage:**
```javascript
// Add to article layout
<ReadingProgress />
```

---

### 3. TableOfContents.js ⭐ HIGH PRIORITY
**Location:** `components/TableOfContents.js`

**Why reuse:** Generic TOC with scroll tracking

**Copy to:** `posture-tips-site/components/TableOfContents.js`

**Changes needed:** NONE

**Usage:**
```javascript
<TableOfContents 
  sections={[
    { id: 'introduction', title: 'Introduction' },
    { id: 'techniques', title: 'Techniques' }
  ]} 
/>
```

---

### 4. Breadcrumbs.js
**Location:** `components/Breadcrumbs.js`

**Why reuse:** Generic breadcrumb navigation with schema

**Copy to:** `posture-tips-site/components/Breadcrumbs.js`

**Changes needed:** Update `siteUrl` constant to `https://www.posturetips.com`

**Usage:**
```javascript
<Breadcrumbs 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Sitting Posture' }
  ]} 
/>
```

---

### 5. InternalLinking.js
**Location:** `components/InternalLinking.js`

**Why reuse:** Generic related links component

**Copy to:** `posture-tips-site/components/InternalLinking.js`

**Changes needed:** NONE

**Usage:**
```javascript
<InternalLinking 
  links={[
    { href: '/standing-posture-guide', text: 'Standing Posture Guide' },
    { href: '/desk-ergonomics', text: 'Desk Setup Tips' }
  ]} 
/>
```

---

### 6. RelatedArticles.js
**Location:** `components/RelatedArticles.js`

**Why reuse:** Generic related articles card grid

**Copy to:** `posture-tips-site/components/RelatedArticles.js`

**Changes needed:** NONE

**Usage:**
```javascript
<RelatedArticles 
  articles={[
    {
      title: 'Office Posture Tips',
      description: 'Improve your desk posture',
      href: '/tips/office-workers'
    }
  ]} 
/>
```

---

### 7. NavigationPathway.js
**Location:** `components/NavigationPathway.js`

**Why reuse:** Generic next/previous navigation

**Copy to:** `posture-tips-site/components/NavigationPathway.js`

**Changes needed:** NONE

---

### 8. PeopleAlsoAsk.js
**Location:** `components/PeopleAlsoAsk.js`

**Why reuse:** Generic expandable FAQ with schema

**Copy to:** `posture-tips-site/components/PeopleAlsoAsk.js`

**Changes needed:** NONE (but set `includeSchema={false}` if page already has FAQ schema)

**Usage:**
```javascript
<PeopleAlsoAsk 
  questions={[
    {
      question: "Can posture be improved at any age?",
      answer: "Yes, posture can be improved at any age..."
    }
  ]}
  includeSchema={false}  // Set to false if FAQ schema already on page
/>
```

---

### 9. ComparisonTable.js
**Location:** `components/ComparisonTable.js`

**Why reuse:** Generic comparison table renderer

**Copy to:** `posture-tips-site/components/ComparisonTable.js`

**Changes needed:** NONE

---

### 10. Citations.js
**Location:** `components/Citations.js`

**Why reuse:** Generic research citation renderer

**Copy to:** `posture-tips-site/components/Citations.js`

**Changes needed:** NONE (posturetips.com will have fewer citations, but component works)

**Note:** Use sparingly on posturetips.com (only for pillar pages with research claims)

---

## 🔧 COMPONENTS TO ADAPT (Minor Changes)

These need brand customization but the core functionality can be reused:

### 11. AuthorReviewer.js → SimpleAuthor.js
**Location:** `components/AuthorReviewer.js`

**Why adapt:** posturetips.com doesn't need medical reviewer, just author byline

**Copy to:** `posture-tips-site/components/SimpleAuthor.js`

**Changes needed:**
- Remove "Medically Reviewed by" section
- Simplify to single author byline
- Update styling to match friendly brand

**New code:**
```javascript
export default function SimpleAuthor({ 
  authorName = "PostureTips Team",
  authorTitle = "Posture Improvement Specialists",
  lastUpdated 
}) {
  return (
    <div className="border-t border-b border-gray-200 py-4 my-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">{authorName}</p>
          <p className="text-xs text-gray-600">{authorTitle}</p>
        </div>
        {lastUpdated && (
          <p className="text-xs text-gray-500">
            Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </div>
    </div>
  )
}
```

---

## 🎨 COMPONENTS TO REBUILD (Brand-Specific)

Already created in posturetips-component-templates.md:

- ✅ Header.js (different navigation, logo, colors)
- ✅ Footer.js (different links, lighter disclaimer)
- ✅ ShortAnswer.js (same emerald styling, reusable)
- ✅ KeyTakeaways.js (same blue styling, reusable)

---

## 📐 PAGE STRUCTURE PATTERNS TO REUSE

### Article Page Structure (Standard Pattern)

**From neckhump.com, reuse this layout:**

```javascript
export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Article Title
        </h1>
        
        {/* Author/Date */}
        <SimpleAuthor 
          authorName="PostureTips Team"
          lastUpdated="2025-10-24"
        />
        
        {/* Short Answer Block (AEO) */}
        <ShortAnswer>
          <p>40-60 word direct answer...</p>
        </ShortAnswer>
        
        {/* Key Takeaways (AEO) */}
        <KeyTakeaways 
          takeaways={[
            "First key point",
            "Second key point"
          ]} 
        />
        
        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Article sections */}
        </div>
        
        {/* FAQ Section (AEO) */}
        <FAQSection faqs={faqData} />
        
        {/* Related Articles */}
        <RelatedArticles articles={relatedData} />
        
        {/* Navigation */}
        <NavigationPathway 
          prev={{ title: "Previous", href: "/prev" }}
          next={{ title: "Next", href: "/next" }}
        />
      </article>
    </div>
  )
}
```

**Time saved:** ~4 hours per page (layout already proven)

---

## 📝 SCHEMA PATTERNS TO REUSE

### Article Schema (Copy Exact Pattern)

**From neckhump.com, reuse this structure:**

```javascript
export const metadata = {
  title: 'Article Title | PostureTips.com',
  description: 'Article description 150-160 chars',
  alternates: {
    canonical: '/article-path'
  },
  openGraph: {
    title: 'Article Title',
    description: 'Article description',
    url: 'https://www.posturetips.com/article-path',
    type: 'article',
    images: ['/og-image.png']
  }
}

// Article JSON-LD Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "description": "Article description",
  "author": {
    "@type": "Person",
    "name": "PostureTips Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PostureTips.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.posturetips.com/logo.png"
    }
  },
  "datePublished": "2025-10-24",
  "dateModified": "2025-10-24",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.posturetips.com/article-path"
  }
}
```

**Changes needed:**
- Update domain to `www.posturetips.com`
- Update organization name to "PostureTips.com"
- Remove medical reviewer (if present in original)

**Time saved:** ~10 minutes per page (schema template ready)

---

## 🎨 STYLING PATTERNS TO REUSE

### Tailwind Classes (Copy Directly)

**Heading Styles (neckhump.com patterns):**
```jsx
<h1 className="text-4xl font-bold text-gray-900 mb-4">
<h2 className="text-3xl font-bold text-gray-900 mb-3">
<h3 className="text-2xl font-semibold text-gray-800 mb-3">
```

**Content Styles:**
```jsx
<p className="text-base text-gray-700 leading-relaxed mb-4">
<p className="text-lg text-gray-700 leading-relaxed mb-6"> {/* Intro */}
```

**List Styles:**
```jsx
<ul className="space-y-2 mb-6">
  <li className="flex items-start">
    <span className="text-primary-600 mr-2">•</span>
    <span>List item</span>
  </li>
</ul>
```

**Only change:** Update `text-emerald-600` → `text-primary-600` (matches posturetips green)

---

## 📦 GLOBALS.CSS TO REUSE

**Copy from neckhump.com:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Prose customization for article content */
@layer base {
  .prose {
    @apply max-w-none;
  }
  
  .prose h2 {
    @apply text-3xl font-bold text-gray-900 mb-4 mt-8;
  }
  
  .prose h3 {
    @apply text-2xl font-semibold text-gray-800 mb-3 mt-6;
  }
  
  .prose p {
    @apply text-gray-700 leading-relaxed mb-4;
  }
  
  .prose ul {
    @apply space-y-2 mb-6;
  }
  
  .prose ol {
    @apply space-y-2 mb-6 list-decimal list-inside;
  }
  
  .prose a {
    @apply text-primary-600 hover:text-primary-700 underline;
  }
}
```

**Changes needed:** NONE (will use posturetips primary colors from Tailwind config)

---

## 🚀 IMPLEMENTATION CHECKLIST

### Week 2: Copy Components (2 hours)

**Step 1: Create components directory**
```bash
cd posture-tips-site
mkdir -p components
```

**Step 2: Copy components (20 min)**
```bash
# From neckhump.com repo to posturetips.com repo
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/FAQSection.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/ReadingProgress.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/TableOfContents.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/Breadcrumbs.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/InternalLinking.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/RelatedArticles.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/NavigationPathway.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/PeopleAlsoAsk.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/ComparisonTable.js posture-tips-site/components/
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/components/Citations.js posture-tips-site/components/

# Copy globals.css
cp /Users/thxu/Desktop/cursor-workspace/projects/posture-site/app/globals.css posture-tips-site/app/
```

**Step 3: Update domain references (10 min)**

Only in `Breadcrumbs.js`:
```javascript
// Find and replace
const siteUrl = 'https://www.neckhump.com'
// Change to:
const siteUrl = 'https://www.posturetips.com'
```

**Step 4: Create SimpleAuthor.js (10 min)**

Copy code from "Components to Adapt" section above.

**Step 5: Test imports (30 min)**

Create test page to verify all components render:

```javascript
// app/test/page.js
import FAQSection from '@/components/FAQSection'
import ReadingProgress from '@/components/ReadingProgress'
import TableOfContents from '@/components/TableOfContents'
// ... import all components

export default function TestPage() {
  return (
    <div>
      <h1>Component Test Page</h1>
      {/* Test each component with sample data */}
    </div>
  )
}
```

Run: `npm run dev` and visit `/test`

**Step 6: Delete test page**
```bash
rm -rf app/test
```

---

## 📊 TIME SAVINGS BREAKDOWN

| Task | From Scratch | With Reuse | Saved |
|------|-------------|------------|-------|
| FAQSection component | 2 hours | 0 min | 2 hours |
| ReadingProgress | 1.5 hours | 0 min | 1.5 hours |
| TableOfContents | 2 hours | 0 min | 2 hours |
| Breadcrumbs + schema | 1.5 hours | 5 min | 1.5 hours |
| InternalLinking | 1 hour | 0 min | 1 hour |
| RelatedArticles | 1.5 hours | 0 min | 1.5 hours |
| NavigationPathway | 1 hour | 0 min | 1 hour |
| PeopleAlsoAsk | 2 hours | 0 min | 2 hours |
| ComparisonTable | 1.5 hours | 0 min | 1.5 hours |
| Citations | 1 hour | 0 min | 1 hour |
| SimpleAuthor | 1.5 hours | 10 min | 1.4 hours |
| Article schemas | 2 hours | 20 min | 1.6 hours |
| **TOTAL** | **19 hours** | **35 min** | **~18 hours** ✅ |

**Massive time savings!** Almost a full 3-day workweek saved.

---

## 🎨 WHAT STILL NEEDS CUSTOM WORK

### Components (Already templated in posturetips-component-templates.md):
- ✅ Header.js (different branding)
- ✅ Footer.js (lighter disclaimer)
- ✅ ShortAnswer.js (can reuse emerald styling)
- ✅ KeyTakeaways.js (can reuse blue styling)
- ✅ Card.js
- ✅ Button.js
- ✅ Hero.js
- ✅ ValueProps.js

**Time needed:** 4-6 hours (already outlined, just implement)

### Content:
- Article writing (can't be borrowed, but outlines ready)
- Meta titles/descriptions (domain-specific)

---

## 🔍 SEO/AEO SAFETY CHECK

### ✅ Safe to Reuse (No SEO Impact):
- Component JavaScript code (functionality)
- CSS styling patterns (visual design)
- Schema templates (just change domain/org name)
- Page layout structure (article format)

### ⚠️ Must Be Unique Per Domain:
- URLs (different paths)
- Content (zero duplicate text)
- Meta titles/descriptions (different keywords)
- Canonical URLs (point to posturetips.com)
- Open Graph URLs (posturetips.com domain)
- Schema organization name ("PostureTips.com")
- Schema @id and url fields (posturetips.com domain)

### ✅ Already Planned to Be Different:
- Header navigation (different links)
- Footer content (different legal pages)
- Logo and branding
- Color scheme (similar but different primaries)
- Tone of voice (friendly vs clinical)

---

## 💡 BEST PRACTICES

### Do:
✅ Copy functional components (FAQSection, TableOfContents, etc.)  
✅ Reuse layout patterns (article structure)  
✅ Reuse schema templates (update domain/org)  
✅ Reuse styling patterns (Tailwind classes)  
✅ Test all components after copying  

### Don't:
❌ Copy any content text (must be 100% unique)  
❌ Use same meta titles/descriptions  
❌ Forget to update domain in Breadcrumbs  
❌ Forget to update schema URLs  
❌ Copy Header/Footer (need custom branding)  

---

## 🚀 QUICK START: Copy Components Now

**Execute this in 5 minutes:**

```bash
# 1. Navigate to new project
cd /Users/thxu/Desktop/cursor-workspace/projects/posture-tips-site

# 2. Create components directory
mkdir -p components

# 3. Copy all reusable components
cp ../posture-site/components/{FAQSection,ReadingProgress,TableOfContents,Breadcrumbs,InternalLinking,RelatedArticles,NavigationPathway,PeopleAlsoAsk,ComparisonTable,Citations}.js components/

# 4. Copy globals.css
cp ../posture-site/app/globals.css app/

# 5. Update Breadcrumbs domain
# Open components/Breadcrumbs.js and change neckhump.com to posturetips.com

# 6. Create SimpleAuthor.js
# (Copy code from this guide)

# 7. Test
npm run dev
```

**Done! 10 components ready to use in 5 minutes of copying.**

---

## 📚 COMPONENT USAGE REFERENCE

### For Article Pages (Use This Pattern):

```javascript
import ReadingProgress from '@/components/ReadingProgress'
import Breadcrumbs from '@/components/Breadcrumbs'
import SimpleAuthor from '@/components/SimpleAuthor'
import FAQSection from '@/components/FAQSection'
import RelatedArticles from '@/components/RelatedArticles'
import ShortAnswer from '@/components/ShortAnswer'
import KeyTakeaways from '@/components/KeyTakeaways'

export default function ArticlePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Sitting Posture' }
  ]
  
  const faqs = [
    {
      question: "How do I maintain good sitting posture?",
      answer: "Sit with feet flat on floor, back supported..."
    }
  ]
  
  const related = [
    {
      title: 'Standing Posture Guide',
      description: 'Learn proper standing alignment',
      href: '/standing-posture-guide'
    }
  ]
  
  return (
    <>
      <ReadingProgress />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Perfect Sitting Posture Guide
        </h1>
        
        <SimpleAuthor 
          authorName="PostureTips Team"
          lastUpdated="2025-10-24"
        />
        
        <ShortAnswer>
          <p>Ideal sitting posture has feet flat, back supported...</p>
        </ShortAnswer>
        
        <KeyTakeaways 
          takeaways={[
            "Feet flat on floor or footrest",
            "Back fully supported by chair"
          ]} 
        />
        
        {/* Main content */}
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>Content here...</p>
        </div>
        
        <FAQSection faqs={faqs} />
        
        <RelatedArticles articles={related} />
      </article>
    </>
  )
}
```

---

## ✅ VERIFICATION CHECKLIST

After copying components, verify:

- [ ] All component files copied successfully
- [ ] No import errors when running `npm run dev`
- [ ] Breadcrumbs updated to posturetips.com domain
- [ ] SimpleAuthor.js created
- [ ] Test page renders all components correctly
- [ ] Components use posturetips Tailwind colors (primary-600, etc.)
- [ ] No references to "neck hump" or "dowagers hump" in copied files
- [ ] All components are functional (no broken features)

---

**Status:** ✅ Ready to implement  
**Time to copy components:** 5-10 minutes  
**Time saved vs. building from scratch:** ~18 hours  
**Next Action:** Execute "Quick Start" commands above when setting up posturetips.com

**This reuse strategy will accelerate your Week 3 development significantly!**




