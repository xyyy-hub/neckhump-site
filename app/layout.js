import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  metadataBase: new URL('https://neckhump.com'),
  title: {
    default: 'Neck Hump Guide: Fix Forward Head Posture | NeckHump.com',
    template: '%s | NeckHump.com'
  },
  description: 'Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck. Free expert resources.',
  keywords: ['posture', 'bad posture', 'neck hump', 'desk setup', 'posture exercises', 'back pain', 'forward head posture', 'ergonomics'],
  authors: [{ name: 'Team Posture' }],
  creator: 'Team Posture',
  publisher: 'NeckHump.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neckhump.com',
    siteName: 'NeckHump.com',
    title: 'Neck Hump Guide: Fix Forward Head Posture | NeckHump.com',
    description: 'Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'NeckHump.com - Complete Guide to Forward Head Posture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neck Hump Guide: Fix Forward Head Posture | NeckHump.com',
    description: 'Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck.',
    images: ['/og-image.svg'],
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
  // verification: {
  //   google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Enhanced resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/og-image.svg" as="image" type="image/svg+xml" />
        
        {/* Optimized Google Analytics will be loaded after page content */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://neckhump.com/#organization",
                  "name": "NeckHump.com",
                  "url": "https://neckhump.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://neckhump.com/logo.svg",
                    "width": "200",
                    "height": "60"
                  },
                  "description": "Complete guide to fixing neck hump and forward head posture. Evidence-based exercises, ergonomic tips, and solutions for tech neck.",
                  "sameAs": [
                    "https://twitter.com/neckhump",
                    "https://facebook.com/neckhump"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://neckhump.com/#website",
                  "url": "https://neckhump.com",
                  "name": "NeckHump.com - Complete Neck Hump & Forward Head Posture Guide",
                  "description": "The definitive resource for understanding and fixing neck hump. Evidence-based solutions for forward head posture and tech neck.",
                  "publisher": {
                    "@id": "https://neckhump.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://neckhump.com/?search={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Forward Head Posture",
                  "alternateName": ["Neck Hump", "Tech Neck", "Computer Neck"],
                  "description": "A postural deviation where the head is positioned forward relative to the shoulders, often caused by prolonged computer use and poor ergonomics.",
                  "code": {
                    "@type": "MedicalCode",
                    "codeValue": "M43.8",
                    "codingSystem": "ICD-10"
                  },
                  "possibleTreatment": [
                    {
                      "@type": "ExerciseTherapy",
                      "name": "Neck Strengthening Exercises"
                    },
                    {
                      "@type": "PhysicalTherapy",
                      "name": "Postural Correction"
                    }
                  ]
                }
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
        <SpeedInsights />
        
        {/* Optimized Google Analytics with next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZT4VX3X7Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZT4VX3X7Q');
          `}
        </Script>
      </body>
    </html>
  )
}
