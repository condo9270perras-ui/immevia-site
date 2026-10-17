// build.mjs — assembles the site into dist/. No dependencies: Node only.
//   src/layout.mjs      shared <head>, header, footer
//   src/pages/*.mjs     one module per page: export { path, title, description, body, ... }
//   src/styles.css      shared CSS (inlined into every page: one request, no FOUC)
//   content/fr.json     every sentence the pages show, by page (English will be en.json → /en/)
//   static/             copied as is (favicon, og image, robots)
// Run: node build.mjs   → dist/   (Netlify runs this on every deploy)
import { readFileSync, writeFileSync, mkdirSync, readdirSync, cpSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { layout } from './src/layout.mjs'

const root = dirname(fileURLToPath(import.meta.url))
const out = join(root, 'dist')
const SITE = 'https://immevia.ca'

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
cpSync(join(root, 'static'), out, { recursive: true })

const css = readFileSync(join(root, 'src/styles.css'), 'utf8')
const t = JSON.parse(readFileSync(join(root, 'content/fr.json'), 'utf8'))
const pagesDir = join(root, 'src/pages')
const urls = []

for (const file of readdirSync(pagesDir).filter((f) => f.endsWith('.mjs')).sort()) {
  const page = await import(join(pagesDir, file))
  const content = t[page.key] ?? {}
  const html = layout({ site: SITE, css, lang: 'fr', t, page, content, body: page.body({ t, c: content, site: SITE }) })
  const target = join(out, page.path.replace(/^\//, '') || 'index.html')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
  if (page.index !== false) urls.push({ loc: SITE + page.canonical, lastmod: page.lastmod ?? '2026-10-17', priority: page.priority ?? '0.7' })
}

writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`)
if (!existsSync(join(out, 'index.html'))) throw new Error('index.html missing')
console.log(`built ${urls.length} indexed pages → dist/`)
