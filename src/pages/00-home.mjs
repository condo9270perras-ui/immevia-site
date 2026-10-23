// src/pages/00-home.mjs — the homepage, redesign of 2026-10-17.
// Nine sections: nav · hero (memory outcome + real product) · credibility line ·
// what needs attention · three workflows (tabs) · Dossier vivant (scroll
// sequence) · who it's for · Québec (ink band) · pricing + demo form · footer.
// Product frames are real screenshots of the app on a fictional demo building
// (see src/mocks.mjs); the Dossier vivant frame is a built three-stage mock.
import { mocks } from '../mocks.mjs'

export const key = 'home'
export const priority = '1.0'
export const preload = (lang) => [`/shots/${lang === 'fr' ? '' : lang + '/'}ticket-admin.webp`]
export const jsonld = (c) => ({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Immevia', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://immevia.ca/', description: c.jsonldDescription, publisher: { '@type': 'Organization', name: 'Moubarak Technologies', url: 'https://immevia.ca/' } })

const label = (t) => `<span class="eyebrow">${t}</span>`
const h2 = (t) => `<h2 class="section-title">${t}</h2>`
const copy = (t) => `<p class="section-copy">${t}</p>`

export const body = ({ c, t }) => { const ui_ = t.ui; return `
<div id="top"></div>
<div class="hero">
  <div class="wrap hero-grid">
    <div>
      ${label(c.eyebrow)}
      <h1>${c.h1}</h1>
      <p>${c.sub}</p>
      <div class="actions"><a class="btn dark" href="#contact">${c.ctaPrimary}</a><a class="btn light" href="#attention">${c.ctaSecondary}</a></div>
    </div>
    ${mocks.ticket(t.ui)}
  </div>
</div>

<div class="cred"><div class="wrap cred-row"><p>${c.cred}</p><div class="cred-facts">${c.credFacts.map((f) => `<span>${f}</span>`).join('')}</div></div></div>

<section id="attention">
  <div class="wrap">
    ${label(c.attLabel)}${h2(c.attTitle)}${copy(c.attCopy)}
    <div class="two" style="margin-top:40px;align-items:center">
      ${mocks.attention(t.ui)}
      <div class="steps" style="grid-template-columns:1fr;margin-top:0">${c.att.map((a, i) => `<div class="step"><b>0${i + 1}</b><h3>${a.title}</h3><p>${a.text}</p></div>`).join('')}</div>
    </div>
  </div>
</section>

<section id="gestes" class="alt">
  <div class="wrap">
    ${label(c.flowLabel)}${h2(c.flowTitle)}${copy(c.flowCopy)}
    <div class="tabs" role="tablist" aria-label="${c.flowLabel}">${c.tabs.map((t, i) => `<button role="tab" id="tab-${t.key}" aria-controls="panel-${t.key}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${t.label}</button>`).join('')}</div>
    ${c.tabs.map((t, i) => `<div class="tabpanel" id="panel-${t.key}" role="tabpanel" aria-labelledby="tab-${t.key}"${i ? ' hidden' : ''}><div class="two" style="align-items:center"><div><h3 class="tab-title">${t.title}</h3><p class="section-copy">${t.text}</p><a class="btn light" href="${t.link}" style="margin-top:14px">${c.more}</a></div>${mocks[t.key](ui_)}</div></div>`).join('')}
  </div>
</section>

<section id="dossier-vivant" class="dv">
  <div class="wrap">
    ${label(c.dvLabel)}${h2(c.dvTitle)}
    <div class="dv-grid">
      <div class="dv-steps">${c.dvSteps.map((s, i) => `<div class="dv-step" data-stage="${i + 1}"><span class="eyebrow">${s.year}</span><h3>${s.title}</h3><p>${s.text}</p></div>`).join('')}<p class="dv-close">${c.dvClose}</p><a class="btn dark" href="/dossier-vivant/">${c.dvCta}</a></div>
      <div class="dv-stage">${mocks.dossierVivant(t.ui)}</div>
    </div>
  </div>
</section>

<section id="pour-qui" class="alt">
  <div class="wrap">
    ${label(c.whoLabel)}${h2(c.whoTitle)}
    <div class="who">${c.who.map((w) => `<a href="${w.href}"><h3>${w.title}</h3><p>${w.text}</p><span>${c.whoCta}</span></a>`).join('')}</div>
  </div>
</section>

<section id="loi-16"><a id="law"></a>
  <div class="wrap"><div class="compliance">
    <div>${label(c.qcLabel)}<h2 class="section-title">${c.qcTitle}</h2><p>${c.qcText}</p><a class="btn green" href="/loi-16/">${c.qcCta}</a></div>
    <div><ul>${c.qcList.map((l) => `<li>${l}</li>`).join('')}</ul></div>
  </div></div>
</section>

<section id="contact">
  <div class="wrap contact">
    <div>
      ${label(c.priceLabel)}${h2(c.priceTitle)}${copy(c.priceText)}
      <a class="ux-link" href="/tarifs/" style="display:inline-block;margin-top:14px;color:var(--oxide);font-weight:700">${c.priceLink}</a>
      <h3 style="margin:40px 0 6px;font-size:22px;letter-spacing:-.4px">${c.formTitle}</h3>
      <p class="notice">${c.formNote}</p>
    </div>
    <form class="form" id="contactForm" name="demo-request" method="POST" data-netlify="true" netlify-honeypot="company-website" action="/merci.html">
      <input type="hidden" name="form-name" value="demo-request">
      <p style="display:none"><label>${c.formHoney} <input name="company-website"></label></p>
      <label><span>${c.formName}</span><input name="name" required maxlength="100" autocomplete="name"></label>
      <label><span>${c.formEmail}</span><input type="email" name="email" required maxlength="150" autocomplete="email" inputmode="email"></label>
      <div class="form-row">
        <label><span>${c.formOrg}</span><select name="type">${c.formOrgOptions.map((o) => `<option value="${o.value}">${o.label}</option>`).join('')}</select></label>
        <label><span>${c.formUnits}</span><input name="units" inputmode="numeric" maxlength="6" placeholder="${c.formUnitsPh}"></label>
      </div>
      <label><span>${c.formMessage}</span><textarea name="message" maxlength="2000" placeholder="${c.formMessagePh}"></textarea></label>
      <input type="hidden" name="lang" value="${t.lang}">
      <button class="btn dark" type="submit">${c.formSubmit}</button>
      <p class="legal-note">${c.formLegal}</p>
    </form>
  </div>
</section>` }

export const script = String.raw`
// tabs
const tabs=[...document.querySelectorAll('[role=tab]')],panels=[...document.querySelectorAll('.tabpanel')];
function pick(i){tabs.forEach((t,j)=>{t.setAttribute('aria-selected',i===j);t.tabIndex=i===j?0:-1});panels.forEach((p,j)=>p.hidden=i!==j)}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>pick(i));t.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const n=(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length;pick(n);tabs[n].focus()}})});
// dossier vivant: the step in view sets the stage on the section (CSS does the rest)
const dv=document.getElementById('dossier-vivant');
if(dv&&'IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)dv.dataset.stage=e.target.dataset.stage})},{rootMargin:'-45% 0px -45% 0px'});document.querySelectorAll('.dv-step').forEach(s=>io.observe(s));dv.dataset.stage='1'}else if(dv){dv.dataset.stage='3'}
`
