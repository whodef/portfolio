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

// Nodes: absolute x,y for rect top-left. w=150 h=54
const NW = 150
const NH = 54

interface Node { id: string; label: string; sub: string; x: number; y: number; highlight?: boolean }
interface Edge { x1: number; y1: number; x2: number; y2: number; label: string; lx: number; ly: number }

const NODES: Node[] = [
  { id: 'tg',    label: 'Telegram Bot',    sub: 'aiogram',          x: 20,  y: 80  },
  { id: 'api',   label: 'Bot API Service', sub: 'FastAPI · Python', x: 240, y: 80  },
  { id: 'rmq',   label: 'RabbitMQ',        sub: 'Message Broker',   x: 240, y: 210 },
  { id: 'cel',   label: 'Celery Worker',   sub: 'Task Queue',       x: 240, y: 340 },
  { id: 'email', label: 'Email Service',   sub: 'SMTP · TLS',       x: 480, y: 210, highlight: true },
  { id: 'smtp',  label: 'Yandex Mail',     sub: 'Business · SMTP',  x: 480, y: 340, highlight: true },
]

function ncx(id: string) { return NODES.find(n => n.id === id)!.x + NW / 2 }
function ncy(id: string) { return NODES.find(n => n.id === id)!.y + NH / 2 }

// Build edges with midpoint for label
const RAW_EDGES = [
  { from: 'tg',    to: 'api',   label: 'user action'  },
  { from: 'api',   to: 'rmq',   label: 'publish task' },
  { from: 'rmq',   to: 'cel',   label: 'consume'      },
  { from: 'cel',   to: 'email', label: 'send job'     },
  { from: 'email', to: 'smtp',  label: 'SMTP / TLS'   },
]

const EDGES: Edge[] = RAW_EDGES.map(e => {
  const x1 = ncx(e.from), y1 = ncy(e.from)
  const x2 = ncx(e.to),   y2 = ncy(e.to)
  return { x1, y1, x2, y2, label: e.label, lx: (x1+x2)/2, ly: (y1+y2)/2 - 6 }
})

function renderNode(n: Node, i: number): string {
  return `
    <g style="animation-delay:${i * 0.1}s" class="arch-node${n.highlight ? ' highlight' : ''}">
      <rect x="${n.x}" y="${n.y}" width="${NW}" height="${NH}" rx="6"/>
      <text class="arch-node-label" x="${n.x + NW/2}" y="${n.y + 24}">${n.label}</text>
      <text class="arch-node-sub"   x="${n.x + NW/2}" y="${n.y + 40}">${n.sub}</text>
    </g>`
}

function renderEdge(e: Edge, i: number): string {
  return `
    <line class="arch-edge" x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}"
      marker-end="url(#arrow)" style="animation-delay:${0.3 + i * 0.15}s"/>
    <text class="arch-edge-label" x="${e.lx}" y="${e.ly}">${e.label}</text>`
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
          <svg class="ob-diagram" viewBox="0 0 660 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8"
                refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,255,136,0.5)"/>
              </marker>
            </defs>

            <!-- Column labels -->
            <text class="arch-section-label" x="20"  y="55">TRANSPORT</text>
            <text class="arch-section-label" x="240" y="55">SERVICES</text>
            <text class="arch-section-label" x="480" y="55">DELIVERY</text>

            <!-- Dividers -->
            <line class="arch-divider" x1="225" y1="60" x2="225" y2="410"/>
            <line class="arch-divider" x1="465" y1="60" x2="465" y2="410"/>

            <!-- Edges -->
            ${EDGES.map(renderEdge).join('')}

            <!-- Nodes -->
            ${NODES.map(renderNode).join('')}

            <!-- My work label -->
            <rect class="arch-my-badge" x="476" y="300" width="156" height="26" rx="4"/>
            <text class="arch-my-label" x="554" y="317">★ my microservice</text>
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
