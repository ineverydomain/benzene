# Benzene Electricals — Website Design Specification

> Reference brand: Acrasia Private Limited / **Benzene Electricals** (Testing Equipments)
> Reference catalogue: KRYKARD "One Stop Shop for Portable Test & Measurement Instruments" (Atandra Energy)
> Reference UX model: [Triplett Test Equipment & Tools — All Products](https://www.triplett.com/en-in/collections/all) (Shopify-style catalog site)

---

## 1. Brand Foundation

**Tagline:** Precision • Reliability • Performance

Benzene Electricals is the testing-equipment arm of the Acrasia group ("Innovating • Testing • Powering Trust"). The site should read as a serious, technical, B2B/industrial catalog — closer to Triplett's dense product-grid catalog than a marketing microsite — while carrying the navy/gold "circuit + lightning bolt" identity of the logo.

**Logo motifs to echo in UI:**
- Hexagon badge containing a bold "B" with a lightning-bolt notch
- Fine gold circuit-trace lines with node dots (good for section dividers, loaders, background textures)
- Two-tone metallic gradient lettering (navy → gold) for hero headlines only, used sparingly
- Heart-rate/pulse-line motif (seen in the "TESTING EQUIPMENTS" pill) — usable as an icon/divider

---

## 2. Color Palette

Extracted from the logo (navy/gold, precision-instrument feel) and biased toward accessible contrast for a data-dense catalog UI.

| Token | Hex | Usage |
|---|---|---|
| `--color-navy-900` | `#0B1B3A` | Primary brand color — header bg, footer bg, headings |
| `--color-navy-800` | `#122A55` | Secondary navy — hero gradient, card headers, nav hover |
| `--color-navy-700` | `#1B3A73` | Links, active states on dark bg |
| `--color-gold-500` | `#D4A62A` | Primary accent — CTAs, active tab underline, price highlights |
| `--color-gold-400` | `#E8C158` | Hover state on gold elements, badges |
| `--color-gold-100` | `#FBF1D8` | Soft gold tint backgrounds (banners, highlighted rows) |
| `--color-ink-900` | `#141821` | Body text |
| `--color-ink-600` | `#4C5566` | Secondary text, captions, meta |
| `--color-ink-300` | `#98A2B3` | Placeholder text, disabled state |
| `--color-surface-0` | `#FFFFFF` | Page background, cards |
| `--color-surface-1` | `#F5F7FA` | Alternating section background |
| `--color-surface-2` | `#EDEFF3` | Filter sidebar, table stripes |
| `--color-border` | `#DFE3EA` | Card borders, dividers |
| `--color-success` | `#1E8E5A` | "In stock" badge |
| `--color-warning` | `#C77B15` | "Low stock" badge |
| `--color-danger` | `#C0362C` | "Out of stock" badge, error states |

**Gradients**
- `--gradient-hero`: `linear-gradient(135deg, #0B1B3A 0%, #122A55 55%, #1B3A73 100%)` with a subtle gold circuit-line SVG overlay at 8–12% opacity.
- `--gradient-gold-metallic`: `linear-gradient(180deg, #F3D374 0%, #D4A62A 45%, #9C7714 100%)` — headline text/logo only, not for large fills.

**Contrast rule:** Gold (`#D4A62A`) on navy passes AA for large text/icons only; for body-size text on navy, use white (`#FFFFFF`) or `--color-gold-100`. Never set gold text on white below 18px bold / 24px regular.

---

## 3. Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero headlines | **Poppins** or **Sora** | 700 | Matches the geometric, slightly industrial feel of the logo wordmark |
| Section headings (H2–H3) | Poppins | 600 | Uppercase with `letter-spacing: 0.04em` for category titles ("POWER QUALITY ANALYZERS" style, echoing the catalogue) |
| Body / UI text | **Inter** | 400 / 500 | High legibility for dense spec tables |
| Monospace (spec values, model codes) | **IBM Plex Mono** | 400 | For part numbers like `CA 8345`, `TC 4460H`, `DiGi 730D` |

**Scale (desktop / mobile):**
- H1: 44px / 32px, line-height 1.15
- H2: 32px / 26px
- H3: 22px / 20px
- Body: 16px / 15px
- Small/meta: 13px
- Spec-table text: 14px, mono for numeric values

---

## 4. Site Structure (informed by Triplett's catalog UX)

Triplett's site is a dense, filterable, mega-menu-driven Shopify catalog. Benzene Electricals should adopt the same *information architecture* pattern, remapped to its own product families from the KRYKARD catalogue.

### 4.1 Global Header
- Slim **top utility bar** (navy): contact phone, email, "Request a Quote" link, optional country/currency selector removed (single-market site) → replace with "100+ Service Centers | 39 Years Experience" trust strip in gold-on-navy, rotating with 2–3 messages (mirrors Triplett's promo strip).
- **Main nav bar** (white bg, navy text, gold underline on hover/active):
  - Logo (hexagon B mark + "BENZENE ELECTRICALS" wordmark) — left
  - Mega-menu **Products**, grouped exactly like the catalogue's Table of Contents:
    - **Power Quality**: Power Quality Analyzers, CT Accessories
    - **Thermal Imaging**: Thermal Imagers, Thermal Camcorders
    - **Insulation & Earthing**: Insulation Testers, Earth Testers, Earth Loop Testers, Micro-Ohmmeters, Installation Testers
    - **Meters & Multimeters**: Digital Multimeters, Clamp Meters, Multi-Functional Meters
    - **Oscilloscopes**
    - **Energy Meters**: DiGi series, PLM series, EON 4.0, Multy4
  - **Solutions** (Measure / Protect / Conserve, Alensoft software)
  - **Industries** (Utilities, Industrial, Defense, Renewable, Commercial — derived from client logos page)
  - **Support**: Downloads/Datasheets, KRYKARD-style Care/Service program, Warranty
  - **About Us**
  - **Contact / Get a Quote** (styled as a solid gold button, top-right, matching Triplett's persistent cart/login pattern but repurposed as a lead-gen CTA since this is not e-commerce)
  - Search icon (search by model number, e.g. "CA 6528")
- Mobile: hamburger → accordion mega-menu identical in hierarchy.

### 4.2 Homepage
1. **Hero banner** — navy gradient with gold circuit overlay, rotating slides per product family (Power Quality Analyzer, Thermal Imager, Clamp Meter), headline in metallic-gold display type, subhead tagline "Precision • Reliability • Performance", CTA buttons: "Browse Catalog" (gold solid) + "Download Full Catalogue PDF" (outline white).
2. **Trust strip** (icons row, echoing the catalogue's About Us badges): "39 Years Experience", "100+ Service Centers", "CE Certified Products", "India's No.1 Power Conditioning Brand" style badges — reuse iconography style (rounded badge + label) from the "ABOUT US" page.
3. **Solution pillars** — three cards: **MEASURE / PROTECT / CONSERVE** (directly from catalogue page 4), each with icon row and bullet list, on tinted backgrounds (yellow-tint / lavender-tint / green-tint as in source) reinterpreted in brand palette (gold-tint / navy-tint / soft-teal-tint) to keep the tri-pillar structure recognizable but on-brand.
4. **Category grid** — Triplett-style grid of category tiles (image + label) linking to each collection: Power Quality Analyzers, Thermal Imagers, Insulation Testers, Oscilloscopes, Earth Testers, Clamp Meters, Digital Multimeters, Micro-Ohmmeters, Installation Testers, Multi Functional Meters.
5. **Featured/Best-seller products** — horizontal product-card carousel (see §5 card spec), badge "Best Seller" top-left in gold ribbon, matching Triplett's badge convention.
6. **Why Benzene Electricals** — 4-column icon+text block (Extensive spares network, Factory-trained engineers, e-Service reports, 4.7★ rated support) reusing "KRYKARD Care" page content.
7. **Clients / trusted by** — logo wall marquee (grayscale logos, color on hover), sourced from the catalogue's client page.
8. **Newsletter / Enquiry strip** — navy band, email capture + "Request Product Catalogue" CTA (Triplett footer pattern).
9. **Footer** (see §4.4).

### 4.3 Category / Listing Page (core page type — modeled directly on Triplett's `/collections/all`)
- **Breadcrumb**: Home / Products / [Category]
- **Category banner**: thin navy strip with category title + 1-line description (e.g. "POWER QUALITY ANALYZERS — 3/4-channel network analyzers for load monitoring, harmonics and compliance testing").
- **Layout**: left filter sidebar (≈260px) + right product grid (3–4 columns desktop, 2 columns tablet, 1 column mobile), exactly like Triplett.
  - **Filters sidebar**:
    - Sub-category checklist (e.g. within "Insulation Testers": 1kV / 5kV / 10–15kV models)
    - Voltage range slider
    - Communication (Bluetooth / USB / PC interface) checkboxes
    - "In Stock / Available on Request" (since this may not be transactional e-commerce, relabel Triplett's Availability filter as **Availability for Quote**)
  - **Toolbar above grid**: result count, Sort by (Featured / Name A–Z / Newest), grid/list view toggle.
  - **Product card** (see §5).
  - **Pagination** at bottom, numbered like Triplett's (1 2 3 … N, Next).
- **Comparison spec table** (differentiator from Triplett — build this in, since the catalogue itself is spec-table-heavy): a "Compare Models" toggle that lets users select 2–4 cards and view the catalogue-style spec table (Thermal Resolution, NETD, FOV, Battery Life, etc.) side by side.

### 4.4 Product Detail Page
- Left: image gallery (product photo on white, plus lifestyle/in-use shot if available), zoom on hover.
- Right: Model name + code (mono font), short description, key spec bullets (from "Salient Features" column of catalogue), CTA row: "Request Quote", "Download Datasheet (PDF)", "Add to Compare".
- Tabs below: **Overview** | **Full Specifications** (renders the catalogue's two-column Salient Features / Measurements layout as styled tables) | **Downloads** | **Related Accessories** (e.g. CT specifications table for ALM-series).
- "You may also need" cross-sell row (e.g. viewing a Power Quality Analyzer surfaces the CT Specifications accessories table).

### 4.5 Footer (adapted from Triplett's structure)
Four-to-five column layout on navy background, gold link-hover:
- **Company**: About Us, Our Journey, Certifications (ISO 9001/14001/45001/50001), Blog/News, Careers
- **Products**: mirrors mega-menu top-level categories
- **Support**: Product Manuals/Datasheets, Software/DataView Downloads, KRYKARD Care / Service Request, Warranty, Contact Support
- **Industries**: Utilities, Industrial & OEM, Renewable Energy, Government & Defense, Commercial
- Bottom bar: address (No. 5, Kumaran St., Pazhavanthangal, Chennai-600114 — reused/adapted), phone, email, social icons, copyright, "Benzene Electricals is part of the Acrasia Private Limited group" legal line, QR codes for Sales/Service/Chat support (reuse catalogue's QR block concept).
- Newsletter signup bar directly above footer bottom, matching Triplett's "Subscribe to our email list" pattern.

---

## 5. Component Library

### 5.1 Product Card
```
┌─────────────────────────────┐
│  [badge: Best Seller/New]    │  gold ribbon, top-left
│                               │
│      [product image]         │  white bg, padding 24px
│                               │
├─────────────────────────────┤
│ MODEL CODE (mono, gold)      │  e.g. CA 6528
│ Product Name (Inter 600)     │  e.g. 1kV Insulation Tester
│ ● Available for Quote        │  status dot: green/amber/gray
│ [Request Quote] [Compare +]  │  gold outline btn + icon btn
└─────────────────────────────┘
```
- Border: `1px solid var(--color-border)`, radius `10px`, hover: `box-shadow: 0 8px 24px rgba(11,27,58,0.12)` + slight lift (`translateY(-2px)`), border becomes `var(--color-gold-500)`.
- Card padding: 16px; image area fixed aspect ratio 4:3.

### 5.2 Buttons
- **Primary (Gold solid)**: bg `--color-gold-500`, text `--color-navy-900`, hover bg `--color-gold-400`, radius 8px, weight 600.
- **Secondary (Navy outline)**: 1.5px border `--color-navy-800`, text navy, hover fills navy bg / white text.
- **Ghost (on dark bg)**: white text, gold underline on hover.
- **Icon button**: circular, 40px, navy-5% bg, gold on hover.

### 5.3 Badges / Status Pills
- Best Seller: gold fill, navy text, small ribbon top-left of card.
- New: navy fill, gold text.
- In Stock / Available: `--color-success` dot + label.
- Low Stock / Made to Order: `--color-warning`.
- Discontinued/On Request: `--color-ink-300`.

### 5.4 Spec Table (catalogue-derived — signature component)
Reproduce the PDF's "SPECIFICATIONS" grid faithfully:
- Header row: navy bg, white uppercase text, sticky on scroll.
- First column (attribute names, e.g. "Thermal Resolution", "NETD", "Field of View"): bold, `--color-surface-1` bg.
- Model columns: mono font for values, alternating row stripe `--color-surface-1`/white.
- Highlight the recommended/compared model's column with a `2px solid gold` top border.

### 5.5 Section Divider (brand motif)
Thin horizontal rule with a small gold circuit-node dot pattern (SVG, reused from logo's circuit trace), used between major homepage sections instead of a plain `<hr>`.

### 5.6 Icon Set
Use a technical/outline icon style (Phosphor Icons or Lucide, weight "regular/bold") in navy or gold for: voltage, current, thermal/temperature, Bluetooth, USB, Wi-Fi, battery, memory/storage, IP rating shield, PC interface, GPS — matching the small feature-icon badges seen throughout the catalogue's spec tables (e.g. Bluetooth, WiFi, IP54 icons on product images).

---

## 6. Layout & Grid

- Max content width: 1280px, gutter 24px, 12-column grid.
- Section vertical rhythm: 96px desktop / 56px mobile between major sections.
- Breakpoints: `480 / 768 / 1024 / 1280 / 1440`.
- Category grid: 4 cols (≥1024px) → 3 cols (≥768px) → 2 cols (≥480px) → 1 col.
- Sidebar filters collapse into a "Filters" drawer/modal below 1024px (as Triplett does on mobile).

---

## 7. Imagery Guidelines

- Product photography: clean white/light-gray backdrop, consistent studio lighting, matches the catalogue's existing cutout-style product shots — reuse those PNGs directly where possible.
- Hero/section imagery: industrial contexts (transmission towers, control rooms, solar farms, factories) with a navy duotone/gradient overlay so gold and white UI elements stay legible on top, echoing the catalogue cover's tower + gradient-wash treatment.
- Avoid stock-photo clichés (generic handshake, laptop-on-desk); prefer real equipment-in-use or grid/infrastructure imagery.

---

## 8. Motion & Interaction

- Card hover: 150ms ease-out lift + shadow.
- Mega-menu: fade+slide-down 180ms.
- Sticky header on scroll (compresses top utility bar, keeps main nav).
- Skeleton loaders (navy-5% shimmer) for product grid while filtering — mirrors Triplett's dynamic re-filtering without full page reload.
- Compare tray: slides up from bottom when 2+ items selected, sticky until cleared.

---

## 9. Accessibility & Content Notes

- Maintain WCAG AA contrast for all text; verify gold-on-white and gold-on-navy combinations per §2.
- All product images require descriptive `alt` text with model code + category (e.g. "CA 6528 — 1kV Digital Insulation Tester").
- Spec tables must use proper `<table>` markup with `<th scope="col">`/`<th scope="row">` for screen-reader compatibility.
- Since this is a lead-generation industrial catalog (not e-commerce checkout like Triplett), replace "Add to Cart" patterns with **"Request Quote"** / **"Enquire Now"**, and replace "Cart" in the header with a **"Enquiry List"** (same UX shape as a cart — persistent count badge, slide-out tray, but submits an RFQ form instead of checkout).

---

## 10. Open Items / To Confirm

- [ ] Confirm whether the site should be lead-gen only (RFQ/Enquiry model, recommended above) or include e-commerce checkout like Triplett.
- [ ] Confirm final logo file (vector/SVG) for exact navy/gold hex extraction — current values are estimated from the supplied PNG.
- [ ] Confirm which of the 10 KRYKARD-style product families are actually sold under the Benzene Electricals brand vs. Acrasia parent brand (site may need a brand-switcher or unified catalog).
- [ ] Source high-res product cutout images per SKU for card/detail pages (catalogue PDF images are print-resolution).
