# LocalOptimize — Homepage Design Spec

**Datum:** 2026-04-13  
**Status:** Approved  
**Seite:** `/` (Startseite)

---

## Kontext

Neubau der Website für [localoptimize.de](https://localoptimize.de) — eine deutsche Digital-Marketing-Agentur spezialisiert auf Google-Kanäle (SEO, SEM, Display, Analytics, Social Media, Inbound).

**Tech-Stack:** Next.js 16.2, React 19, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui  
**Zielgruppe:** KMUs, die mehr Google-Traffic und messbaren Umsatz wollen  
**Primäre Sprache:** Deutsch

---

## Design-Entscheidungen

| Entscheidung | Wahl | Begründung |
|---|---|---|
| Layout-Typ | Performance-fokussiert | Zahlen & Ergebnisse im Vordergrund; direkte Conversion |
| Primärer CTA | "Kostenlose Website-Analyse starten" | Niedrige Einstiegshürde, Lead-Magnet |
| Visueller Stil | Dark Premium | Differenzierung von Mitbewerbern; wirkt kompetent, hochwertig |

---

## Farbpalette

Basiert auf dem bestehenden Logo (`logo-local-optimize.svg`):

| Token | Hex | Verwendung |
|---|---|---|
| `brand-teal` | `#14495A` | Primärfarbe, Backgrounds, Borders |
| `brand-cyan` | `#76CDD4` | Akzente, Labels, Stats |
| `brand-orange` | `#F28D21` | CTAs, Highlights, Energie-Akzente |
| `brand-dark` | `#060E12` | Page-Background |
| `brand-surface` | `#0B1F26` | Card-/Nav-/Section-Background |
| `brand-light` | `#E8F4F6` | Fließtext, helle Elemente |

**Logo:** `https://localoptimize.de/wp-content/uploads/2020/05/logo-local-optimize.svg`  
Vorerst SVG-Import aus `/public/logo.svg` (herunterladen und lokal ablegen).

---

## Typografie

| Rolle | Font | Variable |
|---|---|---|
| Display / Headlines | DM Serif Display (Google Fonts) | `--font-heading` |
| Body / UI | DM Sans (Google Fonts) | `--font-body` |

Beide bereits in `app/layout.tsx` konfiguriert.

---

## Seitenstruktur

### ① Navigation (`components/layout/Navigation.tsx`)

- **Links:** Leistungen · Über uns · Referenzen · Blog *(Blog-Link vorhanden, Seite noch nicht gebaut — Link zeigt vorerst auf `#`)*
- **Rechts:** Telefonnummer (`+49 7844 918 32 72`) + CTA-Button "Kostenlose Analyse"
- **Stil:** Dunkler Hintergrund (`brand-surface`), 1px Border-Bottom in Teal
- **Verhalten:** Sticky; ab 50px Scroll → `backdrop-blur-md` + `bg-brand-surface/80` (Tailwind), sodass der Inhalt darunter durchscheint
- **Mobile:** Hamburger-Menü (Slide-in Drawer)

### ② Hero (`components/sections/Hero.tsx`)

- **Eyebrow:** "Ihr Google-Spezialist für digitales Wachstum" (Uppercase, Cyan, Letter-Spacing)
- **Headline:** "Mehr Umsatz durch **messbaren** Google Traffic" — "messbaren" in Orange
- **Subtext:** "Wir bringen Ihr Unternehmen auf Seite 1 — mit datengetriebenem SEO, Google Ads und Social Media. Keine Versprechen. Nur Ergebnisse."
- **CTA-Gruppe:**
  - Primär: "Kostenlose Website-Analyse starten →" (Orange, filled)
  - Sekundär: "Leistungen ansehen" (Outlined, Cyan Border)
- **Service-Tags:** SEO · Google Ads · Display & Remarketing · Analytics · Social Media · Inbound Marketing (Pill-Badges, dezent)
- **Background:** Radial-Gradient-Glow in Teal von oben, subtile Orange/Cyan-Spots links/rechts
- **Animation:** Headline + Sub + CTAs staggered fade-in-up (Framer Motion)

### ③ Kennzahlen / Stats (`components/sections/Stats.tsx`)

4-spaltiges Grid, volle Breite, `brand-surface` Background:

| Stat | Wert | Platzhalter |
|---|---|---|
| Zufriedene Kunden | 250+ | **ersetzen mit echtem Wert** |
| Ø Traffic-Zuwachs | 3,2× | **ersetzen mit echtem Wert** |
| Jahre Erfahrung | 10+ | **ersetzen mit echtem Wert** |
| Weiterempfehlungsrate | 98% | **ersetzen mit echtem Wert** |

- Große Zahlen in Cyan oder Orange (alternierend)
- Label in gedämpftem Cyan
- Trennlinien zwischen Spalten
- **Animation:** Count-up mit Framer Motion `useInView` + `animate`

### ④ Leistungen (`components/sections/Services.tsx`)

- **Intro:** Label "Unsere Leistungen" + H2 "Alles aus **einer Hand**" + Subtext
- **Grid:** 3×2 Cards, max-width 900px, zentriert
- **Card-Stil:** `brand-surface` BG, Teal-Border, 2px Gradient-Accent oben (Teal→Cyan), Icon-Block + Name + Kurzbeschreibung
- **Hover:** Border aufhellen, subtile Shadow
- **Services:**
  1. Suchmaschinen-Optimierung (SEO) 🔍
  2. Google Ads & SEM 📢
  3. Display & Remarketing 🎯
  4. Webanalyse & Analytics 📊
  5. Social Media Marketing 📱
  6. Inbound Marketing 🧲

### ⑤ Prozess (`components/sections/Process.tsx`)

3 Schritte horizontal, verbunden durch eine Gradient-Linie (Teal→Orange→Teal):

1. **Kostenlose Analyse** — "Wir analysieren Ihre aktuelle Sichtbarkeit und identifizieren das größte Wachstumspotenzial."
2. **Strategie & Plan** — "Maßgeschneidertes Konzept mit klaren Zielen, Maßnahmen und messbaren KPIs." *(Step 2 in Orange)*
3. **Umsetzung & Wachstum** — "Kontinuierliche Optimierung, transparentes Reporting — Ihr Traffic wächst nachhaltig."

- **Animation:** Steps erscheinen nacheinander beim Scrollen (staggered, Framer Motion)

### ⑥ CTA-Banner (`components/sections/CtaBanner.tsx`)

- **Background:** Gradient `#14495A` → `#0B2E38` → `#0B1F26` + subtiler Orange-Glow
- **Headline:** "Starten Sie mit einer kostenlosen Analyse"
- **Subtext:** "In 48 Stunden wissen Sie, wo Ihr größtes Wachstumspotenzial liegt."
- **Form:** URL-Input-Feld + "Jetzt analysieren →" Button (Orange)
- **Trust-Text:** "Kostenlos · Unverbindlich · Ergebnis in 48h"
- URL-Input leitet zu `/kontakt` weiter (kein eigenes Backend nötig für MVP)

### ⑦ Footer (`components/layout/Footer.tsx`)

- Logo + Name links
- Mitte: Impressum · Datenschutz · Kontakt
- Rechts: © 2025 Local Optimize
- Border-Top in Teal

---

## Animationen (Framer Motion)

| Element | Animation |
|---|---|
| Hero-Inhalt | `fadeInUp` staggered (0.1s delay pro Element) |
| Stats | Count-up bei `useInView` |
| Service-Cards | `fadeInUp` staggered beim Scrollen |
| Prozess-Steps | Sequenziell einblenden beim Scrollen |
| Nav | Blur-Hintergrund ab 50px Scroll-Tiefe |

---

## Komponenten-Struktur

```
app/
  page.tsx                    ← importiert alle Sektionen
components/
  layout/
    Navigation.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Stats.tsx
    Services.tsx
    Process.tsx
    CtaBanner.tsx
```

---

## Out of Scope (Homepage)

- Kontaktformular-Backend (→ Kontakt-Seite)
- Blog-Bereich
- Referenzen-Detailseiten
- Mehrsprachigkeit
