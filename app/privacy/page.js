import { Metadata } from 'next'

export const metadata = {
  title: 'Privacy Policy | NeckHump.com',
  description: 'Privacy policy for NeckHump.com - how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.neckhump.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="article-content">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Information We Collect</h2>
          <p>
            NeckHump.com is committed to protecting your privacy. This privacy policy explains how we collect, 
            use, and safeguard your information when you visit our website.
          </p>

          <h3>Information Collection</h3>
          <ul>
            <li><strong>Analytics Data:</strong> We use Google Analytics to understand how visitors interact with our site</li>
            <li><strong>Cookies:</strong> Essential cookies for site functionality and analytics</li>
            <li><strong>No Personal Data:</strong> We do not collect names, emails, or personal health information</li>
          </ul>

          <h3>How We Use Information</h3>
          <ul>
            <li>To improve website content and user experience</li>
            <li>To analyze site traffic and usage patterns</li>
            <li>To ensure site security and functionality</li>
          </ul>

          <h3>Data Sharing</h3>
          <p>
            We do not sell, trade, or otherwise transfer your information to third parties except 
            for analytics purposes with Google Analytics, which follows their own privacy policy.
          </p>

          <h3>Your Rights</h3>
          <p>
            You can disable cookies in your browser settings. This may affect site functionality 
            but will not prevent access to our educational content.
          </p>

          <h3>Contact Information</h3>
          <p>
            If you have questions about this privacy policy, please contact us through our website.
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg mt-8">
            <h4 className="font-semibold text-yellow-900 mb-2">Medical Disclaimer</h4>
            <p className="text-yellow-800 text-sm">
              This website provides educational information only and is not a substitute for 
              professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
