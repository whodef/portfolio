let v=null;function d(){const s=document.createElement("div");s.className="lightbox",s.innerHTML=`
    <span class="lb-close" id="lbClose">✕</span>
    <div class="lightbox-inner">
      <div class="lightbox-ph">
        <div class="lightbox-num" id="lbNum"></div>
        <div class="lightbox-lbl" id="lbLbl"></div>
      </div>
    </div>`,document.body.prepend(s),v=s,s.querySelector("#lbNum"),s.querySelector("#lbLbl"),s.querySelector("#lbClose").addEventListener("click",c),s.addEventListener("click",i=>{i.target===s&&c()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&c()})}function c(){v?.classList.remove("open")}function p(s,i){s.innerHTML=`
    <nav class="proj-nav">
      <a href="${i.homeHref}" class="proj-nav-back">← back</a>
      <div class="proj-nav-logo">.<span>T</span>S</div>
      <div class="proj-nav-counter">${i.counter}</div>
    </nav>`}function j(s,i){s.innerHTML=`
    <div class="proj-metrics">
      <div class="proj-metrics-inner">
        ${i.map(a=>`
          <div class="proj-metric">
            <div class="proj-metric-val">${a.val}</div>
            <div class="proj-metric-desc">${a.desc}</div>
            <div class="proj-metric-src">${a.source}</div>
          </div>`).join("")}
      </div>
    </div>`;const e=Array.from(s.querySelectorAll(".proj-metric"));let r=!1;const o=new IntersectionObserver(a=>{a.forEach(t=>{!t.isIntersecting||r||(r=!0,e.forEach((l,n)=>setTimeout(()=>l.classList.add("visible"),n*110)),o.disconnect())})},{threshold:.15});e.forEach(a=>o.observe(a))}function m(s,i){s.innerHTML=`
    <section class="proj-overview" id="overview">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h2&gt;</div>
        <h2 class="section-title">Project Overview</h2>
        <div class="tag-close">&lt;/h2&gt;</div>

        <div class="proj-overview-grid">
          <div class="proj-overview-body">
            ${i.paragraphs.map(e=>`<p>${e}</p>`).join("")}
          </div>
          <div class="proj-info-card">
            <div class="proj-info-header">PROJECT INFO</div>
            ${i.meta.map(e=>{const r=e.link?`<a href="${e.link}" target="_blank" rel="noopener">${e.val}</a>`:e.val;return`
                <div class="proj-info-row">
                  <div class="proj-info-key">${e.key}</div>
                  <div class="proj-info-val${e.green?" green":""}">${r}</div>
                </div>`}).join("")}
          </div>
        </div>
      </div>
    </section>`}function u(s,i){s.innerHTML=`
    <section class="proj-team" id="team">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h4&gt;</div>
        <h4 class="section-title">Team</h4>
        <div class="tag-close">&lt;/h4&gt;</div>
        <div class="proj-team-grid">
          ${i.map(a=>`
            <div class="proj-team-card" data-reveal>
              <div class="proj-team-avatar">${a.initials}</div>
              <div class="proj-team-name">${a.name}</div>
              <div class="proj-team-role">${a.role}</div>
              <div class="proj-team-tags">
                ${a.tags.map(t=>`<span class="proj-team-tag">${t}</span>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;const e=Array.from(s.querySelectorAll("[data-reveal]"));let r=!1;const o=new IntersectionObserver(a=>{a.forEach(t=>{!t.isIntersecting||r||(r=!0,e.forEach((l,n)=>setTimeout(()=>l.classList.add("visible"),n*110)),o.disconnect())})},{threshold:.15});e.forEach(a=>o.observe(a))}function f(s,i){s.innerHTML=`
    <section class="proj-stack" id="stack">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h5&gt;</div>
        <h5 class="section-title">Tech Stack</h5>
        <div class="tag-close">&lt;/h5&gt;</div>

        <div class="proj-stack-layout">
          <div class="proj-stack-desc">
            ${i.paragraphs.map(e=>`<p>${e}</p>`).join("")}
          </div>
          <div class="proj-stack-groups">
            ${i.groups.map(e=>`
              <div class="proj-stack-group">
                <div class="proj-stack-g-label">${e.label}</div>
                <div class="proj-stack-pills">
                  ${e.pills.map(r=>`<div class="proj-pill${r.hero?" hero":""}">${r.name}</div>`).join("")}
                </div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>`}function h(s,i){s.innerHTML=`
    <div class="proj-pnav">
      <div class="proj-pnav-inner">
        ${i.prev?`
          <a href="${i.prev.href}" class="proj-pnav-link prev">
            <div class="proj-pnav-dir">← PREV PROJECT</div>
            <div class="proj-pnav-title">${i.prev.label}</div>
          </a>`:"<div></div>"}
        ${i.next?`
          <a href="${i.next.href}" class="proj-pnav-link next">
            <div class="proj-pnav-dir">NEXT PROJECT →</div>
            <div class="proj-pnav-title">${i.next.label}</div>
          </a>`:"<div></div>"}
      </div>
    </div>`}function b(s){s.innerHTML=`
    <footer class="proj-footer">
      <div class="proj-footer-logo">.<span>T</span>S</div>
      <div class="proj-footer-sub">Tatiana Seliuk — Entrepreneur & Fullstack Engineer</div>
    </footer>`}export{p as a,j as b,m as c,u as d,f as e,h as f,b as g,d as m};
