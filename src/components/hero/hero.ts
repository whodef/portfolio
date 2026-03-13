import './hero.css'
import { animateConnector } from '../../utils/connector'

const TEMPLATE = `
<section id="hero">
  <div class="hero-inner">
    <div class="heroWrap">
      <div class="tag-label">&lt;p&gt;<span class="paragraph">This is</span>&lt;/p&gt;</div>
      <div class="name">
        <div class="tag-label">&lt;h1&gt;</div>
        <h1 class="hero-name" id="heroName">Tatiana<br>Seliuk</h1>
        <div class="tag-close">&lt;/h1&gt;</div>
      </div>
      <p class="hero-subtitle">&lt;p&gt;<span class="paragraph">Entrepreneur and developer</span>&lt;/p&gt;</p>
    </div>

    <div class="cv-btn-wrap" id="cvBtnWrap">
      <a href="#" class="cv-btn">
        <svg class="orbit-svg orbit-1" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
          <circle class="orbit-dot" cx="188" cy="100" r="6.5" fill="white"/>
          <circle class="orbit-dot" cx="12"  cy="100" r="4.5" fill="white" opacity="0.6"/>
        </svg>
        <svg class="orbit-svg orbit-2" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <circle class="orbit-dot" cx="172" cy="100" r="5" fill="white" opacity="0.8"/>
          <circle class="orbit-dot" cx="52"  cy="60"  r="4" fill="white" opacity="0.5"/>
          <circle class="orbit-dot" cx="140" cy="168" r="4" fill="white" opacity="0.5"/>
        </svg>
        <svg class="orbit-svg orbit-3" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <circle class="orbit-dot" cx="100" cy="42"  r="4" fill="white" opacity="0.4"/>
          <circle class="orbit-dot" cx="100" cy="158" r="4" fill="white" opacity="0.4"/>
        </svg>
        <span class="cv-label">Download CV</span>
      </a>
    </div>
  </div>

  <svg id="heroConnectorSvg" class="hero-connector-svg"
       viewBox="0 0 691 619"
       preserveAspectRatio="none"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path id="line1" class="line-path"
      d="M73 20.5H1.5V233.5C1.5 314.686 67.3141 380.5 148.5 380.5H523.5C604.686 380.5 670.5 446.314 670.5 527.5V599"
      stroke="#00FF94" stroke-width="3"/>
    <circle opacity="0.21" cx="72.5" cy="20" r="20" fill="#00FF94" filter="url(#dotGlow)"/>
    <circle cx="72.5" cy="20" r="8" fill="white"/>
    <circle id="dot1"      opacity="0.21" cx="670.5" cy="599" r="20" fill="#00FF94" filter="url(#dotGlow)" class="line-dot"/>
    <circle id="dot1inner" cx="670.5" cy="599" r="8" fill="white" class="line-dot"/>
    <path d="M272.344 381.578V378.391L290.766 366.93V370.961L276.281 379.984L290.766 389.008V393.039L272.344 381.578Z" fill="white"/>
    <path d="M315.656 359.922H319.453L302.039 396.391H298.242L315.656 359.922Z" fill="white"/>
    <path d="M326.93 389.008L341.414 379.984L326.93 370.961V366.93L345.352 378.391V381.578L326.93 393.039V389.008Z" fill="white"/>
  </svg>
</section>
`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE

  function init(): void {
    if (window.innerWidth <= 900) return

    const section = root.querySelector<HTMLElement>('#hero')!
    const nameEl  = root.querySelector<HTMLElement>('#heroName')!
    const cvWrap  = root.querySelector<HTMLElement>('#cvBtnWrap')!
    const svg     = root.querySelector<SVGSVGElement>('#heroConnectorSvg')!

    const secRect  = section.getBoundingClientRect()
    const nameRect = nameEl.getBoundingClientRect()
    const cvRect   = cvWrap.getBoundingClientRect()

    const startX = nameRect.left  - secRect.left - 50
    const startY = nameRect.top   - secRect.top + nameRect.height * 0.38

    const endX = cvRect.left   - secRect.left + cvRect.width  * 0.5
    const endY = cvRect.bottom - secRect.top  + 20

    const scaleX = (endX - startX) / (670.5 - 12.5)
    const scaleY = (endY - startY) / (599  - 40)

    const scale = Math.max(scaleX, scaleY) * 0.6

    const svgW = 691 * scale
    const svgH = 619 * scale

    const svgLeft = startX - 72.5 * scale
    const svgTop  = startY - 20   * scale

    svg.style.left   = svgLeft + 'px'
    svg.style.top    = svgTop  + 'px'
    svg.style.width  = svgW    + 'px'
    svg.style.height = svgH    + 'px'

    animateConnector('line1', 'dot1', 400, 1800)
    setTimeout(() => {
      const ei = document.getElementById('dot1inner')
      if (ei) { ei.style.transition = 'opacity 0.4s ease'; ei.style.opacity = '1' }
    }, 400 + 1650)
  }

  if (document.readyState === 'complete') {
    requestAnimationFrame(() => requestAnimationFrame(init))
  } else {
    window.addEventListener('load', () => requestAnimationFrame(() => requestAnimationFrame(init)))
  }

  let t: ReturnType<typeof setTimeout>
  window.addEventListener('resize', () => {
    clearTimeout(t)
    t = setTimeout(() => {
      const svg = root.querySelector<SVGSVGElement>('#heroConnectorSvg')!
      if (window.innerWidth <= 900) { svg.style.display = 'none'; return }
      svg.style.display = ''
      const path = svg.querySelector<SVGPathElement>('#line1')!
      path.style.transition       = 'none'
      path.style.strokeDasharray  = '3000'
      path.style.strokeDashoffset = '0'
      init()
    }, 150)
  })
}
