import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'Timeline Questions: Neck Hump Recovery Expectations | NeckHump.com',
  description: 'Get realistic timelines for neck hump correction. Learn about recovery expectations, progress tracking, exercise frequency, and when to expect improvements.',
  keywords: ['neck hump timeline', 'posture correction timeline', 'neck hump recovery time', 'exercise frequency', 'progress expectations'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/timeline-questions',
  },
  openGraph: {
    title: 'Timeline Questions: Neck Hump Recovery Expectations',
    description: 'Get realistic timelines for neck hump correction. Learn about recovery expectations, progress tracking, exercise frequency, and when to expect improvements.',
    url: 'https://www.neckhump.com/help/timeline-questions',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'website',
  },
}

export default function TimelineQuestionsPage() {
  const articles = [
    {
      title: 'How Long Until Neck Hump Improves?',
      description: 'Realistic timeline expectations for neck hump correction. Factors affecting recovery speed and what to expect week by week.',
      link: '/help/timeline-questions/how-long-until-neck-hump-improves',
      timeline: '2-6 months',
      category: 'General Timeline'
    },
    {
      title: 'When to Increase Exercise Difficulty',
      description: 'Learn when and how to safely progress your neck exercises. Warning signs and progression guidelines.',
      link: '/help/timeline-questions/when-to-increase-exercise-difficulty',
      timeline: '2-4 weeks',
      category: 'Progression'
    },
    {
      title: 'Realistic Timeline for Severe Neck Hump',
      description: 'Extended recovery expectations for severe cases. What to expect during long-term correction.',
      link: '/help/timeline-questions/realistic-timeline-severe-neck-hump',
      timeline: '6-12 months',
      category: 'Severe Cases'
    },
    {
      title: 'How Often Should I Do Exercises?',
      description: 'Optimal exercise frequency for neck hump correction. Daily routines and consistency guidelines.',
      link: '/help/timeline-questions/how-often-should-i-do-exercises',
      timeline: 'Daily',
      category: 'Frequency'
    },
    {
      title: 'Progress Tracking Methods',
      description: 'How to measure and track your neck hump improvement. Photos, measurements, and progress indicators.',
      link: '/help/timeline-questions/progress-tracking-methods',
      timeline: 'Weekly',
      category: 'Tracking'
    },
    {
      title: 'Plateau Periods and Setbacks',
      description: 'Understanding normal plateaus and setbacks during neck hump correction. How to stay motivated.',
      link: '/help/timeline-questions/plateau-periods-and-setbacks',
      timeline: 'Ongoing',
      category: 'Challenges'
    },
    {
      title: 'Age-Related Recovery Differences',
      description: 'How age affects neck hump correction timelines. Expectations for different age groups.',
      link: '/help/timeline-questions/age-related-recovery-differences',
      timeline: 'Varies by age',
      category: 'Age Factors'
    },
    {
      title: 'Seasonal and Lifestyle Impact',
      description: 'How seasons, stress, and lifestyle changes affect neck hump correction progress.',
      link: '/help/timeline-questions/seasonal-and-lifestyle-impact',
      timeline: 'Variable',
      category: 'Lifestyle'
    },
    {
      title: 'When to Seek Professional Help',
      description: 'Signs that indicate you need professional intervention for your neck hump correction.',
      link: '/help/timeline-questions/when-to-seek-professional-help',
      timeline: 'As needed',
      category: 'Professional Help'
    },
    {
      title: 'Long-term Maintenance Timeline',
      description: 'How to maintain neck hump corrections long-term. Ongoing exercise and lifestyle requirements.',
      link: '/help/timeline-questions/long-term-maintenance-timeline',
      timeline: 'Lifetime',
      category: 'Maintenance'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Timeline Questions', href: '/help/timeline-questions' }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'General Timeline': return 'bg-blue-100 text-blue-800'
      case 'Progression': return 'bg-green-100 text-green-800'
      case 'Severe Cases': return 'bg-red-100 text-red-800'
      case 'Frequency': return 'bg-purple-100 text-purple-800'
      case 'Tracking': return 'bg-yellow-100 text-yellow-800'
      case 'Challenges': return 'bg-orange-100 text-orange-800'
      case 'Age Factors': return 'bg-indigo-100 text-indigo-800'
      case 'Lifestyle': return 'bg-pink-100 text-pink-800'
      case 'Professional Help': return 'bg-gray-100 text-gray-800'
      case 'Maintenance': return 'bg-teal-100 text-teal-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ⏰ Timeline Questions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Realistic expectations, progress tracking, and patience guidance for neck hump correction. 
          Learn about recovery timelines, exercise frequency, and what to expect during your journey.
        </p>
      </div>

      {/* Timeline Overview */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Typical Recovery Timeline</h2>
        <div className="grid md:grid-cols-3 gap-4 text-blue-800">
          <div>
            <strong>Mild Cases:</strong> 2-4 months
          </div>
          <div>
            <strong>Moderate Cases:</strong> 4-8 months
          </div>
          <div>
            <strong>Severe Cases:</strong> 6-12 months
          </div>
        </div>
        <p className="text-blue-700 text-sm mt-2">
          Individual results vary based on age, consistency, medical conditions, and lifestyle factors.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.link}
            className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {article.timeline}
              </span>
            </div>
            
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-3">
              {article.title}
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {article.description}
            </p>
            
            <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 text-sm">
              Read timeline guide →
            </div>
          </Link>
        ))}
      </div>

      {/* Progress Tips */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Progress Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">✅ What Helps Progress</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Consistent daily exercise routine</li>
              <li>• Proper ergonomic setup at work</li>
              <li>• Good sleep posture and pillow</li>
              <li>• Stress management and relaxation</li>
              <li>• Regular progress photos and measurements</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">❌ What Slows Progress</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Inconsistent exercise routine</li>
              <li>• Poor work ergonomics</li>
              <li>• Inadequate sleep or poor sleep position</li>
              <li>• High stress levels</li>
              <li>• Pushing through pain or overdoing exercises</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How long does it take to see results?</h3>
            <p className="text-gray-600">
              Most people notice initial improvements in 2-4 weeks, with more significant changes visible after 2-3 months. 
              Complete correction typically takes 6-12 months depending on severity and consistency.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What if I don't see progress after 2 months?</h3>
            <p className="text-gray-600">
              If you haven't seen any improvement after 2 months of consistent exercise, consider consulting a physical therapist. 
              You may need professional assessment, different exercise approaches, or evaluation for underlying conditions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Is it normal to have setbacks?</h3>
            <p className="text-gray-600">
              Yes, setbacks are normal and expected. You may have periods of rapid improvement followed by plateaus, 
              or temporary worsening due to stress, illness, or changes in routine. Stay consistent through these phases.
            </p>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/help/troubleshooting" className="bg-red-50 border border-red-200 rounded-lg p-6 hover:bg-red-100 transition-colors">
          <h3 className="text-lg font-semibold text-red-900 mb-2">🔧 Troubleshooting</h3>
          <p className="text-red-800 text-sm">Common problems, pain management, and when to seek help</p>
        </Link>
        
        <Link href="/help/exercises-safety" className="bg-green-50 border border-green-200 rounded-lg p-6 hover:bg-green-100 transition-colors">
          <h3 className="text-lg font-semibold text-green-900 mb-2">🛡️ Exercises & Safety</h3>
          <p className="text-green-800 text-sm">Safe neck hump exercises for medical conditions and special circumstances</p>
        </Link>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to see results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most people notice initial improvements in 2-4 weeks, with more significant changes visible after 2-3 months. Complete correction typically takes 6-12 months depending on severity and consistency."
                }
              },
              {
                "@type": "Question",
                "name": "What if I don't see progress after 2 months?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you haven't seen any improvement after 2 months of consistent exercise, consider consulting a physical therapist. You may need professional assessment, different exercise approaches, or evaluation for underlying conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Is it normal to have setbacks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, setbacks are normal and expected. You may have periods of rapid improvement followed by plateaus, or temporary worsening due to stress, illness, or changes in routine. Stay consistent through these phases."
                }
              }
            ]
          })
        }}
      />

      {/* Medical Disclaimer */}
      <div className="text-sm text-gray-600 mt-12 p-4 bg-gray-50 rounded-lg">
        <p><strong>Medical Disclaimer:</strong> The information in this help center is for educational purposes only and is not intended as medical advice. Always consult with a licensed healthcare provider before starting any exercise program, especially if you have medical conditions, injuries, or concerns about your health.</p>
      </div>
    </div>
  )
}
