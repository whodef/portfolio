import './portfolio.css'
import { observeConnector } from '../../utils/connector'

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
    <h2 class="section-title">My Portfolio</h2>
    <div class="tag-close">&lt;/h2&gt;</div>
  </div>

  <div class="portfolio-content">
    <div class="portfolio-card" id="portfolioCard">
      <div class="card-image">
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

  <div class="slider-controls">
    <button class="slider-btn" id="prevBtn">&#8249;</button>
    <div class="slider-track">
      <div class="slider-progress" id="sliderProgress"></div>
    </div>
    <button class="slider-btn" id="nextBtn">&#8250;</button>
  </div>

  <div class="connector-wrap" style="margin-top:20px">
    <svg class="connector" height="140" viewBox="0 0 1200 140">
      <path class="line-path" id="line2"
        d="M570,0 L570,40 Q570,60 600,60 L1100,60 Q1120,60 1120,80 L1120,140"/>
      <circle class="line-dot" id="dot2" cx="1120" cy="140" r="5"/>
    </svg>
  </div>
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
      titleEl.textContent = SLIDES[current].title
      descEl.textContent  = SLIDES[current].desc
      roleEl.textContent  = SLIDES[current].role
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

  // Card visibility
  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.2 }).observe(card)

  // Connector
  const connWrap = root.querySelector<HTMLElement>('.connector-wrap')!
  observeConnector(connWrap, 'line2', 'dot2')

  render()
}
