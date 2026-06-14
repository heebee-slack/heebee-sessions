# GOAL
Build Heebee Sessions — a public-facing workshop & events platform for Heebee Coffee. Firebase Realtime DB backend, Vite frontend, GitHub Pages deploy. Phase 1 complete: public listing, workshop detail, booking flow, host request form.

# KEY DECISIONS

- **Stack:** Firebase Realtime DB + Vite (npm) + GitHub Pages. NOT Google Apps Script/Sheets. Claude Code compatible.
- **Design system:** `/heebee-mood` skill locked. Parchment & Pitch palette. Outfit font. Pour-over Lottie loader only.
- **Colors locked:**
  - `--bg: #F2EDE6` Parchment
  - `--surface: #E8E0D5`
  - `--border: #D4C9BC`
  - `--text: #1A1410` Pitch
  - `--text-muted: #6B5B4E`
  - `--accent: #7C6F3E` Aged Olive ← replaced old Sienna #C4622D
  - `--accent-dark: #3E3A1F` Dark Forest ← replaced old Deep Rust #8B3A18
- **Font:** Outfit 200/300/400/500 + DM Mono for prices/data/dates
- **Lottie loader URL:** `https://lottie.host/5070b382-1128-464b-92f0-98701ca02d26/vW7gdBWczl.lottie` — pour-over only on page load, never in cards
- **Button rules (CRITICAL):**
  - Primary (dark bg): `background:#1A1410`, text always beige `#F2EDE6` on span z-index:2, olive ink fill on hover
  - CTA (white bg): `background:#ffffff`, text `#1A1410` on span, olive ink fill, text flips to `#F2EDE6` mid-hover via `transition:color 0.15s ease 0.15s`
  - Ghost: transparent bg, muted text `#6B5B4E`, olive ink fill, text flips to beige
  - WhatsApp: always `background:#25D366`, always `color:#ffffff`
  - NEVER put color on the button element itself — only on the `<span>` with `z-index:2`
- **Action buttons in admin:** Always use inline SVG `stroke="#FFFFFF"` — never Tabler icon fonts (invisible in dark bg). Background `#4A4640`, danger `#5A2828`.
- **Tooltips:** Pure CSS `.tip-wrap:hover .tip { opacity:1 }` — parchment bg, black text, arrow pointing down
- **Routing:** Hash-based `#/path?param=value` — `getRoute()` in helpers.js
- **Workshops:** `status` field = `live` | `coming_soon` | `draft` | `past`
- **Payment modes:** `razorpay` (link, auto-confirmed via webhook) | `qr` (UPI QR image, manually marked paid)
- **Host requests:** Never auto-approve. Always `status: 'pending'`. No automated email. Gavish contacts manually.
- **Attendee forms:** All fields required except Instagram. Forms multiply per ticket count.
- **Coming Soon:** Static amber badge `#D4A84B` on draft cards — no toggle widget (removed, was broken)
- **File delivery rule:** Present files one at a time immediately after creation. Never batch.

# ARTIFACTS

## Design System Skill Location
```
/mnt/skills/user/heebee-mood/SKILL.md
```

## Project File Structure
```
heebee-sessions/
├── package.json
├── vite.config.js
├── .env.example
├── index.html
├── database.rules.json
├── scripts/
│   └── seed.js
└── src/
    ├── main.js
    ├── styles/
    │   └── global.css
    ├── utils/
    │   ├── firebase.js
    │   └── helpers.js
    └── pages/
        ├── listing.js      ← Screen 1
        ├── workshop.js     ← Screen 2
        ├── booking.js      ← Screen 3
        ├── confirmation.js ← Screen 9
        └── host-request.js ← Screen 4
```

## package.json
```json
{
  "name": "heebee-sessions",
  "version": "1.0.0",
  "description": "Heebee Coffee — Workshop & Events Platform",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "firebase": "^10.12.0"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "gh-pages": "^6.1.1"
  }
}
```

## vite.config.js
```js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/heebee-sessions/', // change to your GitHub repo name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html'
      }
    }
  }
})
```

## .env.example
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_RAZORPAY_KEY=your_razorpay_key
VITE_HEEBEE_WHATSAPP=919876543210
VITE_HEEBEE_INSTAGRAM=heebeecoffee
```

## Firebase Database Rules
```json
{
  "rules": {
    "workshops": { ".read": true, ".write": false },
    "bookings": { ".read": false, ".write": true },
    "host_requests": { ".read": false, ".write": true },
    "hosts": { ".read": true, ".write": false },
    "categories": { ".read": true, ".write": false },
    "config": { ".read": true, ".write": false }
  }
}
```

## Firebase DB Schema — Workshop Node
```json
{
  "title": "Manual Brew Fundamentals",
  "category": "Coffee",
  "description": "Full description...",
  "date": "2026-06-20",
  "time": "11:00",
  "duration": "2 hours",
  "outlet": "Heebee SHB, Sarabha Nagar, Ludhiana",
  "maxSlots": 12,
  "slotsRemaining": 8,
  "price": 500,
  "status": "live",
  "paymentMode": "razorpay",
  "razorpayLink": "https://rzp.io/your-link",
  "qrImage": null,
  "hostName": "Shamjeet Singh",
  "hostRole": "Head Barista, Heebee SHB",
  "hostType": "heebee",
  "hostBio": "Bio text...",
  "hostInstagram": "@handle",
  "hostPhoto": null,
  "coverImage": null,
  "additionalImages": [],
  "thingsToKnow": ["All ages welcome", "Indoor · Seated"],
  "language": "English + Hindi",
  "createdAt": "2026-06-13T00:00:00.000Z"
}
```

## Booking Node Schema
```json
{
  "workshopId": "firebase-push-id",
  "workshopTitle": "Manual Brew Fundamentals",
  "workshopDate": "2026-06-20",
  "workshopTime": "11:00",
  "outlet": "Heebee SHB, Sarabha Nagar, Ludhiana",
  "hostName": "Shamjeet Singh",
  "tickets": 2,
  "totalAmount": 1000,
  "paymentMode": "razorpay",
  "bookingId": "#HB-2026-0847",
  "status": "pending",
  "attendees": [
    { "name": "Gavish Batra", "phone": "+91 98765 43210", "email": "gavish@heebeecoffee.com", "instagram": "@gavishbatra" }
  ],
  "primaryAttendee": { "name": "Gavish Batra", "phone": "+91 98765 43210", "email": "gavish@heebeecoffee.com" },
  "createdAt": "2026-06-13T00:00:00.000Z"
}
```

## Admin Action Button Pattern (SVG, always visible)
```html
<div class="tip-wrap">
  <div class="tip">View Bookings</div>
  <button style="width:26px;height:26px;min-width:26px;border-radius:5px;border:none;background:#4A4640;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  </button>
</div>
```

## CTA Button Pattern (white bg, text flips on hover)
```html
<button style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;cursor:pointer;position:relative;overflow:hidden;"
  onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
  onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
  <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
  <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Button Label</span>
</button>
```

## Screens Designed & Previewed
| # | Screen | Route | Status |
|---|--------|-------|--------|
| 1 | Workshop Listing | `#/` | ✅ Built |
| 2 | Workshop Detail | `#/workshop?id=X` | ✅ Built |
| 3 | Booking Flow (3 steps) | `#/book?id=X` | ✅ Built |
| 4 | Host Request Form | `#/host` | ✅ Built |
| 5 | Admin Dashboard | admin panel | 🔜 Phase 2 |
| 6 | Workshop Management | admin panel | 🔜 Phase 2 |
| 7 | Bookings View | admin panel | 🔜 Phase 2 |
| 8 | Host Requests Inbox | admin panel | 🔜 Phase 2 |
| 9 | Booking Confirmation | inline in booking.js | ✅ Built |

# OPEN QUESTIONS

- GitHub repo name — determines `base` in `vite.config.js` (currently `/heebee-sessions/`)
- Razorpay account — need live payment links per workshop
- WhatsApp number — currently placeholder `919876543210` in `.env`
- Firebase project — not yet created, needs Gavish to set up
- Admin panel auth — no login yet, Phase 2 decision needed (Firebase Auth vs simple PIN)

# NEXT STEPS

1. Gavish creates Firebase project at console.firebase.google.com
2. Enable Realtime Database + Storage in Firebase console
3. Rename `.env.example` to `.env` (remove the `.example` part), fill in Firebase credentials
4. Run `npm install` in project folder
5. Run `node scripts/seed.js` to populate sample workshops
6. Run `npm run dev` to test locally at localhost:5173
7. Create GitHub repo named `heebee-sessions`
8. Update `base` in `vite.config.js` to match repo name
9. Run `npm run deploy` to publish to GitHub Pages
10. **Phase 2:** Build `admin.html` — workshop creation, bookings management, host requests inbox, image upload to Firebase Storage
