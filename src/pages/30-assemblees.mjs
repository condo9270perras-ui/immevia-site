import { ui } from '../layout.mjs'
export const key = 'assemblies'
export const priority = '0.9'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy }),
  ui.section({ label: c.flowLabel, title: c.flowTitle, inner: `<div class="assembly-split" style="margin-top:38px">${ui.flow(c.flow)}<div class="mock" role="img" aria-label="${c.mockAlt}"><div class="mock-h"><b>${c.mockTitle}</b><span class="chip green">${c.mockChip}</span></div><div class="mock-lead">${c.mockLead.map((m) => `<div><small>${m.k}</small><strong class="${m.tone}">${m.v}</strong><span style="font-size:11px;color:var(--muted2)">${m.d}</span></div>`).join('')}</div>${c.mockRows.map((r) => `<div class="mock-row"><span class="mdot ${r.tone}"></span><div><b>${r.b}</b><span>${r.s}</span></div></div>`).join('')}<div class="mock-act" style="border-color:#1F7A4D;background:#F3FAF6"><b>${c.mockAct.b}</b><span>${c.mockAct.s}</span></div></div></div>` }),
  ui.section({ alt: true, label: c.whyLabel, title: c.whyTitle, inner: ui.steps(c.why) + ui.honest(c.honest) }),
  ui.cta(c.cta),
].join('')
