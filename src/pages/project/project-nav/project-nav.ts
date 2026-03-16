import './project-nav.css'

export interface ProjectNavData {
  prev?: { label: string; href: string }
  next?: { label: string; href: string }
}

export function mountProjectNav(root: HTMLElement, d: ProjectNavData): void {
  root.innerHTML = `
    <div class="proj-pnav">
      <div class="proj-pnav-inner">
        ${d.prev ? `
          <a href="${d.prev.href}" class="proj-pnav-link prev">
            <div class="proj-pnav-dir">← PREV PROJECT</div>
            <div class="proj-pnav-title">${d.prev.label}</div>
          </a>` : '<div></div>'}
        ${d.next ? `
          <a href="${d.next.href}" class="proj-pnav-link next">
            <div class="proj-pnav-dir">NEXT PROJECT →</div>
            <div class="proj-pnav-title">${d.next.label}</div>
          </a>` : '<div></div>'}
      </div>
    </div>`
}
