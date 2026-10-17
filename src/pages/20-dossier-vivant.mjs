import { ui } from '../layout.mjs'
export const key = 'record'
export const path = '/dossier-vivant/index.html'
export const canonical = '/dossier-vivant/'
export const priority = '0.9'
export const title = 'Le Dossier vivant de l’immeuble'
export const description = 'Le Dossier vivant : des preuves datées rattachées à chaque composante de l’immeuble, ce qui expire signalé d’avance, un historique qui survit aux changements de conseil et de gestionnaire.'
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy }),
  ui.section({ label: c.whatLabel, title: c.whatTitle, copy: c.whatCopy, inner: ui.cards(c.sections) }),
  ui.section({ alt: true, label: c.howLabel, title: c.howTitle, inner: `<div class="two" style="margin-top:38px">${ui.flow(c.how)}<div class="mock" role="img" aria-label="Aperçu de la liste À suivre du Dossier vivant"><div class="mock-h"><b>Dossier vivant · À suivre</b><span class="chip">3 à régler</span></div><div class="mock-row"><span class="mdot red"></span><div><b>Police d’assurance — expire dans 23 jours</b><span>la preuve en place est datée du 25 nov. 2025</span></div></div><div class="mock-row"><span class="mdot amber"></span><div><b>Étude du fonds de prévoyance — aucune preuve</b><span>demande prête à envoyer à un professionnel</span></div></div><div class="mock-row"><span class="mdot amber"></span><div><b>Contrat d’entretien de la chaudière — à renouveler</b><span>dernière intervention : octobre 2025</span></div></div><div class="mock-row"><span class="mdot green"></span><div><b>Toiture — scellant repris, garantie 2 ans</b><span>facture et photos « après » classées</span></div></div><div class="mock-row"><span class="mdot green"></span><div><b>Déclaration de copropriété, règlements</b><span>en place, sans échéance</span></div></div></div></div>` + ui.honest(c.honest) }),
  ui.cta({ title: 'Commencez le dossier de votre immeuble.', text: 'Il se construit au fil des semaines. Le plus tôt il commence, le plus il vaudra.' }),
].join('')
