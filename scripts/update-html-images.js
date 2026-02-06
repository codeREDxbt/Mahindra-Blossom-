const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'index.html');

let html = fs.readFileSync(htmlPath, 'utf8');

// Replace .jpg and .png with .webp for image files in assets/images
// But preserve SVG files (they don't need conversion)
html = html.replace(/\.jpg"/g, '.webp"');
html = html.replace(/\.png"/g, '.webp"');
html = html.replace(/\.jpg'/g, ".webp'");
html = html.replace(/\.png'/g, ".webp'");

// Also update preload hint for hero image
html = html.replace(/hero-bg\.jpg/g, 'hero-bg.webp');

// Fix: Restore SVG extensions that were incorrectly changed (shouldn't happen, but safety check)
// SVG files shouldn't have been converted, so this is just for patterns like icon-phone.svg
// which wouldn't be caught by above anyway

fs.writeFileSync(htmlPath, html, 'utf8');

console.log('HTML updated to use WebP images!');
console.log('Changes made:');
console.log('- All .jpg references changed to .webp');
console.log('- All .png references changed to .webp');
console.log('- Hero preload updated to hero-bg.webp');
