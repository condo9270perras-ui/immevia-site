import { ui } from '../layout.mjs'
import { shot } from '../mocks.mjs'
export const key = 'record'
export const priority = '0.9'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy }),
  ui.section({ label: c.whatLabel, title: c.whatTitle, copy: c.whatCopy, inner: ui.cards(c.sections) }),
  ui.section({ alt: true, label: c.howLabel, title: c.howTitle, inner: `<div class="two" style="margin-top:38px">${ui.flow(c.how)}${shot('dossier', 1920, 1480, c.shotAlt)}</div>` + ui.honest(c.honest) }),
  ui.cta(c.cta),
].join('')
