import './overview.css'

export interface MetaRow {
  key:    string
  val:    string
  green?: boolean
  /** wraps val in <a target=_blank> */
  link?:  string
}

export interface OverviewData {
  /** Array of paragraph strings — add as many as needed */
  paragraphs: string[]
  meta:       MetaRow[]
}

export function mountOverview(root: HTMLElement, d: OverviewData): void {
  root.innerHTML = `
    <section class="proj-overview" id="overview">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h2&gt;</div>
        <h2 class="section-title">Project Overview</h2>
        <div class="tag-close">&lt;/h2&gt;</div>

        <div class="proj-overview-grid">
          <div class="proj-overview-body">
            ${d.paragraphs.map(p => `<p>${p}</p>`).join('')}
          </div>
          <div class="proj-info-card">
            <div class="proj-info-header">PROJECT INFO</div>
            ${d.meta.map(row => {
              const inner = row.link
                ? `<a href="${row.link}" target="_blank" rel="noopener">${row.val}</a>`
                : row.val
              return `
                <div class="proj-info-row">
                  <div class="proj-info-key">${row.key}</div>
                  <div class="proj-info-val${row.green ? ' green' : ''}">${inner}</div>
                </div>`
            }).join('')}
          </div>
        </div>
      </div>
    </section>`
}
