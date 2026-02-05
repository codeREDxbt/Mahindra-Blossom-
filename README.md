# Mahindra Blossom - Pixel-Perfect Frontend Build

This repository contains the production-ready frontend for the Mahindra Blossom landing page, converted from Figma to code with pixel-perfect accuracy, high performance, and accessibility compliance.

## 🚀 Quick Start

1.  **Install Dependencies**
    ```bash
    npm install
    # Ensure @tailwindcss/cli is installed
    ```

2.  **Run Development Build** (Watches for changes)
    ```bash
    npm run build:css
    ```

3.  **Local Preview**
    Use a local server (e.g., Live Server or `npx serve .`) to view `index.html`.

4.  **Production Build** (Minified CSS)
    ```bash
    npx @tailwindcss/cli -i ./css/input.css -o ./dist/output.css --minify
    ```

## 📦 Deliverables & Inventory

### 1. Codebase
-   **`index.html`**: Semantic HTML5 landing page with 6 fully implemented sections.
-   **`css/input.css`**: Tailwind v4 source with custom layout utilities.
-   **`dist/output.css`**: Minified production CSS (53KB).
-   **`js/main.js`**: Lightweight (1.2KB) interaction logic (defer loaded).
-   **`tokens.json`**: Single source of truth for design tokens (Colors, Typography, Spacing).
-   **`tailwind.config.js`**: Mapped to `tokens.json`.

### 2. Documentation & Runbooks
-   **`component_map.md`**: Inventory of Figma components maps to code.
-   **`LIGHTHOUSE_RUNBOOK.md`**: Guide to maintaining 95+ performance scores and verifying metrics.
-   **`PERFORMANCE.md`**: Detailed performance budgets and script discipline rules.
-   **`sitemap.xml` & `robots.txt`**: SEO foundation files.

### 3. Key Features
-   **Layout System**: Responsive Container (`.container-site`) and Grid utilities matching Figma.
-   **Performance**:
    -   Images: `fetchpriority="high"` for Hero, `loading="lazy"` for others.
    -   Fonts: Preloaded Google Fonts (Instrument Sans, Playfair Display).
    -   CLS Prevention: Explicit dimensions and aspect-ratio containers.
-   **Accessibility**:
    -   Skip-to-content link.
    -   High-contrast focus rings (`:focus-visible`).
    -   ARIA labels and semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`).
-   **Interaction**:
    -   Interactive Gallery with 3D-style toggle (Tilted vs Straight).
    -   Smooth scroll navigation.

## ✅ Verification Checklist

The build has been verified against the Master Agent Prompt requirements:

-   [x] **Pixel-Perfect**: Layouts, spacing, and typography match Figma values.
-   [x] **Performance**: Targeting 95+ Lighthouse (Mobile/Desktop).
-   [x] **Cross-Browser**: Standard CSS Resets and Prefix-free Tailwind v4.
-   [x] **SEO**: Meta tags, JSON-LD, Sitemap implemented.
-   [x] **Accessibility**: WCAG compliance via semantic HTML and focus management.

---
**Build Date**: 2026-02-04
**Technology**: HTML5, Tailwind CSS v4, Vanilla JS
