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
  { val: '2',       desc: 'Email types handled — user-facing transactional notifications and internal ops alerts on bot failures',      source: '// SCOPE'    },
  { val: 'TLS',     desc: 'Configured secure SMTP transport with TLS — set up Yandex Business Mail end-to-end for production use',     source: '// SECURITY' },
  { val: 'Async',   desc: 'Fully asynchronous delivery via Celery task queue and RabbitMQ broker — emails never block the main flow',  source: '// ARCH'     },
  { val: '3–4mo',   desc: 'Volunteer engagement duration — collaborative delivery with a team of 5 under a technical lead',            source: '// TIMELINE' },
]

const OVERVIEW: OverviewData = {
  paragraphs: [
    'ORBI Fund is Russia\'s first dedicated stroke awareness foundation — running a national hotline, patient support programs, and medical staff training across dozens of regions. As part of a volunteer developer initiative, successive teams contributed to building a Telegram-based service platform for the foundation\'s operations.',
    'I joined as a volunteer fullstack developer and took ownership of the email notification microservice — one of the core infrastructure components the bot relied on to communicate with both users and the internal ops team.',
    'The microservice handles two distinct flows: transactional emails to end users (confirmations, status updates) and internal alert emails dispatched automatically when the bot encounters a runtime error. This meant the service had to be both reliable for user communication and fast enough for real-time failure alerting.',
    'A meaningful part of the work was infrastructure configuration: setting up Yandex Business Mail as the SMTP provider, working through TLS certificate configuration, and ensuring the connection was stable in production. Email delivery infrastructure is often taken for granted — until you have to set it up correctly from scratch.',
  ],
  meta: [
    { key: 'ROLE',      val: 'Fullstack Developer — volunteer',          green: true },
    { key: 'CLIENT',    val: 'ORBI Fund · Non-profit'                               },
    { key: 'TYPE',      val: 'Telegram Bot Infrastructure'                           },
    { key: 'OWNED',     val: 'Email Notification Microservice',          green: true },
    { key: 'STACK',     val: 'Python · Celery · RabbitMQ · SMTP/TLS'               },
    { key: 'DURATION',  val: '3–4 months'                                            },
    { key: 'SITE',      val: 'orbifond.ru →', link: 'https://orbifond.ru'           },
  ],
}

// const GALLERY: GalleryData = {
//   lead: 'System architecture, message flow diagrams, and infrastructure configuration. No UI screenshots — this is a backend microservice.',
//   items: [
//     { label: 'System architecture — full service map',         ratio: 'wide'  },
//     { label: 'Email microservice — internal flow diagram',     ratio: 'wide'  },
//     { label: 'RabbitMQ — queue configuration & routing',      ratio: 'sq'    },
//     { label: 'Celery worker — task definition & retry logic',  ratio: 'tall'  },
//     { label: 'SMTP/TLS — Yandex Business Mail setup',         ratio: 'sq'    },
//     { label: 'User email — transactional template example',   ratio: 'short' },
//     { label: 'Ops alert email — bot failure notification',    ratio: 'tall'  },
//     { label: 'ORBI Fund — live platform',                     ratio: 'wide'  },
//   ],
// }

const TEAM: TeamMember[] = [
  {
    initials: 'TS',
    name:     'Tatiana Seliuk',
    role:     'Volunteer Fullstack Developer. Email notification microservice — architecture, implementation, SMTP/TLS configuration, Yandex Business Mail setup, Celery + RabbitMQ integration',
    tags:     ['Python', 'Celery', 'RabbitMQ', 'SMTP', 'TLS'],
  },
  {
    initials: '—',
    name:     'Team Lead',
    role:     'Technical direction, architecture decisions, code review, and coordination across volunteer contributors',
    tags:     ['Lead', 'Review', 'Architecture'],
  },
  {
    initials: '—',
    name:     'Backend Developers (×3)',
    role:     'Telegram bot core, API services, database layer, and other microservice components',
    tags:     ['Python', 'aiogram', 'FastAPI', 'PostgreSQL'],
  },
  {
    initials: '—',
    name:     'Previous volunteer teams',
    role:     'Earlier contributors who built the foundational bot infrastructure this work extended',
    tags:     ['Python', 'Telegram', 'Infrastructure'],
  },
]

const STACK: StackData = {
  paragraphs: [
    'The email microservice is written in Python and integrated into the broader bot platform via RabbitMQ as the message broker. When the bot API service needs to send an email — whether triggered by a user action or a runtime error — it publishes a task to a RabbitMQ queue. A Celery worker consumes the task asynchronously and hands it off to the email service, which handles the actual SMTP delivery. This architecture keeps email sending fully decoupled from the main request flow: a slow or failing mail server never affects bot responsiveness.',
    'The delivery layer uses Python\'s smtplib with explicit TLS configuration — STARTTLS negotiation, certificate verification, and connection pooling. Yandex Business Mail was configured as the SMTP provider, which required working through app password setup, correct port configuration (587 with STARTTLS), and debugging connection edge cases in the production environment. Both user-facing and internal alert templates are managed within the service, with clear separation between the two email types.',
  ],
  groups: [
    {
      label: 'CORE',
      pills: [
        { name: 'Python',     hero: true },
        { name: 'Celery',     hero: true },
        { name: 'RabbitMQ',   hero: true },
        { name: 'asyncio' },
        { name: 'smtplib' },
      ],
    },
    {
      label: 'INFRASTRUCTURE',
      pills: [
        { name: 'SMTP / TLS',           hero: true },
        { name: 'Yandex Business Mail', hero: true },
        { name: 'STARTTLS' },
        { name: 'Docker' },
        { name: 'Linux' },
      ],
    },
    {
      label: 'BOT PLATFORM',
      pills: [
        { name: 'aiogram',   hero: true },
        { name: 'FastAPI' },
        { name: 'PostgreSQL' },
        { name: 'Telegram Bot API' },
      ],
    },
    {
      label: 'WORKFLOW',
      pills: [
        { name: 'Git' },
        { name: 'Slack' },
        { name: 'Microservices' },
        { name: 'Async task queue' },
      ],
    },
  ],
}

const NAV: ProjectNavData = {
  prev: { label: 'Lubimovka',     href: '../lubimovka/'    },
  next: { label: 'Skolkovo Golf', href: '../skolkovogolf/' },
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
  counter: '05 / 09',
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
