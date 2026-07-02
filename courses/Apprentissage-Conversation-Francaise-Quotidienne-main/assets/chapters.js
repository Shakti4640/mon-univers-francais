/* ============================================================
   Chapters UX Layer
   Progressive enhancement — does NOT modify original content;
   it wraps / mirrors content to add interactivity.
   ============================================================ */
(function () {
  'use strict';

  // --- Chapter registry (titles must mirror index.html) -----
  const CHAPTERS = [
    { n: 0,  file: 'project-0.html',  phase: 'toc', title: 'Mastering French Sentence Structures' },

    { n: 1,  file: 'project-1.html',  phase: 1, title: '"I Exist, I Have Things"' },
    { n: 2,  file: 'project-2.html',  phase: 1, title: '"My Day in 20 Verbs"' },
    { n: 3,  file: 'project-3.html',  phase: 1, title: '"Pointing at the World"' },
    { n: 4,  file: 'project-4.html',  phase: 1, title: '"Asking Without Sounding Lost"' },
    { n: 5,  file: 'project-5.html',  phase: 1, title: '"Saying No in 10 Ways"' },
    { n: 6,  file: 'project-6.html',  phase: 1, title: '"I Want, I Need, I Can"' },
    { n: 7,  file: 'project-7.html',  phase: 1, title: '"Here, There, To, From"' },
    { n: 8,  file: 'project-8.html',  phase: 1, title: '"When Things Happen"' },

    { n: 9,  file: 'project-9.html',  phase: 2, title: '"What Happened Yesterday"' },
    { n: 10, file: 'project-10.html', phase: 2, title: '"How Things Used to Be"' },
    { n: 11, file: 'project-11.html', phase: 2, title: '"The Story Has Two Layers"' },
    { n: 12, file: 'project-12.html', phase: 2, title: '"What\'s About to Happen"' },
    { n: 13, file: 'project-13.html', phase: 2, title: '"Tell Them What to Do"' },
    { n: 14, file: 'project-14.html', phase: 2, title: '"I Wake Up, I Get Ready"' },
    { n: 15, file: 'project-15.html', phase: 2, title: '"Better, Worse, the Same"' },

    { n: 16, file: 'project-16.html', phase: 3, title: '"What Will Happen Someday"' },
    { n: 17, file: 'project-17.html', phase: 3, title: '"Could You, Would You"' },
    { n: 18, file: 'project-18.html', phase: 3, title: '"If This, Then That — Part 1"' },
    { n: 19, file: 'project-19.html', phase: 3, title: '"Don\'t Say the Noun Twice"' },
    { n: 20, file: 'project-20.html', phase: 3, title: '"The Two Magic Words: Y and En"' },
    { n: 21, file: 'project-21.html', phase: 3, title: '"The Person Who, The Thing That"' },
    { n: 22, file: 'project-22.html', phase: 3, title: '"Here\'s What I Think"' },
    { n: 23, file: 'project-23.html', phase: 3, title: '"I\'m Happy That, I\'m Afraid That"' },
    { n: 24, file: 'project-24.html', phase: 3, title: '"It Was Done, It Was Built"' },
    { n: 25, file: 'project-25.html', phase: 3, title: '"He Said That, She Told Me"' },
    { n: 26, file: 'project-26.html', phase: 3, title: '"You Must, You Have To"' },
    { n: 27, file: 'project-27.html', phase: 3, title: '"Maybe, Probably, Possibly"' },
    { n: 28, file: 'project-28.html', phase: 3, title: '"Because, Therefore, Since"' },
    { n: 29, file: 'project-29.html', phase: 3, title: '"But, However, Even Though"' },
    { n: 30, file: 'project-30.html', phase: 3, title: '"When, While, As Soon As"' },

    { n: 31, file: 'project-31.html', phase: 4, title: '"I Doubt It, I Wish It, I Fear It"' },
    { n: 32, file: 'project-32.html', phase: 4, title: '"Before That Happened, This Had Already Happened"' },
    { n: 33, file: 'project-33.html', phase: 4, title: '"If Things Were Different — Part 2"' },
    { n: 34, file: 'project-34.html', phase: 4, title: '"If Only I Had Known — Part 3"' },
    { n: 35, file: 'project-35.html', phase: 4, title: '"I Should Have, I Could Have"' },
    { n: 36, file: 'project-36.html', phase: 4, title: '"Stack the Pronouns"' },
    { n: 37, file: 'project-37.html', phase: 4, title: '"Make Someone Do Something"' },
    { n: 38, file: 'project-38.html', phase: 4, title: '"While Doing, By Doing"' },
    { n: 39, file: 'project-39.html', phase: 4, title: '"Never, Nothing, Nobody, Only"' },
    { n: 40, file: 'project-40.html', phase: 4, title: '"Suit Up or Dress Down"' },

    { n: 41, file: 'project-41.html', phase: 5, title: '"That He May Have Done It"' },
    { n: 42, file: 'project-42.html', phase: 5, title: '"It\'s Raining Cats — French Style"' },
    { n: 43, file: 'project-43.html', phase: 5, title: '"Euh, Bon, Ben, Du coup, Quoi"' },
    { n: 44, file: 'project-44.html', phase: 5, title: '"It\'s Not Bad — Meaning It\'s Amazing"' },
    { n: 45, file: 'project-45.html', phase: 5, title: '"On One Hand, On the Other"' },
    { n: 46, file: 'project-46.html', phase: 5, title: '"What If What If What If"' },
    { n: 47, file: 'project-47.html', phase: 5, title: '"How They Actually Talk"' },
    { n: 48, file: 'project-48.html', phase: 5, title: '"Read the Room"' },
    { n: 49, file: 'project-49.html', phase: 5, title: '"As They Say in French"' },
    { n: 50, file: 'project-50.html', phase: 5, title: '"Speak Like You Were Born There"' }
  ];

  const PHASES = {
    toc: { label: '📋 Table of Contents', color: '#64748b' },
    1:   { label: '🟢 Phase 1 · Foundation (Ch. 1–8)',   color: '#16a34a' },
    2:   { label: '🔵 Phase 2 · Building Blocks (Ch. 9–15)', color: '#2563eb' },
    3:   { label: '🟡 Phase 3 · Intermediate (Ch. 16–30)',  color: '#ca8a04' },
    4:   { label: '🟠 Phase 4 · Advanced (Ch. 31–40)',      color: '#ea580c' },
    5:   { label: '🔴 Phase 5 · Mastery (Ch. 41–50)',       color: '#dc2626' }
  };

  // ---- Detect current chapter from filename ---------------
  function currentChapter() {
    const name = (location.pathname.split('/').pop() || '').toLowerCase();
    return CHAPTERS.find(c => c.file.toLowerCase() === name) || null;
  }

  // ---- Build top bar + drawer + block progress -----------
  function buildTopbar(cur) {
    const bar = document.createElement('div');
    bar.className = 'ch-topbar';
    bar.innerHTML = `
      <button class="ch-hamburger" aria-label="Open chapters menu" title="Chapters menu">
        <span></span>
      </button>
      <div class="ch-title-wrap">
        <div class="ch-kicker">${cur ? (cur.phase === 'toc' ? 'Table of Contents' : 'Chapter ' + cur.n) : 'French Learning'}</div>
        <div class="ch-title">${cur ? cur.title : ''}</div>
      </div>
      <div class="ch-topbar-actions">
        <button class="ch-btn" id="ch-flash-btn" title="Flashcard mode for sentence tables">🎴 Cards</button>
        <a class="ch-btn ch-btn-icon" href="index.html" title="All chapters">🏠</a>
      </div>
    `;
    document.body.insertBefore(bar, document.body.firstChild);

    const blockbar = document.createElement('div');
    blockbar.className = 'ch-blockbar';
    blockbar.innerHTML = '<div class="ch-blockbar-fill"></div>';
    document.body.insertBefore(blockbar, bar.nextSibling);
  }

  function buildDrawer(cur) {
    const backdrop = document.createElement('div');
    backdrop.className = 'ch-drawer-backdrop';

    const drawer = document.createElement('aside');
    drawer.className = 'ch-drawer';

    let html = `
      <div class="ch-drawer-head">
        <h3>📚 Jump to Chapter</h3>
        <button class="ch-drawer-close" aria-label="Close">✕</button>
      </div>
      <div class="ch-drawer-body">
    `;
    let lastPhase = null;
    CHAPTERS.forEach(c => {
      if (c.phase !== lastPhase) {
        html += `<div class="ch-phase">${PHASES[c.phase].label}</div>`;
        lastPhase = c.phase;
      }
      const isCurrent = cur && cur.n === c.n && cur.phase === c.phase;
      const numLabel = c.phase === 'toc' ? '📋' : c.n;
      const numClass = c.phase === 'toc' ? 'ch-num toc' : 'ch-num';
      html += `
        <a class="ch-link ${isCurrent ? 'current' : ''}" href="${c.file}">
          <span class="${numClass}">${numLabel}</span>
          <span class="ch-link-title">${c.title}</span>
        </a>
      `;
    });
    html += '</div>';
    drawer.innerHTML = html;

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    const open = () => { drawer.classList.add('open'); backdrop.classList.add('open'); };
    const close = () => { drawer.classList.remove('open'); backdrop.classList.remove('open'); };

    document.querySelector('.ch-hamburger').addEventListener('click', open);
    backdrop.addEventListener('click', close);
    drawer.querySelector('.ch-drawer-close').addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    // Scroll current chapter into view inside drawer
    const currentLink = drawer.querySelector('.ch-link.current');
    if (currentLink) {
      setTimeout(() => currentLink.scrollIntoView({ block: 'center' }), 50);
    }
  }

  // ---- Rename "Project" to "Chapter" in-place -----------
  function relabelProjectToChapter(cur) {
    if (!cur) return;
    // <title>
    if (document.title) {
      document.title = document.title.replace(/Project\s+(\d+)/i, 'Chapter $1');
    }
    // Walk all text nodes in .content replacing "Project N" → "Chapter N"
    const root = document.querySelector('.content') || document.body;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(t => {
      const v = t.nodeValue;
      if (!/\bprojects?\b/i.test(v)) return;
      let nv = v;
      // "Projects 1–8" → "Chapters 1–8"
      nv = nv.replace(/\bPROJECTS\b/g, 'CHAPTERS')
             .replace(/\bProjects\b/g, 'Chapters')
             .replace(/\bprojects\b/g, 'chapters');
      // "Project 1" or "PROJECT 1" (with or without trailing number) → Chapter
      nv = nv.replace(/\bPROJECT(\s+\d+)?\b/g, function (m, n) { return 'CHAPTER' + (n || ''); })
             .replace(/\bProject(\s+\d+)?\b/g, function (m, n) { return 'Chapter' + (n || ''); })
             .replace(/\bproject(\s+\d+)?\b/g, function (m, n) { return 'chapter' + (n || ''); });
      if (nv !== v) t.nodeValue = nv;
    });
  }

  // ---- Humanize section headings (robotic → warm) -------
  // Maps are matched by the "signature" of the original heading
  // (emoji + KEY WORDS) so we survive small wording differences
  // across chapters.
  const HEADING_MAP = [
    { test: /\bHYPOTHETICAL PROBLEM\b/i,                    label: '🌍 The Moment You\'re In' },
    { test: /\bHOW TO APPROACH\b/i,                         label: '💡 The Way a French Mind Works' },
    { test: /\bHOW CAN WE SOLVE\b/i,                        label: '🧭 What You\'ll Need to Know',            collapsible: true },
    { test: /\bWHAT COULD BE DONE\b/i,                      label: '🗣️ How It Sounds in Real Life' },
    { test: /\bWHAT SHOULD DO\b/i,                          label: '🌱 Habits That Help You Grow',            collapsible: true },
    { test: /\bWHAT SHOULD NOT DO\b/i,                      label: '🚧 Traps to Sidestep',                    collapsible: true },
    { test: /\bWHEN TO USE WHAT\b/i,                        label: '🎭 Pick the Right One for the Moment',    collapsible: true },
    { test: /\bWHEN NOT TO USE\b/i,                         label: '🙅 When to Leave It Alone',               collapsible: true },
    { test: /\bCOMMON PITFALLS\b/i,                         label: '😅 Where Learners Usually Stumble',       collapsible: true },
    { test: /\bKEY TAKEAWAY\b/i,                            label: '💬 Carry This With You',                  collapsible: true },
    { test: /\bREADY TO BEGIN\b/i,                          label: '🌟 Ready to Begin' },
    // BRIDGE / COMPLETE — keep their original text, just tag as collapsible
    { test: /\bBRIDGE TO (CHAPTER|PROJECT)\b/i,             keepText: true,                                   collapsible: true },
    { test: /(CHAPTER|PROJECT)\s+\d+\s+COMPLETE\b/i,        keepText: true,                                   collapsible: true }
  ];

  function humanizeHeadings() {
    const root = document.querySelector('.content') || document.body;
    const headings = root.querySelectorAll('h1, h2');
    headings.forEach(h => {
      const raw = h.textContent;
      for (const m of HEADING_MAP) {
        if (m.test.test(raw)) {
          if (m.label) h.textContent = m.label;
          h.classList.add('ch-human-head');
          if (m.collapsible) h.classList.add('ch-collapsible');
          break;
        }
      }
    });
    // Inline "Structure unlocked" & "Critical rule unlocked" wording → warmer
    root.querySelectorAll('strong').forEach(s => {
      const t = s.textContent;
      if (/Structure unlocked/i.test(t))       s.textContent = s.textContent.replace(/Structure unlocked/i, 'The pattern you just picked up');
      if (/Critical rule unlocked/i.test(t))   s.textContent = s.textContent.replace(/Critical rule unlocked/i, 'A rule worth holding onto');
    });
  }

  // ---- Hide the duplicate chapter title at the top of the
  // content (the sticky topbar already shows it).
  function hideDuplicateTitle() {
    const root = document.querySelector('.content .px-2') || document.querySelector('.content');
    if (!root) return;
    // First h1 whose text contains "CHAPTER N" or "MASTERING FRENCH"
    const firstH1 = root.querySelector('h1');
    if (firstH1 && /\bCHAPTER\s+\d+|MASTERING FRENCH/i.test(firstH1.textContent)) {
      firstH1.classList.add('ch-hide');
      // If the immediate next element is the italic subtitle h2, keep it
      // but style it as a tagline.
      let next = firstH1.nextElementSibling;
      while (next && next.tagName === 'HR') next = next.nextElementSibling;
      if (next && next.tagName === 'H2' && next.querySelector('em')) {
        next.classList.add('ch-tagline');
      }
      // Hide the HR(s) immediately after the hidden title, if they only
      // separated it from the next section.
      let sib = firstH1.nextElementSibling;
      while (sib && sib.tagName === 'HR') {
        sib.classList.add('ch-hide');
        sib = sib.nextElementSibling;
      }
    }
  }

  // ---- Wrap each humanized H1 section into its own
  // collapsible (collapsed by default, NON-exclusive).
  // Also covers "BRIDGE TO CHAPTER N" / "CHAPTER N COMPLETE"
  // markers which may be H1 or H2.
  function wrapSections() {
    const root = document.querySelector('.content .px-2') || document.querySelector('.content');
    if (!root) return;

    // Snapshot candidates BEFORE any DOM mutation. Each candidate is a
    // direct child heading marked .ch-collapsible.
    const candidates = Array.from(root.querySelectorAll('h1.ch-collapsible, h2.ch-collapsible'))
      .filter(h => !h.classList.contains('ch-tagline'));
    if (!candidates.length) return;

    // For each candidate, find its "next stop" (the next humanized
    // heading) using document order BEFORE any wrapping happens.
    const allHumanHeads = Array.from(root.querySelectorAll('h1.ch-human-head, h2.ch-human-head'))
      .filter(h => !h.classList.contains('ch-tagline'));

    // Build a map: candidate -> stopNode (or null if last)
    const stops = new Map();
    candidates.forEach(h => {
      const myIndex = allHumanHeads.indexOf(h);
      const stop = allHumanHeads[myIndex + 1] || null;
      stops.set(h, stop);
    });

    candidates.forEach((h, idx) => {
      const stop = stops.get(h);
      const nodes = [];
      let sib = h.nextSibling;
      while (sib && sib !== stop) {
        const nxt = sib.nextSibling;
        nodes.push(sib);
        sib = nxt;
      }
      // If there's a trailing HR right before the stop, drop it
      // (it was the visual separator between sections).
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        if (n.nodeType === 1 && n.tagName === 'HR') {
          nodes.splice(i, 1);
          n.parentNode && n.parentNode.removeChild(n);
          break;
        }
        if (n.nodeType === 1) break; // stop at first real element
      }

      const wrap = document.createElement('section');
      wrap.className = 'ch-sec';
      wrap.dataset.idx = idx;

      const head = document.createElement('button');
      head.type = 'button';
      head.className = 'ch-sec-head';
      head.innerHTML = '<span class="ch-sec-title"></span><span class="ch-sec-chev">▼</span>';
      head.querySelector('.ch-sec-title').textContent = h.textContent;

      const body = document.createElement('div');
      body.className = 'ch-sec-body';

      nodes.forEach(nd => body.appendChild(nd));

      h.parentNode.insertBefore(wrap, h);
      wrap.appendChild(head);
      wrap.appendChild(body);
      h.parentNode.removeChild(h);

      head.addEventListener('click', () => {
        wrap.classList.toggle('open');
      });
    });
  }

  // ---- Wrap each "🔹 BLOCK ..." section into an accordion
  function wrapBlocks() {
    const root = document.querySelector('.content .px-2') || document.querySelector('.content');
    if (!root) return [];
    const heads = Array.from(root.querySelectorAll('h2')).filter(h =>
      /^\s*🔹\s*BLOCK\b/i.test(h.textContent)
    );
    if (heads.length === 0) return [];

    const blocks = [];
    heads.forEach((h, idx) => {
      // Collect nodes between this h2 and the next section boundary (next h2 / h1 / hr after an h2 that isn't inside)
      const nodes = [];
      let sib = h.nextSibling;
      while (sib) {
        if (sib.nodeType === 1) {
          const tag = sib.tagName;
          if (tag === 'H1') break;                       // next big section
          if (tag === 'H2' && /^\s*🔹\s*BLOCK\b/i.test(sib.textContent)) break;
          if (tag === 'HR') {
            // stop if HR is followed by H1 or another block H2
            let probe = sib.nextElementSibling;
            while (probe && probe.nodeType === 1 && probe.tagName === 'HR') probe = probe.nextElementSibling;
            if (!probe || probe.tagName === 'H1' ||
                (probe.tagName === 'H2' && /^\s*🔹\s*BLOCK\b/i.test(probe.textContent))) {
              // consume the HR and stop
              const toRemove = sib;
              sib = sib.nextSibling;
              toRemove.parentNode.removeChild(toRemove);
              break;
            }
          }
        }
        nodes.push(sib);
        sib = sib.nextSibling;
      }

      const wrap = document.createElement('section');
      wrap.className = 'ch-block'; // collapsed by default
      wrap.dataset.idx = idx;

      const head = document.createElement('div');
      head.className = 'ch-block-head';
      const titleText = h.textContent.replace(/^\s*🔹\s*/, '').replace(/^\s*BLOCK\s+[A-Z]\s*[—–-]?\s*/i, '').trim();
      head.innerHTML = `
        <span class="ch-block-tag">SCENE ${idx + 1}</span>
        <span class="ch-block-title">${titleText}</span>
        <span class="ch-block-done" title="Mark as read">✓</span>
        <span class="ch-block-chev">▼</span>
      `;
      const body = document.createElement('div');
      body.className = 'ch-block-body';

      // Move collected nodes into body
      nodes.forEach(nd => body.appendChild(nd));

      // Insert wrap before h and move h into wrap (but replace original h2 with a clean inner one)
      h.parentNode.insertBefore(wrap, h);
      wrap.appendChild(head);
      wrap.appendChild(body);
      h.parentNode.removeChild(h);

      // Toggle — exclusive (only one scene open at a time)
      head.addEventListener('click', (e) => {
        if (e.target.classList.contains('ch-block-done')) {
          wrap.classList.toggle('done');
          updateBlockProgress();
          e.stopPropagation();
          return;
        }
        const wasOpen = wrap.classList.contains('open');
        // close all other scenes
        document.querySelectorAll('.ch-block.open').forEach(x => {
          if (x !== wrap) x.classList.remove('open');
        });
        wrap.classList.toggle('open', !wasOpen);
      });

      blocks.push({ wrap, head, body, title: titleText });
    });

    // Add "Next Scene →" buttons (exclusive behaviour preserved)
    blocks.forEach((b, idx) => {
      if (idx < blocks.length - 1) {
        const nextWrap = document.createElement('div');
        nextWrap.className = 'ch-next-wrap';
        const btn = document.createElement('button');
        btn.className = 'ch-next-btn';
        btn.innerHTML = 'Next Scene →';
        btn.addEventListener('click', () => {
          // close all
          document.querySelectorAll('.ch-block.open').forEach(x => x.classList.remove('open'));
          b.wrap.classList.add('done');
          blocks[idx + 1].wrap.classList.add('open');
          blocks[idx + 1].wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
          updateBlockProgress();
        });
        nextWrap.appendChild(btn);
        b.body.appendChild(nextWrap);
      }
    });

    return blocks;
  }

  function updateBlockProgress() {
    const blocks = document.querySelectorAll('.ch-block');
    if (!blocks.length) return;
    const done = document.querySelectorAll('.ch-block.done').length;
    const pct = (done / blocks.length) * 100;
    const fill = document.querySelector('.ch-blockbar-fill');
    if (fill) fill.style.width = pct + '%';
  }

  // ---- Promote "Structure unlocked" paragraphs visually --
  function highlightStructures() {
    const root = document.querySelector('.content') || document.body;
    const paras = root.querySelectorAll('p');
    paras.forEach(p => {
      const strong = p.querySelector('strong');
      if (strong && /Structure unlocked|Critical rule unlocked/i.test(strong.textContent)) {
        p.classList.add('ch-struct');
      }
    });
  }

  // ---- Flashcard mode for sentence tables --------------
  // Detect tables whose headers include "French Sentence" and "English Meaning"
  function buildFlashcards() {
    const tables = document.querySelectorAll('.content table');
    tables.forEach(tbl => {
      const headers = Array.from(tbl.querySelectorAll('thead th')).map(th => th.textContent.trim().toLowerCase());
      const fIdx = headers.findIndex(h => /french/i.test(h));
      const eIdx = headers.findIndex(h => /english/i.test(h));
      const pIdx = headers.findIndex(h => /pattern|structure|engine/i.test(h));
      const nIdx = headers.findIndex(h => h === '#' || /^no\.?$/.test(h));
      if (fIdx < 0 || eIdx < 0) return;

      // Build alternate flash grid (hidden by default)
      const rows = Array.from(tbl.querySelectorAll('tbody tr'));
      if (rows.length < 3) return;

      const toggle = document.createElement('div');
      toggle.className = 'ch-flash-toggle';
      toggle.innerHTML = `
        <button data-mode="table" class="active">📋 Table</button>
        <button data-mode="flash">🎴 Flashcards</button>
      `;

      const grid = document.createElement('div');
      grid.className = 'ch-flashgrid';
      grid.style.display = 'none';
      rows.forEach(tr => {
        const cells = tr.querySelectorAll('td');
        const front = cells[fIdx] ? cells[fIdx].textContent.trim() : '';
        const back  = cells[eIdx] ? cells[eIdx].textContent.trim() : '';
        const pat   = pIdx >= 0 && cells[pIdx] ? cells[pIdx].textContent.trim() : '';
        const num   = nIdx >= 0 && cells[nIdx] ? cells[nIdx].textContent.trim() : '';
        if (!front) return;
        const card = document.createElement('div');
        card.className = 'ch-card';
        card.innerHTML = `
          <div class="ch-card-inner">
            <div class="ch-card-face ch-card-front">
              ${num ? `<div class="ch-card-num">#${num}</div>` : ''}
              <div class="ch-card-text">${front}</div>
              <div class="ch-card-hint">click to flip</div>
            </div>
            <div class="ch-card-face ch-card-back">
              <div class="ch-card-text">${back}</div>
              ${pat ? `<div class="ch-card-pattern">${pat}</div>` : ''}
            </div>
          </div>
        `;
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        grid.appendChild(card);
      });

      tbl.parentNode.insertBefore(toggle, tbl);
      tbl.parentNode.insertBefore(grid, tbl.nextSibling);

      toggle.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          toggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const mode = btn.dataset.mode;
          if (mode === 'flash') { tbl.style.display = 'none'; grid.style.display = ''; }
          else { tbl.style.display = ''; grid.style.display = 'none'; }
        });
      });

      tbl.dataset.flashable = '1';
    });
  }

  // Global flashcard toggle button in topbar
  function wireGlobalFlashToggle() {
    const btn = document.getElementById('ch-flash-btn');
    if (!btn) return;
    let on = false;
    btn.addEventListener('click', () => {
      on = !on;
      btn.classList.toggle('active', on);
      document.querySelectorAll('.ch-flash-toggle').forEach(tog => {
        const target = tog.querySelector(on ? '[data-mode="flash"]' : '[data-mode="table"]');
        if (target) target.click();
      });
    });
  }

  // ---- Mini-quiz per block (auto-generated from table rows)
  function buildMiniQuizzes(blocks) {
    blocks.forEach((b, idx) => {
      const table = b.body.querySelector('table');
      if (!table) return;
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim().toLowerCase());
      const fIdx = headers.findIndex(h => /french/i.test(h));
      const eIdx = headers.findIndex(h => /english/i.test(h));
      if (fIdx < 0 || eIdx < 0) return;
      const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr => {
        const cells = tr.querySelectorAll('td');
        return {
          fr: cells[fIdx] ? cells[fIdx].textContent.trim() : '',
          en: cells[eIdx] ? cells[eIdx].textContent.trim() : ''
        };
      }).filter(r => r.fr && r.en);
      if (rows.length < 4) return;

      const q = rows[Math.floor(Math.random() * rows.length)];
      const distractors = rows.filter(r => r.fr !== q.fr)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const options = [q, ...distractors].sort(() => 0.5 - Math.random());

      const quiz = document.createElement('div');
      quiz.className = 'ch-quiz';
      quiz.innerHTML = `
        <div class="ch-quiz-head">🎯 Quick Check — Scene ${idx + 1}</div>
        <div class="ch-quiz-q">How do you say: <strong>"${q.en}"</strong></div>
        <div class="ch-quiz-opts"></div>
        <div class="ch-quiz-feedback"></div>
      `;
      const opts = quiz.querySelector('.ch-quiz-opts');
      const fb = quiz.querySelector('.ch-quiz-feedback');
      options.forEach(opt => {
        const o = document.createElement('button');
        o.className = 'ch-quiz-opt';
        o.textContent = opt.fr;
        o.addEventListener('click', () => {
          opts.querySelectorAll('button').forEach(b => b.disabled = true);
          if (opt.fr === q.fr) {
            o.classList.add('correct');
            fb.textContent = '✅ Correct! Pattern locked in.';
            fb.className = 'ch-quiz-feedback show ok';
          } else {
            o.classList.add('wrong');
            opts.querySelectorAll('button').forEach(b => {
              if (b.textContent === q.fr) b.classList.add('correct');
            });
            fb.textContent = `❌ Close — the right one is: ${q.fr}`;
            fb.className = 'ch-quiz-feedback show bad';
          }
        });
        opts.appendChild(o);
      });

      // Insert before the Next-Block button if present, else append
      const nextWrap = b.body.querySelector('.ch-next-wrap');
      if (nextWrap) b.body.insertBefore(quiz, nextWrap);
      else b.body.appendChild(quiz);
    });
  }

  // ---- Boot -----------------------------------------
  function boot() {
    // If this is the index page, it has its own markup; only decorate with topbar & drawer.
    const isProjectPage = !!document.querySelector('.container .content .chat-message, .container .content .px-2');

    document.body.classList.add('chapters-enhanced');
    const cur = currentChapter();
    buildTopbar(cur);
    buildDrawer(cur);

    if (!isProjectPage) return; // index page stops here

    relabelProjectToChapter(cur);
    humanizeHeadings();
    hideDuplicateTitle();
    highlightStructures();
    // IMPORTANT: wrap scene blocks FIRST so they don't leak into
    // the collapsible-section wrappers when H1 stops are removed.
    const blocks = wrapBlocks();
    wrapSections();
    buildFlashcards();
    wireGlobalFlashToggle();
    if (blocks.length) buildMiniQuizzes(blocks);
    updateBlockProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
