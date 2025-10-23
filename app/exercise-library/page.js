import Link from 'next/link'
import PeopleAlsoAsk from '../../components/PeopleAlsoAsk'
import AuthorReviewer from '../../components/AuthorReviewer'

export const metadata = {
  title: 'Posture Exercise Library: Beginner to Advanced Routines',
  description: 'Complete library of posture correction exercises organized by difficulty, equipment, time, and target area. Includes chin tucks, wall angels, stretches, and strengthening exercises. Find the perfect routine for your schedule and fitness level.',
  keywords: ['posture exercises', 'neck exercises', 'exercise library', 'posture correction exercises', 'beginner exercises', 'advanced posture exercises'],
  alternates: {
    canonical: 'https://www.neckhump.com/exercise-library',
  },
  openGraph: {
    title: 'Posture Exercise Library: Complete Catalog of Exercises',
    description: 'Browse all posture exercises by difficulty, equipment, time, and target area. From 2-minute quick fixes to complete routines.',
    url: 'https://www.neckhump.com/exercise-library',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'website',
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
}

export default function ExerciseLibraryPage() {
  const exercises = [
    {
      name: 'Chin Tucks',
      difficulty: 'Beginner',
      equipment: 'None',
      time: '2 minutes',
      targetAreas: ['Deep neck flexors', 'Forward head posture'],
      reps: '3 sets of 10 reps',
      benefits: 'Strengthens deep neck flexors, corrects forward head posture, reduces neck pain',
      link: '/exercises/chin-tucks',
      category: 'Strengthening'
    },
    {
      name: 'Wall Angels',
      difficulty: 'Beginner',
      equipment: 'Wall',
      time: '3 minutes',
      targetAreas: ['Upper back', 'Shoulder blades', 'Rounded shoulders'],
      reps: '2-3 sets of 15 reps',
      benefits: 'Strengthens upper back, improves shoulder blade control, opens chest',
      link: '/exercises/wall-angels',
      category: 'Strengthening'
    },
    {
      name: 'Doorway Pec Stretch',
      difficulty: 'Beginner',
      equipment: 'Doorway',
      time: '2 minutes',
      targetAreas: ['Chest muscles', 'Anterior shoulder', 'Rounded shoulders'],
      reps: 'Hold 30 seconds, 3 times',
      benefits: 'Releases tight chest muscles, allows shoulders to sit back naturally',
      link: '/exercises/doorway-pec-stretch',
      category: 'Stretching'
    },
    {
      name: 'Upper Back Foam Rolling',
      difficulty: 'Beginner',
      equipment: 'Foam roller',
      time: '3-5 minutes',
      targetAreas: ['Thoracic spine', 'Upper back', 'Shoulder blades'],
      reps: '5-10 slow rolls',
      benefits: 'Increases thoracic mobility, releases upper back tension, improves breathing',
      link: '/exercises/upper-back-foam-rolling',
      category: 'Mobility'
    },
    {
      name: 'Y-T-W Raises',
      difficulty: 'Intermediate',
      equipment: 'None (or light weights)',
      time: '5 minutes',
      targetAreas: ['Shoulder blades', 'Upper back', 'Posterior shoulder'],
      reps: '2 sets of 10 each position',
      benefits: 'Strengthens scapular stabilizers, corrects rounded shoulders, improves posture endurance',
      link: '/exercises/y-t-w-raises',
      category: 'Strengthening'
    },
    {
      name: 'Upper Trap Stretch',
      difficulty: 'Beginner',
      equipment: 'None',
      time: '2 minutes',
      targetAreas: ['Upper trapezius', 'Neck sides', 'Shoulder tension'],
      reps: 'Hold 30 seconds each side, 2 times',
      benefits: 'Releases overactive upper traps, reduces neck tension, improves head position',
      link: '/neck-hump-exercises#upper-trap-stretch',
      category: 'Stretching'
    },
    {
      name: 'Levator Scapulae Stretch',
      difficulty: 'Beginner',
      equipment: 'None',
      time: '2 minutes',
      targetAreas: ['Levator scapulae', 'Neck-shoulder junction'],
      reps: 'Hold 30 seconds each side, 2 times',
      benefits: 'Releases levator scapulae tension, reduces headaches, improves neck rotation',
      link: '/neck-hump-exercises#levator-scapulae-stretch',
      category: 'Stretching'
    },
    {
      name: 'Prone Cobra',
      difficulty: 'Intermediate',
      equipment: 'None',
      time: '3 minutes',
      targetAreas: ['Lower traps', 'Erector spinae', 'Posterior chain'],
      reps: 'Hold 10-20 seconds, 5 times',
      benefits: 'Strengthens lower traps, improves scapular positioning, builds postural endurance',
      link: '/neck-hump-exercises#prone-cobra',
      category: 'Strengthening'
    },
    {
      name: 'Neck Isometric Strengthening',
      difficulty: 'Beginner',
      equipment: 'Hand/towel',
      time: '3 minutes',
      targetAreas: ['Deep neck flexors', 'Neck stabilizers'],
      reps: 'Hold 10 seconds, 5-10 times each direction',
      benefits: 'Strengthens neck in all directions, improves stability, prevents reinjury',
      link: '/neck-hump-exercises#neck-strengthening',
      category: 'Strengthening'
    },
    {
      name: 'Suboccipital Release',
      difficulty: 'Beginner',
      equipment: 'Tennis ball or fingers',
      time: '3-5 minutes',
      targetAreas: ['Suboccipital muscles', 'Base of skull', 'Tension headaches'],
      reps: '3-5 minutes gentle pressure',
      benefits: 'Releases suboccipital tension, reduces headaches, improves neck extension',
      link: '/neck-hump-exercises#suboccipital-release',
      category: 'Mobility'
    },
    {
      name: 'Scapular Wall Slides',
      difficulty: 'Intermediate',
      equipment: 'Wall',
      time: '3 minutes',
      targetAreas: ['Serratus anterior', 'Lower traps', 'Scapular control'],
      reps: '2 sets of 10-12 reps',
      benefits: 'Improves scapular upward rotation, strengthens serratus, prevents shoulder impingement',
      link: '/neck-hump-exercises#scapular-wall-slides',
      category: 'Strengthening'
    },
    {
      name: 'Cat-Cow (Thoracic Extension)',
      difficulty: 'Beginner',
      equipment: 'None',
      time: '2-3 minutes',
      targetAreas: ['Thoracic spine', 'Spinal mobility', 'Core'],
      reps: '10-15 slow cycles',
      benefits: 'Increases spinal flexibility, warms up spine, improves breathing',
      link: '/neck-hump-exercises#thoracic-extension',
      category: 'Mobility'
    },
    {
      name: 'Hip Flexor Stretch',
      difficulty: 'Beginner',
      equipment: 'None',
      time: '3 minutes',
      targetAreas: ['Hip flexors', 'Anterior pelvic tilt', 'Lower back'],
      reps: 'Hold 30 seconds each side, 2-3 times',
      benefits: 'Releases tight hip flexors, reduces anterior pelvic tilt, alleviates lower back pain',
      link: '/how-to-fix-posture-at-home',
      category: 'Stretching'
    },
    {
      name: 'Glute Bridges',
      difficulty: 'Beginner',
      equipment: 'None',
      time: '3 minutes',
      targetAreas: ['Glutes', 'Hamstrings', 'Posterior chain'],
      reps: '3 sets of 12-15 reps',
      benefits: 'Activates glutes, counteracts sitting, reduces anterior pelvic tilt',
      link: '/how-to-fix-posture-at-home',
      category: 'Strengthening'
    },
    {
      name: 'Dead Bugs',
      difficulty: 'Intermediate',
      equipment: 'None',
      time: '4 minutes',
      targetAreas: ['Core', 'Lumbar stability', 'Coordination'],
      reps: '3 sets of 10 each side',
      benefits: 'Strengthens core without flexing spine, improves coordination, stabilizes lower back',
      link: '/how-to-fix-posture-at-home',
      category: 'Strengthening'
    },
    {
      name: 'Planks',
      difficulty: 'Intermediate',
      equipment: 'None',
      time: '3 minutes',
      targetAreas: ['Core', 'Shoulder stability', 'Full body'],
      reps: 'Hold 30-60 seconds, 3 times',
      benefits: 'Builds core endurance, teaches neutral spine, improves overall stability',
      link: '/how-to-fix-posture-at-home',
      category: 'Strengthening'
    }
  ]

  const sampleRoutines = [
    {
      name: '5-Minute Quick Fix (Beginner)',
      time: '5 minutes',
      difficulty: 'Beginner',
      exercises: ['Chin Tucks', 'Wall Angels', 'Doorway Pec Stretch'],
      description: 'Perfect for desk breaks. Addresses forward head posture and rounded shoulders.',
      bestFor: 'Office workers, beginners, quick relief'
    },
    {
      name: '10-Minute Complete Upper Body',
      time: '10 minutes',
      difficulty: 'Beginner-Intermediate',
      exercises: ['Chin Tucks', 'Upper Trap Stretch', 'Doorway Pec Stretch', 'Wall Angels', 'Cat-Cow'],
      description: 'Comprehensive upper body routine targeting all major postural imbalances.',
      bestFor: 'Daily morning/evening routine'
    },
    {
      name: '15-Minute Full Body Posture',
      time: '15 minutes',
      difficulty: 'Intermediate',
      exercises: ['Chin Tucks', 'Wall Angels', 'Y-T-W Raises', 'Hip Flexor Stretch', 'Glute Bridges', 'Planks'],
      description: 'Complete posture correction addressing upper and lower body.',
      bestFor: 'Comprehensive daily practice'
    },
    {
      name: '2-Minute Emergency Relief',
      time: '2 minutes',
      difficulty: 'Beginner',
      exercises: ['Chin Tucks', 'Upper Trap Stretch'],
      description: 'Ultra-quick relief for neck tension during busy workdays.',
      bestFor: 'Very busy schedules, frequent breaks'
    }
  ]

  const paaQuestions = [
    {
      question: 'How many posture exercises should I do per day?',
      answer: 'For best results, do 5-10 minutes of posture exercises daily. Quality beats quantity—doing 5 minutes with perfect form daily is more effective than 30 minutes with poor form once a week. Start with 3-5 essential exercises (chin tucks, wall angels, stretches) and expand as you build consistency.'
    },
    {
      question: 'What\'s the best time to do posture exercises?',
      answer: 'The best time is whenever you\'ll be most consistent. Morning routines set good posture for the day. Evening routines relieve accumulated tension. Many people find success doing exercises right after waking up and before bed. For desk workers, doing mini-routines during lunch breaks is highly effective.'
    },
    {
      question: 'Do I need equipment for posture exercises?',
      answer: 'No! The most effective posture exercises require zero equipment. Chin tucks, wall angels, and stretches can all be done with just a wall and your body weight. Optional equipment like foam rollers and resistance bands can add variety but aren\'t necessary for excellent results.'
    },
    {
      question: 'How long until I see results from posture exercises?',
      answer: 'Most people feel less pain and tension within 1-2 weeks. Visible posture improvements typically show in 3-4 weeks with daily practice. Significant structural changes take 6-12 weeks. Progress depends on consistency, current posture severity, and whether you\'re also addressing ergonomics and sleep positioning.'
    },
    {
      question: 'Can I do posture exercises if I have back pain?',
      answer: 'Yes, in most cases. Start slowly with gentle exercises like chin tucks and stretches. Stop if you experience sharp pain or numbness. Many people find posture exercises actually reduce back pain by addressing muscle imbalances. For severe or chronic pain, consult a physical therapist before starting.'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Posture Exercise Library",
            "description": "Complete library of posture correction exercises organized by difficulty, equipment, time, and target area.",
            "publisher": {
              "@type": "Organization",
              "name": "NeckHump.com"
            }
          })
        }}
      />

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Posture Exercise Library: Complete Catalog
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          Browse all posture correction exercises organized by difficulty, equipment needed, time required, and target area. From 2-minute quick fixes to complete 15-minute routines—find the perfect exercises for your schedule and fitness level.
        </p>
      </header>

      {/* AEO Short Answer */}
      <section className="mb-12">
        <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-emerald-900" id="short-answer">
            Short Answer
          </h2>
          <p className="text-emerald-800 text-lg leading-relaxed">
            What are the best exercises for posture correction? The most effective exercises are chin tucks (strengthens deep neck flexors), wall angels (upper back strength), doorway pec stretch (releases tight chest), and glute bridges (activates posterior chain). These 4 exercises address 90% of common posture problems. Start with 5 minutes daily—most people see improvement within 2-4 weeks.
          </p>
        </div>
      </section>

      {/* Quick Filter Info */}
      <section className="mb-12">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">
            How to Use This Library
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-blue-800">
            <div>
              <h3 className="font-semibold mb-2">📊 By Difficulty</h3>
              <p className="text-sm">Beginner → Intermediate → Advanced</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎯 By Target Area</h3>
              <p className="text-sm">Neck, Upper Back, Lower Back, Shoulders</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⏱️ By Time</h3>
              <p className="text-sm">2 min → 5 min → 10 min → 15 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Routines */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready-Made Routines (Just Follow Along)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {sampleRoutines.map((routine, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{routine.name}</h3>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-200 text-blue-800">
                  {routine.time}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{routine.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Exercises:</h4>
                <ul className="space-y-1">
                  {routine.exercises.map((exercise, eIndex) => (
                    <li key={eIndex} className="text-sm text-gray-700">• {exercise}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <span className="text-sm font-medium text-gray-900">Best for: </span>
                <span className="text-sm text-gray-700">{routine.bestFor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Exercise List */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          All Exercises (Alphabetical)
        </h2>
        
        <div className="space-y-4">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-400 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exercise.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 
                      exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {exercise.difficulty}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                      {exercise.category}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
                      ⏱️ {exercise.time}
                    </span>
                  </div>
                </div>
                <Link 
                  href={exercise.link}
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline whitespace-nowrap"
                >
                  Full Guide →
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Target Areas:</h4>
                  <ul className="space-y-1">
                    {exercise.targetAreas.map((area, aIndex) => (
                      <li key={aIndex} className="text-sm text-gray-700">• {area}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Equipment:</h4>
                  <p className="text-sm text-gray-700">{exercise.equipment}</p>
                  <h4 className="font-semibold text-gray-900 text-sm mt-2 mb-1">Reps/Duration:</h4>
                  <p className="text-sm text-gray-700">{exercise.reps}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Benefits:</h4>
                  <p className="text-sm text-gray-700">{exercise.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Browse by Category
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/neck-hump-exercises" className="block p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Neck & Upper Back</h3>
            <p className="text-sm text-gray-600 mb-3">Exercises targeting forward head posture, neck hump, and upper back tension</p>
            <span className="text-blue-600 font-medium">View exercises →</span>
          </Link>

          <Link href="/how-to-fix-posture-at-home" className="block p-6 bg-green-50 rounded-lg border border-green-200 hover:border-green-400 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Body Posture</h3>
            <p className="text-sm text-gray-600 mb-3">Complete routines addressing upper and lower body postural imbalances</p>
            <span className="text-green-600 font-medium">View routine →</span>
          </Link>

          <Link href="/posture-exercises" className="block p-6 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Office-Friendly</h3>
            <p className="text-sm text-gray-600 mb-3">Desk break exercises you can do in business attire during work</p>
            <span className="text-purple-600 font-medium">View exercises →</span>
          </Link>
        </div>
      </section>

      {/* Exercise Safety Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Exercise Safety & Progression
        </h2>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3 text-yellow-900">⚠️ Stop If You Experience:</h3>
          <ul className="space-y-2 text-yellow-800">
            <li>• Sharp or shooting pain</li>
            <li>• Numbness or tingling in arms/hands</li>
            <li>• Dizziness or lightheadedness</li>
            <li>• Pain that worsens with exercise</li>
          </ul>
          <p className="mt-3 text-yellow-900 font-medium">
            If you experience any of these, stop immediately and consult a healthcare professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Progression Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Start with beginner exercises only</li>
              <li>• Master form before adding reps</li>
              <li>• Progress every 2-3 weeks</li>
              <li>• Listen to your body—pain is not gain</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Form Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Breathe normally—don't hold breath</li>
              <li>• Move slowly and controlled</li>
              <li>• Focus on feeling the right muscles work</li>
              <li>• Film yourself to check form</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Related Resources
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/how-to-get-rid-of-neck-hump-fast" className="block p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-400 hover:border-green-600 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">⚡ Get Rid of Neck Hump Fast</h3>
            <p className="text-sm text-gray-600">Intensive 2-4 week rapid correction plan with daily routines</p>
          </Link>

          <Link href="/dowagers-hump-exercises" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">Dowager's Hump Exercises</h3>
            <p className="text-sm text-gray-600">Safe exercises for seniors and those with osteoporosis</p>
          </Link>

          <Link href="/neck-hump-self-massage" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">Self-Massage Techniques</h3>
            <p className="text-sm text-gray-600">Release tension with tennis ball and foam roller methods</p>
          </Link>

          <Link href="/posture-correction-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">Posture Correction Guide</h3>
            <p className="text-sm text-gray-600">Complete guide to all posture types and correction methods</p>
          </Link>

          <Link href="/desk-setup-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">Ergonomic Setup</h3>
            <p className="text-sm text-gray-600">Workspace optimization prevents poor posture</p>
          </Link>

          <Link href="/help" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
            <p className="text-sm text-gray-600">Specific questions about exercises, equipment, timelines</p>
          </Link>
        </div>
      </section>

      {/* People Also Ask */}
      <PeopleAlsoAsk questions={paaQuestions} />

      {/* Author & Reviewer */}
      <AuthorReviewer 
        reviewer="Dr. Sarah Johnson, DPT"
        lastUpdated="October 2025"
        showDisclaimer={true}
      />
    </div>
  )
}

