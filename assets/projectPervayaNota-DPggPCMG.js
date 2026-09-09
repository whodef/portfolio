import{m as o}from"./glowCursor-BppibgFj.js";import{m as s,a as n,b as l,c as r,d,e as c,f as p,g as v}from"./footer-CsnvZlkY.js";import{m as u}from"./gallery-hLI-5Ivb.js";const t={eyebrow:"PROJECT 06 — EDUCATOR PORTFOLIO SITE",title:"Pervaya",titleSub:" Nota",role:"Fullstack Developer — solo",desc:"A portfolio site for a music educator specializing in early-childhood education — built end to end, from frontend to infrastructure. Svelte on the front, Sveltia as a git-based CMS so the client edits scenarios, materials, and news without touching code, Tailwind for the design system, and a full Yandex Cloud deployment with custom NS/DNS on the client's own domain.",liveHref:"https://pervaya-nota.ru/"},h=["About","Scenarios","Materials","Media","News"],m=[{val:"25+",label:"Years experience"},{val:"50+",label:"Scenario scripts"},{val:"100+",label:"Happy clients"}],i={label:"CMS",sub:"Sveltia · git-based"},g=`
<section class="pn-hero">
  <div class="pn-bg"></div>
  <div class="pn-notes" aria-hidden="true">
    <span>♪</span><span>♫</span><span>♪</span>
  </div>

  <div class="pn-text">
    <div class="pn-eyebrow">${t.eyebrow}</div>
    <h1 class="pn-title">${t.title}<span class="pn-sub">${t.titleSub}</span></h1>
    <div class="pn-role">${t.role}</div>
    <p class="pn-desc">${t.desc}</p>
    <div class="pn-ctas">
      <a href="${t.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="pn-visual">
    <div class="pn-visual-inner">
      <div class="pn-app">

        <div class="pn-topbar">
          <div class="pn-dot r"></div>
          <div class="pn-dot y"></div>
          <div class="pn-dot g"></div>
          <div class="pn-urlbar"><span>pervaya-nota</span>.ru</div>
        </div>

        <div class="pn-content">

          <div class="pn-profile">
            <div class="pn-avatar">EN</div>
            <div class="pn-profile-info">
              <div class="pn-profile-name">Екатерина Назарова</div>
              <div class="pn-profile-role">Music educator · Early-childhood programs</div>
            </div>
          </div>

          <div class="pn-quote">«Пусть в сердцах детей живёт вера в чудеса и сказки»</div>

          <div class="pn-stats-row">
            ${m.map(e=>`
              <div class="pn-stat-box">
                <div class="pn-stat-val">${e.val}</div>
                <div class="pn-stat-lbl">${e.label}</div>
              </div>`).join("")}
          </div>

          <div class="pn-nav-label">SECTIONS</div>
          <div class="pn-navlinks">
            ${h.map(e=>`<span class="pn-navlink">${e}</span>`).join("")}
          </div>

        </div>
      </div>

      <div class="pn-badge">
        <div class="pn-badge-dot"></div>
        <div>
          <div class="pn-badge-title">${i.label}</div>
          <div class="pn-badge-sub">${i.sub}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="pn-scroll">
    <div class="pn-scroll-line"></div>
    <span class="pn-scroll-label">SCROLL DOWN</span>
  </div>
</section>`;function f(e){e.innerHTML=g}history.scrollRestoration="manual";window.scrollTo(0,0);const S=[{val:"Svelte",desc:"Compiled, framework-free frontend — small bundle, fast first paint for a content-driven portfolio site",source:"// STACK"},{val:"Git-CMS",desc:"Sveltia CMS wired in as a git-based headless CMS — the client edits scenarios, materials, and news herself, no database needed",source:"// CONTENT"},{val:"Tailwind",desc:"Utility-first styling for a clean, consistent design system built from scratch around the client's brand",source:"// UI"},{val:"NS/DNS",desc:"Full infrastructure on Yandex Cloud — hosting configured and NS records pointed at the client's own domain",source:"// INFRA"}],b={paragraphs:["Pervaya Nota is a portfolio site for a music educator specializing in early-childhood music education — built to showcase 25+ years of experience, ready-made performance scenarios, teaching materials, and video/podcast content for preschools, kindergartens, and parents.","I took this on as a solo build, end to end: information architecture, visual design, frontend implementation, content tooling, and infrastructure. The client isn't technical, so the content layer had to let her publish new scenarios and news posts herself without ever touching code or a database.","The frontend is built in Svelte for a lightweight, fast-loading site, styled with Tailwind for a clean and consistent visual system. Content is managed through Sveltia CMS, a git-based headless CMS — edits made through its editor UI commit straight to the repository, and the site rebuilds from there.","On the infrastructure side, the site is deployed on Yandex Cloud, with hosting configuration and NS/DNS records set up from scratch to point the client's own domain, pervaya-nota.ru, at the deployment — the kind of unglamorous setup work that has to be right before anything else matters."],meta:[{key:"ROLE",val:"Fullstack Developer — solo",green:!0},{key:"CLIENT",val:"Music Educator · Personal Brand"},{key:"TYPE",val:"Educator Portfolio Website"},{key:"OWNED",val:"Full build — design, frontend, CMS, infra",green:!0},{key:"STACK",val:"Svelte · Sveltia CMS · Tailwind CSS"},{key:"INFRA",val:"Yandex Cloud · Custom NS/DNS"},{key:"SITE",val:"pervaya-nota.ru →",link:"https://pervaya-nota.ru/"}]},y={lead:"Homepage, section listings, and content pages built with Svelte and populated through Sveltia CMS.",items:[{label:"Homepage — profile, stats & mission statement",ratio:"sq",src:"/portfolio/pervaya-nota/homepage_profile.png"},{label:"Homepage — section cards: Scenarios, Materials, Media, News",ratio:"tall",src:"/portfolio/pervaya-nota/homepage_sections.png"},{label:"Homepage — About Me card & footer contact links",ratio:"wide",src:"/portfolio/pervaya-nota/homepage_sections_footer.png"},{label:"Scenarios — category listing",ratio:"wide",src:"/portfolio/pervaya-nota/scenarios_list.png"},{label:"Scenario article — script text & material info",ratio:"wide",src:"/portfolio/pervaya-nota/scenario_article.png"},{label:"About Me — tabbed bio page (education, credentials, awards)",ratio:"wide",src:"/portfolio/pervaya-nota/about_page.png"},{label:"Teaching Materials — category listing",ratio:"wide",src:"/portfolio/pervaya-nota/materials_list.png"},{label:"Media article — embedded YouTube video",ratio:"wide",src:"/portfolio/pervaya-nota/media_article_top.png"},{label:"Media article — full game script writeup",ratio:"tall",src:"/portfolio/pervaya-nota/media_article_full.png"}]},w=[{initials:"TS",name:"Tatiana Seliuk",role:"Solo build — information architecture, UI design, Svelte/Tailwind frontend, Sveltia CMS integration, Yandex Cloud deployment and DNS setup",tags:["Svelte","Tailwind","Sveltia CMS","Yandex Cloud"]}],T={paragraphs:["The frontend is built in Svelte — compiled ahead of time rather than shipping a runtime framework, which keeps the site light and quick for visitors on any connection. Tailwind handles styling end to end, letting the whole visual system live as utility classes without a separate CSS architecture to maintain.","Content is managed through Sveltia CMS, a git-based headless CMS: the client logs into its editor UI, writes or edits a scenario or news post, and the change commits directly to the site's repository — no server, no database, no admin backend to secure or maintain. On the infrastructure side, the site runs on Yandex Cloud, with hosting configured from scratch and the domain's NS records pointed at it so pervaya-nota.ru resolves correctly end to end."],groups:[{label:"FRONTEND",pills:[{name:"Svelte",hero:!0},{name:"Tailwind CSS",hero:!0},{name:"Vite"},{name:"TypeScript"}]},{label:"CONTENT",pills:[{name:"Sveltia CMS",hero:!0},{name:"Git-based CMS"},{name:"Markdown"}]},{label:"INFRASTRUCTURE",pills:[{name:"Yandex Cloud",hero:!0},{name:"NS / DNS",hero:!0},{name:"Custom domain"}]},{label:"WORKFLOW",pills:[{name:"Git"},{name:"GitHub"},{name:"Solo project"}]}]},C={prev:{label:"ORBI Fund",href:"../orbi/"},next:{label:"Skolkovo Golf",href:"../skolkovogolf/"}};o();s();const N=document.getElementById("app"),a=()=>{const e=document.createElement("div");return N.appendChild(e),e};n(a(),{counter:"06 / 09",homeHref:"/portfolio/"});f(a());l(a(),S);r(a(),b);u(a(),y);d(a(),w);c(a(),T);p(a(),C);v(a());requestAnimationFrame(()=>window.scrollTo(0,0));
