import { ui } from '../layout.mjs'
export const key = 'pricing'
export const priority = '0.8'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, ctaLabel: c.heroCta }),
  ui.section({ inner: `<div class="price" style="margin-top:0"><p class="big">${c.big}</p><p style="color:var(--muted);margin:0 0 14px">${c.includesTitle}</p><ul>${c.includes.map((i) => `<li>${i}</li>`).join('')}</ul></div><h2 class="section-title" style="margin-top:60px;font-size:30px">${c.cardsTitle}</h2><div class="price-grid">${c.cards.map((k) => `<div class="card"><h3>${k.title}</h3><p>${k.text}</p></div>`).join('')}</div>` + ui.honest(c.honest) }),
  ui.cta(c.cta),
].join('')
