// Keyboard navigation: ← previous chapter, → next chapter.
// Ignores key events when focus is in a text input or editable element.
(function () {
  function isTypingTarget(el) {
    if (!el) return false;
    const tag = el.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (el.isContentEditable) return true;
    return false;
  }

  document.addEventListener("keydown", function (e) {
    // Skip if a modifier is held — keep browser shortcuts intact.
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (isTypingTarget(e.target)) return;

    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

    const nav = document.querySelector(".chapter-nav");
    if (!nav) return;

    const links = nav.querySelectorAll("a");
    // Layout: [0] Prev, [1] Sommaire, [2] Next
    const target = e.key === "ArrowLeft" ? links[0] : links[links.length - 1];
    if (!target) return;
    if (target.classList.contains("disabled")) return;
    const href = target.getAttribute("href");
    if (!href) return;

    e.preventDefault();
    window.location.href = href;
  });
})();
