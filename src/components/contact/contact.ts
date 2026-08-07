import './contact.css'

interface SocialLink {
  name: string
  url:  string
  size: number
  top:  string
  left: string
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/tatiana-seliuk/', size: 240, top: '12%', left: '12%' },
  { name: 'GitHub',    url: 'https://github.com/whodef',                   size: 200, top: '5%',  left: '48%' },
  { name: 'WhatsApp',  url: 'https://wa.me/@whodef',                       size: 160, top: '58%', left: '35%' },
  { name: 'Email',     url: 'mailto:tatiseliuk@gmail.com',                 size: 170, top: '48%', left: '66%' },
]

function renderNode(link: SocialLink): string {
  return `
    <a href="${link.url}" class="social-node" target="_blank" rel="noopener"
       style="width:${link.size}px;height:${link.size}px;top:${link.top};left:${link.left};">
      <span class="social-tag">&lt;&gt;</span>
      <span class="social-name">${link.name}</span>
      <span class="social-tag">&lt;/&gt;</span>
    </a>`
}

const TEMPLATE = `
<section id="contact">
  <div class="contact-header">
    <div class="tag-label">&lt;h4&gt;</div>
    <div class="contact-title-wrap">
      <h4 class="section-title">Connect with me</h4>
      <div class="tag-close">&lt;/h4&gt;</div>
    </div>
  </div>

  <div class="social-field">
    ${SOCIAL_LINKS.map(renderNode).join('\n    ')}
  </div>
</section>
`

export function mountContact(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
