    const fill = document.getElementById('progress-fill');
    const pct  = document.getElementById('progress-pct');
    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrolled  = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        fill.style.height = scrolled + '%';
        pct.textContent   = Math.round(scrolled) + '%';
    }
    window.addEventListener('scroll', updateProgress);
    updateProgress();

    document.addEventListener('keydown', function(e) {
        if (['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
        if (e.key === 'ArrowLeft') {
            const b = document.querySelector('.nav-button.prev');
            if (b && !b.classList.contains('disabled')) window.location.href = b.href;
        }
        if (e.key === 'ArrowRight') {
            const b = document.querySelector('.nav-button.next');
            if (b && !b.classList.contains('disabled')) window.location.href = b.href;
        }
    });