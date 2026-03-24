let v=null;function d(){const i=document.createElement("div");i.className="lightbox",i.innerHTML=`
    <span class="lb-close" id="lbClose">✕</span>
    <div class="lightbox-inner">
      <div class="lightbox-ph">
        <div class="lightbox-num" id="lbNum"></div>
        <div class="lightbox-lbl" id="lbLbl"></div>
      </div>
    </div>`,document.body.prepend(i),v=i,i.querySelector("#lbNum"),i.querySelector("#lbLbl"),i.querySelector("#lbClose").addEventListener("click",c),i.addEventListener("click",a=>{a.target===i&&c()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&c()})}function c(){v?.classList.remove("open")}function p(i,a){i.innerHTML=`
    <nav class="proj-nav">
      <a href="${a.homeHref}" class="proj-nav-back">← back</a>
      <div class="proj-nav-logo">.<span>T</span>S</div>
      <div class="proj-nav-counter">${a.counter}</div>
    </nav>`}function j(i,a){i.innerHTML=`
    <div class="proj-metrics">
      <div class="proj-metrics-inner">
        ${a.map(e=>`
          <div class="proj-metric">
            <div class="proj-metric-val">${e.val}</div>
            <div class="proj-metric-desc">${e.desc}</div>
            <div class="proj-metric-src">${e.source}</div>
          </div>`).join("")}
      </div>
    </div>`;const s=Array.from(i.querySelectorAll(".proj-metric"));let l=!1;const r=new IntersectionObserver(e=>{e.forEach(o=>{!o.isIntersecting||l||(l=!0,s.forEach((n,t)=>setTimeout(()=>n.classList.add("visible"),t*110)),r.disconnect())})},{threshold:.15});s.forEach(e=>r.observe(e))}function m(i,a){i.innerHTML=`
    <section class="proj-overview" id="overview">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h2&gt;</div>
        <h2 class="section-title">Project Overview</h2>
        <div class="tag-close">&lt;/h2&gt;</div>

        <div class="proj-overview-grid">
          <div class="proj-overview-body">
            ${a.paragraphs.map(s=>`<p>${s}</p>`).join("")}
          </div>
          <div class="proj-info-card">
            <div class="proj-info-header">PROJECT INFO</div>
            ${a.meta.map(s=>{const l=s.link?`<a href="${s.link}" target="_blank" rel="noopener">${s.val}</a>`:s.val;return`
                <div class="proj-info-row">
                  <div class="proj-info-key">${s.key}</div>
                  <div class="proj-info-val${s.green?" green":""}">${l}</div>
                </div>`}).join("")}
          </div>
        </div>
      </div>
    </section>`}function u(i,a){i.innerHTML=`
    <section class="proj-gallery" id="gallery">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h3&gt;</div>
        <h3 class="section-title">Screenshots</h3>
        <div class="tag-close">&lt;/h3&gt;</div>
        <p class="proj-gallery-lead">${a.lead}</p>
        <div class="proj-masonry">
          ${a.items.map((s,l)=>{const r=String(l+1).padStart(2,"0"),e=s.src?`<img class="proj-masonry-img" src="${s.src}" alt="${s.label}" loading="lazy">`:`<div class="proj-img-ph ${s.ratio}">
                   <div class="proj-img-ph-num">[ ${r} ]</div>
                   <div class="proj-img-ph-lbl">${s.label}</div>
                 </div>`;return`
              <div class="proj-masonry-item" data-num="${r}" data-lbl="${s.label}">
                ${e}
                <div class="proj-masonry-overlay">${s.label}</div>
              </div>`}).join("")}
        </div>
      </div>
    </section>`,i.querySelectorAll(".proj-masonry-item").forEach(s=>{s.addEventListener("click",()=>(s.dataset.num,s.dataset.lbl,void 0))})}function g(i,a){i.innerHTML=`
    <section class="proj-team" id="team">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h4&gt;</div>
        <h4 class="section-title">Team</h4>
        <div class="tag-close">&lt;/h4&gt;</div>
        <div class="proj-team-grid">
          ${a.map(e=>`
            <div class="proj-team-card" data-reveal>
              <div class="proj-team-avatar">${e.initials}</div>
              <div class="proj-team-name">${e.name}</div>
              <div class="proj-team-role">${e.role}</div>
              <div class="proj-team-tags">
                ${e.tags.map(o=>`<span class="proj-team-tag">${o}</span>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;const s=Array.from(i.querySelectorAll("[data-reveal]"));let l=!1;const r=new IntersectionObserver(e=>{e.forEach(o=>{!o.isIntersecting||l||(l=!0,s.forEach((n,t)=>setTimeout(()=>n.classList.add("visible"),t*110)),r.disconnect())})},{threshold:.15});s.forEach(e=>r.observe(e))}function h(i,a){i.innerHTML=`
    <section class="proj-stack" id="stack">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h5&gt;</div>
        <h5 class="section-title">Tech Stack</h5>
        <div class="tag-close">&lt;/h5&gt;</div>

        <div class="proj-stack-layout">
          <div class="proj-stack-desc">
            ${a.paragraphs.map(s=>`<p>${s}</p>`).join("")}
          </div>
          <div class="proj-stack-groups">
            ${a.groups.map(s=>`
              <div class="proj-stack-group">
                <div class="proj-stack-g-label">${s.label}</div>
                <div class="proj-stack-pills">
                  ${s.pills.map(l=>`<div class="proj-pill${l.hero?" hero":""}">${l.name}</div>`).join("")}
                </div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>`}function b(i,a){i.innerHTML=`
    <div class="proj-pnav">
      <div class="proj-pnav-inner">
        ${a.prev?`
          <a href="${a.prev.href}" class="proj-pnav-link prev">
            <div class="proj-pnav-dir">← PREV PROJECT</div>
            <div class="proj-pnav-title">${a.prev.label}</div>
          </a>`:"<div></div>"}
        ${a.next?`
          <a href="${a.next.href}" class="proj-pnav-link next">
            <div class="proj-pnav-dir">NEXT PROJECT →</div>
            <div class="proj-pnav-title">${a.next.label}</div>
          </a>`:"<div></div>"}
      </div>
    </div>`}function f(i){i.innerHTML=`
    <footer class="proj-footer">
      <div class="proj-footer-logo">.<span>T</span>S</div>
      <div class="proj-footer-sub">Tatiana Seliuk — Entrepreneur & Fullstack Engineer</div>
    </footer>`}export{p as a,j as b,m as c,u as d,g as e,h as f,b as g,f as h,d as m};
