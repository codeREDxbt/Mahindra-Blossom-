const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
console.log('jpg:', (h.match(/\.jpg/g) || []).length);
console.log('png:', (h.match(/\.png/g) || []).length);
console.log('lazy:', (h.match(/loading="lazy"/g) || []).length);
console.log('font:', h.includes('media="print"'));
console.log('door:', h.includes('hero-door--left'));
console.log('anim:', h.includes('doorSwingLeft'));
console.log('reveal:', h.includes('hero-content-reveal'));
console.log('preload:', h.includes('type="image/webp"'));
console.log('reduced-motion:', h.includes('prefers-reduced-motion'));

const css = fs.readFileSync('css/input.css', 'utf8');
console.log('css-font-import:', css.includes('fonts.googleapis.com'));

const js = fs.readFileSync('js/main.js', 'utf8');
console.log('console.log:', js.includes("console.log("));
console.log('raf-throttle:', js.includes('requestAnimationFrame'));
