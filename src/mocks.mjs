// src/mocks.mjs — product frames for the homepage.
// Five of them are real screenshots of the app, taken on the fictional demo
// building "Les Jardins Exemple" (invented residents, 555 phone numbers,
// @exemple.immevia.ca addresses). Bare rectangles, no device bezels. The
// Dossier vivant frame stays a built mock because it is a three-stage scroll
// sequence, not a single screen. Images live in static/shots/ (WebP, 2x).
let shotDir = ''
/** Per-language screenshot folder ('' for French, 'en/' for English); set by build.mjs. */
export function setShotDir(d) { shotDir = d }
export const shot = (name, w, h, alt, { phone = false, eager = false } = {}) => `
<figure class="shot${phone ? ' shot-phone' : ''}"><img src="/shots/${shotDir}${name}.webp" width="${w}" height="${h}" alt="${alt}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></figure>`

const dot = (tone) => `<span class="mdot ${tone}"></span>`
const row = (tone, b, s, extra = '') => `<div class="mock-row${extra}">${dot(tone)}<div><b>${b}</b><span>${s}</span></div></div>`
const lead = (cells) => `<div class="mock-lead">${cells.map((c) => `<div><small>${c.k}</small><strong class="${c.tone ?? ''}">${c.v}</strong>${c.d ? `<span class="mock-d">${c.d}</span>` : ''}</div>`).join('')}</div>`
const head = (title, chip, tone = 'red') => `<div class="mock-h"><b>${title}</b><span class="chip ${tone}">${chip}</span></div>`

export const mocks = {
  /** Hero: the ticket page with a decision waiting (admin side). */
  ticket: (ui) => shot('ticket-admin', 1920, 1680, ui.shots.ticket, { eager: true }),


  /** Section 3: the queue, grouped by what blocks. */
  attention: (ui) => shot('queue', 1920, 1440, ui.shots.queue),


  /** Tab: maintenance — the contractor's phone page, no account. */
  entretien: (ui) => shot('contractor', 1125, 1900, ui.shots.contractor, { phone: true }),


  /** Tab: assembly follow-up. */
  assemblee: (ui) => shot('assemblee', 1920, 1500, ui.shots.assemblee),


  /** Tab: finances — collections at a glance. */
  finances: (ui) => shot('finances', 1920, 1420, ui.shots.finances),


  /** Section 5: one stage, three states (data-stage on the section). */
  dossierVivant: (ui) => {
    const chips = ui.dv.chips.map((t, i) => `<span class="dv-chip" style="--i:${i}">${t}</span>`).join('')
    const rows = ui.dv.rows
    return `
<div class="mock dv-card" role="img" aria-label="${ui.shots.dossierVivant}">
  <div class="mock-h"><b>${ui.dv.title}</b><span class="chip grey dv-s1">${ui.dv.s1}</span><span class="chip amber dv-s2">${ui.dv.s2}</span><span class="chip green dv-s3">${ui.dv.s3}</span></div>
  <div class="dv-chips">${chips}</div>
  <div class="dv-rows">${rows.map(([k, v, t]) => `<div class="dv-row"><span class="mdot ${t}"></span><b>${k}</b><span>${v}</span><span class="dv-years"><i></i><i></i><i></i><i></i><i></i></span></div>`).join('')}</div>
  <div class="dv-foot"><span class="dv-s1">${ui.dv.f1}</span><span class="dv-s2">${ui.dv.f2}</span><span class="dv-s3">${ui.dv.f3}</span></div>
</div>`
  },
}
