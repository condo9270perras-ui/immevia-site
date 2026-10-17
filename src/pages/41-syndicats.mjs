import { ui } from '../layout.mjs'
export const key = 'syndicats'
export const path = '/solutions/syndicats/' + 'index.html'
export const canonical = '/solutions/syndicats/'
export const title = 'Pour les syndicats de copropriété'
export const description = 'Immevia pour un conseil d’administration bénévole : charges communes, réparations par lien entrepreneur, assemblée assistée, documents datés, rapport mensuel.'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, secondary: { href: '/solutions/', label: 'Autres profils' } }),
  ui.section({ label: c.painsLabel, title: c.painsTitle, inner: ui.cards(c.pains) }),
  ui.section({ alt: true, label: c.fitLabel, title: c.fitTitle, inner: '<ul class="price" style="margin-top:28px;line-height:2;color:var(--muted);padding:28px 28px 28px 48px">' + c.fit.map((f) => '<li>' + f + '</li>').join('') + '</ul>' + ui.honest(c.honest) }),
  ui.cta({ title: 'Parlons de votre immeuble.', text: 'Une démonstration sur votre cas, et un prix clair avant tout engagement.' }),
].join('')
