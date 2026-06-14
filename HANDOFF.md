# Heebee Sessions — Full Product Handoff
> Last updated: 2026-06-14 · Read from source code, not from memory.

---

## 1. What This Product Is

**Heebee Sessions** is a public-facing workshop & events booking platform for Heebee Coffee (Ludhiana & Jalandhar, Punjab). Visitors browse upcoming sessions, view workshop details, book slots, and request to host their own session. The whole thing is a Vite SPA deployed to GitHub Pages, backed by Firebase Realtime Database.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend | Vite (vanilla JS, no framework) | ES modules, no React/Vue |
| Styling | Plain CSS (global.css) + inline styles | No Tailwind, no CSS-in-JS |
| Backend | Firebase Realtime Database | Not Firestore |
| Storage | Firebase Storage | Images (covers, QR codes, host photos) |
| Payments | Razorpay payment link OR UPI QR | Per-workshop, not SDK integrated |
| Deploy | GitHub Pages via `gh-pages` npm package | `npm run deploy` |
| Fonts | Outfit (200/300/400/500) + DM Mono | Loaded from Google Fonts |
| Loader | Dotlottie player — pour-over animation | Only on initial page load |

---

## 3. Design System (LOCKED — do not change)

### Colour Tokens
```css
--bg:           #F2EDE6  /* Parchment — page background */
--surface:      #E8E0D5  /* Slightly darker surface */
--border:       #D4C9BC  /* All borders */
--text:         #1A1410  /* Pitch black — primary text */
--text-muted:   #6B5B4E  /* Secondary text */
--text-faint:   #B8A99A  /* Placeholder / ghost text */
--accent:       #7C6F3E  /* Aged Olive — CTA fills, prices, active states */
--accent-dark:  #3E3A1F  /* Dark Forest — reserved */
--white:        #FFFFFF
```

### Typography
- **Body / UI:** `Outfit` — weights 200, 300, 400, 500
- **Prices / IDs / Data:** `DM Mono` weight 400
- **Eyebrows:** 10px, letter-spacing 0.14em, uppercase, `--accent` colour
- **Headings:** font-weight 200, letter-spacing -0.02em

### Lottie Loader
```
https://lottie.host/5070b382-1128-464b-92f0-98701ca02d26/vW7gdBWczl.lottie
```
Pour-over coffee animation. Only shown on initial page load (`index.html`). **Never** used inside cards or inline.

---

## 4. Button System (CRITICAL — read all of this)

All buttons use an ink-fill hover animation. The ink `<div>` slides in from the left; the label `<span>` sits above it on z-index:2.

### Primary (dark bg)
```html
<button class="btn-primary">
  <div class="ink"></div>
  <span>Label</span>
</button>
```
- `background: #1A1410` (Pitch)
- Ink fill: `#7C6F3E` (Olive) slides in on hover
- Span colour: `#F2EDE6` (Beige) — always

### CTA (white bg, text flips)
```html
<button class="btn-cta">
  <div class="ink"></div>
  <span>Label</span>
</button>
```
- `background: #ffffff`, border `0.5px solid #D4C9BC`
- Ink fill: Olive on hover
- Span colour: `#1A1410` at rest → `#F2EDE6` on hover (via `transition: color 0.15s ease 0.15s`)

### Ghost (transparent)
```html
<button class="btn-ghost">
  <div class="ink"></div>
  <span>Label</span>
</button>
```
- `background: transparent`, border `0.5px solid #D4C9BC`
- Ink fill: Olive on hover
- Span colour: `#6B5B4E` at rest → `#F2EDE6` on hover

### WhatsApp
```html
<a class="btn-wa">...</a>
```
- `background: #25D366`, `color: #ffffff` — **always**, never changes

### Small variant
Add class `btn-sm` alongside any button class: `padding: 6px 14px; font-size: 11px`

### Admin Action Buttons (SVG, dark bg)
```html
<button style="width:26px;height:26px;border-radius:5px;border:none;background:#4A4640;...">
  <svg stroke="#FFFFFF">...</svg>
</button>
```
- **Never** use Tabler icon fonts — they go invisible on dark backgrounds
- Use inline SVG with `stroke="#FFFFFF"` always
- Danger actions: `background: #5A2828`

---

## 5. File Structure (Actual)

```
heebee-workshops-events/
├── index.html              ← Entry point, loader, Lottie, font imports
├── package.json            ← heebee-sessions v1.0.0
├── vite.config.js          ← base: '/heebee-sessions/', builds admin.html too
├── database.rules.json     ← Firebase RTDB security rules
├── env.example             ← Copy → .env, fill in credentials
├── seed.js                 ← One-time DB seed (3 workshops + config + categories + 2 hosts)
│
├── main.js                 ← Router, buildNav(), buildFooter(), initInkButtons(), drawLines()
├── global.css              ← All CSS — tokens, components, responsive
├── firebase.js             ← All Firebase reads/writes (no auth yet)
├── helpers.js              ← formatDate/Time/Price, routing, animations, WhatsApp/calendar links
│
├── listing.js              ← Screen 1: Workshop grid with filters + hero + host CTA strip
├── workshop.js             ← Screen 2: Workshop detail + sidebar + real-time slot watcher
├── booking.js              ← Screen 3: 3-step booking flow (Details → Payment → Confirmation)
├── confirmation.js         ← Screen 9: Direct /confirmation route (rare, most handled inline)
└── host-request.js         ← Screen 4: Host request form → Firebase host_requests node
```

> **Note:** The `vite.config.js` references `admin.html` as a second entry point — this file does not exist yet (Phase 2).

---

## 6. Routing

Hash-based routing. No history API. All routing lives in `helpers.js`.

```js
getRoute()   // returns { path: '/workshop', params: { id: '-abc123' } }
navigate(path, params)  // sets window.location.hash
window.navigate = navigate  // exposed globally for inline onclick use
```

| Route | Page | Notes |
|---|---|---|
| `#/` | Listing | Default route |
| `#/workshop?id=<firebaseId>` | Workshop Detail | Loads from DB by ID |
| `#/book?id=<firebaseId>` | Booking Flow | Loads workshop, then 3-step UI |
| `#/confirmation?bookingId=X` | Confirmation | Direct-link fallback only |
| `#/host` | Host Request Form | — |

---

## 7. Firebase Database Schema

### `/workshops/<pushId>`
```json
{
  "title": "Manual Brew Fundamentals",
  "category": "Coffee",
  "description": "Full text...",
  "date": "2026-06-20",
  "time": "11:00",
  "duration": "2 hours",
  "outlet": "Heebee SHB, Sarabha Nagar, Ludhiana",
  "maxSlots": 12,
  "slotsRemaining": 8,
  "price": 500,
  "status": "live",              // live | coming_soon | draft | past
  "paymentMode": "razorpay",     // razorpay | qr
  "razorpayLink": "https://rzp.io/...",
  "qrImage": null,
  "hostId": "host_shamjeet",
  "hostName": "Shamjeet Singh",
  "hostRole": "Head Barista, Heebee SHB",
  "hostType": "heebee",         // heebee | external
  "hostBio": "...",
  "hostInstagram": "@handle",
  "hostPhoto": null,
  "coverImage": null,
  "additionalImages": [],
  "thingsToKnow": ["All ages welcome", "Indoor · Seated"],
  "language": "English + Hindi",
  "durationMinutes": 120,
  "createdAt": "2026-06-13T00:00:00.000Z"
}
```

### `/bookings/<pushId>`
```json
{
  "workshopId": "<firebase push id>",
  "workshopTitle": "Manual Brew Fundamentals",
  "workshopDate": "2026-06-20",
  "workshopTime": "11:00",
  "outlet": "Heebee SHB, Sarabha Nagar, Ludhiana",
  "hostName": "Shamjeet Singh",
  "tickets": 2,
  "totalAmount": 1000,
  "paymentMode": "razorpay",
  "bookingId": "HB-1718282929000",
  "status": "pending",
  "attendees": [
    { "name": "...", "phone": "+91 ...", "email": "...", "instagram": "@..." }
  ],
  "primaryAttendee": { "name": "...", "phone": "...", "email": "..." },
  "createdAt": "2026-06-13T00:00:00.000Z"
}
```

> `bookingId` format: `HB-<Date.now()>`. NOT the Firebase push ID.  
> `status` is always `"pending"` on creation — **never auto-confirmed**.  
> Booking also decrements `slotsRemaining` on the workshop node atomically.

### `/host_requests/<pushId>`
```json
{
  "name": "...",
  "phone": "...",
  "email": "...",
  "instagram": "@...",
  "background": "...",
  "topic": "...",
  "description": "...",
  "category": "Coffee",
  "price": "500",
  "outlet": "Heebee SHB — Sarabha Nagar, Ludhiana",
  "date": "2026-07-01",
  "notes": "...",
  "status": "pending",
  "createdAt": "..."
}
```
> **Never auto-approved.** Gavish reviews manually and contacts by phone/WhatsApp.

### `/hosts/<hostId>`
```json
{
  "name": "Shamjeet Singh",
  "role": "Head Barista, Heebee SHB",
  "bio": "...",
  "instagram": "@shamjeetcoffee",
  "type": "heebee",
  "photo": null
}
```
Seed has `host_shamjeet` and `host_nitigya`. Workshops embed host data directly (denormalised).

### `/categories`
```json
{ "1": "Coffee", "2": "Art & Design", "3": "Wellness", "4": "Business", "5": "Food", "6": "Music", "7": "Photography" }
```

### `/config`
```json
{
  "heebeeInstagram": "heebeecoffee",
  "heebeeWhatsApp": "919876543210",
  "heebeeWebsite": "https://heebee.in",
  "outlets": {
    "SHB": { "name": "Heebee SHB", "address": "Sarabha Nagar, Ludhiana", "seats": 120 },
    "GHB": { "name": "Heebee GHB", "address": "Ghumar Mandi, Ludhiana", "seats": 20 },
    "JLD": { "name": "Heebee JLD", "address": "Model Town, Jalandhar", "seats": 60 }
  }
}
```

---

## 8. Firebase Security Rules Summary

```
workshops        → public read, no public write
bookings         → no public read, public write (attendee creates booking)
host_requests    → no public read, public write (anyone can submit)
hosts            → public read, no write
categories       → public read, no write
config           → public read, no write
```

---

## 9. Firebase Helper Functions (`firebase.js`)

| Function | What it does |
|---|---|
| `getWorkshops(filters)` | Returns all `live` + `coming_soon` workshops, sorted by date. Accepts `{ category }` filter. |
| `getWorkshop(id)` | Gets a single workshop by push ID |
| `createBooking(data)` | Pushes to `/bookings`, decrements `slotsRemaining` on the workshop |
| `getBookingsByWorkshop(workshopId)` | Scans all bookings and filters (admin use) |
| `submitHostRequest(data)` | Pushes to `/host_requests` with `status: 'pending'` |
| `getHost(hostId)` | Gets a host profile by key |
| `getCategories()` | Returns categories array; falls back to hardcoded list if DB empty |
| `getConfig()` | Returns the config node |
| `uploadImage(file, path)` | Uploads file to Firebase Storage, returns download URL |
| `watchSlots(workshopId, cb)` | Real-time listener on `slotsRemaining` — used on workshop detail page |

---

## 10. Helper Utilities (`helpers.js`)

| Function | What it does |
|---|---|
| `formatDate(dateStr)` | `"Fri, 20 June 2026"` — en-IN locale |
| `formatTime(timeStr)` | `"11:00 AM"` from `"11:00"` |
| `formatDateShort(dateStr)` | `"20 Jun"` |
| `formatPrice(amount)` | `"₹ 500"` — en-IN locale |
| `slotPercent(remaining, total)` | Percentage booked (for slot bar width) |
| `slotLabel(remaining)` | `"8 slots left"` or `"Fully booked"` |
| `buildWhatsAppConfirmation(booking, workshop)` | Booking confirmation WA link for team |
| `buildAttendeeWhatsApp(booking, workshop)` | Booking summary WA link for attendee to share |
| `buildCalendarLink(workshop)` | Google Calendar "add event" URL |
| `staggerIn(selector, delayStart, step)` | CSS entrance animation — fade up in sequence |
| `drawLines()` | IntersectionObserver that adds `.drawn` class to `.draw-line` divs |
| `initInkButtons()` | Adds mouseenter/leave listeners to `.btn-ink` class buttons |
| `getRoute()` | Parses `window.location.hash` → `{ path, params }` |
| `navigate(path, params)` | Sets hash, triggers `hashchange` → re-render |
| `generateBookingId()` | Returns `"#HB-2026-XXXX"` format (4-digit random) |

---

## 11. Page-by-Page Breakdown

### Screen 1 — Listing (`listing.js`)
- Shows skeleton while loading workshops + categories in parallel
- Hero: 2-col grid — left copy + CTA buttons, right textured panel with animated counters (48 sessions, 23 hosts, 2 cities — **hardcoded, not from DB**)
- Category filter pills — client-side show/hide (no re-fetch)
- Workshop cards: show `coming_soon` badge overlay or `Fully Booked` badge
- Coming soon cards: click does nothing (no navigation)
- Black CTA strip at bottom: "Host a Session" → `/host`
- Cards animate in with stagger + `visible` class

### Screen 2 — Workshop Detail (`workshop.js`)
- Shows skeleton while fetching workshop by ID
- 2-col layout: left (content) + right (sticky summary sidebar)
- Cover image or placeholder SVG
- Meta grid: date, time+duration, outlet, max attendees, language
- Host block with type badge (Heebee Team / External Host)
- Sidebar: price in DM Mono, real-time slot bar (via `watchSlots`), payment mode display
- CTA: Book Your Slot → `/book?id=X` | Join Waitlist (if full) | Coming Soon notice

### Screen 3 — Booking Flow (`booking.js`)
3-step flow, all on one page with panels shown/hidden:

**Step 1 — Details**
- Ticket counter (min 1, max: min(slotsRemaining, 6))
- Attendee forms generated per ticket count — all fields required except Instagram
- "Continue to Payment" validates all fields before advancing

**Step 2 — Payment**
- Razorpay mode: shows payment summary card + "Pay ₹X via Razorpay →" button → opens `razorpayLink` in new tab, then immediately creates booking in DB and advances to Step 3
- QR mode: shows QR image (or placeholder dashed box) + "I've paid — Confirm Booking →" button → creates booking, advances to Step 3
- ⚠️ Payment is **not verified programmatically** — Razorpay opens a new tab, booking is created optimistically. Manual reconciliation needed.

**Step 3 — Confirmation (inline)**
- Success icon + message
- Summary card (filled by JS: workshop, date, venue, tickets, amount, booking ID)
- 3 action buttons: WhatsApp confirmation to Heebee team, Add to Calendar, Browse more sessions

### Screen 4 — Host Request (`host-request.js`)
- 2-col: left form + right sidebar (how it works + outlets)
- 3 sections: About You, Workshop Idea, Logistics
- Required: name, phone, email, background, topic, description, category, price, outlet
- Optional: instagram, date, notes
- On submit: hides form, shows success state (no redirect, no email, no auto-approval)
- Gavish contacts manually within 3–5 working days

### Screen 9 — Confirmation (`confirmation.js`)
- Standalone route `/confirmation?bookingId=X` — for edge cases (direct link)
- Shows booking ID, workshop name, amount from URL params
- Normally never reached — confirmations happen inline in booking.js

---

## 12. Navigation & Footer

`buildNav(activePage)` and `buildFooter()` are exported from `main.js` and imported into every page module.

**Nav links:**
- Sessions → `navigate('/')`
- Instagram → `window.open('https://instagram.com/<ig>', '_blank')` (from env var)
- Outlets → `navigate('/')` (placeholder — no outlets page yet)
- "Host a Session" button → `navigate('/host')`

**Footer:**
- Sessions, Host with us, @ Instagram
- Tagline: `Sarabha Nagar · Ghumar Mandi · Model Town Jalandhar`

---

## 13. CSS Components Reference

| Class | What it styles |
|---|---|
| `.nav` | Sticky top nav, `z-index:100` |
| `.btn-primary / .btn-cta / .btn-ghost / .btn-wa` | Button variants |
| `.btn-sm` | Small size modifier |
| `.filter-pills / .filter-pill` | Category filter row |
| `.workshop-card` | Card with stagger-in animation, hover lift |
| `.card-cover / .card-body / .card-footer` | Card internals |
| `.slot-bar-bg / .slot-bar-fill` | Booking progress bar |
| `.field / .field-label / .field-input / .field-row` | Form inputs |
| `.section / .section-eyebrow / .section-title / .section-sub` | Content sections |
| `.draw-line` | Animated underline (width 0→100% on scroll into view) |
| `.cards-grid` | 3-col grid for workshop cards |
| `.textured` | Noise texture overlay (SVG data-URI, 4% opacity) |
| `.summary-card / .summary-row / .summary-key / .summary-val` | Booking summary box |
| `.steps / .step / .step-num / .step-label / .step-line` | 3-step progress indicator |
| `.tip-wrap / .tip` | CSS-only tooltip (hover, arrow pointing down) |
| `.attendee-block / .attendee-label / .attendee-num` | Per-attendee form block |
| `.badge / .badge-category / .badge-live / .badge-soon / .badge-full` | Status badges |
| `.host-block / .host-avatar / .host-badge` | Host profile section |
| `.success-icon` | Olive circle with checkmark SVG |
| `.coming-soon-overlay / .coming-soon-badge` | Card overlay for draft workshops |
| `.footer / .footer-logo / .footer-links / .footer-link` | Footer bar |

**Responsive:** `@media (max-width: 768px)` — collapses nav links, single column cards, footer stacks.

---

## 14. Env Variables

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_DATABASE_URL=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_RAZORPAY_KEY=          # Not used in SDK yet — stored for Phase 2
VITE_HEEBEE_WHATSAPP=       # Format: 919876543210 (no + or spaces)
VITE_HEEBEE_INSTAGRAM=      # Format: heebeecoffee (no @)
```

---

## 15. Seed Script (`seed.js`)

Run once after Firebase project is created:
```bash
npm install
node seed.js
```

Seeds:
- `/config` — outlets, contact info
- `/categories` — 7 categories
- `/hosts` — `host_shamjeet`, `host_nitigya`
- `/workshops` — 3 workshops: Manual Brew (live), Coffee Tasting (live, sold out), Watercolour (coming_soon)

---

## 16. Build & Deploy

```bash
npm install          # Install dependencies
npm run dev          # Local dev at localhost:5173
npm run build        # Build to /dist
npm run preview      # Preview built output
npm run deploy       # Build + push to gh-pages branch
```

`vite.config.js` base is `/heebee-sessions/` — must match GitHub repo name exactly.

---

## 17. Screens Status

| # | Screen | Route | Status |
|---|---|---|---|
| 1 | Workshop Listing | `#/` | ✅ Built |
| 2 | Workshop Detail | `#/workshop?id=X` | ✅ Built |
| 3 | Booking Flow (3 steps) | `#/book?id=X` | ✅ Built |
| 4 | Host Request Form | `#/host` | ✅ Built |
| 9 | Booking Confirmation (inline) | (inside booking.js) | ✅ Built |
| 5 | Admin Dashboard | `admin.html#/` | 🔜 Phase 2 |
| 6 | Workshop Management (create/edit) | `admin.html#/workshops` | 🔜 Phase 2 |
| 7 | Bookings View | `admin.html#/bookings` | 🔜 Phase 2 |
| 8 | Host Requests Inbox | `admin.html#/hosts` | 🔜 Phase 2 |

---

## 18. Known Gaps & Gotchas

1. **Payment is not verified** — Razorpay link opens in a new tab, booking is created before user actually pays. No webhook integration. Needs manual reconciliation.

2. **No admin panel yet** — `admin.html` is referenced in `vite.config.js` rollup config but doesn't exist. Phase 2 deliverable.

3. **No auth** — Anyone who finds the admin URL (once built) can access it. Phase 2 needs Firebase Auth or PIN gating.

4. **Booking ID format inconsistency** — `generateBookingId()` returns `"#HB-2026-XXXX"` (with #) but `createBooking()` generates `"HB-" + Date.now()` (no #, timestamp format). Two different ID patterns exist.

5. **Stats are hardcoded** — Hero shows `48 sessions hosted` and `23 unique hosts` via a count-up animation. Not pulled from DB.

6. **Max tickets capped at 6** — `ticketCount < Math.min(currentWorkshop.slotsRemaining, 6)`. Groups larger than 6 must book separately.

7. **No email confirmations** — Confirmation only via WhatsApp (user initiates it manually from the confirmation screen).

8. **No waitlist functionality** — "Join Waitlist" button exists on sold-out workshops but is not wired to any DB write.

9. **Slots decrement is not atomic** — `createBooking()` does a get then update, not a transaction. Race condition possible under high load (unlikely for this scale).

10. **additionalImages lightbox** — `bindEvents()` in `workshop.js` has a comment `// Could add lightbox here in Phase 2` — gallery images collected but not displayed.

11. **vite.config.js references `admin.html`** — Build will warn/fail if that file doesn't exist when deploying Phase 2.

---

## 19. Open Questions (from original handoff)

- [ ] GitHub repo name — determines `base` in `vite.config.js` (currently `/heebee-sessions/`)
- [ ] Razorpay account — need live payment links per workshop (currently placeholder `rzp.io/your-link-here`)
- [ ] WhatsApp number — currently placeholder `919876543210`
- [ ] Firebase project — needs to be created by Gavish at console.firebase.google.com
- [ ] Admin panel auth strategy — Firebase Auth vs simple PIN (Phase 2 decision)

---

## 20. First-Time Setup (Step by Step)

1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Realtime Database** (not Firestore) + **Storage**
3. Paste the database rules from `database.rules.json`
4. Copy `env.example` → `.env` and fill in all Firebase credentials
5. Add real WhatsApp number and Instagram handle to `.env`
6. Run `npm install`
7. Run `node seed.js` — populates DB with sample workshops, hosts, categories, config
8. Run `npm run dev` — test at `localhost:5173`
9. Create GitHub repo named `heebee-sessions` (or update `base` in `vite.config.js`)
10. Run `npm run deploy` → live at `https://<username>.github.io/heebee-sessions/`

---

## 21. Phase 2 — What's Next

**Admin panel (`admin.html`)** — separate entry point, same Firebase project:
- Login (Firebase Auth or PIN)
- Workshop CRUD (create, edit status, set payment mode, upload cover image)
- Bookings view per workshop (table of attendees, mark payment status)
- Host requests inbox (approve/reject, convert to host profile)
- Image upload to Firebase Storage (cover images, QR codes, host photos)
- Waitlist management
- Real Razorpay webhook for auto-confirming bookings

---

*Generated from full source read of 16 project files. Covers all production code as of 2026-06-14.*
