/* Openground site behaviour: nav, reveals, quotes, tabs, form branching. */
(function () {
  "use strict";

  /* Sticky nav shadow */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Mobile menu */
  var burger = document.querySelector(".nav__burger");
  var links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-locked", open);
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-locked");
      }
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }
  /* Safety net: never leave content invisible if the observer misses */
  setTimeout(function () {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }, 1600);

  /* Quote rotator */
  var rotator = document.querySelector("[data-quotes]");
  if (rotator) {
    var slides = rotator.querySelectorAll(".quote-slide");
    var dots = rotator.querySelectorAll(".quote-dot");
    var current = 0;
    var timer = null;
    var show = function (i) {
      current = i;
      slides.forEach(function (s, n) { s.classList.toggle("is-active", n === i); });
      dots.forEach(function (d, n) { d.classList.toggle("is-active", n === i); });
    };
    var next = function () { show((current + 1) % slides.length); };
    var start = function () { timer = setInterval(next, 8000); };
    var stop = function () { clearInterval(timer); };
    dots.forEach(function (d, n) {
      d.addEventListener("click", function () { stop(); show(n); start(); });
    });
    rotator.addEventListener("mouseenter", stop);
    rotator.addEventListener("mouseleave", start);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) start();
  }

  /* Year 12 / Year 13 switch */
  var switchEl = document.querySelector("[data-switch]");
  if (switchEl) {
    var tabs = switchEl.querySelectorAll(".switch__btn");
    var panels = document.querySelectorAll(".switch-panel");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
        panels.forEach(function (p) {
          p.hidden = p.id !== tab.getAttribute("aria-controls");
        });
      });
    });
  }

  /* Get Involved: role radios drive the branches */
  var roleRadios = document.querySelectorAll('input[name="I-would-like-to-be"]');
  if (roleRadios.length) {
    var branches = document.querySelectorAll("[data-og-branch]");
    var applyBranches = function () {
      var v = "";
      roleRadios.forEach(function (r) { if (r.checked) v = r.value.toLowerCase(); });
      branches.forEach(function (b) {
        var show = b.getAttribute("data-og-branch") === v;
        b.hidden = !show;
        /* A required field inside a hidden branch blocks submit and cannot be
           focused to show the message, so required only applies while visible. */
        b.querySelectorAll("[data-req]").forEach(function (f) {
          if (show) f.setAttribute("required", "");
          else f.removeAttribute("required");
        });
      });
      document.querySelectorAll(".persona-btn").forEach(function (c) {
        var input = c.querySelector("input");
        c.classList.toggle("is-active", !!(input && input.checked));
      });
    };
    roleRadios.forEach(function (r) { r.addEventListener("change", applyBranches); });
    applyBranches();
  }
})();
