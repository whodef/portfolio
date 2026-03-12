// hero.ts
import './hero.css'
import { animateConnector } from '../../utils/connector'

const TEMPLATE = `
<section id="hero">
  <div class="hero-inner">
    <div>
      <div class="tag-label">&lt;p&gt;<span class="paragraph">This is</span>&lt;/p&gt;</div>
      <div class="name">
        <div class="tag-label">&lt;h1&gt;</div>
        <h1 class="hero-name" id="heroName">Tatiana<br>Seliuk</h1>
        <div class="tag-close">&lt;/h1&gt;</div>
      </div>
      <p class="hero-subtitle">&lt;p&gt;<span class="paragraph">Entrepreneur and developer</span>&lt;/p&gt;</p>
    </div>

    <div class="cv-btn-wrap">
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

  <!-- Connector SVG line from h1 to button -->
  <svg id="heroConnectorSvg" class="hero-connector-svg" width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    
    <!-- Main path from h1 to button -->
    <path id="line1" class="line-path" d="M73 120.5 H30 V350 C30 430 95 450 176 450 H500 C581 450 647 530 647 611 V650" stroke="#00FF94" stroke-width="3" stroke-dasharray="2000" stroke-dashoffset="2000"/>
    
    <!-- Start dot near h1 tag -->
    <circle id="dot1start" class="connector-dot" cx="73" cy="120.5" r="20" fill="#00FF94" opacity="0.21" filter="url(#dotGlow)"/>
    <circle cx="73" cy="120.5" r="8" fill="white"/>
    
    <!-- End dot near Download CV button -->
    <circle id="dot1" class="connector-dot line-dot" cx="647" cy="650" r="20" fill="#00FF94" opacity="0.21" filter="url(#dotGlow)"/>
    <circle cx="647" cy="650" r="8" fill="white"/>
    
    <!-- Code brackets on the line -->
    <path d="M272.344 450.578V447.391L290.766 435.93V439.961L276.281 448.984L290.766 458.008V462.039L272.344 450.578Z" fill="white"/>
    <path d="M315.656 428.922H319.453L302.039 465.391H298.242L315.656 428.922Z" fill="white"/>
    <path d="M326.93 458.008L341.414 448.984L326.93 439.961V435.93L345.352 447.391V450.578L326.93 462.039V458.008Z" fill="white"/>
  </svg>
</section>
`

export function mountHero(root: HTMLElement): void {
  root.innerHTML = TEMPLATE

  // Animate the connector line
  window.addEventListener('load', () => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const startDot = document.getElementById('dot1start') as SVGCircleElement | null
      if (startDot) {
        startDot.style.opacity = '0.21'
        startDot.style.transition = 'opacity 0.4s ease'
      }

      // Use the existing animateConnector function
      animateConnector('line1', 'dot1', 400, 1800)
    }))
  })
}
