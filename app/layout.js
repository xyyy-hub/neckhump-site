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
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;line-height:1.6;color:#374151;margin:0;overflow-x:hidden}
            header{background-color:#fff;border-bottom:1px solid #e5e7eb;position:sticky;top:0;z-index:50}
            .max-w-6xl{max-width:72rem}
            .mx-auto{margin-left:auto;margin-right:auto}
            .px-4{padding-left:1rem;padding-right:1rem}
            .py-4{padding-top:1rem;padding-bottom:1rem}
            .flex{display:flex}
            .items-center{align-items:center}
            .justify-between{justify-content:space-between}
            .text-2xl{font-size:1.5rem;line-height:2rem}
            .font-bold{font-weight:700}
            .text-blue-600{color:#2563eb}
            .hidden{display:none}
            @media(min-width:768px){.md\\:flex{display:flex}.md\\:hidden{display:none}}
          `
        }} />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Google Analytics - Load after page interaction */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Defer GA until user interaction or after 3 seconds
              let gaLoaded = false;
              function loadGA() {
                if (gaLoaded) return;
                gaLoaded = true;
                
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MZT4VX3X7Q';
                document.head.appendChild(script);
                
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MZT4VX3X7Q');
              }
              
              // Load GA after user interaction or 3 seconds
              const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
              events.forEach(event => {
                window.addEventListener(event, loadGA, { once: true, passive: true });
              });
              setTimeout(loadGA, 3000);
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
