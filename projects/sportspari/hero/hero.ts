//@ts-ignore
import './hero.css'

const HERO = {
  eyebrow:  'PROJECT 02 — HIGH-LOAD REAL-TIME PLATFORM',
  title:    'Sports',
  titleSub: 'Pari',
  role:     'Frontend Developer',
  desc:     'A real-time data platform processing live event feeds for thousands of concurrent users. WebSocket-driven UI, GraphQL API, KYC verification flow, and a full personal cabinet — built for performance and compliance.',
  liveHref: '#',
}

const USER = {
  name:    'M. Voronov',
  status:  'VERIFIED',
  balance: '12 450.00 ₽',
}

const EVENTS = [
  { league: 'UEFA Champions League', match: 'Real Madrid vs Bayern',  time: 'LIVE · 67\'', val: '1.85', delta: '+0.12', hot: true  },
  { league: 'Premier League',        match: 'Arsenal vs Chelsea',     time: '18:30',        val: '2.10', delta: '-0.05', hot: false },
  { league: 'NBA',                   match: 'Lakers vs Celtics',      time: '21:00',        val: '1.65', delta: '+0.08', hot: false },
]

const FEED = [
  { label: 'Balance topped up',  amount: '+5 000 ₽', status: 'success', time: '14:31' },
  { label: 'Bet settled — win',  amount: '+2 340 ₽', status: 'success', time: '13:55' },
  { label: 'Bet placed',         amount: '−500 ₽',   status: 'pending', time: '13:40' },
]

const TEMPLATE = `
<section class="sp-hero">
  <div class="sp-bg"></div>

  <div class="sp-text">
    <div class="sp-eyebrow">${HERO.eyebrow}</div>
    <h1 class="sp-title">${HERO.title}<span class="sp-sub">${HERO.titleSub}</span></h1>
    <div class="sp-role">${HERO.role}</div>
    <p class="sp-desc">${HERO.desc}</p>
    <div class="sp-ctas">
      <a href="${HERO.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT LIVE SITE →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="sp-visual">
    <div class="sp-visual-inner">
      <div class="sp-app">

        <div class="sp-topbar">
          <div class="sp-dot r"></div>
          <div class="sp-dot y"></div>
          <div class="sp-dot g"></div>
          <div class="sp-urlbar"><span>sportspari</span>.io/cabinet</div>
          <div class="sp-ws-pill">● WS</div>
        </div>

        <div class="sp-content">

          <!-- User header -->
          <div class="sp-user-header">
            <div class="sp-avatar">MV</div>
            <div class="sp-user-info">
              <div class="sp-user-name">${USER.name}</div>
              <div class="sp-user-status">${USER.status} · KYC PASSED</div>
            </div>
            <div class="sp-balance-block">
              <div class="sp-balance-lbl">Balance</div>
              <div class="sp-balance-val">${USER.balance}</div>
            </div>
          </div>

          <!-- Live events feed -->
          <div class="sp-section-lbl">
            <span class="sp-live-dot"></span>
            LIVE EVENTS
          </div>
          <div class="sp-events">
            ${EVENTS.map(e => `
              <div class="sp-event-row${e.hot ? ' hot' : ''}">
                <div class="sp-event-meta">
                  <div class="sp-event-league">${e.league}</div>
                  <div class="sp-event-match">${e.match}</div>
                </div>
                <div class="sp-event-time${e.time.startsWith('LIVE') ? ' live' : ''}">${e.time}</div>
                <div class="sp-odds-block">
                  <div class="sp-odds-val">${e.val}</div>
                  <div class="sp-odds-delta${e.delta.startsWith('+') ? ' up' : ' dn'}">${e.delta}</div>
                </div>
              </div>`).join('')}
          </div>

          <!-- Transaction feed -->
          <div class="sp-section-lbl">RECENT TRANSACTIONS</div>
          <div class="sp-txns">
            ${FEED.map(f => `
              <div class="sp-txn-row">
                <div class="sp-txn-label">${f.label}</div>
                <div class="sp-txn-time">${f.time}</div>
                <div class="sp-txn-amount ${f.status}">${f.amount}</div>
              </div>`).join('')}
          </div>

        </div>
      </div>

      <!-- Floating WS badge -->
      <div class="sp-badge">
        <div class="sp-badge-dot"></div>
        <div>
          <div class="sp-badge-title">WebSocket · Live</div>
          <div class="sp-badge-sub">~12ms latency</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sp-scroll">
    <div class="sp-scroll-line"></div>
    <span class="sp-scroll-label">SCROLL DOWN</span>
  </div>
</section>`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
