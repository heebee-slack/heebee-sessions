// src/pages/confirmation.js
// This page handles direct navigation to /confirmation
// Most confirmations are handled inline in booking.js
import { buildNav, buildFooter } from '../main.js'
import { navigate } from '../utils/helpers.js'

export async function renderConfirmation(app, params) {
  // If params exist render them, else redirect home
  if (!params.bookingId) {
    navigate('/')
    return
  }

  app.innerHTML = `
    ${buildNav()}
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:80px 48px;min-height:70vh;justify-content:center;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:32px;font-weight:200;color:#1A1410;letter-spacing:-0.02em;margin-bottom:10px;">You're booked!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.75;max-width:380px;margin-bottom:28px;">
        Your booking is confirmed. Check your WhatsApp for confirmation details.
      </p>
      <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:18px 24px;max-width:380px;margin-bottom:24px;text-align:left;">
        <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #F2EDE6;">
          <span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Booking ID</span>
          <span style="font-family:'DM Mono',monospace;font-size:11px;color:#6B5B4E;">${params.bookingId}</span>
        </div>
        ${params.workshop ? `<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #F2EDE6;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Workshop</span><span style="font-size:12px;color:#1A1410;">${decodeURIComponent(params.workshop)}</span></div>` : ''}
        ${params.amount ? `<div style="display:flex;justify-content:space-between;padding:7px 0;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Amount</span><span style="font-family:'DM Mono',monospace;font-size:13px;color:#7C6F3E;">₹ ${params.amount}</span></div>` : ''}
      </div>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:13px;color:#1A1410;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    </div>
    ${buildFooter()}
  `
}
