// build.mjs — assembles the site into dist/. No dependencies: Node only.
//   src/layout.mjs      shared <head>, header, footer
//   src/pages/*.mjs     one module per page: export { path, title, description, body, ... }
//   src/styles.css      shared CSS (inlined into every page: one request, no FOUC)
//   content/<lang>.json every sentence the pages show, by page; fr → /, en → /en/ (src/routes.mjs)
//   static/             copied as is (favicon, og image, robots)
// Run: node build.mjs   → dist/   (Netlify runs this on every deploy)
import { readFileSync, writeFileSync, mkdirSync, readdirSync, cpSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { layout, setStrings } from './src/layout.mjs'
import { ROUTES, LANGS, localize } from './src/routes.mjs'
import { setShotDir } from './src/mocks.mjs'

const root = dirname(fileURLToPath(import.meta.url))
const out = join(root, 'dist')
const SITE = 'https://immevia.ca'

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
cpSync(join(root, 'static'), out, { recursive: true })

const css = readFileSync(join(root, 'src/styles.css'), 'utf8')
const pagesDir = join(root, 'src/pages')
const pages = []
for (const file of readdirSync(pagesDir).filter((f) => f.endsWith('.mjs')).sort()) pages.push(await import(join(pagesDir, file)))
const urls = []

for (const lang of LANGS) {
  const t = JSON.parse(readFileSync(join(root, `content/${lang}.json`), 'utf8'))
  t.lang = lang
  setStrings(t.ui)
  setShotDir(lang === 'fr' ? '' : lang + '/')
  for (const page of pages) {
    const content = t[page.key]
    if (!content) throw new Error(`content/${lang}.json has no "${page.key}"`)
    let html = layout({ site: SITE, css, lang, t, page, content, body: page.body({ t, c: content, site: SITE }) })
    // Every internal link is written in French; point it at this language's page.
    if (lang !== 'fr') html = html.replace(/(href|action)="(\/[^"]*)"/g, (m, attr, href) => `${attr}="${localize(href, lang)}"`)
    const route = ROUTES[page.key][lang]
    const target = join(out, route.replace(/^\//, ''), 'index.html')
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, html)
    if (page.index !== false) urls.push({ loc: SITE + route, lastmod: page.lastmod ?? '2026-10-17', priority: page.priority ?? '0.7' })
  }
}

writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`)
if (!existsSync(join(out, 'index.html'))) throw new Error('index.html missing')
console.log(`built ${urls.length} indexed pages → dist/`)
