# Heebee Sessions — Complete Launch Roadmap
> Phase 1: Go Live · Phase 2: Admin Panel
> Created: 2026-06-14

---

# PHASE 1 — GO LIVE
> Everything needed to get the public site live on the internet.
> Estimated time: 2–3 hours if done in one sitting.

---

## STEP 1 — Set Up Firebase Project
**Where:** console.firebase.google.com  
**Who:** Gavish

### 1.1 Create the project
- Go to [console.firebase.google.com](https://console.firebase.google.com)
- Click **"Add project"**
- Name it: `heebee-sessions`
- Disable Google Analytics (not needed)
- Click **"Create project"**

### 1.2 Enable Realtime Database
- In left sidebar → **Build → Realtime Database**
- Click **"Create Database"**
- Choose region: **asia-south1** (Mumbai — lowest latency for India)
- Start in **"Test mode"** (we'll replace rules in the next step)
- Click **"Enable"**

### 1.3 Apply Database Security Rules
- In Realtime Database → click **"Rules"** tab
- Delete all existing rules
- Paste the contents of `database.rules.json` from this project
- Click **"Publish"**

```json
{
  "rules": {
    "workshops":     { ".read": true,  ".write": false },
    "bookings":      { ".read": false, ".write": true  },
    "host_requests": { ".read": false, ".write": true  },
    "hosts":         { ".read": true,  ".write": false },
    "categories":    { ".read": true,  ".write": false },
    "config":        { ".read": true,  ".write": false }
  }
}
```

### 1.4 Enable Firebase Storage
- In left sidebar → **Build → Storage**
- Click **"Get started"**
- Choose the same region: **asia-south1**
- Start in test mode for now
- Click **"Done"**

### 1.5 Get Your Firebase Credentials
- Click the gear icon (⚙️) → **"Project settings"**
- Scroll down to **"Your apps"**
- Click **"</>"** (Web app) icon
- Register app name: `heebee-sessions-web`
- Do NOT tick Firebase Hosting (we use GitHub Pages)
- Click **"Register app"**
- You'll see a `firebaseConfig` object — **copy all values** — you need them in Step 2

---

## STEP 2 — Configure Environment Variables
**Where:** Project folder on your computer

### 2.1 Create the .env file
- In the project folder, find the file called `env.example`
- Make a copy of it
- Rename the copy to `.env` (remove the `.example` part)

### 2.2 Fill in the values
Open `.env` and replace every placeholder:

```bash
# From Firebase Project Settings → Your Apps → firebaseConfig:
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=heebee-sessions.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://heebee-sessions-default-rtdb.asia-southeast1.firebasedatabase.app
VITE_FIREBASE_PROJECT_ID=heebee-sessions
VITE_FIREBASE_STORAGE_BUCKET=heebee-sessions.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123

# Your Razorpay key (from razorpay.com dashboard → Settings → API Keys)
VITE_RAZORPAY_KEY=rzp_live_...

# WhatsApp number in international format, no + or spaces
VITE_HEEBEE_WHATSAPP=919876543210

# Instagram handle, no @
VITE_HEEBEE_INSTAGRAM=heebeecoffee
```

> ⚠️ NEVER share this file or commit it to GitHub. It contains secret keys.

---

## STEP 3 — Install & Test Locally
**Where:** Terminal, inside the project folder

### 3.1 Install dependencies
```bash
npm install
```
This installs Firebase, Vite, and gh-pages. Takes 1–2 minutes.

### 3.2 Seed the database
```bash
node seed.js
```
This populates Firebase with:
- 3 sample workshops (Manual Brew, Coffee Tasting, Watercolour)
- 2 hosts (Shamjeet, Nitigya)
- 7 categories
- Outlet config

You'll see:
```
✅ Config seeded
✅ Categories seeded
✅ Hosts seeded
✅ Workshops seeded
🎉 Seed complete!
```

If you see an error here, the `.env` values are wrong — double check them.

### 3.3 Run the dev server
```bash
npm run dev
```
Opens at: **http://localhost:5173/heebee-sessions/**

### 3.4 Test these flows in the browser
- [ ] Listing page loads with 3 workshop cards
- [ ] Category filter pills work (Coffee shows 2, Art & Design shows 1)
- [ ] Click a card → Workshop detail page loads
- [ ] Real-time slot count shows correctly
- [ ] Click "Book Your Slot" → 3-step booking flow works
- [ ] Fill attendee form → Continue to Payment → confirm booking creates in Firebase
- [ ] Go to Firebase Console → Realtime Database → check `/bookings` node has new entry
- [ ] Check `slotsRemaining` on the workshop decreased
- [ ] "Host a Session" → form submits → check `/host_requests` in Firebase
- [ ] Mobile: resize browser to 375px wide, check layout

---

## STEP 4 — Set Up Real Workshops
**Where:** Firebase Realtime Database console

Before going live, replace the seed data with real workshops.

### 4.1 Delete seed data (optional)
- In Firebase console → Realtime Database
- Hover over `/workshops` → click the red ✕ to delete
- Do the same for `/bookings` (empty anyway), `/host_requests`
- Keep `/config`, `/categories`, `/hosts`

### 4.2 Add a real workshop manually
- In Firebase console → Realtime Database → click **+** next to `/workshops`
- Click "+" → Firebase will give it a push ID automatically
- Add each field from this template:

```
title           → "Manual Brew Fundamentals"
category        → "Coffee"
description     → "Your full description here..."
date            → "2026-07-05"         ← YYYY-MM-DD format
time            → "11:00"              ← 24hr format
duration        → "2 hours"
outlet          → "Heebee SHB, Sarabha Nagar, Ludhiana"
maxSlots        → 12
slotsRemaining  → 12
price           → 500
status          → "live"               ← live | coming_soon | draft | past
paymentMode     → "razorpay"           ← razorpay | qr
razorpayLink    → "https://rzp.io/your-real-link"
hostName        → "Shamjeet Singh"
hostRole        → "Head Barista, Heebee SHB"
hostType        → "heebee"
hostBio         → "Bio text..."
hostInstagram   → "@shamjeetcoffee"
language        → "English + Hindi"
thingsToKnow    → (array) "All ages welcome", "Indoor · Seated"
coverImage      → null                 ← add Firebase Storage URL later
createdAt       → "2026-07-01T00:00:00.000Z"
```

### 4.3 Get real Razorpay payment links
- Go to [razorpay.com](https://razorpay.com) → Dashboard → Payment Links
- Create a new payment link per workshop
- Set the amount (e.g. ₹500)
- Set description (workshop title + date)
- Copy the short link (e.g. `https://rzp.io/l/abc123`)
- Paste into the `razorpayLink` field for that workshop in Firebase

---

## STEP 5 — Deploy to GitHub Pages

### 5.1 Create a GitHub repository
- Go to [github.com/new](https://github.com/new)
- Repository name: `heebee-sessions`
- Set to **Public** (required for free GitHub Pages)
- Do NOT initialise with README (project files already exist)
- Click **"Create repository"**

### 5.2 Link local folder to GitHub
In terminal, inside project folder:
```bash
git init
git add .
git commit -m "Initial commit — Heebee Sessions Phase 1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/heebee-sessions.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your actual GitHub username.

### 5.3 Confirm vite.config.js base matches repo name
Open `vite.config.js` — the `base` must match your GitHub repo name exactly:
```js
base: '/heebee-sessions/',  // must match repo name
```
If you named the repo differently, update this before deploying.

### 5.4 Deploy
```bash
npm run deploy
```
This runs `npm run build` then pushes `/dist` to the `gh-pages` branch.
You'll see: `Published` when done.

### 5.5 Enable GitHub Pages
- Go to your GitHub repo → **Settings → Pages**
- Under "Branch", select **gh-pages** and **/ (root)**
- Click **Save**
- Wait 2–3 minutes

### 5.6 Your live URL
```
https://YOUR_USERNAME.github.io/heebee-sessions/
```

Test all the same flows from Step 3.4 on the live URL.

---

## STEP 6 — Add Firebase Storage CORS (for images)
Once you start uploading cover images:

- Install gsutil or use the Firebase CLI
- Create a file `cors.json`:
```json
[{ "origin": ["*"], "method": ["GET"], "maxAgeSeconds": 3600 }]
```
- Run: `gsutil cors set cors.json gs://YOUR_PROJECT.appspot.com`

Or, just set Storage rules to public read temporarily:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

---

## STEP 7 — Go Live Checklist

Before sharing the URL publicly:

### Content
- [ ] All workshops have real dates, times, descriptions
- [ ] All Razorpay links are live (not placeholder `rzp.io/your-link-here`)
- [ ] WhatsApp number in `.env` is the real Heebee team number
- [ ] Instagram handle is correct
- [ ] Host names, bios, and roles are accurate
- [ ] `thingsToKnow` arrays are filled per workshop

### Technical
- [ ] Booking creates a record in Firebase (test with 1 real booking)
- [ ] `slotsRemaining` decrements correctly
- [ ] WhatsApp confirmation link opens correctly with booking details
- [ ] Mobile layout works (check on iPhone + Android)
- [ ] Fully booked workshop shows "Join Waitlist" not "Book"
- [ ] Coming soon workshop card is not clickable

### Operations
- [ ] Someone is checking Firebase `/bookings` daily
- [ ] Someone is checking Firebase `/host_requests` for new submissions
- [ ] Razorpay dashboard is being monitored for payments

---

# PHASE 2 — ADMIN PANEL
> Build internal tools for Gavish to manage workshops, view bookings, handle host requests.
> No public-facing changes. Separate HTML file, same Firebase project.
> Estimated time: 2–3 weeks of build time.

---

## STEP 8 — Admin Panel Foundation

### 8.1 Create admin.html
New entry point alongside `index.html`. Same Vite setup.

```
admin.html               ← Admin entry (already in vite.config.js rollup input)
src/
└── admin/
    ├── admin-main.js    ← Admin router
    ├── admin.css        ← Admin-specific styles
    └── pages/
        ├── dashboard.js
        ├── workshops.js
        ├── workshop-form.js
        ├── bookings.js
        └── host-requests.js
```

### 8.2 Auth — PIN gate (simplest)
On `admin.html` load, check `sessionStorage` for a PIN:
```js
const PIN = import.meta.env.VITE_ADMIN_PIN
if (sessionStorage.getItem('admin_auth') !== PIN) {
  // show PIN entry screen
}
```
Add `VITE_ADMIN_PIN=your4digitpin` to `.env`.

Upgrade to Firebase Auth (email/password) when ready — same Firebase project, just enable it.

### 8.3 Update Firebase Rules for Admin
When using Firebase Auth, tighten the admin write rules:
```json
{
  "rules": {
    "workshops": {
      ".read": true,
      ".write": "auth !== null"
    }
  }
}
```

---

## STEP 9 — Admin Dashboard (Screen 5)

**Route:** `admin.html#/`

What it shows:
- Total workshops (live / coming soon / past)
- Total bookings this month
- Total revenue this month
- Recent bookings (last 5)
- Recent host requests (last 3)
- Quick links to all admin screens

**Firebase reads needed:**
- Count all `/workshops` nodes by status
- Count all `/bookings` nodes, filter by current month
- Sum `totalAmount` for revenue

---

## STEP 10 — Workshop Management (Screen 6)

**Route:** `admin.html#/workshops`

### 10.1 Workshop List View
- Table: Title | Date | Status | Slots | Price | Actions
- Status badge (live = green, coming_soon = amber, draft = grey, past = muted)
- Action buttons (inline SVG, `#4A4640` bg):
  - 👁 View bookings → goes to bookings filtered by this workshop
  - ✏️ Edit → goes to workshop form pre-filled
  - 📋 Duplicate → copies workshop to draft
  - ✕ Archive → sets status to `past`

### 10.2 Workshop Create / Edit Form (Screen 6b)
**Route:** `admin.html#/workshop-form` or `admin.html#/workshop-form?id=X`

Fields (all from the DB schema):
- Title, Category (dropdown), Description (textarea)
- Date picker, Time picker, Duration
- Outlet (dropdown: SHB / GHB / JLD)
- Max Slots, Price
- Status toggle: draft → coming_soon → live → past
- Payment Mode: Razorpay link OR UPI QR image upload
- Cover image upload
- Host section: name, role, type (heebee/external), bio, instagram, photo upload
- Things to Know (add/remove tag chips)
- Language

**Firebase writes:**
- `push(ref(db, 'workshops'), data)` for new
- `update(ref(db, 'workshops/${id}'), data)` for edit

**Image uploads:**
```js
uploadImage(file, `workshops/${workshopId}/cover`)
uploadImage(file, `workshops/${workshopId}/qr`)
uploadImage(file, `hosts/${hostId}/photo`)
```

---

## STEP 11 — Bookings View (Screen 7)

**Route:** `admin.html#/bookings` or `admin.html#/bookings?workshopId=X`

### 11.1 All Bookings View
- Filter by workshop (dropdown)
- Filter by status (pending / confirmed / cancelled)
- Filter by date range
- Table: Booking ID | Attendee Name | Phone | Workshop | Date | Tickets | Amount | Payment | Status | Actions

### 11.2 Booking Detail / Actions
Per booking row:
- Expand to see all attendees (if group booking)
- Mark as **Confirmed** (set `status: 'confirmed'` in Firebase)
- Mark as **Cancelled** (set `status: 'cancelled'`, restore slots)
- Copy attendee phone number (for WhatsApp)

### 11.3 Export
- CSV download of bookings per workshop
- Use: `bookings.map → CSV string → Blob → download link`

### 11.4 Firebase reads needed
- `getBookingsByWorkshop(workshopId)` already exists in `firebase.js`
- Need to add: `getAllBookings()` with optional filters

---

## STEP 12 — Host Requests Inbox (Screen 8)

**Route:** `admin.html#/host-requests`

### 12.1 Inbox View
- Cards (not table) — each request as a card
- Status filter: pending / reviewed / approved / rejected
- Card shows: Name, Topic, Category, Outlet, Date, Submitted

### 12.2 Per-request Actions
- View full details (expandable or modal)
- **Mark as Reviewed** → sets `status: 'reviewed'`
- **Approve** → sets `status: 'approved'`, option to copy WhatsApp message
- **Reject** → sets `status: 'rejected'`
- **Convert to Host** → creates entry in `/hosts` node from request data

### 12.3 WhatsApp quick-reply
On approval, generate a pre-filled WhatsApp message:
```
Hi [name]! We loved your idea for "[topic]" at Heebee. 
We'd like to move forward — let's schedule a quick call to 
finalise dates and logistics. When works for you? — Heebee Team
```

---

## STEP 13 — Waitlist (Upgrade to Phase 2)

Currently "Join Waitlist" button on sold-out workshops does nothing.

### 13.1 Firebase node
```json
"/waitlist/<workshopId>/<pushId>": {
  "name": "...",
  "phone": "...",
  "email": "...",
  "workshopId": "...",
  "workshopTitle": "...",
  "createdAt": "..."
}
```

### 13.2 Public side
- Wire the "Join Waitlist" button in `workshop.js` to a simple modal (name + phone + email)
- Write to `/waitlist/<workshopId>`

### 13.3 Admin side
- In bookings view per workshop, add a "Waitlist" tab
- Show count + list
- When a slot opens (cancellation), admin can see and contact top of list

---

## STEP 14 — Payment Reconciliation (Upgrade)

Current gap: Razorpay opens in a new tab — no webhook to confirm payment.

### Option A — Manual (Phase 2 start)
- Admin views bookings in Razorpay dashboard
- Cross-references with Firebase `/bookings`
- Manually marks `status: 'confirmed'` in admin panel

### Option B — Razorpay Webhook (Phase 2 proper)
- Set up a Firebase Cloud Function as a webhook endpoint
- Razorpay calls it on `payment.captured`
- Cloud function finds booking by amount + workshop + timestamp
- Updates `status: 'confirmed'`

```
razorpay dashboard → webhook URL → firebase cloud function → update /bookings
```

This requires upgrading Firebase to **Blaze plan** (pay-as-you-go, free tier still exists).

---

## STEP 15 — Custom Domain (Optional)

Instead of `github.io/heebee-sessions/`, use `sessions.heebee.in`:

1. In Cloudflare (or your DNS provider) → add a CNAME:
   ```
   sessions.heebee.in → YOUR_USERNAME.github.io
   ```
2. In GitHub repo → Settings → Pages → Custom domain → enter `sessions.heebee.in`
3. Tick "Enforce HTTPS"
4. Update `vite.config.js` base:
   ```js
   base: '/'  // root when using custom domain
   ```
5. Redeploy: `npm run deploy`

---

## STEP 16 — SEO & Social Sharing (Optional but recommended)

Add to `index.html` `<head>`:
```html
<!-- Open Graph (WhatsApp / Instagram link previews) -->
<meta property="og:title" content="Heebee Sessions — Workshops & Events">
<meta property="og:description" content="Curated workshops, talks and experiences at Heebee Coffee — Punjab">
<meta property="og:image" content="https://sessions.heebee.in/og-image.jpg">
<meta property="og:url" content="https://sessions.heebee.in">
<meta property="og:type" content="website">

<!-- Twitter card -->
<meta name="twitter:card" content="summary_large_image">
```

Create a 1200×630px OG image (Parchment background, Heebee logo, "Sessions & Workshops").

---

# FULL TIMELINE

## Phase 1 — Go Live (Target: This week)

| Day | Task |
|---|---|
| Day 1 | Steps 1–3: Firebase setup + local test |
| Day 1 | Step 4: Add real workshops + Razorpay links |
| Day 2 | Steps 5–6: GitHub repo + deploy |
| Day 2 | Step 7: Go live checklist + share URL |

## Phase 2 — Admin Panel (Target: 3–4 weeks)

| Week | Task |
|---|---|
| Week 1 | Steps 8–9: Admin foundation + PIN auth + Dashboard |
| Week 1–2 | Step 10: Workshop create/edit form + image upload |
| Week 2 | Step 11: Bookings view + export |
| Week 3 | Step 12: Host requests inbox |
| Week 3 | Step 13: Waitlist wiring |
| Week 4 | Step 14: Payment reconciliation (manual first, webhook later) |
| Ongoing | Steps 15–16: Custom domain + SEO |

---

# QUICK REFERENCE

## Commands
```bash
npm install          # First time setup
node seed.js         # Populate Firebase with sample data (run once)
npm run dev          # Local dev → localhost:5173/heebee-sessions/
npm run build        # Build to /dist
npm run deploy       # Build + push to GitHub Pages
```

## Key Files to Edit
| What you want to change | File to edit |
|---|---|
| Workshop data | Firebase console → /workshops |
| WhatsApp number | .env → VITE_HEEBEE_WHATSAPP |
| Instagram handle | .env → VITE_HEEBEE_INSTAGRAM |
| Site base URL path | vite.config.js → base |
| Category list | Firebase console → /categories |
| Outlet names | Firebase console → /config/outlets |
| Page colours | global.css → :root tokens |

## Firebase Console Direct Links
- Realtime Database: console.firebase.google.com → your project → Build → Realtime Database
- Storage: console.firebase.google.com → your project → Build → Storage
- Bookings: open DB → expand `/bookings`
- Host Requests: open DB → expand `/host_requests`

---

*Roadmap covers Steps 1–16 across Phase 1 and Phase 2. Follow in order.*
