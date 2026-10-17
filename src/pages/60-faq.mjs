import { ui } from '../layout.mjs'
export const key = 'faq'
export const priority = '0.8'
export const jsonld = (c) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.groups.flatMap((g) => g.items.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '') } }))) })
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, cta: false }),
  ui.section({ inner: c.groups.map((g) => `<h2 class="section-title" style="font-size:26px;margin-top:10px">${g.title}</h2>${ui.faq(g.items)}<div style="height:36px"></div>`).join('') }),
  ui.cta(c.cta),
].join('')
