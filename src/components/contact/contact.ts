import './contact.css'

interface SocialLink {
  name: string
  url:  string
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: '#' },
  { name: 'LinkedIn',  url: '#' },
  { name: 'Gmail',     url: '#' },
  { name: 'Twitter',   url: '#' },
]

function renderNode(link: SocialLink): string {
  return `
    <a href="${link.url}" class="social-node" target="_blank" rel="noopener">
      <div class="social-circle">
        <span class="social-tag">&lt;&gt;<br>&lt;/&gt;</span>
      </div>
      <span class="social-name">${link.name}</span>
    </a>`
}

const TEMPLATE = `
<section id="contact">
  <div class="contact-inner">
    <div class="tag-label" style="text-align:center">&lt;h4&gt;</div>
    <h4 class="section-title">Connect with me</h4>
    <div class="tag-close" style="text-align:center">&lt;/h4&gt;</div>

    <div class="social-grid">
      ${SOCIAL_LINKS.map(renderNode).join('\n    ')}
    </div>
  </div>
</section>
`

export function mountContact(root: HTMLElement): void {
  root.innerHTML = TEMPLATE
}
