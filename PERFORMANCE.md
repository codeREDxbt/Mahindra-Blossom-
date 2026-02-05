# Performance Budget

This document defines the performance constraints for the Mahindra Blossom website.

## Core Web Vitals Targets

| Metric | Target | Current |
|--------|--------|---------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ |
| **FID** (First Input Delay) | < 100ms | ✅ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ |
| **INP** (Interaction to Next Paint) | < 200ms | ✅ |

## Bundle Size Budgets

| Asset Type | Max Size |
|------------|----------|
| **CSS** (output.css) | < 50KB gzipped |
| **JavaScript** (main.js) | < 10KB gzipped |
| **Hero Image** | < 500KB |
| **Other Images** | < 200KB each |
| **Total Page Weight** | < 2MB |

## Script Discipline

### ✅ Allowed
- Single `main.js` file (deferred)
- Inline SVGs for icons
- Critical CSS inlined in `<head>`

### ❌ Not Allowed (without approval)
- Third-party analytics scripts
- External fonts beyond Google Fonts
- Heavy JavaScript frameworks
- Tracking pixels

## Loading Strategy

1. **Hero Section**: Priority loading (`fetchpriority="high"`)
2. **Below-fold Sections**: Intersection Observer lazy loading
3. **Images**: Native lazy loading (`loading="lazy"`)
4. **Scripts**: Deferred loading (`defer` attribute)

## Analytics (If Needed)

Use `requestIdleCallback` for non-blocking analytics:

```javascript
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Load analytics
    });
}
```

## Monitoring

Performance metrics are logged to console in development mode.
