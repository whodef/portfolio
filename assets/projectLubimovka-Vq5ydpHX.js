import{m as i}from"./glowCursor-CBY4duUr.js";import{m as r,a as l,b as n,c as d,d as c,e as u,f as m,g as p}from"./footer-BmA9qXCm.js";import{m as v}from"./gallery-DFXGqm96.js";const s={eyebrow:"PROJECT 04 — OPEN-SOURCE CULTURAL PLATFORM",title:"Lubi",titleSub:"movka",role:"Frontend Developer",desc:"A production website for one of Russia's most important contemporary drama festivals — built collaboratively by a distributed team of 20+ developers across 4 frontend squads. I owned the play search feature and author profile pages.",liveHref:"https://lubimovka.art"},t={query:"Searching...",results:[{title:"Unlimited",author:"Чуклинов Максим",year:"2014",city:"Москва"},{title:"Спички детям",author:"Потапова Оля",year:"2020",city:"Санкт-Петербург"},{title:"Пацаны против х**ни",author:"Блинова Нелли",year:"2013",city:"Москва"},{title:"Пустое множество",author:"Брезгунова Екатерина",year:"2015",city:"Москва/Бостон"}]},h=`
<section class="lm-hero">
  <div class="lm-bg"></div>

  <div class="lm-text">
    <div class="lm-eyebrow">${s.eyebrow}</div>
    <h1 class="lm-title">${s.title}<span class="lm-sub">${s.titleSub}</span></h1>
    <div class="lm-role">${s.role}</div>
    <p class="lm-desc">${s.desc}</p>
    <div class="lm-ctas">
      <a href="${s.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="lm-visual">
    <div class="lm-visual-inner">
      <div class="lm-app">

        <div class="lm-topbar">
          <div class="lm-dot r"></div>
          <div class="lm-dot y"></div>
          <div class="lm-dot g"></div>
          <div class="lm-urlbar"><span>lubimovka</span>.art/library</div>
        </div>

        <div class="lm-content">

          <!-- Search bar -->
          <div class="lm-search-wrap">
            <div class="lm-search-bar">
              <span class="lm-search-icon">⌕</span>
              <span class="lm-search-query">${t.query}</span>
              <span class="lm-search-cursor"></span>
            </div>
            <div class="lm-search-meta">${t.results.length} results found</div>
          </div>

          <!-- Results -->
          <div class="lm-results">
            ${t.results.map((e,o)=>`
              <div class="lm-result-row" style="animation-delay: ${o*.08}s">
                <div class="lm-result-main">
                  <div class="lm-result-title">${e.title}</div>
                  <div class="lm-result-author">${e.author}</div>
                </div>
                <div class="lm-result-meta">
                  <div class="lm-result-city">${e.city}</div>
                  <div class="lm-result-year">${e.year}</div>
                </div>
                <div class="lm-result-arrow">→</div>
              </div>`).join("")}
          </div>

          <!-- Author card preview -->
          <div class="lm-author-preview">
            <div class="lm-author-label">AUTHOR PAGE</div>
            <div class="lm-author-card">
              <div class="lm-author-avatar">А</div>
              <div class="lm-author-info">
                <div class="lm-author-name">Anonim</div>
                <div class="lm-author-city">Минск · 3 пьесы в библиотеке</div>
              </div>
              <div class="lm-author-badge">→</div>
            </div>
          </div>

        </div>
      </div>

      <!-- Floating badge -->
      <div class="lm-badge">
        <div class="lm-badge-icon">◈</div>
        <div>
          <div class="lm-badge-title">Storybook · Components</div>
          <div class="lm-badge-sub">Design system driven</div>
        </div>
      </div>
    </div>
  </div>

  <div class="lm-scroll">
    <div class="lm-scroll-line"></div>
    <span class="lm-scroll-label">SCROLL DOWN</span>
  </div>
</section>`;function b(e){e.innerHTML=h}history.scrollRestoration="manual";window.scrollTo(0,0);const y=[{val:"20+",desc:"Frontend developers across 4 squads — coordinated via Slack, shared Storybook, and a unified component library",source:"// TEAM"},{val:"2",desc:"Key features owned end-to-end: play search with filtering and full author profile page with bibliography",source:"// OWNERSHIP"},{val:"100+",desc:"Reusable UI components built in Storybook before integration — isolated, documented, and reviewed across squads",source:"// COMPONENTS"},{val:"Live",desc:"Production site for a real cultural festival — not a pet project, a working product used by authors, press and audience",source:"// PRODUCT"}],f={paragraphs:["Lubimovka is one of Russia's most significant contemporary drama festivals, with decades of history discovering new playwrights. The website serves as both a public archive and a live platform — housing a library of hundreds of plays, author profiles, festival schedules, and news.","The project was built by a distributed team of 20+ frontend developers organised into 4 squads, working alongside separate backend and QA teams. All coordination happened via Slack with team leads overseeing delivery — close to a real production engineering environment.","I owned two features end-to-end: the play search with text filtering across the library catalog, and the complete author profile page — biography, play bibliography with download links, and responsive layout. When teammates hit blockers, I stepped in and helped carry their tasks across the line too.","All components were first built and documented in Storybook in isolation before being integrated into the Next.js app. This was my first large-scale experience with component-driven development, and the project where I fully committed to Next.js over plain React."],meta:[{key:"ROLE",val:"Frontend Developer",green:!0},{key:"TEAM",val:"20+ devs · 4 frontend squads"},{key:"TYPE",val:"Cultural Festival Platform"},{key:"PLATFORM",val:"Web"},{key:"STACK",val:"Next.js · TypeScript · CSS Modules · Storybook"},{key:"OWNED",val:"Search · Author Profile Page",green:!0},{key:"STATUS",val:"Live · production",green:!0},{key:"SITE",val:"lubimovka.art →",link:"https://lubimovka.art"}]},g={lead:"Play library with search, author profile pages, festival schedule, and mobile views.",items:[{label:"Play library — search & filtering",ratio:"wide",src:"/portfolio/lubimovka/play_library_search_&_filtering.webp"},{label:"Search results — filtered by keyword",ratio:"wide",src:"/portfolio/lubimovka/search_results_filtered_by_keyword.webp"},{label:"Blog — full layout",ratio:"short",src:"/portfolio/lubimovka/blog_full_layout.webp"},{label:"Projects — projects page",ratio:"sq",src:"/portfolio/lubimovka/projects_page.webp"},{label:"Author profile page — full layout",ratio:"tall",src:"/portfolio/lubimovka/author_profile_page_full_layout.webp"},{label:"Mobile — library & search",ratio:"tall",src:"/portfolio/lubimovka/mobile_library&search.webp"},{label:"Festival — history page",ratio:"wide",src:"/portfolio/lubimovka/festival_history_page.webp"}]},w=[{initials:"TS",name:"Tatiana Seliuk",role:"Frontend Developer. Play search feature, author profile page, adaptive layout, squad support — stepped in on teammates' tasks when needed",tags:["Next.js","TypeScript","CSS Modules","Storybook"]},{initials:"—",name:"Frontend Squad 1–3",role:"Parallel squads each owning different sections — schedule, news, library structure, navigation, and shared components",tags:["Next.js","CSS Modules"]},{initials:"—",name:"Backend Team",role:"Django REST API — plays, authors, events, news, media storage",tags:["Django","PostgreSQL","REST API"]},{initials:"—",name:"QA Team",role:"Cross-browser testing, regression, accessibility checks, and integration validation",tags:["Testing","QA","A11y"]},{initials:"—",name:"Team Leads",role:"Technical direction, code review, squad coordination, and mentorship across all frontend teams",tags:["Lead","Review","Mentorship"]}],S={paragraphs:["The frontend is built on Next.js with TypeScript and CSS Modules — SSR for SEO-critical pages like author profiles and the play library, ensuring content is indexable and fast on first load. CSS Modules kept styles scoped and conflict-free across 20+ developers working in parallel on the same codebase.","The defining constraint of this project was Storybook-first development: every component was built in isolation with documented props and states before being wired into the app. This discipline made cross-squad integration significantly smoother — when my search component needed to plug into the library page built by another squad, the interface contract was already clear. For the search feature specifically, I implemented client-side filtering with debounced input handling to keep the UX responsive without hammering the API on every keystroke."],groups:[{label:"FRONTEND",pills:[{name:"Next.js",hero:!0},{name:"TypeScript",hero:!0},{name:"CSS Modules",hero:!0},{name:"SSR",hero:!0},{name:"Adaptive layout"}]},{label:"COMPONENT SYSTEM",pills:[{name:"Storybook",hero:!0},{name:"Component-driven dev"},{name:"Props documentation"},{name:"Isolated testing",hero:!0}]},{label:"BACKEND & API",pills:[{name:"Django",hero:!0},{name:"REST API",hero:!0},{name:"PostgreSQL"},{name:"Media storage"}]},{label:"WORKFLOW",pills:[{name:"Git",hero:!0},{name:"Slack"},{name:"Code review",hero:!0},{name:"Squad-based delivery"}]}]},k={prev:{label:"SportsPari",href:"../sportspari/"}};i();r();const T=document.getElementById("app"),a=()=>{const e=document.createElement("div");return T.appendChild(e),e};l(a(),{counter:"04 / 09",homeHref:"/portfolio/"});b(a());n(a(),y);d(a(),f);v(a(),g);c(a(),w);u(a(),S);m(a(),k);p(a());requestAnimationFrame(()=>window.scrollTo(0,0));
