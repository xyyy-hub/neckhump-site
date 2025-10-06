import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'Troubleshooting - Neck Hump Help Center',
  description: 'Common problems, pain management, and when to seek help for neck hump and posture exercises. Find solutions to exercise issues and warning signs.',
  keywords: ['neck hump troubleshooting', 'posture exercise problems', 'neck pain after exercises', 'chin tucks dizziness', 'posture exercise side effects'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/troubleshooting',
  },
  openGraph: {
    title: 'Troubleshooting - Neck Hump Help Center',
    description: 'Common problems, pain management, and when to seek help for neck hump and posture exercises. Find solutions to exercise issues and warning signs.',
    url: 'https://www.neckhump.com/help/troubleshooting',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'website',
  },
}

// Force dynamic rendering to avoid static generation issues

export default function TroubleshootingPage() {
  const articles = [
    {
      title: 'Chin Tucks Causing Dizziness',
      description: 'Why chin tucks cause dizziness and how to fix it. Common causes and safe modifications to prevent vertigo.',
      link: '/help/troubleshooting/chin-tucks-causing-dizziness',
      severity: 'Common',
      category: 'Exercise Issues'
    },
    {
      title: 'Exercises Making Neck Pain Worse',
      description: 'Why neck exercises might increase pain and how to modify your routine. When to stop and when to continue.',
      link: '/help/troubleshooting/exercises-making-neck-pain-worse',
      severity: 'Serious',
      category: 'Pain Management'
    },
    {
      title: 'No Improvement After 8 Weeks',
      description: 'Why you might not see results and how to troubleshoot your exercise routine. Common mistakes and solutions.',
      link: '/help/troubleshooting/no-improvement-after-8-weeks',
      severity: 'Common',
      category: 'Progress Issues'
    },
    {
      title: 'Headaches After Posture Exercises',
      description: 'Why posture exercises cause headaches and how to prevent them. Tension headaches vs serious warning signs.',
      link: '/help/troubleshooting/headaches-after-posture-exercises',
      severity: 'Common',
      category: 'Side Effects'
    },
    {
      title: 'Neck Stiffness After Exercises',
      description: 'Why neck exercises cause stiffness and how to reduce it. Warm-up and recovery strategies.',
      link: '/help/troubleshooting/neck-stiffness-after-exercises',
      severity: 'Common',
      category: 'Recovery'
    },
    {
      title: 'Shoulder Pain During Chin Tucks',
      description: 'Why chin tucks cause shoulder pain and how to fix your technique. Common form mistakes.',
      link: '/help/troubleshooting/shoulder-pain-during-chin-tucks',
      severity: 'Common',
      category: 'Exercise Issues'
    },
    {
      title: 'Exercises Feel Too Easy',
      description: 'When and how to progress your neck exercises. Signs you\'re ready for harder variations.',
      link: '/help/troubleshooting/exercises-feel-too-easy',
      severity: 'Minor',
      category: 'Progress Issues'
    },
    {
      title: 'Can\'t Feel Neck Muscles Working',
      description: 'Why you can\'t feel your neck muscles during exercises and how to improve muscle activation.',
      link: '/help/troubleshooting/cant-feel-neck-muscles-working',
      severity: 'Common',
      category: 'Exercise Issues'
    },
    {
      title: 'Neck Cracking During Exercises',
      description: 'Is neck cracking during exercises normal? When it\'s safe and when to be concerned.',
      link: '/help/troubleshooting/neck-cracking-during-exercises',
      severity: 'Common',
      category: 'Side Effects'
    },
    {
      title: 'Exercises Causing Numbness',
      description: 'Why exercises cause numbness and tingling. Warning signs that require immediate medical attention.',
      link: '/help/troubleshooting/exercises-causing-numbness',
      severity: 'Serious',
      category: 'Warning Signs'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Troubleshooting', href: '/help/troubleshooting' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🔧 Troubleshooting
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Common problems, pain management, and when to seek help for neck hump and posture exercises. 
          Find solutions to exercise issues, understand warning signs, and know when to see a doctor.
        </p>
      </div>

      {/* Popular Questions */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Popular Questions</h2>
        <ul className="space-y-2 text-blue-800">
          <li>• Chin tucks causing dizziness?</li>
          <li>• Exercises making neck pain worse?</li>
          <li>• No improvement after 8 weeks?</li>
          <li>• Headaches after posture exercises?</li>
        </ul>
      </div>

      {/* Warning Signs Alert */}
      <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-900">⚠️ Seek Immediate Medical Attention If You Experience:</h2>
        <ul className="space-y-2 text-red-800">
          <li>• Numbness or tingling in arms, hands, or fingers</li>
          <li>• Shooting pain down your arms</li>
          <li>• Weakness in your arms or hands</li>
          <li>• Loss of bladder or bowel control</li>
          <li>• Severe neck pain that worsens with movement</li>
        </ul>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.link}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 hover:border-blue-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                article.severity === 'Serious' 
                  ? 'bg-red-100 text-red-800' 
                  : article.severity === 'Common'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {article.severity}
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {article.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {article.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Common Issues</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/troubleshooting/chin-tucks-causing-dizziness" className="text-blue-600 hover:underline">Chin tucks causing dizziness</Link></li>
              <li><Link href="/help/troubleshooting/headaches-after-posture-exercises" className="text-blue-600 hover:underline">Headaches after exercises</Link></li>
              <li><Link href="/help/troubleshooting/neck-stiffness-after-exercises" className="text-blue-600 hover:underline">Neck stiffness after exercises</Link></li>
              <li><Link href="/help/troubleshooting/neck-cracking-during-exercises" className="text-blue-600 hover:underline">Neck cracking during exercises</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Progress Issues</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/troubleshooting/no-improvement-after-8-weeks" className="text-blue-600 hover:underline">No improvement after 8 weeks</Link></li>
              <li><Link href="/help/troubleshooting/exercises-feel-too-easy" className="text-blue-600 hover:underline">Exercises feel too easy</Link></li>
              <li><Link href="/help/troubleshooting/cant-feel-neck-muscles-working" className="text-blue-600 hover:underline">Can't feel muscles working</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Problem Categories */}
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">⚠️</div>
          <h3 className="font-medium text-gray-900 mb-2">Warning Signs</h3>
          <p className="text-sm text-gray-600">Serious symptoms requiring medical attention</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🏋️</div>
          <h3 className="font-medium text-gray-900 mb-2">Exercise Issues</h3>
          <p className="text-sm text-gray-600">Problems with exercise technique and form</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">📈</div>
          <h3 className="font-medium text-gray-900 mb-2">Progress Issues</h3>
          <p className="text-sm text-gray-600">Troubleshooting lack of improvement</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🩹</div>
          <h3 className="font-medium text-gray-900 mb-2">Side Effects</h3>
          <p className="text-sm text-gray-600">Managing exercise side effects</p>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="text-sm text-gray-600 mt-8 p-4 bg-gray-50 rounded-lg">
        <p><strong>Medical Disclaimer:</strong> The information in this help center is for educational purposes only and is not intended as medical advice. Always consult with a licensed healthcare provider before starting any exercise program, especially if you have medical conditions, injuries, or concerns about your health.</p>
      </div>
    </div>
  )
}

// Force dynamic rendering to avoid static generation issues
