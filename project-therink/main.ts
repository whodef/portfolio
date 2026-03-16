import '../src/styles/global.css'

history.scrollRestoration = 'manual'
window.scrollTo(0, 0)

import { mountGlowCursor }    from '../src/utils/glowCursor'
import { mountLightbox }      from '../src/utils/lightbox'
import { mountProjectTopNav } from '../src/pages/project/top-nav/top-nav'
import { mountHero }          from './hero/hero'
import { mountMetrics }       from '../src/pages/project/metrics/metrics'
import { mountOverview }      from '../src/pages/project/overview/overview'
import { mountGallery }       from '../src/pages/project/gallery/gallery'
import { mountTeam }          from '../src/pages/project/team/team'
import { mountStack }         from '../src/pages/project/stack/stack'
import { mountProjectNav }    from '../src/pages/project/project-nav/project-nav'
import { mountFooter }        from '../src/pages/project/footer/footer'

import type { MetricItem }    from '../src/pages/project/metrics/metrics'
import type { OverviewData }  from '../src/pages/project/overview/overview'
import type { GalleryData }   from '../src/pages/project/gallery/gallery'
import type { TeamMember }    from '../src/pages/project/team/team'
import type { StackData }     from '../src/pages/project/stack/stack'
import type { ProjectNavData } from '../src/pages/project/project-nav/project-nav'

// ─── PAGE DATA — edit everything here ────────────────────────────────────────

const METRICS: MetricItem[] = [
  { val: '+62%',  desc: 'Increase in rink occupancy within 60 days of launch',    source: '// BOOKING ANALYTICS' },
  { val: '3.8×',  desc: 'Faster booking flow vs. previous phone-based system',     source: '// UX RESEARCH'        },
  { val: '12',    desc: 'Ice arenas onboarded in the first production quarter',    source: '// GROWTH DATA'        },
  { val: '99.7%', desc: 'Uptime with real-time conflict resolution',               source: '// INFRA MONITORING'   },
]

const OVERVIEW: OverviewData = {
  paragraphs: [
    'TheRink.io was born from a real operational problem: ice arena managers running scheduling on spreadsheets, fielding bookings by phone and losing revenue to double-bookings and manual errors.',
    'As Lead Developer I architected the full system from scratch — real-time scheduling engine with conflict detection, a multi-tenant dashboard for arena operators, a consumer-facing booking flow and an equipment rental module with inventory tracking.',
    'The platform handles concurrent bookings across multiple rinks with sub-100ms conflict resolution using an optimistic locking strategy in PostgreSQL backed by a Redis pub/sub layer for live UI updates.',
    'Equipment rental was the highest-ROI feature post-launch: arenas reported 40% additional revenue per session when rental was surfaced inline during booking rather than at the counter.',
  ],
  meta: [
    { key: 'ROLE',      val: 'Lead Developer',      green: true  },
    { key: 'TIMELINE',  val: '2023 — 2024'                       },
    { key: 'TYPE',      val: 'SaaS / Sports Tech'                },
    { key: 'TEAM SIZE', val: '5 people'                          },
    { key: 'PLATFORM',  val: 'Web + Mobile PWA'                  },
    { key: 'STATUS',    val: 'Live · 12 arenas',    green: true  },
    { key: 'SITE',      val: 'therink.io →',        link: 'https://therink.io' },
  ],
}

const GALLERY: GalleryData = {
  lead: 'Scheduling dashboard, booking flow, equipment module and mobile views. Replace placeholders by setting the src field in each item.',
  items: [
    { label: 'Main scheduling dashboard',         ratio: 'wide'  },
    { label: 'Booking flow — date & time picker', ratio: 'tall'  },
    { label: 'Equipment rental catalogue',        ratio: 'sq'    },
    { label: 'Revenue analytics — operator view', ratio: 'wide'  },
    { label: 'Mobile PWA — consumer booking',     ratio: 'tall'  },
    { label: 'User profile & booking history',    ratio: 'short' },
    { label: 'Admin — multi-rink management',     ratio: 'wide'  },
    { label: 'Notification & confirmation screen', ratio: 'sq'   },
    // To add a real screenshot: { label: '...', ratio: 'wide', src: './screenshots/01.png' }
  ],
}

const TEAM: TeamMember[] = [
  {
    initials: 'TS',
    name:     'Tatiana Seliuk',
    role:     'Lead Developer — architecture, backend, frontend, DevOps',
    tags:     ['TypeScript', 'React', 'Node.js', 'AWS'],
  },
  {
    initials: '—',
    name:     'Teammate Name',
    role:     'Replace with actual name and role',
    tags:     ['DESIGN', 'FIGMA'],
  },
  {
    initials: '—',
    name:     'Teammate Name',
    role:     'Replace with actual name and role',
    tags:     ['BACKEND', 'DB'],
  },
  {
    initials: '—',
    name:     'Teammate Name',
    role:     'Replace with actual name and role',
    tags:     ['MOBILE', 'PWA'],
  },
]

const STACK: StackData = {
  paragraphs: [
    'Architected for real-time multi-tenancy. The scheduling engine uses PostgreSQL advisory locks with a Redis pub/sub layer — every open browser tab sees slot changes in under 200ms without polling.',
    'The consumer PWA hits Lighthouse 98 on mobile, making it fast enough to open in the arena lobby on any device with spotty Wi-Fi.',
  ],
  groups: [
    {
      label: 'FRONTEND',
      pills: [
        { name: 'TypeScript', hero: true },
        { name: 'React',      hero: true },
        { name: 'Vite' },
        { name: 'TanStack Query' },
        { name: 'Zustand' },
        { name: 'PWA' },
      ],
    },
    {
      label: 'BACKEND',
      pills: [
        { name: 'Node.js',  hero: true },
        { name: 'GraphQL' },
        { name: 'Prisma' },
        { name: 'WebSockets' },
        { name: 'REST API' },
      ],
    },
    {
      label: 'DATA & INFRA',
      pills: [
        { name: 'PostgreSQL', hero: true },
        { name: 'Redis',      hero: true },
        { name: 'Stripe' },
        { name: 'AWS' },
        { name: 'Docker' },
        { name: 'GitHub Actions' },
      ],
    },
  ],
}

const NAV: ProjectNavData = {
  prev: { label: 'Alqen.IO',   href: '../project-alqen/index.html' },
  next: { label: 'SportsPari', href: '../project-sportspari/index.html' },
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

mountProjectTopNav(slot(), { counter: '02 / 03', homeHref: '../../index.html' })
mountHero(slot())
mountMetrics(slot(), METRICS)
mountOverview(slot(), OVERVIEW)
mountGallery(slot(), GALLERY)
mountTeam(slot(), TEAM)
mountStack(slot(), STACK)
mountProjectNav(slot(), NAV)
mountFooter(slot())

requestAnimationFrame(() => window.scrollTo(0, 0))
