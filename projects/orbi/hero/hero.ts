//@ts-ignore
import './hero.css'

const HERO = {
  eyebrow:  'PROJECT 05 — VOLUNTEER · NON-PROFIT PLATFORM',
  title:    'ORBI',
  titleSub: ' Fund',
  role:     'Fullstack Developer — volunteer',
  desc:     'A Telegram-based service platform for ORBI — Russia\'s leading stroke awareness foundation. I designed and deployed the email notification microservice: user-facing transactional emails and internal alerts on bot failures, built on Python with Celery, RabbitMQ, and Yandex Business Mail over SMTP/TLS.',
  liveHref: 'https://orbifond.ru',
}

const NODES = [
  { id: 'tg',    label: 'Telegram Bot',      sub: 'aiogram',          x: 80,  y: 60  },
  { id: 'api',   label: 'Bot API Service',   sub: 'FastAPI · Python',  x: 300, y: 60  },
  { id: 'rmq',   label: 'RabbitMQ',          sub: 'Message Broker',   x: 300, y: 200 },
  { id: 'cel',   label: 'Celery Worker',     sub: 'Task Queue',       x: 300, y: 340 },
  { id: 'email', label: 'Email Service',     sub: 'SMTP · TLS',       x: 520, y: 200 },
  { id: 'smtp',  label: 'Yandex Business',   sub: 'Mail · SMTP',      x: 520, y: 340 },
]

const EDGES = [
  { from: 'tg',  to: 'api',   label: 'user action'   },
  { from: 'api', to: 'rmq',   label: 'publish task'  },
  { from: 'rmq', to: 'cel',   label: 'consume'       },
  { from: 'cel', to: 'email', label: 'send job'      },
  { from: 'email', to: 'smtp', label: 'SMTP/TLS'     },
]

// SVG arrows between nodes — positions are center of each node card (w=140 h=52)
const NODE_W = 140
const NODE_H = 52

function cx(id: string): number {
  return (NODES.find(n => n.id === id)!.x) + NODE_W / 2
}
function cy(id: string): number {
  return (NODES.find(n => n.id === id)!.y) + NODE_H / 2
}

function renderEdge(e: typeof EDGES[number], i: number): string {
  const x1 = cx(e.from), y1 = cy(e.from)
  const x2 = cx(e.to),   y2 = cy(e.to)
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  return `
    <line class="arch-edge" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
      style="animation-delay:${0.3 + i * 0.15}s"/>
    <text class="arch-edge-label" x="${mx}" y="${my - 6}">${e.label}</text>`
}

function renderNode(n: typeof NODES[number], i: number): string {
  const highlight = n.id === 'email' || n.id === 'cel'
  return `
    <g class="arch-node${highlight ? ' highlight' : ''}"
       style="animation-delay:${i * 0.1}s"
       transform="translate(${n.x},${n.y})">
      <rect width="${NODE_W}" height="${NODE_H}" rx="6"/>
      <text class="arch-node-label" x="${NODE_W/2}" y="22">${n.label}</text>
      <text class="arch-node-sub"   x="${NODE_W/2}" y="38">${n.sub}</text>
    </g>`
}

const TEMPLATE = `
<section class="ob-hero">
  <div class="ob-bg"></div>

  <div class="ob-text">
    <div class="ob-eyebrow">${HERO.eyebrow}</div>
    <h1 class="ob-title">${HERO.title}<span class="ob-sub">${HERO.titleSub}</span></h1>
    <div class="ob-role">${HERO.role}</div>
    <p class="ob-desc">${HERO.desc}</p>
    <div class="ob-ctas">
      <a href="${HERO.liveHref}" target="_blank" rel="noopener" class="btn-primary">VISIT ORBI FUND →</a>
      <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
    </div>
  </div>

  <div class="ob-visual">
    <div class="ob-visual-inner">
      <div class="ob-app">

        <div class="ob-topbar">
          <div class="ob-dot r"></div>
          <div class="ob-dot y"></div>
          <div class="ob-dot g"></div>
          <span class="ob-topbar-label">SYSTEM ARCHITECTURE</span>
          <div class="ob-status-pill">● RUNNING</div>
        </div>

        <div class="ob-diagram-wrap">
          <svg class="ob-diagram" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8"
                refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,255,136,0.5)"/>
              </marker>
              <filter id="nodeGlow">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            <!-- Section labels -->
            <text class="arch-section-label" x="10"  y="20">TRANSPORT</text>
            <text class="arch-section-label" x="230" y="20">SERVICES</text>
            <text class="arch-section-label" x="490" y="20">DELIVERY</text>

            <!-- Vertical dividers -->
            <line class="arch-divider" x1="230" y1="30" x2="230" y2="400"/>
            <line class="arch-divider" x1="490" y1="30" x2="490" y2="400"/>

            <!-- Edges -->
            <g marker-end="url(#arrow)">
              ${EDGES.map(renderEdge).join('')}
            </g>

            <!-- Nodes -->
            ${NODES.map(renderNode).join('')}

            <!-- My work badge -->
            <g transform="translate(505,270)">
              <rect class="arch-my-badge" width="130" height="26" rx="4"/>
              <text class="arch-my-label" x="65" y="17">★ my microservice</text>
            </g>
          </svg>
        </div>

        <!-- Log strip -->
        <div class="ob-log">
          <div class="ob-log-line success">[14:31:02] email sent → user@example.com · welcome</div>
          <div class="ob-log-line success">[14:31:05] email sent → ops@orbifond.ru · bot health ok</div>
          <div class="ob-log-line warn">   [14:32:11] bot error detected → alert dispatched</div>
          <div class="ob-log-line success">[14:32:12] email sent → ops@orbifond.ru · bot failure</div>
        </div>

      </div>

      <!-- Floating badge -->
      <div class="ob-badge">
        <div class="ob-badge-icon">⚙</div>
        <div>
          <div class="ob-badge-title">Celery · RabbitMQ</div>
          <div class="ob-badge-sub">async task queue</div>
        </div>
      </div>
    </div>
  </div>

  <div class="ob-scroll">
    <div class="ob-scroll-line"></div>
    <span class="ob-scroll-label">SCROLL DOWN</span>
  </div>
</section>`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
