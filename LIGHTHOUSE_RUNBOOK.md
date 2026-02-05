# Lighthouse 95+ Verification Runbook

This guide outlines the process to verify and maintain **95+ Lighthouse scores** for the Mahindra Blossom project.

## 🎯 Targets
| Category | Target | Critical Metrics |
|----------|--------|------------------|
| **Performance** | **95+** | LCP < 2.5s, TBT < 200ms, CLS < 0.1 |
| **Accessibility** | **100** | Contrast, ARIA, Focus states |
| **Best Practices** | **100** | HTTPS, No console errors, Deprecations |
| **SEO** | **100** | Mobile-friendly, Meta tags, Valid struct data |

## 🚀 How to Run Lighthouse Locally

1.  **Prepare Production Build**:
    Minify your CSS to simulate a production environment.
    ```powershell
    npx @tailwindcss/cli -i ./css/input.css -o ./dist/output.css --minify
    ```

2.  **Serve Locally**:
    Use a local server (like Live Server extension or `npx serve`) instead of opening the file directly, to ensure assets load correctly.
    ```powershell
    npx serve .
    ```

3.  **Run Audit**:
    - Open **Chrome** in **Incognito Mode** (ctrl+shift+n).
    - Navigate to `http://localhost:3000` (or your server port).
    - Open DevTools (`F12`) -> **Lighthouse** tab.
    - Settings:
        - Mode: **Navigation**
        - Device: **Mobile** (Standard) or **Desktop**
    - Click **Analyze page load**.

## 🔧 Troubleshooting & Tuning

### 1. Performance Drops (Score < 95)

| Impact Area | What to Check & Fix | Code Location |
|-------------|---------------------|---------------|
| **LCP** (Load time) | Ensure Hero image has `fetchpriority="high"` and is NOT lazy loaded. Check image size (<200KB preferred). | `index.html` line ~240 |
| **CLS** (Shifts) | Verify all `<img>` tags have explicit `width` and `height`. Check `hero-bg-placeholder` in critical CSS. | `index.html` styles |
| **Render Blocking** | Ensure CSS is minified. Remove unused font weights. | `input.css`, `index.html` |
| **TBT** (Blocking) | Check `main.js`. Ensure it is deferred. | `index.html` bottom |

### 2. Accessibility Drops (Score < 100)

| Issue | Solution | Code Location |
|-------|----------|---------------|
| **Contrast** | Adjust text colors in Tailwind config or specific classes. Ensure `bg-opacity` isn't too low on text overlays. | `tokens.json`, `index.html` |
| **Missing Alt** | Check all images. Decorative = `alt=""`, Informational = descriptive text. | `index.html` |
| **Heading Order** | Ensure `<h1>` -> `<h2>` -> `<h3>` hierarchy is strict. | `index.html` |
| **Focus** | Verify standard outline rings are visible. | `index.html` `<style>` |

### 3. SEO Drops (Score < 100)

| Issue | Solution | Code Location |
|-------|----------|---------------|
| **Meta Tags** | Check title, description, and viewport tags. | `index.html` `<head>` |
| **Tap Targets** | Increase padding on touch links (min 48x48px). | `index.html` (nav/buttons) |
| **Structured Data** | Validate JSON-LD syntax. | `index.html` `<head>` |

### 4. Best Practices Drops

| Issue | Solution |
|-------|----------|
| **Console Errors** | Check `main.js` for unresolved variable references. |
| **Image Aspect** | Ensure displayed aspect ratio matches natural aspect ratio. |

## 🛠️ Optimization Configuration

- **Fonts**: Preloaded in `<head>`
- **Images**:
    - Hero: `fetchpriority="high"`
    - Others: `loading="lazy"`, `decoding="async"`
- **Scripts**: `defer` attribute on `script` tags
