// ================================================================
// build.js — Static HTML generator for Tezuka OSAMU Library
// Run: node build.js
// Output: dist/index.html (pre-rendered, SEO-ready)
// ================================================================

const fs   = require('fs');
const path = require('path');

// ── Load data.js via new Function ────────────────────────────────
const dataSrc = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8')
  .replace(/\bconst\b/g, 'var');
const getData = new Function(dataSrc + '; return { CHAPTERS: CHAPTERS, VIDEOS: VIDEOS };');
const { CHAPTERS, VIDEOS } = getData();

// ── Helpers ──────────────────────────────────────────────────────
const CAPTION = "We recommend listening to the original Japanese audio while using YouTube's 'Auto-translate' subtitle feature — to feel the full literary atmosphere of the original.";

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Nav HTML ─────────────────────────────────────────────────────
function renderNav() {
  return Object.entries(CHAPTERS)
    .map(([key, ch]) => `  <a href="#chapter-${key}">${esc(ch.num)}. ${esc(ch.title)}</a>`)
    .join('\n');
}

// ── Video item HTML ───────────────────────────────────────────────
function renderVideo(v) {
  const tags = v.tags.map(t => `<span class="video-tag">${esc(t)}</span>`).join('');
  return `      <div class="video-item">
        <div class="video-frame">
          <a class="video-frame__link"
             href="https://www.youtube.com/watch?v=${esc(v.id)}"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Watch ${esc(v.title)} on YouTube">
            <img class="video-frame__thumb"
                 src="https://img.youtube.com/vi/${esc(v.id)}/hqdefault.jpg"
                 alt="${esc(v.title)}"
                 loading="lazy">
            <div class="video-frame__play">
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38" fill="rgba(0,0,0,0.6)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
                <polygon points="32,24 60,40 32,56" fill="white"/>
              </svg>
            </div>
          </a>
          <p class="video-frame__label">Tezuka Productions Official Channel</p>
        </div>
        <div class="video-info">
          <div class="video-tags">${tags}</div>
          <h3 class="video-title">${esc(v.title)}</h3>
          <p class="video-lead">${esc(v.lead)}</p>
          <p class="video-caption">${esc(CAPTION)}</p>
        </div>
      </div>`;
}

// ── Main content HTML ─────────────────────────────────────────────
function renderMain() {
  let html = '';
  Object.entries(CHAPTERS).forEach(([key, ch]) => {
    const videos = VIDEOS.filter(v => v.chapter === key);
    if (!videos.length) return;

    html += `
  <div class="chapter-divider">
    <div class="chapter-divider__line"></div>
    <span class="chapter-divider__label">Chapter ${esc(ch.num)}</span>
    <div class="chapter-divider__line"></div>
  </div>
  <section class="chapter" id="chapter-${key}">
    <div class="chapter-header">
      <span class="chapter-header__num">Chapter ${esc(ch.num)}</span>
      <h2 class="chapter-header__title">${esc(ch.title)}</h2>
      <p class="chapter-header__lead">${ch.lead}</p>
    </div>
    <div class="video-list">
${videos.map(renderVideo).join('\n')}
    </div>
  </section>`;
  });
  return html;
}

// ── Build ─────────────────────────────────────────────────────────
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

// Read source template
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Inject pre-rendered nav
html = html.replace(
  /<nav class="site-nav" id="site-nav"><\/nav>/,
  `<nav class="site-nav" id="site-nav">\n${renderNav()}\n</nav>`
);

// Inject pre-rendered main content
html = html.replace(
  /<main id="main-content"><\/main>/,
  `<main id="main-content">${renderMain()}\n</main>`
);

// Write dist/index.html
fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
console.log('✓ dist/index.html');

// Copy static assets
['ogp.png', 'sitemap.xml', 'robots.txt'].forEach(file => {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    console.log(`✓ dist/${file}`);
  }
});

// Verify: count pre-rendered video items
const videoCount = (html.match(/class="video-item"/g) || []).length;
console.log(`\nBuild complete — ${videoCount} video items pre-rendered → dist/`);
