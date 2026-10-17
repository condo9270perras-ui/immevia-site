import { ui } from '../layout.mjs'
import { shot } from '../mocks.mjs'
export const key = 'platform'
export const priority = '0.9'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, secondary: { href: '/dossier-vivant/', label: c.secondaryLabel } }),
  ui.section({ label: c.areasLabel, title: c.areasTitle, inner: ui.cards(c.areas) }),
  ui.section({ alt: true, label: c.exceptionLabel, title: c.exceptionTitle, copy: c.exceptionCopy, inner: `<div class="two" style="margin-top:38px">${shot('ticket-admin', 1920, 1680, c.shotAlt)}<div>${ui.steps(c.exceptions)}</div></div>` }),
  ui.section({ label: c.rolesLabel, title: c.rolesTitle, inner: ui.steps(c.roles) + ui.honest(c.honest) }),
  ui.cta(c.cta),
].join('')
