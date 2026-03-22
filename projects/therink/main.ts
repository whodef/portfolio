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
  { val: '5',    desc: 'Person core team, plus external contractors for ticketing and gift certificates',      source: '// TEAM'    },
  { val: '3+',   desc: 'Activity verticals on one platform — ice rink, padel, tennis, table tennis, pétanque', source: '// PRODUCT' },
  { val: 'Live', desc: 'Seasonal production site — peaks in winter with ice rink ticket sales',                source: '// STATUS'  },
  { val: '1',    desc: 'Unified platform replacing phone-based scheduling across all activities',              source: '// IMPACT'  },
]

const OVERVIEW: OverviewData = {
  paragraphs: [
    'The Rink is a multi-activity sports and leisure venue in Moscow — an ice rink in winter, and a full outdoor complex in summer with padel courts, tennis, table tennis, pétanque, and a café.',
    'As Frontend Lead I led the frontend team alongside one other frontend developer. The site is primarily informational — showcasing the venue, events calendar, and complex map — with integrated flows for ice rink ticket purchase and gift certificates handled via third-party contractors.',
    'One of the key features I built was the interactive venue map with seasonal switching between the winter and summer versions of the complex — giving visitors a clear visual overview of everything available depending on the time of year.',
    'The site is seasonal by nature, peaking sharply in winter around ice rink bookings. Production support and performance under load were an ongoing part of the work.',
  ],
  meta: [
    { key: 'ROLE',      val: 'Frontend Lead',           green: true },
    { key: 'TYPE',      val: 'Venue & Booking Platform'             },
    { key: 'TEAM',      val: '5 core + contractors'                 },
    { key: 'PLATFORM',  val: 'Web + Mobile'                         },
    { key: 'STACK',     val: 'Next.js · Python · Wagtail'           },
    { key: 'STATUS',    val: 'Live · seasonal',          green: true },
    { key: 'SITE',      val: 'therink.ru →',             link: 'https://therink.ru' },
  ],
}

const GALLERY: GalleryData = {
  lead: 'From the interactive venue map to ticket purchase flows — a full walkthrough of the platform across both seasons.',
  items: [
    { label: 'Homepage — winter season',        ratio: 'wide',  src: '/portfolio/therink/homepage_winter_season.webp' },
    { label: 'Ice rink ticket purchase flow',   ratio: 'tall',  src: '/portfolio/therink/ice_rink_ticket_purchase_flow.webp' },
    { label: 'Activity booking — padel courts', ratio: 'sq',    src: '/portfolio/therink/activity_booking.webp' },
    { label: 'Summer complex overview',         ratio: 'wide',  src: '/portfolio/therink/summer_complex_overview.webp' },
    { label: 'Mobile — homepage',               ratio: 'tall',  src: '/portfolio/therink/main.webp' },
    { label: 'Events & schedule page',          ratio: 'short', src: '/portfolio/therink/schedule_page.webp' },
    { label: 'Homepage — summer season',        ratio: 'wide',  src: '/portfolio/therink/homepage_summer_season.webp' },
    { label: 'Gift certificate flow',           ratio: 'sq',    src: '/portfolio/therink/gift_certificate_flow.webp' },
  ],
}

const TEAM: TeamMember[] = [
  {
    initials: 'TS',
    name:     'Tatiana Seliuk',
    role:     'Frontend Lead — venue map, events calendar, booking flows, prod support',
    tags:     ['Next.js', 'TypeScript', 'CSS Modules', 'Review'],
  },
  {
    initials: '—',
    name:     'Frontend Developer',
    role:     'UI components, pages, responsive layouts',
    tags:     ['Next.js', 'TypeScript', 'SCSS'],
  },
  {
    initials: '—',
    name:     'Backend Developer',
    role:     'API design, database architecture, server-side logic',
    tags:     ['Python', 'Wagtail', 'PostgreSQL'],
  },
  {
    initials: '—',
    name:     'Project Manager',
    role:     'Timeline, client communication, delivery coordination',
    tags:     ['PM', 'Review', 'Testing'],
  },
  {
    initials: '—',
    name:     'CTO',
    role:     'Product vision, business decisions, stakeholder management',
    tags:     ['PRODUCT', 'STRATEGY'],
  },
]

const STACK: StackData = {
  paragraphs: [
    'Built as a unified platform serving multiple activity verticals — ice rink, padel, tennis, and more — with seasonal content switching. Content is managed via Wagtail CMS, giving the venue team full control over pages, events, and the seasonal map without touching code.',
    'The frontend is Next.js with TypeScript, optimised for seasonal traffic spikes in winter. External ticketing and gift certificate modules were integrated via clean API contracts with third-party contractors.',
  ],
  groups: [
    {
      label: 'FRONTEND',
      pills: [
        { name: 'Next.js',      hero: true },
        { name: 'TypeScript',   hero: true },
        { name: 'CSS Modules' },
        { name: 'Mobile-first', hero: true },
      ],
    },
    {
      label: 'BACKEND',
      pills: [
        { name: 'Python',     hero: true },
        { name: 'Wagtail',    hero: true },
        { name: 'PostgreSQL', hero: true },
        { name: 'REST API' },
      ],
    },
    {
      label: 'INFRA & INTEGRATIONS',
      pills: [
        { name: 'Docker' },
        { name: 'GitHub CI' },
        { name: 'Ticketing API' },
        { name: 'Payment Gateway' },
      ],
    },
  ],
}

const NAV: ProjectNavData = {
  prev: { label: 'Skolkovo Golf', href: '../skolkovogolf/' },
  // next: { label: 'SportsPari',    href: '../sportspari/' },
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
  counter: '02 / 03',
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
