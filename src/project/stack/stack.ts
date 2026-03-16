import './stack.css'

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
      </div>
    </section>`
}
