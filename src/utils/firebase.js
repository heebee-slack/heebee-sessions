// src/utils/firebase.js
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, push, set, update, query, orderByChild, equalTo, onValue } from 'firebase/database'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const storage = getStorage(app)

// ─── WORKSHOPS ────────────────────────────────────────────────

export async function getWorkshops(filters = {}) {
  const snap = await get(ref(db, 'workshops'))
  if (!snap.exists()) return []
  const all = Object.entries(snap.val()).map(([id, w]) => ({ id, ...w }))
  return all
    .filter(w => w.status === 'live' || w.status === 'coming_soon')
    .filter(w => !filters.category || filters.category === 'all' || w.category === filters.category)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}

export async function getWorkshop(id) {
  const snap = await get(ref(db, `workshops/${id}`))
  if (!snap.exists()) return null
  return { id, ...snap.val() }
}

// ─── BOOKINGS ─────────────────────────────────────────────────

export async function createBooking(bookingData) {
  const bookingId = 'HB-' + Date.now()
  const booking = {
    ...bookingData,
    bookingId,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  await push(ref(db, 'bookings'), booking)

  // Decrement slots in workshop
  const wsRef = ref(db, `workshops/${bookingData.workshopId}`)
  const wsSnap = await get(wsRef)
  if (wsSnap.exists()) {
    const ws = wsSnap.val()
    const newSlots = ws.slotsRemaining - bookingData.tickets
    await update(wsRef, { slotsRemaining: Math.max(0, newSlots) })
  }

  return booking
}

export async function getBookingsByWorkshop(workshopId) {
  const snap = await get(ref(db, 'bookings'))
  if (!snap.exists()) return []
  return Object.entries(snap.val())
    .map(([id, b]) => ({ id, ...b }))
    .filter(b => b.workshopId === workshopId)
}

// ─── HOST REQUESTS ────────────────────────────────────────────

export async function submitHostRequest(requestData) {
  const request = {
    ...requestData,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  await push(ref(db, 'host_requests'), request)
  return request
}

// ─── HOSTS ────────────────────────────────────────────────────

export async function getHost(hostId) {
  const snap = await get(ref(db, `hosts/${hostId}`))
  if (!snap.exists()) return null
  return { id: hostId, ...snap.val() }
}

// ─── CATEGORIES ───────────────────────────────────────────────

export async function getCategories() {
  const snap = await get(ref(db, 'categories'))
  if (!snap.exists()) return ['Coffee', 'Art & Design', 'Wellness', 'Business', 'Food', 'Music', 'Photography']
  return Object.values(snap.val())
}

// ─── CONFIG ───────────────────────────────────────────────────

export async function getConfig() {
  const snap = await get(ref(db, 'config'))
  if (!snap.exists()) return {}
  return snap.val()
}

// ─── STORAGE: IMAGE UPLOAD ────────────────────────────────────

export async function uploadImage(file, path) {
  const sRef = storageRef(storage, path)
  await uploadBytes(sRef, file)
  return getDownloadURL(sRef)
}

// ─── REALTIME: SLOT COUNT ─────────────────────────────────────

export function watchSlots(workshopId, callback) {
  const wsRef = ref(db, `workshops/${workshopId}/slotsRemaining`)
  return onValue(wsRef, snap => callback(snap.val()))
}
