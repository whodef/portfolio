export function mountGlowCursor(): void {
  const el = document.createElement('div')
  el.className = 'glow-cursor'
  document.body.prepend(el)

  document.addEventListener('mousemove', (e: MouseEvent) => {
    el.style.left = e.clientX + 'px'
    el.style.top  = e.clientY + 'px'
  })
}
