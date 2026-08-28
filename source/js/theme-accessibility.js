(function () {
  "use strict";

  var main = document.querySelector("main");
  if (main) {
    if (!main.id) main.id = "main-content";

    var skipLink = document.createElement("a");
    skipLink.className = "fluid-skip-link";
    skipLink.href = "#" + main.id;
    skipLink.textContent = "跳到主要内容";
    document.body.insertBefore(skipLink, document.body.firstChild);

    var generatedTitle = main.querySelector('h1[style*="display: none"]');
    if (generatedTitle) {
      generatedTitle.removeAttribute("style");
      generatedTitle.classList.add("fluid-sr-only");
      if (/^\/notes(?:\/page\/\d+)?\/?$/.test(window.location.pathname)) {
        generatedTitle.textContent = "Writing / 技术笔记";
      }
    }
  }

  var postTitle = document.getElementById("seo-header");
  if (postTitle) postTitle.classList.add("fluid-sr-only");

  var modalTitle = document.querySelector("#modalSearch .modal-title");
  if (modalTitle && !modalTitle.id) modalTitle.id = "ModalLabel";
})();
