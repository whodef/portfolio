import{m as r}from"./glowCursor-CBY4duUr.js";import{m as n,a as l,b as c,c as d,d as v,e as p,f as m,g as u}from"./footer-BmA9qXCm.js";import{m as h}from"./gallery-DFXGqm96.js";const i={eyebrow:"PROJECT 02 — SPORTS & LEISURE VENUE",title:"The",titleSub:"Rink",role:"Frontend Lead",desc:"An informational and booking platform for a Moscow sports complex — ice rink in winter, padel, tennis and outdoor activities in summer. Features an events calendar, interactive venue map with seasonal switching, ticket purchase and gift certificate flows.",liveHref:"https://therink.ru/"},g=[["06:00","ice","","ice","","ice","hockey"],["08:00","figure","figure","","figure","figure","hockey"],["10:00","maint","ice","ice","maint","","ice"],["12:00","hockey","","hockey","ice","hockey","figure"]],f=[{val:"94%",lbl:"Occupancy today"},{val:"38",lbl:"Active bookings"},{val:"4.2",lbl:"Revenue today"}],a={label:"NEW BOOKING",sub:"Rink · 14:00"},b=["MON","TUE","WED","THU","FRI","SAT"];function k([e,...s]){return`
    <div class="tr-sched-row">
      <div class="tr-time">${e}</div>
      ${s.map(o=>`<div class="tr-slot ${o}"></div>`).join("")}
    </div>`}const w=`
<section class="tr-hero">
  <div class="tr-bg"></div>
  <div class="tr-circle"></div>

  <div class="tr-text">
    <div class="tr-eyebrow">${i.eyebrow}</div>
    <h1 class="tr-title">${i.title}<span class="tr-sub">${i.titleSub}</span></h1>
    <div class="tr-role">${i.role}</div>
    <p class="tr-desc">${i.desc}</p>
    <div class="tr-ctas">
      <a href="${i.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="tr-visual">
    <div class="tr-visual-inner">
      <div class="tr-app">
        <div class="tr-topbar">
          <div class="tr-dot r"></div>
          <div class="tr-dot y"></div>
          <div class="tr-dot g"></div>
          <div class="tr-urlbar"><span>therink</span>.ru/schedule</div>
        </div>
        <div class="tr-content">
          <div class="tr-sched-head">
            <div class="tr-time"></div>
            ${b.map(e=>`<div class="tr-day">${e}</div>`).join("")}
          </div>
          ${g.map(k).join("")}
          <div class="tr-stats">
            ${f.map(e=>`
              <div class="tr-stat">
                <div class="tr-stat-val">${e.val}</div>
                <div class="tr-stat-lbl">${e.lbl}</div>
              </div>`).join("")}
          </div>
        </div>
      </div>
      <div class="tr-badge">
        <div class="tr-badge-dot"></div>
        <div>
          <div class="tr-badge-title">${a.label}</div>
          <div class="tr-badge-sub">${a.sub}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="tr-scroll">
    <div class="tr-scroll-line"></div>
    <span class="tr-scroll-label">SCROLL DOWN</span>
  </div>
</section>`;function T(e){e.innerHTML=w}history.scrollRestoration="manual";window.scrollTo(0,0);const y=[{val:"5",desc:"Person core team, plus external contractors for ticketing and gift certificates",source:"// TEAM"},{val:"3+",desc:"Activity verticals on one platform — ice rink, padel, tennis, table tennis, pétanque",source:"// PRODUCT"},{val:"Live",desc:"Seasonal production site — peaks in winter with ice rink ticket sales",source:"// STATUS"},{val:"1",desc:"Unified platform replacing phone-based scheduling across all activities",source:"// IMPACT"}],S={paragraphs:["The Rink is a multi-activity sports and leisure venue in Moscow — an ice rink in winter, and a full outdoor complex in summer with padel courts, tennis, table tennis, pétanque, and a café.","As Frontend Lead I led the frontend team alongside one other frontend developer. The site is primarily informational — showcasing the venue, events calendar, and complex map — with integrated flows for ice rink ticket purchase and gift certificates handled via third-party contractors.","One of the key features I built was the interactive venue map with seasonal switching between the winter and summer versions of the complex — giving visitors a clear visual overview of everything available depending on the time of year.","The site is seasonal by nature, peaking sharply in winter around ice rink bookings. Production support and performance under load were an ongoing part of the work."],meta:[{key:"ROLE",val:"Frontend Lead",green:!0},{key:"TYPE",val:"Venue & Booking Platform"},{key:"TEAM",val:"5 core + contractors"},{key:"PLATFORM",val:"Web + Mobile"},{key:"STACK",val:"Next.js · Python · Wagtail"},{key:"STATUS",val:"Live · seasonal",green:!0},{key:"SITE",val:"therink.ru →",link:"https://therink.ru"}]},E={lead:"From the interactive venue map to ticket purchase flows — a full walkthrough of the platform across both seasons.",items:[{label:"Homepage — winter season",ratio:"wide",src:"/portfolio/therink/homepage_winter_season.webp"},{label:"Ice rink ticket purchase flow",ratio:"tall",src:"/portfolio/therink/ice_rink_ticket_purchase_flow.webp"},{label:"Activity booking — padel courts",ratio:"sq",src:"/portfolio/therink/activity_booking.webp"},{label:"Summer complex overview",ratio:"wide",src:"/portfolio/therink/summer_complex_overview.webp"},{label:"Mobile — homepage",ratio:"tall",src:"/portfolio/therink/main.webp"},{label:"Events & schedule page",ratio:"short",src:"/portfolio/therink/schedule_page.webp"},{label:"Homepage — summer season",ratio:"wide",src:"/portfolio/therink/homepage_summer_season.webp"},{label:"Gift certificate flow",ratio:"sq",src:"/portfolio/therink/gift_certificate_flow.webp"}]},A=[{initials:"TS",name:"Tatiana Seliuk",role:"Frontend Lead — venue map, events calendar, booking flows, prod support",tags:["Next.js","TypeScript","CSS Modules","Review"]},{initials:"—",name:"Frontend Developer",role:"UI components, pages, responsive layouts",tags:["Next.js","TypeScript","SCSS"]},{initials:"—",name:"Backend Developer",role:"API design, database architecture, server-side logic",tags:["Python","Wagtail","PostgreSQL"]},{initials:"—",name:"Project Manager",role:"Timeline, client communication, delivery coordination",tags:["PM","Review","Testing"]},{initials:"—",name:"CTO",role:"Product vision, business decisions, stakeholder management",tags:["PRODUCT","STRATEGY"]}],P={paragraphs:["Built as a unified platform serving multiple activity verticals — ice rink, padel, tennis, and more — with seasonal content switching. Content is managed via Wagtail CMS, giving the venue team full control over pages, events, and the seasonal map without touching code.","The frontend is Next.js with TypeScript, optimised for seasonal traffic spikes in winter. External ticketing and gift certificate modules were integrated via clean API contracts with third-party contractors."],groups:[{label:"FRONTEND",pills:[{name:"Next.js",hero:!0},{name:"TypeScript",hero:!0},{name:"CSS Modules"},{name:"Mobile-first",hero:!0}]},{label:"BACKEND",pills:[{name:"Python",hero:!0},{name:"Wagtail",hero:!0},{name:"PostgreSQL",hero:!0},{name:"REST API"}]},{label:"INFRA & INTEGRATIONS",pills:[{name:"Docker"},{name:"GitHub CI"},{name:"Ticketing API"},{name:"Payment Gateway"}]}]},R={prev:{label:"Skolkovo Golf",href:"../skolkovogolf/"},next:{label:"SportsPari",href:"../sportspari/"}};r();n();const I=document.getElementById("app"),t=()=>{const e=document.createElement("div");return I.appendChild(e),e};l(t(),{counter:"02 / 03",homeHref:"/portfolio/"});T(t());c(t(),y);d(t(),S);h(t(),E);v(t(),A);p(t(),P);m(t(),R);u(t());requestAnimationFrame(()=>window.scrollTo(0,0));
