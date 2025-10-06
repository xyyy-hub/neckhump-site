import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'Exercises & Safety: Neck Hump Exercises with Medical Conditions',
  description: 'Safe neck hump exercises for medical conditions: herniated disc, arthritis, pregnancy, osteoporosis, and more. Get specific modifications and safety guidance.',
  keywords: ['neck exercises medical conditions', 'safe neck exercises', 'herniated disc exercises', 'arthritis neck exercises', 'pregnancy neck exercises'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/exercises-safety',
  },
  openGraph: {
    title: 'Exercises & Safety: Neck Hump Exercises with Medical Conditions',
    description: 'Safe neck hump exercises for medical conditions: herniated disc, arthritis, pregnancy, osteoporosis, and more. Get specific modifications and safety guidance.',
    url: 'https://www.neckhump.com/help/exercises-safety',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'website',
  },
}

// Force dynamic rendering to avoid static generation issues

export default function ExercisesSafetyPage() {
  const articles = [
    {
      title: 'Can I Do Chin Tucks with Herniated Disc?',
      description: 'Safe modifications for chin tucks with cervical disc herniation C5-C6 and C6-C7. Learn proper technique and when to avoid.',
      link: '/help/exercises-safety/can-i-do-chin-tucks-with-herniated-disc',
      difficulty: 'Moderate',
      condition: 'Herniated Disc'
    },
    {
      title: 'Neck Hump Exercises Safe During Pregnancy',
      description: 'Trimester-specific guidance for neck exercises during pregnancy. Safe modifications and positions to avoid.',
      link: '/help/exercises-safety/exercises-safe-during-pregnancy',
      difficulty: 'Easy',
      condition: 'Pregnancy'
    },
    {
      title: 'Forward Head Posture Exercises with Arthritis',
      description: 'Gentle neck exercises for rheumatoid arthritis and osteoarthritis. Range of motion and pain management.',
      link: '/help/exercises-safety/neck-exercises-with-arthritis',
      difficulty: 'Easy',
      condition: 'Arthritis'
    },
    {
      title: 'Safe Exercises After Whiplash Injury',
      description: 'Progressive neck exercises after whiplash. Timeline, precautions, and healing-focused approach.',
      link: '/help/exercises-safety/forward-head-posture-after-whiplash',
      difficulty: 'Easy',
      condition: 'Whiplash'
    },
    {
      title: 'Neck Exercises for Osteoporosis Patients',
      description: 'Safe neck strengthening for osteoporosis. Bone density considerations and fracture prevention.',
      link: '/help/exercises-safety/neck-exercises-for-osteoporosis',
      difficulty: 'Easy',
      condition: 'Osteoporosis'
    },
    {
      title: 'Chin Tucks with Cervical Stenosis',
      description: 'Modified chin tucks for spinal stenosis. Avoiding compression and maintaining spinal alignment.',
      link: '/help/exercises-safety/chin-tucks-with-cervical-stenosis',
      difficulty: 'Moderate',
      condition: 'Cervical Stenosis'
    },
    {
      title: 'Exercises After Cervical Fusion Surgery',
      description: 'Post-surgical neck exercises timeline. Healing phases and safe progression after fusion.',
      link: '/help/exercises-safety/exercises-after-cervical-fusion',
      difficulty: 'Easy',
      condition: 'Post-Surgery'
    },
    {
      title: 'Safe Posture Exercises with Fibromyalgia',
      description: 'Low-impact neck exercises for fibromyalgia. Pain management and energy conservation.',
      link: '/help/exercises-safety/posture-exercises-with-fibromyalgia',
      difficulty: 'Easy',
      condition: 'Fibromyalgia'
    },
    {
      title: 'Neck Hump Correction with Multiple Sclerosis',
      description: 'Adaptive neck exercises for MS. Fatigue management and neurological considerations.',
      link: '/help/exercises-safety/neck-hump-correction-with-ms',
      difficulty: 'Easy',
      condition: 'Multiple Sclerosis'
    },
    {
      title: 'Forward Head Posture with Ehlers-Danlos Syndrome',
      description: 'Gentle neck exercises for EDS. Joint hypermobility and connective tissue considerations.',
      link: '/help/exercises-safety/forward-head-posture-with-eds',
      difficulty: 'Easy',
      condition: 'Ehlers-Danlos'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Exercises & Safety', href: '/help/exercises-safety' }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🛡️ Exercises & Safety
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Safe neck hump exercises for medical conditions, injuries, and special circumstances. 
          Get specific modifications and safety guidance from licensed physical therapists.
        </p>
      </div>

      {/* Safety Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-lg">
        <h2 className="text-lg font-semibold text-yellow-900 mb-2">Important Safety Notice</h2>
        <p className="text-yellow-800">
          These articles provide general guidance for common medical conditions. Always consult with your healthcare provider 
          before starting any exercise program, especially if you have specific medical conditions, recent injuries, or concerns.
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
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                {article.difficulty}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {article.condition}
              </span>
            </div>
            
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-3">
              {article.title}
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {article.description}
            </p>
            
            <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 text-sm">
              Read safety guide →
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I do neck exercises if I have a medical condition?</h3>
            <p className="text-gray-600">
              Most neck exercises can be modified for medical conditions. The key is starting slowly, using proper form, 
              and stopping if you experience pain, dizziness, or numbness. Always consult your healthcare provider first.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What should I do if exercises cause pain?</h3>
            <p className="text-gray-600">
              Stop immediately if you experience sharp pain, shooting pain, or pain that worsens. Some muscle soreness 
              is normal, but joint pain, nerve pain, or severe discomfort requires medical evaluation.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How do I know if an exercise is safe for my condition?</h3>
            <p className="text-gray-600">
              Look for articles specific to your condition in this section. Each article provides condition-specific 
              modifications, contraindications, and safety guidelines. When in doubt, consult a physical therapist.
            </p>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/help/specific-situations" className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:bg-blue-100 transition-colors">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">👥 Specific Situations</h3>
          <p className="text-blue-800 text-sm">Posture solutions for different life circumstances and demographics</p>
        </Link>
        
        <Link href="/help/troubleshooting" className="bg-red-50 border border-red-200 rounded-lg p-6 hover:bg-red-100 transition-colors">
          <h3 className="text-lg font-semibold text-red-900 mb-2">🔧 Troubleshooting</h3>
          <p className="text-red-800 text-sm">Common problems, pain management, and when to seek help</p>
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
                "name": "Can I do neck exercises if I have a medical condition?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most neck exercises can be modified for medical conditions. The key is starting slowly, using proper form, and stopping if you experience pain, dizziness, or numbness. Always consult your healthcare provider first."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do if exercises cause pain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stop immediately if you experience sharp pain, shooting pain, or pain that worsens. Some muscle soreness is normal, but joint pain, nerve pain, or severe discomfort requires medical evaluation."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if an exercise is safe for my condition?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Look for articles specific to your condition in this section. Each article provides condition-specific modifications, contraindications, and safety guidelines. When in doubt, consult a physical therapist."
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

// Force dynamic rendering to avoid static generation issues
