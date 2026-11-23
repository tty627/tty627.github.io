(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var toastEl = document.getElementById("easter-toast");
  var toastTimer = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove("is-visible");
    }, 3000);
  }

  function burstSparkles(x, y) {
    if (prefersReducedMotion) return;
    var colors = ["#e8be66", "#7cb9f2", "#f6d78e", "#5695cc"];
    for (var i = 0; i < 7; i++) {
      var dot = document.createElement("span");
      var angle = (Math.PI * 2 * i) / 7 + (Math.random() - 0.5) * 0.4;
      var distance = 18 + Math.random() * 24;
      dot.className = "sparkle-dot";
      dot.style.left = x + "px";
      dot.style.top = y + "px";
      dot.style.background = colors[i % colors.length];
      dot.style.setProperty("--dx", Math.cos(angle) * distance + "px");
      dot.style.setProperty("--dy", Math.sin(angle) * distance + "px");
      document.body.appendChild(dot);
      window.setTimeout(function (node) {
        return function () {
          if (node.parentNode) node.parentNode.removeChild(node);
        };
      }(dot), 700);
    }
  }

  /* 1. Day / Night Theme Toggle synced with Hexo Fluid */
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    function systemTheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function activeTheme() {
      return root.dataset.theme || systemTheme();
    }

    function updateLabel() {
      var next = activeTheme() === "dark" ? "light" : "dark";
      toggle.setAttribute("aria-label", next === "dark" ? "切换到夜幕主题" : "切换到白昼主题");
    }

    toggle.addEventListener("click", function () {
      var next = activeTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      root.style.removeProperty("--backdrop-image");
      try {
        localStorage.setItem("Fluid_Color_Scheme", next);
        localStorage.removeItem("portfolio-theme");
      } catch (error) {}
      updateLabel();
    });

    updateLabel();
  }

  /* 2. Easter Egg #1: Light-Novel Quote Switcher */
  var quoteBtn = document.getElementById("quote-next");
  var quoteText = document.getElementById("quote-text");
  var quoteSource = document.getElementById("quote-source");

  if (quoteBtn && quoteText && quoteSource) {
    var quotes = [
      {
        text: "「如果明天你死了，我的人生也会在明天结束；如果你今天活下来，我今天也会活下去。」",
        source: "忍野忍 · 《物语系列》"
      },
      {
        text: "「就算迈出的一步很小，只要一直往前走，总能看到外面的世界。」",
        source: "洛琪希 · 《无职转生》"
      },
      {
        text: "「吾乃铁血、热血而又冷血的吸血鬼——顺便想要一个波堤甜甜圈。」",
        source: "忍野忍"
      },
      {
        text: "「没有什么魔法是一步到位的，耐心地把基础打牢才最可靠。」",
        source: "洛琪希 · 《无职转生》"
      },
      {
        text: "「Local CV 涨了 0.002，今晚值得一个甜甜圈。」",
        source: "Kaggle 日常"
      }
    ];
    var quoteIndex = 0;
    var quoteBody = quoteText.parentElement;

    quoteBtn.addEventListener("click", function (event) {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      var item = quotes[quoteIndex];

      if (quoteBody) quoteBody.classList.add("is-fading");
      window.setTimeout(function () {
        quoteText.textContent = item.text;
        quoteSource.textContent = item.source;
        if (quoteBody) quoteBody.classList.remove("is-fading");
      }, prefersReducedMotion ? 0 : 120);

      var rect = quoteBtn.getBoundingClientRect();
      burstSparkles(event.clientX || rect.left + rect.width / 2, event.clientY || rect.top + rect.height / 2);
    });
  }

  /* 4. Integrated Art Lightbox + Custom Backdrop Switch */
  var lightbox = document.getElementById("art-lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxTitle = document.getElementById("lightbox-title");
  var lightboxClose = document.getElementById("lightbox-close");
  var lightboxSetBg = document.getElementById("lightbox-set-bg");
  var currentArtSrc = "";

  if (lightbox && lightboxImg && lightboxTitle) {
    function closeLightbox() {
      lightbox.hidden = true;
    }

    document.querySelectorAll(".art-card[data-art-src]").forEach(function (card) {
      card.addEventListener("click", function () {
        currentArtSrc = card.getAttribute("data-art-src") || "";
        var title = card.getAttribute("data-art-title") || "";
        lightboxImg.src = currentArtSrc;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightbox.hidden = false;
      });
    });

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });

    if (lightboxSetBg) {
      lightboxSetBg.addEventListener("click", function () {
        if (currentArtSrc) {
          root.style.setProperty("--backdrop-image", 'url("' + currentArtSrc + '")');
          closeLightbox();
          showToast("已切换顶部氛围图，点击右上角昼夜按钮可恢复默认。");
        }
      });
    }
  }

  /* 5. Easter Egg #3: Footer Donut & Sky Badge */
  var eggBtn = document.getElementById("donut-egg");
  if (eggBtn) {
    var eggLines = [
      "投喂小忍成功：波堤甜甜圈 +1。",
      "水圣级祈祷：下一次提交 Public & Private 双涨！",
      "检测到深夜怪异波动：早点睡，别一直盯 LB 了。",
      "点右上角切换昼夜，可切换洛琪希与小忍的顶部插画。"
    ];
    var eggIndex = 0;

    eggBtn.addEventListener("click", function (event) {
      var rect = eggBtn.getBoundingClientRect();
      burstSparkles(event.clientX || rect.left + rect.width / 2, event.clientY || rect.top + rect.height / 2);
      showToast(eggLines[eggIndex]);
      eggIndex = (eggIndex + 1) % eggLines.length;
    });
  }
})();
