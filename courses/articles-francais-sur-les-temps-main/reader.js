/* =========================================================
   Reader enhancements
   - Rebuilds the existing <header> into a reference-style hero
     (crumb pill + title + subtitle) with mood-aware coloring.
   - Builds a fixed hamburger (top-left) and moves the existing
     #highlight-toolbar (built by script.js) into it so every
     Verbs/Conjunctions/etc. click handler keeps working.
   - No page content is removed.
   ========================================================= */
(function () {
    'use strict';

    /* ---------- Mood metadata (matches index.html card colors) ---------- */
    var MOOD_META = {
        'Indicatif':    { key: 'indicatif',    label: 'Indicatif' },
        'Conditionnel': { key: 'conditionnel', label: 'Conditionnel' },
        'Subjonctif':   { key: 'subjonctif',   label: 'Subjonctif' },
        'Impératif':    { key: 'imperatif',    label: 'Impératif' },
        'Imperatif':    { key: 'imperatif',    label: 'Impératif' },
        'Other':        { key: 'other',        label: 'Other Forms' }
    };

    /* Short English subtitle per tense (keeps the hero honest & useful) */
    var SUBTITLES = {
        1:  'Current actions, habits, general truths, ongoing states',
        2:  'Completed past actions — avoir / être + past participle',
        3:  'Past descriptions — habits, backgrounds, ongoing states',
        4:  'The past of the past — what had already happened',
        5:  'Literary simple past — novels, history, formal writing',
        6:  'Literary pluperfect used with passé simple',
        7:  'Immediate future — aller + infinitive',
        8:  'Predictions, promises, formal future plans',
        9:  'What will have been done before a future moment',
        10: 'Just-happened events — venir de + infinitive',
        11: 'Polite requests, hypotheticals, and wishes',
        12: 'Regrets and what would have happened otherwise',
        13: 'Doubt, emotion, desire, necessity — most-used subjunctive',
        14: 'Subjunctive with completed actions',
        15: 'Literary concordance des temps',
        16: 'The rarest tense — literary subjunctive pluperfect',
        17: 'Commands, orders, and advice',
        18: 'Command that something be completed by a deadline',
        19: 'Present participle & gerund — "while doing"',
        20: 'The building block of every compound tense',
        21: 'Base form and its compound counterpart'
    };

    /* ---------- Header → Hero transformation ---------- */
    function transformHeader() {
        var header = document.querySelector('.container > header');
        if (!header || header.dataset.heroified === '1') return;

        var h1 = header.querySelector('h1');
        if (!h1) return;

        var raw = (h1.textContent || '').trim();
        // e.g. "Tense 1: Tense Form 1 : Indicatif — Présent"
        var m = raw.match(/^Tense\s+(\d+)\s*:\s*Tense\s+Form\s+\d+\s*:\s*([^—\-]+)\s*[—\-]\s*(.+)$/);
        if (!m) return;

        var num   = m[1];
        var mood  = m[2].trim();
        var name  = m[3].trim();
        var meta  = MOOD_META[mood] || MOOD_META['Other'];
        var sub   = SUBTITLES[parseInt(num, 10)] || '';

        header.classList.add('hero-section');
        header.classList.add('mood-' + meta.key);
        header.dataset.heroified = '1';

        header.innerHTML =
            '<div class="hero-crumb">' +
                '<span class="hero-num">' + num + '</span>' +
                '<span>' + meta.label + ' · Chapter ' + num + ' of 21</span>' +
            '</div>' +
            '<h1 class="hero-title">' + escapeHtml(name) + '</h1>' +
            (sub ? '<p class="hero-sub">' + escapeHtml(sub) + '</p>' : '');
    }

    function escapeHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /* ---------- Hamburger button + slide-out panel ---------- */
    function buildHamburger() {
        if (document.getElementById('reader-hamburger')) return;

        var btn = document.createElement('button');
        btn.id = 'reader-hamburger';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Open highlight menu');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span></span><span></span><span></span>';

        var menu = document.createElement('div');
        menu.id = 'reader-menu';
        menu.setAttribute('role', 'menu');
        menu.innerHTML =
            '<div class="reader-menu-title">Highlight</div>' +
            '<div id="reader-menu-slot"></div>';

        document.body.appendChild(btn);
        document.body.appendChild(menu);

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = menu.classList.toggle('open');
            btn.classList.toggle('open', open);
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        document.addEventListener('click', function (e) {
            if (!menu.classList.contains('open')) return;
            if (menu.contains(e.target) || btn.contains(e.target)) return;
            menu.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menu.classList.contains('open')) {
                menu.classList.remove('open');
                btn.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function moveToolbarIntoMenu() {
        var toolbar = document.getElementById('highlight-toolbar');
        var slot    = document.getElementById('reader-menu-slot');
        if (!toolbar || !slot) return false;
        if (slot.contains(toolbar)) return true;
        slot.appendChild(toolbar);
        return true;
    }

    function init() {
        transformHeader();
        buildHamburger();

        if (moveToolbarIntoMenu()) return;
        var tries = 0;
        var timer = setInterval(function () {
            tries++;
            if (moveToolbarIntoMenu() || tries > 40) clearInterval(timer);
        }, 50);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
