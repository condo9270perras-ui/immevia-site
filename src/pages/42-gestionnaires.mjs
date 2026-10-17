import { ui } from '../layout.mjs'
export const key = 'gestionnaires'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, secondary: { href: '/solutions/', label: c.secondaryLabel } }),
  ui.section({ label: c.painsLabel, title: c.painsTitle, inner: ui.cards(c.pains) }),
  ui.section({ alt: true, label: c.fitLabel, title: c.fitTitle, inner: '<ul class="price" style="margin-top:28px;line-height:2;color:var(--muted);padding:28px 28px 28px 48px">' + c.fit.map((f) => '<li>' + f + '</li>').join('') + '</ul>' + ui.honest(c.honest) }),
  ui.cta(c.cta),
].join('')
