import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'

export const metadata = {
  title: 'Learn About Neck Hump & Forward Head Posture | Complete Education Hub',
  description: 'Comprehensive learning center for neck hump, forward head posture, and tech neck. Expert guides, anatomy explanations, and evidence-based information.',
  keywords: ['neck hump education', 'forward head posture learning', 'tech neck anatomy', 'cervical spine education', 'posture science'],
  alternates: {
    canonical: 'https://www.neckhump.com/learn',
  },
  openGraph: {
    title: 'Learn About Neck Hump & Forward Head Posture | Education Hub',
    description: 'Comprehensive learning center for neck hump, forward head posture, and tech neck. Expert guides, anatomy explanations, and evidence-based information.',
    url: 'https://www.neckhump.com/learn',
  },
}

export default function LearnPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/learn' }
        ]} 
      />

      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learn About Neck Hump & Forward Head Posture
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Understand the science behind neck hump, learn about anatomy, causes, and 
          evidence-based solutions from medical professionals and research studies.
        </p>
      </header>

      {/* Quick Learning Path */}
      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          🎯 Your Learning Journey
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
            <h3 className="font-semibold text-gray-900 mb-2">Understanding</h3>
            <p className="text-sm text-gray-600">Learn what neck hump is and why it happens</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
            <h3 className="font-semibold text-gray-900 mb-2">Anatomy</h3>
            <p className="text-sm text-gray-600">Understand your neck and spine structure</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
            <h3 className="font-semibold text-gray-900 mb-2">Causes</h3>
            <p className="text-sm text-gray-600">Identify what's causing your posture issues</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">4</div>
            <h3 className="font-semibold text-gray-900 mb-2">Solutions</h3>
            <p className="text-sm text-gray-600">Discover evidence-based treatment options</p>
          </div>
        </div>
      </section>

      {/* Core Learning Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Core Learning Topics
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Understanding Neck Hump */}
          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🧠</span>
              <h3 className="text-xl font-bold text-gray-900">Understanding Neck Hump</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn the fundamentals of forward head posture, its medical terminology, 
              and how it affects your overall health and well-being.
            </p>
            <div className="space-y-2">
              <Link href="/neck-hump-causes" className="block text-blue-600 hover:text-blue-800 font-medium">
                → What Causes Neck Hump?
              </Link>
              <Link href="/dowagers-hump-vs-neck-hump" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Dowager's Hump vs Neck Hump
              </Link>
              <Link href="/buffalo-hump-vs-neck-hump" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Buffalo Hump vs Neck Hump
              </Link>
            </div>
          </div>

          {/* Anatomy & Science */}
          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🦴</span>
              <h3 className="text-xl font-bold text-gray-900">Anatomy & Science</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Understand your cervical spine, muscle groups, and the biomechanics 
              behind healthy and unhealthy posture patterns.
            </p>
            <div className="space-y-2">
              <Link href="/military-neck-cervical-lordosis" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Cervical Lordosis & Military Neck
              </Link>
              <Link href="/text-neck-syndrome" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Text Neck Syndrome Explained
              </Link>
              <Link href="/learn/complete-guide" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Complete Anatomical Guide
              </Link>
            </div>
          </div>

          {/* Modern Lifestyle Factors */}
          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">💻</span>
              <h3 className="text-xl font-bold text-gray-900">Modern Lifestyle Factors</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Explore how technology, work habits, and modern life contribute to 
              forward head posture and neck hump development.
            </p>
            <div className="space-y-2">
              <Link href="/tech-neck-prevention-guide" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Tech Neck Prevention Guide
              </Link>
              <Link href="/ergonomic-workspace-neck-hump" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Ergonomic Workspace Setup
              </Link>
              <Link href="/desk-setup-guide" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Optimal Desk Setup Guide
              </Link>
            </div>
          </div>

          {/* Treatment Approaches */}
          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🏥</span>
              <h3 className="text-xl font-bold text-gray-900">Treatment Approaches</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Understand different treatment options from conservative exercises 
              to professional interventions and surgical considerations.
            </p>
            <div className="space-y-2">
              <Link href="/how-to-fix-posture-at-home" className="block text-blue-600 hover:text-blue-800 font-medium">
                → At-Home Treatment Plans
              </Link>
              <Link href="/neck-hump-surgery-guide" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Surgical Options Guide
              </Link>
              <Link href="/posture-exercises" className="block text-blue-600 hover:text-blue-800 font-medium">
                → Professional Treatment Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Evidence */}
      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          📊 Research & Evidence
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">71%</div>
            <p className="text-gray-700 text-sm">of smartphone users show signs of forward head posture</p>
            <p className="text-xs text-gray-600 mt-1">Source: Ergonomics International Journal</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
            <p className="text-gray-700 text-sm">improvement in neck pain with targeted exercises</p>
            <p className="text-xs text-gray-600 mt-1">Source: Physical Therapy Research</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6-8</div>
            <p className="text-gray-700 text-sm">weeks for significant postural improvements</p>
            <p className="text-xs text-gray-600 mt-1">Source: Spine Rehabilitation Studies</p>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          🚀 Ready to Start Your Journey?
        </h3>
        <p className="text-gray-700 mb-4">
          New to neck hump treatment? Start with our beginner-friendly complete guide that 
          covers everything you need to know in one comprehensive resource.
        </p>
        <Link 
          href="/neck-hump-guide"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Start with Complete Guide →
        </Link>
      </section>
    </div>
  )
}
