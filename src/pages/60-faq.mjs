import { ui } from '../layout.mjs'
export const key = 'faq'
export const path = '/faq/index.html'
export const canonical = '/faq/'
export const priority = '0.8'
export const title = 'Questions fréquentes'
export const description = 'Mise en place, résidents sans compte, entrepreneurs par lien, rappels de paiement, hébergement des données, accès par rôle, récupération des données : les réponses d’Immevia.'
export const jsonld = null
export const body = ({ c }) => [
  ui.hero({ eyebrow: c.eyebrow, title: c.title, copy: c.copy, cta: false }),
  ui.section({ inner: c.groups.map((g) => `<h2 class="section-title" style="font-size:26px;margin-top:10px">${g.title}</h2>${ui.faq(g.items)}<div style="height:36px"></div>`).join('') }),
  ui.cta({ title: 'Il manque votre question ?', text: 'Écrivez-nous ; la réponse ira ici pour les suivants.', label: 'Nous écrire ↗' }),
].join('')
