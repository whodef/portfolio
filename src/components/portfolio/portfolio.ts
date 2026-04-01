import './portfolio.css'

interface Slide {
  title: string
  desc:  string
  role:  string
  href?: string
  /** путь к скриншоту, напр. '/screenshots/therink.png' — если не задан, рендерится мок */
  img?:  string
}

const SLIDES: Slide[] = [
  {
    title: 'Skolkovo Golf',
    desc:  'Digital platform for one of Russia\'s most exclusive private golf clubs — personal member cabinet, interactive animated venue map, hole-by-hole course page, and CMS integration.',
    role:  'FRONTEND DEVELOPER',
    href:  '/portfolio/projects/skolkovogolf/',
    img:   '/portfolio/skolkovogolf/golf.webp',
  },
  {
    title: 'The Rink',
    desc:  'Venue platform for a Moscow sports complex — ice rink in winter, padel and tennis in summer. Interactive seasonal map, events calendar, ticket purchase and gift certificate flows.',
    role:  'FRONTEND LEAD',
    href:  '/portfolio/projects/therink/',
    img:   '/portfolio/therink/rink.webp',
  },
  {
    title: 'Sports Pari',
    desc: 'High‑load real‑time platform with WebSocket streaming, microservice architecture, and complex state management. Built to handle peak traffic during live events with sub‑second data consistency.',
    role: 'FRONTEND DEVELOPER',
    href: '/portfolio/projects/sportspari/',
    img: '/portfolio/sportspari/pari.webp',
  }
]

// Мок-экран (показывается когда img не задан)
const MOCK_SCREEN = `
  <div class="mock-screen">
    <div class="mock-bar"></div>
    <div class="mock-bar w40"></div>
    <div class="mock-wave"></div>
    <div class="mock-bar w80"></div>
    <div class="mock-bar w40"></div>
  </div>`

const TEMPLATE = `
<section id="portfolio">
  <div class="portfolio-section-header">
    <div class="tag-label">&lt;h2&gt;</div>
    <div class="portfolio-title-wrap">
      <h2 class="section-title">My Portfolio</h2>
      <div class="tag-close">&lt;/h2&gt;</div>
    </div>
  </div>

  <div class="portfolio-content">
    <div class="portfolio-card" id="portfolioCard">
      <div class="card-image" id="cardImage">
        <span class="ripple-1"></span>
        <span class="ripple-2"></span>
        <span class="ripple-3"></span>
        <div class="card-image-inner" id="cardImageInner">
          ${MOCK_SCREEN}
        </div>
      </div>
      <div class="slider-controls slider-controls--inline" id="sliderControlsInline">
        <button class="slider-btn" id="prevBtnInline">&#8249;</button>
        <div class="slider-track">
          <div class="slider-progress" id="sliderProgressInline"></div>
        </div>
        <button class="slider-btn" id="nextBtnInline">&#8250;</button>
      </div>
      <div class="card-text">
        <div class="p-tag">&lt;p&gt;</div>
        <h3 class="card-title" id="cardTitle"></h3>
        <p  class="card-desc"></p>
        <p  class="card-role"></p>
        <div class="p-tag" id="closeTag">&lt;/p&gt;</div>
      </div>
    </div>
  </div>

  <div class="slider-controls slider-controls--bottom" id="sliderControls">
    <button class="slider-btn" id="prevBtn">&#8249;</button>
    <div class="slider-track">
      <div class="slider-progress" id="sliderProgress"></div>
    </div>
    <button class="slider-btn" id="nextBtn">&#8250;</button>
  </div>

  <svg id="portfolioConnectorSvg" class="portfolio-connector-svg"
       viewBox="0 0 648 653"
       preserveAspectRatio="xMidYMid meet"
       fill="none" xmlns="http://www.w3.org/2000/svg"
       style="opacity:0">
    <defs>
      <filter id="dotGlow2" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path id="line2" class="line-path"
      d="M183.5 19.5C183.5 62.8544 218.646 98 262 98H646.5V280.5C646.5 381.568 564.568 463.5 463.5 463.5H190.5C96.6116 463.5 20.5 539.612 20.5 633.5"
      stroke="#00FF94" stroke-width="3"/>
    <path d="M368 465.656V462.469L386.422 451.008V455.039L371.938 464.062L386.422 473.086V477.117L368 465.656Z" fill="white"/>
    <path d="M411.312 444H415.109L397.695 480.469H393.898L411.312 444Z" fill="white"/>
    <path d="M422.586 473.086L437.07 464.062L422.586 455.039V451.008L441.008 462.469V465.656L422.586 477.117V453.039Z" fill="white"/>
    <circle opacity="0.21" cx="184" cy="20" r="20" fill="#00FF94" filter="url(#dotGlow2)"/>
    <circle cx="184" cy="20" r="8" fill="white"/>
    <circle id="dot2"      opacity="0" cx="20" cy="633" r="20" fill="#00FF94" filter="url(#dotGlow2)" class="line-dot"/>
    <circle id="dot2inner" opacity="0" cx="20" cy="633" r="8"  fill="white"                           class="line-dot"/>
  </svg>
</section>
`

export function mountPortfolio(root: HTMLElement): void {
  root.innerHTML = TEMPLATE

  let current = 0

  const card           = root.querySelector<HTMLElement>('#portfolioCard')!
  const titleEl        = root.querySelector<HTMLElement>('#cardTitle')!
  const descEl         = card.querySelector<HTMLElement>('.card-desc')!
  const roleEl         = card.querySelector<HTMLElement>('.card-role')!
  const imageEl        = root.querySelector<HTMLElement>('#cardImage')!
  const imageInner     = root.querySelector<HTMLElement>('#cardImageInner')!
  const progress       = root.querySelector<HTMLElement>('#sliderProgress')!
  const progressInline = root.querySelector<HTMLElement>('#sliderProgressInline')!

  function updateProgress(): void {
    const w = `${(current + 1) / SLIDES.length * 100}%`
    progress.style.width       = w
    progressInline.style.width = w
  }

  function applyLink(href: string | undefined): void {
    if (href) {
      titleEl.style.cursor = 'pointer'
      imageEl.style.cursor = 'pointer'
      titleEl.onclick = () => { window.location.href = href }
      imageEl.onclick = () => { window.location.href = href }
    } else {
      titleEl.style.cursor = 'default'
      imageEl.style.cursor = 'default'
      titleEl.onclick = null
      imageEl.onclick = null
    }
  }

  function applyImage(img: string | undefined): void {
    if (img) {
      imageInner.innerHTML = `<img class="card-screenshot" src="${img}" alt="">`
      imageEl.classList.add('has-screenshot')
    } else {
      imageInner.innerHTML = MOCK_SCREEN
      imageEl.classList.remove('has-screenshot')
    }
  }

  function render(): void {
    card.classList.remove('visible')
    updateProgress()
    setTimeout(() => {
      const slide = SLIDES[current]
      titleEl.textContent = slide.title
      descEl.textContent  = slide.desc
      roleEl.textContent  = slide.role
      applyLink(slide.href)
      applyImage(slide.img)
      card.classList.add('visible')
    }, 200)
  }

  const next = () => { current = (current + 1) % SLIDES.length; render() }
  const prev = () => { current = (current - 1 + SLIDES.length) % SLIDES.length; render() }

  root.querySelector('#nextBtn')!.addEventListener('click', next)
  root.querySelector('#prevBtn')!.addEventListener('click', prev)
  root.querySelector('#nextBtnInline')!.addEventListener('click', next)
  root.querySelector('#prevBtnInline')!.addEventListener('click', prev)

  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.2 }).observe(card)

  progress.style.transition       = 'none'
  progressInline.style.transition = 'none'
  updateProgress()
  requestAnimationFrame(() => {
    progress.style.transition       = 'width 0.4s ease'
    progressInline.style.transition = 'width 0.4s ease'
  })

  // первый рендер
  const first = SLIDES[current]
  titleEl.textContent = first.title
  descEl.textContent  = first.desc
  roleEl.textContent  = first.role
  applyLink(first.href)
  applyImage(first.img)
  setTimeout(() => card.classList.add('visible'), 50)

  // ── Connector ──
  const svg = root.querySelector<SVGSVGElement>('#portfolioConnectorSvg')!

  function initConnector(): void {
    const section  = root.querySelector<HTMLElement>('#portfolio')!
    const closeTag = root.querySelector<HTMLElement>('#closeTag')!
    const controls = root.querySelector<HTMLElement>('#sliderControls')!

    const secRect      = section.getBoundingClientRect()
    const tagRect      = closeTag.getBoundingClientRect()
    const controlsRect = controls.getBoundingClientRect()

    const anchorX = tagRect.left - secRect.left + tagRect.width  * 0.5
    const anchorY = tagRect.top  - secRect.top  + tagRect.height * 0.5

    const desiredEndY = controlsRect.bottom - secRect.top + 180
    const scale       = (desiredEndY - anchorY) / (633 - 20)

    svg.style.left    = (anchorX - 184 * scale) + 'px'
    svg.style.top     = (anchorY - 20  * scale) + 'px'
    svg.style.width   = (648 * scale) + 'px'
    svg.style.height  = (653 * scale) + 'px'
    svg.style.opacity = '1'
  }

  function animateLine(): void {
    const path = root.querySelector<SVGPathElement>('#line2')!
    const len  = path.getTotalLength()
    path.style.strokeDasharray  = String(len)
    path.style.strokeDashoffset = String(len)
    path.style.transition = 'none'
    path.getBoundingClientRect()

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
      }, 1700)
    })
  }

  let animated = false

  function tryAnimate(): void {
    if (animated) return
    animated = true
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        initConnector()
        animateLine()
      })
    })
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tryAnimate()
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0,
    rootMargin: '0px 0px -45% 0px',
  })

  observer.observe(root.querySelector<HTMLElement>('#closeTag')!)

  let resizeTimer: ReturnType<typeof setTimeout>
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => { if (animated) initConnector() }, 150)
  })
}
