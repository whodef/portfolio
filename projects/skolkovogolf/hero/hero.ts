//@ts-ignore
import './hero.css'

// ─── DATA — edit here ─────────────────────────────────────────────────────────
const HERO = {
  eyebrow:  'PROJECT 01 — PREMIUM GOLF CLUB',
  title:    'Skolkovo',
  titleSub: ' Golf',
  role:     'Frontend Developer',
  desc:     'A digital platform for one of Russia\'s most exclusive private golf clubs. Parallax-driven homepage, CMS integration with Wagtail, and a members-only personal cabinet — built to match the club\'s world-class positioning.',
  liveHref: 'https://skolkovogolf.com/',
}

// Member cabinet mock data
const MEMBER = {
  name:       'Alexander M.',
  status:     'FULL MEMBER',
  since:      'Since 2019',
  handicap:   '8.4',
  rounds:     '47',
  nextTeeTime: 'Today · 14:30 · Hole 1',
}

const BOOKINGS = [
  { date: 'Sat 15 Mar', time: '09:00', holes: '18', status: 'confirmed' },
  { date: 'Wed 19 Mar', time: '14:30', holes: '9',  status: 'confirmed' },
  { date: 'Sat 22 Mar', time: '11:00', holes: '18', status: 'pending'   },
]

const BADGE = { label: 'TEE TIME', sub: 'Today · 14:30' }
// ─────────────────────────────────────────────────────────────────────────────

const TEMPLATE = `
<section class="sg-hero">
  <div class="sg-bg"></div>
  <div class="sg-circle"></div>

  <div class="sg-text">
    <div class="sg-eyebrow">${HERO.eyebrow}</div>
    <h1 class="sg-title">${HERO.title}<span class="sg-sub">${HERO.titleSub}</span></h1>
    <div class="sg-role">${HERO.role}</div>
    <p class="sg-desc">${HERO.desc}</p>
    <div class="sg-ctas">
      <a href="${HERO.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="sg-visual">
    <div class="sg-visual-inner">
      <div class="sg-app">

        <div class="sg-topbar">
          <div class="sg-dot r"></div>
          <div class="sg-dot y"></div>
          <div class="sg-dot g"></div>
          <div class="sg-urlbar"><span>skolkovogolf</span>.com/cabinet</div>
        </div>

        <div class="sg-content">

          <!-- Member header -->
          <div class="sg-member-header">
            <div class="sg-avatar">AM</div>
            <div class="sg-member-info">
              <div class="sg-member-name">${MEMBER.name}</div>
              <div class="sg-member-status">${MEMBER.status} · ${MEMBER.since}</div>
            </div>
            <div class="sg-member-badge">ACTIVE</div>
          </div>

          <!-- Stats row -->
          <div class="sg-stats-row">
            <div class="sg-stat-box">
              <div class="sg-stat-val">${MEMBER.handicap}</div>
              <div class="sg-stat-lbl">Handicap</div>
            </div>
            <div class="sg-stat-box">
              <div class="sg-stat-val">${MEMBER.rounds}</div>
              <div class="sg-stat-lbl">Rounds played</div>
            </div>
            <div class="sg-stat-box next-tee">
              <div class="sg-stat-lbl">Next tee time</div>
              <div class="sg-next-time">${MEMBER.nextTeeTime}</div>
            </div>
          </div>

          <!-- Booking list -->
          <div class="sg-bookings-label">UPCOMING BOOKINGS</div>
          <div class="sg-bookings">
            ${BOOKINGS.map(b => `
              <div class="sg-booking-row">
                <div class="sg-booking-date">${b.date}</div>
                <div class="sg-booking-time">${b.time}</div>
                <div class="sg-booking-holes">${b.holes} holes</div>
                <div class="sg-booking-status ${b.status}">${b.status}</div>
              </div>`).join('')}
          </div>

        </div>
      </div>

      <!-- Floating badge -->
      <div class="sg-badge">
        <div class="sg-badge-dot"></div>
        <div>
          <div class="sg-badge-title">${BADGE.label}</div>
          <div class="sg-badge-sub">${BADGE.sub}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sg-scroll">
    <div class="sg-scroll-line"></div>
    <span class="sg-scroll-label">SCROLL DOWN</span>
  </div>
</section>`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
