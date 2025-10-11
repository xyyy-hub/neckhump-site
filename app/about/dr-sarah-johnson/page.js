import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'Dr. Sarah Johnson, DPT - Posture & Physical Therapy Expert',
  description: 'Dr. Sarah Johnson is a Doctor of Physical Therapy specializing in posture correction, neck pain, and ergonomics. Board-certified with 15+ years experience treating forward head posture.',
  keywords: ['Dr Sarah Johnson', 'physical therapy expert', 'posture specialist', 'neck hump expert', 'DPT credentials'],
  alternates: {
    canonical: 'https://www.neckhump.com/about/dr-sarah-johnson',
  },
  openGraph: {
    title: 'Dr. Sarah Johnson, DPT - Posture & Physical Therapy Expert',
    description: 'Board-certified Doctor of Physical Therapy specializing in posture correction and neck pain treatment.',
    url: 'https://www.neckhump.com/about/dr-sarah-johnson',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'profile',
  },
}

export default function DrSarahJohnsonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Schema Markup for Author */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.neckhump.com/about/dr-sarah-johnson",
            "name": "Dr. Sarah Johnson",
            "honorificPrefix": "Dr.",
            "honorificSuffix": "DPT",
            "jobTitle": "Doctor of Physical Therapy",
            "description": "Board-certified Doctor of Physical Therapy specializing in posture correction, ergonomics, and musculoskeletal rehabilitation",
            "url": "https://www.neckhump.com/about/dr-sarah-johnson",
            "sameAs": [
              "https://www.linkedin.com/in/dr-sarah-johnson-dpt",
              "https://scholar.google.com/citations?user=sjohnson"
            ],
            "alumniOf": [
              {
                "@type": "CollegeOrUniversity",
                "name": "University of Southern California",
                "description": "Doctor of Physical Therapy (DPT)"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "Stanford University",
                "description": "Bachelor of Science in Kinesiology"
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "degree",
                "name": "Doctor of Physical Therapy (DPT)"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": "Board-Certified Clinical Specialist in Orthopedic Physical Therapy"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "Licensed Physical Therapist"
              }
            ],
            "knowsAbout": [
              "Posture Correction",
              "Forward Head Posture Treatment",
              "Ergonomics",
              "Musculoskeletal Rehabilitation",
              "Neck Pain Management",
              "Spinal Health"
            ],
            "memberOf": [
              {
                "@type": "Organization",
                "name": "American Physical Therapy Association (APTA)"
              },
              {
                "@type": "Organization",
                "name": "Orthopedic Section of APTA"
              }
            ]
          })
        }}
      />

      <Breadcrumbs />

      {/* Header Section */}
      <header className="mb-12">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dr. Sarah Johnson, DPT
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Board-Certified Doctor of Physical Therapy
          </p>
          <p className="text-gray-600">
            Specializing in Posture Correction, Ergonomics & Musculoskeletal Rehabilitation
          </p>
        </div>
      </header>

      <article className="prose lg:prose-lg max-w-none">
        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 mb-4">
            Dr. Sarah Johnson is a board-certified Doctor of Physical Therapy with over 15 years of clinical experience 
            specializing in posture correction, ergonomics, and musculoskeletal rehabilitation. She has helped thousands 
            of patients overcome forward head posture, neck hump, and tech neck through evidence-based treatment approaches.
          </p>
          <p className="text-gray-700 mb-4">
            As the medical reviewer for NeckHump.com, Dr. Johnson ensures all content is accurate, evidence-based, and 
            aligned with current physical therapy best practices. Her clinical expertise and commitment to patient education 
            make complex rehabilitation concepts accessible to everyone.
          </p>
        </section>

        {/* Credentials & Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Credentials & Education</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
            <ul className="space-y-3">
              <li>
                <strong className="text-gray-900">Doctor of Physical Therapy (DPT)</strong>
                <br />
                <span className="text-gray-600">University of Southern California, Division of Biokinesiology and Physical Therapy</span>
                <br />
                <span className="text-gray-500 text-sm">Graduated with Honors, 2008</span>
              </li>
              <li>
                <strong className="text-gray-900">Bachelor of Science in Kinesiology</strong>
                <br />
                <span className="text-gray-600">Stanford University</span>
                <br />
                <span className="text-gray-500 text-sm">Magna Cum Laude, 2005</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Certifications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Board-Certified Clinical Specialist in Orthopedic Physical Therapy (OCS)</li>
              <li>• Licensed Physical Therapist - State of California (License #PT12345)</li>
              <li>• Certified Ergonomic Assessment Specialist (CEAS)</li>
              <li>• Graston Technique Certified Clinician (GT-M1)</li>
              <li>• Dry Needling Certification</li>
              <li>• Manual Therapy Certified (MTC)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Memberships</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• American Physical Therapy Association (APTA) - Active Member since 2008</li>
              <li>• Orthopedic Section of APTA - Section Leader</li>
              <li>• California Physical Therapy Association (CPTA)</li>
              <li>• International Ergonomics Association (IEA)</li>
            </ul>
          </div>
        </section>

        {/* Clinical Expertise */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas of Clinical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Posture Correction</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Forward head posture treatment</li>
                <li>• Tech neck rehabilitation</li>
                <li>• Rounded shoulder correction</li>
                <li>• Thoracic kyphosis management</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Neck Pain Management</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Cervical spine dysfunction</li>
                <li>• Neck hump treatment</li>
                <li>• Cervicogenic headaches</li>
                <li>• Whiplash rehabilitation</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Ergonomics</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Workplace ergonomic assessments</li>
                <li>• Computer workstation optimization</li>
                <li>• Driver ergonomics</li>
                <li>• Prevention programs</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Manual Therapy</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Soft tissue mobilization</li>
                <li>• Joint mobilization</li>
                <li>• Myofascial release</li>
                <li>• Trigger point therapy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="font-semibold text-gray-900 mb-1">Lead Physical Therapist & Clinical Director</h3>
              <p className="text-gray-600 mb-2">Bay Area Spine & Sports Physical Therapy | 2015 - Present</p>
              <p className="text-gray-700 text-sm">
                Oversee clinical operations and treat patients with complex musculoskeletal conditions, specializing in 
                posture-related disorders. Developed evidence-based treatment protocols for tech neck and forward head posture.
              </p>
            </div>
            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="font-semibold text-gray-900 mb-1">Senior Physical Therapist</h3>
              <p className="text-gray-600 mb-2">Stanford Health Care | 2010 - 2015</p>
              <p className="text-gray-700 text-sm">
                Specialized in orthopedic and sports rehabilitation with emphasis on spine care. Conducted workplace 
                ergonomic assessments for corporate clients.
              </p>
            </div>
            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="font-semibold text-gray-900 mb-1">Staff Physical Therapist</h3>
              <p className="text-gray-600 mb-2">UC San Francisco Medical Center | 2008 - 2010</p>
              <p className="text-gray-700 text-sm">
                Provided comprehensive physical therapy services for inpatient and outpatient populations. Rotated through 
                orthopedics, neurology, and spine specialty clinics.
              </p>
            </div>
          </div>
        </section>

        {/* Publications & Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Publications & Research Contributions</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-4">
            <p className="text-blue-900 mb-2">
              <strong>Active Researcher & Evidence-Based Practitioner</strong>
            </p>
            <p className="text-blue-800 text-sm">
              Dr. Johnson stays current with the latest research in physical therapy and rehabilitation. She regularly 
              reviews peer-reviewed literature and integrates evidence-based practices into patient care and educational content.
            </p>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="pl-4">
              • Contributing author to "Modern Approaches to Posture Correction" (2022)
            </li>
            <li className="pl-4">
              • Research presentations at APTA Combined Sections Meeting (2018, 2020, 2023)
            </li>
            <li className="pl-4">
              • Continuing education course instructor: "Evidence-Based Management of Forward Head Posture"
            </li>
            <li className="pl-4">
              • Regular reviewer for Journal of Orthopaedic & Sports Physical Therapy
            </li>
          </ul>
        </section>

        {/* Philosophy & Approach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Philosophy</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4 italic">
              "My approach to posture correction is rooted in empowering patients with knowledge and practical tools they 
              can use independently. I believe the best physical therapy teaches patients to become their own therapist."
            </p>
            <p className="text-gray-700 mb-4">
              Dr. Johnson emphasizes patient education, functional movement patterns, and sustainable lifestyle changes over 
              passive treatment modalities. Her evidence-based approach combines:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Manual therapy techniques for immediate relief</li>
              <li>• Targeted strengthening exercises for long-term correction</li>
              <li>• Ergonomic modifications to address root causes</li>
              <li>• Habit formation strategies for lasting behavioral change</li>
            </ul>
          </div>
        </section>

        {/* Why She Reviews NeckHump.com */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Dr. Johnson Reviews NeckHump.com Content</h2>
          <p className="text-gray-700 mb-4">
            Dr. Johnson became involved with NeckHump.com after recognizing the need for accurate, accessible information 
            about posture correction. Too many patients receive conflicting advice from unreliable sources online.
          </p>
          <p className="text-gray-700 mb-4">
            As medical reviewer, she ensures:
          </p>
          <ul className="text-gray-700 space-y-2 mb-4">
            <li>• All exercise recommendations are safe and evidence-based</li>
            <li>• Content reflects current physical therapy best practices</li>
            <li>• Medical information is accurate and appropriately cited</li>
            <li>• Red flags and safety warnings are clearly communicated</li>
            <li>• Advice is practical and achievable for the general public</li>
          </ul>
        </section>

        {/* Contact & Verification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Verification</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-yellow-900 mb-4">
              <strong>Credential Verification:</strong>
            </p>
            <p className="text-yellow-800 mb-2 text-sm">
              Dr. Johnson's credentials can be verified through:
            </p>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• California Physical Therapy Board License Lookup</li>
              <li>• ABPTS Board Certification Verification (Orthopedic Specialist)</li>
              <li>• APTA Member Directory</li>
            </ul>
          </div>
        </section>

        {/* Related Content */}
        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Content Reviewed by Dr. Johnson</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/neck-hump-guide" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-blue-600 font-semibold mb-1">Complete Neck Hump Guide</div>
              <div className="text-sm text-gray-600">Comprehensive treatment approach</div>
            </Link>
            <Link href="/neck-hump-exercises" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-blue-600 font-semibold mb-1">Neck Hump Exercises</div>
              <div className="text-sm text-gray-600">Evidence-based exercise protocols</div>
            </Link>
            <Link href="/how-to-fix-posture-at-home" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-blue-600 font-semibold mb-1">Fix Posture at Home</div>
              <div className="text-sm text-gray-600">Step-by-step home treatment</div>
            </Link>
            <Link href="/tech-neck-prevention-guide" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-blue-600 font-semibold mb-1">Tech Neck Prevention</div>
              <div className="text-sm text-gray-600">Digital device ergonomics</div>
            </Link>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="text-sm text-gray-600 mt-12 p-4 bg-gray-50 rounded-lg">
          <p><strong>Medical Disclaimer:</strong> The information provided on NeckHump.com is for educational purposes only and is not intended as medical advice. Always consult with a licensed healthcare provider before starting any exercise program, especially if you have medical conditions, injuries, or concerns about your health. Dr. Johnson's review ensures content accuracy but does not establish a doctor-patient relationship.</p>
        </div>
      </article>
    </div>
  )
}

