import './press.css'
import { observeConnector } from '../../utils/connector'

interface PressItem {
  name:     string
  date?:    string
  url?:     string
  featured: boolean
}

const PRESS_ITEMS: PressItem[] = [
  { name: 'California Herald', date: 'June 23, 2020', url: '#', featured: true  },
  { name: 'Yahoo! Finance',                           url: '#', featured: false },
  { name: 'Medium',                                   url: '#', featured: false },
  { name: 'Thrive Global',                            url: '#', featured: false },
]

function renderItem(item: PressItem): string {
  const cls = item.featured ? 'press-item featured' : 'press-item'
  return `
    <a class="${cls}" href="${item.url ?? '#'}" target="_blank" rel="noopener">
      <div class="press-info">
        <span class="press-name">${item.name}</span>
        ${item.date ? `<span class="press-date">${item.date}</span>` : ''}
      </div>
      <span class="press-arrow">→</span>
    </a>`
}

const TEMPLATE = `
<section id="press">
  <div class="section-header" style="max-width:1200px;margin:0 auto;width:100%">
    <div class="tag-label">&lt;h3&gt;</div>
    <h3 class="section-title">My Press</h3>
    <div class="tag-close">&lt;/h3&gt;</div>
  </div>

  <div class="press-list">
    ${PRESS_ITEMS.map(renderItem).join('\n  ')}
  </div>

  <div class="connector-wrap" style="margin-top:40px">
    <svg class="connector" height="140" viewBox="0 0 1200 140">
      <path class="line-path" id="line3"
        d="M1120,0 L1120,60 Q1120,80 1000,80 L120,80 Q100,80 100,100 L100,140"/>
      <circle class="line-dot" id="dot3" cx="100" cy="140" r="5"/>
    </svg>
  </div>
</section>
`

export function mountPress(root: HTMLElement): void {
  root.innerHTML = TEMPLATE

  const connWrap = root.querySelector<HTMLElement>('.connector-wrap')!
  observeConnector(connWrap, 'line3', 'dot3')
}
