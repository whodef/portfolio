import './lightbox.css'

let _lb:  HTMLElement | null = null
let _num: HTMLElement | null = null
let _lbl: HTMLElement | null = null

export function mountLightbox(): void {
  const lb = document.createElement('div')
  lb.className = 'lightbox'
  lb.innerHTML = `
    <span class="lb-close" id="lbClose">✕</span>
    <div class="lightbox-inner">
      <div class="lightbox-ph">
        <div class="lightbox-num" id="lbNum"></div>
        <div class="lightbox-lbl" id="lbLbl"></div>
      </div>
    </div>`
  document.body.prepend(lb)

  _lb  = lb
  _num = lb.querySelector('#lbNum')
  _lbl = lb.querySelector('#lbLbl')

  lb.querySelector('#lbClose')!.addEventListener('click', close)
  lb.addEventListener('click', e => { if (e.target === lb) close() })
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close() })
}

export function openLightbox(num: string, label: string): void {
  if (!_lb) return
  _num!.textContent = `[ SCREENSHOT ${num} ]`
  _lbl!.textContent = label
  _lb.classList.add('open')
}

function close(): void {
  _lb?.classList.remove('open')
}
