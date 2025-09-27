import { Metadata } from 'next'

export const metadata = {
  title: 'Terms of Service | NeckHump.com',
  description: 'Terms of service and user agreement for NeckHump.com educational content.',
  alternates: {
    canonical: 'https://www.neckhump.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="article-content">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using NeckHump.com, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>

          <h2>Educational Purpose</h2>
          <p>
            This website provides educational content about posture, neck health, and exercises. 
            All content is for informational purposes only and should not replace professional medical advice.
          </p>

          <h2>Medical Disclaimer</h2>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 className="font-semibold text-red-900 mb-3">Important Medical Notice</h3>
            <ul className="text-red-800 space-y-2">
              <li>• Consult healthcare professionals before starting any exercise program</li>
              <li>• Stop exercises immediately if you experience pain or discomfort</li>
              <li>• This content is not a substitute for professional medical advice</li>
              <li>• Individual results may vary based on personal circumstances</li>
            </ul>
          </div>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on NeckHump.com for personal, 
            non-commercial transitory viewing only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on NeckHump.com are provided on an 'as is' basis. NeckHump.com makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including without 
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
            or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall NeckHump.com or its suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) arising out of 
            the use or inability to use the materials on NeckHump.com, even if NeckHump.com or an authorized 
            representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>Contact Information</h2>
          <p>
            Questions about these terms should be sent to us through our contact methods on the website.
          </p>
        </div>
      </article>
    </div>
  )
}
