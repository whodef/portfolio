import './lightbox.css'

let _lb:  HTMLElement | null = null
let _num: HTMLElement | null = null
let _lbl: HTMLElement | null = null

export function mountLightbox(): void {
  const lb = document.createElement('div')
  lb.className = 'proj-lightbox'
  lb.innerHTML = `
    <span class="proj-lb-close">✕</span>
    <div class="proj-lb-inner">
      <div class="proj-lb-ph">
        <div class="proj-lb-num" id="projLbNum"></div>
        <div class="proj-lb-lbl" id="projLbLbl"></div>
      </div>
    </div>`
  document.body.prepend(lb)

  _lb  = lb
  _num = lb.querySelector('#projLbNum')
  _lbl = lb.querySelector('#projLbLbl')

  lb.querySelector('.proj-lb-close')!.addEventListener('click', close)
  lb.addEventListener('click', e => { if (e.target === lb) close() })
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close() })
}

export function openLightbox(num: string, label: string): void {
  if (!_lb) return
  _num!.textContent = `[ SCREENSHOT ${num} ]`
  _lbl!.textContent = label
  _lb.classList.add('open')
}

function close(): void { _lb?.classList.remove('open') }
