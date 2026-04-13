//@ts-ignore
import './hero.css'

const HERO = {
  eyebrow:  'PROJECT 04 — OPEN-SOURCE CULTURAL PLATFORM',
  title:    'Lubi',
  titleSub: 'movka',
  role:     'Frontend Developer',
  desc:     'A production website for one of Russia\'s most important contemporary drama festivals — built collaboratively by a distributed team of 20+ developers across 4 frontend squads. I owned the play search feature and author profile pages.',
  liveHref: 'https://lubimovka.art',
}

const SEARCH = {
  query:   'Searching...',
  results: [
    { title: 'Unlimited',                author: 'Чуклинов Максим',    year: '2014', city: 'Москва'             },
    { title: 'Спички детям',             author: 'Потапова Оля',       year: '2020', city: 'Санкт-Петербург'    },
    { title: 'Пацаны против х**ни',      author: 'Блинова Нелли',       year: '2013', city: 'Москва'            },
    { title: 'Пустое множество',         author: 'Брезгунова Екатерина',  year: '2015', city: 'Москва/Бостон'   },
  ],
}

const TEMPLATE = `
<section class="lm-hero">
  <div class="lm-bg"></div>

  <div class="lm-text">
    <div class="lm-eyebrow">${HERO.eyebrow}</div>
    <h1 class="lm-title">${HERO.title}<span class="lm-sub">${HERO.titleSub}</span></h1>
    <div class="lm-role">${HERO.role}</div>
    <p class="lm-desc">${HERO.desc}</p>
    <div class="lm-ctas">
      <a href="${HERO.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
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
              <span class="lm-search-query">${SEARCH.query}</span>
              <span class="lm-search-cursor"></span>
            </div>
            <div class="lm-search-meta">${SEARCH.results.length} results found</div>
          </div>

          <!-- Results -->
          <div class="lm-results">
            ${SEARCH.results.map((r, i) => `
              <div class="lm-result-row" style="animation-delay: ${i * 0.08}s">
                <div class="lm-result-main">
                  <div class="lm-result-title">${r.title}</div>
                  <div class="lm-result-author">${r.author}</div>
                </div>
                <div class="lm-result-meta">
                  <div class="lm-result-city">${r.city}</div>
                  <div class="lm-result-year">${r.year}</div>
                </div>
                <div class="lm-result-arrow">→</div>
              </div>`).join('')}
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
</section>`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
