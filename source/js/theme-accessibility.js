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
        generatedTitle.textContent = "文章";
      }
    }
  }

  var postTitle = document.getElementById("seo-header");
  if (postTitle) postTitle.classList.add("fluid-sr-only");

  var navToggle = document.getElementById("navbar-toggler-btn");
  if (navToggle) navToggle.setAttribute("aria-label", "打开或关闭导航");

  ["color-toggle-btn", "mobile-color-toggle-btn"].forEach(function (id) {
    var colorToggle = document.querySelector("#" + id + " a");
    if (colorToggle) colorToggle.setAttribute("aria-label", "切换昼夜主题");
  });

  var currentPath = window.location.pathname;
  var activeHref = currentPath.indexOf("/notes/") === 0 ? "/notes/" : currentPath;
  document.querySelectorAll("#navbarSupportedContent a.nav-link[href]").forEach(function (link) {
    if (link.getAttribute("href") === activeHref) {
      link.setAttribute("aria-current", "page");
    }
  });

  var modalTitle = document.querySelector("#modalSearch .modal-title");
  if (modalTitle && !modalTitle.id) modalTitle.id = "ModalLabel";

  /* Inject matching crescent emblem into Fluid navbar brand */
  var brand = document.querySelector(".navbar .navbar-brand");
  if (brand && !brand.querySelector(".fluid-brand-emblem")) {
    var emblem = document.createElement("span");
    emblem.className = "fluid-brand-emblem";
    emblem.setAttribute("aria-hidden", "true");
    emblem.innerHTML =
      '<svg viewBox="0 0 28 28" width="22" height="22" fill="none">' +
      '<circle cx="14" cy="14" r="11" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.2"/>' +
      '<path d="M16.2 7.2a7 7 0 1 0 4.9 12A5.8 5.8 0 1 1 16.2 7.2Z" fill="var(--tty-gold)"/>' +
      '<path d="M20 7.6l.65 1.75 1.75.65-1.75.65-.65 1.75-.65-1.75-1.75-.65 1.75-.65.65-1.75Z" fill="var(--tty-sky)"/>' +
      "</svg>";
    brand.insertBefore(emblem, brand.firstChild);
  }
})();
