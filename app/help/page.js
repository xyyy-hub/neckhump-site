import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'

export const metadata = {
  title: 'Help Center: Neck Hump & Posture Questions | NeckHump.com',
  description: 'Get answers to specific neck hump and posture questions. Find help for exercises with medical conditions, pregnancy, seniors, equipment alternatives, timelines, and troubleshooting.',
  keywords: ['neck hump help', 'posture questions', 'exercise safety', 'neck hump troubleshooting', 'posture modifications'],
  alternates: {
    canonical: 'https://www.neckhump.com/help',
  },
  openGraph: {
    title: 'Help Center: Neck Hump & Posture Questions',
    description: 'Get answers to specific neck hump and posture questions. Find help for exercises with medical conditions, pregnancy, seniors, equipment alternatives, timelines, and troubleshooting.',
    url: 'https://www.neckhump.com/help',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HelpCenterPage() {
  const categories = [
    {
      title: 'Exercises & Safety',
      description: 'Exercise modifications for medical conditions, injuries, and special circumstances',
      icon: '🛡️',
      link: '/help/exercises-safety',
      articleCount: '20 articles',
      popularQuestions: [
        'Can I do chin tucks with herniated disc?',
        'Neck exercises safe during pregnancy?',
        'Forward head posture with arthritis?',
        'Exercises after whiplash injury?'
      ]
    },
    {
      title: 'Specific Situations',
      description: 'Posture solutions for different life circumstances and demographics',
      icon: '👥',
      link: '/help/specific-situations',
      articleCount: '20 articles',
      popularQuestions: [
        'Fix neck hump while breastfeeding?',
        'Posture exercises for seniors over 65?',
        'Neck exercises for wheelchair users?',
        'Maintain posture during long flights?'
      ]
    },
    {
      title: 'Product Questions',
      description: 'Equipment recommendations, alternatives, and budget options',
      icon: '🛒',
      link: '/help/product-questions',
      articleCount: '10 articles',
      popularQuestions: [
        'Best pillow height for side sleepers?',
        'Memory foam vs cervical pillow?',
        'Budget pillow alternatives under $50?',
        'Foam roller size guide?'
      ]
    },
    {
      title: 'Timeline Questions',
      description: 'Realistic expectations, progress tracking, and patience guidance',
      icon: '⏰',
      link: '/help/timeline-questions',
      articleCount: '10 articles',
      popularQuestions: [
        'How long until neck hump improves?',
        'When to increase exercise difficulty?',
        'Realistic timeline for severe neck hump?',
        'How often should I do exercises?'
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Common problems, pain management, and when to seek help',
      icon: '🔧',
      link: '/help/troubleshooting',
      articleCount: '10 articles',
      popularQuestions: [
        'Chin tucks causing dizziness?',
        'Exercises making neck pain worse?',
        'No improvement after 8 weeks?',
        'Headaches after posture exercises?'
      ]
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Help Center
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get specific answers to your neck hump and posture questions. 
          Find help for medical conditions, special situations, equipment, timelines, and troubleshooting.
        </p>
      </div>

      {/* Search Box */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{category.icon}</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {category.title}
                </h2>
                <p className="text-sm text-blue-600 font-medium">{category.articleCount}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">
              {category.description}
            </p>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Popular Questions:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {category.popularQuestions.slice(0, 3).map((question, qIndex) => (
                  <li key={qIndex} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
              Browse articles →
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Most Popular</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/exercises-safety/can-i-do-chin-tucks-with-herniated-disc" className="text-blue-600 hover:underline">Chin tucks with herniated disc</Link></li>
              <li><Link href="/help/timeline-questions/how-long-until-neck-hump-improves" className="text-blue-600 hover:underline">How long until improvement</Link></li>
              <li><Link href="/help/specific-situations/posture-exercises-for-seniors" className="text-blue-600 hover:underline">Exercises for seniors</Link></li>
              <li><Link href="/help/troubleshooting/chin-tucks-causing-dizziness" className="text-blue-600 hover:underline">Chin tucks causing dizziness</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Safety & Medical</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/exercises-safety/exercises-safe-during-pregnancy" className="text-blue-600 hover:underline">Safe during pregnancy</Link></li>
              <li><Link href="/help/exercises-safety/neck-exercises-with-arthritis" className="text-blue-600 hover:underline">Exercises with arthritis</Link></li>
              <li><Link href="/help/exercises-safety/forward-head-posture-after-whiplash" className="text-blue-600 hover:underline">After whiplash injury</Link></li>
              <li><Link href="/help/troubleshooting/exercises-making-neck-pain-worse" className="text-blue-600 hover:underline">Exercises making pain worse</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Equipment & Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/product-questions/pillow-height-for-side-sleepers" className="text-blue-600 hover:underline">Pillow height for side sleepers</Link></li>
              <li><Link href="/help/product-questions/memory-foam-vs-cervical-pillow" className="text-blue-600 hover:underline">Memory foam vs cervical pillow</Link></li>
              <li><Link href="/help/product-questions/budget-pillow-alternatives" className="text-blue-600 hover:underline">Budget pillow alternatives</Link></li>
              <li><Link href="/help/product-questions/foam-roller-size-guide" className="text-blue-600 hover:underline">Foam roller size guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Timeline & Progress</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/timeline-questions/when-to-increase-exercise-difficulty" className="text-blue-600 hover:underline">When to increase difficulty</Link></li>
              <li><Link href="/help/timeline-questions/realistic-timeline-severe-neck-hump" className="text-blue-600 hover:underline">Timeline for severe cases</Link></li>
              <li><Link href="/help/timeline-questions/how-often-should-i-do-exercises" className="text-blue-600 hover:underline">How often to exercise</Link></li>
              <li><Link href="/help/troubleshooting/no-improvement-after-8-weeks" className="text-blue-600 hover:underline">No improvement after 8 weeks</Link></li>
            </ul>
          </div>
        </div>
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
                "name": "What is the help center for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The help center provides specific answers to neck hump and posture questions, including exercise modifications for medical conditions, equipment recommendations, timeline expectations, and troubleshooting guidance."
                }
              },
              {
                "@type": "Question",
                "name": "How many help articles are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The help center contains 70+ articles across 5 categories: Exercises & Safety (20 articles), Specific Situations (20 articles), Product Questions (10 articles), Timeline Questions (10 articles), and Troubleshooting (10 articles)."
                }
              },
              {
                "@type": "Question",
                "name": "Are the help articles written by medical professionals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all help articles are reviewed by licensed physical therapists and include medical disclaimers. They provide evidence-based guidance while recommending professional consultation for specific medical conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Can I find help for specific medical conditions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the Exercises & Safety category covers modifications for herniated discs, arthritis, pregnancy, osteoporosis, and many other medical conditions. Each article provides specific guidance and safety considerations."
                }
              },
              {
                "@type": "Question",
                "name": "What if I can't find an answer to my question?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you can't find an answer to your specific question, we recommend consulting with a licensed physical therapist or healthcare provider for personalized guidance, especially for complex medical conditions."
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
