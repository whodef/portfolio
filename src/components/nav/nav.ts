import './nav.css'

const NAV_LINKS = [
  { href: '#hero',      label: '//01. &lt;Home/&gt;',      side: 'left'  },
  { href: '#portfolio', label: '//02. &lt;Portfolio/&gt;', side: 'left'  },
  { href: '#press',     label: '//03. &lt;Press/&gt;',     side: 'right' },
  { href: '#contact',   label: '//04. &lt;Contact/&gt;',   side: 'right' },
]

const SECTION_IDS = ['hero', 'portfolio', 'press', 'contact']

export function mountNav(root: HTMLElement): void {
  root.innerHTML = `
    <div class="mobile-menu" id="mobileMenu">
      <span class="mobile-close" id="mobileClose">✕</span>
      ${NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('\n      ')}
    </div>

    <nav>
      <div class="nav-left">
        ${NAV_LINKS.filter(l => l.side === 'left').map(l =>
          `<a href="${l.href}">${l.label}</a>`
        ).join('\n        ')}
      </div>
      <div class="nav-logo">.&zwj;<span>T</span>S</div>
      <div class="nav-right">
        ${NAV_LINKS.filter(l => l.side === 'right').map(l =>
          `<a href="${l.href}">${l.label}</a>`
        ).join('\n        ')}
      </div>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </nav>
  `

  const menu = root.querySelector<HTMLElement>('#mobileMenu')!
  root.querySelector('#hamburger')!.addEventListener('click', () => menu.classList.add('open'))
  root.querySelector('#mobileClose')!.addEventListener('click', () => menu.classList.remove('open'))
  root.querySelectorAll('.mobile-menu a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open'))
  )

  const allLinks = root.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')

  function setActive(id: string): void {
    allLinks.forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === '#' + id)
    )
  }

  setActive('hero')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id)
    })
  }, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  })

  window.addEventListener('DOMContentLoaded', () => {
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  if (document.readyState !== 'loading') {
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  }
}
