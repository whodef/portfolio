import './hero.css'

export interface HeroData {
  eyebrow:   string
  title:     string
  /** subtitle shown after title in accent color, e.g. '.io' or ' v2' */
  titleSub?: string
  role:      string
  desc:      string
  liveHref?: string
  /** Replaces "VISIT LIVE SITE" button label */
  liveBtnLabel?: string
}

export function mountHero(root: HTMLElement, d: HeroData): void {
  root.innerHTML = `
    <section class="proj-hero">
      <div class="proj-hero-bg"></div>
      <div class="proj-hero-text">
        <div class="proj-hero-eyebrow">${d.eyebrow}</div>
        <h1 class="proj-hero-title">${d.title}${d.titleSub ? `<span class="proj-hero-sub">${d.titleSub}</span>` : ''}</h1>
        <div class="proj-hero-role">${d.role}</div>
        <p class="proj-hero-desc">${d.desc}</p>
        <div class="proj-hero-ctas">
          ${d.liveHref ? `
            <a href="${d.liveHref}" target="_blank" rel="noopener" class="btn-primary">
              ${d.liveBtnLabel ?? 'VISIT LIVE SITE →'}
            </a>` : ''}
          <a href="#overview" class="btn-ghost">CASE STUDY ↓</a>
        </div>
      </div>
    </section>`
}
