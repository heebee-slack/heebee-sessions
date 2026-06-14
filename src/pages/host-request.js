// src/pages/host-request.js
import { submitHostRequest } from '../utils/firebase.js'
import { buildNav, buildFooter } from '../main.js'
import { navigate } from '../utils/helpers.js'

export async function renderHostRequest(app) {
  app.innerHTML = buildHostRequestPage()
  bindEvents(app)
}

function buildHostRequestPage() {
  return `
    ${buildNav()}

    <div style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;min-height:80vh;">

      <!-- FORM -->
      <div style="padding:40px 40px 48px 0;" id="form-col">
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Host a session</p>
        <h1 style="font-size:32px;font-weight:200;color:#1A1410;letter-spacing:-0.02em;margin-bottom:8px;">Request to host<br>at Heebee</h1>
        <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.75;max-width:440px;margin-bottom:28px;">
          Got something worth sharing? Tell us about your idea. We'll review your request and reach out to discuss dates, terms and logistics.
        </p>
        <div style="height:0.5px;background:#D4C9BC;margin-bottom:28px;"></div>

        <!-- ABOUT YOU -->
        <p style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">About you</p>
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:18px;margin-bottom:20px;">
          <div class="field-row">
            <div class="field">
              <label class="field-label">Full name <span class="req">*</span></label>
              <input class="field-input" id="f-name" type="text" placeholder="Your full name" required>
            </div>
            <div class="field">
              <label class="field-label">Phone number <span class="req">*</span></label>
              <input class="field-input" id="f-phone" type="tel" placeholder="+91 XXXXX XXXXX" required>
            </div>
          </div>
          <div class="field-row">
            <div class="field">
              <label class="field-label">Email address <span class="req">*</span></label>
              <input class="field-input" id="f-email" type="email" placeholder="you@email.com" required>
            </div>
            <div class="field">
              <label class="field-label">Instagram handle <span class="opt">optional</span></label>
              <input class="field-input" id="f-instagram" type="text" placeholder="@yourhandle">
            </div>
          </div>
          <div class="field" style="margin-bottom:0;">
            <label class="field-label">Your background / experience <span class="req">*</span></label>
            <textarea class="field-input" id="f-background" placeholder="Tell us about yourself — your expertise, what you do, past workshops or talks if any..." style="min-height:90px;" required></textarea>
          </div>
        </div>

        <!-- WORKSHOP IDEA -->
        <p style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Your workshop idea</p>
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:18px;margin-bottom:20px;">
          <div class="field">
            <label class="field-label">Workshop title / topic <span class="req">*</span></label>
            <input class="field-input" id="f-topic" type="text" placeholder="e.g. Watercolour for Beginners, Brand Identity 101" required>
          </div>
          <div class="field">
            <label class="field-label">What will attendees learn? <span class="req">*</span></label>
            <textarea class="field-input" id="f-description" placeholder="Describe your session — what you'll cover, format, duration, and what people take away..." style="min-height:90px;" required></textarea>
          </div>
          <div class="field-row">
            <div class="field">
              <label class="field-label">Category <span class="req">*</span></label>
              <select class="field-input" id="f-category" required>
                <option value="" disabled selected>Select category</option>
                <option>Coffee</option>
                <option>Art & Design</option>
                <option>Wellness</option>
                <option>Business</option>
                <option>Food</option>
                <option>Music</option>
                <option>Photography</option>
                <option>Other</option>
              </select>
            </div>
            <div class="field">
              <label class="field-label">Price per slot (₹) <span class="req">*</span></label>
              <input class="field-input" id="f-price" type="number" placeholder="e.g. 500" min="0" required>
            </div>
          </div>
        </div>

        <!-- LOGISTICS -->
        <p style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Preferred logistics</p>
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:18px;margin-bottom:20px;">
          <div class="field-row">
            <div class="field">
              <label class="field-label">Preferred outlet <span class="req">*</span></label>
              <select class="field-input" id="f-outlet" required>
                <option value="" disabled selected>Select outlet</option>
                <option>Heebee SHB — Sarabha Nagar, Ludhiana</option>
                <option>Heebee GHB — Ghumar Mandi, Ludhiana</option>
                <option>Heebee JLD — Model Town, Jalandhar</option>
                <option>No preference</option>
              </select>
            </div>
            <div class="field">
              <label class="field-label">Preferred date <span class="opt">optional</span></label>
              <input class="field-input" id="f-date" type="date">
            </div>
          </div>
          <div class="field" style="margin-bottom:0;">
            <label class="field-label">Anything else? <span class="opt">optional</span></label>
            <textarea class="field-input" id="f-notes" placeholder="Equipment needed, special setup, co-hosts, links to past work..." style="min-height:60px;"></textarea>
          </div>
        </div>

        <!-- SUBMIT -->
        <button id="submit-btn" style="display:block;width:100%;padding:13px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;margin-bottom:10px;"
          onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
          onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
          <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
          <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Submit Host Request →</span>
        </button>
        <p style="font-size:10px;color:#B8A99A;line-height:1.6;">We review every request personally. You'll hear from us within 3–5 working days.</p>
      </div>

      <!-- SIDEBAR -->
      <div style="padding:40px 0 48px;">
        <!-- HOW IT WORKS -->
        <div style="background:#E8E0D5;border-radius:12px;padding:20px;margin-bottom:14px;position:relative;overflow:hidden;">
          <div style="position:absolute;inset:0;opacity:0.04;pointer-events:none;background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');background-size:200px;"></div>
          <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:14px;position:relative;">How it works</p>
          ${[
            'Submit your request with your idea and background.',
            'We review and get back within 3–5 working days.',
            'If it\'s a fit, we discuss date, terms and logistics.',
            'We publish the workshop and handle all bookings.',
            'You show up and host. We take care of the rest.'
          ].map(t => `
            <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;position:relative;">
              <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
              <p style="font-size:11px;color:#6B5B4E;line-height:1.6;font-weight:300;">${t}</p>
            </div>
          `).join('')}
        </div>

        <!-- OUTLETS -->
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:16px;">
          <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Our outlets</p>
          ${[
            { name: 'Heebee SHB', loc: 'Sarabha Nagar, Ludhiana · 120 seats' },
            { name: 'Heebee GHB', loc: 'Ghumar Mandi, Ludhiana · 20 seats' },
            { name: 'Heebee JLD', loc: 'Model Town, Jalandhar · 60 seats' }
          ].map(o => `
            <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:0.5px solid #F2EDE6;">
              <div style="width:8px;height:8px;border-radius:50%;background:#E8E0D5;border:0.5px solid #7C6F3E;flex-shrink:0;"></div>
              <div>
                <p style="font-size:12px;color:#1A1410;font-weight:400;">${o.name}</p>
                <p style="font-size:10px;color:#6B5B4E;">${o.loc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- SUCCESS STATE (hidden) -->
    <div id="success-screen" style="display:none;flex-direction:column;align-items:center;text-align:center;padding:80px 48px;min-height:60vh;justify-content:center;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:28px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:10px;">Request received!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.75;max-width:380px;margin-bottom:28px;">
        Thanks for reaching out. We've received your hosting request and will review it personally. Expect to hear from us within 3–5 working days.
      </p>
      <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:18px 22px;max-width:380px;text-align:left;margin-bottom:24px;">
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
          <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
          <p style="font-size:12px;color:#6B5B4E;line-height:1.6;font-weight:300;">Your request is under review — no approval yet.</p>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
          <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
          <p style="font-size:12px;color:#6B5B4E;line-height:1.6;font-weight:300;">We'll reach out to discuss terms and finalise details.</p>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
          <p style="font-size:12px;color:#6B5B4E;line-height:1.6;font-weight:300;">Questions? Reach us at <span style="color:#7C6F3E;">heebee.in</span></p>
        </div>
      </div>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#1A1410;cursor:pointer;" onclick="navigate('/')">
        Back to sessions
      </button>
    </div>

    ${buildFooter()}
  `
}

function bindEvents(app) {
  document.getElementById('submit-btn')?.addEventListener('click', async () => {
    const fields = {
      name: document.getElementById('f-name')?.value?.trim(),
      phone: document.getElementById('f-phone')?.value?.trim(),
      email: document.getElementById('f-email')?.value?.trim(),
      instagram: document.getElementById('f-instagram')?.value?.trim(),
      background: document.getElementById('f-background')?.value?.trim(),
      topic: document.getElementById('f-topic')?.value?.trim(),
      description: document.getElementById('f-description')?.value?.trim(),
      category: document.getElementById('f-category')?.value,
      price: document.getElementById('f-price')?.value,
      outlet: document.getElementById('f-outlet')?.value,
      date: document.getElementById('f-date')?.value,
      notes: document.getElementById('f-notes')?.value?.trim()
    }

    const required = ['name', 'phone', 'email', 'background', 'topic', 'description', 'category', 'price', 'outlet']
    const missing = required.filter(k => !fields[k])
    if (missing.length) {
      alert('Please fill in all required fields.')
      return
    }

    const btn = document.getElementById('submit-btn')
    btn.querySelector('.lbl').textContent = 'Submitting...'
    btn.disabled = true

    try {
      await submitHostRequest(fields)
      document.getElementById('form-col').style.display = 'none'
      const success = document.getElementById('success-screen')
      success.style.display = 'flex'
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again.')
      btn.querySelector('.lbl').textContent = 'Submit Host Request →'
      btn.disabled = false
    }
  })
}
