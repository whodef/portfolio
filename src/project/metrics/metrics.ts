import './metrics.css'

export interface MetricItem {
  val:    string
  desc:   string
  source: string
}

export function mountMetrics(root: HTMLElement, items: MetricItem[]): void {
  root.innerHTML = `
    <div class="proj-metrics">
      <div class="proj-metrics-inner">
        ${items.map(m => `
          <div class="proj-metric">
            <div class="proj-metric-val">${m.val}</div>
            <div class="proj-metric-desc">${m.desc}</div>
            <div class="proj-metric-src">${m.source}</div>
          </div>`).join('')}
      </div>
    </div>`

  // Scroll reveal — stagger per block
  const blocks = Array.from(root.querySelectorAll<HTMLElement>('.proj-metric'))
  let fired = false

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || fired) return
      fired = true
      blocks.forEach((b, i) => setTimeout(() => b.classList.add('visible'), i * 110))
      obs.disconnect()
    })
  }, { threshold: 0.15 })

  blocks.forEach(b => obs.observe(b))
}
