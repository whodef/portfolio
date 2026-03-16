import './hero.css'

// ─── DATA — edit here ─────────────────────────────────────────────────────────
const HERO = {
  eyebrow:  'PROJECT 02 — ICE SPORTS PLATFORM',
  title:    'TheRink',
  titleSub: '.ru',
  role:     'Lead Developer',
  desc:     'A premium ice sports booking and management platform. Real-time scheduling, equipment rental, multi-rink coordination and analytics dashboards — all in one system built for arenas.',
  liveHref: 'https://therink.ru',
}

/**
 * Schedule grid rows: [time, mon, tue, wed, thu, fri, sat]
 * Slot values: '' | 'ice' | 'figure' | 'hockey' | 'maintenance'
 */
const SCHEDULE: [string, string, string, string, string, string, string][] = [
  ['06:00', 'ice',    '',       'ice',    '',       'ice',    'hockey'],
  ['08:00', 'figure', 'figure', '',       'figure', 'figure', 'hockey'],
  ['10:00', 'maint',  'ice',    'ice',    'maint',  '',       'ice'   ],
  ['12:00', 'hockey', '',       'hockey', 'ice',    'hockey', 'figure'],
]

const STATS = [
  { val: '94%',  lbl: 'Occupancy today' },
  { val: '38',   lbl: 'Active bookings' },
  { val: '$4.2k', lbl: 'Revenue today'  },
]

const BADGE = { label: 'NEW BOOKING', sub: 'Rink B · 14:00' }
// ─────────────────────────────────────────────────────────────────────────────

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function schedRow([time, ...slots]: [string, ...string[]]): string {
  return `
    <div class="tr-sched-row">
      <div class="tr-time">${time}</div>
      ${slots.map(cls => `<div class="tr-slot ${cls}"></div>`).join('')}
    </div>`
}

const TEMPLATE = `
<section class="tr-hero">
  <div class="tr-bg"></div>
  <div class="tr-circle"></div>

  <div class="tr-text">
    <div class="tr-eyebrow">${HERO.eyebrow}</div>
    <h1 class="tr-title">${HERO.title}<span class="tr-sub">${HERO.titleSub}</span></h1>
    <div class="tr-role">${HERO.role}</div>
    <p class="tr-desc">${HERO.desc}</p>
    <div class="tr-ctas">
      <a href="${HERO.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="tr-visual">
    <div class="tr-visual-inner">
      <div class="tr-app">
        <div class="tr-topbar">
          <div class="tr-dot r"></div>
          <div class="tr-dot y"></div>
          <div class="tr-dot g"></div>
          <div class="tr-urlbar"><span>therink</span>.io/schedule</div>
        </div>
        <div class="tr-content">
          <div class="tr-sched-head">
            <div class="tr-time"></div>
            ${DAYS.map(d => `<div class="tr-day">${d}</div>`).join('')}
          </div>
          ${SCHEDULE.map(schedRow).join('')}
          <div class="tr-stats">
            ${STATS.map(s => `
              <div class="tr-stat">
                <div class="tr-stat-val">${s.val}</div>
                <div class="tr-stat-lbl">${s.lbl}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="tr-badge">
        <div class="tr-badge-dot"></div>
        <div>
          <div class="tr-badge-title">${BADGE.label}</div>
          <div class="tr-badge-sub">${BADGE.sub}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="tr-scroll">
    <div class="tr-scroll-line"></div>
    <span class="tr-scroll-label">SCROLL DOWN</span>
  </div>
</section>`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
