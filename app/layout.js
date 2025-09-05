import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://neckhump.com'),
  title: {
    default: 'Neck Hump Guide: Fix Forward Head Posture | NeckHump.com',
    template: '%s | NeckHump.com'
  },
  description: 'Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck. Free expert resources.',
  keywords: ['posture', 'bad posture', 'neck hump', 'desk setup', 'posture exercises', 'back pain', 'forward head posture', 'ergonomics'],
  authors: [{ name: 'Posture Fix Pro' }],
  creator: 'Posture Fix Pro',
  publisher: 'Posture Fix Pro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neckhump.com',
    siteName: 'NeckHump.com',
    title: 'Neck Hump Guide: Fix Forward Head Posture | NeckHump.com',
    description: 'Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Posture Fix Pro - Fix Your Posture at Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neck Hump Guide: Fix Forward Head Posture | NeckHump.com',
    description: 'Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code-here',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://neckhump.com" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Google Analytics - Deferred for performance */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-MZT4VX3X7Q"
          defer
        ></script>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MZT4VX3X7Q', {
                'custom_map': {'custom_parameter': 'value'}
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NeckHump.com",
              "url": "https://neckhump.com",
              "logo": "https://neckhump.com/logo.png",
              "description": "Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck.",
              "sameAs": [
                "https://twitter.com/neckhump",
                "https://facebook.com/neckhump"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
