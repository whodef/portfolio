import{m as O}from"./glowCursor-CBY4duUr.js";const I=[{href:"#hero",label:"//01. &lt;Home/&gt;",side:"left"},{href:"#portfolio",label:"//02. &lt;Portfolio/&gt;",side:"left"},{href:"#press",label:"//03. &lt;Press/&gt;",side:"right"},{href:"#contact",label:"//04. &lt;Contact/&gt;",side:"right"}],F=["hero","portfolio","press","contact"];function z(e){e.innerHTML=`
    <div class="mobile-menu" id="mobileMenu">
      <span class="mobile-close" id="mobileClose">✕</span>
      ${I.map(t=>`<a href="${t.href}">${t.label}</a>`).join(`
      `)}
    </div>

    <nav>
      <div class="nav-left">
        ${I.filter(t=>t.side==="left").map(t=>`<a href="${t.href}">${t.label}</a>`).join(`
        `)}
      </div>
      <div class="nav-logo">.&zwj;<span>T</span>S</div>
      <div class="nav-right">
        ${I.filter(t=>t.side==="right").map(t=>`<a href="${t.href}">${t.label}</a>`).join(`
        `)}
      </div>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </nav>
  `;const l=e.querySelector("#mobileMenu");e.querySelector("#hamburger").addEventListener("click",()=>l.classList.add("open")),e.querySelector("#mobileClose").addEventListener("click",()=>l.classList.remove("open")),e.querySelectorAll(".mobile-menu a").forEach(t=>t.addEventListener("click",()=>l.classList.remove("open")));const r=e.querySelectorAll('nav a[href^="#"]');function n(t){r.forEach(o=>o.classList.toggle("active",o.getAttribute("href")==="#"+t))}n("hero");const i=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&n(o.target.id)})},{rootMargin:"-50% 0px -50% 0px",threshold:0});window.addEventListener("DOMContentLoaded",()=>{F.forEach(t=>{const o=document.getElementById(t);o&&i.observe(o)})}),document.readyState!=="loading"&&F.forEach(t=>{const o=document.getElementById(t);o&&i.observe(o)})}function j(e,l,r=0,n=1400){const i=document.getElementById(e),t=document.getElementById(l);if(!i)return;const o=i.getTotalLength();i.style.strokeDasharray=String(o),i.style.strokeDashoffset=String(o),i.style.transition="none",setTimeout(()=>{requestAnimationFrame(()=>{i.style.transition=`stroke-dashoffset ${n}ms cubic-bezier(0.4,0,0.2,1)`,i.style.strokeDashoffset="0",t&&setTimeout(()=>{t.style.opacity="1"},n-100)})},r)}const _=`
<section id="hero">
  <div class="hero-inner">
    <div class="heroWrap">
      <div class="tag-label">&lt;p&gt;<span class="paragraph">This is</span>&lt;/p&gt;</div>
      <div class="name">
        <div class="tag-label">&lt;h1&gt;</div>
        <h1 class="hero-name" id="heroName">Tatiana<br>Seliuk</h1>
        <div class="tag-close">&lt;/h1&gt;</div>
      </div>
      <p class="hero-subtitle">&lt;p&gt;<span class="paragraph">Entrepreneur & Fullstack Engineer</span>&lt;/p&gt;</p>
    </div>

    <div class="cv-btn-wrap" id="cvBtnWrap">
      <a href="/portfolio/tatiana-seliuk-cv.pdf" target="_blank" rel="noopener" class="cv-btn">
        <svg class="orbit-svg orbit-1" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
          <circle class="orbit-dot" cx="188" cy="100" r="6.5" fill="white"/>
          <circle class="orbit-dot" cx="12"  cy="100" r="4.5" fill="white" opacity="0.6"/>
        </svg>
        <svg class="orbit-svg orbit-2" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <circle class="orbit-dot" cx="172" cy="100" r="5" fill="white" opacity="0.8"/>
          <circle class="orbit-dot" cx="52"  cy="60"  r="4" fill="white" opacity="0.5"/>
          <circle class="orbit-dot" cx="140" cy="168" r="4" fill="white" opacity="0.5"/>
        </svg>
        <svg class="orbit-svg orbit-3" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <circle class="orbit-dot" cx="100" cy="42"  r="4" fill="white" opacity="0.4"/>
          <circle class="orbit-dot" cx="100" cy="158" r="4" fill="white" opacity="0.4"/>
        </svg>
        <span class="cv-label">Download CV</span>
      </a>
    </div>
  </div>

  <svg id="heroConnectorSvg" class="hero-connector-svg"
       viewBox="0 0 691 619"
       preserveAspectRatio="none"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path id="line1" class="line-path"
      d="M73 20.5H1.5V233.5C1.5 314.686 67.3141 380.5 148.5 380.5H523.5C604.686 380.5 670.5 446.314 670.5 527.5V599"
      stroke="#00FF94" stroke-width="3"/>
    <circle opacity="0.21" cx="72.5" cy="20" r="20" fill="#00FF94" filter="url(#dotGlow)"/>
    <circle cx="72.5" cy="20" r="8" fill="white"/>
    <circle id="dot1"      opacity="0.21" cx="670.5" cy="599" r="20" fill="#00FF94" filter="url(#dotGlow)" class="line-dot"/>
    <circle id="dot1inner" cx="670.5" cy="599" r="8" fill="white" class="line-dot"/>
    <path d="M272.344 381.578V378.391L290.766 366.93V370.961L276.281 379.984L290.766 389.008V393.039L272.344 381.578Z" fill="white"/>
    <path d="M315.656 359.922H319.453L302.039 396.391H298.242L315.656 359.922Z" fill="white"/>
    <path d="M326.93 389.008L341.414 379.984L326.93 370.961V366.93L345.352 378.391V381.578L326.93 393.039V389.008Z" fill="white"/>
  </svg>
</section>
`;function W(e){e.innerHTML=_;function l(){if(window.innerWidth<=900)return;const n=e.querySelector("#hero"),i=e.querySelector("#heroName"),t=e.querySelector("#cvBtnWrap"),o=e.querySelector("#heroConnectorSvg"),d=n.getBoundingClientRect(),p=i.getBoundingClientRect(),f=t.getBoundingClientRect(),u=p.left-d.left-50,m=p.top-d.top+p.height*.38,b=f.left-d.left+f.width*.5,L=f.bottom-d.top+20,S=(b-u)/(670.5-12.5),x=(L-m)/559,c=Math.max(S,x)*.6,h=691*c,E=619*c,M=u-72.5*c,y=m-20*c;o.style.left=M+"px",o.style.top=y+"px",o.style.width=h+"px",o.style.height=E+"px",j("line1","dot1",400,1800),setTimeout(()=>{const w=document.getElementById("dot1inner");w&&(w.style.transition="opacity 0.4s ease",w.style.opacity="1")},2050)}document.readyState==="complete"?requestAnimationFrame(()=>requestAnimationFrame(l)):window.addEventListener("load",()=>requestAnimationFrame(()=>requestAnimationFrame(l)));let r;window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{const n=e.querySelector("#heroConnectorSvg");if(window.innerWidth<=900){n.style.display="none";return}n.style.display="";const i=n.querySelector("#line1");i.style.transition="none",i.style.strokeDasharray="3000",i.style.strokeDashoffset="0",l()},150)})}const g=[{title:"Skolkovo Golf",desc:"Digital platform for one of Russia's most exclusive private golf clubs — personal member cabinet, interactive animated venue map, hole-by-hole course page, and CMS integration.",role:"FRONTEND DEVELOPER",href:"/portfolio/projects/skolkovogolf/",img:"/portfolio/skolkovogolf/golf.webp"},{title:"The Rink",desc:"Venue platform for a Moscow sports complex — ice rink in winter, padel and tennis in summer. Interactive seasonal map, events calendar, ticket purchase and gift certificate flows.",role:"FRONTEND LEAD",href:"/portfolio/projects/therink/",img:"/portfolio/therink/rink.webp"},{title:"Sports Pari",desc:"High‑load real‑time platform with WebSocket streaming, microservice architecture, and complex state management. Built to handle peak traffic during live events with sub‑second data consistency.",role:"FRONTEND DEVELOPER",href:"/portfolio/projects/sportspari/",img:"/portfolio/sportspari/pari.webp"}],$=`
  <div class="mock-screen">
    <div class="mock-bar"></div>
    <div class="mock-bar w40"></div>
    <div class="mock-wave"></div>
    <div class="mock-bar w80"></div>
    <div class="mock-bar w40"></div>
  </div>`,Y=`
<section id="portfolio">
  <div class="portfolio-section-header">
    <div class="tag-label">&lt;h2&gt;</div>
    <div class="portfolio-title-wrap">
      <h2 class="section-title">My Portfolio</h2>
      <div class="tag-close">&lt;/h2&gt;</div>
    </div>
  </div>

  <div class="portfolio-content">
    <div class="portfolio-card" id="portfolioCard">
      <div class="card-image" id="cardImage">
        <span class="ripple-1"></span>
        <span class="ripple-2"></span>
        <span class="ripple-3"></span>
        <div class="card-image-inner" id="cardImageInner">
          ${$}
        </div>
      </div>
      <div class="slider-controls slider-controls--inline" id="sliderControlsInline">
        <button class="slider-btn" id="prevBtnInline">&#8249;</button>
        <div class="slider-track">
          <div class="slider-progress" id="sliderProgressInline"></div>
        </div>
        <button class="slider-btn" id="nextBtnInline">&#8250;</button>
      </div>
      <div class="card-text">
        <div class="p-tag">&lt;p&gt;</div>
        <h3 class="card-title" id="cardTitle"></h3>
        <p  class="card-desc"></p>
        <p  class="card-role"></p>
        <div class="p-tag" id="closeTag">&lt;/p&gt;</div>
      </div>
    </div>
  </div>

  <div class="slider-controls slider-controls--bottom" id="sliderControls">
    <button class="slider-btn" id="prevBtn">&#8249;</button>
    <div class="slider-track">
      <div class="slider-progress" id="sliderProgress"></div>
    </div>
    <button class="slider-btn" id="nextBtn">&#8250;</button>
  </div>

  <svg id="portfolioConnectorSvg" class="portfolio-connector-svg"
       viewBox="0 0 648 653"
       preserveAspectRatio="xMidYMid meet"
       fill="none" xmlns="http://www.w3.org/2000/svg"
       style="opacity:0">
    <defs>
      <filter id="dotGlow2" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path id="line2" class="line-path"
      d="M183.5 19.5C183.5 62.8544 218.646 98 262 98H646.5V280.5C646.5 381.568 564.568 463.5 463.5 463.5H190.5C96.6116 463.5 20.5 539.612 20.5 633.5"
      stroke="#00FF94" stroke-width="3"/>
    <path d="M368 465.656V462.469L386.422 451.008V455.039L371.938 464.062L386.422 473.086V477.117L368 465.656Z" fill="white"/>
    <path d="M411.312 444H415.109L397.695 480.469H393.898L411.312 444Z" fill="white"/>
    <path d="M422.586 473.086L437.07 464.062L422.586 455.039V451.008L441.008 462.469V465.656L422.586 477.117V453.039Z" fill="white"/>
    <circle opacity="0.21" cx="184" cy="20" r="20" fill="#00FF94" filter="url(#dotGlow2)"/>
    <circle cx="184" cy="20" r="8" fill="white"/>
    <circle id="dot2"      opacity="0" cx="20" cy="633" r="20" fill="#00FF94" filter="url(#dotGlow2)" class="line-dot"/>
    <circle id="dot2inner" opacity="0" cx="20" cy="633" r="8"  fill="white"                           class="line-dot"/>
  </svg>
</section>
`;function Z(e){e.innerHTML=Y;let l=0;const r=e.querySelector("#portfolioCard"),n=e.querySelector("#cardTitle"),i=r.querySelector(".card-desc"),t=r.querySelector(".card-role"),o=e.querySelector("#cardImage"),d=e.querySelector("#cardImageInner"),p=e.querySelector("#sliderProgress"),f=e.querySelector("#sliderProgressInline");function u(){const s=`${(l+1)/g.length*100}%`;p.style.width=s,f.style.width=s}function m(s){s?(n.style.cursor="pointer",o.style.cursor="pointer",n.onclick=()=>{window.location.href=s},o.onclick=()=>{window.location.href=s}):(n.style.cursor="default",o.style.cursor="default",n.onclick=null,o.onclick=null)}function b(s){s?(d.innerHTML=`<img class="card-screenshot" src="${s}" alt="">`,o.classList.add("has-screenshot")):(d.innerHTML=$,o.classList.remove("has-screenshot"))}function L(){r.classList.remove("visible"),u(),setTimeout(()=>{const s=g[l];n.textContent=s.title,i.textContent=s.desc,t.textContent=s.role,m(s.href),b(s.img),r.classList.add("visible")},200)}const S=()=>{l=(l+1)%g.length,L()},x=()=>{l=(l-1+g.length)%g.length,L()};e.querySelector("#nextBtn").addEventListener("click",S),e.querySelector("#prevBtn").addEventListener("click",x),e.querySelector("#nextBtnInline").addEventListener("click",S),e.querySelector("#prevBtnInline").addEventListener("click",x),new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},{threshold:.2}).observe(r),p.style.transition="none",f.style.transition="none",u(),requestAnimationFrame(()=>{p.style.transition="width 0.4s ease",f.style.transition="width 0.4s ease"});const c=g[l];n.textContent=c.title,i.textContent=c.desc,t.textContent=c.role,m(c.href),b(c.img),setTimeout(()=>r.classList.add("visible"),50);const h=e.querySelector("#portfolioConnectorSvg");function E(){const s=e.querySelector("#portfolio"),a=e.querySelector("#closeTag"),k=e.querySelector("#sliderControls"),v=s.getBoundingClientRect(),T=a.getBoundingClientRect(),V=k.getBoundingClientRect(),H=T.left-v.left+T.width*.5,D=T.top-v.top+T.height*.5,C=(V.bottom-v.top+180-D)/613;h.style.left=H-184*C+"px",h.style.top=D-20*C+"px",h.style.width=648*C+"px",h.style.height=653*C+"px",h.style.opacity="1"}function M(){const s=e.querySelector("#line2"),a=s.getTotalLength();s.style.strokeDasharray=String(a),s.style.strokeDashoffset=String(a),s.style.transition="none",s.getBoundingClientRect(),requestAnimationFrame(()=>{s.style.transition="stroke-dashoffset 1800ms cubic-bezier(0.4,0,0.2,1)",s.style.strokeDashoffset="0",setTimeout(()=>{const k=e.querySelector("#dot2"),v=e.querySelector("#dot2inner");k.style.transition="opacity 0.4s ease",v.style.transition="opacity 0.4s ease",k.style.opacity="0.21",v.style.opacity="1"},1700)})}let y=!1;function w(){y||(y=!0,document.fonts.ready.then(()=>{requestAnimationFrame(()=>{E(),M()})}))}const B=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(w(),B.unobserve(a.target))})},{threshold:0,rootMargin:"0px 0px -45% 0px"});B.observe(e.querySelector("#closeTag"));let q;window.addEventListener("resize",()=>{clearTimeout(q),q=setTimeout(()=>{y&&E()},150)})}const X=[{name:"More projects dropping soon",date:"Stay tuned",url:"#",featured:!0}],K=`
  <svg class="press-arrow-svg" width="77" height="58" viewBox="0 0 77 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_press)">
      <path class="arrow-path" d="M62.305 30.5L0.500001 30.5L0.500001 27.5L62.305 27.5C53.72 23.18 48.747 14.221 47.5 0.790002L50.522 0.500001C52.203 18.618 60.747 27.418 76.5 27.418L76.5 30.582C60.747 30.582 52.203 39.382 50.522 57.5L47.5 57.21C48.747 43.779 53.719 34.82 62.305 30.5Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_press">
        <rect width="58" height="77" fill="white" transform="translate(2.53526e-06 58) rotate(-90)"/>
      </clipPath>
    </defs>
  </svg>`;function J(e){return`
    <a class="press-item" href="${e.url??"#"}" target="_blank" rel="noopener">
      <div class="press-info">
        <span class="press-name">${e.name}</span>
        ${e.date?`<span class="press-date">${e.date}</span>`:""}
      </div>
      <span class="press-arrow">${K}</span>
    </a>`}const Q=`
<section id="press">
  <div class="press-section-header">
    <div class="tag-label">&lt;h3&gt;</div>
    <div class="press-title-wrap">
      <h3 class="section-title">Side Projects</h3>
      <div class="tag-close">&lt;/h3&gt;</div>
    </div>
  </div>

  <div class="press-list">
    ${X.map(J).join(`
  `)}
  </div>

  <div class="press-connector-wrap">
    <svg class="press-connector-svg" width="40" height="278" viewBox="0 0 40 278" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pressLineGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <circle class="press-dot-glow" id="pressDotTopGlow" cx="20" cy="20" r="20" fill="#00FF94" opacity="0"/>
      <circle class="press-dot-white" id="pressDotTop" cx="20" cy="20" r="8" fill="white" opacity="0"/>

      <line
        id="pressLine"
        x1="20" y1="20"
        x2="20" y2="250"
        stroke="#00FF94"
        stroke-width="3"
        stroke-linecap="round"
        filter="url(#pressLineGlow)"
      />

      <circle class="press-dot-glow" id="pressDotBottomGlow" cx="20" cy="258" r="20" fill="#00FF94" opacity="0"/>
      <circle class="press-dot-white" id="pressDotBottom" cx="20" cy="258" r="8" fill="white" opacity="0"/>
    </svg>
  </div>
</section>
`;function U(e){e.innerHTML=Q;const l=e.querySelector(".press-connector-wrap"),r=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(ee(),r.unobserve(i.target))})},{threshold:.3});r.observe(l)}function ee(){const e=document.getElementById("pressLine"),l=document.getElementById("pressDotTopGlow"),r=document.getElementById("pressDotTop"),n=document.getElementById("pressDotBottomGlow"),i=document.getElementById("pressDotBottom");if(!e)return;const t=230;e.style.strokeDasharray=String(t),e.style.strokeDashoffset=String(t),e.style.transition="none",l&&(l.style.transition="opacity 0.3s ease",l.style.opacity="0.21"),r&&(r.style.transition="opacity 0.3s ease",r.style.opacity="1"),requestAnimationFrame(()=>{e.style.transition="stroke-dashoffset 1400ms cubic-bezier(0.4,0,0.2,1)",e.style.strokeDashoffset="0",setTimeout(()=>{n&&(n.style.transition="opacity 0.4s ease",n.style.opacity="0.21",n.style.animation="pressGlowPulse 3s ease-in-out infinite"),i&&(i.style.transition="opacity 0.4s ease",i.style.opacity="1")},1300)})}const te=[{name:"LinkedIn",url:"https://www.linkedin.com/in/tatiana-seliuk/",size:240,top:"12%",left:"12%"},{name:"GitHub",url:"https://github.com/whodef",size:200,top:"5%",left:"48%"},{name:"Telegram",url:"https://t.me/whodef",size:160,top:"58%",left:"35%"},{name:"Email",url:"mailto:tatiseliuk@gmail.com",size:170,top:"48%",left:"66%"}];function se(e){return`
    <a href="${e.url}" class="social-node" target="_blank" rel="noopener"
       style="width:${e.size}px;height:${e.size}px;top:${e.top};left:${e.left};">
      <span class="social-tag">&lt;&gt;</span>
      <span class="social-name">${e.name}</span>
      <span class="social-tag">&lt;/&gt;</span>
    </a>`}const ie=`
<section id="contact">
  <div class="contact-header">
    <div class="tag-label">&lt;h4&gt;</div>
    <div class="contact-title-wrap">
      <h4 class="section-title">Connect with me</h4>
      <div class="tag-close">&lt;/h4&gt;</div>
    </div>
  </div>

  <div class="social-field">
    ${te.map(se).join(`
    `)}
  </div>
</section>
`;function oe(e){e.innerHTML=ie}history.scrollRestoration="manual";window.scrollTo(0,0);O();const ne=document.getElementById("app"),R=document.createElement("div"),A=document.createElement("div"),G=document.createElement("div"),P=document.createElement("div"),N=document.createElement("div");ne.append(R,A,G,P,N);z(R);W(A);Z(G);U(P);oe(N);requestAnimationFrame(()=>window.scrollTo(0,0));
