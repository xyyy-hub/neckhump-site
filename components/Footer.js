import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NeckHump.com</h3>
            <p className="text-gray-300 mb-4">
              Educational resource providing evidence-based information about forward head posture, 
              neck hump, and postural problems affecting desk workers.
            </p>
            <p className="text-gray-400 text-sm">
              Content based on research from physical therapy, ergonomics, and movement science literature.
            </p>
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
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Important</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice.
              </p>
              <p>
                Always consult with a healthcare professional before starting any exercise program or if you experience persistent pain.
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
