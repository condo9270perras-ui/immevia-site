import { ui, signupUrl } from '../layout.mjs'
export const key = 'pricing'
export const priority = '0.8'
export const jsonld = (c) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '') } })) })
export const body = ({ t, c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, ctaLabel: c.heroCta }),
  ui.section({ inner: `<div class="price-wrap">
  <div class="price"><p class="big">${c.big}</p><p class="big-sub">${c.bigSub}</p><p class="price-founder">${c.founder}</p><p class="price-yearly">${c.yearly}</p><a class="btn primary" href="${signupUrl(t.lang)}">${c.heroCta}</a><p class="price-includes-t">${c.includesTitle}</p><ul class="checks">${c.includes.map((i) => `<li>${i}</li>`).join('')}</ul></div>
  <div><h2 class="section-title" style="font-size:28px;margin-top:0">${c.exTitle}</h2><table class="price-table"><thead><tr>${c.exHead.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${c.examples.map((r) => `<tr>${r.map((v, i) => i ? `<td class="num">${v}</td>` : `<th scope="row">${v}</th>`).join('')}</tr>`).join('')}</tbody></table><p class="legal-note">${c.exNote}</p></div>
</div>` }),
  ui.section({ alt: true, title: c.trialTitle, inner: ui.steps(c.trial) }),
  ui.section({ title: c.faqTitle, inner: ui.faq(c.faq) }),
  ui.cta(c.cta),
].join('')
