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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="canonical" href="https://neckhump.com" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Minimal critical resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Google Analytics - Simple defer */}
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
        
        {/* CRITICAL DEBUG: Test if ANY JavaScript works */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('🔥 LAYOUT SCRIPT LOADED');
              alert('Layout JavaScript works!');
              
              // Test DOM manipulation
              window.addEventListener('load', function() {
                console.log('🟢 Window loaded');
                const testDiv = document.createElement('div');
                testDiv.innerHTML = 'LAYOUT JS WORKS!';
                testDiv.style.cssText = 'position:fixed;top:10px;left:10px;background:blue;color:white;padding:10px;z-index:99999;';
                document.body.appendChild(testDiv);
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        {/* FALLBACK NAVIGATION - Non-React test */}
        <div id="fallback-nav" style={{display: 'none', background: 'red', color: 'white', padding: '10px', textAlign: 'center'}}>
          FALLBACK NAVIGATION - React is not loading!
        </div>
        
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        
        {/* Show fallback if React doesn't load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Wait for React to load, if it doesn't, show fallback
              setTimeout(function() {
                // Check if React loaded by looking for our Header component
                const headerLoaded = document.querySelector('[data-react-header]');
                if (!headerLoaded) {
                  console.log('🚨 React did not load - showing fallback');
                  document.getElementById('fallback-nav').style.display = 'block';
                }
              }, 3000);
            `,
          }}
        />
      </body>
    </html>
  )
}
