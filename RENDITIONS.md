# Visual QA Renditions — Grüns homepage replica

Target: `gruns.co` homepage (`gruns-screenshots/out/00_home/174__home.jpg`,
viewport refs `gruns-screenshots/refs/home_band_0..6.jpg`,
PDP refs `pdp_gruns_top.jpg`, `pdp_kids_top.jpg`, `shop_top.jpg`).
Harness: `gruns-site/qa/shot.mjs` (1440×900 bands + full page, Chrome headless)
and `gruns-site/qa/probe.mjs` / `interact.mjs`. Shots: `/opt/cursor/artifacts/r{1,2,3}_*`.
Serve: `vite --port 5174` (dev, HMR). `vite build` + `oxlint` green every round.

Note: a builder agent works the same tree concurrently. R1's first capture caught a
mid-edit unstyled state; re-capture after their `home.css` import landed is the true R1.

## R1 — baseline (artifacts `r1_*`, page height 6021px)

Harsh findings vs refs:
1. P0 (already fixed by builder mid-round): `HeroGame` referenced `won`/`setWon`
   without declaration — any card click would throw. Now derived via `useMemo`.
2. PDP gallery thumbs sit in a horizontal row above the main shot; refs
   (`pdp_gruns_top`, `home_band_4`) show a vertical thumbnail rail left of the image.
3. Gradient transition band only 300px tall; `home_band_3` is ~a full viewport of
   green→yellow gradient.
4. Hero figure unreadable: `.hero-hair` paints after/over `.hero-face`, no torso —
   brown capsule, no visible face. Ref has photography; CSS must at least read as a person.
5. Announcement bar is one line; refs show two stacked lines.
6. Flavor buttons are text-only; refs show pack thumbnails. Main shot lacks the
   "Save up to 55% Off Your First Order" badge from the PDP ref.
7. Cards lack shadow depth vs ref.

## R2 — fixes (artifacts `r2_*`, height 6451px)

- `Nav.jsx`: two-line announcement (`<br/>`).
- `home.css`: face/hair `z-index` fix, new `.hero-torso`, pack `z-index`, bigger spark,
  card-face shadow, `.gradient-band` 300→640px, gallery `.gallery-row` with vertical
  `.thumbs` rail, `.shot-badge`, `.flavor-swatch` chips.
- `HeroGame.jsx`: torso element. `BirthdayBuyBox.jsx`: gallery-row wrapper, 55% badge,
  flavor swatches.
- Deleted orphan `src/styles.css` (unreferenced static-prototype leftover).
- Verified: vertical rail ✓, badge ✓, swatches ✓, two-line announcement ✓,
  face + torso read as a person holding the pack ✓, taller gradient ✓.

## R3 — polish + interaction proof (artifacts `r3_*`, height 6451px, stable)

- Gummy gloss highlight (`.gummy::after`) — flat blobs now have a light catch.
- `qa/interact.mjs`: reads prizes from DOM, clicks a guaranteed match-3 set:
  `You won 10% OFF!`, 3 `.is-win` cards, zero page errors → INTERACTION PASS.
- R3 bands confirm no regressions: hero, 4-up product row (incl. `shrekkids` pack),
  easy band, stats, gradient, trust, buy box, promos, members marquee, footer.

## R4 — re-application on team tip (artifacts `r4_*`, height 6453px, stable)

Shared-workspace churn (concurrent agents switching the checkout, a merged
commit landing on the wrong branch, `node_modules` cleanups) destroyed the
uncommitted R2/R3 code edits; only docs + screenshots survived. Recovery, all
inside an isolated worktree (`/tmp/gruns-qa-wt`, branch
`cursor/gruns-visual-qa-fixes-0b2e`, zero disturbance to the live tree):
- Re-applied every R2/R3 fix onto current builder sources (builder had meanwhile
  absorbed the hero stacking/torso fixes — verified, not duplicated).
- Re-verified: `vite build` + `oxlint` green, r4 bands match R2/R3, match-3
  interaction PASS again on the rebuilt tree, no page errors.
- This commit holds the re-applied code fixes; harness + this log rode the merges.

## Known gaps (accepted, need licensed photography / brand font)

- Hero + easy cards use CSS/emoji illustration, not the photo art in refs.
- Headline/stats type is a rounded sans; ref uses a heavier condensed grotesk.
- Sticky PDP "Save 55% + Free Shipping" blur bar not replicated (PDP chrome, out of homepage scope).
- Reviews depth shorter than the 10743px reference full page (ours ~6450px).
