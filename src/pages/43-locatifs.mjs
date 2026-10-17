import { ui } from '../layout.mjs'
export const key = 'locatifs'
export const path = '/solutions/immeubles-locatifs/' + 'index.html'
export const canonical = '/solutions/immeubles-locatifs/'
export const title = 'Pour les immeubles locatifs et mixtes'
export const description = 'Immevia pour un propriétaire d’immeuble locatif ou mixte : loyers rapprochés automatiquement, réparations par lien, dossier du bâtiment, dépenses par photo de reçu.'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, secondary: { href: '/solutions/', label: 'Autres profils' } }),
  ui.section({ label: c.painsLabel, title: c.painsTitle, inner: ui.cards(c.pains) }),
  ui.section({ alt: true, label: c.fitLabel, title: c.fitTitle, inner: '<ul class="price" style="margin-top:28px;line-height:2;color:var(--muted);padding:28px 28px 28px 48px">' + c.fit.map((f) => '<li>' + f + '</li>').join('') + '</ul>' + ui.honest(c.honest) }),
  ui.cta({ title: 'Parlons de votre immeuble.', text: 'Une démonstration sur votre cas, et un prix clair avant tout engagement.' }),
].join('')
