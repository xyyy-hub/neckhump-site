import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import InternalLinking from '../../components/InternalLinking'
import AuthorReviewer from '../../components/AuthorReviewer'
import TableOfContents from '../../components/TableOfContents'
import PeopleAlsoAsk from '../../components/PeopleAlsoAsk'
import RelatedArticles from '../../components/RelatedArticles'
import Citations from '../../components/Citations'

export const metadata = {
  title: 'Dowager\'s Hump Exercises: Complete Guide for Seniors & Adults',
  description: 'What exercises fix dowager\'s hump? Gentle chin tucks, seated wall angels, and thoracic extensions done 10-15 minutes daily can reduce dowager\'s hump in 8-12 weeks. Safe modifications for osteoporosis and aging spine included.',
  keywords: ['dowagers hump exercises', 'dowager hump exercises', 'kyphosis exercises', 'hunchback exercises', 'upper back hump exercises', 'exercises for older adults'],
  alternates: {
    canonical: 'https://www.neckhump.com/dowagers-hump-exercises',
  },
  openGraph: {
    title: 'Dowager\'s Hump Exercises: Complete Guide for Seniors & Adults',
    description: 'Safe, effective exercises for dowager\'s hump with modifications for osteoporosis and aging spine.',
    url: 'https://www.neckhump.com/dowagers-hump-exercises',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DowagersHumpExercisesPage() {
  const tocItems = [
    { id: 'short-answer', text: 'Short Answer: Best Exercises' },
    { id: 'what-is-dowagers-hump', text: 'What Is Dowager\'s Hump?' },
    { id: 'key-differences', text: 'Dowager\'s Hump vs Regular Neck Hump' },
    { id: 'exercise-principles', text: 'Exercise Principles for Older Adults' },
    { id: 'essential-exercises', text: 'Essential Exercises (10-15 Minutes Daily)' },
    { id: 'osteoporosis-modifications', text: 'Modifications for Osteoporosis' },
    { id: 'progression-timeline', text: 'Expected Timeline & Progression' },
    { id: 'when-to-see-doctor', text: 'When to See a Doctor' },
  ]

  const paaQuestions = [
    {
      question: "Can dowager's hump be reversed in seniors?",
      answer: "Yes, dowager's hump can be significantly reduced in seniors through consistent gentle exercises, even in people over 65. While complete reversal may take 8-12 weeks (longer than in younger adults), studies show meaningful improvement is possible at any age with proper exercise and posture correction. Key is using age-appropriate modifications and addressing bone density concerns.",
      link: "/dowagers-hump-exercises#progression-timeline"
    },
    {
      question: "What's the difference between dowager's hump and neck hump?",
      answer: "Dowager's hump specifically refers to excessive thoracic kyphosis (upper back rounding) often associated with osteoporosis, aging, and vertebral compression fractures—typically affecting women over 50. Neck hump (forward head posture) can occur at any age from poor ergonomics and screen time. However, the exercises are similar for both conditions.",
      link: "/dowagers-hump-exercises#key-differences"
    },
    {
      question: "Are neck exercises safe with osteoporosis?",
      answer: "Yes, but modifications are essential. Avoid: forward flexion (crunches, toe touches), twisting under load, and high-impact exercises. Safe exercises include: gentle chin tucks, isometric holds, supported wall angels, and resistance band work. Always get doctor clearance if you have diagnosed osteoporosis or history of compression fractures.",
      link: "/dowagers-hump-exercises#osteoporosis-modifications"
    },
    {
      question: "How long does it take to fix dowager's hump?",
      answer: "With daily 10-15 minute exercise routines, most people see: improved posture awareness in 2-3 weeks, reduced upper back rounding in 6-8 weeks, and significant dowager's hump reduction in 8-12 weeks. Older adults (65+) may need 12-16 weeks. Consistency is more important than intensity.",
      link: "/dowagers-hump-exercises#progression-timeline"
    },
  ]

  const relatedArticles = [
    {
      title: 'Dowager\'s Hump vs Neck Hump: Key Differences',
      description: 'Understand the terminology and causes',
      href: '/dowagers-hump-vs-neck-hump'
    },
    {
      title: 'Posture Exercises for Seniors',
      description: 'Age-appropriate modifications and progressions',
      href: '/help/specific-situations/posture-exercises-for-seniors'
    },
    {
      title: 'Neck Exercises with Osteoporosis',
      description: 'Safe exercise guidelines for bone health',
      href: '/help/exercises-safety/neck-exercises-for-osteoporosis'
    }
  ]

  const citations = [
    {
      number: 1,
      text: "Sinaki M, et al. Stronger back muscles reduce the incidence of vertebral fractures: a prospective 10 year follow-up of postmenopausal women. Bone. 2002;30(6):836-841.",
      url: "https://pubmed.ncbi.nlm.nih.gov/12052450/"
    },
    {
      number: 2,
      text: "Katzman WB, et al. Targeted spine strengthening exercise and posture training program to reduce hyperkyphosis in older adults: results from the study of hyperkyphosis, exercise, and function (SHEAF) randomized controlled trial. Osteoporosis International. 2017;28(10):2831-2841.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28688026/"
    },
    {
      number: 3,
      text: "Choi M, et al. Effect of 12-week posture correction exercise on musculoskeletal pain and thoracic kyphosis in elderly women. Journal of Physical Therapy Science. 2015;27(7):2155-2157.",
      url: "https://pubmed.ncbi.nlm.nih.gov/26311939/"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Dowager's Hump Exercises: Complete Guide",
            "description": "Evidence-based exercise guide for dowager's hump with modifications for osteoporosis and aging spine",
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Patient",
              "healthCondition": "Hyperkyphosis"
            }
          })
        }}
      />

      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Dowager\'s Hump Exercises', href: '/dowagers-hump-exercises' }
        ]} 
      />

      <div className="flex flex-col xl:flex-row gap-8 xl:ml-80">
        {/* Main Content */}
        <article className="flex-1 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dowager's Hump Exercises: Complete Guide for Seniors &amp; Adults
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Gentle, evidence-based exercises to reduce dowager's hump (thoracic kyphosis) with special modifications for osteoporosis, aging spine, and mobility limitations common in adults over 50.
            </p>
          </header>

          <AuthorReviewer 
            datePublished="2025-10-23"
            dateModified="2025-10-23"
          />

          {/* AEO Short Answer Block */}
          <section className="mb-12" id="short-answer">
            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-emerald-900">
                What Are the Best Exercises for Dowager's Hump?
              </h2>
              <p className="text-emerald-800 text-lg leading-relaxed mb-4">
                The most effective exercises for dowager's hump are: gentle chin tucks (strengthens deep neck flexors), seated wall angels (opens chest and strengthens upper back), thoracic extensions (reverses excessive kyphosis), and resistance band rows (targets rhomboids and middle traps). These exercises done 10-15 minutes daily can reduce dowager's hump in 8-12 weeks.
              </p>
              <p className="text-emerald-800 leading-relaxed">
                <strong>Critical for older adults:</strong> Use modifications if you have osteoporosis, avoid forward flexion (bending forward), and prioritize isometric holds over dynamic movements to protect spine health.
              </p>
            </div>
          </section>

          {/* AEO Key Takeaways Block */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Key Takeaways: Dowager's Hump Exercise Program</h2>
            <ol className="space-y-3 text-blue-800">
              <li><strong>1. Exercises work at any age:</strong> Significant reduction possible even in seniors 65+</li>
              <li><strong>2. Gentle approach essential:</strong> Avoid aggressive stretching or high-impact moves</li>
              <li><strong>3. Bone health matters:</strong> Modify exercises if you have osteoporosis diagnosis</li>
              <li><strong>4. Timeline is longer:</strong> Expect 8-12 weeks vs 4-6 weeks in younger adults</li>
              <li><strong>5. Consistency beats intensity:</strong> Daily 10-minute routine better than occasional long sessions</li>
            </ol>
          </div>

          {/* What is Dowager's Hump Section */}
          <section className="mb-12" id="what-is-dowagers-hump">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Dowager's Hump?</h2>
            
            <p className="text-gray-700 mb-4">
              Dowager's hump—also called hyperkyphosis or thoracic kyphosis—is an exaggerated forward curvature of the upper spine (thoracic region), creating a visible hump at the base of the neck.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Causes in Older Adults</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[140px]">Osteoporosis:</span>
                  <span>Weakened vertebrae compress and wedge forward (compression fractures)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[140px]">Age-related changes:</span>
                  <span>Disc degeneration, reduced bone density, muscle weakening</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[140px]">Postural habits:</span>
                  <span>Decades of forward slouching, poor ergonomics, sedentary lifestyle</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[140px]">Muscle imbalance:</span>
                  <span>Weak upper back muscles (rhomboids, lower traps) + tight chest muscles</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[140px]">Hormonal changes:</span>
                  <span>Post-menopausal women at higher risk due to estrogen decline</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Why the Name "Dowager's Hump"?</h3>
              <p className="text-amber-800">
                The term comes from historical observations that wealthy older women ("dowagers") often developed this postural deformity. While the name is outdated and somewhat ageist, it remains commonly used. Modern medical terminology prefers "thoracic hyperkyphosis" or simply "upper back kyphosis."
              </p>
            </div>
          </section>

          {/* Key Differences Section */}
          <section className="mb-12" id="key-differences">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dowager's Hump vs Regular Neck Hump</h2>
            
            <p className="text-gray-700 mb-6">
              While the exercises overlap significantly, understanding the difference helps tailor your approach:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-purple-300 rounded-lg p-6 bg-purple-50">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Dowager's Hump</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Location:</strong> Upper back (thoracic spine T4-T8)</li>
                  <li><strong>Primary cause:</strong> Bone changes, osteoporosis, compression fractures</li>
                  <li><strong>Age group:</strong> Typically 50+ years, especially post-menopausal women</li>
                  <li><strong>Severity:</strong> Often more pronounced, structural component</li>
                  <li><strong>Medical term:</strong> Hyperkyphosis, thoracic kyphosis</li>
                  <li><strong>Key concern:</strong> Bone density, vertebral health</li>
                </ul>
              </div>

              <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Neck Hump (Forward Head)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Location:</strong> Lower neck/upper neck (C7-T1)</li>
                  <li><strong>Primary cause:</strong> Postural habits, screen time, muscle imbalance</li>
                  <li><strong>Age group:</strong> Any age, common in 20-50 year olds</li>
                  <li><strong>Severity:</strong> Usually postural, less structural component</li>
                  <li><strong>Medical term:</strong> Forward head posture, cervical lordosis loss</li>
                  <li><strong>Key concern:</strong> Muscle weakness, ergonomics</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3">✅ Good News: Same Exercises Help Both</h3>
              <p className="text-emerald-800">
                The fundamental exercises (chin tucks, upper back strengthening, chest stretches) address both conditions. The main difference is <strong>intensity and modification level</strong>—dowager's hump requires gentler progression and more attention to bone health.
              </p>
            </div>
          </section>

          {/* Exercise Principles Section */}
          <section className="mb-12" id="exercise-principles">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise Principles for Older Adults</h2>
            
            <p className="text-gray-700 mb-6">
              Research shows exercise is highly effective for reducing dowager's hump,<sup>[2]</sup> but the approach must be age-appropriate and safe. Follow these principles:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-emerald-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">1️⃣</span> Start Extremely Gently
                </h3>
                <p className="text-gray-700 ml-10">
                  Begin with 50% of what you think you can do. Your muscles, joints, and bones need time to adapt. Overzealous beginnings lead to soreness, discouragement, and injury risk.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">2️⃣</span> Prioritize Isometric Holds
                </h3>
                <p className="text-gray-700 ml-10">
                  Isometric exercises (holding positions without movement) build strength safely without stressing vertebrae. They're ideal for osteoporosis risk.
                </p>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">3️⃣</span> Avoid Forward Flexion
                </h3>
                <p className="text-gray-700 ml-10">
                  Never do: crunches, toe touches, or any exercise that rounds your spine forward. These increase compression fracture risk in osteoporotic vertebrae.
                </p>
              </div>

              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">4️⃣</span> Use Support When Needed
                </h3>
                <p className="text-gray-700 ml-10">
                  Sit in a sturdy chair for exercises. Use wall support. Hold onto stable surfaces for balance. There's no shame in modifications—they keep you safe.
                </p>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">5️⃣</span> Progress Slowly
                </h3>
                <p className="text-gray-700 ml-10">
                  Increase difficulty only after 2-3 weeks of comfortable performance. Add 1-2 reps per week maximum. Speed is not the goal—safety and consistency are.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">⚠️</span> Get Medical Clearance If:
                </h3>
                <ul className="text-gray-700 ml-10 space-y-1">
                  <li>• You have diagnosed osteoporosis or osteopenia</li>
                  <li>• You've had vertebral compression fractures</li>
                  <li>• You have severe kyphosis (&gt;50 degrees)</li>
                  <li>• You experience pain, numbness, or tingling</li>
                  <li>• You're over 70 and haven't exercised regularly</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Essential Exercises Section */}
          <section className="mb-12" id="essential-exercises">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Exercises (10-15 Minutes Daily)</h2>
            
            <p className="text-gray-700 mb-6">
              This routine targets the key muscle groups: deep neck flexors, upper back extensors, and shoulder retractors while opening tight chest muscles. Perform daily for best results.
            </p>

            <div className="space-y-8">
              {/* Exercise 1 */}
              <div className="border-2 border-emerald-400 rounded-lg p-6 bg-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">1. Gentle Chin Tucks (Seated)</h3>
                  <span className="bg-emerald-200 text-emerald-900 px-3 py-1 rounded-full text-sm font-semibold">ESSENTIAL</span>
                </div>
                
                <p className="text-gray-700 mb-3">
                  <strong>Target:</strong> Deep neck flexors (longus colli, longus capitis)<br />
                  <strong>Time:</strong> 3 minutes total
                </p>

                <div className="bg-white p-4 rounded mb-4">
                  <p className="font-semibold text-gray-900 mb-2">How to Perform:</p>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                    <li>Sit in sturdy chair with back support, feet flat on floor</li>
                    <li>Keep spine neutral, shoulders relaxed</li>
                    <li>Gently glide chin straight back (like making a "double chin")</li>
                    <li>Hold 5 seconds—should feel gentle stretch at base of skull</li>
                    <li>Release slowly, rest 3 seconds</li>
                    <li>Repeat 8-10 times</li>
                  </ol>
                </div>

                <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                  <p className="font-semibold text-amber-900 mb-2">⚠️ Safety Tips:</p>
                  <ul className="list-disc ml-6 space-y-1 text-amber-800">
                    <li>Use 30% effort—not full strength</li>
                    <li>Stop if you feel dizziness or sharp pain</li>
                    <li>Keep jaw relaxed, don't clench teeth</li>
                    <li>Movement is SMALL—2cm gliding backward is enough</li>
                  </ul>
                </div>
              </div>

              {/* Exercise 2 */}
              <div className="border-2 border-blue-400 rounded-lg p-6 bg-blue-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">2. Seated Wall Angels</h3>
                  <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">ESSENTIAL</span>
                </div>
                
                <p className="text-gray-700 mb-3">
                  <strong>Target:</strong> Rhomboids, lower trapezius, opens chest<br />
                  <strong>Time:</strong> 3 minutes total
                </p>

                <div className="bg-white p-4 rounded mb-4">
                  <p className="font-semibold text-gray-900 mb-2">How to Perform:</p>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                    <li>Sit in sturdy chair placed 6 inches from wall</li>
                    <li>Lean back so upper back and head touch wall</li>
                    <li>Raise arms to shoulder height, elbows bent 90 degrees (goal post position)</li>
                    <li>Press back of hands and elbows gently against wall</li>
                    <li>Slowly slide arms upward 6-8 inches</li>
                    <li>Lower back to starting position with control</li>
                    <li>Repeat 6-8 times</li>
                  </ol>
                </div>

                <div className="bg-emerald-50 p-4 rounded">
                  <p className="font-semibold text-emerald-900 mb-2">✅ Progression:</p>
                  <ul className="list-disc ml-6 space-y-1 text-emerald-800">
                    <li>Week 1-2: 6 reps, minimal upward range</li>
                    <li>Week 3-4: 8 reps, slightly more range</li>
                    <li>Week 5+: 10 reps, or add resistance band</li>
                  </ul>
                </div>
              </div>

              {/* Exercise 3 */}
              <div className="border-2 border-purple-400 rounded-lg p-6 bg-purple-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">3. Seated Thoracic Extension</h3>
                  <span className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">CORE</span>
                </div>
                
                <p className="text-gray-700 mb-3">
                  <strong>Target:</strong> Thoracic extensors, reverses kyphosis<br />
                  <strong>Time:</strong> 2 minutes total
                </p>

                <div className="bg-white p-4 rounded mb-4">
                  <p className="font-semibold text-gray-900 mb-2">How to Perform:</p>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                    <li>Sit at edge of sturdy chair, feet flat</li>
                    <li>Place hands behind head, elbows pointing forward</li>
                    <li>Gently arch upper back backward (extend thoracic spine)</li>
                    <li>Look slightly upward, lifting chest toward ceiling</li>
                    <li>Hold 5 seconds, breathing normally</li>
                    <li>Return to neutral position slowly</li>
                    <li>Repeat 6 times</li>
                  </ol>
                </div>

                <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Critical Safety:</p>
                  <ul className="list-disc ml-6 space-y-1 text-red-800">
                    <li>DO NOT use if you have severe osteoporosis without doctor approval</li>
                    <li>Movement is GENTLE—think "mild stretch" not "aggressive backbend"</li>
                    <li>Stop immediately if you feel sharp pain in spine</li>
                    <li>Keep movement isolated to upper back, don't arch lower back</li>
                  </ul>
                </div>
              </div>

              {/* Exercise 4 */}
              <div className="border-2 border-orange-400 rounded-lg p-6 bg-orange-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">4. Resistance Band Rows (Seated)</h3>
                  <span className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full text-sm font-semibold">STRENGTH</span>
                </div>
                
                <p className="text-gray-700 mb-3">
                  <strong>Target:</strong> Rhomboids, middle traps, rear deltoids<br />
                  <strong>Time:</strong> 3 minutes total<br />
                  <strong>Equipment:</strong> Light resistance band (or towel if no band available)
                </p>

                <div className="bg-white p-4 rounded mb-4">
                  <p className="font-semibold text-gray-900 mb-2">How to Perform:</p>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                    <li>Sit in chair, loop resistance band around sturdy pole or door anchor at chest height</li>
                    <li>Hold ends of band in each hand, arms extended forward</li>
                    <li>Pull elbows straight back, squeezing shoulder blades together</li>
                    <li>Hold squeeze 2 seconds at end position</li>
                    <li>Slowly return arms to extended position</li>
                    <li>Repeat 10-12 times</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded">
                  <p className="font-semibold text-blue-900 mb-2">💡 No Band? Use Towel:</p>
                  <p className="text-blue-800">
                    Hold a towel overhead with arms wide. Pull hands apart while keeping towel taut—this creates isometric resistance. Hold 10 seconds, rest, repeat 6 times.
                  </p>
                </div>
              </div>

              {/* Exercise 5 */}
              <div className="border-2 border-teal-400 rounded-lg p-6 bg-teal-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">5. Doorway Chest Stretch</h3>
                  <span className="bg-teal-200 text-teal-900 px-3 py-1 rounded-full text-sm font-semibold">MOBILITY</span>
                </div>
                
                <p className="text-gray-700 mb-3">
                  <strong>Target:</strong> Pectoralis major/minor (chest muscles)<br />
                  <strong>Time:</strong> 2 minutes total
                </p>

                <div className="bg-white p-4 rounded mb-4">
                  <p className="font-semibold text-gray-900 mb-2">How to Perform:</p>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                    <li>Stand in doorway, place forearms on door frame at shoulder height</li>
                    <li>Step one foot forward through doorway until gentle stretch felt across chest</li>
                    <li>Keep spine neutral, don't arch lower back</li>
                    <li>Hold stretch 30 seconds, breathing deeply</li>
                    <li>Step back, rest 10 seconds</li>
                    <li>Repeat 2 times</li>
                  </ol>
                </div>

                <div className="bg-amber-50 p-4 rounded">
                  <p className="font-semibold text-amber-900 mb-2">⚠️ Gentle Stretch Only:</p>
                  <p className="text-amber-800">
                    You should feel mild tension across chest, NOT pain in shoulders. If you have shoulder problems, use 50% of full range or skip this exercise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Osteoporosis Modifications Section */}
          <section className="mb-12" id="osteoporosis-modifications">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Modifications for Osteoporosis</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-900 mb-3">⚠️ If You Have Diagnosed Osteoporosis:</h3>
              <p className="text-red-800 mb-3">
                Exercise is CRITICAL for bone health—but certain movements increase fracture risk.<sup>[1]</sup> Get doctor or physical therapist clearance before starting any exercise program.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">✅ SAFE Exercises for Osteoporosis:</h3>
            <div className="bg-emerald-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 text-xl">✓</span>
                  <span><strong>Chin tucks (isometric):</strong> Hold position without movement, builds strength safely</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 text-xl">✓</span>
                  <span><strong>Seated wall angels (limited range):</strong> Move arms only 4-6 inches, not full range</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 text-xl">✓</span>
                  <span><strong>Resistance band rows (light band):</strong> Use minimal resistance, focus on form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 text-xl">✓</span>
                  <span><strong>Standing posture holds:</strong> Stand against wall, hold good posture 30 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 text-xl">✓</span>
                  <span><strong>Gentle chest stretches:</strong> Very mild doorway stretch, 20% intensity</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">❌ AVOID These Exercises:</h3>
            <div className="bg-red-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✗</span>
                  <span><strong>Forward flexion:</strong> Crunches, sit-ups, toe touches—all increase compression fracture risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✗</span>
                  <span><strong>Twisting under load:</strong> Golf swings, tennis serves, heavy rotation exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✗</span>
                  <span><strong>High-impact activities:</strong> Jumping, running, aggressive aerobics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✗</span>
                  <span><strong>Overhead pressing:</strong> Can stress weakened vertebrae if technique poor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✗</span>
                  <span><strong>Thoracic extensions:</strong> Skip or use VERY gentle version only with doctor approval</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Progression Timeline Section */}
          <section className="mb-12" id="progression-timeline">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expected Timeline &amp; Progression</h2>
            
            <p className="text-gray-700 mb-6">
              Research on older adults with hyperkyphosis shows significant improvement is possible with consistent exercise.<sup>[2,3]</sup> Here's what to expect:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6 bg-emerald-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Weeks 1-2: Adaptation Phase</h3>
                <p className="text-gray-700 mb-2"><strong>What you'll feel:</strong></p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Mild muscle soreness (especially upper back between shoulder blades)</li>
                  <li>Increased awareness of slouching throughout day</li>
                  <li>Exercises may feel awkward—muscle memory being reprogrammed</li>
                  <li>Fatigue is normal—you're activating dormant muscles</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Weeks 3-4: Early Strength Gains</h3>
                <p className="text-gray-700 mb-2"><strong>What you'll feel:</strong></p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Exercises feel easier, less soreness</li>
                  <li>Can hold good posture longer before fatiguing</li>
                  <li>May notice slight improvement in how clothes fit across upper back</li>
                  <li>Breathing may feel easier (less compression)</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Weeks 6-8: Visible Changes</h3>
                <p className="text-gray-700 mb-2"><strong>What you'll feel:</strong></p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Others may comment on improved posture</li>
                  <li>Noticeable reduction in upper back rounding</li>
                  <li>Less end-of-day fatigue in neck and shoulders</li>
                  <li>Measurable improvement in kyphosis angle (if tracking)</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Weeks 8-12: Significant Improvement</h3>
                <p className="text-gray-700 mb-2"><strong>What you'll feel:</strong></p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Dramatic reduction in dowager's hump prominence</li>
                  <li>Good posture maintained with minimal conscious effort</li>
                  <li>Strength gains allow for progression to harder variations</li>
                  <li>Improved balance and confidence in movements</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Important: Timeline Varies by Individual</h3>
              <p className="text-blue-800 mb-3">
                Several factors affect your timeline:
              </p>
              <ul className="list-disc ml-6 text-blue-800 space-y-1">
                <li><strong>Age:</strong> 50-65 years typically see results in 8-10 weeks; 65+ may need 12-16 weeks</li>
                <li><strong>Severity:</strong> Mild kyphosis improves faster than severe cases</li>
                <li><strong>Consistency:</strong> Daily practice is 3x more effective than 3x per week</li>
                <li><strong>Bone health:</strong> Osteoporosis slows structural changes but muscle improvement still occurs</li>
                <li><strong>Starting fitness:</strong> Previously active adults progress faster</li>
              </ul>
            </div>
          </section>

          {/* When to See Doctor Section */}
          <section className="mb-12" id="when-to-see-doctor">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to See a Doctor</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-900 mb-3">⚠️ Stop Exercises and Seek Medical Attention If:</h3>
              <ul className="space-y-2 text-red-800">
                <li>• <strong>Sharp, shooting pain</strong> in spine during or after exercises</li>
                <li>• <strong>Sudden increase</strong> in kyphosis or back height</li>
                <li>• <strong>Numbness or tingling</strong> in arms, hands, or fingers</li>
                <li>• <strong>Loss of bladder/bowel control</strong> (medical emergency)</li>
                <li>• <strong>Difficulty breathing</strong> or chest pain</li>
                <li>• <strong>Unexplained weight loss</strong> with increasing back curvature</li>
                <li>• <strong>No improvement after 12 weeks</strong> of consistent exercise</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">When Professional Help Accelerates Results:</h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Consider seeing a physical therapist or physician specializing in osteoporosis if:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>You have diagnosed osteoporosis and want supervised exercise prescription</li>
                <li>Your kyphosis is severe (&gt;50 degrees) and you need individualized modifications</li>
                <li>You've had compression fractures and need clearance to exercise</li>
                <li>You want objective progress measurement (kyphosis angle, bone density)</li>
                <li>You need help with balance issues or fall prevention</li>
                <li>You're unsure if you're performing exercises correctly</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Typical PT Protocol:</strong> 1-2 sessions per week for 4-6 weeks, then transition to home program with monthly check-ins. Many insurance plans cover physical therapy with diagnosis of hyperkyphosis or osteoporosis.
              </p>
            </div>
          </section>

          {/* References Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">References</h2>
            <Citations citations={citations} />
          </section>

          {/* People Also Ask Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">People Also Ask</h2>
            <PeopleAlsoAsk questions={paaQuestions} />
          </section>

          {/* Related Articles Section */}
          <section className="mb-12">
            <RelatedArticles articles={relatedArticles} />
          </section>

          {/* Internal Linking Section */}
          <section className="mb-12">
            <InternalLinking 
              helpCategories={[
                { title: 'Exercise Safety', links: [
                  { text: 'Neck exercises with osteoporosis', href: '/help/exercises-safety/neck-exercises-for-osteoporosis' },
                  { text: 'Exercises safe during pregnancy', href: '/help/exercises-safety/exercises-safe-during-pregnancy' }
                ]},
                { title: 'Specific Situations', links: [
                  { text: 'Posture exercises for seniors over 65', href: '/help/specific-situations/posture-exercises-seniors-over-65' },
                  { text: 'Exercises for wheelchair users', href: '/help/specific-situations/neck-exercises-wheelchair-users' }
                ]},
                { title: 'Timeline Questions', links: [
                  { text: 'How long until improvement?', href: '/help/timeline-questions/how-long-until-neck-hump-improves' },
                  { text: 'Age-related recovery differences', href: '/help/timeline-questions/age-related-recovery-differences' }
                ]}
              ]}
            />
          </section>
        </article>

        {/* Desktop TOC */}
        <aside className="hidden xl:block">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}

