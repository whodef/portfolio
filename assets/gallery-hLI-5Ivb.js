import"./footer-CsnvZlkY.js";function o(l,s){l.innerHTML=`
    <section class="proj-gallery" id="gallery">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h3&gt;</div>
        <div class="title-tag-wrap">
          <h3 class="section-title">Screenshots</h3>
          <div class="tag-close">&lt;/h3&gt;</div>
        </div>
        <p class="proj-gallery-lead">${s.lead}</p>
        <div class="proj-masonry">
          ${s.items.map((a,r)=>{const i=String(r+1).padStart(2,"0"),n=a.src?`<img class="proj-masonry-img" src="${a.src}" alt="${a.label}" loading="lazy">`:`<div class="proj-img-ph ${a.ratio}">
                   <div class="proj-img-ph-num">[ ${i} ]</div>
                   <div class="proj-img-ph-lbl">${a.label}</div>
                 </div>`;return`
              <div class="proj-masonry-item" data-num="${i}" data-lbl="${a.label}">
                ${n}
                <div class="proj-masonry-overlay">${a.label}</div>
              </div>`}).join("")}
        </div>
      </div>
    </section>`,l.querySelectorAll(".proj-masonry-item").forEach(a=>{a.addEventListener("click",()=>(a.dataset.num,a.dataset.lbl,void 0))})}export{o as m};
