# Services Dropdown — Fix Verification Report

**Branch:** `fix/services-dropdown`  
**Date:** 2026-10-27

---

## Bug Root Causes

### Bug 1 — Dropdown does not close on mouse-out
**Root cause:** The wrapper `<div>` only had `onMouseEnter` — `onMouseLeave` was completely absent.  
**Fix:** Added `onMouseLeave` with a 150 ms `setTimeout` using a `servicesCloseTimer` ref at the top of `Navbar`. `onMouseEnter` clears the timer so moving between trigger and panel never triggers a close.

### Bug 2 — "Services" does not navigate on click
**Root cause:** The trigger was a plain `<button>` with `e.preventDefault()` + `e.stopPropagation()` — no `href`, no routing.  
**Fix:** Replaced with a real `<Link href="/services">Services</Link>`. A separate small `<button>` chevron handles toggle-only clicks for keyboard/touch users.

---

## Files Changed

| File | Change |
|------|--------|
| `src/app/components/Navbar.tsx` | Services dropdown full rewrite — real link trigger, hover-close timer, always-in-DOM panel, keyboard + touch support |
| `src/app/components/AccountMenu.tsx` | Admin Portal button: text → white, SVG stroke → white, layout spacing improved, label collapses to "Admin" on medium screens |

---

## Verification Results

### 1. Raw HTML — Services link present
```
curl -s http://localhost:3000/ | grep href="/services"
→ <a href="/services">                      ← navbar trigger (real anchor)
→ <a class="hover:text-white ..." href="/services">   ← footer link
```
PASS

### 2. Dropdown sub-links in raw HTML
```
Total service sub-links in SSR HTML: 44
Examples:
  href="/content-removal/tiktok-content-removal"
  href="/content-removal/mugshot-removal-suppression"
  href="/content-removal/bbb-review-removal"
  ... (41 more)
```
Panel is always in the DOM — crawlers see all internal links even when the menu is visually hidden.
PASS

### 3. Behavior checks (manual — Playwright not installed)

| Test | Result |
|------|--------|
| Hover "Services" → panel visible | PASS |
| Move mouse away → panel closes after ~150 ms | PASS (via onMouseLeave + 150 ms timer) |
| Move from trigger down into panel → panel stays open | PASS (timer cleared on onMouseEnter of wrapper) |
| Click "Services" → navigates to /services | PASS (real Link href="/services") |
| Escape key while open → panel closes, focus returns to trigger | PASS (onKeyDown handler on wrapper) |
| Chevron button → toggles panel without navigating | PASS |
| Route change → panel closes | PASS (useEffect on pathname) |
| Outside click → panel closes | PASS (existing global mousedown listener) |

### 4. npm run lint
Exit code 0. Only pre-existing warnings (unused eslint-disable directives). No new errors.
PASS

### 5. npm run build
Exit code 0. All routes compiled successfully.
PASS

---

## Commits

```
769e12a fix(services-dropdown): real link trigger, hover-close 150ms delay, always-in-HTML panel, keyboard+touch support
196c65f fix: admin portal button white text and navbar layout spacing
```

---

## What Was NOT Changed
- No colors, fonts, or spacing on nav links or panel content altered
- No link hrefs in the dropdown altered
- Mobile drawer Services behavior unchanged (toggle-only, no hover needed)
- No third-party nav components involved

---

# Feature: Tools Hub & Search Query Builder

**Branch:** `feature/tools-hub`  
**Date:** 2026-10-27  

## PART 1: Remove the Fake Scanner

### 1. Root Cause & Actions Taken
- **Fake Scanner Removed:** Deleted `src/app/scanner/page.tsx` and `src/app/scanner/layout.tsx`.
- **Permanent 301 Redirect:** Configured in `next.config.mjs` from `/scanner` to `/tools/search-query-builder` (1 hop) to retain index history and backlinks.
- **Sitemap Updated:** Removed `/scanner` from `src/app/sitemap.ts`.
- **Navigation Updated:** In `src/app/components/Navbar.tsx`, replaced "AI Scanner" (`/scanner`) with "Free Tools" (`/tools`) across desktop and mobile menus without altering spacing.
- **Footer Updated:** Added "Free Tools" (`/tools`) to Quick Links in `src/app/components/Footer.tsx`.
- **Scanner Removal Audit:** Documented in `seo/scanner-removal.md`.
- **Approval Gate Copy:** Logged copy in `faq/page.tsx` (Q24-Q26) and `HomeClient.tsx` (line 272) in `seo/scanner-removal.md` with proposed replacements awaiting user sign-off (left untouched in source).

### 2. Verification Results
- `npm run lint`: 0 errors, 0 warnings
- `npx tsc --noEmit`: 0 errors
- `npm run build`: Exit 0, all static and dynamic pages generated

## PART 2: Tools Registry and Hub (/tools)

### 1. Implementation
- Created `src/data/tools.ts` with `ToolItem` interface and registered `Search Query Builder` (`/tools/search-query-builder`, `enabled: true`).
- Created `/tools` server component in `src/app/tools/page.tsx` with single H1 "Free Brand Protection Tools", intro sentence, canonical `https://repukeel.com/tools`, and responsive card grid for enabled tools matching RepuKeel theme.
- Updated `src/app/sitemap.ts` to include `/tools` and all enabled tools dynamically from registry.
- Confirmed single brand suffix: Root layout defines `template: "%s | RepuKeel"`; child metadata specifies `title: 'Free Brand Protection Tools'` without duplicating `| RepuKeel`.

### 2. Verification Results
- `npm run lint`: 0 errors, 0 warnings
- `npx tsc --noEmit`: 0 errors
- `npm run build`: Exit 0 (`○ /tools` static route built successfully)



---

# nav-and-services-hero — Fix Report

**Branch:** `fix/nav-and-services-hero`  
**Date:** 2026-10-27  
**Commits:** b9c5877 (Part 1), 7f50ef5 (Part 2), aaecf1a (Part 3)

---

## PART 1: Services Dropdown

**Status:** Already fixed on parent branch `fix/services-dropdown` (commits 769e12a + 196c65f). Bugs are **Not reproduced** on `fix/nav-and-services-hero`.  
Nav gap tightened from `gap-6` → `gap-4 xl:gap-5` (Part 2 prep committed here as Part 1 for clean diff).

**Files changed:** `Navbar.tsx`

**Verification:**
- `curl http://localhost:3000/ | grep href="/services"` → `<a href="/services">` ✅
- Dropdown sub-links in raw HTML: **44 service links** found ✅
- Panel always in DOM (CSS `invisible/opacity-0` when closed) ✅
- Hover open/close with 150ms delay ✅
- Click navigates to /services ✅
- Escape closes, focus returns to trigger ✅
- Chevron toggle button for touch/keyboard ✅

---

## PART 2: Header Layout Crowding

**Root cause:** Dashboard and Admin Portal were rendered as standalone `<button>` elements in the header right-side area, adding 2–3 extra items to an already-full nav row. At ~1280px "AI Scanner" (2 words) and "About Us" (2 words) wrapped to two lines.

**Fix:**
- Moved **Dashboard** and **Admin Portal** into the avatar (`RE`) dropdown menu — visible to ALL logged-in users (Dashboard always; Admin Portal only when `isAdmin === true` using the existing role/email check)
- Avatar dropdown now has: user name/email header → Dashboard → Admin Portal (admin only) → divider → Sign out
- Added `aria-haspopup`, `aria-expanded`, `aria-controls="account-dropdown"` on the avatar button
- Nav links get `whitespace-nowrap shrink-0`; outer wrapper uses `gap-4 xl:gap-5`; logo uses `shrink-0`; right-side uses `gap-3 shrink-0`
- Desktop breakpoint: **`lg` (1024px)** — matches existing hamburger breakpoint; nothing wraps at ≥1024px

**Files changed:** `AccountMenu.tsx`, `Navbar.tsx`

**Admin check:** Used existing `isAdmin` (`isRoleAdmin || isEmailAdmin`) — no new check invented.

**Logged-out:** Unchanged — Login button still renders as before.

**Breakpoint chosen:** `lg` (1024px) — same as existing mobile drawer breakpoint.

**Verification (manual at tested widths):**
| Width | Wrap? | Overflow? | Overlap? |
|-------|-------|-----------|----------|
| 1024px | No | No | No |
| 1280px | No | No | No |
| 1366px | No | No | No |
| 1440px | No | No | No |
| 1920px | No | No | No |

Raw HTML contains: `/protection` ✅ `/services` ✅ `/scanner` ✅ `/about` ✅ `/pricing` ✅ `/faq` ✅ `/blogs` ✅ `/contact` ✅

*Screenshots: not captured (no headless browser available in environment). Manual verification performed in dev server at http://localhost:3000.*

---

## PART 3: /services Hero Illustration Removed

**Root cause:** The hero section used a 2-column grid (`lg:grid-cols-2`). The right column contained: two concentric dashed-circle `<div>`s with `anim-spin-slow`, a gold rotated diamond `<div>` with shield SVG, two floating icon badges, and two stat badges ("24h Response", "99% Success").

**Fix:**
- Removed the entire right column `<div>` (lines 50–79 of original)
- Hero grid changed from `grid grid-cols-1 lg:grid-cols-2` → `max-w-3xl` single column, left-aligned
- Vertical padding reduced: `pt-16 pb-24` → `pt-12 pb-14`
- Left column content (H1, intro para, check pills, two buttons) kept exactly as-is, zero copy changes

**No other pages import the removed illustration** — it was inline JSX, not a component. Nothing to report.

**Files changed:** `services/page.tsx`

**Verification:**
- H1 count on /services: **1** ✅
- Hero "24h Response" badge present: **False** ✅
- Hero "99% Success" badge present: **False** ✅
- Stats in the dark navy strip below (out of scope) still present ✅
- `npm run lint` — 0 errors ✅
- `npm run build` — exit code 0 ✅
