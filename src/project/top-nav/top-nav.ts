import './top-nav.css'

export interface TopNavData {
  /** e.g. '02 / 03' */
  counter:  string
  homeHref: string
}

export function mountProjectTopNav(root: HTMLElement, d: TopNavData): void {
  root.innerHTML = `
    <nav class="proj-nav">
      <a href="${d.homeHref}" class="proj-nav-back">← back</a>
      <div class="proj-nav-logo">.<span>T</span>S</div>
      <div class="proj-nav-counter">${d.counter}</div>
    </nav>`
}
