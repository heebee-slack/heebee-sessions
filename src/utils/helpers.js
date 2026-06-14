// src/utils/helpers.js

// ─── DATE / TIME ──────────────────────────────────────────────

export function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
}

export function formatTime(timeStr) {
  const [h, m] = timeStr.split(':')
  const hr = parseInt(h)
  return `${hr > 12 ? hr - 12 : hr}:${m} ${hr >= 12 ? 'PM' : 'AM'}`
}

export function formatDateShort(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
}

// ─── PRICE ────────────────────────────────────────────────────

export function formatPrice(amount) {
  return '₹ ' + Number(amount).toLocaleString('en-IN')
}

// ─── SLOTS ────────────────────────────────────────────────────

export function slotPercent(remaining, total) {
  return Math.round(((total - remaining) / total) * 100)
}

export function slotLabel(remaining) {
  if (remaining === 0) return 'Fully booked'
  if (remaining <= 3) return `${remaining} slots left`
  return `${remaining} slots left`
}

// ─── WHATSAPP ─────────────────────────────────────────────────

export function buildWhatsAppConfirmation(booking, workshop) {
  const msg = encodeURIComponent(
    `Hi! I just booked *${workshop.title}* at Heebee Coffee.\n\n` +
    `📅 ${formatDate(workshop.date)} at ${formatTime(workshop.time)}\n` +
    `📍 ${workshop.outlet}\n` +
    `🎟 ${booking.tickets} ticket(s)\n` +
    `💰 ${formatPrice(booking.totalAmount)}\n` +
    `🔖 Booking ID: ${booking.bookingId}\n\n` +
    `Please confirm my slot. Thank you!`
  )
  const phone = import.meta.env.VITE_HEEBEE_WHATSAPP || '919876543210'
  return `https://wa.me/${phone}?text=${msg}`
}

export function buildAttendeeWhatsApp(booking, workshop) {
  const msg = encodeURIComponent(
    `✅ *Booking Confirmed — Heebee Sessions*\n\n` +
    `Workshop: *${workshop.title}*\n` +
    `Date: ${formatDate(workshop.date)} · ${formatTime(workshop.time)}\n` +
    `Venue: ${workshop.outlet}\n` +
    `Tickets: ${booking.tickets}\n` +
    `Amount: ${formatPrice(booking.totalAmount)}\n` +
    `Booking ID: ${booking.bookingId}\n\n` +
    `See you there! ☕`
  )
  return `https://wa.me/?text=${msg}`
}

// ─── CALENDAR ─────────────────────────────────────────────────

export function buildCalendarLink(workshop) {
  const start = new Date(`${workshop.date}T${workshop.time}`)
  const end = new Date(start.getTime() + (workshop.durationMinutes || 120) * 60000)
  const fmt = d => d.toISOString().replace(/-|:|\.\d+/g, '')
  return `https://www.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(workshop.title + ' — Heebee Sessions')}` +
    `&dates=${fmt(start)}/${fmt(end)}` +
    `&details=${encodeURIComponent('Workshop at Heebee Coffee. heebee.in')}` +
    `&location=${encodeURIComponent(workshop.outletAddress || workshop.outlet)}`
}

// ─── ANIMATIONS ───────────────────────────────────────────────

export function staggerIn(selector, delayStart = 200, step = 90) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.opacity = 0
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'none'
    setTimeout(() => {
      el.style.transition = 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)'
      el.style.opacity = 1
      el.style.transform = 'translateY(0)'
    }, delayStart + i * step)
  })
}

export function drawLines() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('drawn') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.draw-line').forEach(el => observer.observe(el))
}

export function initInkButtons() {
  document.querySelectorAll('.btn-ink').forEach(btn => {
    const ink = btn.querySelector('.ink')
    const lbl = btn.querySelector('span')
    if (!ink) return
    btn.addEventListener('mouseenter', () => {
      ink.style.left = '0'
      if (lbl) lbl.style.color = '#F2EDE6'
    })
    btn.addEventListener('mouseleave', () => {
      ink.style.left = '-100%'
      if (lbl) lbl.style.color = ''
    })
  })
}

// ─── ROUTER ───────────────────────────────────────────────────

export function getRoute() {
  const hash = window.location.hash.replace('#', '') || '/'
  const [path, ...queryParts] = hash.split('?')
  const params = {}
  queryParts.join('?').split('&').forEach(p => {
    const [k, v] = p.split('=')
    if (k) params[k] = decodeURIComponent(v || '')
  })
  return { path, params }
}

export function navigate(path, params = {}) {
  const query = Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')
  window.location.hash = path + (query ? '?' + query : '')
}

// ─── BOOKING ID ───────────────────────────────────────────────

export function generateBookingId() {
  return '#HB-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 9000) + 1000)
}
