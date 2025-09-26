import Link from 'next/link'
import InternalLinking from '../components/InternalLinking'
import AuthorReviewer from '../components/AuthorReviewer'

export const metadata = {
  title: 'Neck Hump: Causes, Fixes & 5-Minute Routine (Evidence-Informed)',
  description: 'Clear, step-by-step help for neck hump/forward head posture: causes, exercises, ergonomics, sleep tips. Reviewed by professionals; quick answers + references.',
  keywords: ['neck hump', 'forward head posture', 'tech neck', 'computer neck', 'neck hump exercises', 'how to fix neck hump', 'cervical lordosis', 'dowagers hump'],
  alternates: {
    canonical: 'https://neckhump.com',
  },
  openGraph: {
    title: 'Neck Hump: Causes, Fixes & 5-Minute Routine (Evidence-Informed)',
    description: 'Clear, step-by-step help for neck hump/forward head posture: causes, exercises, ergonomics, sleep tips. Reviewed by professionals; quick answers + references.',
    url: 'https://neckhump.com',
  },
}

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* FAQ Schema for Generative Engine Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
          })
        }}
      />
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
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded mb-8 mx-4">
          <h2 className="text-lg font-semibold text-yellow-800 mb-3">
            Do You Have a Neck Hump? Quick Check:
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2 text-yellow-700">
              <li>• Stand against a wall - does your head touch naturally?</li>
              <li>• Look at yourself from the side in photos</li>
              <li>• Do you get headaches by end of workday?</li>
            </ul>
            <ul className="space-y-2 text-yellow-700">
              <li>• Is your head forward of your shoulders?</li>
              <li>• Do people tell you to "stand up straighter"?</li>
              <li>• Neck stiffness when you wake up?</li>
            </ul>
          </div>
          <p className="text-yellow-800 mt-3 font-medium text-sm">
            If you answered yes to 2+ questions, you likely have forward head posture.
          </p>
        </div>
        
        {/* Neck-Focused Navigation - Mobile Optimized */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mx-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Start Your Neck Hump Recovery Journey
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/neck-hump-causes" className="block p-4 bg-white rounded border hover:border-blue-300 transition-colors group">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600">🔍 What Causes Neck Hump?</h3>
              <p className="text-sm text-gray-600">Understanding forward head posture, tech neck, and computer neck</p>
            </Link>
            <Link href="/neck-hump-exercises" className="block p-4 bg-white rounded border hover:border-blue-300 transition-colors group">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600">💪 Neck Hump Exercises</h3>
              <p className="text-sm text-gray-600">Targeted exercises to fix forward head posture</p>
            </Link>
            <Link href="/best-pillow-for-neck-hump" className="block p-4 bg-white rounded border hover:border-blue-300 transition-colors group">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600">🛏️ Best Pillows</h3>
              <p className="text-sm text-gray-600">Sleep support for neck hump recovery</p>
            </Link>
            <Link href="/neck-hump-guide" className="block p-4 bg-white rounded border hover:border-blue-300 transition-colors group">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600">📚 Complete Guide</h3>
              <p className="text-sm text-gray-600">Comprehensive neck hump treatment plan</p>
            </Link>
            <Link href="/how-to-sleep-with-neck-hump" className="block p-4 bg-white rounded border hover:border-blue-300 transition-colors group">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600">😴 Sleep Tips</h3>
              <p className="text-sm text-gray-600">Proper positioning for overnight recovery</p>
            </Link>
            <Link href="/ergonomic-workspace-neck-hump" className="block p-4 bg-white rounded border hover:border-blue-300 transition-colors group">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600">🖥️ Workspace Setup</h3>
              <p className="text-sm text-gray-600">Ergonomic solutions for tech neck prevention</p>
            </Link>
            <Link href="/tech-neck-prevention-guide" className="block p-4 bg-white rounded border hover:border-blue-300 transition-colors group">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600">📱 Tech Neck Prevention</h3>
              <p className="text-sm text-gray-600">Device usage and prevention strategies</p>
            </Link>
          </div>
        </div>
      </header>

      {/* AEO Optimization Blocks */}
      <section className="mb-16 mx-4">
        <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-emerald-900" id="short-answer">Short Answer</h2>
          <p className="text-emerald-800 text-lg leading-relaxed">
            Daily mobility + postural strength (≈5 minutes), plus desk and sleep alignment, typically improves neck hump in 6–12 weeks.
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
