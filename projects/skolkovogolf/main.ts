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
  { val: '4',    desc: 'Person team — Frontend, Backend, PM, and CTO delivering a premium digital product',  source:  '// TEAM'    },
  { val: '18',   desc: 'Hole Jack Nicklaus Signature course with dedicated booking and tee-time flows',      source:  '// GOLF'    },
  { val: '1',    desc: 'Members-only personal cabinet built end-to-end: bookings, profile, status',          source:  '// PRODUCT' },
  { val: 'Live', desc: 'Production site maintained post-launch — deployments, hotfixes, feature iterations', source:  '// OPS'     },
]

const OVERVIEW: OverviewData = {
  paragraphs: [
    'Skolkovo Golf Club is one of Russia\'s most prestigious private golf clubs, located 20 minutes from central Moscow. The course was personally designed by Jack Nicklaus, earning it the Jack Nicklaus Signature status — the highest designation in golf course architecture.',
    'I joined an existing frontend team and took full ownership of the members-only personal cabinet — built end-to-end: booking history, profile management, and membership status with CMS integration via Wagtail (Django).',
    'Beyond the cabinet, I contributed directly to the main site codebase on GitLab — developed a complete hole-by-hole course page and built an animated interactive map of the entire golf club grounds from scratch.',
    'Post-launch I supported the production site — handling deployments, bug fixes, and new feature delivery as the club\'s needs evolved.',
  ],
  meta: [
    { key: 'ROLE',      val: 'Frontend Developer',  green: true },
    { key: 'CLIENT',    val: 'Skolkovo Golf Club'               },
    { key: 'TYPE',      val: 'Premium Club Website'             },
    { key: 'PLATFORM',  val: 'Web'                              },
    { key: 'STACK',     val: 'Next.js · Django · Wagtail'       },
    { key: 'STATUS',    val: 'Live · maintained',   green: true },
    { key: 'SITE',      val: 'skolkovogolf.com →',  link: 'https://skolkovogolf.com' },
  ],
}

const GALLERY: GalleryData = {
  lead: 'From the interactive course map and hole-by-hole stats to membership, club life, gift certificates and merch — a walkthrough of the club\'s site.',
  items: [
    { label: 'Interactive course map — hole-by-hole par & distances', ratio: 'wide', src: '/portfolio/skolkovogolf/interactive_course_map.webp'         },
    { label: 'Homepage — full layout',                                ratio: 'tall', src: '/portfolio/skolkovogolf/homepage_full_layout.webp'           },
    { label: 'Homepage — Jack Nicklaus, course architect',            ratio: 'wide', src: '/portfolio/skolkovogolf/homepage.webp'                       },
    { label: 'Golf page — course map, hole cards & club captains',    ratio: 'tall', src: '/portfolio/skolkovogolf/golf_page_course_map_captains.webp'  },
    { label: 'Homepage — "Close to the city" section',                ratio: 'wide', src: '/portfolio/skolkovogolf/course_overview.webp'                },
    { label: 'Club rules — expandable sections',                      ratio: 'wide', src: '/portfolio/skolkovogolf/club_rules_accordion.webp'           },
    { label: 'Coaching — lessons & coaching staff',                   ratio: 'tall', src: '/portfolio/skolkovogolf/coaching_staff_page.webp'            },
    { label: 'Events — photo & video grid',                           ratio: 'wide', src: '/portfolio/skolkovogolf/events_media_grid.webp'              },
    { label: 'Membership — types & application form',                 ratio: 'tall', src: '/portfolio/skolkovogolf/membership_application_page.webp'    },
    { label: 'Gift certificate flow — design step',                   ratio: 'wide', src: '/portfolio/skolkovogolf/gift_certificate_flow.webp'          },
    { label: 'Club life — fitness, padel & tennis',                   ratio: 'tall', src: '/portfolio/skolkovogolf/club_life_page.webp'                 },
    { label: 'General rules — club visit & etiquette',                ratio: 'tall', src: '/portfolio/skolkovogolf/general_rules_page.webp'             },
    { label: 'Merch catalog — clothing & accessories',                ratio: 'tall', src: '/portfolio/skolkovogolf/merch_catalog.webp'                  },
    { label: 'Careers — team & open roles',                           ratio: 'tall', src: '/portfolio/skolkovogolf/careers_page.webp'                   },
    { label: 'Contacts — departments & footer',                       ratio: 'wide', src: '/portfolio/skolkovogolf/contacts_page.webp'                  },
  ],
}

const TEAM: TeamMember[] = [
  {
    initials: 'TS',
    name:     'Tatiana Seliuk',
    role:     'Frontend Developer. Personal cabinet, hole page, animated club map, prod support',
    tags:     ['Next.js', 'TypeScript', 'SCSS'],
  },
  {
    initials: '—',
    name:     'Frontend Team',
    role:     'Core site architecture and main pages — existing team on the project',
    tags:     ['Next.js', 'SCSS'],
  },
  {
    initials: '—',
    name:     'Backend Developer',
    role:     'Backend architecture, API design, database, server-side logic',
    tags:     ['Django', 'PostgreSQL'],
  },
  {
    initials: '—',
    name:     'Project Manager',
    role:     'Timeline, client communication, delivery coordination, testing & review',
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
    'The frontend is built on Next.js with TypeScript and SCSS modules — chosen for SSR performance and SEO, critical for a premium brand where first impressions matter. All animations are scroll-driven, implemented in vanilla JS without animation libraries to keep the bundle lean.',
    'Content is managed through Wagtail CMS on Django, giving the club\'s editorial team full autonomy over pages, events, and media. The members-only cabinet connects to the Django REST API with session-based auth and role-based access for different membership tiers.',
  ],
  groups: [
    {
      label: 'FRONTEND',
      pills: [
        { name: 'Next.js',    hero: true },
        { name: 'TypeScript', hero: true },
        { name: 'SCSS' },
        { name: 'Vanilla JS' },
        { name: 'SSR' },
      ],
    },
    {
      label: 'CMS & BACKEND',
      pills: [
        { name: 'Django',   hero: true },
        { name: 'Wagtail',  hero: true },
        { name: 'Python' },
        { name: 'REST API' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      label: 'INFRA & TOOLS',
      pills: [
        { name: 'Docker',          hero: true },
        { name: 'Git' },
        { name: 'Nginx' },
        { name: 'Linux' },
      ],
    },
  ],
}

const NAV: ProjectNavData = {
  prev: { label: 'Pervaya Nota', href: '../pervaya-nota/' },
  next: { label: 'The Rink', href: '../therink/' },
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
  counter: '08 / 09',
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
