import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NeckHump.com</h3>
            <p className="text-gray-300 mb-4">
              Evidence-based health information about forward head posture, 
              neck hump, and postural problems affecting desk workers.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs">Evidence-Based</span>
                <span className="bg-green-900 text-green-200 px-2 py-1 rounded text-xs">Medically Reviewed</span>
              </div>
              <p className="text-gray-400 text-sm">
                Content reviewed by licensed healthcare professionals.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Educational Topics</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/neck-hump-causes" className="hover:text-white transition-colors">
                  Understanding Neck Hump
                </Link>
              </li>
              <li>
                <Link href="/posture-exercises" className="hover:text-white transition-colors">
                  Exercise Guidelines
                </Link>
              </li>
              <li>
                <Link href="/desk-setup-guide" className="hover:text-white transition-colors">
                  Ergonomic Principles
                </Link>
              </li>
              <li>
                <Link href="/how-to-fix-posture-at-home" className="hover:text-white transition-colors">
                  Comprehensive Guide
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-white transition-colors">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Treatment Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Exercise Library</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/exercises/chin-tucks" className="hover:text-white transition-colors">
                  Chin Tucks
                </Link>
              </li>
              <li>
                <Link href="/exercises/wall-angels" className="hover:text-white transition-colors">
                  Wall Angels
                </Link>
              </li>
              <li>
                <Link href="/exercises/doorway-pec-stretch" className="hover:text-white transition-colors">
                  Doorway Stretch
                </Link>
              </li>
              <li>
                <Link href="/exercises/upper-back-foam-rolling" className="hover:text-white transition-colors">
                  Foam Rolling
                </Link>
              </li>
              <li>
                <Link href="/exercises/y-t-w-raises" className="hover:text-white transition-colors">
                  Y-T-W Raises
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Medical Disclaimer</h4>
            <div className="text-gray-300 text-sm space-y-3">
              <p>
                <strong>For Educational Purposes Only:</strong> This content provides general health information and is not a substitute for professional medical diagnosis, treatment, or advice.
              </p>
              <p>
                <strong>Consult Healthcare Professionals:</strong> Always seek the advice of qualified healthcare providers before starting any exercise program, especially if you have existing medical conditions or experience persistent pain.
              </p>
              <p className="text-gray-400 text-xs">
                Individual results may vary. Information is based on current research but should not replace personalized medical care.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Posture Fix Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
