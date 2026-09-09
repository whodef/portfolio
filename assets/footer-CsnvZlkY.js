let v=null;function d(){const i=document.createElement("div");i.className="lightbox",i.innerHTML=`
    <span class="lb-close" id="lbClose">✕</span>
    <div class="lightbox-inner">
      <div class="lightbox-ph">
        <div class="lightbox-num" id="lbNum"></div>
        <div class="lightbox-lbl" id="lbLbl"></div>
      </div>
    </div>`,document.body.prepend(i),v=i,i.querySelector("#lbNum"),i.querySelector("#lbLbl"),i.querySelector("#lbClose").addEventListener("click",n),i.addEventListener("click",s=>{s.target===i&&n()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&n()})}function n(){v?.classList.remove("open")}function p(i,s){i.innerHTML=`
    <nav class="proj-nav">
      <a href="${s.homeHref}" class="proj-nav-back">← back</a>
      <div class="proj-nav-logo">.<span>T</span>S</div>
      <div class="proj-nav-counter">${s.counter}</div>
    </nav>`}function j(i,s){i.innerHTML=`
    <div class="proj-metrics">
      <div class="proj-metrics-inner">
        ${s.map(a=>`
          <div class="proj-metric">
            <div class="proj-metric-val">${a.val}</div>
            <div class="proj-metric-desc">${a.desc}</div>
            <div class="proj-metric-src">${a.source}</div>
          </div>`).join("")}
      </div>
    </div>`;const e=Array.from(i.querySelectorAll(".proj-metric"));let r=!1;const t=new IntersectionObserver(a=>{a.forEach(o=>{!o.isIntersecting||r||(r=!0,e.forEach((l,c)=>setTimeout(()=>l.classList.add("visible"),c*110)),t.disconnect())})},{threshold:.15});e.forEach(a=>t.observe(a))}function m(i,s){i.innerHTML=`
    <section class="proj-overview" id="overview">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h2&gt;</div>
        <div class="title-tag-wrap">
          <h2 class="section-title">Project Overview</h2>
          <div class="tag-close">&lt;/h2&gt;</div>
        </div>

        <div class="proj-overview-grid">
          <div class="proj-overview-body">
            ${s.paragraphs.map(e=>`<p>${e}</p>`).join("")}
          </div>
          <div class="proj-info-card">
            <div class="proj-info-header">PROJECT INFO</div>
            ${s.meta.map(e=>{const r=e.link?`<a href="${e.link}" target="_blank" rel="noopener">${e.val}</a>`:e.val;return`
                <div class="proj-info-row">
                  <div class="proj-info-key">${e.key}</div>
                  <div class="proj-info-val${e.green?" green":""}">${r}</div>
                </div>`}).join("")}
          </div>
        </div>
      </div>
    </section>`}function u(i,s){i.innerHTML=`
    <section class="proj-team" id="team">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h4&gt;</div>
        <div class="title-tag-wrap">
          <h4 class="section-title">Team</h4>
          <div class="tag-close">&lt;/h4&gt;</div>
        </div>
        <div class="proj-team-grid">
          ${s.map(a=>`
            <div class="proj-team-card" data-reveal>
              <div class="proj-team-avatar">${a.initials}</div>
              <div class="proj-team-name">${a.name}</div>
              <div class="proj-team-role">${a.role}</div>
              <div class="proj-team-tags">
                ${a.tags.map(o=>`<span class="proj-team-tag">${o}</span>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;const e=Array.from(i.querySelectorAll("[data-reveal]"));let r=!1;const t=new IntersectionObserver(a=>{a.forEach(o=>{!o.isIntersecting||r||(r=!0,e.forEach((l,c)=>setTimeout(()=>l.classList.add("visible"),c*110)),t.disconnect())})},{threshold:.15});e.forEach(a=>t.observe(a))}function f(i,s){i.innerHTML=`
    <section class="proj-stack" id="stack">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h5&gt;</div>
        <div class="title-tag-wrap">
          <h5 class="section-title">Tech Stack</h5>
          <div class="tag-close">&lt;/h5&gt;</div>
        </div>

        <div class="proj-stack-layout">
          <div class="proj-stack-desc">
            ${s.paragraphs.map(e=>`<p>${e}</p>`).join("")}
          </div>
          <div class="proj-stack-groups">
            ${s.groups.map(e=>`
              <div class="proj-stack-group">
                <div class="proj-stack-g-label">${e.label}</div>
                <div class="proj-stack-pills">
                  ${e.pills.map(r=>`<div class="proj-pill${r.hero?" hero":""}">${r.name}</div>`).join("")}
                </div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>`}function h(i,s){i.innerHTML=`
    <div class="proj-pnav">
      <div class="proj-pnav-inner">
        ${s.prev?`
          <a href="${s.prev.href}" class="proj-pnav-link prev">
            <div class="proj-pnav-dir">← PREV PROJECT</div>
            <div class="proj-pnav-title">${s.prev.label}</div>
          </a>`:"<div></div>"}
        ${s.next?`
          <a href="${s.next.href}" class="proj-pnav-link next">
            <div class="proj-pnav-dir">NEXT PROJECT →</div>
            <div class="proj-pnav-title">${s.next.label}</div>
          </a>`:"<div></div>"}
      </div>
    </div>`}function b(i){i.innerHTML=`
    <footer class="proj-footer">
      <div class="proj-footer-logo">.<span>T</span>S</div>
      <div class="proj-footer-sub">Tatiana Seliuk — Entrepreneur & Fullstack Engineer</div>
    </footer>`}export{p as a,j as b,m as c,u as d,f as e,h as f,b as g,d as m};
