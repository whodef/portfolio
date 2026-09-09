//@ts-ignore
import '../../src/styles/global.css'

history.scrollRestoration = 'manual'
window.scrollTo(0, 0)

import { mountGlowCursor }    from '../../src/utils/glowCursor'
import { mountLightbox }      from '../../src/utils/lightbox'
import { mountProjectTopNav } from '../../src/project/top-nav/top-nav'
import { mountHero }          from './hero/hero'
import { mountMetrics }       from '../../src/project/metrics/metrics'
import { mountOverview }      from '../../src/project/overview/overview'
import { mountGallery }       from '../../src/project/gallery/gallery'
import { mountTeam }          from '../../src/project/team/team'
import { mountStack }         from '../../src/project/stack/stack'
import { mountProjectNav }    from '../../src/project/project-nav/project-nav'
import { mountFooter }        from '../../src/project/footer/footer'

import type { MetricItem }     from '../../src/project/metrics/metrics'
import type { OverviewData }   from '../../src/project/overview/overview'
import type { GalleryData }    from '../../src/project/gallery/gallery'
import type { TeamMember }     from '../../src/project/team/team'
import type { StackData }      from '../../src/project/stack/stack'
import type { ProjectNavData } from '../../src/project/project-nav/project-nav'

// ─── PAGE DATA ────────────────────────────────────────────────────────────────

const METRICS: MetricItem[] = [
  { val: 'Svelte',   desc: 'Compiled, framework-free frontend — small bundle, fast first paint for a content-driven portfolio site',      source: '// STACK'   },
  { val: 'Git-CMS',  desc: 'Sveltia CMS wired in as a git-based headless CMS — the client edits scenarios, materials, and news herself, no database needed',  source: '// CONTENT' },
  { val: 'Tailwind', desc: 'Utility-first styling for a clean, consistent design system built from scratch around the client\'s brand',   source: '// UI'      },
  { val: 'NS/DNS',   desc: 'Full infrastructure on Yandex Cloud — hosting configured and NS records pointed at the client\'s own domain', source: '// INFRA'   },
]

const OVERVIEW: OverviewData = {
  paragraphs: [
    'Pervaya Nota is a portfolio site for a music educator specializing in early-childhood music education — built to showcase 25+ years of experience, ready-made performance scenarios, teaching materials, and video/podcast content for preschools, kindergartens, and parents.',
    'I took this on as a solo build, end to end: information architecture, visual design, frontend implementation, content tooling, and infrastructure. The client isn\'t technical, so the content layer had to let her publish new scenarios and news posts herself without ever touching code or a database.',
    'The frontend is built in Svelte for a lightweight, fast-loading site, styled with Tailwind for a clean and consistent visual system. Content is managed through Sveltia CMS, a git-based headless CMS — edits made through its editor UI commit straight to the repository, and the site rebuilds from there.',
    'On the infrastructure side, the site is deployed on Yandex Cloud, with hosting configuration and NS/DNS records set up from scratch to point the client\'s own domain, pervaya-nota.ru, at the deployment — the kind of unglamorous setup work that has to be right before anything else matters.',
  ],
  meta: [
    { key: 'ROLE',      val: 'Fullstack Developer / Forward Deployed — solo',        green: true },
    { key: 'CLIENT',    val: 'Music Educator · Personal Brand'                },
    { key: 'TYPE',      val: 'Educator Portfolio Website'                     },
    { key: 'OWNED',     val: 'Full build — design, frontend, CMS, infra', green: true },
    { key: 'STACK',     val: 'Svelte · Sveltia CMS · Tailwind CSS'            },
    { key: 'INFRA',     val: 'Yandex Cloud · Custom NS/DNS'                   },
    { key: 'SITE',      val: 'pervaya-nota.ru →', link: 'https://pervaya-nota.ru/' },
  ],
}

const GALLERY: GalleryData = {
  lead: 'Homepage, section listings, and content pages built with Svelte and populated through Sveltia CMS.',
  items: [
    { label: 'Homepage — profile, stats & mission statement',              ratio: 'sq',   src: '/portfolio/pervaya-nota/homepage_profile.png' },
    { label: 'Homepage — section cards: Scenarios, Materials, Media, News',ratio: 'tall', src: '/portfolio/pervaya-nota/homepage_sections.png' },
    { label: 'Homepage — About Me card & footer contact links',            ratio: 'wide', src: '/portfolio/pervaya-nota/homepage_sections_footer.png' },
    { label: 'Scenarios — category listing',                               ratio: 'wide', src: '/portfolio/pervaya-nota/scenarios_list.png' },
    { label: 'Scenario article — script text & material info',             ratio: 'wide', src: '/portfolio/pervaya-nota/scenario_article.png' },
    { label: 'About Me — tabbed bio page (education, credentials, awards)',ratio: 'wide', src: '/portfolio/pervaya-nota/about_page.png' },
    { label: 'Teaching Materials — category listing',                      ratio: 'wide', src: '/portfolio/pervaya-nota/materials_list.png' },
    { label: 'Media article — embedded YouTube video',                     ratio: 'wide', src: '/portfolio/pervaya-nota/media_article_top.png' },
    { label: 'Media article — full game script writeup',                   ratio: 'tall', src: '/portfolio/pervaya-nota/media_article_full.png' },
  ],
}

const TEAM: TeamMember[] = [
  {
    initials: 'TS',
    name:     'Tatiana Seliuk',
    role:     'Solo build — information architecture, UI design, Svelte/Tailwind frontend, Sveltia CMS integration, Yandex Cloud deployment and DNS setup',
    tags:     ['Svelte', 'Tailwind', 'Sveltia CMS', 'Yandex Cloud'],
  },
]

const STACK: StackData = {
  paragraphs: [
    'The frontend is built in Svelte — compiled ahead of time rather than shipping a runtime framework, which keeps the site light and quick for visitors on any connection. Tailwind handles styling end to end, letting the whole visual system live as utility classes without a separate CSS architecture to maintain.',
    'Content is managed through Sveltia CMS, a git-based headless CMS: the client logs into its editor UI, writes or edits a scenario or news post, and the change commits directly to the site\'s repository — no server, no database, no admin backend to secure or maintain. On the infrastructure side, the site runs on Yandex Cloud, with hosting configured from scratch and the domain\'s NS records pointed at it so pervaya-nota.ru resolves correctly end to end.',
  ],
  groups: [
    {
      label: 'FRONTEND',
      pills: [
        { name: 'Svelte',       hero: true },
        { name: 'Tailwind CSS', hero: true },
        { name: 'Vite' },
        { name: 'TypeScript' },
      ],
    },
    {
      label: 'CONTENT',
      pills: [
        { name: 'Sveltia CMS', hero: true },
        { name: 'Git-based CMS' },
        { name: 'Markdown' },
      ],
    },
    {
      label: 'INFRASTRUCTURE',
      pills: [
        { name: 'Yandex Cloud', hero: true },
        { name: 'NS / DNS',     hero: true },
        { name: 'Custom domain' },
      ],
    },
    {
      label: 'WORKFLOW',
      pills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Solo project' },
      ],
    },
  ],
}

const NAV: ProjectNavData = {
  prev: { label: 'ORBI Fund',      href: '../orbi/'         },
  next: { label: 'Skolkovo Golf',  href: '../skolkovogolf/' },
}

// ─────────────────────────────────────────────────────────────────────────────

mountGlowCursor()
mountLightbox()

const app = document.getElementById('app')!
const slot = (): HTMLDivElement => {
  const d = document.createElement('div')
  app.appendChild(d)
  return d
}

mountProjectTopNav(slot(), {
  counter: '06 / 09',
  homeHref: '/portfolio/'
})
mountHero(slot())
mountMetrics(slot(), METRICS)
mountOverview(slot(), OVERVIEW)
mountGallery(slot(), GALLERY)
mountTeam(slot(), TEAM)
mountStack(slot(), STACK)
mountProjectNav(slot(), NAV)
mountFooter(slot())

requestAnimationFrame(() => window.scrollTo(0, 0))
