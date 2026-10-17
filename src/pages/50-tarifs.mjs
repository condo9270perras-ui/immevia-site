import { ui } from '../layout.mjs'
export const key = 'pricing'
export const path = '/tarifs/index.html'
export const canonical = '/tarifs/'
export const priority = '0.8'
export const title = 'Tarifs'
export const description = 'Immevia est facturée par porte, par mois, toutes fonctions et tous utilisateurs inclus, sans engagement de longue durée. Prix sur devis selon le nombre d’unités.'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, ctaLabel: 'Obtenir un prix pour mon immeuble ↗' }),
  ui.section({ inner: `<div class="price" style="margin-top:0"><p class="big">${c.big}</p><p style="color:var(--muted);margin:0 0 14px">Ce qui est inclus, toujours :</p><ul>${c.includes.map((i) => `<li>${i}</li>`).join('')}</ul></div><h2 class="section-title" style="margin-top:60px;font-size:30px">${c.cardsTitle}</h2><div class="price-grid">${c.cards.map((k) => `<div class="card"><h3>${k.title}</h3><p>${k.text}</p></div>`).join('')}</div>` + ui.honest(c.honest) }),
  ui.cta({ title: 'Un chiffre clair, par écrit.', text: 'Dites-nous le nombre d’unités et le type d’immeuble ; vous aurez une réponse rapide.', label: 'Demander un prix ↗' }),
].join('')
