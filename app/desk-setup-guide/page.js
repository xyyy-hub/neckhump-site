import Link from 'next/link'

export const metadata = {
  title: 'Perfect Desk Setup Guide: Ergonomic Workspace for Better Posture',
  description: 'Learn how to set up your desk ergonomically to prevent neck pain, back pain, and improve posture. Complete guide for remote workers and gamers.',
  keywords: ['desk setup', 'ergonomic workspace', 'desk ergonomics', 'monitor height', 'office ergonomics', 'workstation setup'],
  openGraph: {
    title: 'Perfect Desk Setup Guide: Ergonomic Workspace for Better Posture',
    description: 'Learn how to set up your desk ergonomically to prevent neck pain and improve posture.',
    url: 'https://www.neckhump.com/desk-setup-guide',
  },
}

export default function DeskSetupPage() {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Perfect Desk Setup Guide: Ergonomic Workspace for Better Posture
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
          Your desk setup directly impacts your posture and health. Learn how to create an 
          ergonomic workspace that prevents pain and boosts productivity.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          <span>Last updated: December 2024</span>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span>Practical guide</span>
        </div>
      </header>

      <div className="article-content">
        <p className="text-lg text-gray-700 mb-6">
          Poor desk ergonomics cause 54% of work-related musculoskeletal disorders. 
          Whether you work from home or in an office, the right setup can prevent years 
          of back pain, neck problems, and repetitive strain injuries.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold text-yellow-800 mb-4">Quick Desk Assessment</h2>
          <p className="text-yellow-700 mb-3">
            Sit at your desk normally and check:
          </p>
          <ul className="space-y-2 text-yellow-700">
            <li>• Are your feet flat on the floor?</li>
            <li>• Is the top of your monitor at eye level?</li>
            <li>• Are your elbows at 90 degrees while typing?</li>
            <li>• Can you sit back in your chair with good support?</li>
            <li>• Is your mouse at the same level as your keyboard?</li>
          </ul>
          <p className="text-yellow-800 mt-4 font-medium">
            If you answered "no" to any question, your setup needs adjustment.
          </p>
        </div>

        <h2>The Complete Ergonomic Setup</h2>

        <h3>1. Monitor Position (Most Critical)</h3>
        <p>
          Your monitor position determines your head and neck posture throughout the day:
        </p>

        <h4>Height and Angle</h4>
        <ul>
          <li><strong>Top 1/3 rule:</strong> Top of screen should be at or slightly below eye level</li>
          <li><strong>Viewing angle:</strong> Slight downward gaze (10-20 degrees)</li>
          <li><strong>Screen tilt:</strong> Slightly tilted back (10-20 degrees) to reduce glare</li>
          <li><strong>Multiple monitors:</strong> Main monitor directly in front, secondary at slight angle</li>
        </ul>

        <h4>Distance and Size</h4>
        <ul>
          <li><strong>Optimal distance:</strong> 20-24 inches (arm's length)</li>
          <li><strong>Screen size guide:</strong> 24" minimum for comfortable viewing</li>
          <li><strong>Text size:</strong> Should be readable without leaning forward</li>
          <li><strong>Resolution:</strong> Higher resolution reduces eye strain</li>
        </ul>

        <h4>Monitor Solutions by Setup Type</h4>
        <ul>
          <li><strong>Desktop computer:</strong> Adjustable monitor arm or stand</li>
          <li><strong>Laptop only:</strong> External monitor + laptop stand + external keyboard</li>
          <li><strong>Dual setup:</strong> Laptop as secondary screen, external monitor as primary</li>
          <li><strong>Budget solution:</strong> Stack books under monitor to raise height</li>
        </ul>

        <h3>2. Chair and Seating Position</h3>
        <p>
          Your chair is the foundation of good posture:
        </p>

        <h4>Chair Adjustments</h4>
        <ul>
          <li><strong>Seat height:</strong> Feet flat on floor, knees at 90-110 degrees</li>
          <li><strong>Seat depth:</strong> 2-3 finger width between knee and chair edge</li>
          <li><strong>Backrest:</strong> Supports natural lumbar curve</li>
          <li><strong>Armrests:</strong> Support forearms, shoulders relaxed</li>
        </ul>

        <h4>Sitting Position</h4>
        <ul>
          <li><strong>Back against chair:</strong> Use full backrest support</li>
          <li><strong>Both feet on floor:</strong> Use footrest if needed</li>
          <li><strong>Shoulders relaxed:</strong> Not hunched or rolled forward</li>
          <li><strong>Head neutral:</strong> Ears over shoulders</li>
        </ul>

        <h4>Chair Alternatives</h4>
        <ul>
          <li><strong>Exercise ball:</strong> 15-20 minutes max, not all day</li>
          <li><strong>Kneeling chair:</strong> Good for core activation</li>
          <li><strong>Standing desk converter:</strong> Alternate sitting/standing</li>
          <li><strong>Lumbar pillow:</strong> Add support to existing chair</li>
        </ul>

        <h3>3. Keyboard and Mouse Setup</h3>
        <p>
          Proper keyboard and mouse position prevents wrist and shoulder problems:
        </p>

        <h4>Keyboard Position</h4>
        <ul>
          <li><strong>Height:</strong> Elbows at 90 degrees, shoulders relaxed</li>
          <li><strong>Distance:</strong> 4-6 inches from edge of desk</li>
          <li><strong>Angle:</strong> Flat or slightly negative tilt (away from you)</li>
          <li><strong>Wrist position:</strong> Neutral, not bent up or down</li>
        </ul>

        <h4>Mouse Considerations</h4>
        <ul>
          <li><strong>Same level:</strong> Mouse at same height as keyboard</li>
          <li><strong>Close proximity:</strong> Within easy reach of keyboard</li>
          <li><strong>Proper grip:</strong> Light grip, move with whole arm</li>
          <li><strong>Mouse pad:</strong> Adequate space for movement</li>
        </ul>

        <h4>Ergonomic Accessories</h4>
        <ul>
          <li><strong>Keyboard tray:</strong> Adjustable height and angle</li>
          <li><strong>Wrist rest:</strong> For breaks only, not while typing</li>
          <li><strong>Ergonomic mouse:</strong> Vertical or trackball options</li>
          <li><strong>Split keyboard:</strong> Reduces wrist deviation</li>
        </ul>

        <h3>4. Desk Height and Organization</h3>
        <p>
          Your desk setup affects your entire posture chain:
        </p>

        <h4>Desk Height</h4>
        <ul>
          <li><strong>Standard height:</strong> 28-30 inches works for most people</li>
          <li><strong>Adjustable desk:</strong> Allows customization for your height</li>
          <li><strong>Standing desk:</strong> Elbow height when standing</li>
          <li><strong>Keyboard tray:</strong> Can adjust effective desk height</li>
        </ul>

        <h4>Desktop Organization</h4>
        <ul>
          <li><strong>Frequently used items:</strong> Within arm's reach</li>
          <li><strong>Document holder:</strong> Same height and distance as monitor</li>
          <li><strong>Phone position:</strong> Use headset or speaker for long calls</li>
          <li><strong>Clear pathways:</strong> No obstacles under desk</li>
        </ul>

        <h2>Lighting and Environmental Factors</h2>

        <h3>Screen Lighting</h3>
        <ul>
          <li><strong>Reduce glare:</strong> Position monitor perpendicular to windows</li>
          <li><strong>Screen brightness:</strong> Match surrounding lighting</li>
          <li><strong>Blue light filter:</strong> Use especially in evening</li>
          <li><strong>Room lighting:</strong> Ambient light should be 1/3 of screen brightness</li>
        </ul>

        <h3>Air Quality and Temperature</h3>
        <ul>
          <li><strong>Temperature:</strong> 68-72°F for optimal comfort</li>
          <li><strong>Humidity:</strong> 40-60% to prevent dry eyes</li>
          <li><strong>Air circulation:</strong> Avoid direct drafts</li>
          <li><strong>Plants:</strong> Can improve air quality and reduce stress</li>
        </ul>

        <h2>Special Setups</h2>

        <h3>Laptop-Only Workstation</h3>
        <p>
          Laptops create ergonomic challenges because screen and keyboard can't be positioned independently:
        </p>
        <ul>
          <li><strong>Short-term use:</strong> Laptop stand + external keyboard/mouse</li>
          <li><strong>Long-term solution:</strong> External monitor + docking station</li>
          <li><strong>Travel setup:</strong> Portable laptop stand and compact keyboard</li>
          <li><strong>Couch/bed work:</strong> Laptop table with adjustable height</li>
        </ul>

        <h3>Gaming Setup</h3>
        <p>
          Gaming requires special considerations for extended sessions:
        </p>
        <ul>
          <li><strong>Monitor distance:</strong> Slightly closer (18-24 inches) for competitive gaming</li>
          <li><strong>Chair support:</strong> High-back gaming chair with lumbar support</li>
          <li><strong>Keyboard position:</strong> May be angled for WASD comfort</li>
          <li><strong>Mouse space:</strong> Large mouse pad for low sensitivity gaming</li>
          <li><strong>Break reminders:</strong> Especially important during long sessions</li>
        </ul>

        <h3>Standing Desk Setup</h3>
        <p>
          Standing desks can help, but setup is crucial:
        </p>
        <ul>
          <li><strong>Monitor height:</strong> Top of screen at eye level when standing</li>
          <li><strong>Keyboard height:</strong> Elbows at 90 degrees</li>
          <li><strong>Anti-fatigue mat:</strong> Reduces leg and back strain</li>
          <li><strong>Transition schedule:</strong> Start with 30 minutes standing, 30 sitting</li>
          <li><strong>Proper footwear:</strong> Supportive shoes, avoid heels</li>
        </ul>

        <h2>The 20-20-20 Rule and Movement</h2>
        <p>
          Even perfect ergonomics can't replace movement:
        </p>

        <h3>Regular Breaks</h3>
        <ul>
          <li><strong>Every 20 minutes:</strong> Look at something 20 feet away for 20 seconds</li>
          <li><strong>Every 30 minutes:</strong> Stand and move for 2 minutes</li>
          <li><strong>Every hour:</strong> Walk around, do stretches</li>
          <li><strong>Lunch break:</strong> Leave your desk, go outside if possible</li>
        </ul>

        <h3>Desk Exercises</h3>
        <ul>
          <li><strong>Neck rolls:</strong> 5 slow rotations each direction</li>
          <li><strong>Shoulder shrugs:</strong> 10 reps to release tension</li>
          <li><strong>Seated spinal twist:</strong> 30 seconds each direction</li>
          <li><strong>Ankle circles:</strong> Improve circulation</li>
          <li><strong>Eye exercises:</strong> Focus near and far alternately</li>
        </ul>

        <h2>Budget-Friendly Solutions</h2>
        <p>
          You don't need expensive equipment for good ergonomics:
        </p>

        <h3>DIY Ergonomic Fixes</h3>
        <ul>
          <li><strong>Monitor risers:</strong> Stack books or boxes</li>
          <li><strong>Lumbar support:</strong> Rolled towel or small pillow</li>
          <li><strong>Footrest:</strong> Box or stack of books under desk</li>
          <li><strong>Document holder:</strong> Clipboard propped at angle</li>
          <li><strong>Wrist support:</strong> Folded towel (use sparingly)</li>
        </ul>

        <h3>Investment Priority List</h3>
        <ol>
          <li><strong>Adjustable monitor stand/arm</strong> - Biggest impact on posture</li>
          <li><strong>Ergonomic chair</strong> - Foundation of good sitting</li>
          <li><strong>External keyboard/mouse</strong> - If using laptop primarily</li>
          <li><strong>Standing desk converter</strong> - Adds movement options</li>
          <li><strong>Proper lighting</strong> - Reduces eye strain and forward head posture</li>
        </ol>

        <h2>Common Setup Mistakes</h2>
        <ul>
          <li><strong>Monitor too low:</strong> Causes forward head posture</li>
          <li><strong>Chair too high/low:</strong> Creates leg and back problems</li>
          <li><strong>Keyboard too high:</strong> Causes shoulder tension</li>
          <li><strong>Mouse too far:</strong> Leads to shoulder strain</li>
          <li><strong>No back support:</strong> Results in slouching</li>
          <li><strong>Ignoring breaks:</strong> Negates benefits of good setup</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Setup Success Timeline
          </h3>
          <ul className="text-green-700 space-y-1">
            <li><strong>Day 1:</strong> Immediate relief from obvious pain points</li>
            <li><strong>Week 1:</strong> Body adjusts to new positions</li>
            <li><strong>Week 2-4:</strong> Noticeable reduction in daily fatigue</li>
            <li><strong>Month 2+:</strong> Significant improvement in posture and pain</li>
          </ul>
        </div>

        <h2>Your Workspace Setup Checklist</h2>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Daily Setup Check</h3>
          <ul className="space-y-2 text-blue-800">
            <li>□ Monitor top at eye level</li>
            <li>□ Feet flat on floor</li>
            <li>□ Back against chair</li>
            <li>□ Elbows at 90 degrees</li>
            <li>□ Shoulders relaxed</li>
            <li>□ No glare on screen</li>
            <li>□ Frequently used items within reach</li>
            <li>□ Break reminders set</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Transform Your Workspace Today
          </h3>
          <p className="text-blue-800 mb-6">
            Small adjustments to your desk setup can prevent years of pain and dramatically 
            improve your work experience. Start with monitor height—it makes the biggest difference.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/how-to-fix-posture-at-home" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-blue-600 font-semibold mb-1">Fix Current Issues</div>
              <div className="text-sm text-gray-600">Complete Posture Guide</div>
            </Link>
            <Link href="/posture-exercises" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-blue-600 font-semibold mb-1">Desk Exercises</div>
              <div className="text-sm text-gray-600">Movement at Work</div>
            </Link>
            <Link href="/neck-hump-causes" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-blue-600 font-semibold mb-1">Prevent Neck Issues</div>
              <div className="text-sm text-gray-600">Forward Head Posture</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Perfect Desk Setup Guide: Ergonomic Workspace for Better Posture",
            "description": "Learn how to set up your desk ergonomically to prevent neck pain, back pain, and improve posture.",
            "author": {
              "@type": "Person",
              "name": "Posture Fix Pro"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Posture Fix Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://your-domain.com/logo.png"
              }
            },
            "datePublished": "2024-12-01",
            "dateModified": "2024-12-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://neckhump.com/desk-setup-guide"
            }
          })
        }}
      />
    </article>
  )
}
