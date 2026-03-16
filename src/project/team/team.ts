import './team.css'

export interface TeamMember {
  initials: string
  name:     string
  role:     string
  tags:     string[]
}

export function mountTeam(root: HTMLElement, members: TeamMember[]): void {
  root.innerHTML = `
    <section class="proj-team" id="team">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h4&gt;</div>
        <h4 class="section-title">Team</h4>
        <div class="tag-close">&lt;/h4&gt;</div>
        <div class="proj-team-grid">
          ${members.map(m => `
            <div class="proj-team-card" data-reveal>
              <div class="proj-team-avatar">${m.initials}</div>
              <div class="proj-team-name">${m.name}</div>
              <div class="proj-team-role">${m.role}</div>
              <div class="proj-team-tags">
                ${m.tags.map(t => `<span class="proj-team-tag">${t}</span>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>`

  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
  let fired = false
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || fired) return
      fired = true
      cards.forEach((c, i) => setTimeout(() => c.classList.add('visible'), i * 110))
      obs.disconnect()
    })
  }, { threshold: 0.15 })
  cards.forEach(c => obs.observe(c))
}
