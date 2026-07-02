  // Tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

function centerActiveTab(btn) {
  const tabBar = document.getElementById('tabBar');
  const wrapper = tabBar.parentElement; // .tab-wrapper (scroll container)

  const btnRect = btn.getBoundingClientRect();
  const wrapperRect = wrapper.getBoundingClientRect();

  const offset = btnRect.left - wrapperRect.left - (wrapper.clientWidth / 2) + (btn.clientWidth / 2);

  wrapper.scrollBy({
    left: offset,
    behavior: 'smooth'
  });
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById('panel-' + tab).classList.add('active');

    centerActiveTab(btn); // ⭐ add this line
  });
});

  // Mood filter
  const moodBtns = document.querySelectorAll('.mood-btn');
  moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      moodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      tabBtns.forEach(tb => {
        if (filter === 'all' || tb.dataset.mood === filter) {
          tb.classList.add('visible');
        } else {
          tb.classList.remove('visible');
          if (tb.classList.contains('active')) {
            tb.classList.remove('active');
          }
        }
      });

      // Auto-activate first visible tab
      const firstVisible = document.querySelector('.tab-btn.visible');
      if (firstVisible) {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      firstVisible.classList.add('active');
      document.getElementById('panel-' + firstVisible.dataset.tab).classList.add('active');

      centerActiveTab(firstVisible); // ⭐ add this
    }
    });
  });

  document.addEventListener('keydown', e => {
  if (['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;

  const visibleTabs = Array.from(document.querySelectorAll('.tab-btn.visible'));
  const active = document.querySelector('.tab-btn.active');
  const idx = visibleTabs.indexOf(active);

  if (e.key === 'ArrowRight' && idx < visibleTabs.length - 1) {
    visibleTabs[idx + 1].click();
  }

  if (e.key === 'ArrowLeft' && idx > 0) {
    visibleTabs[idx - 1].click();
  }
});

let touchStartX = 0;
let touchEndX = 0;

const touchArea = document.body;

touchArea.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

touchArea.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].clientX;

  const diff = touchStartX - touchEndX;
  const threshold = 50;

  const visibleTabs = Array.from(document.querySelectorAll('.tab-btn.visible'));
  const active = document.querySelector('.tab-btn.active');
  const idx = visibleTabs.indexOf(active);

  if (idx === -1) return; // 🔴 important safety

  if (diff > threshold && idx < visibleTabs.length - 1) {
    visibleTabs[idx + 1].click();
  }

  if (diff < -threshold && idx > 0) {
    visibleTabs[idx - 1].click();
  }

}, { passive: true });

// let lastTap = 0;

// document.addEventListener('touchend', function (e) {
//   const now = Date.now();
//   const DOUBLE_TAP_DELAY = 300;

//   if (now - lastTap < DOUBLE_TAP_DELAY) {
//     const touchX = e.changedTouches[0].clientX;
//     const screenWidth = window.innerWidth;

//     const visibleTabs = Array.from(document.querySelectorAll('.tab-btn.visible'));
//     const active = document.querySelector('.tab-btn.active');
//     const idx = visibleTabs.indexOf(active);

//     // 👉 Right side → next tab
//     if (touchX > screenWidth / 2 && idx < visibleTabs.length - 1) {
//       visibleTabs[idx + 1].click();
//     }

//     // 👉 Left side → previous tab
//     if (touchX <= screenWidth / 2 && idx > 0) {
//       visibleTabs[idx - 1].click();
//     }
//   }

//   lastTap = now;
// });
