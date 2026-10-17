// src/mocks.mjs — product frames for the homepage.
// Five of them are real screenshots of the app, taken on the fictional demo
// building "Les Jardins Exemple" (invented residents, 555 phone numbers,
// @exemple.immevia.ca addresses). Bare rectangles, no device bezels. The
// Dossier vivant frame stays a built mock because it is a three-stage scroll
// sequence, not a single screen. Images live in static/shots/ (WebP, 2x).
const shot = (name, w, h, alt, { phone = false, eager = false } = {}) => `
<figure class="shot${phone ? ' shot-phone' : ''}"><img src="/shots/${name}.webp" width="${w}" height="${h}" alt="${alt}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></figure>`

const dot = (tone) => `<span class="mdot ${tone}"></span>`
const row = (tone, b, s, extra = '') => `<div class="mock-row${extra}">${dot(tone)}<div><b>${b}</b><span>${s}</span></div></div>`
const lead = (cells) => `<div class="mock-lead">${cells.map((c) => `<div><small>${c.k}</small><strong class="${c.tone ?? ''}">${c.v}</strong>${c.d ? `<span class="mock-d">${c.d}</span>` : ''}</div>`).join('')}</div>`
const head = (title, chip, tone = 'red') => `<div class="mock-h"><b>${title}</b><span class="chip ${tone}">${chip}</span></div>`

export const mocks = {
  /** Hero: the ticket page with a decision waiting (admin side). */
  ticket: () => shot('ticket-admin', 1920, 1680, 'Page d’une demande d’entretien dans Immevia : « Soumission à approuver », entrepreneur Toitures Lavoie, 1 450 $, fil du dossier avec le bouton Approuver et lancer les travaux', { eager: true }),


  /** Section 3: the queue, grouped by what blocks. */
  attention: () => shot('queue', 1920, 1440, 'Liste Maintenance d’Immevia groupée par ce qui bloque : décision attendue, sans réponse depuis 48 h, nouvelles à trier'),


  /** Tab: maintenance — the contractor's phone page, no account. */
  entretien: () => shot('contractor', 1125, 1900, 'Page de l’entrepreneur sur téléphone : travail accepté, visite jeudi 22 oct. 8 h – 10 h, soumission de 1 450 $ envoyée, photos après travaux', { phone: true }),


  /** Tab: assembly follow-up. */
  assemblee: () => shot('assemblee', 1920, 1500, 'Suivi d’une assemblée annuelle : convocation envoyée à 6 destinataires, 6 copropriétaires sur 6 avec courriel, étapes faites et prochaine étape « Tenir l’assemblée »'),


  /** Tab: finances — collections at a glance. */
  finances: () => shot('finances', 1920, 1420, 'Finances d’Immevia : 450 $ à percevoir, 88 % perçu ce mois (7 unités sur 8), une unité en retard avec les boutons Relancer et Paiement'),


  /** Section 5: one stage, three states (data-stage on the section). */
  dossierVivant: () => {
    const chips = ['Facture toiture', 'Photo balcon', 'Police d’assurance', 'PV 2024', 'Étude fonds', 'Contrat chaudière', 'Rapport inspection', 'Courriel plombier', 'Plan du toit', 'Reçu Costco', 'Garantie 2 ans', 'Soumission'].map((t, i) => `<span class="dv-chip" style="--i:${i}">${t}</span>`).join('')
    const rows = [['Toiture', 'scellant repris · garantie 2 ans', 'green'], ['Assurance', 'police 2026–2027 · expire le 25 nov. 2027', 'green'], ['Fonds de prévoyance', 'étude reçue · à renouveler en 2030', 'green'], ['Chauffage', 'contrat d’entretien · prochaine visite oct.', 'amber'], ['Assemblées', 'PV 2024, 2025, 2026 · 3 obligations suivies', 'green']]
    return `
<div class="mock dv-card" role="img" aria-label="Le Dossier vivant : des fragments deviennent un dossier daté, puis une mémoire de l’immeuble">
  <div class="mock-h"><b>Dossier vivant · 9270 Perras</b><span class="chip grey dv-s1">en construction</span><span class="chip amber dv-s2">2 à suivre</span><span class="chip green dv-s3">À suivre : 0</span></div>
  <div class="dv-chips">${chips}</div>
  <div class="dv-rows">${rows.map(([k, v, t]) => `<div class="dv-row"><span class="mdot ${t}"></span><b>${k}</b><span>${v}</span><span class="dv-years"><i></i><i></i><i></i><i></i><i></i></span></div>`).join('')}</div>
  <div class="dv-foot"><span class="dv-s1">12 pièces, nulle part en particulier</span><span class="dv-s2">12 pièces datées, rattachées à 5 composantes</span><span class="dv-s3">5 ans d’historique · hérités par le prochain conseil</span></div>
</div>`
  },
}
