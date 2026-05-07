import './press.css'

interface PressItem {
  name:     string
  date?:    string
  url?:     string
  featured: boolean
}

const PRESS_ITEMS: PressItem[] = [
  { name: 'ORBI', date: 'Fullstack Developer — volunteer',   url: '/portfolio/projects/orbi/', featured: true },
  { name: 'More projects dropping soon', date: 'Stay tuned', url: '#', featured: true }
  // { name: 'Yahoo! Finance',                           url: '#', featured: false },
  // { name: 'Medium',                                   url: '#', featured: false },
  // { name: 'Thrive Global',                            url: '#', featured: false },
]

const ARROW_SVG = `
  <svg class="press-arrow-svg" width="77" height="58" viewBox="0 0 77 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_press)">
      <path class="arrow-path" d="M62.305 30.5L0.500001 30.5L0.500001 27.5L62.305 27.5C53.72 23.18 48.747 14.221 47.5 0.790002L50.522 0.500001C52.203 18.618 60.747 27.418 76.5 27.418L76.5 30.582C60.747 30.582 52.203 39.382 50.522 57.5L47.5 57.21C48.747 43.779 53.719 34.82 62.305 30.5Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_press">
        <rect width="58" height="77" fill="white" transform="translate(2.53526e-06 58) rotate(-90)"/>
      </clipPath>
    </defs>
  </svg>`

function renderItem(item: PressItem): string {
  return `
    <a class="press-item" href="${item.url ?? '#'}" target="_self" rel="noopener">
      <div class="press-info">
        <span class="press-name">${item.name}</span>
        ${item.date ? `<span class="press-date">${item.date}</span>` : ''}
      </div>
      <span class="press-arrow">${ARROW_SVG}</span>
    </a>`
}

const TEMPLATE = `
<section id="press">
  <div class="press-section-header">
    <div class="tag-label">&lt;h3&gt;</div>
    <div class="press-title-wrap">
      <h3 class="section-title">Side Projects</h3>
      <div class="tag-close">&lt;/h3&gt;</div>
    </div>
  </div>

  <div class="press-list">
    ${PRESS_ITEMS.map(renderItem).join('\n  ')}
  </div>

  <div class="press-connector-wrap">
    <svg class="press-connector-svg" width="40" height="278" viewBox="0 0 40 278" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pressLineGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <circle class="press-dot-glow" id="pressDotTopGlow" cx="20" cy="20" r="20" fill="#00FF94" opacity="0"/>
      <circle class="press-dot-white" id="pressDotTop" cx="20" cy="20" r="8" fill="white" opacity="0"/>

      <line
        id="pressLine"
        x1="20" y1="20"
        x2="20" y2="250"
        stroke="#00FF94"
        stroke-width="3"
        stroke-linecap="round"
        filter="url(#pressLineGlow)"
      />

      <circle class="press-dot-glow" id="pressDotBottomGlow" cx="20" cy="258" r="20" fill="#00FF94" opacity="0"/>
      <circle class="press-dot-white" id="pressDotBottom" cx="20" cy="258" r="8" fill="white" opacity="0"/>
    </svg>
  </div>
</section>
`

export function mountPress(root: HTMLElement): void {
  root.innerHTML = TEMPLATE

  const connWrap = root.querySelector<HTMLElement>('.press-connector-wrap')!

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatePressConnector()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  observer.observe(connWrap)
}

function animatePressConnector(): void {
  const line       = document.getElementById('pressLine')          as SVGLineElement | null
  const topGlow    = document.getElementById('pressDotTopGlow')    as SVGCircleElement | null
  const topDot     = document.getElementById('pressDotTop')        as SVGCircleElement | null
  const bottomGlow = document.getElementById('pressDotBottomGlow') as SVGCircleElement | null
  const bottomDot  = document.getElementById('pressDotBottom')     as SVGCircleElement | null

  if (!line) return

  const lineLen = 230
  line.style.strokeDasharray  = String(lineLen)
  line.style.strokeDashoffset = String(lineLen)
  line.style.transition       = 'none'

  if (topGlow) { topGlow.style.transition = 'opacity 0.3s ease'; topGlow.style.opacity = '0.21' }
  if (topDot)  { topDot.style.transition  = 'opacity 0.3s ease'; topDot.style.opacity  = '1' }

  requestAnimationFrame(() => {
    line.style.transition = 'stroke-dashoffset 1400ms cubic-bezier(0.4,0,0.2,1)'
    line.style.strokeDashoffset = '0'

    setTimeout(() => {
      if (bottomGlow) {
        bottomGlow.style.transition = 'opacity 0.4s ease'
        bottomGlow.style.opacity = '0.21'
        bottomGlow.style.animation = 'pressGlowPulse 3s ease-in-out infinite'
      }
      if (bottomDot) { bottomDot.style.transition = 'opacity 0.4s ease'; bottomDot.style.opacity = '1' }
    }, 1300)
  })
}
