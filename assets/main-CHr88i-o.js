import{G as U,H as Y,I as X,A as m,J as x,y as d,K as G,M as k,N,O as J,P as _,Q as K,R as Q,T as V,U as Z,V as ee}from"./helpers-DbYsWB8w.js";async function te(e){e.innerHTML=ie();const[t,i]=await Promise.all([U(),Y()]);e.innerHTML=oe(t,i),ae(e),le()}function ie(){return`
    <div style="min-height:100vh;">
      <div style="padding:18px 48px;border-bottom:0.5px solid #D4C9BC;display:flex;align-items:center;justify-content:space-between;">
        <div style="font-size:17px;font-weight:500;color:#1A1410;">Heebee Coffee</div>
      </div>
      <div style="padding:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:200px;">
        ${[1,2,3].map(()=>'<div style="height:260px;background:#E8E0D5;border-radius:14px;animation:pulse 1.5s ease infinite;"></div>').join("")}
      </div>
    </div>
    <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>
  `}function oe(e,t){const i=["All",...t];return`
    ${E("sessions")}

    <!-- HERO -->
    <div class="hero-grid" style="display:grid;grid-template-columns:1fr 1fr;min-height:280px;">
      <div class="hero-left" style="padding:52px 48px;display:flex;flex-direction:column;justify-content:center;">
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
      <div class="hero-right textured" style="background:#E8E0D5;display:flex;align-items:center;justify-content:center;gap:40px;">
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
        ${i.map((n,a)=>`
          <button class="filter-pill ${a===0?"active":""}" data-cat="${n==="All"?"all":n}">
            ${n}
          </button>
        `).join("")}
      </div>

      <!-- CARDS GRID -->
      <div class="cards-grid" id="cards-grid">
        ${e.length>0?e.map(n=>se(n)).join(""):ne()}
      </div>
    </div>

    <!-- HOST CTA STRIP -->
    <div class="cta-strip" style="background:#1A1410;padding:48px;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Open to everyone</p>
        <h2 style="font-size:28px;font-weight:200;color:#F2EDE6;letter-spacing:-0.01em;margin-bottom:8px;">Got something worth sharing?</h2>
        <p style="font-size:13px;color:#6B5B4E;font-weight:300;max-width:400px;line-height:1.7;">Host a session at Heebee. Any skill, any passion — if it's worth learning, there's an audience for it.</p>
      </div>
      <button class="btn-cta" style="flex-shrink:0;" onclick="navigate('/host')">
        <div class="ink"></div><span>Request to Host</span>
      </button>
    </div>

    ${w()}
  `}function se(e){var n;const t=e.status==="coming_soon",i=e.slotsRemaining<=0;return`
    <div class="workshop-card" data-category="${e.category}" onclick="${t?"":`navigate('/workshop?id=${e.id}')`}">
      <div class="card-cover" style="${e.coverImage?"":"background:#E8E0D5"}">
        ${e.coverImage?`<img src="${e.coverImage}" alt="${e.title}" loading="lazy">`:`<div class="card-cover-placeholder">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>`}
        ${t?'<div class="coming-soon-overlay"><span class="coming-soon-badge">Coming Soon</span></div>':""}
        ${i&&!t?'<div style="position:absolute;top:10px;right:10px;"><span class="badge badge-full">Fully Booked</span></div>':""}
      </div>
      <div class="card-body">
        <span class="badge badge-category">${e.category}</span>
        <p class="card-title">${e.title}</p>
        <p class="card-meta">
          ${e.date?m(e.date):"Date TBC"} · ${e.time?x(e.time):""}<br>
          ${e.outlet}
        </p>
        <div class="card-host-row">
          <div class="card-host-avatar">
            ${e.hostPhoto?`<img src="${e.hostPhoto}" alt="${e.hostName}">`:((n=e.hostName)==null?void 0:n.charAt(0))||"H"}
          </div>
          <span class="card-host-name">${e.hostName} · ${e.hostRole||"Host"}</span>
        </div>
        <div class="card-footer">
          <div>
            <p class="card-price">${d(e.price)}</p>
            <p class="card-slots">${t?"Registration opening soon":i?"Join waitlist":G(e.slotsRemaining)}</p>
          </div>
          ${t?"":`
            <button class="btn-cta btn-sm" onclick="event.stopPropagation();navigate('/workshop?id=${e.id}')">
              <div class="ink"></div>
              <span>${i?"Waitlist":"Book"}</span>
            </button>
          `}
        </div>
      </div>
    </div>
  `}function ne(){return`
    <div style="grid-column:1/-1;padding:60px;text-align:center;">
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;">No sessions found. Check back soon or <span style="color:#7C6F3E;cursor:pointer;" onclick="navigate('/host')">request to host one</span>.</p>
    </div>
  `}function ae(e,t,i){e.querySelectorAll(".filter-pill").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".filter-pill").forEach(s=>s.classList.remove("active")),n.classList.add("active");const a=n.dataset.cat;e.querySelectorAll(".workshop-card").forEach(s=>{const l=a==="all"||s.dataset.category===a;s.style.display=l?"":"none"})})})}function le(){X(".hero-child",200,90);const e=document.getElementById("stat-sessions"),t=document.getElementById("stat-hosts");e&&L(e,48,1400),t&&L(t,23,1200),setTimeout(()=>{document.querySelectorAll(".workshop-card").forEach((i,n)=>{setTimeout(()=>i.classList.add("visible"),n*100)})},600)}function L(e,t,i){const n=performance.now();function a(s){const l=Math.min((s-n)/i,1);e.textContent=Math.round((1-Math.pow(1-l,3))*t),l<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}async function re(e,t){if(!t){k("/");return}e.innerHTML=pe();const i=await N(t);if(!i){e.innerHTML=ce();return}e.innerHTML=de(i),ge(e,i),J(t,n=>{const a=document.getElementById("slot-count"),s=document.getElementById("slot-fill"),l=document.getElementById("slot-sub");a&&(a.textContent=n),s&&(s.style.width=`${Math.round((i.maxSlots-n)/i.maxSlots*100)}%`),l&&(l.textContent=`${n} of ${i.maxSlots} remaining`)})}function de(e){var l,p;const t=e.slotsRemaining<=0,i=e.status==="coming_soon",n="919876543210",a=encodeURIComponent(`Hi! I'd like to join the waitlist for ${e.title} on ${e.date}. Please let me know if a slot opens up.`),s=`https://wa.me/${n}?text=${a}`;return`
    ${E()}

    <!-- BACK -->
    <div class="back-bar" style="padding:14px 48px;border-bottom:0.5px solid #D4C9BC;">
      <span style="font-size:11px;color:#6B5B4E;cursor:pointer;display:inline-flex;align-items:center;gap:6px;" onclick="navigate('/')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        All Sessions
      </span>
    </div>

    <!-- HERO IMAGE -->
    <div class="detail-hero" style="height:280px;background:#E0D8CE;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      ${e.coverImage?`<img src="${e.coverImage}" alt="${e.title}" style="width:100%;height:100%;object-fit:cover;">`:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'}
      <span style="position:absolute;top:16px;left:48px;" class="badge badge-category">${e.category}</span>
      ${!i&&!t?`<span style="position:absolute;top:16px;right:48px;" class="badge badge-live">${e.slotsRemaining} slots left</span>`:""}
      ${t?'<span style="position:absolute;top:16px;right:48px;" class="badge badge-full">Fully Booked</span>':""}
    </div>

    <!-- MAIN LAYOUT -->
    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;">

      <!-- LEFT CONTENT -->
      <div class="page-content" style="padding:32px 40px 40px 0;">
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Workshop</p>
        <h1 style="font-size:32px;font-weight:200;color:#1A1410;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px;">${e.title}</h1>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:22px;">
          <div class="card-host-avatar">${e.hostPhoto?`<img src="${e.hostPhoto}" alt="${e.hostName}" style="width:100%;height:100%;object-fit:cover;">`:((l=e.hostName)==null?void 0:l.charAt(0))||"H"}</div>
          <span style="font-size:12px;color:#6B5B4E;">Hosted by ${e.hostName}${e.hostRole?" · "+e.hostRole:""}</span>
        </div>
        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- META GRID -->
        <div class="meta-grid-cols" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
          ${f("Calendar",m(e.date))}
          ${f("Clock",`${x(e.time)}${e.duration?" — "+e.duration:""}`)}
          ${f("Map-pin",e.outlet)}
          ${f("Users",`Max ${e.maxSlots} attendees`)}
          ${e.language?f("Language",e.language):""}
          ${e.duration?f("Clock-hour-3",e.duration):""}
        </div>

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- ABOUT -->
        <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">About this session</p>
        <p style="font-size:13px;color:#6B5B4E;line-height:1.75;font-weight:300;margin-bottom:22px;">${e.description}</p>

        <!-- THINGS TO KNOW -->
        ${e.thingsToKnow&&e.thingsToKnow.length?`
          <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">Things to know</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px;">
            ${e.thingsToKnow.map(g=>`<span class="badge badge-category" style="padding:4px 10px;font-size:10px;">${g}</span>`).join("")}
          </div>
        `:""}

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- HOST PROFILE -->
        <div class="host-block">
          <p class="host-block-label">Your host</p>
          <div style="display:flex;align-items:flex-start;gap:16px;">
            <div class="host-avatar">
              ${e.hostPhoto?`<img src="${e.hostPhoto}" alt="${e.hostName}">`:((p=e.hostName)==null?void 0:p.charAt(0))||"H"}
            </div>
            <div>
              <span class="host-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${e.hostType==="heebee"?"Heebee Team":"External Host"}
              </span>
              <p style="font-size:15px;font-weight:400;color:#1A1410;margin-bottom:2px;">${e.hostName}</p>
              ${e.hostRole?`<p style="font-size:11px;color:#6B5B4E;margin-bottom:6px;">${e.hostRole}</p>`:""}
              ${e.hostBio?`<p style="font-size:12px;color:#6B5B4E;line-height:1.65;margin-bottom:10px;font-weight:300;">${e.hostBio}</p>`:""}
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${e.hostInstagram?`<a href="https://instagram.com/${e.hostInstagram.replace("@","")}" target="_blank" class="btn-ghost btn-sm"><div class="ink"></div><span>@ ${e.hostInstagram}</span></a>`:""}
                <button class="btn-ghost btn-sm" onclick="navigate('/')"><div class="ink"></div><span>Heebee Coffee</span></button>
              </div>
            </div>
          </div>
        </div>

        <!-- HEEBEE STRIP -->
        <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#F2EDE6;border:0.5px solid #D4C9BC;border-radius:10px;">
          <span style="font-size:13px;font-weight:500;color:#1A1410;letter-spacing:0.03em;">Heebee Coffee</span>
          <div style="width:0.5px;height:16px;background:#D4C9BC;"></div>
          <a href="https://instagram.com/heebeecoffee" target="_blank" style="font-size:10px;color:#7C6F3E;cursor:pointer;">@ heebee.coffee</a>
          <div style="width:0.5px;height:16px;background:#D4C9BC;"></div>
          <span style="font-size:10px;color:#6B5B4E;">Ludhiana · Jalandhar</span>
        </div>
      </div>

      <!-- SIDEBAR -->
      <div class="page-sidebar" style="padding:32px 0 40px;">
        <div class="summary-card" style="position:sticky;top:80px;">
          <!-- PRICE -->
          <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:6px;">
            <span style="font-family:'DM Mono',monospace;font-size:28px;color:#7C6F3E;">${d(e.price)}</span>
            <span style="font-size:11px;color:#6B5B4E;">per slot</span>
          </div>

          <!-- SLOT BAR -->
          <div style="margin-bottom:16px;">
            <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:5px;">
              <span style="font-family:'DM Mono',monospace;font-size:20px;color:#1A1410;" id="slot-count">${e.slotsRemaining}</span>
              <span style="font-size:10px;color:#6B5B4E;text-transform:uppercase;letter-spacing:0.08em;">slots left</span>
            </div>
            <div class="slot-bar-bg">
              <div class="slot-bar-fill" id="slot-fill" style="width:${Math.round((e.maxSlots-e.slotsRemaining)/e.maxSlots*100)}%;"></div>
            </div>
            <span style="font-size:9px;color:#B8A99A;" id="slot-sub">${e.slotsRemaining} of ${e.maxSlots} remaining</span>
          </div>

          <div style="height:0.5px;background:#E8E0D5;margin-bottom:14px;"></div>

          <!-- PAYMENT MODE -->
          <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:8px;">Pay via</p>
          <div style="display:flex;gap:8px;margin-bottom:14px;">
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${e.paymentMode==="razorpay"?"#7C6F3E":"#D4C9BC"};background:${e.paymentMode==="razorpay"?"#F2EDE6":"#fff"};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${e.paymentMode==="razorpay"?"#7C6F3E":"#6B5B4E"}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <p style="font-size:10px;font-weight:500;color:${e.paymentMode==="razorpay"?"#1A1410":"#6B5B4E"};">Razorpay</p>
            </div>
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${e.paymentMode==="qr"?"#7C6F3E":"#D4C9BC"};background:${e.paymentMode==="qr"?"#F2EDE6":"#fff"};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${e.paymentMode==="qr"?"#7C6F3E":"#6B5B4E"}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>
              <p style="font-size:10px;font-weight:500;color:${e.paymentMode==="qr"?"#1A1410":"#6B5B4E"};">UPI QR</p>
            </div>
          </div>

          ${i?`
            <div style="padding:12px;background:#F2EDE6;border-radius:6px;text-align:center;margin-bottom:8px;">
              <p style="font-size:12px;color:#D4A84B;font-weight:500;">Coming Soon</p>
              <p style="font-size:10px;color:#6B5B4E;margin-top:3px;">Registration opens soon</p>
            </div>
          `:t?`
            <a href="${s}" target="_blank" class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;text-decoration:none;">
              <div class="ink"></div><span>Join Waitlist</span>
            </a>
          `:`
            <button class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;" onclick="navigate('/book?id=${e.id}')">
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

    <!-- MOBILE BOOK BAR -->
    ${i?"":`
    <div class="mobile-book-bar">
      <div>
        <div class="mobile-book-bar-price">${d(e.price)}</div>
        <div class="mobile-book-bar-slots">${t?"Fully booked":`${e.slotsRemaining} slots left`}</div>
      </div>
      ${t?`<a href="${s}" target="_blank" class="btn-cta btn-sm" style="text-decoration:none;"><div class="ink"></div><span>Join Waitlist</span></a>`:`<button class="btn-cta btn-sm" onclick="navigate('/book?id=${e.id}')"><div class="ink"></div><span>Book Your Slot</span></button>`}
    </div>`}

    ${w()}
  `}function f(e,t){return`
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <div style="width:28px;height:28px;border-radius:6px;background:#E8E0D5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C6F3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${{Calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',Clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',"Map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',Users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',Language:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',"Clock-hour-3":'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16.5 12"/>'}[e]||""}</svg>
      </div>
      <div>
        <p style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;margin-bottom:2px;">${e.replace("-"," ")}</p>
        <p style="font-size:12px;color:#1A1410;">${t}</p>
      </div>
    </div>
  `}function pe(){return'<div style="min-height:100vh;padding:48px;"><div style="height:280px;background:#E8E0D5;border-radius:14px;margin-top:100px;animation:pulse 1.5s ease infinite;"></div></div><style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>'}function ce(){return`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;"><p style="font-size:22px;font-weight:200;color:#1A1410;">Workshop not found</p><button class="btn-primary" onclick="navigate('/')"><div class="ink"></div><span>Back to sessions</span></button></div>`}function ge(e,t){t.additionalImages&&t.additionalImages.length}let o=null,r=1;async function me(e,t){if(!t){k("/");return}if(o=await N(t),!o){k("/");return}r=1,e.innerHTML=fe(),ve()}function fe(){return`
    ${E()}

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
    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;min-height:70vh;">

      <!-- STEP PANELS -->
      <div class="page-content" style="padding:32px 40px 40px 0;">

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
              <p style="font-size:10px;color:#6B5B4E;margin-top:2px;">${d(o.price)} per person</p>
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

          ${o.paymentMode==="razorpay"?ue():xe()}
        </div>

        <!-- STEP 3: CONFIRMATION -->
        <div id="panel3" style="display:none;">
          ${ye()}
        </div>

      </div>

      <!-- SIDEBAR SUMMARY -->
      <div class="page-sidebar" style="padding:32px 0 40px;">
        <div class="summary-card" style="position:sticky;top:80px;">
          <!-- WS IMAGE -->
          <div style="height:80px;background:#E8E0D5;border-radius:8px;margin-bottom:14px;overflow:hidden;display:flex;align-items:center;justify-content:center;">
            ${o.coverImage?`<img src="${o.coverImage}" alt="${o.title}" style="width:100%;height:100%;object-fit:cover;">`:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'}
          </div>
          <span class="badge badge-category" style="margin-bottom:6px;display:inline-block;">${o.category}</span>
          <p style="font-size:13px;font-weight:500;color:#1A1410;margin-bottom:4px;">${o.title}</p>
          <p style="font-size:10px;color:#6B5B4E;line-height:1.6;margin-bottom:14px;">
            ${m(o.date)} · ${x(o.time)}<br>
            ${o.outlet}
          </p>
          <div style="height:0.5px;background:#E8E0D5;margin-bottom:12px;"></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Price per ticket</span>
            <span style="font-size:11px;color:#1A1410;">${d(o.price)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Tickets</span>
            <span style="font-size:11px;color:#1A1410;" id="sum-tickets">1</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Host</span>
            <span style="font-size:11px;color:#1A1410;">${o.hostName}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;padding-top:12px;border-top:0.5px solid #E8E0D5;">
            <span style="font-size:12px;font-weight:500;color:#1A1410;">Total</span>
            <span style="font-family:'DM Mono',monospace;font-size:20px;color:#7C6F3E;" id="sum-total">${d(o.price)}</span>
          </div>
        </div>
      </div>

    </div>
  `}function ue(){return`
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:20px;margin-bottom:16px;">
      <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:12px;">Secure payment via Razorpay</p>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:36px;height:36px;border-radius:8px;background:#072654;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div>
          <p style="font-size:12px;font-weight:500;color:#1A1410;">Heebee Coffee</p>
          <p style="font-size:10px;color:#6B5B4E;">${o.title} · ${m(o.date)}</p>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-top:0.5px solid #F2EDE6;">
        <span style="font-size:11px;color:#6B5B4E;" id="rp-ticket-line">1 ticket × ${d(o.price)}</span>
        <span style="font-family:'DM Mono',monospace;font-size:13px;color:#7C6F3E;" id="rp-total">${d(o.price)}</span>
      </div>
    </div>
    <button id="pay-btn" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;"
      onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
      onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
      <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
      <span class="lbl" id="pay-btn-label" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Pay ${d(o.price)} via Razorpay →</span>
    </button>
  `}function xe(){return`
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:24px;display:flex;flex-direction:column;align-items:center;gap:12px;margin-bottom:16px;">
      <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;align-self:flex-start;">Scan to pay</p>
      <div style="width:160px;height:160px;border:0.5px dashed #D4C9BC;border-radius:8px;background:#F2EDE6;display:flex;align-items:center;justify-content:center;">
        ${o.qrImage?`<img src="${o.qrImage}" alt="UPI QR" style="width:100%;height:100%;object-fit:contain;border-radius:8px;">`:'<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D4C9BC" stroke-width="1" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>'}
      </div>
      <p style="font-size:11px;color:#6B5B4E;text-align:center;line-height:1.6;">
        Pay <strong style="color:#7C6F3E;" id="qr-total">${d(o.price)}</strong> to complete booking.
      </p>
      <p style="font-size:10px;color:#B8A99A;text-align:center;">After payment, tap the button below to confirm.</p>
    </div>
    <button id="pay-btn" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;"
      onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
      onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
      <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
      <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">I've paid — Confirm Booking →</span>
    </button>
  `}function ye(){return`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 0;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:26px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:8px;">You're booked!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.7;margin-bottom:24px;max-width:380px;">
        Your slot for <strong style="color:#1A1410;">${o.title}</strong> is confirmed.
        See you at ${o.outlet} on ${m(o.date)} at ${x(o.time)}.
      </p>
      <div class="summary-card" style="width:100%;max-width:440px;margin-bottom:22px;text-align:left;" id="confirm-card">
        <!-- Filled by JS after booking -->
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;" id="confirm-actions">
        <!-- Filled by JS -->
      </div>
    </div>
  `}function he(e,t){return`
    <div class="attendee-block">
      <div class="attendee-label">
        <div class="attendee-num">${e}</div>
        Attendee ${e}${t===1?" (you)":""}
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Full name <span class="req">*</span></label>
          <input class="field-input attendee-name" data-idx="${e}" type="text" placeholder="Full name" required>
        </div>
        <div class="field">
          <label class="field-label">Phone number <span class="req">*</span></label>
          <input class="field-input attendee-phone" data-idx="${e}" type="tel" placeholder="+91 XXXXX XXXXX" required>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Email address <span class="req">*</span></label>
        <input class="field-input attendee-email" data-idx="${e}" type="email" placeholder="name@email.com" required>
      </div>
      <div class="field" style="margin-bottom:0;">
        <label class="field-label">Instagram handle <span class="opt">optional</span></label>
        <input class="field-input attendee-instagram" data-idx="${e}" type="text" placeholder="@handle">
      </div>
    </div>
  `}function $(){const e=document.getElementById("attendee-forms");e&&(e.innerHTML=Array.from({length:r},(t,i)=>he(i+1,r)).join(""))}function P(){const e=r*o.price,t=d(e),i=n=>document.getElementById(n);i("tcount")&&(i("tcount").textContent=r),i("tcount-lbl")&&(i("tcount-lbl").textContent=r),i("sum-tickets")&&(i("sum-tickets").textContent=r),i("sum-total")&&(i("sum-total").textContent=t),i("rp-ticket-line")&&(i("rp-ticket-line").textContent=`${r} ticket${r>1?"s":""} × ${d(o.price)}`),i("rp-total")&&(i("rp-total").textContent=t),i("qr-total")&&(i("qr-total").textContent=t),i("pay-btn-label")&&(i("pay-btn-label").textContent=`Pay ${t} via Razorpay →`)}function j(e){[1,2,3].forEach(t=>{const i=document.getElementById(`panel${t}`),n=document.getElementById(`sn${t}`),a=document.getElementById(`sl${t}`);i&&(i.style.display=t===e?"block":"none"),n&&(n.className=`step-num ${t<e?"done":t===e?"active":"idle"}`,n.innerHTML=t<e?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':t),a&&(a.className=`step-label ${t===e?"active":""}`)})}function O(){var t,i,n,a,s,l,p,g;const e=[];for(let c=1;c<=r;c++){const y=(i=(t=document.querySelector(`.attendee-name[data-idx="${c}"]`))==null?void 0:t.value)==null?void 0:i.trim(),h=(a=(n=document.querySelector(`.attendee-phone[data-idx="${c}"]`))==null?void 0:n.value)==null?void 0:a.trim(),v=(l=(s=document.querySelector(`.attendee-email[data-idx="${c}"]`))==null?void 0:s.value)==null?void 0:l.trim(),B=(g=(p=document.querySelector(`.attendee-instagram[data-idx="${c}"]`))==null?void 0:p.value)==null?void 0:g.trim();if(!y||!h||!v)return null;e.push({name:y,phone:h,email:v,instagram:B})}return e}function ve(e){var t,i,n;$(),(t=document.getElementById("btn-plus"))==null||t.addEventListener("click",()=>{r<o.slotsRemaining&&(r++,P(),$())}),(i=document.getElementById("btn-minus"))==null||i.addEventListener("click",()=>{r>1&&(r--,P(),$())}),(n=document.getElementById("to-step2"))==null||n.addEventListener("click",()=>{if(!O()){alert("Please fill in all required fields for each attendee.");return}j(2),window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("click",async a=>{if(a.target.closest("#pay-btn")||a.target.id==="pay-btn"){const s=O();if(!s)return;const l=_(),p=r*o.price,g={workshopId:o.id,workshopTitle:o.title,workshopDate:o.date,workshopTime:o.time,outlet:o.outlet,hostName:o.hostName,tickets:r,totalAmount:p,paymentMode:o.paymentMode,bookingId:l,attendees:s,primaryAttendee:s[0]};try{const c=await K(g);o.paymentMode==="razorpay"&&o.razorpayLink&&window.open(o.razorpayLink,"_blank"),j(3),be(c,p,l),window.scrollTo({top:0,behavior:"smooth"})}catch(c){alert("Something went wrong. Please try again."),console.error(c)}}})}function be(e,t,i){const n=document.getElementById("confirm-card"),a=document.getElementById("confirm-actions"),s=o;if(n&&(n.innerHTML=`
      <div class="summary-row"><span class="summary-key">Workshop</span><span class="summary-val">${s.title}</span></div>
      <div class="summary-row"><span class="summary-key">Date & Time</span><span class="summary-val">${m(s.date)} · ${x(s.time)}</span></div>
      <div class="summary-row"><span class="summary-key">Venue</span><span class="summary-val">${s.outlet}</span></div>
      <div class="summary-row"><span class="summary-key">Tickets</span><span class="summary-val">${r} slot${r>1?"s":""}</span></div>
      <div class="summary-row"><span class="summary-key">Amount paid</span><span class="summary-val mono">${d(t)}</span></div>
      <div class="summary-row"><span class="summary-key">Booking ID</span><span class="summary-val id">${i}</span></div>
    `),a){const l=encodeURIComponent(`✅ Booking Confirmed — Heebee Sessions

Workshop: ${s.title}
Date: ${m(s.date)} · ${x(s.time)}
Venue: ${s.outlet}
Tickets: ${r}
Amount: ${d(t)}
Booking ID: ${i}

See you there! ☕`),p="919876543210",g=`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(s.title+" — Heebee Sessions")}&dates=${s.date.replace(/-/g,"")}T${s.time.replace(":","")}00/${s.date.replace(/-/g,"")}T${s.time.replace(":","")}00&location=${encodeURIComponent(s.outlet)}`;a.innerHTML=`
      <a href="https://wa.me/${p}?text=${l}" target="_blank" class="btn-wa">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L0 24l6.335-1.503A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.373l-.361-.214-3.741.981.999-3.648-.235-.374A9.859 9.859 0 0 1 2.118 12C2.118 6.535 6.535 2.118 12 2.118c5.464 0 9.882 4.417 9.882 9.882 0 5.464-4.418 9.882-9.882 9.882z"/></svg>
        WhatsApp confirmation
      </a>
      <a href="${g}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;font-weight:500;color:#1A1410;cursor:pointer;text-decoration:none;">
        + Add to calendar
      </a>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;color:#6B5B4E;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    `}}async function ke(e,t){if(!t.bookingId){k("/");return}e.innerHTML=`
    ${E()}
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
          <span style="font-family:'DM Mono',monospace;font-size:11px;color:#6B5B4E;">${t.bookingId}</span>
        </div>
        ${t.workshop?`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #F2EDE6;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Workshop</span><span style="font-size:12px;color:#1A1410;">${decodeURIComponent(t.workshop)}</span></div>`:""}
        ${t.amount?`<div style="display:flex;justify-content:space-between;padding:7px 0;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Amount</span><span style="font-family:'DM Mono',monospace;font-size:13px;color:#7C6F3E;">₹ ${t.amount}</span></div>`:""}
      </div>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:13px;color:#1A1410;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    </div>
    ${w()}
  `}async function Ee(e){e.innerHTML=Be(),we()}function Be(){return`
    ${E()}

    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;min-height:80vh;">

      <!-- FORM -->
      <div class="page-content" style="padding:40px 40px 48px 0;" id="form-col">
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
      <div class="page-sidebar" style="padding:40px 0 48px;">
        <!-- HOW IT WORKS -->
        <div style="background:#E8E0D5;border-radius:12px;padding:20px;margin-bottom:14px;position:relative;overflow:hidden;">
          <div style="position:absolute;inset:0;opacity:0.04;pointer-events:none;background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');background-size:200px;"></div>
          <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:14px;position:relative;">How it works</p>
          ${["Submit your request with your idea and background.","We review and get back within 3–5 working days.","If it's a fit, we discuss date, terms and logistics.","We publish the workshop and handle all bookings.","You show up and host. We take care of the rest."].map(e=>`
            <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;position:relative;">
              <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
              <p style="font-size:11px;color:#6B5B4E;line-height:1.6;font-weight:300;">${e}</p>
            </div>
          `).join("")}
        </div>

        <!-- OUTLETS -->
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:16px;">
          <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Our outlets</p>
          ${[{name:"Heebee SHB",loc:"Sarabha Nagar, Ludhiana · 120 seats"},{name:"Heebee GHB",loc:"Ghumar Mandi, Ludhiana · 20 seats"},{name:"Heebee JLD",loc:"Model Town, Jalandhar · 60 seats"}].map(e=>`
            <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:0.5px solid #F2EDE6;">
              <div style="width:8px;height:8px;border-radius:50%;background:#E8E0D5;border:0.5px solid #7C6F3E;flex-shrink:0;"></div>
              <div>
                <p style="font-size:12px;color:#1A1410;font-weight:400;">${e.name}</p>
                <p style="font-size:10px;color:#6B5B4E;">${e.loc}</p>
              </div>
            </div>
          `).join("")}
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

    ${w()}
  `}function we(e){var t;(t=document.getElementById("submit-btn"))==null||t.addEventListener("click",async()=>{var l,p,g,c,y,h,v,B,C,A,z,S,D,I,T,F,q,M,H,R;const i={name:(p=(l=document.getElementById("f-name"))==null?void 0:l.value)==null?void 0:p.trim(),phone:(c=(g=document.getElementById("f-phone"))==null?void 0:g.value)==null?void 0:c.trim(),email:(h=(y=document.getElementById("f-email"))==null?void 0:y.value)==null?void 0:h.trim(),instagram:(B=(v=document.getElementById("f-instagram"))==null?void 0:v.value)==null?void 0:B.trim(),background:(A=(C=document.getElementById("f-background"))==null?void 0:C.value)==null?void 0:A.trim(),topic:(S=(z=document.getElementById("f-topic"))==null?void 0:z.value)==null?void 0:S.trim(),description:(I=(D=document.getElementById("f-description"))==null?void 0:D.value)==null?void 0:I.trim(),category:(T=document.getElementById("f-category"))==null?void 0:T.value,price:(F=document.getElementById("f-price"))==null?void 0:F.value,outlet:(q=document.getElementById("f-outlet"))==null?void 0:q.value,date:(M=document.getElementById("f-date"))==null?void 0:M.value,notes:(R=(H=document.getElementById("f-notes"))==null?void 0:H.value)==null?void 0:R.trim()};if(["name","phone","email","background","topic","description","category","price","outlet"].filter(b=>!i[b]).length){alert("Please fill in all required fields.");return}const s=document.getElementById("submit-btn");s.querySelector(".lbl").textContent="Submitting...",s.disabled=!0;try{await Q(i),document.getElementById("form-col").style.display="none";const b=document.getElementById("success-screen");b.style.display="flex"}catch(b){console.error(b),alert("Something went wrong. Please try again."),s.querySelector(".lbl").textContent="Submit Host Request →",s.disabled=!1}})}const u=document.getElementById("app"),$e=document.getElementById("loader");async function W(){const{path:e,params:t}=V();switch(u.innerHTML="",e){case"/workshop":await re(u,t.id);break;case"/book":await me(u,t.id);break;case"/confirmation":await ke(u,t);break;case"/host":await Ee(u);break;default:await te(u)}requestAnimationFrame(()=>{Z(),ee()})}function E(e=""){return`
    <nav class="nav">
      <div class="nav-logo" onclick="navigate('/')" style="cursor:pointer;">Heebee Coffee</div>
      <div class="nav-links">
        <span class="nav-link ${e==="sessions"?"active":""}" onclick="navigate('/')">Sessions</span>
        <span class="nav-link" onclick="window.open('https://instagram.com/heebeecoffee','_blank')">Instagram</span>
        <span class="nav-link" onclick="navigate('/')">Outlets</span>
      </div>
      <button class="btn-primary btn-sm" onclick="navigate('/host')">
        <div class="ink"></div><span>Host a Session</span>
      </button>
    </nav>`}function w(){return`
    <footer class="footer">
      <div class="footer-logo">Heebee Coffee</div>
      <div class="footer-links">
        <span class="footer-link" onclick="navigate('/')">Sessions</span>
        <span class="footer-link" onclick="navigate('/host')">Host with us</span>
        <span class="footer-link" onclick="window.open('https://instagram.com/heebeecoffee','_blank')">@ Instagram</span>
      </div>
      <div style="font-size:10px;color:#6B5B4E;">Sarabha Nagar · Ghumar Mandi · Model Town Jalandhar</div>
    </footer>`}window.navigate=k;window.addEventListener("hashchange",W);window.addEventListener("load",async()=>{await W(),setTimeout(()=>$e.classList.add("hidden"),1800)});
