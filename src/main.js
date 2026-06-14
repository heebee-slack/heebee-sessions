// src/main.js
import './styles/global.css'
import { getRoute, navigate, staggerIn, drawLines, initInkButtons } from './utils/helpers.js'
import { renderListing } from './pages/listing.js'
import { renderWorkshop } from './pages/workshop.js'
import { renderBooking } from './pages/booking.js'
import { renderConfirmation } from './pages/confirmation.js'
import { renderHostRequest } from './pages/host-request.js'

const app = document.getElementById('app')
const loader = document.getElementById('loader')

async function render() {
  const { path, params } = getRoute()
  app.innerHTML = ''
  switch (path) {
    case '/workshop': await renderWorkshop(app, params.id); break
    case '/book': await renderBooking(app, params.id); break
    case '/confirmation': await renderConfirmation(app, params); break
    case '/host': await renderHostRequest(app); break
    default: await renderListing(app)
  }
  requestAnimationFrame(() => { initInkButtons(); drawLines() })
}

export function buildNav(activePage = '') {
  const ig = import.meta.env.VITE_HEEBEE_INSTAGRAM || 'heebeecoffee'
  return `
    <nav class="nav">
      <div class="nav-logo" onclick="navigate('/')" style="cursor:pointer;">Heebee Coffee</div>
      <div class="nav-links">
        <span class="nav-link ${activePage==='sessions'?'active':''}" onclick="navigate('/')">Sessions</span>
        <span class="nav-link" onclick="window.open('https://instagram.com/${ig}','_blank')">Instagram</span>
        <span class="nav-link" onclick="navigate('/')">Outlets</span>
      </div>
      <button class="btn-primary btn-sm" onclick="navigate('/host')">
        <div class="ink"></div><span>Host a Session</span>
      </button>
    </nav>`
}

export function buildFooter() {
  const ig = import.meta.env.VITE_HEEBEE_INSTAGRAM || 'heebeecoffee'
  return `
    <footer class="footer">
      <div class="footer-logo">Heebee Coffee</div>
      <div class="footer-links">
        <span class="footer-link" onclick="navigate('/')">Sessions</span>
        <span class="footer-link" onclick="navigate('/host')">Host with us</span>
        <span class="footer-link" onclick="window.open('https://instagram.com/${ig}','_blank')">@ Instagram</span>
      </div>
      <div style="font-size:10px;color:#6B5B4E;">Sarabha Nagar · Ghumar Mandi · Model Town Jalandhar</div>
    </footer>`
}

window.navigate = navigate
window.addEventListener('hashchange', render)
window.addEventListener('load', async () => {
  await render()
  setTimeout(() => loader.classList.add('hidden'), 1800)
})
