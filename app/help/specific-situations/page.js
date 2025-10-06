import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'Specific Situations - Neck Hump Help Center',
  description: 'Posture solutions for different life circumstances and demographics. Find help for breastfeeding, seniors, wheelchair users, and other specific situations.',
  keywords: ['neck hump specific situations', 'posture exercises seniors', 'neck exercises wheelchair users', 'posture while breastfeeding', 'neck hump different demographics'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/specific-situations',
  },
  openGraph: {
    title: 'Specific Situations - Neck Hump Help Center',
    description: 'Posture solutions for different life circumstances and demographics. Find help for breastfeeding, seniors, wheelchair users, and other specific situations.',
    url: 'https://www.neckhump.com/help/specific-situations',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SpecificSituationsPage() {
  const articles = [
    {
      title: 'Fix Neck Hump While Breastfeeding',
      description: 'Safe posture exercises and ergonomic tips for new mothers dealing with neck hump while breastfeeding.',
      link: '/help/specific-situations/neck-hump-while-breastfeeding',
      difficulty: 'Easy',
      situation: 'Breastfeeding'
    },
    {
      title: 'Posture Exercises for Seniors Over 65',
      description: 'Age-appropriate neck exercises and modifications for seniors dealing with forward head posture.',
      link: '/help/specific-situations/posture-exercises-seniors-over-65',
      difficulty: 'Easy',
      situation: 'Seniors'
    },
    {
      title: 'Neck Exercises for Wheelchair Users',
      description: 'Adapted neck exercises and posture strategies for wheelchair users with limited mobility.',
      link: '/help/specific-situations/neck-exercises-wheelchair-users',
      difficulty: 'Moderate',
      situation: 'Wheelchair Users'
    },
    {
      title: 'Maintain Posture During Long Flights',
      description: 'Travel-friendly exercises and ergonomic tips to prevent neck hump during long flights.',
      link: '/help/specific-situations/posture-during-long-flights',
      difficulty: 'Easy',
      situation: 'Travel'
    },
    {
      title: 'Neck Hump Exercises for Office Workers',
      description: 'Desk-friendly exercises and workstation modifications for office workers with forward head posture.',
      link: '/help/specific-situations/neck-hump-exercises-office-workers',
      difficulty: 'Easy',
      situation: 'Office Work'
    },
    {
      title: 'Posture Exercises for Students',
      description: 'Study-friendly neck exercises and ergonomic tips for students spending long hours at desks.',
      link: '/help/specific-situations/posture-exercises-students',
      difficulty: 'Easy',
      situation: 'Students'
    },
    {
      title: 'Neck Exercises for Truck Drivers',
      description: 'Road-friendly exercises and ergonomic modifications for truck drivers with neck hump.',
      link: '/help/specific-situations/neck-exercises-truck-drivers',
      difficulty: 'Moderate',
      situation: 'Truck Driving'
    },
    {
      title: 'Posture Exercises for Healthcare Workers',
      description: 'Workplace-specific exercises and ergonomic strategies for nurses and healthcare professionals.',
      link: '/help/specific-situations/posture-exercises-healthcare-workers',
      difficulty: 'Moderate',
      situation: 'Healthcare'
    },
    {
      title: 'Neck Hump Exercises for Athletes',
      description: 'Sport-specific neck exercises and posture corrections for athletes with forward head posture.',
      link: '/help/specific-situations/neck-hump-exercises-athletes',
      difficulty: 'Moderate',
      situation: 'Athletes'
    },
    {
      title: 'Posture Exercises for Remote Workers',
      description: 'Home office ergonomics and exercises for remote workers dealing with neck hump.',
      link: '/help/specific-situations/posture-exercises-remote-workers',
      difficulty: 'Easy',
      situation: 'Remote Work'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Specific Situations', href: '/help/specific-situations' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          👥 Specific Situations
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Posture solutions for different life circumstances and demographics. 
          Find targeted help for your specific situation, whether you're breastfeeding, 
          a senior, wheelchair user, or have other unique circumstances.
        </p>
      </div>

      {/* Popular Questions */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Popular Questions</h2>
        <ul className="space-y-2 text-blue-800">
          <li>• Fix neck hump while breastfeeding?</li>
          <li>• Posture exercises for seniors over 65?</li>
          <li>• Neck exercises for wheelchair users?</li>
          <li>• Maintain posture during long flights?</li>
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
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {article.difficulty}
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded">
                {article.situation}
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
            <h3 className="font-medium text-gray-900 mb-3">Most Popular</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/specific-situations/neck-hump-while-breastfeeding" className="text-blue-600 hover:underline">Neck hump while breastfeeding</Link></li>
              <li><Link href="/help/specific-situations/posture-exercises-seniors-over-65" className="text-blue-600 hover:underline">Exercises for seniors</Link></li>
              <li><Link href="/help/specific-situations/neck-exercises-wheelchair-users" className="text-blue-600 hover:underline">Wheelchair user exercises</Link></li>
              <li><Link href="/help/specific-situations/posture-during-long-flights" className="text-blue-600 hover:underline">Posture during travel</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Workplace Situations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/specific-situations/neck-hump-exercises-office-workers" className="text-blue-600 hover:underline">Office workers</Link></li>
              <li><Link href="/help/specific-situations/posture-exercises-healthcare-workers" className="text-blue-600 hover:underline">Healthcare workers</Link></li>
              <li><Link href="/help/specific-situations/neck-exercises-truck-drivers" className="text-blue-600 hover:underline">Truck drivers</Link></li>
              <li><Link href="/help/specific-situations/posture-exercises-remote-workers" className="text-blue-600 hover:underline">Remote workers</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="text-sm text-gray-600 mt-8 p-4 bg-gray-50 rounded-lg">
        <p><strong>Medical Disclaimer:</strong> The information in this help center is for educational purposes only and is not intended as medical advice. Always consult with a licensed healthcare provider before starting any exercise program, especially if you have medical conditions, injuries, or concerns about your health.</p>
      </div>
    </div>
  )
}
