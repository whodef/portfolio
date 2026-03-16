import './gallery.css'
import '../lightbox/lightbox.css'
import { openLightbox } from '../lightbox/lightbox'

export interface GalleryItem {
  /** Short label shown on hover and in lightbox */
  label: string
  /** aspect ratio class: 'wide' | 'tall' | 'sq' | 'short' */
  ratio: 'wide' | 'tall' | 'sq' | 'short'
  /** Optional real screenshot path, e.g. '../../screenshots/01.png' */
  src?:  string
}

export interface GalleryData {
  /** Short intro paragraph under the heading */
  lead:  string
  items: GalleryItem[]
}

export function mountGallery(root: HTMLElement, d: GalleryData): void {
  root.innerHTML = `
    <section class="proj-gallery" id="gallery">
      <div class="proj-section-inner">
        <div class="tag-label">&lt;h3&gt;</div>
        <h3 class="section-title">Screenshots</h3>
        <div class="tag-close">&lt;/h3&gt;</div>
        <p class="proj-gallery-lead">${d.lead}</p>
        <div class="proj-masonry">
          ${d.items.map((item, i) => {
            const num = String(i + 1).padStart(2, '0')
            const inner = item.src
              ? `<img class="proj-masonry-img" src="${item.src}" alt="${item.label}" loading="lazy">`
              : `<div class="proj-img-ph ${item.ratio}">
                   <div class="proj-img-ph-num">[ ${num} ]</div>
                   <div class="proj-img-ph-lbl">${item.label}</div>
                 </div>`
            return `
              <div class="proj-masonry-item" data-num="${num}" data-lbl="${item.label}">
                ${inner}
                <div class="proj-masonry-overlay">${item.label}</div>
              </div>`
          }).join('')}
        </div>
      </div>
    </section>`

  root.querySelectorAll<HTMLElement>('.proj-masonry-item').forEach(el => {
    el.addEventListener('click', () =>
      openLightbox(el.dataset.num ?? '', el.dataset.lbl ?? '')
    )
  })
}
