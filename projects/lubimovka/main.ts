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
  { val: '20+', desc: 'Frontend developers across 4 squads — coordinated via Slack, shared Storybook, and a unified component library',         source: '// TEAM'       },
  { val: '2',   desc: 'Key features owned end-to-end: play search with filtering and full author profile page with bibliography',               source: '// OWNERSHIP'  },
  { val: '100+', desc: 'Reusable UI components built in Storybook before integration — isolated, documented, and reviewed across squads',       source: '// COMPONENTS' },
  { val: 'Live', desc: 'Production site for a real cultural festival — not a pet project, a working product used by authors, press and audience', source: '// PRODUCT'   },
]

const OVERVIEW: OverviewData = {
  paragraphs: [
    'Lubimovka is one of Russia\'s most significant contemporary drama festivals, with decades of history discovering new playwrights. The website serves as both a public archive and a live platform — housing a library of hundreds of plays, author profiles, festival schedules, and news.',
    'The project was built by a distributed team of 20+ frontend developers organised into 4 squads, working alongside separate backend and QA teams. All coordination happened via Slack with team leads overseeing delivery — close to a real production engineering environment.',
    'I owned two features end-to-end: the play search with text filtering across the library catalog, and the complete author profile page — biography, play bibliography with download links, and responsive layout. When teammates hit blockers, I stepped in and helped carry their tasks across the line too.',
    'All components were first built and documented in Storybook in isolation before being integrated into the Next.js app. This was my first large-scale experience with component-driven development, and the project where I fully committed to Next.js over plain React.',
  ],
  meta: [
    { key: 'ROLE',      val: 'Frontend Developer',                        green: true },
    { key: 'TEAM',      val: '20+ devs · 4 frontend squads'                          },
    { key: 'TYPE',      val: 'Cultural Festival Platform'                             },
    { key: 'PLATFORM',  val: 'Web'                                                    },
    { key: 'STACK',     val: 'Next.js · TypeScript · CSS Modules · Storybook'        },
    { key: 'OWNED',     val: 'Search · Author Profile Page',              green: true },
    { key: 'STATUS',    val: 'Live · production',                         green: true },
    { key: 'SITE',      val: 'lubimovka.art →', link: 'https://lubimovka.art'        },
  ],
}

const GALLERY: GalleryData = {
  lead: 'Play library with search, author profile pages, festival schedule, and mobile views.',
  items: [
    { label: 'Play library — search & filtering',       ratio: 'wide' },
    { label: 'Search results — filtered by keyword',    ratio: 'wide' },
    { label: 'Author profile page — full layout',       ratio: 'tall' },
    { label: 'Author — play bibliography & downloads',  ratio: 'sq'   },
    { label: 'Festival schedule — Afisha page',         ratio: 'wide' },
    { label: 'Storybook — component documentation',     ratio: 'short'},
    { label: 'Mobile — library & search',               ratio: 'tall' },
    { label: 'Mobile — author profile',                 ratio: 'sq'   },
  ],
}

const TEAM: TeamMember[] = [
  {
    initials: 'TS',
    name:     'Tatiana Seliuk',
    role:     'Frontend Developer. Play search feature, author profile page, adaptive layout, squad support — stepped in on teammates\' tasks when needed',
    tags:     ['Next.js', 'TypeScript', 'CSS Modules', 'Storybook'],
  },
  {
    initials: '—',
    name:     'Frontend Squad 1–3',
    role:     'Parallel squads each owning different sections — schedule, news, library structure, navigation, and shared components',
    tags:     ['Next.js', 'CSS Modules'],
  },
  {
    initials: '—',
    name:     'Backend Team',
    role:     'Django REST API — plays, authors, events, news, media storage',
    tags:     ['Django', 'PostgreSQL', 'REST API'],
  },
  {
    initials: '—',
    name:     'QA Team',
    role:     'Cross-browser testing, regression, accessibility checks, and integration validation',
    tags:     ['Testing', 'QA', 'A11y'],
  },
  {
    initials: '—',
    name:     'Team Leads',
    role:     'Technical direction, code review, squad coordination, and mentorship across all frontend teams',
    tags:     ['Lead', 'Review', 'Mentorship'],
  },
]

const STACK: StackData = {
  paragraphs: [
    'The frontend is built on Next.js with TypeScript and CSS Modules — SSR for SEO-critical pages like author profiles and the play library, ensuring content is indexable and fast on first load. CSS Modules kept styles scoped and conflict-free across 20+ developers working in parallel on the same codebase.',
    'The defining constraint of this project was Storybook-first development: every component was built in isolation with documented props and states before being wired into the app. This discipline made cross-squad integration significantly smoother — when my search component needed to plug into the library page built by another squad, the interface contract was already clear. For the search feature specifically, I implemented client-side filtering with debounced input handling to keep the UX responsive without hammering the API on every keystroke.',
  ],
  groups: [
    {
      label: 'FRONTEND',
      pills: [
        { name: 'Next.js',      hero: true },
        { name: 'TypeScript',   hero: true },
        { name: 'CSS Modules',  hero: true },
        { name: 'SSR' },
        { name: 'Adaptive layout' },
      ],
    },
    {
      label: 'COMPONENT SYSTEM',
      pills: [
        { name: 'Storybook',    hero: true },
        { name: 'Component-driven dev' },
        { name: 'Props documentation' },
        { name: 'Isolated testing' },
      ],
    },
    {
      label: 'BACKEND & API',
      pills: [
        { name: 'Django',      hero: true },
        { name: 'REST API' },
        { name: 'PostgreSQL' },
        { name: 'Media storage' },
      ],
    },
    {
      label: 'WORKFLOW',
      pills: [
        { name: 'Git',   hero: true },
        { name: 'Slack' },
        { name: 'Code review' },
        { name: 'Squad-based delivery' },
      ],
    },
  ],
}

const NAV: ProjectNavData = {
  prev: { label: 'SportsPari',    href: '../sportspari/' },
//   next: { label: 'Skolkovo Golf', href: '../skolkovo/'   },
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
  counter: '04 / 09',
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
