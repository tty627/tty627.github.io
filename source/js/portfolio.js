(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  if (!toggle) return;

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function activeTheme() {
    return root.dataset.theme || systemTheme();
  }

  function updateLabel() {
    var next = activeTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", next === "dark" ? "切换到深色主题" : "切换到浅色主题");
  }

  toggle.addEventListener("click", function () {
    var next = activeTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("Fluid_Color_Scheme", next);
      localStorage.removeItem("portfolio-theme");
    } catch (error) {}
    updateLabel();
  });

  updateLabel();
})();
