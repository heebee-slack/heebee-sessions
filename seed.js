// scripts/seed.js
// Run once: node scripts/seed.js
// Requires VITE_ env vars in .env

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, push } from 'firebase/database'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const app = initializeApp({
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
})

const db = getDatabase(app)

async function seed() {
  console.log('🌱 Seeding Firebase...')

  // ─── CONFIG ───────────────────────────────────────────────
  await set(ref(db, 'config'), {
    heebeeInstagram: 'heebeecoffee',
    heebeeWhatsApp: '919876543210',
    heebeeWebsite: 'https://heebee.in',
    outlets: {
      SHB: { name: 'Heebee SHB', address: 'Sarabha Nagar, Ludhiana', seats: 120 },
      GHB: { name: 'Heebee GHB', address: 'Ghumar Mandi, Ludhiana', seats: 20 },
      JLD: { name: 'Heebee JLD', address: 'Model Town, Jalandhar', seats: 60 }
    }
  })
  console.log('✅ Config seeded')

  // ─── CATEGORIES ───────────────────────────────────────────
  await set(ref(db, 'categories'), {
    1: 'Coffee',
    2: 'Art & Design',
    3: 'Wellness',
    4: 'Business',
    5: 'Food',
    6: 'Music',
    7: 'Photography'
  })
  console.log('✅ Categories seeded')

  // ─── HOSTS ────────────────────────────────────────────────
  const hosts = {
    host_shamjeet: {
      name: 'Shamjeet Singh',
      role: 'Head Barista, Heebee SHB',
      bio: 'Shamjeet has been with Heebee since day one. 6 years of specialty coffee experience. Trained 40+ baristas and hosted 12+ workshops across Punjab.',
      instagram: '@shamjeetcoffee',
      type: 'heebee',
      photo: null
    },
    host_nitigya: {
      name: 'Nitigya Soni',
      role: 'Co-founder, Heebee Coffee',
      bio: 'Co-founder of Heebee Coffee. Leads R&D, product and menu innovation. Specialty coffee enthusiast with deep roots in the Indian café scene.',
      instagram: '@nitigyasoni',
      type: 'heebee',
      photo: null
    }
  }
  await set(ref(db, 'hosts'), hosts)
  console.log('✅ Hosts seeded')

  // ─── WORKSHOPS ────────────────────────────────────────────
  const workshops = [
    {
      title: 'Manual Brew Fundamentals',
      category: 'Coffee',
      description: 'Learn the science behind pouring the perfect cup, every time. In this hands-on session, you\'ll explore the fundamentals of manual brewing — from grind size and water temperature to mastering the V60, AeroPress, and Chemex. No prior experience needed.',
      date: '2026-06-20',
      time: '11:00',
      duration: '2 hours',
      outlet: 'Heebee SHB, Sarabha Nagar, Ludhiana',
      maxSlots: 12,
      slotsRemaining: 8,
      price: 500,
      status: 'live',
      paymentMode: 'razorpay',
      razorpayLink: 'https://rzp.io/your-link-here',
      hostId: 'host_shamjeet',
      hostName: 'Shamjeet Singh',
      hostRole: 'Head Barista, Heebee SHB',
      hostType: 'heebee',
      hostBio: 'Shamjeet has been with Heebee since day one. 6 years of specialty coffee experience.',
      hostInstagram: '@shamjeetcoffee',
      hostPhoto: null,
      coverImage: null,
      additionalImages: [],
      thingsToKnow: ['All ages welcome', 'Indoor · Seated', 'Equipment provided', 'Complimentary coffee'],
      language: 'English + Hindi',
      createdAt: new Date().toISOString()
    },
    {
      title: 'Coffee Tasting 101',
      category: 'Coffee',
      description: 'Discover the layers of coffee through structured tasting. Learn to identify flavour notes, understand processing methods, and develop your palate. Guided by Nitigya, co-founder of Heebee Coffee.',
      date: '2026-07-06',
      time: '15:00',
      duration: '2 hours',
      outlet: 'Heebee JLD, Model Town, Jalandhar',
      maxSlots: 12,
      slotsRemaining: 0,
      price: 850,
      status: 'live',
      paymentMode: 'qr',
      qrImage: null,
      hostId: 'host_nitigya',
      hostName: 'Nitigya Soni',
      hostRole: 'Co-founder, Heebee Coffee',
      hostType: 'heebee',
      hostBio: 'Co-founder of Heebee Coffee. Leads R&D, product and menu innovation.',
      hostInstagram: '@nitigyasoni',
      hostPhoto: null,
      coverImage: null,
      additionalImages: [],
      thingsToKnow: ['All ages welcome', 'Indoor · Seated', 'Complimentary tasting flight'],
      language: 'English + Hindi',
      createdAt: new Date().toISOString()
    },
    {
      title: 'Watercolour for Beginners',
      category: 'Art & Design',
      description: 'A 2-hour beginner session teaching basic watercolour techniques — wet on wet, washes, and simple nature illustrations. All materials provided. Max 10 attendees for an intimate experience.',
      date: '2026-06-22',
      time: '15:00',
      duration: '2 hours',
      outlet: 'Heebee GHB, Ghumar Mandi, Ludhiana',
      maxSlots: 10,
      slotsRemaining: 6,
      price: 800,
      status: 'coming_soon',
      paymentMode: 'razorpay',
      razorpayLink: null,
      hostId: null,
      hostName: 'Priya Mehta',
      hostRole: 'Visual Artist · Delhi',
      hostType: 'external',
      hostBio: 'Delhi-based watercolour artist with 8 years of teaching experience. Has hosted sessions at DLF Cyber Hub and Haus Khas Village.',
      hostInstagram: '@priyamehta.art',
      hostPhoto: null,
      coverImage: null,
      additionalImages: [],
      thingsToKnow: ['All ages welcome', 'Indoor · Seated', 'All materials provided'],
      language: 'English + Hindi',
      createdAt: new Date().toISOString()
    }
  ]

  for (const workshop of workshops) {
    await push(ref(db, 'workshops'), workshop)
  }
  console.log('✅ Workshops seeded')
  console.log('\n🎉 Seed complete! Your Firebase DB is ready.')
  process.exit(0)
}

seed().catch(err => { console.error('❌ Seed failed:', err); process.exit(1) })
