/* =========================================
   MEMBER PAGE JS
   Dynamic interactions for individual cards
   - Toggle extra info sections
   - Theme accent color switcher
   - Skill bar animation (triggered by main.js)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Tab system for media sections ----
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const panel = document.getElementById(target);
        if (panel) panel.classList.add('active');
      });
    });
  }

  // ---- Hover reveal for media items ----
  document.querySelectorAll('.media-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.paddingLeft = '1rem';
    });
    item.addEventListener('mouseleave', () => {
      item.style.paddingLeft = '0.75rem';
    });
  });

  // ---- Fact counter on profile badges ----
  const ageBadge = document.getElementById('ageBadge');
  if (ageBadge) {
    const age = parseInt(ageBadge.dataset.age);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      ageBadge.textContent = count + ' años';
      if (count >= age) clearInterval(interval);
    }, 40);
  }

});
