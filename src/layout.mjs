// src/layout.mjs — the frame every page shares.
export const NAV = [
  { href: '/plateforme/', key: 'navPlatform', label: 'Plateforme' },
  { href: '/dossier-vivant/', key: 'navRecord', label: 'Dossier vivant' },
  { href: '/assemblees/', key: 'navAssemblies', label: 'Assemblées' },
  { href: '/solutions/', key: 'navSolutions', label: 'Solutions' },
  { href: '/tarifs/', key: 'navPricing', label: 'Tarifs' },
  { href: '/faq/', key: 'navFaq', label: 'FAQ' },
]

export const APP_URL = 'https://propmanage-production.up.railway.app' // → https://app.immevia.ca once the custom domain is live
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function layout({ site, css, lang, page, body }) {
  const canonical = site + page.canonical
  const title = page.fullTitle ?? `${page.title} — Immevia`
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#1B1A17">
<meta name="robots" content="${page.index === false ? 'noindex,follow' : 'index,follow,max-image-preview:large'}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Immevia">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="fr_CA">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${site}/og.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap">
${(page.preload ?? []).map((u) => `<link rel="preload" as="image" href="${u}" fetchpriority="high">`).join('')}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="description" content="${esc(page.description)}">
<title>${esc(title)}</title>
${page.jsonld ? `<script type="application/ld+json">${JSON.stringify(page.jsonld)}</script>` : ''}
<style>${css}</style>
</head>
<body><a class="skip" href="#main">Aller au contenu</a>
<header><nav class="wrap"><a class="logo" href="/" aria-label="Immevia — accueil"><span class="mark">⌂</span> immevia<span style="color:#9E3B2C">.</span></a><button class="mobile-toggle" id="mobileToggle" aria-label="Menu" aria-expanded="false" aria-controls="navlinks">☰</button><div class="navlinks" id="navlinks">${NAV.map((n) => `<a href="${n.href}"${page.canonical.startsWith(n.href) ? ' aria-current="page" class="on"' : ''}>${n.label}</a>`).join('')}<a href="${APP_URL}/auth/login" class="login">Connexion</a><a href="/#contact" class="btn dark">Demander une démo ↗</a></div></nav></header>
<main id="main">
${body}
</main>
<footer class="footer"><div class="wrap footrow"><div><div class="logo"><span class="mark" style="background:#2C2924">⌂</span> immevia<span style="color:#9E3B2C">.</span></div><p>© <span id="year"></span> Immevia · Moubarak Technologies · Montréal (Québec)</p></div><div class="footerlinks"><a href="/plateforme/">Plateforme</a><a href="/dossier-vivant/">Dossier vivant</a><a href="/assemblees/">Assemblées</a><a href="/#loi-16">Loi 16</a><a href="/tarifs/">Tarifs</a><a href="/faq/">FAQ</a><a href="/#contact">Contact</a><a href="/confidentialite.html">Confidentialité</a><a href="/conditions.html">Conditions</a></div></div></footer>
<script>
const nl=document.getElementById('navlinks'),mt=document.getElementById('mobileToggle');mt.onclick=()=>{const o=nl.classList.toggle('open');mt.setAttribute('aria-expanded',o)};nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nl.classList.remove('open');mt.setAttribute('aria-expanded','false')}));document.getElementById('year').textContent=new Date().getFullYear();
${page.script ?? ''}
</script>
</body>
</html>
`
}

/** Shared building blocks for inner pages. */
export const ui = {
  hero: ({ eyebrow, title, copy, cta = true, ctaLabel = 'Demander une démo ↗', secondary }) => `
<div class="hero inner"><div class="wrap"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p>${cta ? `<div class="actions"><a class="btn dark" href="/#contact">${ctaLabel}</a>${secondary ? `<a class="btn light" href="${secondary.href}">${secondary.label}</a>` : ''}</div>` : ''}</div></div>`,
  section: ({ id, label, title, copy, inner, alt }) => `
<section${id ? ` id="${id}"` : ''}${alt ? ' class="alt"' : ''}><div class="wrap">${label ? `<span class="section-label">${label}</span>` : ''}${title ? `<h2 class="section-title">${title}</h2>` : ''}${copy ? `<p class="section-copy">${copy}</p>` : ''}${inner}</div></section>`,
  cards: (items) => `<div class="cards">${items.map((c) => `<div class="card">${c.icon ? `<span class="icon">${c.icon}</span>` : ''}<h3>${c.title}</h3><p>${c.text}</p></div>`).join('')}</div>`,
  steps: (items) => `<div class="steps">${items.map((s, i) => `<div class="step"><b>0${i + 1}</b><h3>${s.title}</h3><p>${s.text}</p></div>`).join('')}</div>`,
  flow: (items) => `<ol class="flow">${items.map((s) => `<li><div><strong>${s.title}</strong><p>${s.text}</p></div></li>`).join('')}</ol>`,
  faq: (items) => `<div class="faq">${items.map((q) => `<details><summary>${q.q}</summary><div class="faq-a">${q.a}</div></details>`).join('')}</div>`,
  cta: ({ title, text, label = 'Parlons de vos besoins ↗' }) => `
<section><div class="wrap"><div class="cta"><h2>${title}</h2><p>${text}</p><a href="/#contact" class="btn dark">${label}</a></div></div></section>`,
  honest: (text) => `<p class="honest">${text}</p>`,
}
