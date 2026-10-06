import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT = 'C:/Users/carlo/AppData/Local/Temp/claude/c--Users-carlo-healthgrowth-web/051e3f79-d98b-497c-bf62-fd192d7c0b18/scratchpad/shots';
mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:4321';

async function shot(page, name) {
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
  console.log(`✓ ${name}`);
}

async function scrollTo(page, id) {
  await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ block: 'start' });
  }, id);
  await page.waitForTimeout(600);
}


const browser = await chromium.launch({ headless: true });

// ── MOBILE 390×844 ────────────────────────────────────────────────────────────
console.log('\n── MOBILE 390×844 ──');
const m = await browser.newPage();
await m.setViewportSize({ width: 390, height: 844 });
await m.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 30000 });
await m.waitForTimeout(3000);

await m.screenshot({ path: `${OUT}/mobile_full.png`, fullPage: true });
const mHeight = await m.evaluate(() => document.body.scrollHeight);
console.log(`✓ FULL mobile (height=${mHeight}px)`);

await m.evaluate(() => window.scrollTo(0, 0));
await m.waitForTimeout(400);
await shot(m, 'mobile_hero');

await scrollTo(m, 'transformacion');
await shot(m, 'mobile_transformation');

await scrollTo(m, 'packs');
await shot(m, 'mobile_packs_1');
await m.evaluate(() => window.scrollBy(0, 844));
await m.waitForTimeout(300);
await shot(m, 'mobile_packs_2');

await scrollTo(m, 'rubros');
await shot(m, 'mobile_rubros');

await scrollTo(m, 'automatizacion');
await shot(m, 'mobile_automation');

await scrollTo(m, 'piloto');
await shot(m, 'mobile_patitas');

await scrollTo(m, 'autoridad');
await shot(m, 'mobile_fundador');

await scrollTo(m, 'faq');
await shot(m, 'mobile_faq');

await scrollTo(m, 'diagnostico');
await shot(m, 'mobile_form');

await m.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await m.waitForTimeout(400);
await shot(m, 'mobile_footer');

const mMetrics = await m.evaluate(() => ({
  totalHeight: document.body.scrollHeight,
  screens: Math.ceil(document.body.scrollHeight / window.innerHeight),
}));
console.log(`Altura: ${mMetrics.totalHeight}px · Pantallas: ${mMetrics.screens}x`);

// ── TABLET 768×1024 ───────────────────────────────────────────────────────────
console.log('\n── TABLET 768×1024 ──');
const t = await browser.newPage();
await t.setViewportSize({ width: 768, height: 1024 });
await t.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 30000 });
await t.waitForTimeout(3000);

await t.screenshot({ path: `${OUT}/tablet_full.png`, fullPage: true });
const tHeight = await t.evaluate(() => document.body.scrollHeight);
console.log(`✓ FULL tablet (height=${tHeight}px)`);

await t.evaluate(() => window.scrollTo(0, 0));
await t.waitForTimeout(400);
await shot(t, 'tablet_hero');

await scrollTo(t, 'packs');
await shot(t, 'tablet_packs');

await scrollTo(t, 'automatizacion');
await shot(t, 'tablet_automation');

await scrollTo(t, 'piloto');
await shot(t, 'tablet_patitas');

await scrollTo(t, 'diagnostico');
await shot(t, 'tablet_form');

await t.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await t.waitForTimeout(400);
await shot(t, 'tablet_footer');

// ── DESKTOP 1440×900 ──────────────────────────────────────────────────────────
console.log('\n── DESKTOP 1440×900 ──');
const d = await browser.newPage();
await d.setViewportSize({ width: 1440, height: 900 });
await d.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 30000 });
await d.waitForTimeout(3000);

await d.screenshot({ path: `${OUT}/desktop_full.png`, fullPage: true });
const dHeight = await d.evaluate(() => document.body.scrollHeight);
console.log(`✓ FULL desktop (height=${dHeight}px)`);

await d.evaluate(() => window.scrollTo(0, 0));
await d.waitForTimeout(400);
await shot(d, 'desktop_hero');

await scrollTo(d, 'packs');
await shot(d, 'desktop_packs');

await scrollTo(d, 'rubros');
await shot(d, 'desktop_rubros');

await scrollTo(d, 'automatizacion');
await d.waitForTimeout(2000);
await shot(d, 'desktop_automation');

await scrollTo(d, 'piloto');
await shot(d, 'desktop_patitas');

await scrollTo(d, 'autoridad');
await shot(d, 'desktop_fundador');

await scrollTo(d, 'diagnostico');
await shot(d, 'desktop_form');

await d.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await d.waitForTimeout(400);
await shot(d, 'desktop_footer');

await browser.close();
console.log('\n✅ All done →', OUT);
console.log('MOBILE_HEIGHT:', mMetrics.totalHeight, 'SCREENS:', mMetrics.screens);
