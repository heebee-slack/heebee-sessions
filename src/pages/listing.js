// src/pages/listing.js
import { getWorkshops, getCategories } from '../utils/firebase.js'
import { formatDate, formatTime, formatPrice, slotLabel, staggerIn } from '../utils/helpers.js'
import { buildNav, buildFooter } from '../main.js'

export async function renderListing(app) {
  // Show skeleton while loading
  app.innerHTML = buildSkeleton()

  const [workshops, categories] = await Promise.all([getWorkshops(), getCategories()])

  app.innerHTML = buildListing(workshops, categories)
  bindEvents(app, workshops, categories)
  animateIn()
}

function buildSkeleton() {
  return `
    <div style="min-height:100vh;">
      <div style="padding:18px 48px;border-bottom:0.5px solid #D4C9BC;display:flex;align-items:center;justify-content:space-between;">
        <div style="font-size:17px;font-weight:500;color:#1A1410;">Heebee Coffee</div>
      </div>
      <div style="padding:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:200px;">
        ${[1,2,3].map(() => `<div style="height:260px;background:#E8E0D5;border-radius:14px;animation:pulse 1.5s ease infinite;"></div>`).join('')}
      </div>
    </div>
    <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>
  `
}

function buildListing(workshops, categories) {
  const allCategories = ['All', ...categories]

  return `
    ${buildNav('sessions')}

    <!-- HERO -->
    <div style="display:grid;grid-template-columns:1fr 1fr;min-height:280px;">
      <div style="padding:52px 48px;display:flex;flex-direction:column;justify-content:center;">
        <p class="hero-child section-eyebrow" style="margin-bottom:14px;">Workshops · Talks · Experiences</p>
        <h1 class="hero-child" style="font-size:42px;font-weight:200;color:#1A1410;line-height:1.05;letter-spacing:-0.02em;margin-bottom:14px;">
          Learn something<br><em style="font-style:italic;font-weight:300;color:#7C6F3E;">new</em> at Heebee
        </h1>
        <p class="hero-child" style="font-size:13px;font-weight:300;color:#6B5B4E;line-height:1.75;max-width:300px;margin-bottom:26px;">
          Curated sessions by experts, creators & professionals — hosted inside our cafés across Punjab.
        </p>
        <div class="hero-child" style="display:flex;gap:14px;">
          <button class="btn-primary" onclick="document.getElementById('sessions').scrollIntoView({behavior:'smooth'})">
            <div class="ink"></div><span>Browse Sessions</span>
          </button>
          <button class="btn-ghost" onclick="navigate('/host')">
            <div class="ink"></div><span>Become a Host</span>
          </button>
        </div>
      </div>
      <div class="textured" style="background:#E8E0D5;display:flex;align-items:center;justify-content:center;gap:40px;">
        <div style="text-align:center;">
          <div id="stat-sessions" style="font-size:44px;font-weight:200;color:#1A1410;letter-spacing:-0.03em;line-height:1;">0</div>
          <div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#6B5B4E;margin-top:5px;">Sessions hosted</div>
        </div>
        <div style="width:0.5px;height:40px;background:#D4C9BC;"></div>
        <div style="text-align:center;">
          <div id="stat-hosts" style="font-size:44px;font-weight:200;color:#1A1410;letter-spacing:-0.03em;line-height:1;">0</div>
          <div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#6B5B4E;margin-top:5px;">Unique hosts</div>
        </div>
        <div style="width:0.5px;height:40px;background:#D4C9BC;"></div>
        <div style="text-align:center;">
          <div style="font-size:44px;font-weight:200;color:#1A1410;letter-spacing:-0.03em;line-height:1;">2</div>
          <div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#6B5B4E;margin-top:5px;">Cities</div>
        </div>
      </div>
    </div>

    <!-- SESSIONS SECTION -->
    <div class="section" id="sessions">
      <p class="section-eyebrow">Upcoming</p>
      <h2 class="section-title">Sessions & Workshops</h2>
      <p class="section-sub">Any skill, any passion — find your next experience.</p>
      <div class="draw-line"></div>

      <!-- FILTERS -->
      <div class="filter-pills" style="margin-bottom:28px;" id="filters">
        ${allCategories.map((c, i) => `
          <button class="filter-pill ${i === 0 ? 'active' : ''}" data-cat="${c === 'All' ? 'all' : c}">
            ${c}
          </button>
        `).join('')}
      </div>

      <!-- CARDS GRID -->
      <div class="cards-grid" id="cards-grid">
        ${workshops.length > 0
          ? workshops.map(w => buildCard(w)).join('')
          : buildEmpty()
        }
      </div>
    </div>

    <!-- HOST CTA STRIP -->
    <div style="background:#1A1410;padding:48px;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Open to everyone</p>
        <h2 style="font-size:28px;font-weight:200;color:#F2EDE6;letter-spacing:-0.01em;margin-bottom:8px;">Got something worth sharing?</h2>
        <p style="font-size:13px;color:#6B5B4E;font-weight:300;max-width:400px;line-height:1.7;">Host a session at Heebee. Any skill, any passion — if it's worth learning, there's an audience for it.</p>
      </div>
      <button class="btn-cta" style="flex-shrink:0;" onclick="navigate('/host')">
        <div class="ink"></div><span>Request to Host</span>
      </button>
    </div>

    ${buildFooter()}
  `
}

function buildCard(w) {
  const isComingSoon = w.status === 'coming_soon'
  const isFull = w.slotsRemaining <= 0

  return `
    <div class="workshop-card" data-category="${w.category}" onclick="${isComingSoon ? '' : `navigate('/workshop?id=${w.id}')`}">
      <div class="card-cover" style="${w.coverImage ? '' : 'background:#E8E0D5'}">
        ${w.coverImage
          ? `<img src="${w.coverImage}" alt="${w.title}" loading="lazy">`
          : `<div class="card-cover-placeholder">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>`
        }
        ${isComingSoon ? `<div class="coming-soon-overlay"><span class="coming-soon-badge">Coming Soon</span></div>` : ''}
        ${isFull && !isComingSoon ? `<div style="position:absolute;top:10px;right:10px;"><span class="badge badge-full">Fully Booked</span></div>` : ''}
      </div>
      <div class="card-body">
        <span class="badge badge-category">${w.category}</span>
        <p class="card-title">${w.title}</p>
        <p class="card-meta">
          ${w.date ? formatDate(w.date) : 'Date TBC'} · ${w.time ? formatTime(w.time) : ''}<br>
          ${w.outlet}
        </p>
        <div class="card-host-row">
          <div class="card-host-avatar">
            ${w.hostPhoto ? `<img src="${w.hostPhoto}" alt="${w.hostName}">` : w.hostName?.charAt(0) || 'H'}
          </div>
          <span class="card-host-name">${w.hostName} · ${w.hostRole || 'Host'}</span>
        </div>
        <div class="card-footer">
          <div>
            <p class="card-price">${formatPrice(w.price)}</p>
            <p class="card-slots">${isComingSoon ? 'Registration opening soon' : isFull ? 'Join waitlist' : slotLabel(w.slotsRemaining)}</p>
          </div>
          ${!isComingSoon ? `
            <button class="btn-cta btn-sm" onclick="event.stopPropagation();navigate('/workshop?id=${w.id}')">
              <div class="ink"></div>
              <span>${isFull ? 'Waitlist' : 'Book'}</span>
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `
}

function buildEmpty() {
  return `
    <div style="grid-column:1/-1;padding:60px;text-align:center;">
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;">No sessions found. Check back soon or <span style="color:#7C6F3E;cursor:pointer;" onclick="navigate('/host')">request to host one</span>.</p>
    </div>
  `
}

function bindEvents(app, workshops, categories) {
  // Category filter
  app.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      app.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'))
      pill.classList.add('active')
      const cat = pill.dataset.cat
      app.querySelectorAll('.workshop-card').forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat
        card.style.display = show ? '' : 'none'
      })
    })
  })
}

function animateIn() {
  // Hero stagger
  staggerIn('.hero-child', 200, 90)

  // Count up stats
  const sessionCount = document.getElementById('stat-sessions')
  const hostCount = document.getElementById('stat-hosts')
  if (sessionCount) countUp(sessionCount, 48, 1400)
  if (hostCount) countUp(hostCount, 23, 1200)

  // Cards stagger
  setTimeout(() => {
    document.querySelectorAll('.workshop-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 100)
    })
  }, 600)
}

function countUp(el, target, dur) {
  const start = performance.now()
  function frame(now) {
    const p = Math.min((now - start) / dur, 1)
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target)
    if (p < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}
