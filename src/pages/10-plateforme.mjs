import { ui } from '../layout.mjs'
export const key = 'platform'
export const path = '/plateforme/index.html'
export const canonical = '/plateforme/'
export const priority = '0.9'
export const title = 'La plateforme'
export const description = 'Entretien, Dossier vivant, finances, assemblées et portail résident : ce que la plateforme Immevia fait concrètement pour un immeuble au Québec.'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, secondary: { href: '/dossier-vivant/', label: 'Le Dossier vivant ↓' } }),
  ui.section({ label: c.areasLabel, title: c.areasTitle, inner: ui.cards(c.areas) }),
  ui.section({ alt: true, label: c.exceptionLabel, title: c.exceptionTitle, copy: c.exceptionCopy, inner: `<div class="two" style="margin-top:38px"><div class="mock" role="img" aria-label="Aperçu d’un ticket d’entretien avec une soumission à approuver"><div class="mock-h"><b>Infiltration d’eau au plafond du balcon</b><span class="chip red">Décision attendue</span></div><div class="mock-lead"><div><small>Où ça en est</small><strong class="red">Soumission à approuver</strong></div><div><small>Entrepreneur</small><strong>Toitures Lavoie</strong></div><div><small>Soumission</small><strong>1 450,00 $</strong></div></div><div class="mock-act"><b>Soumission reçue : 1 450,00 $ — sous le seuil d’approbation (2 000 $)</b><span class="btn dark">Approuver et lancer les travaux</span></div><div class="mock-row"><span class="mdot amber"></span><div><b>Visite planifiée : jeudi 16 oct., 8 h – 10 h</b><span>résident prévenu, « je ne serai pas là » disponible</span></div></div><div class="mock-row"><span class="mdot green"></span><div><b>Toitures Lavoie a accepté le travail</b><span>a ouvert son lien 14 minutes après l’envoi</span></div></div><div class="mock-row"><span class="mdot grey"></span><div><b>Demande envoyée avec 3 photos</b><span>Condo 6 · disponibilités : soirs de semaine</span></div></div></div><div>${ui.steps(c.exceptions)}</div></div>` }),
  ui.section({ label: c.rolesLabel, title: c.rolesTitle, inner: ui.steps(c.roles) + ui.honest(c.honest) }),
  ui.cta({ title: 'Voyez-la fonctionner sur votre immeuble.', text: 'Trente minutes, votre cas, aucune promesse que nous ne pouvons pas montrer à l’écran.' }),
].join('')
