// src/pages/workshop.js
import { getWorkshop, watchSlots } from '../utils/firebase.js'
import { formatDate, formatTime, formatPrice, navigate } from '../utils/helpers.js'
import { buildNav, buildFooter } from '../main.js'

export async function renderWorkshop(app, workshopId) {
  if (!workshopId) { navigate('/'); return }

  app.innerHTML = buildSkeleton()
  const workshop = await getWorkshop(workshopId)
  if (!workshop) { app.innerHTML = build404(); return }

  app.innerHTML = buildWorkshopPage(workshop)
  bindEvents(app, workshop)

  // Watch slots in real time
  watchSlots(workshopId, (slots) => {
    const slotEl = document.getElementById('slot-count')
    const slotFill = document.getElementById('slot-fill')
    const slotSub = document.getElementById('slot-sub')
    if (slotEl) slotEl.textContent = slots
    if (slotFill) slotFill.style.width = `${Math.round(((workshop.maxSlots - slots) / workshop.maxSlots) * 100)}%`
    if (slotSub) slotSub.textContent = `${slots} of ${workshop.maxSlots} remaining`
  })
}

function buildWorkshopPage(w) {
  const isFull = w.slotsRemaining <= 0
  const isComingSoon = w.status === 'coming_soon'

  return `
    ${buildNav()}

    <!-- BACK -->
    <div style="padding:14px 48px;border-bottom:0.5px solid #D4C9BC;">
      <span style="font-size:11px;color:#6B5B4E;cursor:pointer;display:inline-flex;align-items:center;gap:6px;" onclick="navigate('/')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        All Sessions
      </span>
    </div>

    <!-- HERO IMAGE -->
    <div style="height:280px;background:#E0D8CE;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      ${w.coverImage
        ? `<img src="${w.coverImage}" alt="${w.title}" style="width:100%;height:100%;object-fit:cover;">`
        : `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
      }
      <span style="position:absolute;top:16px;left:48px;" class="badge badge-category">${w.category}</span>
      ${!isComingSoon && !isFull ? `<span style="position:absolute;top:16px;right:48px;" class="badge badge-live">${w.slotsRemaining} slots left</span>` : ''}
      ${isFull ? `<span style="position:absolute;top:16px;right:48px;" class="badge badge-full">Fully Booked</span>` : ''}
    </div>

    <!-- MAIN LAYOUT -->
    <div style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;">

      <!-- LEFT CONTENT -->
      <div style="padding:32px 40px 40px 0;">
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Workshop</p>
        <h1 style="font-size:32px;font-weight:200;color:#1A1410;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px;">${w.title}</h1>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:22px;">
          <div class="card-host-avatar">${w.hostPhoto ? `<img src="${w.hostPhoto}" alt="${w.hostName}" style="width:100%;height:100%;object-fit:cover;">` : w.hostName?.charAt(0) || 'H'}</div>
          <span style="font-size:12px;color:#6B5B4E;">Hosted by ${w.hostName}${w.hostRole ? ' · ' + w.hostRole : ''}</span>
        </div>
        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- META GRID -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
          ${buildMetaItem('Calendar', formatDate(w.date))}
          ${buildMetaItem('Clock', `${formatTime(w.time)}${w.duration ? ' — ' + w.duration : ''}`)}
          ${buildMetaItem('Map-pin', w.outlet)}
          ${buildMetaItem('Users', `Max ${w.maxSlots} attendees`)}
          ${w.language ? buildMetaItem('Language', w.language) : ''}
          ${w.duration ? buildMetaItem('Clock-hour-3', w.duration) : ''}
        </div>

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- ABOUT -->
        <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">About this session</p>
        <p style="font-size:13px;color:#6B5B4E;line-height:1.75;font-weight:300;margin-bottom:22px;">${w.description}</p>

        <!-- THINGS TO KNOW -->
        ${w.thingsToKnow && w.thingsToKnow.length ? `
          <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">Things to know</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px;">
            ${w.thingsToKnow.map(t => `<span class="badge badge-category" style="padding:4px 10px;font-size:10px;">${t}</span>`).join('')}
          </div>
        ` : ''}

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- HOST PROFILE -->
        <div class="host-block">
          <p class="host-block-label">Your host</p>
          <div style="display:flex;align-items:flex-start;gap:16px;">
            <div class="host-avatar">
              ${w.hostPhoto ? `<img src="${w.hostPhoto}" alt="${w.hostName}">` : w.hostName?.charAt(0) || 'H'}
            </div>
            <div>
              <span class="host-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${w.hostType === 'heebee' ? 'Heebee Team' : 'External Host'}
              </span>
              <p style="font-size:15px;font-weight:400;color:#1A1410;margin-bottom:2px;">${w.hostName}</p>
              ${w.hostRole ? `<p style="font-size:11px;color:#6B5B4E;margin-bottom:6px;">${w.hostRole}</p>` : ''}
              ${w.hostBio ? `<p style="font-size:12px;color:#6B5B4E;line-height:1.65;margin-bottom:10px;font-weight:300;">${w.hostBio}</p>` : ''}
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${w.hostInstagram ? `<a href="https://instagram.com/${w.hostInstagram.replace('@','')}" target="_blank" class="btn-ghost btn-sm"><div class="ink"></div><span>@ ${w.hostInstagram}</span></a>` : ''}
                <button class="btn-ghost btn-sm" onclick="navigate('/')"><div class="ink"></div><span>Heebee Coffee</span></button>
              </div>
            </div>
          </div>
        </div>

        <!-- HEEBEE STRIP -->
        <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#F2EDE6;border:0.5px solid #D4C9BC;border-radius:10px;">
          <span style="font-size:13px;font-weight:500;color:#1A1410;letter-spacing:0.03em;">Heebee Coffee</span>
          <div style="width:0.5px;height:16px;background:#D4C9BC;"></div>
          <a href="https://instagram.com/${import.meta.env?.VITE_HEEBEE_INSTAGRAM || 'heebeecoffee'}" target="_blank" style="font-size:10px;color:#7C6F3E;cursor:pointer;">@ heebee.coffee</a>
          <div style="width:0.5px;height:16px;background:#D4C9BC;"></div>
          <span style="font-size:10px;color:#6B5B4E;">Ludhiana · Jalandhar</span>
        </div>
      </div>

      <!-- SIDEBAR -->
      <div style="padding:32px 0 40px;">
        <div class="summary-card" style="position:sticky;top:80px;">
          <!-- PRICE -->
          <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:6px;">
            <span style="font-family:'DM Mono',monospace;font-size:28px;color:#7C6F3E;">${formatPrice(w.price)}</span>
            <span style="font-size:11px;color:#6B5B4E;">per slot</span>
          </div>

          <!-- SLOT BAR -->
          <div style="margin-bottom:16px;">
            <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:5px;">
              <span style="font-family:'DM Mono',monospace;font-size:20px;color:#1A1410;" id="slot-count">${w.slotsRemaining}</span>
              <span style="font-size:10px;color:#6B5B4E;text-transform:uppercase;letter-spacing:0.08em;">slots left</span>
            </div>
            <div class="slot-bar-bg">
              <div class="slot-bar-fill" id="slot-fill" style="width:${Math.round(((w.maxSlots - w.slotsRemaining) / w.maxSlots) * 100)}%;"></div>
            </div>
            <span style="font-size:9px;color:#B8A99A;" id="slot-sub">${w.slotsRemaining} of ${w.maxSlots} remaining</span>
          </div>

          <div style="height:0.5px;background:#E8E0D5;margin-bottom:14px;"></div>

          <!-- PAYMENT MODE -->
          <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:8px;">Pay via</p>
          <div style="display:flex;gap:8px;margin-bottom:14px;">
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${w.paymentMode === 'razorpay' ? '#7C6F3E' : '#D4C9BC'};background:${w.paymentMode === 'razorpay' ? '#F2EDE6' : '#fff'};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${w.paymentMode === 'razorpay' ? '#7C6F3E' : '#6B5B4E'}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <p style="font-size:10px;font-weight:500;color:${w.paymentMode === 'razorpay' ? '#1A1410' : '#6B5B4E'};">Razorpay</p>
            </div>
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${w.paymentMode === 'qr' ? '#7C6F3E' : '#D4C9BC'};background:${w.paymentMode === 'qr' ? '#F2EDE6' : '#fff'};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${w.paymentMode === 'qr' ? '#7C6F3E' : '#6B5B4E'}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>
              <p style="font-size:10px;font-weight:500;color:${w.paymentMode === 'qr' ? '#1A1410' : '#6B5B4E'};">UPI QR</p>
            </div>
          </div>

          ${isComingSoon ? `
            <div style="padding:12px;background:#F2EDE6;border-radius:6px;text-align:center;margin-bottom:8px;">
              <p style="font-size:12px;color:#D4A84B;font-weight:500;">Coming Soon</p>
              <p style="font-size:10px;color:#6B5B4E;margin-top:3px;">Registration opens soon</p>
            </div>
          ` : isFull ? `
            <button class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;">
              <div class="ink"></div><span>Join Waitlist</span>
            </button>
          ` : `
            <button class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;" onclick="navigate('/book?id=${w.id}')">
              <div class="ink"></div><span>Book Your Slot</span>
            </button>
          `}

          <p style="font-size:10px;color:#B8A99A;text-align:center;line-height:1.5;margin-bottom:14px;">Confirmation sent via WhatsApp after booking.</p>

          <div style="height:0.5px;background:#E8E0D5;margin-bottom:12px;"></div>

          <div style="display:flex;flex-direction:column;gap:7px;">
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#6B5B4E;">
              <div style="width:4px;height:4px;border-radius:50%;background:#7C6F3E;flex-shrink:0;"></div>
              Free cancellation before 48 hrs
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#6B5B4E;">
              <div style="width:4px;height:4px;border-radius:50%;background:#7C6F3E;flex-shrink:0;"></div>
              All ages welcome
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#6B5B4E;">
              <div style="width:4px;height:4px;border-radius:50%;background:#7C6F3E;flex-shrink:0;"></div>
              Indoor · Seated
            </div>
          </div>
        </div>
      </div>

    </div>

    ${buildFooter()}
  `
}

function buildMetaItem(icon, value) {
  const icons = {
    'Calendar': '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    'Clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'Map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    'Users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'Language': '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    'Clock-hour-3': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16.5 12"/>'
  }
  return `
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <div style="width:28px;height:28px;border-radius:6px;background:#E8E0D5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C6F3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[icon] || ''}</svg>
      </div>
      <div>
        <p style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;margin-bottom:2px;">${icon.replace('-', ' ')}</p>
        <p style="font-size:12px;color:#1A1410;">${value}</p>
      </div>
    </div>
  `
}

function buildSkeleton() {
  return `<div style="min-height:100vh;padding:48px;"><div style="height:280px;background:#E8E0D5;border-radius:14px;margin-top:100px;animation:pulse 1.5s ease infinite;"></div></div><style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>`
}

function build404() {
  return `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;"><p style="font-size:22px;font-weight:200;color:#1A1410;">Workshop not found</p><button class="btn-primary" onclick="navigate('/')"><div class="ink"></div><span>Back to sessions</span></button></div>`
}

function bindEvents(app, workshop) {
  // Additional poster gallery if exists
  if (workshop.additionalImages && workshop.additionalImages.length) {
    // Could add lightbox here in Phase 2
  }
}
