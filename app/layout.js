import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://neckhump.com'),
  title: {
    default: 'Posture Fix Pro - How to Fix Bad Posture at Home',
    template: '%s | Posture Fix Pro'
  },
  description: 'Learn how to fix bad posture, neck hump, and back pain with simple exercises and desk setup tips. Free guides for desk workers and gamers.',
  keywords: ['posture', 'bad posture', 'neck hump', 'desk setup', 'posture exercises', 'back pain', 'forward head posture', 'ergonomics'],
  authors: [{ name: 'Posture Fix Pro' }],
  creator: 'Posture Fix Pro',
  publisher: 'Posture Fix Pro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neckhump.com',
    siteName: 'Posture Fix Pro',
    title: 'Posture Fix Pro - How to Fix Bad Posture at Home',
    description: 'Learn how to fix bad posture, neck hump, and back pain with simple exercises and desk setup tips.',
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
    title: 'Posture Fix Pro - How to Fix Bad Posture at Home',
    description: 'Learn how to fix bad posture, neck hump, and back pain with simple exercises and desk setup tips.',
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
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MZT4VX3X7Q"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MZT4VX3X7Q');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Posture Fix Pro",
              "url": "https://neckhump.com",
              "logo": "https://your-domain.com/logo.png",
              "description": "Learn how to fix bad posture, neck hump, and back pain with simple exercises and desk setup tips.",
              "sameAs": [
                "https://twitter.com/your-handle",
                "https://facebook.com/your-page"
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
