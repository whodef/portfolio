/**
 * Watches elements matching `selector` inside `root`.
 * Adds `activeClass` to each when the first sibling enters the viewport.
 * Staggers by `delayStep` ms per sibling index.
 */
export function observeReveal(
  root: HTMLElement,
  selector: string,
  activeClass = 'visible',
  delayStep   = 100,
  threshold   = 0.15,
): void {
  const items = Array.from(root.querySelectorAll<HTMLElement>(selector))
  if (!items.length) return

  let fired = false

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || fired) return
      fired = true
      items.forEach((el, i) =>
        setTimeout(() => el.classList.add(activeClass), i * delayStep)
      )
      observer.disconnect()
    })
  }, { threshold })

  // Observe all items so the first visible one triggers the reveal
  items.forEach(el => observer.observe(el))
}
