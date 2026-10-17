# Immevia — site public (immevia.ca)

Site vitrine d’Immevia, produit de **Moubarak Technologies**. Site statique, sans dépendances ni étape de build : les fichiers de ce dépôt sont servis tels quels par Netlify.

## Production
- Domaine : https://immevia.ca (www → redirection), DNS chez GoDaddy (A `@` → 75.2.60.5)
- Hébergement : Netlify (site « silly-syrniki-98fffe »), HTTPS Let’s Encrypt géré par Netlify
- Formulaire : Netlify Forms, nom `demo-request`, page de confirmation `/merci.html`, notification courriel configurée dans Netlify
- Déploiement : **push sur `main` = mise en production** (une fois le site Netlify lié à ce dépôt)

## Fichiers
| Fichier | Rôle |
|---|---|
| `index.html` | page d’accueil (CSS et JS en ligne, bascule FR/EN en JavaScript) |
| `merci.html` | confirmation après le formulaire |
| `404.html` | page introuvable |
| `confidentialite.html`, `conditions.html` | pages légales — **brouillons**, à finaliser avant commercialisation |
| `favicon.svg` | icône |
| `robots.txt`, `sitemap.xml` | SEO |
| `netlify.toml` | dossier publié + en-têtes de sécurité |

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
