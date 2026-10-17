// src/mocks.mjs — product-faithful frames, built from the app's own bones
// (lead cells, timeline rows, chips). Bare rectangles, no device bezels. Every
// figure is illustrative. To be replaced by real screenshots from the demo
// building; keep the same outer markup so the swap is one line per frame.
const dot = (tone) => `<span class="mdot ${tone}"></span>`
const row = (tone, b, s, extra = '') => `<div class="mock-row${extra}">${dot(tone)}<div><b>${b}</b><span>${s}</span></div></div>`
const lead = (cells) => `<div class="mock-lead">${cells.map((c) => `<div><small>${c.k}</small><strong class="${c.tone ?? ''}">${c.v}</strong>${c.d ? `<span class="mock-d">${c.d}</span>` : ''}</div>`).join('')}</div>`
const head = (title, chip, tone = 'red') => `<div class="mock-h"><b>${title}</b><span class="chip ${tone}">${chip}</span></div>`

export const mocks = {
  /** Hero: the ticket page with a decision waiting. `live` adds the arriving-event loop (CSS, reduced-motion safe). */
  ticket: ({ live = false } = {}) => `
<div class="mock mock-hero${live ? ' live' : ''}" role="img" aria-label="Aperçu d’une demande d’entretien dans Immevia : soumission à approuver, visite planifiée, entrepreneur mandaté par lien">
  ${head('Infiltration d’eau au plafond du balcon', 'Décision attendue')}
  <div class="mock-sub"><span class="mono">MT-0012</span> · Condo 6 · Structure / bâtiment · priorité <b>élevée</b></div>
  ${lead([{ k: 'Où ça en est', v: 'Soumission à approuver', tone: 'red' }, { k: 'Entrepreneur', v: 'Toitures Lavoie', d: 'a ouvert son lien' }, { k: 'Soumission', v: '1 450,00 $', d: 'sous le seuil (2 000 $)' }])}
  <div class="mock-act"><b>Soumission reçue : 1 450,00 $ — « Reprise du solin et scellant, garantie 2 ans »</b><span class="btn dark sm">Approuver et lancer les travaux</span></div>
  ${row('amber', 'Visite planifiée : jeudi 16 oct., 8 h – 10 h', 'résident prévenu · « je ne serai pas là » disponible', ' mock-new')}
  ${row('green', 'Toitures Lavoie a accepté le travail', 'lien ouvert 14 min après l’envoi')}
  ${row('grey', 'Demande envoyée avec 3 photos', 'disponibilités : soirs de semaine')}
</div>`,

  /** Section 3: the queue, calm by default. */
  attention: () => `
<div class="mock" role="img" aria-label="Aperçu de la liste À suivre : ce qui demande une décision cette semaine">
  ${head('À suivre · cette semaine', '3 à régler', 'amber')}
  ${row('red', 'Soumission à approuver — Toitures Lavoie, 1 450 $', 'MT-0012 · reçue hier')}
  ${row('red', 'Facture à enregistrer — Plomberie Rivière, 312,50 $', 'MT-0009 · conforme à la soumission')}
  ${row('amber', 'Police d’assurance — expire dans 23 jours', 'la preuve en place est datée du 25 nov.')}
  ${row('amber', 'Entrepreneur sans réponse depuis 3 jours', 'MT-0011 · lien jamais ouvert')}
  <div class="mock-quiet">Tout le reste est en ordre. <span class="mono">4 tickets en cours · 7 / 7 charges reçues</span></div>
</div>`,

  /** Tab: maintenance — the contractor's phone page, no account. */
  entretien: () => `
<div class="phone" role="img" aria-label="Aperçu de la page de l’entrepreneur sur téléphone : accepter, choisir un moment, envoyer une soumission">
  <div class="scr">
    <div class="top"><small>Syndicat 9270 Perras</small><b>Demande de travaux · MT-0012</b></div>
    <div class="bx"><b>Infiltration d’eau au plafond du balcon</b><p>Condo 6 · 3 photos · Le résident est disponible : soirs de semaine après 17 h, jeudi matin.</p></div>
    <div class="bx"><b>1. Acceptez-vous ce travail ?</b><div class="row"><span class="go">Oui, j’accepte</span><span>Pas disponible</span></div></div>
    <div class="bx"><b>2. Quand passez-vous ?</b><p>jeudi 16 oct., 8 h – 10 h</p></div>
    <div class="bx"><b>3. Votre soumission</b><p>1 450,00 $ · Reprise du solin et scellant</p></div>
    <div class="bx" style="border-style:dashed;background:#FBFAF7"><b>4. Après les travaux</b><p>Photos « après » et facture, par le même lien.</p></div>
  </div>
</div>`,

  /** Tab: assembly follow-up. */
  assemblee: () => `
<div class="mock" role="img" aria-label="Aperçu du suivi d’une assemblée : réponses, quorum, relance, procès-verbal">
  ${head('Assemblée annuelle · 28 octobre', 'PV transmis', 'green')}
  ${lead([{ k: 'Réponses', v: '6 / 7', tone: 'green', d: '1 relancé hier' }, { k: 'Quorum', v: 'Atteint', tone: 'green', d: 'présents + représentés' }, { k: 'Documents', v: '4 joints', d: 'états financiers, budget' }])}
  ${row('green', 'Convocation envoyée aux 7 unités', 'test reçu avant l’envoi')}
  ${row('amber', 'Relance envoyée à l’unité sans réponse', 'un tap')}
  ${row('grey', 'Séance : présences, quorum, 6 points votés', 'majorités affichées')}
  ${row('green', 'Procès-verbal généré et transmis', 'classé au Dossier vivant')}
  <div class="mock-act ok"><b>Obligation votée → échéancier</b><span>Remplacement du chauffe-eau commun avant le 30 juin</span></div>
</div>`,

  /** Tab: finances — Interac reconciliation. */
  finances: () => `
<div class="mock" role="img" aria-label="Aperçu du rapprochement des paiements : virements Interac reconnus automatiquement">
  ${head('Charges d’octobre', '7 / 7 reçues', 'green')}
  ${lead([{ k: 'Attendu', v: '3 150,00 $' }, { k: 'Reçu', v: '3 150,00 $', tone: 'green' }, { k: 'En retard', v: '0', tone: 'green', d: 'rappels : aucun' }])}
  ${row('green', 'Virement Interac — Condo 3 · 450,00 $', 'reconnu depuis le courriel, rapproché automatiquement')}
  ${row('green', 'Virement Interac — Condo 6 · 450,00 $', 'reconnu, rapproché')}
  ${row('amber', 'Chèque — Condo 1 · 450,00 $', 'saisi par le syndic')}
  ${row('grey', 'Rapport mensuel de septembre', 'PDF généré · transmis au conseil')}
</div>`,

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
