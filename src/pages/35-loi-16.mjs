// src/pages/35-loi-16.mjs — Loi 16 / Bill 16: obligations, deadlines, sources.
// Every fact on this page links to Québec.ca, LégisQuébec or the decree.
import { ui } from '../layout.mjs'
export const key = 'loi16'
export const priority = '0.8'
export const lastmod = '2026-10-23'
export const jsonld = (c) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '') } })) })
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.h1, copy: c.copy }),
  ui.section({ label: c.keyLabel, title: c.keyTitle, inner: `<div class="law-key">${c.key.map((k) => `<div class="card"><strong>${k.n}</strong><h3>${k.title}</h3><p>${k.text}</p></div>`).join('')}</div>` }),
  ui.section({ alt: true, label: c.tableLabel, title: c.tableTitle, copy: c.tableCopy, inner: `<table class="law-table"><thead><tr>${c.cols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${c.rows.map((r) => `<tr>${r.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>` }),
  ui.section({ label: c.doesLabel, title: c.doesTitle, inner: ui.cards(c.does) + ui.honest(c.honest) }),
  ui.section({ alt: true, title: c.faqTitle, inner: ui.faq(c.faq) + `<h2 class="section-title" style="font-size:24px;margin-top:56px">${c.sourcesTitle}</h2><ul class="law-sources">${c.sources.map((s) => `<li>${s}</li>`).join('')}</ul><p class="legal-note">${c.verified}</p>` }),
  ui.cta(c.cta),
].join('')
