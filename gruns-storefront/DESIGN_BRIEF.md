# Grüns Storefront — Design System & Homepage IA

Source: captured `homepage.html` + `gruns-main.css` (Shopify theme t/165, Tailwind v4.2). Snapshot reflects birthday pricing promo (2026).

---

## 1. Brand colors (hex)

### Grüns semantic tokens (used on homepage UI)

These override the raw `:root` “firecracker” reds/navy in most sections. Mapped in `gruns-main.css`:

| Token | Resolved hex | Usage on homepage |
|-------|----------------|-------------------|
| `--color-green` / `--color-primary-base` | `#007e40` | Primary buttons, green sections, stars accent |
| `--color-green-strong` / `--color-primary-strong` | `#00572c` | Announcement bar, deep green footer (`bg-primary-strongest`), CTA headings |
| `--color-green-strongest` | `#002c17` | Darkest green |
| `--color-green-weakest` | `#daece3` | Selected buybox chips, hover states |
| `--color-yellow` / `--color-secondary-base` | `#ffcc2f` | Secondary buttons, bold accents in headings |
| `--color-yellow-weakest` | `#fff2cb` | Buybox badges |
| `--color-neutral-off-white` | `#fff7df` | Page/section backgrounds (`bg-neutral-off-white`) |
| `--color-off-white` | `#fffcf6` | Card image wells |
| `--color-off-black` | `#0a1912` | Social fan heading ink |
| `--color-fg-primary` | `rgba(0, 8, 46, 0.95)` | Body text on light |
| `--color-fg-secondary` | `rgba(0, 8, 46, 0.7)` | Subcopy |
| `--color-fg-tertiary` | `rgba(0, 8, 46, 0.5)` | Strikethrough compare prices |
| `--color-fg-primary-inverse` | `rgba(255, 255, 255, 0.95)` | Text on green/dark |
| `--black` / `--color-border` | `#000` | Borders, shadows |
| `--white` | `#fff` | Cards, buybox panel |

### Inline / section-specific (from HTML)

| Hex | Where |
|-----|--------|
| `#00572c` | Announcement slide bg, hero badge context, CTA `--heading-color` |
| `#581e5a` | Shrek announcement slide, Shrek brand `--brand-strongest` |
| `#981863` | Shrek “BRAND NEW!” badge, Shrek product accent |
| `#dce260` | Shrek Kids badge background |
| `#ffcc2f` | Announcement bold text, value-props `--bold-color` |
| `#001f10` | Buybox quantity discount tag text |
| `#E6F3EF` | SMS signup success background |

### Benefits scroll gradient (CSS)

`#007e40` (50.48%) → `#ffcc2f` (87.02%).

### Legacy / alternate palettes in CSS (not primary on this page)

Firecracker (`--color-primary: #ed1c24`, `--color-secondary: #00188a`), Shrek (`--shrek-cream: #fff9e9`, `--shrek-lime-200: #eaeea0`), Rasp Lemon, Minions, Grüns Gold — present for other product lines; homepage buybox toggles Original vs Shrek brand vars.

---

## 2. Typography

### Font stacks (`--font-*`)

| Role | CSS variable | Family |
|------|----------------|--------|
| Primary UI | `--font-primary` → `--font-worksans` | **Work Sans**, Helvetica Neue, Arial, sans-serif |
| Display / marketing | `--font-secondary` → `--font-display` / `--font-retail` | **Retail Display**, Helvetica Neue, Arial, sans-serif |
| Mono | `--font-tertiary` → `--font-mono` | **DM Mono**, Helvetica Neue, Arial, sans-serif |

Product-line display fonts also defined: Olipop Display, Rasp Lemon Display, Shrek Display (Shrek uses same woff2 as Rasp Lemon).

### `@font-face` (from `gruns-main.css`)

| Family | File (on gruns.co CDN) |
|--------|-------------------------|
| Work Sans | `/cdn/shop/files/WorkSans-VariableFont_wght.woff2`, `WorkSans-Italic-VariableFont_wght.woff2` |
| Retail Display | `/cdn/shop/files/mango-display.woff` |
| DM Mono | `/cdn/shop/files/DMMono-Regular.woff2` |
| Olipop Display | `/cdn/shop/files/breaking_march-webfont.woff2` |
| Rasp Lemon Display / Shrek Display | `/cdn/shop/files/TAYCrumbRegular.woff2` |

### Type scale (utility classes seen on homepage)

- **Hero:** `h1` + `richtext-accent` (display accent on bold spans)
- **Section titles:** `d5` / `d4` / `d3` (display), `h2`–`h6`, `body-1`–`body-5`, `label-1`–`label-3`, `eyebrow-4`
- **Max content width:** `--spacing-page: 1440px` (`max-w-page`)
- **Breakpoint:** `tb:` ≈ `min-width: 992px`; some images use `993px`

### Logo

Header: inline SVG wordmark (white on glass pill). Footer: `gruns_logo_yellow.svg`.

---

## 3. Homepage section order (exact headlines)

| # | Section ID / class | Headline(s) (exact copy) |
|---|---------------------|---------------------------|
| 0 | `announcement-bar-section` | Rotating: **“IT’S GRÜNS’ BIRTHDAY! … WE LOWERED OUR PRICE TO CELEBRATE”**; **“NEW! Shrek Berry Far Far Away…”**; **“FREE SHIPPING + 30-DAY GUARANTEE”** (no H tag) |
| 1 | `header-v2-section` | Nav only (no page H1) |
| 2 | `three-prop-hero-section` | **“60+ Ingredients in One Pack You'll Actually Crave”** (`h1` styling); sub: 4.8 stars / 100K+ reviews / 1M+ members; CTA **“Save 55% + Free Shipping”** |
| 3 | `section-press-marquee` | No headline (`aria-label="Press"`) — Forbes, Men’s Journal, Today, People, Women’s Health, Good Housekeeping, … |
| 4 | `home-fave-section` | **“Find Your Flavor”** (`h2`) |
| 5 | `home-value-props` | **“We made daily nutrition, like, ridiculously easy.”** (`h2`; bold: **“ridiculously easy.”**); cards: **“Delicious Flavor”**, **“Rip. Tip. Enjoy.”**, **“Daily Nutrition”** (`h3`) |
| 6 | `benefits-scroll` | Animated lines (not `h2`): **“60+ INGREDIENTS”**, **“21 Vitamins & Minerals”**, **“6g of Fiber”**, **“1 convenient pack”** |
| 7 | `third-party-science` | **“3rd party-tested for potency, purity, & safety.”** (`h2`) |
| 8 | `section--anchor-target` | Anchor `id="offers"` (no headline) |
| 9 | `usnacks-bb-section` | Promo `h2`: **“It’s Our Birthday! We Lowered Our Prices to Celebrate.”**; product `h1`: **“Grüns Superfood Gummies”**; eyebrow **“4.8/5.0 (100,000), 1M+ Customers”**; subheads **“Select Flavor:”**, **“Original”** / **“Berry Far Far Away”**, sugar **“Low Sugar”** / **“Sugar-Free”**; accordions **“Why Grüns?”**, **“Ingredients & Allergies”**, **“Low Sugar vs. Sugar-Free”**, **“Science & Certifications”**, **“Directions”**, **“Benefits”** |
| 10 | `brry-cta-banner-editable` | **“Same Grüns. New Lower Price. Subs Now Start at $29.99.”** (`h2`) |
| 11 | `social-fan` | **“1 million members. we've been getting around”** (display; bold on first phrase) |
| 12 | `final-cta-section` | **“It's Our Birthday. We Lowered Our Price.”** (`h2`); CTAs **“Shop Adults”** / **“Shop Kids”** |
| 13 | Footer | **“Sign Up for 55% Off”** (newsletter, not `h2`) |

---

## 4. Navigation & footer sitemap (internal routes only)

Paths as linked in capture (`gruns.co` host omitted). External URLs (social, nutrops.co, etc.) excluded per brief.

### Global header (visible)

| Label | Path |
|-------|------|
| Home (logo) | `/` |
| Shop Now | `/products/gruns` |
| Cart | `/cart` |

### Mobile drawer — Shop All

| Label | Path |
|-------|------|
| Grüns Adults | `/products/gruns` |
| Berry Far Far Away Adults | `/products/shrek-gruns` |
| Grüns Kids | `/products/gruns-kids` |
| Berry Far Far Away Kids | `/products/shrek-gruns-kids` |
| Shrek promo image | `/pages/first-order-shrek` |

### Drawer — Rewards

| Label | Path |
|-------|------|
| VIP Access | `/pages/the-vip-pass` |
| Merch Store | `/collections/merch` |
| Refer a Friend | `/pages/referrals` |
| Exclüsives 101 | `/pages/exclusives` |

### Drawer — Learn

| Label | Path |
|-------|------|
| Reviews | `/pages/reviews` |
| Our Science | `/pages/science` |
| How Grüns Works | `/pages/how-gruns-works` |
| Our Story | `/pages/our-story` |
| Find in Store | `/pages/store-locator` |
| FAQs | `/pages/help-center` |

### Drawer — other

| Label | Path |
|-------|------|
| Manage Your Account | `/a/account/login` |
| Our Science (secondary nav) | `/pages/science` |
| Find In Store | `/pages/store-locator` |
| Ü Snacks | `/pages/usnacks` |

### Footer columns

**Learn:** `/pages/reviews`, `/pages/science`, `/pages/how-gruns-works`, `/pages/our-story`, `/pages/store-locator`, `/pages/help-center`

**Connect:** `/pages/monthly-apple-watch-giveaway-official-rules`, `/pages/contact`, `/a/account/login`

**Rewards:** `/pages/the-vip-pass`, `/collections/merch`, `/pages/referrals`, `/pages/exclusives`

**Ü Snacks:** `/pages/usnacks`, `/products/gruns`, `/products/gruns-kids`

**Legal / utilities:** `/policies/refund-policy`, `/policies/privacy-policy`, `/policies/terms-of-service`, `/policies/shipping-policy`, `/pages/authorized-resale-policy`

---

## 5. Products, SKUs & price patterns

### Catalog routes (homepage)

| Display name | Path | Shopify product ID (buybox) | Default cart variant (home tiles, sub) |
|--------------|------|-----------------------------|----------------------------------------|
| Original Adults | `/products/gruns` | `7362502557762` | `41720671830082` |
| Berry Far Far Away Adults | `/products/shrek-gruns` | `8347032354882` | `44724892270658` |
| Original Kids | `/products/gruns-kids` | — | `41720675074114` |
| Berry Far Far Away Kids | `/products/shrek-gruns-kids` | — | `44724892467266` |

Selling plan on home “Add to Cart”: `8930721858`; discount code attribute `SURPRISE`.

### SKUs (JSON-LD in capture — Adults + Shrek only)

**Grüns (`/products/gruns`)**

| SKU | Variant ID | List price (schema) |
|-----|------------|---------------------|
| 333001 | 41720671830082 | $66.65 |
| 333002 | 41720671862850 | $199.95 |
| 333003 | 41720671895618 | $73.32 |
| 333004 | 41720671928386 | $219.96 |

**Grüns Shrek (`/products/shrek-gruns`)**

| SKU | Variant ID | List price (schema) |
|-----|------------|---------------------|
| 336001 | 44724892270658 | $70.38 |
| 336002 | 44724892303426 | $211.14 |
| 336003 | 44724892336194 | $77.05 |
| 336004 | 44724892368962 | $231.15 |

Sugar selector maps **Low Sugar** → `41720671830082` / `44724892270658`; **Sugar-Free** → `41720671895618` / `44724892336194`.

Kids SKUs not present in this capture’s structured data.

### Price display patterns

**Home product tiles (`home-fave`)**

```text
Starts at $29.99  $66.65
         ^sale    ^strikethrough (text-fg-tertiary line-through)
```

Tile amounts: Adults OG $29.99 / $66.65; Shrek Adults $32.79 / $70.38; Kids OG $24.99 / $53.32; Shrek Kids $27.79 / $57.05.

**Embedded buybox (`usnacks-buybox`)**

- Reviews line: `4.8/5.0 (100,000), 1M+ Customers`
- Plan cards: title **“Subscribe & Save”** + **“28 packs each 4 weeks”**; price + optional compare + **`$X.XX/day`** (`data-current-per-day`)
- Subscribe example (Original, 4-week): display `$49.99`, compare `$66.65` (often hidden until promo), `data-surprise-price="29.99"` for discounted first month
- One-time purchase shows OTP price + compare + per-day
- Quantity: **“How many Adults?”** / **“How many Kids?”**; tag **“Buy More. Save More.”**
- Sticky/footer CTA pattern: primary green `btn-primary`, secondary yellow `btn-secondary` (black text)

**Promo copy:** “Get Up To 55% Off”, “Subs Now Start at $29.99”, hero “Save 55% + Free Shipping”.

---

## 6. Recommended replica structure (Vite + React)

Mirror Shopify section names for traceability. Use CSS variables from §1 in `src/styles/tokens.css`; load Work Sans + Retail Display via `@font-face` (copy URLs or self-host).

```text
gruns-storefront/
├── index.html
├── vite.config.ts
├── package.json
├── public/
│   └── fonts/                    # optional self-hosted woff2
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/
│   │   ├── tokens.css            # --color-green, --spacing-page, fonts
│   │   ├── typography.css        # .d4–.d6, .body-*, .btn-*
│   │   └── global.css
│   ├── data/
│   │   ├── navigation.ts         # §4 link trees
│   │   ├── products.ts           # paths, variant IDs, tile prices
│   │   └── homepage-sections.ts  # ordered section metadata
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── SiteHeader.tsx    # glass pills, drawer
│   │   │   └── SiteFooter.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx        # btn-primary / btn-secondary
│   │   │   ├── StarRating.tsx
│   │   │   └── Accordion.tsx
│   │   └── sections/
│   │       ├── ThreePropHero.tsx
│   │       ├── PressMarquee.tsx
│   │       ├── HomeFaveGrid.tsx
│   │       ├── HomeValueProps.tsx
│   │       ├── BenefitsScroll.tsx   # static fallback + optional GSAP
│   │       ├── ThirdPartyScience.tsx
│   │       ├── UsnacksBuybox.tsx    # flavor / sugar / qty / plans
│   │       ├── PromoCtaBanner.tsx
│   │       ├── SocialFan.tsx
│   │       └── FinalCtaBanner.tsx
│   └── pages/
│       └── HomePage.tsx            # composes sections in §3 order
└── DESIGN_BRIEF.md
```

**Plain HTML/CSS/JS alternative:** one `index.html` with `<section>` per row in §3, single `css/tokens.css` + `css/sections/*.css`, minimal `js/header-drawer.js` and `js/buybox.js` for flavor/plan toggles (no Shopify cart API in static replica).

**Visual fidelity priorities:** off-white page bg, green/yellow brand pairing, `rounded-full` CTAs, `rounded-2xl` cards, 2px black borders on gallery, `max-w-page` centering, 992px two-column hero and buybox layout.

---

## Layout primitives

| Token / class | Value |
|---------------|--------|
| `--radius-card` | `20px` |
| `--shadow-cta-hover` | `1px 1px 0 #000` |
| `--shadow-img` | `3px 4px 0 #000` |
| Header pills | `bg-[rgba(0,44,23,0.25)]`, `backdrop-blur`, white border |

---

*Generated from local capture; dynamic pricing (Intelligems) may differ on live site.*
