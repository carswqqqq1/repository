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

## R5 — real photography + condensed display type (height 7008px)

Closes the top two "known gaps" below. The reference screenshot archive was
restored, so the photography is now cropped straight out of it rather than
approximated in CSS. `scripts/crop-screenshots.py` documents every crop box in
the coordinate space of the 1440px-wide captures and regenerates
`public/images/` (18 files, ~417 KB total) from
`gruns-screenshots/out/00_home/174__home.jpg` plus the `gruns` and `shrek-gruns`
PDP captures. The archive itself stays out of git.

- **Hero.** `hero-art.webp` is the left 830px of the hero band with an alpha ramp
  over its right 94px, so it dissolves into the section wash instead of showing a
  vertical seam. That wash is no longer guessed: `gradfit` binned the reference
  hero's background pixels by projection angle and took per-bin medians, giving
  `linear-gradient(156deg, …)` with 14 stops. Hero now carries the reference's
  1440:925 aspect, and the bottom 2.7% is the cream strip the yellow blob bar
  overhangs onto. Retired `.hero-blob` / `.hero-person` / `.hero-face` /
  `.gummy` / `.spark` CSS art (~60 lines).
- **Product row.** Four pouch tiles replace the CSS `.pack` mock. The hero blob
  bar covers the top 32px of the first two tiles and every tile is corner
  rounded, so `edge_extend()` crops the clean interior and rebuilds the missing
  border from its own outermost row/column.
- **Easy cards.** The three lifestyle photos replace the 😋 emoji and the two
  CSS pack mocks.
- **Buy box.** Per-flavour PDP pack shot (switches with the flavour radio), the
  six real gallery thumbs in the vertical rail, and real pouch flavour swatches.
  Buy row re-proportioned to the reference's ~737/470 split so the shot lands at
  its native 640px rather than 446px.
- **Type.** Added Anton as `--font-condensed` and applied it to the stats slab,
  the members headline and the marquee — the three all-caps display runs.
- Verified: `vite build` + `oxlint` green, r2 bands match refs at 1440px, and a
  430px pass confirms the hero photo and 1-up product column still read.

## Known gaps (accepted)

- Sticky PDP "Save 55% + Free Shipping" blur bar not replicated (PDP chrome, out of homepage scope).
- Reviews depth shorter than the 10743px reference full page (ours ~7000px).
- Members section's Instagram tile grid is empty in the reference capture
  (lazy-loaded past the screenshotter), so there is no source art to crop.
- Buy-box main shot is the PDP hero slide; the homepage's own main shot was also
  lazy-loaded and blank in the capture.
