// src/pages/booking.js
import { getWorkshop, createBooking } from '../utils/firebase.js'
import { formatDate, formatTime, formatPrice, generateBookingId, navigate } from '../utils/helpers.js'
import { buildNav } from '../main.js'

let currentWorkshop = null
let ticketCount = 1
let currentStep = 1

export async function renderBooking(app, workshopId) {
  if (!workshopId) { navigate('/'); return }
  currentWorkshop = await getWorkshop(workshopId)
  if (!currentWorkshop) { navigate('/'); return }
  ticketCount = 1
  currentStep = 1
  app.innerHTML = buildBookingPage()
  bindBookingEvents(app)
}

function buildBookingPage() {
  return `
    ${buildNav()}

    <!-- STEPS -->
    <div class="steps">
      <div class="step">
        <div class="step-num active" id="sn1">1</div>
        <span class="step-label active" id="sl1">Your Details</span>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-num idle" id="sn2">2</div>
        <span class="step-label" id="sl2">Payment</span>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-num idle" id="sn3">3</div>
        <span class="step-label" id="sl3">Confirmation</span>
      </div>
    </div>

    <!-- MAIN LAYOUT -->
    <div style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;min-height:70vh;">

      <!-- STEP PANELS -->
      <div style="padding:32px 40px 40px 0;">

        <!-- STEP 1: DETAILS -->
        <div id="panel1">
          <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:6px;">Step 1 of 3</p>
          <h2 style="font-size:24px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:4px;">Your details</h2>
          <p style="font-size:12px;color:#6B5B4E;font-weight:300;margin-bottom:22px;">Fill in details for each attendee. All fields required except Instagram.</p>
          <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

          <!-- TICKET COUNT -->
          <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:8px;">Tickets</p>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#fff;border:0.5px solid #D4C9BC;border-radius:8px;margin-bottom:20px;">
            <div>
              <p style="font-size:12px;font-weight:500;color:#1A1410;">Ticket for <span id="tcount-lbl">1</span></p>
              <p style="font-size:10px;color:#6B5B4E;margin-top:2px;">${formatPrice(currentWorkshop.price)} per person</p>
            </div>
            <div style="display:flex;align-items:center;gap:14px;">
              <button id="btn-minus" style="width:28px;height:28px;border-radius:50%;border:0.5px solid #D4C9BC;background:#F2EDE6;font-size:16px;color:#1A1410;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;transition:all 0.2s;" onmouseenter="this.style.background='#1A1410';this.style.color='#F2EDE6';" onmouseleave="this.style.background='#F2EDE6';this.style.color='#1A1410';">−</button>
              <span style="font-family:'DM Mono',monospace;font-size:20px;color:#1A1410;min-width:20px;text-align:center;" id="tcount">1</span>
              <button id="btn-plus" style="width:28px;height:28px;border-radius:50%;border:0.5px solid #D4C9BC;background:#F2EDE6;font-size:16px;color:#1A1410;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;transition:all 0.2s;" onmouseenter="this.style.background='#1A1410';this.style.color='#F2EDE6';" onmouseleave="this.style.background='#F2EDE6';this.style.color='#1A1410';">+</button>
            </div>
          </div>

          <!-- ATTENDEE FORMS -->
          <div id="attendee-forms"></div>

          <button id="to-step2" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;margin-top:8px;"
            onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
            onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
            <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
            <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Continue to Payment →</span>
          </button>
        </div>

        <!-- STEP 2: PAYMENT -->
        <div id="panel2" style="display:none;">
          <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:6px;">Step 2 of 3</p>
          <h2 style="font-size:24px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:4px;">Choose payment</h2>
          <p style="font-size:12px;color:#6B5B4E;font-weight:300;margin-bottom:22px;">Select how you'd like to pay for your slot.</p>
          <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

          ${currentWorkshop.paymentMode === 'razorpay' ? buildRazorpayPanel() : buildQRPanel()}
        </div>

        <!-- STEP 3: CONFIRMATION -->
        <div id="panel3" style="display:none;">
          ${buildConfirmationPanel()}
        </div>

      </div>

      <!-- SIDEBAR SUMMARY -->
      <div style="padding:32px 0 40px;">
        <div class="summary-card" style="position:sticky;top:80px;">
          <!-- WS IMAGE -->
          <div style="height:80px;background:#E8E0D5;border-radius:8px;margin-bottom:14px;overflow:hidden;display:flex;align-items:center;justify-content:center;">
            ${currentWorkshop.coverImage
              ? `<img src="${currentWorkshop.coverImage}" alt="${currentWorkshop.title}" style="width:100%;height:100%;object-fit:cover;">`
              : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
            }
          </div>
          <span class="badge badge-category" style="margin-bottom:6px;display:inline-block;">${currentWorkshop.category}</span>
          <p style="font-size:13px;font-weight:500;color:#1A1410;margin-bottom:4px;">${currentWorkshop.title}</p>
          <p style="font-size:10px;color:#6B5B4E;line-height:1.6;margin-bottom:14px;">
            ${formatDate(currentWorkshop.date)} · ${formatTime(currentWorkshop.time)}<br>
            ${currentWorkshop.outlet}
          </p>
          <div style="height:0.5px;background:#E8E0D5;margin-bottom:12px;"></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Price per ticket</span>
            <span style="font-size:11px;color:#1A1410;">${formatPrice(currentWorkshop.price)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Tickets</span>
            <span style="font-size:11px;color:#1A1410;" id="sum-tickets">1</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Host</span>
            <span style="font-size:11px;color:#1A1410;">${currentWorkshop.hostName}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;padding-top:12px;border-top:0.5px solid #E8E0D5;">
            <span style="font-size:12px;font-weight:500;color:#1A1410;">Total</span>
            <span style="font-family:'DM Mono',monospace;font-size:20px;color:#7C6F3E;" id="sum-total">${formatPrice(currentWorkshop.price)}</span>
          </div>
        </div>
      </div>

    </div>
  `
}

function buildRazorpayPanel() {
  return `
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:20px;margin-bottom:16px;">
      <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:12px;">Secure payment via Razorpay</p>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:36px;height:36px;border-radius:8px;background:#072654;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div>
          <p style="font-size:12px;font-weight:500;color:#1A1410;">Heebee Coffee</p>
          <p style="font-size:10px;color:#6B5B4E;">${currentWorkshop.title} · ${formatDate(currentWorkshop.date)}</p>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-top:0.5px solid #F2EDE6;">
        <span style="font-size:11px;color:#6B5B4E;" id="rp-ticket-line">1 ticket × ${formatPrice(currentWorkshop.price)}</span>
        <span style="font-family:'DM Mono',monospace;font-size:13px;color:#7C6F3E;" id="rp-total">${formatPrice(currentWorkshop.price)}</span>
      </div>
    </div>
    <button id="pay-btn" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;"
      onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
      onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
      <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
      <span class="lbl" id="pay-btn-label" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Pay ${formatPrice(currentWorkshop.price)} via Razorpay →</span>
    </button>
  `
}

function buildQRPanel() {
  return `
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:24px;display:flex;flex-direction:column;align-items:center;gap:12px;margin-bottom:16px;">
      <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;align-self:flex-start;">Scan to pay</p>
      <div style="width:160px;height:160px;border:0.5px dashed #D4C9BC;border-radius:8px;background:#F2EDE6;display:flex;align-items:center;justify-content:center;">
        ${currentWorkshop.qrImage
          ? `<img src="${currentWorkshop.qrImage}" alt="UPI QR" style="width:100%;height:100%;object-fit:contain;border-radius:8px;">`
          : `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D4C9BC" stroke-width="1" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>`
        }
      </div>
      <p style="font-size:11px;color:#6B5B4E;text-align:center;line-height:1.6;">
        Pay <strong style="color:#7C6F3E;" id="qr-total">${formatPrice(currentWorkshop.price)}</strong> to complete booking.
      </p>
      <p style="font-size:10px;color:#B8A99A;text-align:center;">After payment, tap the button below to confirm.</p>
    </div>
    <button id="pay-btn" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;"
      onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
      onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
      <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
      <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">I've paid — Confirm Booking →</span>
    </button>
  `
}

function buildConfirmationPanel() {
  return `
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 0;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:26px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:8px;">You're booked!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.7;margin-bottom:24px;max-width:380px;">
        Your slot for <strong style="color:#1A1410;">${currentWorkshop.title}</strong> is confirmed.
        See you at ${currentWorkshop.outlet} on ${formatDate(currentWorkshop.date)} at ${formatTime(currentWorkshop.time)}.
      </p>
      <div class="summary-card" style="width:100%;max-width:440px;margin-bottom:22px;text-align:left;" id="confirm-card">
        <!-- Filled by JS after booking -->
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;" id="confirm-actions">
        <!-- Filled by JS -->
      </div>
    </div>
  `
}

function buildAttendeeForm(index, count) {
  return `
    <div class="attendee-block">
      <div class="attendee-label">
        <div class="attendee-num">${index}</div>
        Attendee ${index}${count === 1 ? ' (you)' : ''}
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Full name <span class="req">*</span></label>
          <input class="field-input attendee-name" data-idx="${index}" type="text" placeholder="Full name" required>
        </div>
        <div class="field">
          <label class="field-label">Phone number <span class="req">*</span></label>
          <input class="field-input attendee-phone" data-idx="${index}" type="tel" placeholder="+91 XXXXX XXXXX" required>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Email address <span class="req">*</span></label>
        <input class="field-input attendee-email" data-idx="${index}" type="email" placeholder="name@email.com" required>
      </div>
      <div class="field" style="margin-bottom:0;">
        <label class="field-label">Instagram handle <span class="opt">optional</span></label>
        <input class="field-input attendee-instagram" data-idx="${index}" type="text" placeholder="@handle">
      </div>
    </div>
  `
}

function rebuildAttendeeForms() {
  const wrap = document.getElementById('attendee-forms')
  if (!wrap) return
  wrap.innerHTML = Array.from({ length: ticketCount }, (_, i) => buildAttendeeForm(i + 1, ticketCount)).join('')
}

function updateTotals() {
  const total = ticketCount * currentWorkshop.price
  const fmt = formatPrice(total)
  const el = (id) => document.getElementById(id)

  if (el('tcount')) el('tcount').textContent = ticketCount
  if (el('tcount-lbl')) el('tcount-lbl').textContent = ticketCount
  if (el('sum-tickets')) el('sum-tickets').textContent = ticketCount
  if (el('sum-total')) el('sum-total').textContent = fmt
  if (el('rp-ticket-line')) el('rp-ticket-line').textContent = `${ticketCount} ticket${ticketCount > 1 ? 's' : ''} × ${formatPrice(currentWorkshop.price)}`
  if (el('rp-total')) el('rp-total').textContent = fmt
  if (el('qr-total')) el('qr-total').textContent = fmt
  if (el('pay-btn-label')) el('pay-btn-label').textContent = `Pay ${fmt} via Razorpay →`
}

function goToStep(n) {
  ;[1, 2, 3].forEach(i => {
    const panel = document.getElementById(`panel${i}`)
    const sn = document.getElementById(`sn${i}`)
    const sl = document.getElementById(`sl${i}`)
    if (panel) panel.style.display = i === n ? 'block' : 'none'
    if (sn) {
      sn.className = `step-num ${i < n ? 'done' : i === n ? 'active' : 'idle'}`
      sn.innerHTML = i < n
        ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
        : i
    }
    if (sl) {
      sl.className = `step-label ${i === n ? 'active' : ''}`
    }
  })
  currentStep = n
}

function collectAttendees() {
  const attendees = []
  for (let i = 1; i <= ticketCount; i++) {
    const name = document.querySelector(`.attendee-name[data-idx="${i}"]`)?.value?.trim()
    const phone = document.querySelector(`.attendee-phone[data-idx="${i}"]`)?.value?.trim()
    const email = document.querySelector(`.attendee-email[data-idx="${i}"]`)?.value?.trim()
    const instagram = document.querySelector(`.attendee-instagram[data-idx="${i}"]`)?.value?.trim()
    if (!name || !phone || !email) return null
    attendees.push({ name, phone, email, instagram })
  }
  return attendees
}

function bindBookingEvents(app) {
  // Build initial attendee form
  rebuildAttendeeForms()

  // Ticket counter
  document.getElementById('btn-plus')?.addEventListener('click', () => {
    if (ticketCount < currentWorkshop.slotsRemaining) {
      ticketCount++
      updateTotals()
      rebuildAttendeeForms()
    }
  })

  document.getElementById('btn-minus')?.addEventListener('click', () => {
    if (ticketCount > 1) {
      ticketCount--
      updateTotals()
      rebuildAttendeeForms()
    }
  })

  // Step 1 → 2
  document.getElementById('to-step2')?.addEventListener('click', () => {
    const attendees = collectAttendees()
    if (!attendees) {
      alert('Please fill in all required fields for each attendee.')
      return
    }
    goToStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  // Step 2 → 3 (pay button)
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#pay-btn') || e.target.id === 'pay-btn') {
      const attendees = collectAttendees()
      if (!attendees) return

      const bookingId = generateBookingId()
      const total = ticketCount * currentWorkshop.price

      const bookingData = {
        workshopId: currentWorkshop.id,
        workshopTitle: currentWorkshop.title,
        workshopDate: currentWorkshop.date,
        workshopTime: currentWorkshop.time,
        outlet: currentWorkshop.outlet,
        hostName: currentWorkshop.hostName,
        tickets: ticketCount,
        totalAmount: total,
        paymentMode: currentWorkshop.paymentMode,
        bookingId,
        attendees,
        primaryAttendee: attendees[0]
      }

      try {
        const booking = await createBooking(bookingData)

        // If Razorpay — open payment link
        if (currentWorkshop.paymentMode === 'razorpay' && currentWorkshop.razorpayLink) {
          window.open(currentWorkshop.razorpayLink, '_blank')
        }

        // Go to step 3
        goToStep(3)
        fillConfirmation(booking, total, bookingId)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch (err) {
        alert('Something went wrong. Please try again.')
        console.error(err)
      }
    }
  })
}

function fillConfirmation(booking, total, bookingId) {
  const card = document.getElementById('confirm-card')
  const actions = document.getElementById('confirm-actions')
  const w = currentWorkshop

  if (card) {
    card.innerHTML = `
      <div class="summary-row"><span class="summary-key">Workshop</span><span class="summary-val">${w.title}</span></div>
      <div class="summary-row"><span class="summary-key">Date & Time</span><span class="summary-val">${formatDate(w.date)} · ${formatTime(w.time)}</span></div>
      <div class="summary-row"><span class="summary-key">Venue</span><span class="summary-val">${w.outlet}</span></div>
      <div class="summary-row"><span class="summary-key">Tickets</span><span class="summary-val">${ticketCount} slot${ticketCount > 1 ? 's' : ''}</span></div>
      <div class="summary-row"><span class="summary-key">Amount paid</span><span class="summary-val mono">${formatPrice(total)}</span></div>
      <div class="summary-row"><span class="summary-key">Booking ID</span><span class="summary-val id">${bookingId}</span></div>
    `
  }

  if (actions) {
    const waMsg = encodeURIComponent(
      `✅ Booking Confirmed — Heebee Sessions\n\nWorkshop: ${w.title}\nDate: ${formatDate(w.date)} · ${formatTime(w.time)}\nVenue: ${w.outlet}\nTickets: ${ticketCount}\nAmount: ${formatPrice(total)}\nBooking ID: ${bookingId}\n\nSee you there! ☕`
    )
    const waPhone = import.meta.env.VITE_HEEBEE_WHATSAPP || '919876543210'
    const calUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(w.title + ' — Heebee Sessions')}&dates=${w.date.replace(/-/g,'')}T${w.time.replace(':','')}00/${w.date.replace(/-/g,'')}T${w.time.replace(':','')}00&location=${encodeURIComponent(w.outlet)}`

    actions.innerHTML = `
      <a href="https://wa.me/${waPhone}?text=${waMsg}" target="_blank" class="btn-wa">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L0 24l6.335-1.503A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.373l-.361-.214-3.741.981.999-3.648-.235-.374A9.859 9.859 0 0 1 2.118 12C2.118 6.535 6.535 2.118 12 2.118c5.464 0 9.882 4.417 9.882 9.882 0 5.464-4.418 9.882-9.882 9.882z"/></svg>
        WhatsApp confirmation
      </a>
      <a href="${calUrl}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;font-weight:500;color:#1A1410;cursor:pointer;text-decoration:none;">
        + Add to calendar
      </a>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;color:#6B5B4E;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    `
  }
}
