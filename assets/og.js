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

  /* Self-playing film with a sound toggle.
     Autoplay is only ever allowed while a film is silent, so the film starts
     muted and the button does the asking. Three things are deliberate here.
     One: autoplay is started from here rather than from an autoplay attribute,
     so reduced motion and Data Saver can opt out before 13MB is fetched, and so
     a blocked play (iOS Low Power Mode, for one) simply leaves the poster and
     the play button sitting there. Two: turning the sound on stops the loop and
     restarts the reel, because hearing a highlight reel from the middle is worse
     than a one-second jump, and audio that repeats forever is rude. Three: the
     film pauses when it scrolls out of sight and picks up when it comes back,
     unless the visitor paused it themselves. */
  document.querySelectorAll("[data-video]").forEach(function (frame) {
    var video = frame.querySelector("video");
    var btn = frame.querySelector(".btn-sound");
    if (!video || !btn) return;

    var label = btn.querySelector(".btn-sound__text");
    var noop = function () {};
    var attempt = function () { var p = video.play(); if (p && p.catch) p.catch(noop); };

    var paint = function () {
      var text = video.muted ? "Turn sound on" : "Mute";
      btn.classList.toggle("is-muted", video.muted);
      btn.setAttribute("aria-label", text);
      if (label) label.textContent = text;
    };

    var neverUnmuted = true;
    btn.addEventListener("click", function () {
      video.muted = !video.muted;
      if (!video.muted) {
        video.loop = false;
        if (neverUnmuted) { neverUnmuted = false; video.currentTime = 0; }
        attempt();
      }
      paint();
    });
    /* The native controls carry a mute of their own, so follow the film. */
    video.addEventListener("volumechange", paint);
    paint();
    frame.classList.add("is-live");

    var conn = navigator.connection || {};
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || conn.saveData === true) return;

    video.muted = true;
    video.preload = "auto";

    if ("IntersectionObserver" in window) {
      /* Starting from the observer rather than from here means a film further
         down a page never fetches itself until it is actually looked at. */
      var autoPaused = true;
      new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              if (autoPaused) { autoPaused = false; attempt(); }
            } else if (!video.paused) {
              autoPaused = true;
              video.pause();
            }
          });
        },
        { threshold: 0.2 }
      ).observe(video);
    } else {
      attempt();
    }
  });

})();
