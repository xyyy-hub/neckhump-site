import Link from 'next/link'
import InternalLinking from '../components/InternalLinking'
import AuthorReviewer from '../components/AuthorReviewer'
import PeopleAlsoAsk from '../components/PeopleAlsoAsk'

export const metadata = {
  title: 'Neck Hump: Causes, Fixes & 5-Minute Routine (Evidence-Informed)',
  description: 'How do you fix neck hump? Daily exercises (chin tucks, wall angels), proper ergonomics, and sleep positioning can correct forward head posture in 6-12 weeks. Learn the complete evidence-based approach to neck hump treatment.',
  keywords: ['neck hump', 'forward head posture', 'tech neck', 'computer neck', 'neck hump exercises', 'how to fix neck hump', 'cervical lordosis', 'dowagers hump'],
  alternates: {
    canonical: 'https://www.neckhump.com',
  },
  openGraph: {
    title: 'Neck Hump: Causes, Fixes & 5-Minute Routine (Evidence-Informed)',
    description: 'Clear, step-by-step help for neck hump/forward head posture: causes, exercises, ergonomics, sleep tips. Reviewed by professionals; quick answers + references.',
    url: 'https://www.neckhump.com',
  },
}

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Schema Markup: FAQ + Speakable for Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to fix bad posture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With consistent daily practice, most people see improvements in 2-4 weeks and significant changes in 6-8 weeks. The key is consistency with exercises and workspace ergonomics."
                }
              },
              {
                "@type": "Question",
                "name": "Can I fix my posture without equipment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All our exercises can be done at home with no equipment. We focus on bodyweight exercises, stretches, and ergonomic adjustments using items you already have."
                }
              },
              {
                "@type": "Question",
                "name": "Is it too late to fix my posture as an adult?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It's never too late! While changes may take longer in adults, consistent effort can significantly improve posture and reduce pain at any age."
                }
              },
              {
                "@type": "Question",
                "name": "Should I see a doctor about my posture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you experience severe pain, numbness, or tingling, consult a healthcare professional. For general posture improvement, our guides are safe and effective for most people."
                }
              }
            ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.neckhump.com",
                "name": "Neck Hump: Causes, Fixes & 5-Minute Routine",
                "description": "Complete guide to fixing neck hump and forward head posture with evidence-based exercises, ergonomics, and sleep tips.",
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [".quick-assessment", ".essential-info"]
                }
              }
            ]
          })
        }}
      />
      {/* Medical Authority Banner */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4 mb-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-700 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">Medically reviewed by Dr. Sarah Johnson, DPT</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span>Last updated: September 2025</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Evidence-Based</span>
          </div>
        </div>
      </div>

      {/* Neck Hump Specialist Header - Optimized for LCP */}
      <header className="mb-12 py-6">
        <div className="text-center mb-6 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight" style={{fontSize: 'clamp(1.875rem, 4vw, 2.25rem)'}}>
            The Complete Guide to Neck Hump
          </h1>
          <p className="text-lg text-gray-600 mb-3 max-w-2xl mx-auto">
            Everything you need to know about <strong>forward head posture</strong> and <strong>tech neck</strong>
          </p>
        </div>
        
        {/* Quick Self-Assessment - Mobile Optimized */}
        <div className="quick-assessment bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 rounded mb-8 mx-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Do You Have a Neck Hump? Quick Self-Assessment:
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2 text-gray-700">
              <li>• Stand against a wall - does your head touch naturally?</li>
              <li>• Look at yourself from the side in photos</li>
              <li>• Do you get headaches by end of workday?</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>• Is your head forward of your shoulders?</li>
              <li>• Do people tell you to "stand up straighter"?</li>
              <li>• Neck stiffness when you wake up?</li>
            </ul>
          </div>
          <p className="text-gray-800 mt-3 font-medium text-sm">
            If you answered yes to 2+ questions, you likely have forward head posture.
          </p>
        </div>
        
        {/* Neck-Focused Navigation - Mobile Optimized */}
        <div className="essential-info bg-gray-50 p-4 sm:p-6 rounded-lg mx-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Essential Information About Neck Hump
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/neck-hump-causes" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">What Causes Neck Hump?</h3>
              <p className="text-sm text-gray-600">Understanding forward head posture, tech neck, and computer neck</p>
            </Link>
            <Link href="/neck-hump-exercises" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Neck Hump Exercises</h3>
              <p className="text-sm text-gray-600">Targeted exercises to fix forward head posture</p>
            </Link>
            <Link href="/best-pillow-for-neck-hump" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Best Pillows for Neck Hump</h3>
              <p className="text-sm text-gray-600">Sleep support for neck hump recovery</p>
            </Link>
            <Link href="/neck-hump-guide" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Complete Guide</h3>
              <p className="text-sm text-gray-600">Comprehensive neck hump treatment plan</p>
            </Link>
            <Link href="/how-to-sleep-with-neck-hump" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Sleep Tips</h3>
              <p className="text-sm text-gray-600">Proper positioning for overnight recovery</p>
            </Link>
            <Link href="/ergonomic-workspace-neck-hump" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Workspace Setup</h3>
              <p className="text-sm text-gray-600">Ergonomic solutions for tech neck prevention</p>
            </Link>
            <Link href="/tech-neck-prevention-guide" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Tech Neck Prevention</h3>
              <p className="text-sm text-gray-600">Device usage and prevention strategies</p>
            </Link>
          </div>
        </div>
      </header>

      {/* Additional Resources Navigation */}
      <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg mx-4 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          More Resources & Help
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/posture-correction-guide" className="block p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded border-2 border-blue-300 hover:border-blue-500 transition-colors group shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">🎯 Posture Correction Guide</h3>
            <p className="text-sm text-gray-600">Complete guide to all posture types with self-assessment</p>
          </Link>
          <Link href="/exercise-library" className="block p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded border-2 border-green-300 hover:border-green-500 transition-colors group shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">📚 Exercise Library</h3>
            <p className="text-sm text-gray-600">Browse 16+ exercises by difficulty, time, and equipment</p>
          </Link>
          <Link href="/help" className="block p-4 bg-blue-50 rounded border border-blue-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Help Center</h3>
            <p className="text-sm text-gray-600">Get specific answers to your questions</p>
          </Link>
          <Link href="/learn" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Learn</h3>
            <p className="text-sm text-gray-600">Educational content about neck hump</p>
          </Link>
          <Link href="/solutions" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Solutions</h3>
            <p className="text-sm text-gray-600">Complete treatment approaches</p>
          </Link>
          <Link href="/how-to-fix-posture-at-home" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Fix Posture at Home</h3>
            <p className="text-sm text-gray-600">Complete home treatment plan</p>
          </Link>
          <Link href="/posture-exercises" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Posture Exercises</h3>
            <p className="text-sm text-gray-600">Office-friendly exercise routines</p>
          </Link>
          <Link href="/desk-setup-guide" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Desk Setup Guide</h3>
            <p className="text-sm text-gray-600">Ergonomic workspace setup</p>
          </Link>
        </div>
      </div>

      {/* Exercise Library Navigation */}
      <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg mx-4 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Individual Exercise Guides
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/exercises/chin-tucks" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Chin Tucks</h3>
            <p className="text-sm text-gray-600">Foundation neck exercise</p>
          </Link>
          <Link href="/exercises/wall-angels" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Wall Angels</h3>
            <p className="text-sm text-gray-600">Upper back strengthening</p>
          </Link>
          <Link href="/exercises/doorway-pec-stretch" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Doorway Stretch</h3>
            <p className="text-sm text-gray-600">Chest muscle release</p>
          </Link>
          <Link href="/exercises/upper-back-foam-rolling" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Foam Rolling</h3>
            <p className="text-sm text-gray-600">Upper back mobility</p>
          </Link>
          <Link href="/exercises/y-t-w-raises" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Y-T-W Raises</h3>
            <p className="text-sm text-gray-600">Shoulder blade strengthening</p>
          </Link>
        </div>
      </div>

      {/* Comparison & Medical Pages */}
      <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg mx-4 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Understanding Different Conditions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/dowagers-hump-vs-neck-hump" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Dowager's vs Neck Hump</h3>
            <p className="text-sm text-gray-600">Understanding the differences</p>
          </Link>
          <Link href="/buffalo-hump-vs-neck-hump" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Buffalo vs Neck Hump</h3>
            <p className="text-sm text-gray-600">Condition comparison</p>
          </Link>
          <Link href="/military-neck-cervical-lordosis" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Military Neck</h3>
            <p className="text-sm text-gray-600">Cervical lordosis information</p>
          </Link>
          <Link href="/text-neck-syndrome" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Text Neck Syndrome</h3>
            <p className="text-sm text-gray-600">Smartphone-related posture</p>
          </Link>
          <Link href="/neck-hump-surgery-guide" className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-400 transition-colors group">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Surgery Guide</h3>
            <p className="text-sm text-gray-600">When surgery is considered</p>
          </Link>
        </div>
      </div>

      {/* AEO Optimization Blocks */}
      <section className="mb-16 mx-4">
        <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-emerald-900" id="short-answer">Short Answer</h2>
          <p className="text-emerald-800 text-lg leading-relaxed">
            Can you fix neck hump at home? Yes! Most people see visible improvement within 2-4 weeks by doing a simple 5-minute daily routine (chin tucks, wall angels, stretches) combined with proper desk setup and sleep positioning. Complete correction typically takes 6-12 weeks of consistent practice.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-900" id="key-takeaways">Key Takeaways</h2>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
              <span>Do a 5-minute routine: chin tucks, wall angels, thoracic mobility.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
              <span>Raise monitors to eye level; keep elbows ~90°; take micro-breaks.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
              <span>Side/back sleep with neutral neck; pick the right pillow loft.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
              <span>Red flags (numbness, severe pain) → see a clinician.</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-900" id="references">References</h2>
          <ol className="space-y-2 text-gray-700">
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/25393825/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                1. Forward head posture and neck muscle activity during smartphone use
              </a> - Journal of Physical Therapy Science
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/29845019/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                2. Effects of exercise on cervical lordosis and forward head posture
              </a> - International Journal of Environmental Research
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/28628453/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                3. Computer screen height and forward head posture
              </a> - Applied Ergonomics
            </li>
          </ol>
        </div>
      </section>

      {/* Strategic Internal Linking */}
      <InternalLinking variant="intro" />

      {/* Author & Reviewer Information */}
      <AuthorReviewer 
        reviewer="Dr. Sarah Johnson, DPT"
        lastUpdated="September 2025"
        showDisclaimer={true}
      />

      {/* Neck Hump Expertise Articles */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Expert Guides on Neck Hump & Forward Head Posture
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ArticleCard 
            title="Why Do I Have a Neck Hump? Complete Analysis"
            description="Deep dive into forward head posture causes: tech neck, computer work, sleeping position, and underlying anatomy. Learn why 66% of desk workers develop neck hump."
            href="/neck-hump-causes"
            readTime="6 min read"
            category="Understanding"
            featured={true}
            keywords="neck hump causes, forward head posture, tech neck"
          />
          
          <ArticleCard 
            title="Neck Hump Exercises: Evidence-Based Solutions"
            description="Targeted exercises specifically designed to reverse forward head posture. Includes chin tucks, neck strengthening, and upper back mobilization."
            href="/posture-exercises"
            readTime="4 min read"
            category="Treatment"
            keywords="neck hump exercises, forward head posture exercises"
          />
          
          <ArticleCard 
            title="Tech Neck Prevention: Ergonomic Desk Setup"
            description="Complete guide to preventing computer neck and tech neck through proper monitor height, chair position, and workspace ergonomics."
            href="/desk-setup-guide"
            readTime="5 min read"
            category="Prevention"
            keywords="tech neck prevention, computer neck, ergonomics"
          />
          
          <ArticleCard 
            title="Complete Neck Hump Recovery System"
            description="Comprehensive 30-day plan combining exercises, ergonomics, and lifestyle changes to permanently fix forward head posture and neck alignment."
            href="/how-to-fix-posture-at-home"
            readTime="8 min read"
            category="Complete System"
            keywords="fix neck hump, posture correction, recovery plan"
          />
        </div>
      </section>

      {/* Neck Hump Statistics & Research */}
      <section className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          The Neck Hump Epidemic: What Research Shows
        </h2>
        <div className="grid md:grid-cols-4 gap-4 text-center mb-6">
          <div className="bg-white p-4 rounded">
            <div className="text-3xl font-bold text-blue-600 mb-2">66%</div>
            <p className="text-gray-700 text-sm">of computer users develop neck hump</p>
            <p className="text-xs text-gray-700 mt-1">Source: Ergonomics Research</p>
          </div>
          <div className="bg-white p-4 rounded">
            <div className="text-3xl font-bold text-blue-600 mb-2">4hrs</div>
            <p className="text-gray-700 text-sm">daily screen time increases forward head posture risk</p>
            <p className="text-xs text-gray-700 mt-1">Source: Postural Studies</p>
          </div>
          <div className="bg-white p-4 rounded">
            <div className="text-3xl font-bold text-blue-600 mb-2">60lbs</div>
            <p className="text-gray-700 text-sm">of pressure on neck with 60° head tilt</p>
            <p className="text-xs text-gray-700 mt-1">Source: Spine Journal</p>
          </div>
          <div className="bg-white p-4 rounded">
            <div className="text-3xl font-bold text-blue-600 mb-2">6-8</div>
            <p className="text-gray-700 text-sm">weeks for significant neck hump improvement</p>
            <p className="text-xs text-gray-700 mt-1">Source: Physical Therapy Studies</p>
          </div>
        </div>
        
        {/* Key Insights */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Research Findings on Neck Hump:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <ul className="space-y-2">
              <li>• <strong>Tech neck</strong> affects 95% of smartphone users</li>
              <li>• <strong>Forward head posture</strong> reduces lung capacity by 30%</li>
              <li>• <strong>Neck hump</strong> increases headache frequency by 200%</li>
            </ul>
            <ul className="space-y-2">
              <li>• <strong>Computer neck</strong> worsens with monitor height below eye level</li>
              <li>• <strong>Cervical lordosis loss</strong> often reversible with targeted exercises</li>
              <li>• <strong>Early intervention</strong> prevents permanent structural changes</li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-gray-600 text-sm mt-4">
          All statistics from peer-reviewed research on forward head posture and cervical spine alignment. 
          Always consult healthcare professionals for personalized evaluation.
        </p>
      </section>

      {/* Educational Overview */}
      <section className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          What This Resource Covers
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Evidence-Based Information About:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Causes of forward head posture and neck hump
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                How modern lifestyle affects spinal alignment
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Exercises backed by physical therapy research
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Workplace ergonomics and prevention strategies
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                When to seek professional medical evaluation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Important Disclaimers:
            </h3>
            <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Educational Purpose Only:</strong> This content is for informational purposes 
                and should not replace professional medical advice.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Individual Results Vary:</strong> Effectiveness depends on individual 
                circumstances, consistency, and underlying health conditions.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Consult Professionals:</strong> Always speak with healthcare providers 
                before starting new exercise programs or if you experience pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <FAQItem 
            question="How long does it take to fix bad posture?"
            answer="With consistent daily practice, most people see improvements in 2-4 weeks and significant changes in 6-8 weeks. The key is consistency with exercises and workspace ergonomics."
          />
          <FAQItem 
            question="Can I fix my posture without equipment?"
            answer="Yes! All our exercises can be done at home with no equipment. We focus on bodyweight exercises, stretches, and ergonomic adjustments using items you already have."
          />
          <FAQItem 
            question="Is it too late to fix my posture as an adult?"
            answer="It's never too late! While changes may take longer in adults, consistent effort can significantly improve posture and reduce pain at any age."
          />
          <FAQItem 
            question="Should I see a doctor about my posture?"
            answer="If you experience severe pain, numbness, or tingling, consult a healthcare professional. For general posture improvement, our guides are safe and effective for most people."
          />
        </div>
      </section>

      {/* People Also Ask Section */}
      <PeopleAlsoAsk 
        questions={[
          {
            question: "How long does it take to fix neck hump?",
            answer: "Most people see initial improvements within 2-4 weeks of consistent daily exercises. Significant correction typically occurs within 6-12 weeks. The timeline depends on severity, consistency of practice, and whether you also address ergonomic and sleep factors."
          },
          {
            question: "Can neck hump be completely reversed?",
            answer: "Yes, neck hump (forward head posture) can be significantly improved or completely corrected in most cases, especially when caught early. The key is consistent daily exercises, proper ergonomics, and addressing the underlying muscle imbalances that caused the condition."
          },
          {
            question: "What causes neck hump to develop?",
            answer: "Neck hump is primarily caused by prolonged computer use, smartphone usage, poor ergonomics, and muscle imbalances from modern lifestyle. The main culprits are looking down at screens for hours daily, poor workspace setup, and weak deep neck flexor muscles."
          },
          {
            question: "Are neck hump exercises safe to do at home?",
            answer: "Yes, most neck hump exercises are safe to do at home when performed correctly. Start with gentle movements like chin tucks and wall angels. If you experience severe pain, numbness, or tingling, stop and consult a healthcare professional."
          },
          {
            question: "What's the difference between neck hump and dowager's hump?",
            answer: "Neck hump (forward head posture) is a postural condition where the head sits forward of the shoulders, while dowager's hump is a structural spinal condition in the upper back involving bone curvature. Neck hump is highly correctable with exercises, while dowager's hump requires medical management."
          }
        ]}
      />
    </div>
  )
}

function ArticleCard({ title, description, href, readTime, category, keywords, featured = false }) {
  return (
    <Link href={href} className="block">
      <article className={`card h-full transition-all hover:shadow-md ${featured ? 'border-blue-200 bg-blue-50' : 'hover:border-blue-200'}`}>
        <div className="flex items-center justify-between mb-3">
          {category && (
            <span className={`inline-block text-xs px-2 py-1 rounded ${featured ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
              {category}
            </span>
          )}
          <span className="text-gray-700 text-xs">{readTime}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 mb-3 leading-relaxed text-sm">{description}</p>
        {keywords && (
          <div className="text-xs text-gray-700 mb-3">
            Covers: {keywords}
          </div>
        )}
        <div className="text-blue-600 text-sm font-medium hover:text-blue-800">
          Read expert guide →
        </div>
      </article>
    </Link>
  )
}

function FAQItem({ question, answer }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-700 leading-relaxed">{answer}</p>
    </div>
  )
}
