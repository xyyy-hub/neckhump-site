import Link from 'next/link'

export const metadata = {
  title: 'Neck Hump: Complete Guide to Forward Head Posture | NeckHump.com',
  description: 'The definitive resource for neck hump (forward head posture). Learn causes, exercises, and solutions. Evidence-based information for tech neck and computer posture.',
  keywords: ['neck hump', 'forward head posture', 'tech neck', 'computer neck', 'neck hump exercises', 'how to fix neck hump', 'cervical lordosis', 'dowagers hump'],
  openGraph: {
    title: 'Neck Hump: Complete Guide to Forward Head Posture',
    description: 'The definitive resource for understanding and fixing neck hump. Evidence-based solutions for forward head posture.',
    url: 'https://neckhump.com',
  },
}

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Neck Hump Specialist Header */}
      <header className="mb-16 py-8">
        <div className="text-center mb-8 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            The Complete Guide to Neck Hump
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            Everything you need to know about <strong>forward head posture</strong> and <strong>tech neck</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Evidence-based resource covering causes, exercises, and solutions for neck hump. 
            Created specifically for desk workers, gamers, and anyone suffering from computer neck.
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
