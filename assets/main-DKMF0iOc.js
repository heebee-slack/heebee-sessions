import{G as Qt,H as Zt,I as te,A as L,J as H,y as A,K as ee,M as Y,N as Tt,O as ne,P as zt,Q as Mt,R as oe,T as ie,U as se,V as ae}from"./helpers-DbYsWB8w.js";async function re(t){t.innerHTML=le();const[e,n]=await Promise.all([Qt(),Zt()]);t.innerHTML=de(e,n),ue(t),fe()}function le(){return`
    <div style="min-height:100vh;">
      <div style="padding:18px 48px;border-bottom:0.5px solid #D4C9BC;display:flex;align-items:center;justify-content:space-between;">
        <div style="font-size:17px;font-weight:500;color:#1A1410;">Heebee Coffee</div>
      </div>
      <div style="padding:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:200px;">
        ${[1,2,3].map(()=>'<div style="height:260px;background:#E8E0D5;border-radius:14px;animation:pulse 1.5s ease infinite;"></div>').join("")}
      </div>
    </div>
    <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>
  `}function de(t,e){const n=["All",...e];return`
    ${G("sessions")}

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
        ${n.map((o,i)=>`
          <button class="filter-pill ${i===0?"active":""}" data-cat="${o==="All"?"all":o}">
            ${o}
          </button>
        `).join("")}
      </div>

      <!-- CARDS GRID -->
      <div class="cards-grid" id="cards-grid">
        ${t.length>0?t.map(o=>ce(o)).join(""):pe()}
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

    ${st()}
  `}function ce(t){var o;const e=t.status==="coming_soon",n=t.slotsRemaining<=0;return`
    <div class="workshop-card" data-category="${t.category}" onclick="${e?"":`navigate('/workshop?id=${t.id}')`}">
      <div class="card-cover" style="${t.coverImage?"":"background:#E8E0D5"}">
        ${t.coverImage?`<img src="${t.coverImage}" alt="${t.title}" loading="lazy">`:`<div class="card-cover-placeholder">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>`}
        ${e?'<div class="coming-soon-overlay"><span class="coming-soon-badge">Coming Soon</span></div>':""}
        ${n&&!e?'<div style="position:absolute;top:10px;right:10px;"><span class="badge badge-full">Fully Booked</span></div>':""}
      </div>
      <div class="card-body">
        <span class="badge badge-category">${t.category}</span>
        <p class="card-title">${t.title}</p>
        <p class="card-meta">
          ${t.date?L(t.date):"Date TBC"} · ${t.time?H(t.time):""}<br>
          ${t.outlet}
        </p>
        <div class="card-host-row">
          <div class="card-host-avatar">
            ${t.hostPhoto?`<img src="${t.hostPhoto}" alt="${t.hostName}">`:((o=t.hostName)==null?void 0:o.charAt(0))||"H"}
          </div>
          <span class="card-host-name">${t.hostName} · ${t.hostRole||"Host"}</span>
        </div>
        <div class="card-footer">
          <div>
            <p class="card-price">${A(t.price)}</p>
            <p class="card-slots">${e?"Registration opening soon":n?"Join waitlist":ee(t.slotsRemaining)}</p>
          </div>
          ${e?"":`
            <button class="btn-cta btn-sm" onclick="event.stopPropagation();navigate('/workshop?id=${t.id}')">
              <div class="ink"></div>
              <span>${n?"Waitlist":"Book"}</span>
            </button>
          `}
        </div>
      </div>
    </div>
  `}function pe(){return`
    <div style="grid-column:1/-1;padding:60px;text-align:center;">
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;">No sessions found. Check back soon or <span style="color:#7C6F3E;cursor:pointer;" onclick="navigate('/host')">request to host one</span>.</p>
    </div>
  `}function ue(t,e,n){t.querySelectorAll(".filter-pill").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll(".filter-pill").forEach(s=>s.classList.remove("active")),o.classList.add("active");const i=o.dataset.cat;t.querySelectorAll(".workshop-card").forEach(s=>{const a=i==="all"||s.dataset.category===i;s.style.display=a?"":"none"})})})}function fe(){te(".hero-child",200,90);const t=document.getElementById("stat-sessions"),e=document.getElementById("stat-hosts");t&&Bt(t,48,1400),e&&Bt(e,23,1200),setTimeout(()=>{document.querySelectorAll(".workshop-card").forEach((n,o)=>{setTimeout(()=>n.classList.add("visible"),o*100)})},600)}function Bt(t,e,n){const o=performance.now();function i(s){const a=Math.min((s-o)/n,1);t.textContent=Math.round((1-Math.pow(1-a,3))*e),a<1&&requestAnimationFrame(i)}requestAnimationFrame(i)}async function ge(t,e){if(!e){Y("/");return}t.innerHTML=me();const n=await Tt(e);if(!n){t.innerHTML=ye();return}t.innerHTML=he(n),xe(t,n),ne(e,o=>{const i=document.getElementById("slot-count"),s=document.getElementById("slot-fill"),a=document.getElementById("slot-sub");i&&(i.textContent=o),s&&(s.style.width=`${Math.round((n.maxSlots-o)/n.maxSlots*100)}%`),a&&(a.textContent=`${o} of ${n.maxSlots} remaining`)})}function he(t){var a,l;const e=t.slotsRemaining<=0,n=t.status==="coming_soon",o="917814498149",i=encodeURIComponent(`Hi! I'd like to join the waitlist for ${t.title} on ${t.date}. Please let me know if a slot opens up.`),s=`https://wa.me/${o}?text=${i}`;return`
    ${G()}

    <!-- BACK -->
    <div class="back-bar" style="padding:14px 48px;border-bottom:0.5px solid #D4C9BC;">
      <span style="font-size:11px;color:#6B5B4E;cursor:pointer;display:inline-flex;align-items:center;gap:6px;" onclick="navigate('/')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        All Sessions
      </span>
    </div>

    <!-- HERO IMAGE -->
    <div class="detail-hero" style="height:280px;background:#E0D8CE;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      ${t.coverImage?`<img src="${t.coverImage}" alt="${t.title}" style="width:100%;height:100%;object-fit:cover;">`:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'}
      <span style="position:absolute;top:16px;left:48px;" class="badge badge-category">${t.category}</span>
      ${!n&&!e?`<span style="position:absolute;top:16px;right:48px;" class="badge badge-live">${t.slotsRemaining} slots left</span>`:""}
      ${e?'<span style="position:absolute;top:16px;right:48px;" class="badge badge-full">Fully Booked</span>':""}
    </div>

    <!-- MAIN LAYOUT -->
    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;">

      <!-- LEFT CONTENT -->
      <div class="page-content" style="padding:32px 40px 40px 0;">
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Workshop</p>
        <h1 style="font-size:32px;font-weight:200;color:#1A1410;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px;">${t.title}</h1>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:22px;">
          <div class="card-host-avatar">${t.hostPhoto?`<img src="${t.hostPhoto}" alt="${t.hostName}" style="width:100%;height:100%;object-fit:cover;">`:((a=t.hostName)==null?void 0:a.charAt(0))||"H"}</div>
          <span style="font-size:12px;color:#6B5B4E;">Hosted by ${t.hostName}${t.hostRole?" · "+t.hostRole:""}</span>
        </div>
        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- META GRID -->
        <div class="meta-grid-cols" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
          ${F("Calendar",L(t.date))}
          ${F("Clock",`${H(t.time)}${t.duration?" — "+t.duration:""}`)}
          ${F("Map-pin",t.outlet)}
          ${F("Users",`Max ${t.maxSlots} attendees`)}
          ${t.language?F("Language",t.language):""}
          ${t.duration?F("Clock-hour-3",t.duration):""}
        </div>

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- ABOUT -->
        <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">About this session</p>
        <p style="font-size:13px;color:#6B5B4E;line-height:1.75;font-weight:300;margin-bottom:22px;">${t.description}</p>

        <!-- THINGS TO KNOW -->
        ${t.thingsToKnow&&t.thingsToKnow.length?`
          <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">Things to know</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px;">
            ${t.thingsToKnow.map(r=>`<span class="badge badge-category" style="padding:4px 10px;font-size:10px;">${r}</span>`).join("")}
          </div>
        `:""}

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- HOST PROFILE -->
        <div class="host-block">
          <p class="host-block-label">Your host</p>
          <div style="display:flex;align-items:flex-start;gap:16px;">
            <div class="host-avatar">
              ${t.hostPhoto?`<img src="${t.hostPhoto}" alt="${t.hostName}">`:((l=t.hostName)==null?void 0:l.charAt(0))||"H"}
            </div>
            <div>
              <span class="host-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${t.hostType==="heebee"?"Heebee Team":"External Host"}
              </span>
              <p style="font-size:15px;font-weight:400;color:#1A1410;margin-bottom:2px;">${t.hostName}</p>
              ${t.hostRole?`<p style="font-size:11px;color:#6B5B4E;margin-bottom:6px;">${t.hostRole}</p>`:""}
              ${t.hostBio?`<p style="font-size:12px;color:#6B5B4E;line-height:1.65;margin-bottom:10px;font-weight:300;">${t.hostBio}</p>`:""}
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${t.hostInstagram?`<a href="https://instagram.com/${t.hostInstagram.replace("@","")}" target="_blank" class="btn-ghost btn-sm"><div class="ink"></div><span>@ ${t.hostInstagram}</span></a>`:""}
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
            <span style="font-family:'DM Mono',monospace;font-size:28px;color:#7C6F3E;">${A(t.price)}</span>
            <span style="font-size:11px;color:#6B5B4E;">per slot</span>
          </div>

          <!-- SLOT BAR -->
          <div style="margin-bottom:16px;">
            <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:5px;">
              <span style="font-family:'DM Mono',monospace;font-size:20px;color:#1A1410;" id="slot-count">${t.slotsRemaining}</span>
              <span style="font-size:10px;color:#6B5B4E;text-transform:uppercase;letter-spacing:0.08em;">slots left</span>
            </div>
            <div class="slot-bar-bg">
              <div class="slot-bar-fill" id="slot-fill" style="width:${Math.round((t.maxSlots-t.slotsRemaining)/t.maxSlots*100)}%;"></div>
            </div>
            <span style="font-size:9px;color:#B8A99A;" id="slot-sub">${t.slotsRemaining} of ${t.maxSlots} remaining</span>
          </div>

          <div style="height:0.5px;background:#E8E0D5;margin-bottom:14px;"></div>

          <!-- PAYMENT MODE -->
          <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:8px;">Pay via</p>
          <div style="display:flex;gap:8px;margin-bottom:14px;">
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${t.paymentMode==="razorpay"?"#7C6F3E":"#D4C9BC"};background:${t.paymentMode==="razorpay"?"#F2EDE6":"#fff"};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${t.paymentMode==="razorpay"?"#7C6F3E":"#6B5B4E"}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <p style="font-size:10px;font-weight:500;color:${t.paymentMode==="razorpay"?"#1A1410":"#6B5B4E"};">Razorpay</p>
            </div>
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${t.paymentMode==="qr"?"#7C6F3E":"#D4C9BC"};background:${t.paymentMode==="qr"?"#F2EDE6":"#fff"};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${t.paymentMode==="qr"?"#7C6F3E":"#6B5B4E"}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>
              <p style="font-size:10px;font-weight:500;color:${t.paymentMode==="qr"?"#1A1410":"#6B5B4E"};">UPI QR</p>
            </div>
          </div>

          ${n?`
            <div style="padding:12px;background:#F2EDE6;border-radius:6px;text-align:center;margin-bottom:8px;">
              <p style="font-size:12px;color:#D4A84B;font-weight:500;">Coming Soon</p>
              <p style="font-size:10px;color:#6B5B4E;margin-top:3px;">Registration opens soon</p>
            </div>
          `:e?`
            <a href="${s}" target="_blank" class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;text-decoration:none;">
              <div class="ink"></div><span>Join Waitlist</span>
            </a>
          `:`
            <button class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;" onclick="navigate('/book?id=${t.id}')">
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
    ${n?"":`
    <div class="mobile-book-bar">
      <div>
        <div class="mobile-book-bar-price">${A(t.price)}</div>
        <div class="mobile-book-bar-slots">${e?"Fully booked":`${t.slotsRemaining} slots left`}</div>
      </div>
      ${e?`<a href="${s}" target="_blank" class="btn-cta btn-sm" style="text-decoration:none;"><div class="ink"></div><span>Join Waitlist</span></a>`:`<button class="btn-cta btn-sm" onclick="navigate('/book?id=${t.id}')"><div class="ink"></div><span>Book Your Slot</span></button>`}
    </div>`}

    ${st()}
  `}function F(t,e){return`
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <div style="width:28px;height:28px;border-radius:6px;background:#E8E0D5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C6F3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${{Calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',Clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',"Map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',Users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',Language:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',"Clock-hour-3":'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16.5 12"/>'}[t]||""}</svg>
      </div>
      <div>
        <p style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;margin-bottom:2px;">${t.replace("-"," ")}</p>
        <p style="font-size:12px;color:#1A1410;">${e}</p>
      </div>
    </div>
  `}function me(){return'<div style="min-height:100vh;padding:48px;"><div style="height:280px;background:#E8E0D5;border-radius:14px;margin-top:100px;animation:pulse 1.5s ease infinite;"></div></div><style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>'}function ye(){return`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;"><p style="font-size:22px;font-weight:200;color:#1A1410;">Workshop not found</p><button class="btn-primary" onclick="navigate('/')"><div class="ink"></div><span>Back to sessions</span></button></div>`}function xe(t,e){e.additionalImages&&e.additionalImages.length}var J={},be=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Pt={},S={};let yt;const ve=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];S.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};S.getSymbolTotalCodewords=function(e){return ve[e]};S.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};S.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');yt=e};S.isKanjiModeEnabled=function(){return typeof yt<"u"};S.toSJIS=function(e){return yt(e)};var et={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},t.from=function(o,i){if(t.isValid(o))return o;try{return e(o)}catch{return i}}})(et);function Dt(){this.buffer=[],this.length=0}Dt.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var we=Dt;function V(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}V.prototype.set=function(t,e,n,o){const i=t*this.size+e;this.data[i]=n,o&&(this.reservedBit[i]=!0)};V.prototype.get=function(t,e){return this.data[t*this.size+e]};V.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};V.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Ee=V,Rt={};(function(t){const e=S.getSymbolSize;t.getRowColCoords=function(o){if(o===1)return[];const i=Math.floor(o/7)+2,s=e(o),a=s===145?26:Math.ceil((s-13)/(2*i-2))*2,l=[s-7];for(let r=1;r<i-1;r++)l[r]=l[r-1]-a;return l.push(6),l.reverse()},t.getPositions=function(o){const i=[],s=t.getRowColCoords(o),a=s.length;for(let l=0;l<a;l++)for(let r=0;r<a;r++)l===0&&r===0||l===0&&r===a-1||l===a-1&&r===0||i.push([s[l],s[r]]);return i}})(Rt);var Ft={};const ke=S.getSymbolSize,Ct=7;Ft.getPositions=function(e){const n=ke(e);return[[0,0],[n-Ct,0],[0,n-Ct]]};var Nt={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let a=0,l=0,r=0,d=null,c=null;for(let v=0;v<s;v++){l=r=0,d=c=null;for(let g=0;g<s;g++){let p=i.get(v,g);p===d?l++:(l>=5&&(a+=e.N1+(l-5)),d=p,l=1),p=i.get(g,v),p===c?r++:(r>=5&&(a+=e.N1+(r-5)),c=p,r=1)}l>=5&&(a+=e.N1+(l-5)),r>=5&&(a+=e.N1+(r-5))}return a},t.getPenaltyN2=function(i){const s=i.size;let a=0;for(let l=0;l<s-1;l++)for(let r=0;r<s-1;r++){const d=i.get(l,r)+i.get(l,r+1)+i.get(l+1,r)+i.get(l+1,r+1);(d===4||d===0)&&a++}return a*e.N2},t.getPenaltyN3=function(i){const s=i.size;let a=0,l=0,r=0;for(let d=0;d<s;d++){l=r=0;for(let c=0;c<s;c++)l=l<<1&2047|i.get(d,c),c>=10&&(l===1488||l===93)&&a++,r=r<<1&2047|i.get(c,d),c>=10&&(r===1488||r===93)&&a++}return a*e.N3},t.getPenaltyN4=function(i){let s=0;const a=i.data.length;for(let r=0;r<a;r++)s+=i.data[r];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function n(o,i,s){switch(o){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}t.applyMask=function(i,s){const a=s.size;for(let l=0;l<a;l++)for(let r=0;r<a;r++)s.isReserved(r,l)||s.xor(r,l,n(i,r,l))},t.getBestMask=function(i,s){const a=Object.keys(t.Patterns).length;let l=0,r=1/0;for(let d=0;d<a;d++){s(d),t.applyMask(d,i);const c=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(d,i),c<r&&(r=c,l=d)}return l}})(Nt);var nt={};const P=et,X=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];nt.getBlocksCount=function(e,n){switch(n){case P.L:return X[(e-1)*4+0];case P.M:return X[(e-1)*4+1];case P.Q:return X[(e-1)*4+2];case P.H:return X[(e-1)*4+3];default:return}};nt.getTotalCodewordsCount=function(e,n){switch(n){case P.L:return Q[(e-1)*4+0];case P.M:return Q[(e-1)*4+1];case P.Q:return Q[(e-1)*4+2];case P.H:return Q[(e-1)*4+3];default:return}};var Lt={},ot={};const W=new Uint8Array(512),Z=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)W[n]=e,Z[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)W[n]=W[n-255]})();ot.log=function(e){if(e<1)throw new Error("log("+e+")");return Z[e]};ot.exp=function(e){return W[e]};ot.mul=function(e,n){return e===0||n===0?0:W[Z[e]+Z[n]]};(function(t){const e=ot;t.mul=function(o,i){const s=new Uint8Array(o.length+i.length-1);for(let a=0;a<o.length;a++)for(let l=0;l<i.length;l++)s[a+l]^=e.mul(o[a],i[l]);return s},t.mod=function(o,i){let s=new Uint8Array(o);for(;s.length-i.length>=0;){const a=s[0];for(let r=0;r<i.length;r++)s[r]^=e.mul(i[r],a);let l=0;for(;l<s.length&&s[l]===0;)l++;s=s.slice(l)}return s},t.generateECPolynomial=function(o){let i=new Uint8Array([1]);for(let s=0;s<o;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Lt);const Ht=Lt;function xt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}xt.prototype.initialize=function(e){this.degree=e,this.genPoly=Ht.generateECPolynomial(this.degree)};xt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const o=Ht.mod(n,this.genPoly),i=this.degree-o.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(o,i),s}return o};var Be=xt,qt={},R={},bt={};bt.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var z={};const Ut="[0-9]+",Ce="[A-Z $%*+\\-./:]+";let K="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";K=K.replace(/u/g,"\\u");const Ae="(?:(?![A-Z0-9 $%*+\\-./:]|"+K+`)(?:.|[\r
]))+`;z.KANJI=new RegExp(K,"g");z.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");z.BYTE=new RegExp(Ae,"g");z.NUMERIC=new RegExp(Ut,"g");z.ALPHANUMERIC=new RegExp(Ce,"g");const $e=new RegExp("^"+K+"$"),Ie=new RegExp("^"+Ut+"$"),Se=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");z.testKanji=function(e){return $e.test(e)};z.testNumeric=function(e){return Ie.test(e)};z.testAlphanumeric=function(e){return Se.test(e)};(function(t){const e=bt,n=z;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function o(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,a){if(t.isValid(s))return s;try{return o(s)}catch{return a}}})(R);(function(t){const e=S,n=nt,o=et,i=R,s=bt,a=7973,l=e.getBCHDigit(a);function r(g,p,y){for(let x=1;x<=40;x++)if(p<=t.getCapacity(x,y,g))return x}function d(g,p){return i.getCharCountIndicator(g,p)+4}function c(g,p){let y=0;return g.forEach(function(x){const C=d(x.mode,p);y+=C+x.getBitsLength()}),y}function v(g,p){for(let y=1;y<=40;y++)if(c(g,y)<=t.getCapacity(y,p,i.MIXED))return y}t.from=function(p,y){return s.isValid(p)?parseInt(p,10):y},t.getCapacity=function(p,y,x){if(!s.isValid(p))throw new Error("Invalid QR Code version");typeof x>"u"&&(x=i.BYTE);const C=e.getSymbolTotalCodewords(p),m=n.getTotalCodewordsCount(p,y),b=(C-m)*8;if(x===i.MIXED)return b;const h=b-d(x,p);switch(x){case i.NUMERIC:return Math.floor(h/10*3);case i.ALPHANUMERIC:return Math.floor(h/11*2);case i.KANJI:return Math.floor(h/13);case i.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(p,y){let x;const C=o.from(y,o.M);if(Array.isArray(p)){if(p.length>1)return v(p,C);if(p.length===0)return 1;x=p[0]}else x=p;return r(x.mode,x.getLength(),C)},t.getEncodedBits=function(p){if(!s.isValid(p)||p<7)throw new Error("Invalid QR Code version");let y=p<<12;for(;e.getBCHDigit(y)-l>=0;)y^=a<<e.getBCHDigit(y)-l;return p<<12|y}})(qt);var _t={};const ft=S,jt=1335,Te=21522,At=ft.getBCHDigit(jt);_t.getEncodedBits=function(e,n){const o=e.bit<<3|n;let i=o<<10;for(;ft.getBCHDigit(i)-At>=0;)i^=jt<<ft.getBCHDigit(i)-At;return(o<<10|i)^Te};var Ot={};const ze=R;function q(t){this.mode=ze.NUMERIC,this.data=t.toString()}q.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};q.prototype.getLength=function(){return this.data.length};q.prototype.getBitsLength=function(){return q.getBitsLength(this.data.length)};q.prototype.write=function(e){let n,o,i;for(n=0;n+3<=this.data.length;n+=3)o=this.data.substr(n,3),i=parseInt(o,10),e.put(i,10);const s=this.data.length-n;s>0&&(o=this.data.substr(n),i=parseInt(o,10),e.put(i,s*3+1))};var Me=q;const Pe=R,rt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(t){this.mode=Pe.ALPHANUMERIC,this.data=t}U.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let o=rt.indexOf(this.data[n])*45;o+=rt.indexOf(this.data[n+1]),e.put(o,11)}this.data.length%2&&e.put(rt.indexOf(this.data[n]),6)};var De=U;const Re=R;function _(t){this.mode=Re.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}_.getBitsLength=function(e){return e*8};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var Fe=_;const Ne=R,Le=S;function j(t){this.mode=Ne.KANJI,this.data=t}j.getBitsLength=function(e){return e*13};j.prototype.getLength=function(){return this.data.length};j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)};j.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=Le.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var He=j,Wt={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,o,i){var s={},a={};a[o]=0;var l=e.PriorityQueue.make();l.push(o,0);for(var r,d,c,v,g,p,y,x,C;!l.empty();){r=l.pop(),d=r.value,v=r.cost,g=n[d]||{};for(c in g)g.hasOwnProperty(c)&&(p=g[c],y=v+p,x=a[c],C=typeof a[c]>"u",(C||x>y)&&(a[c]=y,l.push(c,y),s[c]=d))}if(typeof i<"u"&&typeof a[i]>"u"){var m=["Could not find a path from ",o," to ",i,"."].join("");throw new Error(m)}return s},extract_shortest_path_from_predecessor_list:function(n,o){for(var i=[],s=o;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,o,i){var s=e.single_source_shortest_paths(n,o,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var o=e.PriorityQueue,i={},s;n=n||{};for(s in o)o.hasOwnProperty(s)&&(i[s]=o[s]);return i.queue=[],i.sorter=n.sorter||o.default_sorter,i},default_sorter:function(n,o){return n.cost-o.cost},push:function(n,o){var i={value:n,cost:o};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Wt);var qe=Wt.exports;(function(t){const e=R,n=Me,o=De,i=Fe,s=He,a=z,l=S,r=qe;function d(m){return unescape(encodeURIComponent(m)).length}function c(m,b,h){const f=[];let w;for(;(w=m.exec(h))!==null;)f.push({data:w[0],index:w.index,mode:b,length:w[0].length});return f}function v(m){const b=c(a.NUMERIC,e.NUMERIC,m),h=c(a.ALPHANUMERIC,e.ALPHANUMERIC,m);let f,w;return l.isKanjiModeEnabled()?(f=c(a.BYTE,e.BYTE,m),w=c(a.KANJI,e.KANJI,m)):(f=c(a.BYTE_KANJI,e.BYTE,m),w=[]),b.concat(h,f,w).sort(function(B,I){return B.index-I.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function g(m,b){switch(b){case e.NUMERIC:return n.getBitsLength(m);case e.ALPHANUMERIC:return o.getBitsLength(m);case e.KANJI:return s.getBitsLength(m);case e.BYTE:return i.getBitsLength(m)}}function p(m){return m.reduce(function(b,h){const f=b.length-1>=0?b[b.length-1]:null;return f&&f.mode===h.mode?(b[b.length-1].data+=h.data,b):(b.push(h),b)},[])}function y(m){const b=[];for(let h=0;h<m.length;h++){const f=m[h];switch(f.mode){case e.NUMERIC:b.push([f,{data:f.data,mode:e.ALPHANUMERIC,length:f.length},{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.ALPHANUMERIC:b.push([f,{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.KANJI:b.push([f,{data:f.data,mode:e.BYTE,length:d(f.data)}]);break;case e.BYTE:b.push([{data:f.data,mode:e.BYTE,length:d(f.data)}])}}return b}function x(m,b){const h={},f={start:{}};let w=["start"];for(let k=0;k<m.length;k++){const B=m[k],I=[];for(let T=0;T<B.length;T++){const $=B[T],O=""+k+T;I.push(O),h[O]={node:$,lastCount:0},f[O]={};for(let at=0;at<w.length;at++){const M=w[at];h[M]&&h[M].node.mode===$.mode?(f[M][O]=g(h[M].lastCount+$.length,$.mode)-g(h[M].lastCount,$.mode),h[M].lastCount+=$.length):(h[M]&&(h[M].lastCount=$.length),f[M][O]=g($.length,$.mode)+4+e.getCharCountIndicator($.mode,b))}}w=I}for(let k=0;k<w.length;k++)f[w[k]].end=0;return{map:f,table:h}}function C(m,b){let h;const f=e.getBestModeForData(m);if(h=e.from(b,f),h!==e.BYTE&&h.bit<f.bit)throw new Error('"'+m+'" cannot be encoded with mode '+e.toString(h)+`.
 Suggested mode is: `+e.toString(f));switch(h===e.KANJI&&!l.isKanjiModeEnabled()&&(h=e.BYTE),h){case e.NUMERIC:return new n(m);case e.ALPHANUMERIC:return new o(m);case e.KANJI:return new s(m);case e.BYTE:return new i(m)}}t.fromArray=function(b){return b.reduce(function(h,f){return typeof f=="string"?h.push(C(f,null)):f.data&&h.push(C(f.data,f.mode)),h},[])},t.fromString=function(b,h){const f=v(b,l.isKanjiModeEnabled()),w=y(f),k=x(w,h),B=r.find_path(k.map,"start","end"),I=[];for(let T=1;T<B.length-1;T++)I.push(k.table[B[T]].node);return t.fromArray(p(I))},t.rawSplit=function(b){return t.fromArray(v(b,l.isKanjiModeEnabled()))}})(Ot);const it=S,lt=et,Ue=we,_e=Ee,je=Rt,Oe=Ft,gt=Nt,ht=nt,We=Be,tt=qt,Ye=_t,Ke=R,dt=Ot;function Je(t,e){const n=t.size,o=Oe.getPositions(e);for(let i=0;i<o.length;i++){const s=o[i][0],a=o[i][1];for(let l=-1;l<=7;l++)if(!(s+l<=-1||n<=s+l))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(l>=0&&l<=6&&(r===0||r===6)||r>=0&&r<=6&&(l===0||l===6)||l>=2&&l<=4&&r>=2&&r<=4?t.set(s+l,a+r,!0,!0):t.set(s+l,a+r,!1,!0))}}function Ve(t){const e=t.size;for(let n=8;n<e-8;n++){const o=n%2===0;t.set(n,6,o,!0),t.set(6,n,o,!0)}}function Ge(t,e){const n=je.getPositions(e);for(let o=0;o<n.length;o++){const i=n[o][0],s=n[o][1];for(let a=-2;a<=2;a++)for(let l=-2;l<=2;l++)a===-2||a===2||l===-2||l===2||a===0&&l===0?t.set(i+a,s+l,!0,!0):t.set(i+a,s+l,!1,!0)}}function Xe(t,e){const n=t.size,o=tt.getEncodedBits(e);let i,s,a;for(let l=0;l<18;l++)i=Math.floor(l/3),s=l%3+n-8-3,a=(o>>l&1)===1,t.set(i,s,a,!0),t.set(s,i,a,!0)}function ct(t,e,n){const o=t.size,i=Ye.getEncodedBits(e,n);let s,a;for(s=0;s<15;s++)a=(i>>s&1)===1,s<6?t.set(s,8,a,!0):s<8?t.set(s+1,8,a,!0):t.set(o-15+s,8,a,!0),s<8?t.set(8,o-s-1,a,!0):s<9?t.set(8,15-s-1+1,a,!0):t.set(8,15-s-1,a,!0);t.set(o-8,8,1,!0)}function Qe(t,e){const n=t.size;let o=-1,i=n-1,s=7,a=0;for(let l=n-1;l>0;l-=2)for(l===6&&l--;;){for(let r=0;r<2;r++)if(!t.isReserved(i,l-r)){let d=!1;a<e.length&&(d=(e[a]>>>s&1)===1),t.set(i,l-r,d),s--,s===-1&&(a++,s=7)}if(i+=o,i<0||n<=i){i-=o,o=-o;break}}}function Ze(t,e,n){const o=new Ue;n.forEach(function(r){o.put(r.mode.bit,4),o.put(r.getLength(),Ke.getCharCountIndicator(r.mode,t)),r.write(o)});const i=it.getSymbolTotalCodewords(t),s=ht.getTotalCodewordsCount(t,e),a=(i-s)*8;for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const l=(a-o.getLengthInBits())/8;for(let r=0;r<l;r++)o.put(r%2?17:236,8);return tn(o,t,e)}function tn(t,e,n){const o=it.getSymbolTotalCodewords(e),i=ht.getTotalCodewordsCount(e,n),s=o-i,a=ht.getBlocksCount(e,n),l=o%a,r=a-l,d=Math.floor(o/a),c=Math.floor(s/a),v=c+1,g=d-c,p=new We(g);let y=0;const x=new Array(a),C=new Array(a);let m=0;const b=new Uint8Array(t.buffer);for(let B=0;B<a;B++){const I=B<r?c:v;x[B]=b.slice(y,y+I),C[B]=p.encode(x[B]),y+=I,m=Math.max(m,I)}const h=new Uint8Array(o);let f=0,w,k;for(w=0;w<m;w++)for(k=0;k<a;k++)w<x[k].length&&(h[f++]=x[k][w]);for(w=0;w<g;w++)for(k=0;k<a;k++)h[f++]=C[k][w];return h}function en(t,e,n,o){let i;if(Array.isArray(t))i=dt.fromArray(t);else if(typeof t=="string"){let d=e;if(!d){const c=dt.rawSplit(t);d=tt.getBestVersionForData(c,n)}i=dt.fromString(t,d||40)}else throw new Error("Invalid data");const s=tt.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const a=Ze(e,n,i),l=it.getSymbolSize(e),r=new _e(l);return Je(r,e),Ve(r),Ge(r,e),ct(r,n,0),e>=7&&Xe(r,e),Qe(r,a),isNaN(o)&&(o=gt.getBestMask(r,ct.bind(null,r,n))),gt.applyMask(o,r),ct(r,n,o),{modules:r,version:e,errorCorrectionLevel:n,maskPattern:o,segments:i}}Pt.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let o=lt.M,i,s;return typeof n<"u"&&(o=lt.from(n.errorCorrectionLevel,lt.M),i=tt.from(n.version),s=gt.from(n.maskPattern),n.toSJISFunc&&it.setToSJISFunction(n.toSJISFunc)),en(e,i,o,s)};var Yt={},vt={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let o=n.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+n);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(s){return[s,s]}))),o.length===6&&o.push("F","F");const i=parseInt(o.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+o.slice(0,6).join("")}}t.getOptions=function(o){o||(o={}),o.color||(o.color={});const i=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,s=o.width&&o.width>=21?o.width:void 0,a=o.scale||4;return{width:s,scale:s?4:a,margin:i,color:{dark:e(o.color.dark||"#000000ff"),light:e(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},t.getScale=function(o,i){return i.width&&i.width>=o+i.margin*2?i.width/(o+i.margin*2):i.scale},t.getImageWidth=function(o,i){const s=t.getScale(o,i);return Math.floor((o+i.margin*2)*s)},t.qrToImageData=function(o,i,s){const a=i.modules.size,l=i.modules.data,r=t.getScale(a,s),d=Math.floor((a+s.margin*2)*r),c=s.margin*r,v=[s.color.light,s.color.dark];for(let g=0;g<d;g++)for(let p=0;p<d;p++){let y=(g*d+p)*4,x=s.color.light;if(g>=c&&p>=c&&g<d-c&&p<d-c){const C=Math.floor((g-c)/r),m=Math.floor((p-c)/r);x=v[l[C*a+m]?1:0]}o[y++]=x.r,o[y++]=x.g,o[y++]=x.b,o[y]=x.a}}})(vt);(function(t){const e=vt;function n(i,s,a){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,a,l){let r=l,d=a;typeof r>"u"&&(!a||!a.getContext)&&(r=a,a=void 0),a||(d=o()),r=e.getOptions(r);const c=e.getImageWidth(s.modules.size,r),v=d.getContext("2d"),g=v.createImageData(c,c);return e.qrToImageData(g.data,s,r),n(v,d,c),v.putImageData(g,0,0),d},t.renderToDataURL=function(s,a,l){let r=l;typeof r>"u"&&(!a||!a.getContext)&&(r=a,a=void 0),r||(r={});const d=t.render(s,a,r),c=r.type||"image/png",v=r.rendererOpts||{};return d.toDataURL(c,v.quality)}})(Yt);var Kt={};const nn=vt;function $t(t,e){const n=t.a/255,o=e+'="'+t.hex+'"';return n<1?o+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function pt(t,e,n){let o=t+e;return typeof n<"u"&&(o+=" "+n),o}function on(t,e,n){let o="",i=0,s=!1,a=0;for(let l=0;l<t.length;l++){const r=Math.floor(l%e),d=Math.floor(l/e);!r&&!s&&(s=!0),t[l]?(a++,l>0&&r>0&&t[l-1]||(o+=s?pt("M",r+n,.5+d+n):pt("m",i,0),i=0,s=!1),r+1<e&&t[l+1]||(o+=pt("h",a),a=0)):i++}return o}Kt.render=function(e,n,o){const i=nn.getOptions(n),s=e.modules.size,a=e.modules.data,l=s+i.margin*2,r=i.color.light.a?"<path "+$t(i.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+$t(i.color.dark,"stroke")+' d="'+on(a,s,i.margin)+'"/>',c='viewBox="0 0 '+l+" "+l+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+c+' shape-rendering="crispEdges">'+r+d+`</svg>
`;return typeof o=="function"&&o(null,g),g};const sn=be,mt=Pt,Jt=Yt,an=Kt;function wt(t,e,n,o,i){const s=[].slice.call(arguments,1),a=s.length,l=typeof s[a-1]=="function";if(!l&&!sn())throw new Error("Callback required as last argument");if(l){if(a<2)throw new Error("Too few arguments provided");a===2?(i=n,n=e,e=o=void 0):a===3&&(e.getContext&&typeof i>"u"?(i=o,o=void 0):(i=o,o=n,n=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(n=e,e=o=void 0):a===2&&!e.getContext&&(o=n,n=e,e=void 0),new Promise(function(r,d){try{const c=mt.create(n,o);r(t(c,e,o))}catch(c){d(c)}})}try{const r=mt.create(n,o);i(null,t(r,e,o))}catch(r){i(r)}}J.create=mt.create;J.toCanvas=wt.bind(null,Jt.render);J.toDataURL=wt.bind(null,Jt.renderToDataURL);J.toString=wt.bind(null,function(t,e,n){return an.render(t,n)});let u=null,E=1,Et=1,D=!1;async function rn(t,e){if(!e){Y("/");return}if(u=await Tt(e),!u){Y("/");return}E=1,Et=1,D=!1,t.innerHTML=ln(),mn()}function ln(){return`
    ${G()}

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

    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;min-height:70vh;">

      <div class="page-content" style="padding:32px 40px 40px 0;">

        <!-- STEP 1: DETAILS -->
        <div id="panel1">
          <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:6px;">Step 1 of 3</p>
          <h2 style="font-size:24px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:4px;">Your details</h2>
          <p style="font-size:12px;color:#6B5B4E;font-weight:300;margin-bottom:22px;">Fill in details for each attendee. All fields required except Instagram.</p>
          <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

          <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:8px;">Tickets</p>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#fff;border:0.5px solid #D4C9BC;border-radius:8px;margin-bottom:20px;">
            <div>
              <p style="font-size:12px;font-weight:500;color:#1A1410;">Ticket for <span id="tcount-lbl">1</span></p>
              <p style="font-size:10px;color:#6B5B4E;margin-top:2px;">${A(u.price)} per person</p>
            </div>
            <div style="display:flex;align-items:center;gap:14px;">
              <button id="btn-minus" style="width:28px;height:28px;border-radius:50%;border:0.5px solid #D4C9BC;background:#F2EDE6;font-size:16px;color:#1A1410;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;transition:all 0.2s;" onmouseenter="this.style.background='#1A1410';this.style.color='#F2EDE6';" onmouseleave="this.style.background='#F2EDE6';this.style.color='#1A1410';">−</button>
              <span style="font-family:'DM Mono',monospace;font-size:20px;color:#1A1410;min-width:20px;text-align:center;" id="tcount">1</span>
              <button id="btn-plus" style="width:28px;height:28px;border-radius:50%;border:0.5px solid #D4C9BC;background:#F2EDE6;font-size:16px;color:#1A1410;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;transition:all 0.2s;" onmouseenter="this.style.background='#1A1410';this.style.color='#F2EDE6';" onmouseleave="this.style.background='#F2EDE6';this.style.color='#1A1410';">+</button>
            </div>
          </div>

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
          <h2 style="font-size:24px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:4px;">Payment</h2>
          <p style="font-size:12px;color:#6B5B4E;font-weight:300;margin-bottom:22px;">Complete your payment to confirm the booking.</p>
          <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>
          ${u.paymentMode==="razorpay"?dn():cn()}
        </div>

        <!-- STEP 3: CONFIRMATION -->
        <div id="panel3" style="display:none;">
          ${pn()}
        </div>

      </div>

      <!-- SIDEBAR -->
      <div class="page-sidebar" style="padding:32px 0 40px;">
        <div class="summary-card" style="position:sticky;top:80px;">
          <div style="height:80px;background:#E8E0D5;border-radius:8px;margin-bottom:14px;overflow:hidden;display:flex;align-items:center;justify-content:center;">
            ${u.coverImage?`<img src="${u.coverImage}" alt="${u.title}" style="width:100%;height:100%;object-fit:cover;">`:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'}
          </div>
          <span class="badge badge-category" style="margin-bottom:6px;display:inline-block;">${u.category}</span>
          <p style="font-size:13px;font-weight:500;color:#1A1410;margin-bottom:4px;">${u.title}</p>
          <p style="font-size:10px;color:#6B5B4E;line-height:1.6;margin-bottom:14px;">
            ${L(u.date)} · ${H(u.time)}<br>
            ${u.outlet}
          </p>
          <div style="height:0.5px;background:#E8E0D5;margin-bottom:12px;"></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Price per ticket</span>
            <span style="font-size:11px;color:#1A1410;">${A(u.price)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Tickets</span>
            <span style="font-size:11px;color:#1A1410;" id="sum-tickets">1</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Host</span>
            <span style="font-size:11px;color:#1A1410;">${u.hostName}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;padding-top:12px;border-top:0.5px solid #E8E0D5;">
            <span style="font-size:12px;font-weight:500;color:#1A1410;">Total</span>
            <span style="font-family:'DM Mono',monospace;font-size:20px;color:#7C6F3E;" id="sum-total">${A(u.price)}</span>
          </div>
        </div>
      </div>

    </div>
  `}function dn(){const t=u.price;return`
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:20px;margin-bottom:16px;">

      <!-- Header -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:36px;height:36px;border-radius:8px;background:#0F1F3D;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="18" height="12" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="4" fill="#0F1F3D"/><path d="M7 8h6l-2 8H5L7 8z" fill="#2EB8E6"/><path d="M13 8h6l-2 8h-6l2-8z" fill="#fff" opacity=".6"/></svg>
        </div>
        <div>
          <p style="font-size:12px;font-weight:500;color:#1A1410;">Secure Checkout</p>
          <p style="font-size:10px;color:#6B5B4E;">Cards · UPI · Net Banking · Wallets</p>
        </div>
        <div style="margin-left:auto;">
          <img src="https://razorpay.com/favicon.ico" style="width:16px;height:16px;opacity:0.4;" onerror="this.style.display='none'">
        </div>
      </div>

      <div style="height:0.5px;background:#F2EDE6;margin-bottom:14px;"></div>

      <!-- Amount line -->
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;">
        <span style="font-size:11px;color:#6B5B4E;" id="rp-ticket-line">1 ticket × ${A(u.price)}</span>
        <span style="font-family:'DM Mono',monospace;font-size:15px;color:#7C6F3E;font-weight:500;" id="rp-total">${A(t)}</span>
      </div>
      <p style="font-size:10px;color:#B8A99A;margin-bottom:0;">${u.title}</p>
    </div>

    <!-- Pay button -->
    <button id="pay-btn" style="display:block;width:100%;padding:13px;border-radius:6px;border:none;background:#1A1410;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#F2EDE6;letter-spacing:0.02em;cursor:pointer;transition:opacity 0.2s;display:flex;align-items:center;justify-content:center;gap:8px;"
      onmouseenter="this.style.opacity='0.85'" onmouseleave="this.style.opacity='1'">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <span id="pay-btn-label">Pay ${A(t)} securely</span>
    </button>
    <p style="font-size:10px;color:#B8A99A;text-align:center;margin-top:8px;line-height:1.6;">
      Powered by Razorpay · 256-bit SSL encryption
    </p>
  `}function cn(){const t=u.price;return`
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:24px;margin-bottom:16px;">
      <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:16px;">Scan & Pay via any UPI app</p>

      <!-- QR canvas -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;">
        <div style="padding:12px;background:#fff;border:0.5px solid #E8E0D5;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;">
          <canvas id="qr-canvas" style="display:block;border-radius:6px;"></canvas>
        </div>
      </div>

      <!-- UPI ID -->
      <div style="text-align:center;margin-bottom:12px;">
        <p style="font-size:10px;color:#B8A99A;margin-bottom:2px;">UPI ID</p>
        <p style="font-family:'DM Mono',monospace;font-size:13px;color:#1A1410;letter-spacing:0.02em;">9841400070@hdfc</p>
      </div>

      <div style="height:0.5px;background:#F2EDE6;margin:14px 0;"></div>

      <!-- Amount -->
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:11px;color:#6B5B4E;" id="qr-ticket-line">1 ticket</span>
        <span style="font-family:'DM Mono',monospace;font-size:16px;color:#7C6F3E;font-weight:500;" id="qr-total">${A(t)}</span>
      </div>

      <!-- Steps -->
      <div style="margin-top:14px;padding:12px;background:#F9F6F2;border-radius:8px;">
        ${["Open GPay / PhonePe / any UPI app","Scan the QR code above",`Pay exactly <strong>${A(t)}</strong>`,"Tap the button below to confirm"].map((e,n)=>`
          <div style="display:flex;align-items:flex-start;gap:10px;${n<3?"margin-bottom:8px;":""}">
            <div style="width:16px;height:16px;border-radius:50%;background:#7C6F3E;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">
              <span style="font-size:8px;color:#F2EDE6;font-weight:600;">${n+1}</span>
            </div>
            <p style="font-size:11px;color:#6B5B4E;line-height:1.5;" id="${n===2?"qr-step-amount":""}">${e}</p>
          </div>
        `).join("")}
      </div>
    </div>

    <button id="pay-btn" style="display:block;width:100%;padding:13px;border-radius:6px;border:none;background:#1A1410;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#F2EDE6;letter-spacing:0.02em;cursor:pointer;transition:opacity 0.2s;display:flex;align-items:center;justify-content:center;gap:8px;"
      onmouseenter="this.style.opacity='0.85'" onmouseleave="this.style.opacity='1'">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span>I've paid — Confirm my booking</span>
    </button>
    <p style="font-size:10px;color:#B8A99A;text-align:center;margin-top:8px;line-height:1.6;">
      Only tap after you've completed the UPI payment.
    </p>
  `}function pn(){return`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 0;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:26px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:8px;">You're booked!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.7;margin-bottom:24px;max-width:380px;">
        Your slot for <strong style="color:#1A1410;">${u.title}</strong> is confirmed.
        See you at ${u.outlet} on ${L(u.date)} at ${H(u.time)}.
      </p>
      <div class="summary-card" style="width:100%;max-width:440px;margin-bottom:22px;text-align:left;" id="confirm-card"></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;" id="confirm-actions"></div>
    </div>
  `}async function Vt(){const t=document.getElementById("qr-canvas");if(!t)return;const o=`upi://pay?pa=9841400070@hdfc&pn=Heebee%20Coffee&am=${E*u.price}&tn=${encodeURIComponent(u.title)}&cu=INR`;try{await J.toCanvas(t,o,{width:180,margin:1,color:{dark:"#1A1410",light:"#FFFFFF"}})}catch(i){console.error("QR generation error:",i)}}function un(){return new Promise(t=>{if(window.Razorpay){t(!0);return}const e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.onload=()=>t(!0),e.onerror=()=>t(!1),document.body.appendChild(e)})}async function fn(t){const e=document.getElementById("pay-btn"),n=document.getElementById("pay-btn-label");if(n&&(n.textContent="Loading payment…"),e&&(e.disabled=!0),!await un()){alert("Could not load Razorpay. Check your internet connection and try again."),n&&(n.textContent=`Pay ${A(E*u.price)} securely`),e&&(e.disabled=!1),D=!1;return}const i=E*u.price,s={key:"rzp_live_yb7VUqLv166ETK",amount:i*100,currency:"INR",name:"Heebee Coffee",description:`${u.title} · ${E} ticket${E>1?"s":""}`,image:"https://heebee-slack.github.io/heebee-sessions/assets/logo.png",prefill:{name:t[0].name,email:t[0].email,contact:t[0].phone.replace(/\D/g,"")},notes:{workshop:u.title,date:u.date,outlet:u.outlet,tickets:String(E)},theme:{color:"#7C6F3E"},modal:{ondismiss:()=>{D=!1,n&&(n.textContent=`Pay ${A(i)} securely`),e&&(e.disabled=!1)}},handler:async l=>{try{const r=zt(),d={workshopId:u.id,workshopTitle:u.title,workshopDate:u.date,workshopTime:u.time,outlet:u.outlet,hostName:u.hostName,tickets:E,totalAmount:i,paymentMode:"razorpay",paymentId:l.razorpay_payment_id,status:"paid",bookingId:r,attendees:t,primaryAttendee:t[0]},c=await Mt(d);kt(3),Gt(c,i,r,l.razorpay_payment_id),window.scrollTo({top:0,behavior:"smooth"})}catch(r){console.error("Booking save error:",r),alert("Payment was received but booking save failed. Please WhatsApp us with your payment ID: "+l.razorpay_payment_id)}D=!1}};new window.Razorpay(s).open()}async function gn(t){const e=document.getElementById("pay-btn");e&&(e.disabled=!0,e.style.opacity="0.6");const n=E*u.price;try{const o=zt(),i={workshopId:u.id,workshopTitle:u.title,workshopDate:u.date,workshopTime:u.time,outlet:u.outlet,hostName:u.hostName,tickets:E,totalAmount:n,paymentMode:"qr",status:"pending",bookingId:o,attendees:t,primaryAttendee:t[0]},s=await Mt(i);kt(3),Gt(s,n,o,null),window.scrollTo({top:0,behavior:"smooth"})}catch(o){console.error(o),alert("Something went wrong. Please try again."),e&&(e.disabled=!1,e.style.opacity="1")}D=!1}function hn(t,e){return`
    <div class="attendee-block">
      <div class="attendee-label">
        <div class="attendee-num">${t}</div>
        Attendee ${t}${e===1?" (you)":""}
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Full name <span class="req">*</span></label>
          <input class="field-input attendee-name" data-idx="${t}" type="text" placeholder="Full name" required>
        </div>
        <div class="field">
          <label class="field-label">Phone number <span class="req">*</span></label>
          <input class="field-input attendee-phone" data-idx="${t}" type="tel" placeholder="+91 XXXXX XXXXX" required>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Email address <span class="req">*</span></label>
        <input class="field-input attendee-email" data-idx="${t}" type="email" placeholder="name@email.com" required>
      </div>
      <div class="field" style="margin-bottom:0;">
        <label class="field-label">Instagram handle <span class="opt">optional</span></label>
        <input class="field-input attendee-instagram" data-idx="${t}" type="text" placeholder="@handle">
      </div>
    </div>
  `}function ut(){const t=document.getElementById("attendee-forms");t&&(t.innerHTML=Array.from({length:E},(e,n)=>hn(n+1,E)).join(""))}function It(){var e,n,o,i,s,a,l,r;const t=[];for(let d=1;d<=E;d++){const c=(n=(e=document.querySelector(`.attendee-name[data-idx="${d}"]`))==null?void 0:e.value)==null?void 0:n.trim(),v=(i=(o=document.querySelector(`.attendee-phone[data-idx="${d}"]`))==null?void 0:o.value)==null?void 0:i.trim(),g=(a=(s=document.querySelector(`.attendee-email[data-idx="${d}"]`))==null?void 0:s.value)==null?void 0:a.trim(),p=(r=(l=document.querySelector(`.attendee-instagram[data-idx="${d}"]`))==null?void 0:l.value)==null?void 0:r.trim();if(!c||!v||!g)return null;t.push({name:c,phone:v,email:g,instagram:p})}return t}function St(){const t=E*u.price,e=A(t),n=o=>document.getElementById(o);n("tcount")&&(n("tcount").textContent=E),n("tcount-lbl")&&(n("tcount-lbl").textContent=E),n("sum-tickets")&&(n("sum-tickets").textContent=E),n("sum-total")&&(n("sum-total").textContent=e),n("rp-ticket-line")&&(n("rp-ticket-line").textContent=`${E} ticket${E>1?"s":""} × ${A(u.price)}`),n("rp-total")&&(n("rp-total").textContent=e),n("pay-btn-label")&&(n("pay-btn-label").textContent=`Pay ${e} securely`),n("qr-total")&&(n("qr-total").textContent=e),n("qr-ticket-line")&&(n("qr-ticket-line").textContent=`${E} ticket${E>1?"s":""}`),n("qr-step-amount")&&(n("qr-step-amount").innerHTML=`Pay exactly <strong>${e}</strong>`),Et===2&&u.paymentMode!=="razorpay"&&Vt()}function kt(t){[1,2,3].forEach(e=>{const n=document.getElementById(`panel${e}`),o=document.getElementById(`sn${e}`),i=document.getElementById(`sl${e}`);n&&(n.style.display=e===t?"block":"none"),o&&(o.className=`step-num ${e<t?"done":e===t?"active":"idle"}`,o.innerHTML=e<t?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>':e),i&&(i.className=`step-label ${e===t?"active":""}`)}),Et=t,t===2&&u.paymentMode!=="razorpay"&&Vt()}function Gt(t,e,n,o){const i=document.getElementById("confirm-card"),s=document.getElementById("confirm-actions"),a=u,l=!!o;if(i&&(i.innerHTML=`
      <div class="summary-row"><span class="summary-key">Workshop</span><span class="summary-val">${a.title}</span></div>
      <div class="summary-row"><span class="summary-key">Date & Time</span><span class="summary-val">${L(a.date)} · ${H(a.time)}</span></div>
      <div class="summary-row"><span class="summary-key">Venue</span><span class="summary-val">${a.outlet}</span></div>
      <div class="summary-row"><span class="summary-key">Tickets</span><span class="summary-val">${E} slot${E>1?"s":""}</span></div>
      <div class="summary-row"><span class="summary-key">Amount</span><span class="summary-val mono">${A(e)}</span></div>
      <div class="summary-row"><span class="summary-key">Booking ID</span><span class="summary-val id">${n}</span></div>
      ${l?'<div class="summary-row"><span class="summary-key">Payment</span><span class="summary-val" style="color:#2A5A3A;font-weight:500;">✓ Paid</span></div>':'<div class="summary-row"><span class="summary-key">Payment</span><span class="summary-val" style="color:#7A5A10;">Pending verification</span></div>'}
    `),s){const r=encodeURIComponent(`✅ Booking Confirmed — Heebee Sessions

Workshop: ${a.title}
Date: ${L(a.date)} · ${H(a.time)}
Venue: ${a.outlet}
Tickets: ${E}
Amount: ${A(e)}
Booking ID: ${n}${o?`
Payment ID: `+o:""}

See you there! ☕`),d="917814498149",c=`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(a.title+" — Heebee Sessions")}&dates=${a.date.replace(/-/g,"")}T${a.time.replace(":","")}00/${a.date.replace(/-/g,"")}T${a.time.replace(":","")}00&location=${encodeURIComponent(a.outlet)}`;s.innerHTML=`
      <a href="https://wa.me/${d}?text=${r}" target="_blank" class="btn-wa">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L0 24l6.335-1.503A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.373l-.361-.214-3.741.981.999-3.648-.235-.374A9.859 9.859 0 0 1 2.118 12C2.118 6.535 6.535 2.118 12 2.118c5.464 0 9.882 4.417 9.882 9.882 0 5.464-4.418 9.882-9.882 9.882z"/></svg>
        WhatsApp confirmation
      </a>
      <a href="${c}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;font-weight:500;color:#1A1410;cursor:pointer;text-decoration:none;">
        + Add to calendar
      </a>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;color:#6B5B4E;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    `}}function mn(t){var e,n,o;ut(),(e=document.getElementById("btn-plus"))==null||e.addEventListener("click",()=>{E<u.slotsRemaining&&(E++,St(),ut())}),(n=document.getElementById("btn-minus"))==null||n.addEventListener("click",()=>{E>1&&(E--,St(),ut())}),(o=document.getElementById("to-step2"))==null||o.addEventListener("click",()=>{if(!It()){alert("Please fill in all required fields for each attendee.");return}kt(2),window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("click",async i=>{if(!i.target.closest("#pay-btn")||D)return;D=!0;const s=It();if(!s){D=!1;return}u.paymentMode==="razorpay"?await fn(s):await gn(s)})}async function yn(t,e){if(!e.bookingId){Y("/");return}t.innerHTML=`
    ${G()}
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
          <span style="font-family:'DM Mono',monospace;font-size:11px;color:#6B5B4E;">${e.bookingId}</span>
        </div>
        ${e.workshop?`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #F2EDE6;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Workshop</span><span style="font-size:12px;color:#1A1410;">${decodeURIComponent(e.workshop)}</span></div>`:""}
        ${e.amount?`<div style="display:flex;justify-content:space-between;padding:7px 0;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Amount</span><span style="font-family:'DM Mono',monospace;font-size:13px;color:#7C6F3E;">₹ ${e.amount}</span></div>`:""}
      </div>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:13px;color:#1A1410;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    </div>
    ${st()}
  `}async function xn(t){t.innerHTML=bn(),vn()}function bn(){return`
    ${G()}

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
          ${["Submit your request with your idea and background.","We review and get back within 3–5 working days.","If it's a fit, we discuss date, terms and logistics.","We publish the workshop and handle all bookings.","You show up and host. We take care of the rest."].map(t=>`
            <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;position:relative;">
              <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
              <p style="font-size:11px;color:#6B5B4E;line-height:1.6;font-weight:300;">${t}</p>
            </div>
          `).join("")}
        </div>

        <!-- OUTLETS -->
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:16px;">
          <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Our outlets</p>
          ${[{name:"Heebee SHB",loc:"Sarabha Nagar, Ludhiana · 120 seats"},{name:"Heebee GHB",loc:"Ghumar Mandi, Ludhiana · 20 seats"},{name:"Heebee JLD",loc:"Model Town, Jalandhar · 60 seats"}].map(t=>`
            <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:0.5px solid #F2EDE6;">
              <div style="width:8px;height:8px;border-radius:50%;background:#E8E0D5;border:0.5px solid #7C6F3E;flex-shrink:0;"></div>
              <div>
                <p style="font-size:12px;color:#1A1410;font-weight:400;">${t.name}</p>
                <p style="font-size:10px;color:#6B5B4E;">${t.loc}</p>
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

    ${st()}
  `}function vn(t){var e;(e=document.getElementById("submit-btn"))==null||e.addEventListener("click",async()=>{var a,l,r,d,c,v,g,p,y,x,C,m,b,h,f,w,k,B,I,T;const n={name:(l=(a=document.getElementById("f-name"))==null?void 0:a.value)==null?void 0:l.trim(),phone:(d=(r=document.getElementById("f-phone"))==null?void 0:r.value)==null?void 0:d.trim(),email:(v=(c=document.getElementById("f-email"))==null?void 0:c.value)==null?void 0:v.trim(),instagram:(p=(g=document.getElementById("f-instagram"))==null?void 0:g.value)==null?void 0:p.trim(),background:(x=(y=document.getElementById("f-background"))==null?void 0:y.value)==null?void 0:x.trim(),topic:(m=(C=document.getElementById("f-topic"))==null?void 0:C.value)==null?void 0:m.trim(),description:(h=(b=document.getElementById("f-description"))==null?void 0:b.value)==null?void 0:h.trim(),category:(f=document.getElementById("f-category"))==null?void 0:f.value,price:(w=document.getElementById("f-price"))==null?void 0:w.value,outlet:(k=document.getElementById("f-outlet"))==null?void 0:k.value,date:(B=document.getElementById("f-date"))==null?void 0:B.value,notes:(T=(I=document.getElementById("f-notes"))==null?void 0:I.value)==null?void 0:T.trim()};if(["name","phone","email","background","topic","description","category","price","outlet"].filter($=>!n[$]).length){alert("Please fill in all required fields.");return}const s=document.getElementById("submit-btn");s.querySelector(".lbl").textContent="Submitting...",s.disabled=!0;try{await oe(n),document.getElementById("form-col").style.display="none";const $=document.getElementById("success-screen");$.style.display="flex"}catch($){console.error($),alert("Something went wrong. Please try again."),s.querySelector(".lbl").textContent="Submit Host Request →",s.disabled=!1}})}const N=document.getElementById("app"),wn=document.getElementById("loader");async function Xt(){const{path:t,params:e}=ie();switch(N.innerHTML="",t){case"/workshop":await ge(N,e.id);break;case"/book":await rn(N,e.id);break;case"/confirmation":await yn(N,e);break;case"/host":await xn(N);break;default:await re(N)}requestAnimationFrame(()=>{se(),ae()})}function G(t=""){return`
    <nav class="nav">
      <div class="nav-logo" onclick="navigate('/')" style="cursor:pointer;">Heebee Coffee</div>
      <div class="nav-links">
        <span class="nav-link ${t==="sessions"?"active":""}" onclick="navigate('/')">Sessions</span>
        <span class="nav-link" onclick="window.open('https://instagram.com/heebeecoffee','_blank')">Instagram</span>
        <span class="nav-link" onclick="navigate('/')">Outlets</span>
      </div>
      <button class="btn-primary btn-sm" onclick="navigate('/host')">
        <div class="ink"></div><span>Host a Session</span>
      </button>
    </nav>`}function st(){return`
    <footer class="footer">
      <div class="footer-logo">Heebee Coffee</div>
      <div class="footer-links">
        <span class="footer-link" onclick="navigate('/')">Sessions</span>
        <span class="footer-link" onclick="navigate('/host')">Host with us</span>
        <span class="footer-link" onclick="window.open('https://instagram.com/heebeecoffee','_blank')">@ Instagram</span>
      </div>
      <div style="font-size:10px;color:#6B5B4E;">Sarabha Nagar · Ghumar Mandi · Model Town Jalandhar</div>
    </footer>`}window.navigate=Y;window.addEventListener("hashchange",Xt);window.addEventListener("load",async()=>{await Xt(),setTimeout(()=>wn.classList.add("hidden"),1800)});
