import { ui } from '../layout.mjs'
export const key = 'solutions'
export const path = '/solutions/index.html'
export const canonical = '/solutions/'
export const title = 'Solutions'
export const description = 'Immevia pour les syndicats de copropriété, les gestionnaires immobiliers et les propriétaires d’immeubles locatifs ou mixtes au Québec.'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, cta: false }),
  ui.section({ inner: `<div class="who" style="margin-top:0">${c.who.map((w) => `<a href="${w.href}"><h3>${w.title}</h3><p>${w.text}</p><span>${w.cta}</span></a>`).join('')}</div>` }),
].join('')
