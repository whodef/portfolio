import{m as i}from"./glowCursor-CBY4duUr.js";import{m as n,a as l,b as o,c as r,d,e as c,f as v,g as p}from"./footer-BH-GojY2.js";const s={eyebrow:"PROJECT 02 — HIGH-LOAD REAL-TIME PLATFORM",title:"Sports",titleSub:"Pari",role:"Frontend Developer",desc:"A real-time data platform processing live event feeds for thousands of concurrent users. WebSocket-driven UI, GraphQL API, KYC verification flow, and a full personal cabinet — built for performance and compliance.",liveHref:"#"},t={name:"M. Voronov",status:"VERIFIED",balance:"12 450.00 ₽"},m=[{league:"UEFA Champions League",match:"Real Madrid vs Bayern",time:"LIVE · 67'",val:"1.85",delta:"+0.12",hot:!0},{league:"Premier League",match:"Arsenal vs Chelsea",time:"18:30",val:"2.10",delta:"-0.05",hot:!1},{league:"NBA",match:"Lakers vs Celtics",time:"21:00",val:"1.65",delta:"+0.08",hot:!1}],u=[{label:"Balance topped up",amount:"+5 000 ₽",status:"success",time:"14:31"},{label:"Bet settled — win",amount:"+2 340 ₽",status:"success",time:"13:55"},{label:"Bet placed",amount:"−500 ₽",status:"pending",time:"13:40"}],h=`
<section class="sp-hero">
  <div class="sp-bg"></div>

  <div class="sp-text">
    <div class="sp-eyebrow">${s.eyebrow}</div>
    <h1 class="sp-title">${s.title}<span class="sp-sub">${s.titleSub}</span></h1>
    <div class="sp-role">${s.role}</div>
    <p class="sp-desc">${s.desc}</p>
    <div class="sp-ctas">
      <a href="${s.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="sp-visual">
    <div class="sp-visual-inner">
      <div class="sp-app">

        <div class="sp-topbar">
          <div class="sp-dot r"></div>
          <div class="sp-dot y"></div>
          <div class="sp-dot g"></div>
          <div class="sp-urlbar"><span>sportspari</span>.io/cabinet</div>
          <div class="sp-ws-pill">● WS</div>
        </div>

        <div class="sp-content">

          <!-- User header -->
          <div class="sp-user-header">
            <div class="sp-avatar">MV</div>
            <div class="sp-user-info">
              <div class="sp-user-name">${t.name}</div>
              <div class="sp-user-status">${t.status} · KYC PASSED</div>
            </div>
            <div class="sp-balance-block">
              <div class="sp-balance-lbl">Balance</div>
              <div class="sp-balance-val">${t.balance}</div>
            </div>
          </div>

          <!-- Live events feed -->
          <div class="sp-section-lbl">
            <span class="sp-live-dot"></span>
            LIVE EVENTS
          </div>
          <div class="sp-events">
            ${m.map(e=>`
              <div class="sp-event-row${e.hot?" hot":""}">
                <div class="sp-event-meta">
                  <div class="sp-event-league">${e.league}</div>
                  <div class="sp-event-match">${e.match}</div>
                </div>
                <div class="sp-event-time${e.time.startsWith("LIVE")?" live":""}">${e.time}</div>
                <div class="sp-odds-block">
                  <div class="sp-odds-val">${e.val}</div>
                  <div class="sp-odds-delta${e.delta.startsWith("+")?" up":" dn"}">${e.delta}</div>
                </div>
              </div>`).join("")}
          </div>

          <!-- Transaction feed -->
          <div class="sp-section-lbl">RECENT TRANSACTIONS</div>
          <div class="sp-txns">
            ${u.map(e=>`
              <div class="sp-txn-row">
                <div class="sp-txn-label">${e.label}</div>
                <div class="sp-txn-time">${e.time}</div>
                <div class="sp-txn-amount ${e.status}">${e.amount}</div>
              </div>`).join("")}
          </div>

        </div>
      </div>

      <!-- Floating WS badge -->
      <div class="sp-badge">
        <div class="sp-badge-dot"></div>
        <div>
          <div class="sp-badge-title">WebSocket · Live</div>
          <div class="sp-badge-sub">~12ms latency</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sp-scroll">
    <div class="sp-scroll-line"></div>
    <span class="sp-scroll-label">SCROLL DOWN</span>
  </div>
</section>`;function g(e){e.innerHTML=h}history.scrollRestoration="manual";window.scrollTo(0,0);const b=[{val:"80+",desc:"External service integrations unified under a single frontend architecture (SDKs, iframes, APIs)",source:"// INTEGRATIONS"},{val:"900+",desc:"Interactive content units delivered through a consistent UI layer with dynamic rendering",source:"// CATALOG"},{val:"KYC",desc:"End-to-end identity verification flow: document upload, async processing, and status lifecycle",source:"// COMPLIANCE"},{val:"Live",desc:"Production platform with continuous delivery, monitoring, and real user traffic",source:"// OPS"}],f={paragraphs:["A high-load real-time entertainment platform operating in a regulated market, aggregating content from 80+ external providers into a unified frontend experience. The system supports multiple interactive verticals, all delivered through a single Next.js application.","I worked as a Frontend Developer and owned the personal cabinet domain end-to-end: authentication, identity verification (KYC), transaction history, balance management, and account settings. The system required robust state management across asynchronous flows and role-based access control.","A major technical challenge was integrating multiple third-party providers with completely different launch protocols (iframe-based, SDK-based, tokenized sessions). I built a unified abstraction layer that ensured consistent UX, minimized layout shifts, and handled edge cases across providers.","The real-time layer required WebSocket integration to display live data streams and dynamic state updates. I implemented UI synchronization mechanisms to keep data consistent across sessions and prevent race conditions in fast-changing states."],meta:[{key:"ROLE",val:"Frontend Developer",green:!0},{key:"MARKET",val:"Regulated international market"},{key:"TYPE",val:"Real-time platform"},{key:"PLATFORM",val:"Web"},{key:"STACK",val:"Next.js · TypeScript · Tailwind · WebSocket · GraphQL"},{key:"FOCUS",val:"Cabinet · KYC · Real-time UI · Integrations"},{key:"STATUS",val:"Live · production",green:!0},{key:"SITE",val:"Available on request"}]},T=[{initials:"TS",name:"Tatiana Seliuk",role:"Frontend Developer. Personal cabinet, KYC flow, third-party integrations, real-time UI, production support",tags:["Next.js","TypeScript","Tailwind","WebSocket"]},{initials:"—",name:"Backend Team",role:"API layer, integrations, financial systems, data processing",tags:["Node.js","PostgreSQL","Redis"]},{initials:"—",name:"Product Manager",role:"Requirements, delivery, stakeholder coordination",tags:["PM","Roadmap"]},{initials:"—",name:"QA Engineer",role:"End-to-end testing, regression, edge case validation",tags:["Testing","QA"]}],y={paragraphs:["The frontend architecture is based on Next.js with TypeScript and Tailwind. SSR is used for public-facing parts, while client-side rendering powers authenticated areas with complex state and interactions.","One of the most challenging parts was building a unified integration layer for third-party services with inconsistent APIs and rendering models. The solution ensured predictable UI behavior, minimized layout shifts, and improved performance across the platform.","Real-time functionality is powered by WebSocket connections, requiring careful synchronization of UI state with rapidly changing data streams. Special attention was given to handling concurrency, fallback states, and reconnection logic."],groups:[{label:"FRONTEND",pills:[{name:"Next.js",hero:!0},{name:"TypeScript",hero:!0},{name:"Tailwind",hero:!0},{name:"SSR"},{name:"CSR"}]},{label:"REAL-TIME & API",pills:[{name:"WebSocket",hero:!0},{name:"GraphQL",hero:!0},{name:"REST API"},{name:"SDK / iframe integration"}]},{label:"AUTH & DATA",pills:[{name:"KYC Flow",hero:!0},{name:"Authentication"},{name:"Role-based access"},{name:"Async state flows"}]},{label:"INFRA & TOOLS",pills:[{name:"Git"},{name:"Docker"},{name:"CI/CD"}]}]},S={prev:{label:"The Rink",href:"../therink/"},next:{label:"Lubimovka Art",href:"../lubimovka/"}};i();n();const E=document.getElementById("app"),a=()=>{const e=document.createElement("div");return E.appendChild(e),e};l(a(),{counter:"03 / 09",homeHref:"/portfolio/"});g(a());o(a(),b);r(a(),f);d(a(),T);c(a(),y);v(a(),S);p(a());requestAnimationFrame(()=>window.scrollTo(0,0));
