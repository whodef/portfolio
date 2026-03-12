import './portfolio.css'

interface Slide {
  title: string
  desc:  string
  role:  string
}

const SLIDES: Slide[] = [
  {
    title: 'Alqen.IO',
    desc:  'Alqen.io is an AI e-commerce platform that increases profits and accelerates the operation process swiftly using advanced data and high-performance algorithms.',
    role:  'FOUNDER AND CEO',
  },
  {
    title: 'TheRink.io',
    desc:  'A premium ice sports booking and management platform with real-time scheduling, equipment rental, and analytics dashboards.',
    role:  'LEAD DEVELOPER',
  },
  {
    title: 'SportsPari',
    desc:  'Microservices-based sports betting platform using Protocol Buffers, real-time data feeds, and advanced risk management systems.',
    role:  'FULL-STACK ARCHITECT',
  },
]

const TEMPLATE = `
<section id="portfolio">
  <div class="section-header" style="max-width:1200px;margin:0 auto;width:100%">
    <div class="tag-label">&lt;h2&gt;</div>
    <div style="display:inline-block; position:relative; margin-bottom:140px;">
      <h2 class="section-title" id="portfolioTitle" style="margin-left:40px;">My Portfolio</h2>
      <div class="tag-close" style="position:absolute; right:-40px; bottom:-40px">&lt;/h2&gt;</div>
    </div>
  </div>

  <div class="portfolio-content">
    <div class="portfolio-card" id="portfolioCard">
      <div class="card-image">
        <span class="ripple-1"></span>
        <span class="ripple-2"></span>
        <span class="ripple-3"></span>
        <div class="mock-screen">
          <div class="mock-bar"></div>
          <div class="mock-bar w40"></div>
          <div class="mock-wave"></div>
          <div class="mock-bar w80"></div>
          <div class="mock-bar w40"></div>
        </div>
      </div>
      <div class="card-text">
        <div class="p-tag">&lt;p&gt;</div>
        <h3 class="card-title"></h3>
        <p  class="card-desc"></p>
        <p  class="card-role"></p>
        <div class="p-tag">&lt;/p&gt;</div>
      </div>
    </div>
  </div>

  <div class="slider-controls" id="sliderControls">
    <button class="slider-btn" id="prevBtn">&#8249;</button>
    <div class="slider-track">
      <div class="slider-progress" id="sliderProgress"></div>
    </div>
    <button class="slider-btn" id="nextBtn">&#8250;</button>
  </div>

  <svg id="portfolioConnectorSvg" class="portfolio-connector-svg"
       viewBox="0 0 648 653"
       preserveAspectRatio="none"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="dotGlow2" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path id="line2" class="line-path"
      d="M183.5 19.5C183.5 62.8544 218.646 98 262 98H646.5V280.5C646.5 381.568 564.568 463.5 463.5 463.5H190.5C96.6116 463.5 20.5 539.612 20.5 633.5"
      stroke="#00FF94" stroke-width="3"/>
    <circle opacity="0.21" cx="184" cy="20" r="20" fill="#00FF94" filter="url(#dotGlow2)"/>
    <circle cx="184" cy="20" r="8" fill="white"/>
    <circle id="dot2"      opacity="0.21" cx="20" cy="633" r="20" fill="#00FF94" filter="url(#dotGlow2)" class="line-dot"/>
    <circle id="dot2inner" cx="20" cy="633" r="8" fill="white" class="line-dot"/>
    <path d="M368 465.656V462.469L386.422 451.008V455.039L371.938 464.062L386.422 473.086V477.117L368 465.656Z" fill="white"/>
    <path d="M411.312 444H415.109L397.695 480.469H393.898L411.312 444Z" fill="white"/>
    <path d="M422.586 473.086L437.07 464.062L422.586 455.039V451.008L441.008 462.469V465.656L422.586 477.117V473.086Z" fill="white"/>
  </svg>
</section>
`

export function mountPortfolio(root: HTMLElement): void {
  root.innerHTML = TEMPLATE

  let current = 0

  const card     = root.querySelector<HTMLElement>('#portfolioCard')!
  const titleEl  = card.querySelector<HTMLElement>('.card-title')!
  const descEl   = card.querySelector<HTMLElement>('.card-desc')!
  const roleEl   = card.querySelector<HTMLElement>('.card-role')!
  const progress = root.querySelector<HTMLElement>('#sliderProgress')!

  function render(): void {
    card.classList.remove('visible')
    setTimeout(() => {
      titleEl.textContent  = SLIDES[current].title
      descEl.textContent   = SLIDES[current].desc
      roleEl.textContent   = SLIDES[current].role
      progress.style.width = `${(current + 1) / SLIDES.length * 100}%`
      card.classList.add('visible')
    }, 200)
  }

  root.querySelector('#nextBtn')!.addEventListener('click', () => {
    current = (current + 1) % SLIDES.length
    render()
  })
  root.querySelector('#prevBtn')!.addEventListener('click', () => {
    current = (current - 1 + SLIDES.length) % SLIDES.length
    render()
  })

  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.2 }).observe(card)

  render()

  // ── Connector ──
  function initConnector(): void {
    const section    = root.querySelector<HTMLElement>('#portfolio')!
    const cardText   = root.querySelector<HTMLElement>('.card-text')!
    const svg        = root.querySelector<SVGSVGElement>('#portfolioConnectorSvg')!

    const secRect      = section.getBoundingClientRect()
    const cardTextRect = cardText.getBoundingClientRect()

    const startX = cardTextRect.left   - secRect.left + cardTextRect.width * 0.5
    const startY = cardTextRect.bottom - secRect.top  + 20

    const endX = secRect.width * 0.5
    const endY = secRect.height - 20

    const dDeltaX = 20  - 184
    const dDeltaY = 633 - 20
    const rDeltaX = endX - startX
    const rDeltaY = endY - startY

    const scaleX = rDeltaX / dDeltaX
    const scaleY = rDeltaY / dDeltaY
    const scale  = Math.min(Math.abs(scaleX), Math.abs(scaleY)) * 0.9

    const svgW = 648 * scale
    const svgH = 653 * scale

    svg.style.left   = (startX - 184 * scale) + 'px'
    svg.style.top    = (startY - 20  * scale) + 'px'
    svg.style.width  = svgW + 'px'
    svg.style.height = svgH + 'px'
  }

  let animated = false
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true
        initConnector()

        const path = root.querySelector<SVGPathElement>('#line2')!
        const len  = path.getTotalLength()
        path.style.strokeDasharray  = String(len)
        path.style.strokeDashoffset = String(len)
        path.style.transition = 'none'
        path.getBoundingClientRect()

        setTimeout(() => {
          requestAnimationFrame(() => {
            path.style.transition       = 'stroke-dashoffset 1800ms cubic-bezier(0.4,0,0.2,1)'
            path.style.strokeDashoffset = '0'
            setTimeout(() => {
              const d2  = root.querySelector<SVGCircleElement>('#dot2')!
              const d2i = root.querySelector<SVGCircleElement>('#dot2inner')!
              d2.style.transition  = 'opacity 0.4s ease'
              d2i.style.transition = 'opacity 0.4s ease'
              d2.style.opacity     = '0.21'
              d2i.style.opacity    = '1'
            }, 1650)
          })
        }, 200)

        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  observer.observe(root.querySelector<HTMLElement>('#portfolio')!)

  let t: ReturnType<typeof setTimeout>
  window.addEventListener('resize', () => {
    clearTimeout(t)
    t = setTimeout(() => { if (animated) initConnector() }, 150)
  })
}
