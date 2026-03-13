import './contact.css'

interface SocialLink {
  name: string
  url:  string
  size: number
  top:  string
  left: string
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: '#', size: 240, top: '12%',  left: '12%'  },
  { name: 'LinkedIn',  url: '#', size: 200, top: '5%',   left: '48%'  },
  { name: 'Twitter',   url: '#', size: 160, top: '58%',  left: '35%'  },
  { name: 'Gmail',     url: '#', size: 170, top: '48%',  left: '66%'  },
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
  <div class="sontact-inner" style="max-width:1200px;margin:80px auto 0;width:100%">
    <div class="tag-label">&lt;h4&gt;</div>
    <div style="display:inline-block; position:relative; margin-bottom:90px;">
      <h4 class="section-title" id="portfolioTitle" style="margin-left:40px;">Connect with me</h4>
      <div class="tag-close" style="position:absolute; right:-55px; bottom:-45px;">&lt;/h4&gt;</div>
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
