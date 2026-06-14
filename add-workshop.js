// scripts/add-workshop.js
// Run: node add-workshop.js
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'
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

const workshop = {
  title: "Coffee Tasting — The Founder's Edit",
  category: 'Coffee',
  description: "A rare sit-down with Nitigya Soni, co-founder of Heebee Coffee. Walk through the full flavour spectrum — origin stories, processing methods, and how to identify what's in your cup. Intimate, unscripted, and deeply caffeinated.",
  date: '2026-07-12',
  time: '11:00',
  duration: '2 hours',
  outlet: 'Heebee SHB, Sarabha Nagar, Ludhiana',
  maxSlots: 6,
  slotsRemaining: 6,
  price: 1899,
  status: 'live',
  paymentMode: 'qr',
  qrImage: null,
  razorpayLink: null,
  hostName: 'Nitigya Soni',
  hostRole: 'Co-founder, Heebee Coffee',
  hostType: 'heebee',
  hostBio: "Nitigya co-founded Heebee Coffee and leads all things product, R&D and menu innovation. He's spent years obsessing over what makes a cup of coffee worth remembering.",
  hostInstagram: '@nitigyasoni',
  hostPhoto: null,
  coverImage: null,
  additionalImages: [],
  thingsToKnow: ['All ages welcome', 'Indoor · Seated', 'Complimentary tasting flight included', 'Max 6 attendees — intimate format'],
  language: 'English + Hindi',
  createdAt: new Date().toISOString()
}

async function addWorkshop() {
  console.log('Adding workshop...')
  await push(ref(db, 'workshops'), workshop)
  console.log('✅ Workshop added successfully!')
  process.exit(0)
}

addWorkshop().catch(err => { console.error('❌ Failed:', err); process.exit(1) })
