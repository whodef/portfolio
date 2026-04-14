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
  { val: '80+',  desc: 'External service integrations unified under a single frontend architecture (SDKs, iframes, APIs)', source: '// INTEGRATIONS' },
  { val: '900+', desc: 'Interactive content units delivered through a consistent UI layer with dynamic rendering',        source: '// CATALOG'      },
  { val: 'KYC',  desc: 'End-to-end identity verification flow: document upload, async processing, and status lifecycle',   source: '// COMPLIANCE'   },
  { val: 'Live', desc: 'Production platform with continuous delivery, monitoring, and real user traffic',                  source: '// OPS'          },
]

const OVERVIEW: OverviewData = {
  paragraphs: [
    'A high-load real-time entertainment platform operating in a regulated market, aggregating content from 80+ external providers into a unified frontend experience. The system supports multiple interactive verticals, all delivered through a single Next.js application.',
    
    'I worked as a Frontend Developer and owned the personal cabinet domain end-to-end: authentication, identity verification (KYC), transaction history, balance management, and account settings. The system required robust state management across asynchronous flows and role-based access control.',
    
    'A major technical challenge was integrating multiple third-party providers with completely different launch protocols (iframe-based, SDK-based, tokenized sessions). I built a unified abstraction layer that ensured consistent UX, minimized layout shifts, and handled edge cases across providers.',
    
    'The real-time layer required WebSocket integration to display live data streams and dynamic state updates. I implemented UI synchronization mechanisms to keep data consistent across sessions and prevent race conditions in fast-changing states.',
  ],
  meta: [
    { key: 'ROLE',     val: 'Frontend Developer',                          green: true },
    { key: 'MARKET',   val: 'Regulated international market'                         },
    { key: 'TYPE',     val: 'Real-time platform'                                      },
    { key: 'PLATFORM', val: 'Web'                                                      },
    { key: 'STACK',    val: 'Next.js · TypeScript · Tailwind · WebSocket · GraphQL'   },
    { key: 'FOCUS',    val: 'Cabinet · KYC · Real-time UI · Integrations'             },
    { key: 'STATUS',   val: 'Live · production',                           green: true },
    { key: 'SITE',     val: 'Available on request',                                  },
  ],
}

const GALLERY: GalleryData = {
  lead: 'Personal cabinet, identity verification flow, interactive catalog, real-time UI, and transaction management interfaces.',
  items: [
    { label: 'Account dashboard — overview & balance',        ratio: 'wide'  },
    { label: 'KYC — identity verification flow',              ratio: 'wide'  },
    { label: 'Transaction history & financial operations',    ratio: 'tall'  },
    { label: 'Real-time UI — live data visualization',        ratio: 'sq'    },
    { label: 'Content catalog — filtering & discovery',       ratio: 'wide'  },
    { label: 'External module integration layer',             ratio: 'short' },
    { label: 'Mobile — dashboard view',                       ratio: 'tall'  },
    { label: 'Mobile — catalog',                              ratio: 'sq'    },
  ],
}

const TEAM: TeamMember[] = [
  {
    initials: 'TS',
    name:     'Tatiana Seliuk',
    role:     'Frontend Developer. Personal cabinet, KYC flow, third-party integrations, real-time UI, production support',
    tags:     ['Next.js', 'TypeScript', 'Tailwind', 'WebSocket'],
  },
  {
    initials: '—',
    name:     'Backend Team',
    role:     'API layer, integrations, financial systems, data processing',
    tags:     ['Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    initials: '—',
    name:     'Product Manager',
    role:     'Requirements, delivery, stakeholder coordination',
    tags:     ['PM', 'Roadmap'],
  },
  {
    initials: '—',
    name:     'QA Engineer',
    role:     'End-to-end testing, regression, edge case validation',
    tags:     ['Testing', 'QA'],
  },
]

const STACK: StackData = {
  paragraphs: [
    'The frontend architecture is based on Next.js with TypeScript and Tailwind. SSR is used for public-facing parts, while client-side rendering powers authenticated areas with complex state and interactions.',
    
    'One of the most challenging parts was building a unified integration layer for third-party services with inconsistent APIs and rendering models. The solution ensured predictable UI behavior, minimized layout shifts, and improved performance across the platform.',
    
    'Real-time functionality is powered by WebSocket connections, requiring careful synchronization of UI state with rapidly changing data streams. Special attention was given to handling concurrency, fallback states, and reconnection logic.',
  ],
  groups: [
    {
      label: 'FRONTEND',
      pills: [
        { name: 'Next.js',    hero: true },
        { name: 'TypeScript', hero: true },
        { name: 'Tailwind',   hero: true },
        { name: 'SSR' },
        { name: 'CSR' },
      ],
    },
    {
      label: 'REAL-TIME & API',
      pills: [
        { name: 'WebSocket',  hero: true },
        { name: 'GraphQL',    hero: true },
        { name: 'REST API' },
        { name: 'SDK / iframe integration' },
      ],
    },
    {
      label: 'AUTH & DATA',
      pills: [
        { name: 'KYC Flow',          hero: true },
        { name: 'Authentication' },
        { name: 'Role-based access' },
        { name: 'Async state flows' },
      ],
    },
    {
      label: 'INFRA & TOOLS',
      pills: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'CI/CD' },
      ],
    },
  ],
}

const NAV: ProjectNavData = {
  prev: { label: 'The Rink',    href: '../therink/'    },
  next: { label: 'Lubimovka Art', href: '../lubimovka/'   },
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
  counter: '03 / 09',
  homeHref: '/portfolio/'
})
mountHero(slot())
mountMetrics(slot(), METRICS)
mountOverview(slot(), OVERVIEW)
// mountGallery(slot(), GALLERY)
mountTeam(slot(), TEAM)
mountStack(slot(), STACK)
mountProjectNav(slot(), NAV)
mountFooter(slot())

requestAnimationFrame(() => window.scrollTo(0, 0))
