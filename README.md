# Immevia — site public (immevia.ca)

Site vitrine d’Immevia, produit de **Moubarak Technologies**. Site statique généré par un petit script Node (aucune dépendance) : `node build.mjs` assemble les pages dans `dist/`, que Netlify publie.

## Production
- Domaine : https://immevia.ca (www → redirection), DNS chez GoDaddy (A `@` → 75.2.60.5)
- Hébergement : Netlify (site « silly-syrniki-98fffe »), HTTPS Let’s Encrypt géré par Netlify
- Formulaire : Netlify Forms, nom `demo-request`, page de confirmation `/merci.html`, notification courriel configurée dans Netlify
- Déploiement : **push sur `main` = mise en production** ; chaque *pull request* reçoit un aperçu Netlify
- Dépôt public (requis par le plan Netlify gratuit pour les commits de plusieurs auteurs) — ne jamais y mettre de secret

## Structure
| Chemin | Rôle |
|---|---|
| `build.mjs` | génère `dist/` : pages, sitemap, copie de `static/` |
| `src/layout.mjs` | en-tête, navigation, pied de page, blocs réutilisables (`ui.*`) |
| `src/styles.css` | feuille de style unique (inline dans chaque page) |
| `src/pages/*.mjs` | une page = un module (`path`, `canonical`, `title`, `description`, `body`) |
| `content/fr.json` | tous les textes, par page — modifier ici pour changer une phrase ; `en.json` viendra pour `/en/` |
| `static/` | fichiers servis tels quels : favicon, image de partage, robots, pages légales, merci, 404 |
| `netlify.toml` | commande de build, dossier publié, en-têtes de sécurité |

Pages : `/` · `/plateforme/` · `/dossier-vivant/` · `/assemblees/` · `/solutions/` (+ `syndicats/`, `gestionnaires/`, `immeubles-locatifs/`) · `/tarifs/` · `/faq/` · pages légales (brouillons, `noindex`).

Pour voir le site en local : `node build.mjs && cd dist && python3 -m http.server 8000`.

## Façon de travailler
1. Créer une branche (`git checkout -b ma-modif`), modifier, pousser.
2. Ouvrir une *pull request* : Netlify publie un **aperçu** à une adresse temporaire.
3. Vérifier l’aperçu (ordinateur et téléphone), puis fusionner dans `main` → en ligne en ~30 s.
4. Pour revenir en arrière : Netlify → Deploys → choisir un déploiement précédent → *Publish deploy*.

## Règles
- Ne pas casser la production ; ne pas modifier le DNS sans raison technique validée.
- Ne pas inventer d’exigences légales (Loi 16, Loi 25) : citer des sources officielles du Québec.
- Pas de faux témoignages, clients ou chiffres.
- Garder l’identité visuelle du produit (palette oxyde `#9E3B2C`, canevas `#F4F2ED`, Inter).
- Français québécois naturel ; l’anglais doit être une vraie expérience, pas une traduction cosmétique.

Historique : la version initiale de ce dépôt est la copie exacte du site mis en ligne par Netlify Drop le 15 octobre 2026.
