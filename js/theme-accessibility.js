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
    if (colorToggle) colorToggle.setAttribute("aria-label", "切换颜色主题");
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
})();
