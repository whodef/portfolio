import{m as i}from"./glowCursor-C6XHJMDs.js";import{m as l,a as n,b as r,c,d,e as g,f as v,g as m}from"./footer-CsnvZlkY.js";import{m as p}from"./gallery-hLI-5Ivb.js";const s={eyebrow:"PROJECT 01 — PREMIUM GOLF CLUB",title:"Skolkovo",titleSub:" Golf",role:"Frontend Developer",desc:"A digital platform for one of Russia's most exclusive private golf clubs. Parallax-driven homepage, CMS integration with Wagtail, and a members-only personal cabinet — built to match the club's world-class positioning.",liveHref:"https://skolkovogolf.com/"},a={name:"Alexander M.",status:"FULL MEMBER",since:"Since 2019",handicap:"8.4",rounds:"47",nextTeeTime:"Today · 14:30 · Hole 1"},u=[{date:"Sat 15 Mar",time:"09:00",holes:"18",status:"confirmed"},{date:"Wed 19 Mar",time:"14:30",holes:"9",status:"confirmed"},{date:"Sat 22 Mar",time:"11:00",holes:"18",status:"pending"}],t={label:"TEE TIME",sub:"Today · 14:30"},b=`
<section class="sg-hero">
  <div class="sg-bg"></div>
  <div class="sg-circle"></div>

  <div class="sg-text">
    <div class="sg-eyebrow">${s.eyebrow}</div>
    <h1 class="sg-title">${s.title}<span class="sg-sub">${s.titleSub}</span></h1>
    <div class="sg-role">${s.role}</div>
    <p class="sg-desc">${s.desc}</p>
    <div class="sg-ctas">
      <a href="${s.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="sg-visual">
    <div class="sg-visual-inner">
      <div class="sg-app">

        <div class="sg-topbar">
          <div class="sg-dot r"></div>
          <div class="sg-dot y"></div>
          <div class="sg-dot g"></div>
          <div class="sg-urlbar"><span>skolkovogolf</span>.com/cabinet</div>
        </div>

        <div class="sg-content">

          <!-- Member header -->
          <div class="sg-member-header">
            <div class="sg-avatar">AM</div>
            <div class="sg-member-info">
              <div class="sg-member-name">${a.name}</div>
              <div class="sg-member-status">${a.status} · ${a.since}</div>
            </div>
            <div class="sg-member-badge">ACTIVE</div>
          </div>

          <!-- Stats row -->
          <div class="sg-stats-row">
            <div class="sg-stat-box">
              <div class="sg-stat-val">${a.handicap}</div>
              <div class="sg-stat-lbl">Handicap</div>
            </div>
            <div class="sg-stat-box">
              <div class="sg-stat-val">${a.rounds}</div>
              <div class="sg-stat-lbl">Rounds played</div>
            </div>
            <div class="sg-stat-box next-tee">
              <div class="sg-stat-lbl">Next tee time</div>
              <div class="sg-next-time">${a.nextTeeTime}</div>
            </div>
          </div>

          <!-- Booking list -->
          <div class="sg-bookings-label">UPCOMING BOOKINGS</div>
          <div class="sg-bookings">
            ${u.map(e=>`
              <div class="sg-booking-row">
                <div class="sg-booking-date">${e.date}</div>
                <div class="sg-booking-time">${e.time}</div>
                <div class="sg-booking-holes">${e.holes} holes</div>
                <div class="sg-booking-status ${e.status}">${e.status}</div>
              </div>`).join("")}
          </div>

        </div>
      </div>

      <!-- Floating badge -->
      <div class="sg-badge">
        <div class="sg-badge-dot"></div>
        <div>
          <div class="sg-badge-title">${t.label}</div>
          <div class="sg-badge-sub">${t.sub}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sg-scroll">
    <div class="sg-scroll-line"></div>
    <span class="sg-scroll-label">SCROLL DOWN</span>
  </div>
</section>`;function f(e){e.innerHTML=b}history.scrollRestoration="manual";window.scrollTo(0,0);const h=[{val:"4",desc:"Person team — Frontend, Backend, PM, and CTO delivering a premium digital product",source:"// TEAM"},{val:"18",desc:"Hole Jack Nicklaus Signature course with dedicated booking and tee-time flows",source:"// GOLF"},{val:"1",desc:"Members-only personal cabinet built end-to-end: bookings, profile, status",source:"// PRODUCT"},{val:"Live",desc:"Production site maintained post-launch — deployments, hotfixes, feature iterations",source:"// OPS"}],k={paragraphs:["Skolkovo Golf Club is one of Russia's most prestigious private golf clubs, located 20 minutes from central Moscow. The course was personally designed by Jack Nicklaus, earning it the Jack Nicklaus Signature status — the highest designation in golf course architecture.","I joined an existing frontend team and took full ownership of the members-only personal cabinet — built end-to-end: booking history, profile management, and membership status with CMS integration via Wagtail (Django).","Beyond the cabinet, I contributed directly to the main site codebase on GitLab — developed a complete hole-by-hole course page and built an animated interactive map of the entire golf club grounds from scratch.","Post-launch I supported the production site — handling deployments, bug fixes, and new feature delivery as the club's needs evolved."],meta:[{key:"ROLE",val:"Frontend Developer",green:!0},{key:"CLIENT",val:"Skolkovo Golf Club"},{key:"TYPE",val:"Premium Club Website"},{key:"PLATFORM",val:"Web"},{key:"STACK",val:"Next.js · Django · Wagtail"},{key:"STATUS",val:"Live · maintained",green:!0},{key:"SITE",val:"skolkovogolf.com →",link:"https://skolkovogolf.com"}]},S={lead:"From the interactive course map and hole-by-hole stats to membership, club life, gift certificates and merch — a walkthrough of the club's site.",items:[{label:"Interactive course map — hole-by-hole par & distances",ratio:"wide",src:"/portfolio/skolkovogolf/interactive_course_map.webp"},{label:"Homepage — full layout",ratio:"tall",src:"/portfolio/skolkovogolf/homepage_full_layout.webp"},{label:"Homepage — Jack Nicklaus, course architect",ratio:"wide",src:"/portfolio/skolkovogolf/homepage.webp"},{label:"Golf page — course map, hole cards & club captains",ratio:"tall",src:"/portfolio/skolkovogolf/golf_page_course_map_captains.webp"},{label:'Homepage — "Close to the city" section',ratio:"wide",src:"/portfolio/skolkovogolf/course_overview.webp"},{label:"Club rules — expandable sections",ratio:"wide",src:"/portfolio/skolkovogolf/club_rules_accordion.webp"},{label:"Coaching — lessons & coaching staff",ratio:"tall",src:"/portfolio/skolkovogolf/coaching_staff_page.webp"},{label:"Events — photo & video grid",ratio:"wide",src:"/portfolio/skolkovogolf/events_media_grid.webp"},{label:"Membership — types & application form",ratio:"tall",src:"/portfolio/skolkovogolf/membership_application_page.webp"},{label:"Gift certificate flow — design step",ratio:"wide",src:"/portfolio/skolkovogolf/gift_certificate_flow.webp"},{label:"Club life — fitness, padel & tennis",ratio:"tall",src:"/portfolio/skolkovogolf/club_life_page.webp"},{label:"General rules — club visit & etiquette",ratio:"tall",src:"/portfolio/skolkovogolf/general_rules_page.webp"},{label:"Merch catalog — clothing & accessories",ratio:"tall",src:"/portfolio/skolkovogolf/merch_catalog.webp"},{label:"Careers — team & open roles",ratio:"tall",src:"/portfolio/skolkovogolf/careers_page.webp"},{label:"Contacts — departments & footer",ratio:"wide",src:"/portfolio/skolkovogolf/contacts_page.webp"}]},w=[{initials:"TS",name:"Tatiana Seliuk",role:"Frontend Developer. Personal cabinet, hole page, animated club map, prod support",tags:["Next.js","TypeScript","SCSS"]},{initials:"—",name:"Frontend Team",role:"Core site architecture and main pages — existing team on the project",tags:["Next.js","SCSS"]},{initials:"—",name:"Backend Developer",role:"Backend architecture, API design, database, server-side logic",tags:["Django","PostgreSQL"]},{initials:"—",name:"Project Manager",role:"Timeline, client communication, delivery coordination, testing & review",tags:["PM","Review","Testing"]},{initials:"—",name:"CTO",role:"Product vision, business decisions, stakeholder management",tags:["PRODUCT","STRATEGY"]}],T={paragraphs:["The frontend is built on Next.js with TypeScript and SCSS modules — chosen for SSR performance and SEO, critical for a premium brand where first impressions matter. All animations are scroll-driven, implemented in vanilla JS without animation libraries to keep the bundle lean.","Content is managed through Wagtail CMS on Django, giving the club's editorial team full autonomy over pages, events, and media. The members-only cabinet connects to the Django REST API with session-based auth and role-based access for different membership tiers."],groups:[{label:"FRONTEND",pills:[{name:"Next.js",hero:!0},{name:"TypeScript",hero:!0},{name:"SCSS"},{name:"Vanilla JS"},{name:"SSR"}]},{label:"CMS & BACKEND",pills:[{name:"Django",hero:!0},{name:"Wagtail",hero:!0},{name:"Python"},{name:"REST API"},{name:"PostgreSQL"}]},{label:"INFRA & TOOLS",pills:[{name:"Docker",hero:!0},{name:"Git"},{name:"Nginx"},{name:"Linux"}]}]},y={prev:{label:"Pervaya Nota",href:"../pervaya-nota/"},next:{label:"The Rink",href:"../therink/"}};i();l();const C=document.getElementById("app"),o=()=>{const e=document.createElement("div");return C.appendChild(e),e};n(o(),{counter:"08 / 09",homeHref:"/portfolio/"});f(o());r(o(),h);c(o(),k);p(o(),S);d(o(),w);g(o(),T);v(o(),y);m(o());requestAnimationFrame(()=>window.scrollTo(0,0));
