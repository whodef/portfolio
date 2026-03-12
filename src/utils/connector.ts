/**
 * Animates an SVG path (draw-on effect) and fades in its endpoint dot.
 *
 * @param lineId   - id of the <path> element
 * @param dotId    - id of the <circle> endpoint element
 * @param delay    - ms before animation starts (default 0)
 * @param duration - animation duration in ms (default 1400)
 */
export function animateConnector(
  lineId: string,
  dotId: string,
  delay = 0,
  duration = 1400
): void {
  const path = document.getElementById(lineId) as SVGPathElement | null
  const dot  = document.getElementById(dotId)  as SVGCircleElement | null
  if (!path) return

  const len = path.getTotalLength()
  path.style.strokeDasharray  = String(len)
  path.style.strokeDashoffset = String(len)
  path.style.transition = 'none'

  setTimeout(() => {
    requestAnimationFrame(() => {
      path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.2,1)`
      path.style.strokeDashoffset = '0'
      if (dot) {
        setTimeout(() => { dot.style.opacity = '1' }, duration - 100)
      }
    })
  }, delay)
}

/**
 * Observes an element and fires animateConnector when it enters the viewport.
 */
export function observeConnector(
  triggerEl: Element,
  lineId: string,
  dotId: string,
  delay = 0
): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateConnector(lineId, dotId, delay)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  observer.observe(triggerEl)
}
