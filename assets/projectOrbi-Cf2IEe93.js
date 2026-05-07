import{m}from"./glowCursor-CBY4duUr.js";import{m as b,a as h,b as v,c as g,d as p,e as f,f as y,g as T}from"./footer-BmA9qXCm.js";const i={eyebrow:"PROJECT 05 — VOLUNTEER · NON-PROFIT PLATFORM",title:"ORBI",titleSub:" Fund",role:"Fullstack Developer — volunteer",desc:"A Telegram-based service platform for ORBI — Russia's leading stroke awareness foundation. I designed and deployed the email notification microservice: user-facing transactional emails and internal alerts on bot failures, built on Python with Celery, RabbitMQ, and Yandex Business Mail over SMTP/TLS.",liveHref:"https://orbifond.ru"},o=150,u=54,s=[{id:"tg",label:"Telegram Bot",sub:"aiogram",x:20,y:80},{id:"api",label:"Bot API Service",sub:"FastAPI · Python",x:240,y:80},{id:"rmq",label:"RabbitMQ",sub:"Message Broker",x:240,y:210},{id:"cel",label:"Celery Worker",sub:"Task Queue",x:240,y:340},{id:"email",label:"Email Service",sub:"SMTP · TLS",x:480,y:210,highlight:!0},{id:"smtp",label:"Yandex Mail",sub:"Business · SMTP",x:480,y:340,highlight:!0}];function c(e){return s.find(a=>a.id===e).x+o/2}function d(e){return s.find(a=>a.id===e).y+u/2}const x=[{from:"tg",to:"api",label:"user action"},{from:"api",to:"rmq",label:"publish task"},{from:"rmq",to:"cel",label:"consume"},{from:"cel",to:"email",label:"send job"},{from:"email",to:"smtp",label:"SMTP / TLS"}],S=x.map(e=>{const a=c(e.from),r=d(e.from),n=c(e.to),l=d(e.to);return{x1:a,y1:r,x2:n,y2:l,label:e.label,lx:(a+n)/2,ly:(r+l)/2-6}});function w(e,a){return`
    <g style="animation-delay:${a*.1}s" class="arch-node${e.highlight?" highlight":""}">
      <rect x="${e.x}" y="${e.y}" width="${o}" height="${u}" rx="6"/>
      <text class="arch-node-label" x="${e.x+o/2}" y="${e.y+24}">${e.label}</text>
      <text class="arch-node-sub"   x="${e.x+o/2}" y="${e.y+40}">${e.sub}</text>
    </g>`}function k(e,a){return`
    <line class="arch-edge" x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}"
      marker-end="url(#arrow)" style="animation-delay:${.3+a*.15}s"/>
    <text class="arch-edge-label" x="${e.lx}" y="${e.ly}">${e.label}</text>`}const R=`
<section class="ob-hero">
  <div class="ob-bg"></div>

  <div class="ob-text">
    <div class="ob-eyebrow">${i.eyebrow}</div>
    <h1 class="ob-title">${i.title}<span class="ob-sub">${i.titleSub}</span></h1>
    <div class="ob-role">${i.role}</div>
    <p class="ob-desc">${i.desc}</p>
    <div class="ob-ctas">
      <a href="${i.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT ORBI FUND →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="ob-visual">
    <div class="ob-visual-inner">
      <div class="ob-app">

        <div class="ob-topbar">
          <div class="ob-dot r"></div>
          <div class="ob-dot y"></div>
          <div class="ob-dot g"></div>
          <span class="ob-topbar-label">SYSTEM ARCHITECTURE</span>
          <div class="ob-status-pill">● RUNNING</div>
        </div>

        <div class="ob-diagram-wrap">
          <svg class="ob-diagram" viewBox="0 0 660 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8"
                refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,255,136,0.5)"/>
              </marker>
            </defs>

            <!-- Column labels -->
            <text class="arch-section-label" x="20"  y="55">TRANSPORT</text>
            <text class="arch-section-label" x="240" y="55">SERVICES</text>
            <text class="arch-section-label" x="480" y="55">DELIVERY</text>

            <!-- Dividers -->
            <line class="arch-divider" x1="225" y1="60" x2="225" y2="410"/>
            <line class="arch-divider" x1="465" y1="60" x2="465" y2="410"/>

            <!-- Edges -->
            ${S.map(k).join("")}

            <!-- Nodes -->
            ${s.map(w).join("")}

            <!-- My work label -->
            <rect class="arch-my-badge" x="476" y="300" width="156" height="26" rx="4"/>
            <text class="arch-my-label" x="554" y="317">★ my microservice</text>
          </svg>
        </div>

        <!-- Log strip -->
        <div class="ob-log">
          <div class="ob-log-line success">[14:31:02] email sent → user@example.com · welcome</div>
          <div class="ob-log-line success">[14:31:05] email sent → ops@orbifond.ru · bot health ok</div>
          <div class="ob-log-line warn">   [14:32:11] bot error detected → alert dispatched</div>
          <div class="ob-log-line success">[14:32:12] email sent → ops@orbifond.ru · bot failure</div>
        </div>

      </div>

      <!-- Floating badge -->
      <div class="ob-badge">
        <div class="ob-badge-icon">⚙</div>
        <div>
          <div class="ob-badge-title">Celery · RabbitMQ</div>
          <div class="ob-badge-sub">async task queue</div>
        </div>
      </div>
    </div>
  </div>

  <div class="ob-scroll">
    <div class="ob-scroll-line"></div>
    <span class="ob-scroll-label">SCROLL DOWN</span>
  </div>
</section>`;function E(e){e.innerHTML=R}history.scrollRestoration="manual";window.scrollTo(0,0);const M=[{val:"2",desc:"Email types handled — user-facing transactional notifications and internal ops alerts on bot failures",source:"// SCOPE"},{val:"TLS",desc:"Configured secure SMTP transport with TLS — set up Yandex Business Mail end-to-end for production use",source:"// SECURITY"},{val:"Async",desc:"Fully asynchronous delivery via Celery task queue and RabbitMQ broker — emails never block the main flow",source:"// ARCH"},{val:"3–4mo",desc:"Volunteer engagement duration — collaborative delivery with a team of 5 under a technical lead",source:"// TIMELINE"}],P={paragraphs:["ORBI Fund is Russia's first dedicated stroke awareness foundation — running a national hotline, patient support programs, and medical staff training across dozens of regions. As part of a volunteer developer initiative, successive teams contributed to building a Telegram-based service platform for the foundation's operations.","I joined as a volunteer fullstack developer and took ownership of the email notification microservice — one of the core infrastructure components the bot relied on to communicate with both users and the internal ops team.","The microservice handles two distinct flows: transactional emails to end users (confirmations, status updates) and internal alert emails dispatched automatically when the bot encounters a runtime error. This meant the service had to be both reliable for user communication and fast enough for real-time failure alerting.","A meaningful part of the work was infrastructure configuration: setting up Yandex Business Mail as the SMTP provider, working through TLS certificate configuration, and ensuring the connection was stable in production. Email delivery infrastructure is often taken for granted — until you have to set it up correctly from scratch."],meta:[{key:"ROLE",val:"Fullstack Developer — volunteer",green:!0},{key:"CLIENT",val:"ORBI Fund · Non-profit"},{key:"TYPE",val:"Telegram Bot Infrastructure"},{key:"OWNED",val:"Email Notification Microservice",green:!0},{key:"STACK",val:"Python · Celery · RabbitMQ · SMTP/TLS"},{key:"DURATION",val:"3–4 months"},{key:"SITE",val:"orbifond.ru →",link:"https://orbifond.ru"}]},L=[{initials:"TS",name:"Tatiana Seliuk",role:"Volunteer Fullstack Developer. Email notification microservice — architecture, implementation, SMTP/TLS configuration, Yandex Business Mail setup, Celery + RabbitMQ integration",tags:["Python","Celery","RabbitMQ","SMTP","TLS"]},{initials:"—",name:"Team Lead",role:"Technical direction, architecture decisions, code review, and coordination across volunteer contributors",tags:["Lead","Review","Architecture"]},{initials:"—",name:"Backend Developers (×3)",role:"Telegram bot core, API services, database layer, and other microservice components",tags:["Python","aiogram","FastAPI","PostgreSQL"]},{initials:"—",name:"Previous volunteer teams",role:"Earlier contributors who built the foundational bot infrastructure this work extended",tags:["Python","Telegram","Infrastructure"]}],A={paragraphs:["The email microservice is written in Python and integrated into the broader bot platform via RabbitMQ as the message broker. When the bot API service needs to send an email — whether triggered by a user action or a runtime error — it publishes a task to a RabbitMQ queue. A Celery worker consumes the task asynchronously and hands it off to the email service, which handles the actual SMTP delivery. This architecture keeps email sending fully decoupled from the main request flow: a slow or failing mail server never affects bot responsiveness.","The delivery layer uses Python's smtplib with explicit TLS configuration — STARTTLS negotiation, certificate verification, and connection pooling. Yandex Business Mail was configured as the SMTP provider, which required working through app password setup, correct port configuration (587 with STARTTLS), and debugging connection edge cases in the production environment. Both user-facing and internal alert templates are managed within the service, with clear separation between the two email types."],groups:[{label:"CORE",pills:[{name:"Python",hero:!0},{name:"Celery",hero:!0},{name:"RabbitMQ",hero:!0},{name:"asyncio"},{name:"smtplib"}]},{label:"INFRASTRUCTURE",pills:[{name:"SMTP / TLS",hero:!0},{name:"Yandex Business Mail",hero:!0},{name:"STARTTLS"},{name:"Docker"},{name:"Linux"}]},{label:"BOT PLATFORM",pills:[{name:"aiogram",hero:!0},{name:"FastAPI"},{name:"PostgreSQL"},{name:"Telegram Bot API"}]},{label:"WORKFLOW",pills:[{name:"Git"},{name:"Slack"},{name:"Microservices"},{name:"Async task queue"}]}]},I={prev:{label:"Lubimovka Art",href:"../lubimovka/"},next:{label:"Skolkovo Golf",href:"../skolkovogolf/"}};m();b();const C=document.getElementById("app"),t=()=>{const e=document.createElement("div");return C.appendChild(e),e};h(t(),{counter:"05 / 09",homeHref:"/portfolio/"});E(t());v(t(),M);g(t(),P);p(t(),L);f(t(),A);y(t(),I);T(t());requestAnimationFrame(()=>window.scrollTo(0,0));
