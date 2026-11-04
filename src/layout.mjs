// src/layout.mjs — the frame every page shares.
import { ROUTES, LANGS } from './routes.mjs'
// Nav order; labels come from content/<lang>.json → ui.nav[key].
export const NAV = [
  { href: '/plateforme/', key: 'platform' },
  { href: '/dossier-vivant/', key: 'record' },
  { href: '/assemblees/', key: 'assemblies' },
  { href: '/loi-16/', key: 'loi16' },
  { href: '/solutions/', key: 'solutions' },
  { href: '/tarifs/', key: 'pricing' },
]

export const APP_URL = 'https://app.immevia.ca'
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function layout({ site, css, lang, t, page, content: c, body }) {
  const ui = t.ui
  const routes = ROUTES[page.key]
  const canonical = site + routes[lang]
  const title = c.fullTitle ?? `${c.metaTitle} — Immevia`
  const description = c.metaDescription ?? ''
  const other = LANGS.find((l) => l !== lang)
  return `<!doctype html>
<html lang="${lang === 'fr' ? 'fr-CA' : 'en-CA'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#F4F2ED">
<meta name="robots" content="${page.index === false ? 'noindex,follow' : 'index,follow,max-image-preview:large'}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Immevia">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${lang === 'fr' ? 'fr_CA' : 'en_CA'}">
${LANGS.map((l) => `<link rel="alternate" hreflang="${l === 'fr' ? 'fr-CA' : 'en-CA'}" href="${site}${routes[l]}">`).join('')}<link rel="alternate" hreflang="x-default" href="${site}${routes.fr}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${site}/og.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Source+Serif+4:wght@600;700&display=swap">
${(typeof page.preload === 'function' ? page.preload(lang) : page.preload ?? []).map((u) => `<link rel="preload" as="image" href="${u}" fetchpriority="high">`).join('')}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="description" content="${esc(description)}">
<title>${esc(title)}</title>
${page.jsonld ? `<script type="application/ld+json">${JSON.stringify(typeof page.jsonld === 'function' ? page.jsonld(c) : page.jsonld)}</script>` : ''}
<style>${css}</style>
</head>
<body><a class="skip" href="#main">${ui.skip}</a>
<header><nav class="wrap"><a class="logo" href="/" aria-label="${ui.homeLabel}"><span class="mark" aria-hidden="true">⌂</span>immevia</a><button class="mobile-toggle" id="mobileToggle" aria-label="${ui.menu}" aria-expanded="false" aria-controls="navlinks"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button><div class="navlinks" id="navlinks">${NAV.map((n) => `<a href="${n.href}"${routes.fr.startsWith(n.href) ? ' aria-current="page" class="on"' : ''}>${ui.nav[n.key]}</a>`).join('')}<a href="${routes[other]}" class="lang" lang="${other}" hreflang="${other}" aria-label="${ui.switchLabel}">${ui.switch}</a><a href="${APP_URL}/auth/login" class="login">${ui.login}</a><a href="/#essai" class="btn primary">${ui.demo}</a></div></nav></header>
<main id="main">
${body}
</main>
<footer class="footer"><div class="wrap footrow"><div><div class="logo"><span class="mark" aria-hidden="true">⌂</span>immevia</div><p>© <span id="year"></span> Immevia · Moubarak Technologies · ${ui.footerPlace}</p><p class="foot-contact">${ui.footerContact} · <a href="mailto:${ui.mail}">${ui.mail}</a> · <a href="${ui.tel}">${ui.phone}</a></p></div><div class="footerlinks">${NAV.slice(0, 4).map((n) => `<a href="${n.href}">${ui.nav[n.key]}</a>`).join('')}<a href="/tarifs/">${ui.nav.pricing}</a><a href="/faq/">FAQ</a><a href="/#essai">${ui.demo}</a><a href="/confidentialite.html"${lang === 'fr' ? '' : ' hreflang="fr"'}>${ui.privacy}</a><a href="/conditions.html"${lang === 'fr' ? '' : ' hreflang="fr"'}>${ui.terms}</a></div></div></footer>
<script>
const nl=document.getElementById('navlinks'),mt=document.getElementById('mobileToggle');mt.onclick=()=>{const o=nl.classList.toggle('open');mt.setAttribute('aria-expanded',o)};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nl.classList.contains('open')){nl.classList.remove('open');mt.setAttribute('aria-expanded','false');mt.focus()}});nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nl.classList.remove('open');mt.setAttribute('aria-expanded','false')}));document.getElementById('year').textContent=new Date().getFullYear();
${page.script ?? ''}
</script>
</body>
</html>
`
}

// Line icons for the feature cards (the content files name them by the old glyph).
const ICON_PATHS = {
  '⚒': ['M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z'],
  '▤': ['M7 3.5h7l4 4v13H7z', 'M14 3.5v4h4', 'M9.5 12.5h6', 'M9.5 16h4'],
  '◫': ['M12 6v12', 'M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.3c0 3.2 6 1.8 6 5 0 1.4-1.3 2.7-3 2.7s-3-1.1-3-2.5'],
  '◉': ['M4.5 6.5h15v13h-15z', 'M4.5 10h15', 'M8.5 4v4', 'M15.5 4v4'],
  '✉': ['M3.5 6.5h17v11h-17z', 'M3.5 7l8.5 6 8.5-6'],
}
export const icon = (k) => ICON_PATHS[k] ? `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICON_PATHS[k].map((d) => `<path d="${d}"/>`).join('')}</svg>` : k

/** Shared building blocks for inner pages. `strings` is set per build (language) by build.mjs. */
let strings = {}
export function setStrings(s) { strings = s }
export const ui = {
  hero: ({ eyebrow, title, copy, cta = true, ctaLabel = strings.demo, secondary }) => `
<div class="hero inner"><div class="wrap"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p>${cta ? `<div class="actions"><a class="btn primary" href="/#essai">${ctaLabel}</a>${secondary ? `<a class="btn secondary" href="${secondary.href}">${secondary.label}</a>` : `<a class="btn secondary" href="${strings.tel}">${strings.talk} · ${strings.phone}</a>`}</div>` : ''}</div></div>`,
  section: ({ id, label, title, copy, inner, alt }) => `
<section${id ? ` id="${id}"` : ''}${alt ? ' class="alt"' : ''}><div class="wrap">${label ? `<span class="section-label">${label}</span>` : ''}${title ? `<h2 class="section-title">${title}</h2>` : ''}${copy ? `<p class="section-copy">${copy}</p>` : ''}${inner}</div></section>`,
  cards: (items) => `<div class="cards${items.length % 3 === 2 ? ' cards-2' : ''}${items.length === 4 ? ' cards-4' : ''}">${items.map((c) => `<div class="card">${c.icon ? `<span class="icon" aria-hidden="true">${icon(c.icon)}</span>` : ''}<h3>${c.title}</h3><p>${c.text}</p></div>`).join('')}</div>`,
  steps: (items) => `<div class="steps">${items.map((s, i) => `<div class="step"><b>0${i + 1}</b><h3>${s.title}</h3><p>${s.text}</p></div>`).join('')}</div>`,
  flow: (items) => `<ol class="flow">${items.map((s) => `<li><div><strong>${s.title}</strong><p>${s.text}</p></div></li>`).join('')}</ol>`,
  faq: (items) => `<div class="faq">${items.map((q) => `<details><summary>${q.q}</summary><div class="faq-a">${q.a}</div></details>`).join('')}</div>`,
  cta: ({ title, text, label = strings.ctaDefault, href = '/#essai' }) => `
<section><div class="wrap"><div class="cta"><h2>${title}</h2><p>${text}</p><div class="actions" style="justify-content:center"><a href="${href}" class="btn primary">${label}</a><a class="btn secondary" href="${strings.tel}">${strings.talk} · ${strings.phone}</a></div></div></div></section>`,
  honest: (text) => `<p class="honest">${text}</p>`,
}
