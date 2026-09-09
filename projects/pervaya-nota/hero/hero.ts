//@ts-ignore
import './hero.css'

const HERO = {
  eyebrow:  'PROJECT 06 — EDUCATOR PORTFOLIO SITE',
  title:    'Pervaya',
  titleSub: ' Nota',
  role:     'Fullstack Developer — solo',
  desc:     'A portfolio site for a music educator specializing in early-childhood education — built end to end, from frontend to infrastructure. Svelte on the front, Sveltia as a git-based CMS so the client edits scenarios, materials, and news without touching code, Tailwind for the design system, and a full Yandex Cloud deployment with custom NS/DNS on the client\'s own domain.',
  liveHref: 'https://pervaya-nota.ru/',
}

const NAV_ITEMS = ['About', 'Scenarios', 'Materials', 'Media', 'News']

const STATS = [
  { val: '25+',  label: 'Years experience' },
  { val: '50+',  label: 'Scenario scripts' },
  { val: '100+', label: 'Happy clients' },
]

const BADGE = { label: 'CMS', sub: 'Sveltia · git-based' }

const TEMPLATE = `
<section class="pn-hero">
  <div class="pn-bg"></div>
  <div class="pn-notes" aria-hidden="true">
    <span>♪</span><span>♫</span><span>♪</span>
  </div>

  <div class="pn-text">
    <div class="pn-eyebrow">${HERO.eyebrow}</div>
    <h1 class="pn-title">${HERO.title}<span class="pn-sub">${HERO.titleSub}</span></h1>
    <div class="pn-role">${HERO.role}</div>
    <p class="pn-desc">${HERO.desc}</p>
    <div class="pn-ctas">
      <a href="${HERO.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
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
            ${STATS.map(s => `
              <div class="pn-stat-box">
                <div class="pn-stat-val">${s.val}</div>
                <div class="pn-stat-lbl">${s.label}</div>
              </div>`).join('')}
          </div>

          <div class="pn-nav-label">SECTIONS</div>
          <div class="pn-navlinks">
            ${NAV_ITEMS.map(n => `<span class="pn-navlink">${n}</span>`).join('')}
          </div>

        </div>
      </div>

      <div class="pn-badge">
        <div class="pn-badge-dot"></div>
        <div>
          <div class="pn-badge-title">${BADGE.label}</div>
          <div class="pn-badge-sub">${BADGE.sub}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="pn-scroll">
    <div class="pn-scroll-line"></div>
    <span class="pn-scroll-label">SCROLL DOWN</span>
  </div>
</section>`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
