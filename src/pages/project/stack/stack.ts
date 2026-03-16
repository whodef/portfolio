import './stack.css'
import { animateConnector } from '../../../utils/connector'

export interface StackGroup {
  label: string
  pills: Array<{ name: string; hero?: boolean }>
}

export interface StackData {
  /** 1–2 paragraphs describing architectural decisions */
  paragraphs: string[]
  groups:     StackGroup[]
}

export function mountStack(root: HTMLElement, d: StackData): void {
  root.innerHTML = `
    <section class="proj-stack" id="stack">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h5&gt;</div>
        <h5 class="section-title">Tech Stack</h5>
        <div class="tag-close">&lt;/h5&gt;</div>

        <div class="proj-stack-layout">
          <div class="proj-stack-desc">
            ${d.paragraphs.map(p => `<p>${p}</p>`).join('')}
          </div>
          <div class="proj-stack-groups">
            ${d.groups.map(g => `
              <div class="proj-stack-group">
                <div class="proj-stack-g-label">${g.label}</div>
                <div class="proj-stack-pills">
                  ${g.pills.map(p =>
                    `<div class="proj-pill${p.hero ? ' hero' : ''}">${p.name}</div>`
                  ).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>

        <div class="connector-wrap" style="margin-top:60px">
          <svg class="connector" height="120" viewBox="0 0 1200 120" overflow="visible">
            <path class="line-path" id="projStackLine"
              d="M580,0 L580,40 Q580,60 700,60 L1100,60 Q1120,60 1120,80 L1120,120"/>
            <circle class="line-dot" id="projStackDot" cx="1120" cy="120" r="5"/>
          </svg>
        </div>
      </div>
    </section>`

  const wrap = root.querySelector<HTMLElement>('.connector-wrap')!
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateConnector('projStackLine', 'projStackDot')
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.3 })
  obs.observe(wrap)
}
