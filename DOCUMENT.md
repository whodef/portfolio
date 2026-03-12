# Portfolio — Tatiana Seliuk

## Стек
Vanilla TypeScript + Vite. Без фреймворков. Без новых зависимостей.

## Структура
```
src/
  main.ts                        — монтирует компоненты
  styles/global.css              — переменные, reset, shared-классы
  utils/connector.ts             — animateConnector(), observeConnector()
  utils/glowCursor.ts
  components/
    nav/nav.ts + nav.css
    hero/hero.ts + hero.css
    portfolio/portfolio.ts + portfolio.css
    press/press.ts + press.css
    contact/contact.ts + contact.css
```

## Паттерн компонента
```typescript
import './component.css'
export function mountX(root: HTMLElement): void {
  root.innerHTML = `...`
  // listeners
}
```

## CSS-переменные
```css
--bg: #0a0d0f
--bg2: #0d1117
--green: #00ff88
--green-glow: rgba(0,255,136,0.15)
--text: #e8f5e9
--text-dim: #8899aa
--border: rgba(0,255,136,0.2)
--font-mono: 'Orbitron', sans-serif;
--font-body: 'Nova Mono', monospace;
--font-secondary: 'Sono', monospace;
```

## Правила
- CSS-переменные не хардкодить
- Данные (слайды, ссылки) — константы в начале файла компонента
- Проверка: `npx tsc --noEmit && npx vite build`
