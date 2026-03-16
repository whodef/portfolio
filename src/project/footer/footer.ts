import './footer.css'

export function mountFooter(root: HTMLElement): void {
  root.innerHTML = `
    <footer class="proj-footer">
      <div class="proj-footer-logo">.<span>T</span>S</div>
      <div class="proj-footer-sub">Tatiana Seliuk — Entrepreneur & Fullstack Engineer</div>
    </footer>`
}
