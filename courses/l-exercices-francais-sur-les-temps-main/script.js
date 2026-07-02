/* ============================================================
   French Tenses Practice — Interactive Enhancements
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_KEY = 'fr_tense_answers';
  const TENSE_ID    = window.__tenseId || 0;

  /* ---------- storage ---------- */
  function loadAnswers() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function saveAnswer(id, val) {
    const a = loadAnswers();
    a[id] = val;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(a));
  }

  /* ---------- 1a. Convert ____ underscores into real <input> boxes ---------- */
  let inputCount = 0;
  const saved = loadAnswers();

  function inAnswerKey(el) { return !!el.closest('.answer-key-block, .answer-key-content'); }

  document.querySelectorAll('li, p, td').forEach(el => {
    if (el.querySelector('input, textarea')) return;
    if (inAnswerKey(el)) return;
    let html = el.innerHTML;
    if (!/_{4,}/.test(html)) return;

    html = html.replace(/_{4,}/g, function (match) {
      const id  = 'inp-' + TENSE_ID + '-' + (inputCount++);
      const val = (saved[id] || '').replace(/"/g, '&quot;');
      const w   = Math.min(520, Math.max(140, match.length * 12));
      return `<input type="text" id="${id}" class="exercise-input"
                     style="width:${w}px" value="${val}"
                     autocomplete="off" spellcheck="false"
                     aria-label="Fill in the blank">`;
    });
    el.innerHTML = html;
  });

  /* ---------- 1b. Empty <td> cells in practice tables become inputs ---------- */
  // Heuristic: a table qualifies as a "practice table" if at least one tbody row
  // contains >1 empty cell. We skip answer-key tables entirely.
  document.querySelectorAll('table').forEach(table => {
    if (inAnswerKey(table)) return;

    const bodyRows = table.querySelectorAll('tbody tr, tr');
    let emptyCellCount = 0;
    bodyRows.forEach(tr => {
      tr.querySelectorAll('td').forEach(td => {
        if (!td.innerHTML.trim() && !td.querySelector('input, textarea')) emptyCellCount++;
      });
    });
    if (emptyCellCount < 2) return; // not a practice table

    bodyRows.forEach(tr => {
      tr.querySelectorAll('td').forEach(td => {
        if (td.innerHTML.trim()) return;
        if (td.querySelector('input, textarea')) return;
        const id  = 'inp-' + TENSE_ID + '-' + (inputCount++);
        const val = (saved[id] || '').replace(/"/g, '&quot;');
        td.innerHTML =
          `<input type="text" id="${id}" class="exercise-input exercise-input-cell"
                  value="${val}" autocomplete="off" spellcheck="false"
                  aria-label="Table cell input">`;
      });
    });
  });

  /* ---------- 1c. Each <li><hr></li> becomes a single-line input ---------- */
  document.querySelectorAll('li').forEach(li => {
    if (inAnswerKey(li)) return;
    if (li.querySelector('input, textarea')) return;
    const kids = Array.from(li.childNodes).filter(n =>
      !(n.nodeType === 3 && !n.textContent.trim())
    );
    if (kids.length !== 1) return;
    if (!kids[0].nodeName || kids[0].nodeName !== 'HR') return;

    const id  = 'inp-' + TENSE_ID + '-' + (inputCount++);
    const val = (saved[id] || '').replace(/"/g, '&quot;');
    li.innerHTML =
      `<input type="text" id="${id}" class="exercise-input exercise-input-line"
              value="${val}" autocomplete="off" spellcheck="false"
              aria-label="Write a sentence">`;
  });

  /* ---------- 1d. Consecutive <hr> blocks (≥3) become a single textarea ---------- */
  // These are used as free-writing lines in "Free Composition" / "Short Story" etc.
  (function convertHrBlocks() {
    const allNodes = Array.from(document.body.querySelectorAll('hr'));
    const groups = [];
    let current = [];
    allNodes.forEach(hr => {
      if (inAnswerKey(hr)) return;
      const prev = hr.previousElementSibling;
      if (prev && prev.tagName === 'HR' && current.length && current[current.length - 1].nextElementSibling === hr) {
        current.push(hr);
      } else {
        if (current.length >= 3) groups.push(current);
        current = [hr];
      }
    });
    if (current.length >= 3) groups.push(current);

    groups.forEach(group => {
      const lines = group.length;
      const rows  = Math.max(4, Math.min(14, lines));
      const id    = 'inp-' + TENSE_ID + '-' + (inputCount++);
      const val   = (saved[id] || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
      const ta = document.createElement('textarea');
      ta.id = id;
      ta.className = 'exercise-textarea';
      ta.rows = rows;
      ta.setAttribute('placeholder', '✍️  Write your answer here...');
      ta.setAttribute('spellcheck', 'false');
      ta.value = saved[id] || '';
      const wrap = document.createElement('div');
      wrap.className = 'exercise-textarea-wrap';
      wrap.appendChild(ta);
      group[0].parentNode.insertBefore(wrap, group[0]);
      group.forEach(hr => hr.remove());
    });
  })();

  /* ---------- 1d. Bind save on every input & textarea ---------- */
  document.querySelectorAll('.exercise-input, .exercise-textarea').forEach(el => {
    el.addEventListener('input', function () { saveAnswer(this.id, this.value); });
  });

  /* ---------- 2a. Remove empty/stub "Quick Reference & Introduction" cards ---------- */
  // These contain only a throwaway <h2>(...Tense)</h2> + <hr> and add no value
  // since the real Quick Reference lives in the top-bar "Quick Ref" button.
  document.querySelectorAll('.level-card').forEach(card => {
    const nameEl = card.querySelector('.level-name');
    const name   = nameEl ? nameEl.textContent.trim().toLowerCase() : '';
    if (!/quick reference/.test(name)) return;
    const body = card.querySelector('.level-body');
    if (!body) return;
    // Consider it empty if it has no inputs/lists/tables/paragraphs with content
    const hasContent =
      body.querySelector('input, textarea, ol, ul, table') ||
      Array.from(body.querySelectorAll('p')).some(p => p.textContent.trim().length > 20);
    if (!hasContent) card.remove();
  });

  /* ---------- 2b. Assign stable IDs to level cards for anchor jumping ---------- */
  const levelCards = Array.from(document.querySelectorAll('.level-card'));
  const levelMeta  = [];
  levelCards.forEach((card, idx) => {
    if (!card.id) card.id = 'level-card-' + (idx + 1);
    const nameEl = card.querySelector('.level-name');
    const name   = nameEl ? nameEl.textContent.trim() : ('Section ' + (idx + 1));
    const iconEl = card.querySelector('.level-icon');
    const icon   = iconEl ? iconEl.textContent.trim() : '📄';
    levelMeta.push({ id: card.id, name, icon, index: idx });
  });

  /* ---------- 3. Level collapse toggle (click header) ---------- */
  document.querySelectorAll('.level-card-header').forEach(hdr => {
    hdr.addEventListener('click', function () {
      this.closest('.level-card').classList.toggle('collapsed');
    });
  });

  /* ---------- 4. Answer-key show/hide ---------- */
  document.querySelectorAll('.answer-key-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const content = this.nextElementSibling;
      content.classList.toggle('visible');
      this.innerHTML = content.classList.contains('visible')
        ? '🙈 Hide Answer Key' : '🔑 Show Answer Key';
    });
  });

  /* ---------- 5. Progress check per section ---------- */
  window.checkAnswers = function (sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const inputs = section.querySelectorAll('.exercise-input, .exercise-textarea');
    let filled = 0, total = inputs.length;
    inputs.forEach(inp => { if (inp.value.trim()) filled++; });
    const pct = total ? Math.round(filled / total * 100) : 0;
    const scoreEl = section.querySelector('.score-num');
    const barEl   = section.querySelector('.score-progress-fill');
    if (scoreEl) scoreEl.textContent = filled + '/' + total + ' filled';
    if (barEl)   barEl.style.width   = pct + '%';
    updateGlobalProgress();
  };

  window.clearSection = function (sectionId) {
    if (!confirm('Clear all answers in this section?')) return;
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.querySelectorAll('.exercise-input, .exercise-textarea').forEach(inp => {
      inp.value = '';
      inp.classList.remove('correct', 'incorrect');
      saveAnswer(inp.id, '');
    });
    const scoreEl = section.querySelector('.score-num');
    const barEl   = section.querySelector('.score-progress-fill');
    if (scoreEl) scoreEl.textContent = '–';
    if (barEl)   barEl.style.width   = '0%';
    updateGlobalProgress();
  };

  /* ---------- 6. Build the fixed top bar ---------- */
  function buildTopBar() {
    if (document.getElementById('top-bar')) return;

    const tenseTitleEl = document.querySelector('.tense-title');
    const tenseMoodEl  = document.querySelector('.tense-mood');
    const title = tenseTitleEl ? tenseTitleEl.textContent.trim() : ('Tense ' + TENSE_ID);
    const mood  = tenseMoodEl  ? tenseMoodEl.textContent.trim()  : '';
    const chapterUrl = TENSE_ID
      ? `https://shakti4640.github.io/les-temps-en-francais/chapter-${TENSE_ID}.html`
      : null;

    const bar = document.createElement('div');
    bar.id = 'top-bar';
    bar.innerHTML = `
      <button id="menu-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="top-bar-info">
        <span class="top-bar-num">Tense ${TENSE_ID || '?'} / 21</span>
        <span class="top-bar-title" title="${title}">${title}</span>
        <span class="top-bar-mood">${mood}</span>
      </div>
      <div class="top-bar-actions">
        ${chapterUrl ? `<a href="${chapterUrl}" target="_blank" rel="noopener"
               class="top-bar-btn ref" title="Open Quick Reference (Chapter ${TENSE_ID})">
               📖 <span>Quick Ref</span>
             </a>` : ''}
        <a href="index.html" class="top-bar-btn home" title="Table of contents">
          🏠 <span>Home</span>
        </a>
      </div>
    `;
    document.body.prepend(bar);
  }

  /* ---------- 7. Build the hamburger side drawer ---------- */
  function buildDrawer() {
    if (document.getElementById('side-drawer')) return;

    const tenseTitleEl = document.querySelector('.tense-title');
    const title = tenseTitleEl ? tenseTitleEl.textContent.trim() : ('Tense ' + TENSE_ID);

    const items = levelMeta.map(m => `
      <a href="#${m.id}" class="drawer-item" data-target="${m.id}">
        <span class="drawer-item-icon">${m.icon}</span>
        <span class="drawer-item-text">${m.name}</span>
      </a>
    `).join('');

    const overlay = document.createElement('div');
    overlay.id = 'drawer-overlay';

    const drawer = document.createElement('aside');
    drawer.id = 'side-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <div class="drawer-head">
        <div class="drawer-title">
          <span class="drawer-num">Tense ${TENSE_ID || '?'}</span>
          <span class="drawer-name">${title}</span>
        </div>
        <button class="drawer-close" aria-label="Close menu">✕</button>
      </div>
      <div class="drawer-progress">
        <div class="drawer-progress-label">
          <span>Your progress on this tense</span>
          <strong id="drawer-pct">0%</strong>
        </div>
        <div class="drawer-progress-bar"><div id="drawer-progress-fill"></div></div>
      </div>
      <div class="drawer-section-title">Jump to section</div>
      <nav class="drawer-nav">${items}</nav>
      <div class="drawer-foot">
        <button id="drawer-expand-all" class="drawer-foot-btn">Expand all</button>
        <button id="drawer-collapse-all" class="drawer-foot-btn">Collapse all</button>
      </div>
      <div class="drawer-hint">
        <kbd>←</kbd> <kbd>→</kbd> to change tense · <kbd>Esc</kbd> to close
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    /* drawer open/close */
    const openDrawer = () => {
      drawer.classList.add('open');
      overlay.classList.add('visible');
      drawer.setAttribute('aria-hidden', 'false');
      document.getElementById('menu-toggle').setAttribute('aria-expanded', 'true');
      document.getElementById('menu-toggle').classList.add('active');
      document.body.classList.add('drawer-open');
    };
    const closeDrawer = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('visible');
      drawer.setAttribute('aria-hidden', 'true');
      const tog = document.getElementById('menu-toggle');
      if (tog) { tog.setAttribute('aria-expanded', 'false'); tog.classList.remove('active'); }
      document.body.classList.remove('drawer-open');
    };

    const toggleBtn = document.getElementById('menu-toggle');
    if (toggleBtn) toggleBtn.addEventListener('click', () => {
      drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });
    drawer.querySelector('.drawer-close').addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('.drawer-item').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.getElementById(this.dataset.target);
        if (!target) return;
        target.classList.remove('collapsed'); // auto-expand on jump
        closeDrawer();
        setTimeout(() => {
          const y = target.getBoundingClientRect().top + window.pageYOffset - 72;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 220);
      });
    });

    document.getElementById('drawer-expand-all').addEventListener('click', () => {
      levelCards.forEach(c => c.classList.remove('collapsed'));
    });
    document.getElementById('drawer-collapse-all').addEventListener('click', () => {
      levelCards.forEach(c => c.classList.add('collapsed'));
    });

    /* Esc closes drawer */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
  }

  /* ---------- 8. Scroll-to-top button ---------- */
  function buildScrollTop() {
    const btn = document.createElement('button');
    btn.id = 'scroll-top';
    btn.innerHTML = '↑';
    btn.title = 'Back to top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.pageYOffset > 400);
    }, { passive: true });
  }

  /* ---------- 9. Active-section highlight in drawer while scrolling ---------- */
  function setupScrollSpy() {
    if (!('IntersectionObserver' in window) || levelCards.length === 0) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.drawer-item').forEach(a => {
            a.classList.toggle('active', a.dataset.target === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    levelCards.forEach(c => io.observe(c));
  }

  /* ---------- 10. Global progress (all inputs on page) ---------- */
  function updateGlobalProgress() {
    const inputs = document.querySelectorAll('.exercise-input, .exercise-textarea');
    if (!inputs.length) return;
    let filled = 0;
    inputs.forEach(i => { if (i.value.trim()) filled++; });
    const pct = Math.round(filled / inputs.length * 100);
    const pctEl  = document.getElementById('drawer-pct');
    const fillEl = document.getElementById('drawer-progress-fill');
    if (pctEl)  pctEl.textContent   = pct + '%';
    if (fillEl) fillEl.style.width  = pct + '%';
    const mainBar = document.getElementById('progress-bar');
    if (mainBar) mainBar.style.width = pct + '%';
    const mainLbl = document.getElementById('progress-label');
    if (mainLbl) mainLbl.textContent = pct + '%';
  }

  /* ---------- 11. Keyboard navigation (arrow keys between tenses) ---------- */
  document.addEventListener('keydown', function (e) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    const drawerOpen = document.body.classList.contains('drawer-open');
    if (drawerOpen) return;
    if (e.key === 'ArrowRight' && window.__nextPage) window.location = window.__nextPage;
    if (e.key === 'ArrowLeft'  && window.__prevPage) window.location = window.__prevPage;
  });

  /* ---------- 12. Initialise on DOM ready ---------- */
  function init() {
    // Skip chrome on index page (no tense header present)
    if (document.querySelector('.tense-header')) {
      buildTopBar();
      buildDrawer();
      buildScrollTop();
      setupScrollSpy();
    }
    updateGlobalProgress();
    document.querySelectorAll('.exercise-input').forEach(i =>
      i.addEventListener('input', updateGlobalProgress)
    );
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', init);
  else
    init();
})();
