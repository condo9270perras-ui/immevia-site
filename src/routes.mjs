// src/routes.mjs — one URL per page and language. French paths are the
// canonical ones used in content and modules; `localize` maps them for /en/.
export const LANGS = ['fr', 'en']
export const ROUTES = {
  home:          { fr: '/',                               en: '/en/' },
  platform:      { fr: '/plateforme/',                    en: '/en/platform/' },
  record:        { fr: '/dossier-vivant/',                en: '/en/living-record/' },
  assemblies:    { fr: '/assemblees/',                    en: '/en/meetings/' },
  loi16:         { fr: '/loi-16/',                        en: '/en/bill-16/' },
  solutions:     { fr: '/solutions/',                     en: '/en/solutions/' },
  syndicats:     { fr: '/solutions/syndicats/',           en: '/en/solutions/condo-boards/' },
  gestionnaires: { fr: '/solutions/gestionnaires/',       en: '/en/solutions/property-managers/' },
  locatifs:      { fr: '/solutions/immeubles-locatifs/',  en: '/en/solutions/rental-buildings/' },
  pricing:       { fr: '/tarifs/',                        en: '/en/pricing/' },
  faq:           { fr: '/faq/',                           en: '/en/faq/' },
  thanks:        { fr: '/merci.html',                     en: '/en/thanks.html' },
}
const byFr = new Map(Object.values(ROUTES).map((r) => [r.fr, r]))

/** Map a French site path (optionally with #anchor) to the same page in `lang`. Unknown paths are returned as is. */
export function localize(href, lang) {
  if (lang === 'fr' || !href.startsWith('/')) return href
  const [path, hash] = href.split('#')
  const r = byFr.get(path || '/')
  if (!r) return href
  return r[lang] + (hash ? '#' + hash : '')
}
