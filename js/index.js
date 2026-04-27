/* =========================================
   INDEX PAGE JS
   Pixel grid animation + hero interaction
   ========================================= */

// ---- Pixel Grid Generator ----
function buildPixelGrid() {
  const grid = document.getElementById('pixelGrid');
  if (!grid) return;

  // Color palette matching site theme
  const colors = [
    'rgba(124,58,237,0.8)',
    'rgba(168,85,247,0.6)',
    'rgba(124,58,237,0.3)',
    'rgba(34,211,238,0.4)',
    'rgba(236,72,153,0.3)',
    'rgba(255,255,255,0.05)',
    'rgba(255,255,255,0.02)',
    'transparent',
    'transparent',
    'transparent',
  ];

  const totalCells = 144; // 12 x 12
  const cells = [];

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'pixel-cell';
    const color = colors[Math.floor(Math.random() * colors.length)];
    cell.style.background = color;
    cell.dataset.index = i;
    grid.appendChild(cell);
    cells.push(cell);
  }

  // ---- Animate pixels randomly ----
  function shimmer() {
    const randomIdx = Math.floor(Math.random() * totalCells);
    const cell = cells[randomIdx];
    const color = colors[Math.floor(Math.random() * colors.length)];
    cell.style.background = color;
    setTimeout(shimmer, 80 + Math.random() * 120);
  }
  shimmer();
}

// ---- Hero "Conócenos" Button ----
function initHeroButton() {
  const btn = document.getElementById('btnSurprise');
  const msg = document.getElementById('surpriseMsg');
  if (!btn || !msg) return;

  const messages = [
    '👋 ¡Hola! Somos estudiantes de desarrollo web. Bienvenido a nuestro TP1.',
    '💜 Construimos este sitio con HTML, CSS y JS puro. ¡Sin frameworks!',
    '🚀 Cada integrante tiene su propia página. ¡Explóralas abajo!',
    '✨ El diseño está inspirado en interfaces oscuras estilo dev-portfolio.',
  ];
  let msgIndex = 0;

  btn.addEventListener('click', () => {
    msg.classList.remove('hidden');
    msg.textContent = messages[msgIndex % messages.length];
    msgIndex++;
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  buildPixelGrid();
  initHeroButton();
});
