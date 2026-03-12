import './styles/global.css'

history.scrollRestoration = 'manual'
window.scrollTo(0, 0)

import { mountGlowCursor } from './utils/glowCursor'
import { mountNav }        from './components/nav/nav'
import { mountHero }       from './components/hero/hero'
import { mountPortfolio }  from './components/portfolio/portfolio'
import { mountPress }      from './components/press/press'
import { mountContact }    from './components/contact/contact'

mountGlowCursor()

const app = document.getElementById('app')!

const navSlot       = document.createElement('div')
const heroSlot      = document.createElement('div')
const portfolioSlot = document.createElement('div')
const pressSlot     = document.createElement('div')
const contactSlot   = document.createElement('div')

app.append(navSlot, heroSlot, portfolioSlot, pressSlot, contactSlot)

mountNav(navSlot)
mountHero(heroSlot)
mountPortfolio(portfolioSlot)
mountPress(pressSlot)
mountContact(contactSlot)

requestAnimationFrame(() => window.scrollTo(0, 0))
