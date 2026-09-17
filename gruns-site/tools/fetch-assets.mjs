/**
 * Downloads the brand fonts and product/lifestyle photography this replica
 * renders from gruns.co's Shopify CDN into `public/`, so the deployed site
 * serves them from its own origin instead of hotlinking.
 *
 *   node tools/fetch-assets.mjs [--force]
 *
 * Shopify's `width=` query param does the resizing, so the checked-in copies
 * stay small. Re-running skips files that already exist unless --force.
 */
import { mkdir, writeFile, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const CDN = "https://gruns.co/cdn/shop/files";
const ROOT = resolve(import.meta.dirname, "..");
const FORCE = process.argv.includes("--force");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36";

/** [destination under public/, CDN filename, resize width or null] */
const ASSETS = [
  // Brand typography (theme aliases: Retail Display / Work Sans / DM Mono)
  ["fonts/retail-display.woff", "mango-display.woff", null],
  ["fonts/work-sans.woff2", "WorkSans-VariableFont_wght.woff2", null],
  ["fonts/work-sans-italic.woff2", "WorkSans-Italic-VariableFont_wght.woff2", null],
  ["fonts/dm-mono.woff2", "DMMono-Regular.woff2", null],

  // Hero band
  ["images/hero-lifestyle.webp", "lifestyle-focused-hmpg-hero.webp", 900],
  ["images/gummy-bear.webp", "gummy_49ae5bc4-1a92-4aaf-8f02-bd9fd6f13100.webp", 320],

  // Pack renders — carousel + collection grids
  ["images/pack-og-adults.webp", "og_adults_ls_28.webp", 700],
  ["images/pack-og-kids.webp", "og_kids_ls_28.webp", 700],
  ["images/pack-shrek-adults.webp", "LTO-Shrek-Adults-LS-1Prod.webp", 700],
  ["images/pack-shrek-kids.webp", "LTO-Shrek-Kids-LS-1Prod.webp", 700],
  ["images/pack-minions-adults.webp", "LTO-Minions-Adults-LS-1Prod.webp", 700],
  ["images/pack-minions-kids.webp", "LTO-Minions-Kids-LS-1Prod.webp", 700],
  ["images/pack-rl-adults.webp", "LTO-RL-Adults-LS-1Prod.webp", 700],
  ["images/pack-rl-kids.webp", "LTO-RL-Kids-LS-1Prod.webp", 700],
  ["images/pack-firecracker-adults.webp", "firecracker_adults_ls_28_0ce4ee37-41fe-4fe0-9491-b5d8159766c4.webp", 700],
  ["images/pack-firecracker-kids.webp", "firecracker_kids_ls_28.webp", 700],

  // Cut-out pouches — flavour swatches
  ["images/pouch-og-adults.webp", "OG-Adults-LS-1Prod-NoBG.webp", 320],
  ["images/pouch-shrek-adults.webp", "LTO-Shrek-Adults-LS-1Prod-NoBG.webp", 320],

  // "Ridiculously easy" value-prop cards
  ["images/easy-flavor.webp", "valueprop-image1.webp", 800],
  ["images/easy-rip.webp", "valueprop-cardimg1.webp", 800],
  ["images/easy-daily.webp", "valueprop-cardimg3.webp", 800],

  // Buy-box gallery
  ["images/gal-bday-adults.webp", "bday-gal-image-adults-LS.webp", 1000],
  ["images/gal-reviews.webp", "gal-ugc-reviews.webp", 1000],
  ["images/gal-expect.webp", "gal-what-to-expect.webp", 1000],
  ["images/gal-clinical.webp", "gal-clinical.webp", 1000],
  ["images/gal-benefits.webp", "gal-benefits-lifestyle.webp", 1000],
  ["images/nutrition-label-adults.jpg", "Nutrition_Label_LS_-_Adults_B_-_Desktop.jpg", 1000],

  // Birthday promo art
  ["images/pouch-birthday-badge.webp", "Group_1984079021.webp", 800],
  ["images/promo-confetti.webp", "LTO-Banner-BDAYPromo-Gruns-Desktop.webp", 1200],

  // Ü Snacks Shack merch
  ["images/merch-call-me-tee.webp", "shirt-adult2-back.webp", 700],
  ["images/merch-midweight-tee.webp", "shirt-adult2-front.webp", 700],
  ["images/merch-hoodie-adults.webp", "hoodie-adults1-front.webp", 700],
  ["images/merch-hoodie-kids.webp", "hoodie-kids1-front.webp", 700],
  ["images/merch-tote.png", "726abf5749adec613841bf198c653e4d.png", 700],
  ["images/merch-trucker-hat.png", "445a1092246d940eb1118e5d950e0674.png", 700],
  ["images/merch-logo-hat.png", "530934d9f8db9fde8698888b3f2175d9.png", 700],
  ["images/merch-club-hat.png", "59ce189133e36b74229c74fc8a0bbba5.png", 700],
];

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

let fetched = 0;
let skipped = 0;
const failures = [];

for (const [dest, file, width] of ASSETS) {
  const out = resolve(ROOT, "public", dest);
  if (!FORCE && (await exists(out))) {
    skipped += 1;
    continue;
  }
  const url = `${CDN}/${file}${width ? `?width=${width}` : ""}`;
  try {
    const res = await fetch(url, { headers: { "user-agent": UA, accept: "*/*" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 512) throw new Error(`suspiciously small (${buf.length}B)`);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    fetched += 1;
    console.log(`ok   ${dest} (${(buf.length / 1024).toFixed(0)}KB)`);
  } catch (err) {
    failures.push(`${dest} <- ${url}: ${err.message}`);
    console.error(`FAIL ${dest}: ${err.message}`);
  }
}

console.log(`\n${fetched} fetched, ${skipped} skipped, ${failures.length} failed`);
if (failures.length) {
  failures.forEach((f) => console.error(f));
  process.exit(1);
}
