/* =======================================================================
   APP LOGIC  —  renders content from data.js and powers interactions.
   You normally won't need to edit this file. All your content lives in
   data.js. Touch this only if you want to change how things behave.
   ======================================================================= */
(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------------- ICONS (inline SVG, no emoji) ---------------------- */
  const I = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1.5 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.9H5.1L17 20z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.5 31 31 0 0 0-.4-4.5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>',
    dribbble: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M5 7c4 4 9 5 14 4M3 13c6-1 11 1 14 6M9 3c4 5 6 11 5 18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 7 9-7"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 4h6v6M20 4l-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z"/></svg>',
    /* achievement icons */
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M9 18h6M10 18v-2M14 18v-2M8 21h8"/></svg>',
    chess: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4a3 3 0 0 1 6 0c0 1.5-1 2-1 3l1 4H8l1-4c0-1-1-1.5-1-3z"/><path d="M7 15h10l-1 3H8l-1-3zM6 21h12"/></svg>',
    cooking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9a5 5 0 0 1 10 0c1.7 0 1.7 3-1 3H8c-2.7 0-2.7-3-1-3z"/><path d="M8 12v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15" r="6"/><path d="M9 9L6 2M15 9l3-7M11 13l1-1v5M10 17h4"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z"/><path d="M19 17H6a2 2 0 0 0-2 2"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/><circle cx="12" cy="13" r="3.5"/></svg>'
  };
  const icon = (name) => I[name] || I.star;

  /* ---------------------- TEXT CONTENT ---------------------- */
  function setText(sel, val) { const el = $(sel); if (el && val != null) el.textContent = val; }

  document.title = (D.name || "Portfolio") + " — Portfolio";
  setText("#brandName", D.name);
  setText("#brandMark", D.initials);
  setText("#heroName", D.name);
  setText("#heroTagline", D.tagline);
  setText("#footerName", D.name);
  setText("#footerNote", D.footerNote);
  setText("#aboutHeading", D.about && D.about.heading);

  // availability
  if (D.available === false) {
    const dot = $("#availDot"); if (dot) dot.style.background = "var(--text-mute)";
    setText("#availText", "Currently busy");
  }

  /* ---------------------- HERO PHOTO ---------------------- */
  (function photo() {
    const img = $("#profileImg"), fb = $("#photoFallback"), badge = $("#photoBadge");
    if (fb) fb.textContent = D.initials || "";
    if (badge) badge.innerHTML = icon("sparkle") + "<span>" + esc(D.role || "") + "</span>";
    if (img && D.profilePhoto) {
      img.alt = (D.name || "") + " — profile photo";
      img.onload = () => { if (fb) fb.style.display = "none"; };
      img.onerror = () => { img.style.display = "none"; };  // keep gradient fallback
      img.src = D.profilePhoto;
    } else if (img) {
      img.style.display = "none";
    }
  })();

  /* ---------------------- ROTATING WORDS ---------------------- */
  (function rotator() {
    const el = $("#rotator");
    const words = D.rotatingWords && D.rotatingWords.length ? D.rotatingWords : [D.role || "Creator"];
    if (!el) return;
    if (reduceMotion || words.length === 1) { el.textContent = words[0]; return; }
    let w = 0, c = 0, deleting = false;
    function tick() {
      const word = words[w];
      el.textContent = deleting ? word.slice(0, --c) : word.slice(0, ++c);
      let delay = deleting ? 45 : 95;
      if (!deleting && c === word.length) { delay = 1500; deleting = true; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
      setTimeout(tick, delay);
    }
    tick();
  })();

  /* ---------------------- SOCIAL LINKS ---------------------- */
  function socialMarkup(s) {
    return `<a class="social-link" href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${icon(s.icon)}</a>`;
  }
  (function socials() {
    const list = D.socials || [];
    const html = list.map(socialMarkup).join("");
    const hero = $("#heroSocials"), contact = $("#contactSocials");
    if (hero) hero.innerHTML = html;
    if (contact) contact.innerHTML = html;
  })();

  /* ---------------------- STATS ---------------------- */
  (function stats() {
    const wrap = $("#heroStats");
    if (!wrap || !D.stats) return;
    wrap.innerHTML = D.stats.map((s, i) => `
      <div class="stat reveal" style="transition-delay:${i * 70}ms">
        <div class="stat-value" data-count="${Number(s.value) || 0}" data-suffix="${esc(s.suffix || "")}">0</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`).join("");
  })();

  function animateCount(el) {
    const target = Number(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target.toLocaleString() + suffix; return; }
    const dur = 1400, start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------------- ABOUT ---------------------- */
  (function about() {
    const a = D.about || {};
    const txt = $("#aboutText");
    if (txt) txt.innerHTML = (a.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("");
    const facts = $("#aboutFacts");
    if (facts) facts.innerHTML = (a.facts || []).map(f =>
      `<div class="fact"><span class="fact-label">${esc(f.label)}</span><span class="fact-value">${esc(f.value)}</span></div>`).join("");
  })();

  /* ---------------------- PROJECTS ---------------------- */
  (function projects() {
    const grid = $("#projectsGrid");
    if (!grid) return;
    grid.innerHTML = (D.projects || []).map((p, i) => {
      const cover = p.image
        ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" onerror="this.remove()" />`
        : `<div class="project-cover-fallback">${esc((p.title || "?").charAt(0))}</div>`;
      const tags = (p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("");
      const links = [
        p.link ? `<a class="project-link" href="${esc(p.link)}" target="_blank" rel="noopener">Live ${I.external}</a>` : "",
        p.repo ? `<a class="project-link" href="${esc(p.repo)}" target="_blank" rel="noopener">Code ${I.code}</a>` : ""
      ].join("");
      return `
        <div class="project reveal ${p.featured ? "featured" : ""}" style="transition-delay:${i * 60}ms">
          <article class="project-card">
            <div class="project-cover">${cover}</div>
            <div class="project-body">
              <h3 class="project-title">${esc(p.title)}</h3>
              <p class="project-desc">${esc(p.description)}</p>
              ${tags ? `<div class="project-tags">${tags}</div>` : ""}
              ${links ? `<div class="project-links">${links}</div>` : ""}
            </div>
          </article>
        </div>`;
    }).join("");
  })();

  /* ---------------------- SKILLS ---------------------- */
  (function skills() {
    const grid = $("#skillsGrid");
    if (!grid) return;
    grid.innerHTML = (D.skills || []).map((cat, i) => `
      <div class="skill-card reveal" style="transition-delay:${i * 70}ms">
        <h3 class="skill-cat">${esc(cat.category)}</h3>
        ${(cat.items || []).map(s => `
          <div class="skill-item">
            <div class="skill-row"><span>${esc(s.name)}</span><span>${Number(s.level) || 0}%</span></div>
            <div class="skill-bar"><div class="skill-fill" data-level="${Number(s.level) || 0}"></div></div>
          </div>`).join("")}
      </div>`).join("");
  })();

  /* ---------------------- TIMELINE ---------------------- */
  (function timeline() {
    const tl = $("#timeline");
    const list = D.experience || [];
    if (!tl) return;
    if (!list.length) { const sec = $("#journey"); if (sec) sec.style.display = "none"; return; }
    tl.innerHTML = list.map((e, i) => `
      <div class="tl-item reveal" style="transition-delay:${i * 70}ms">
        <div class="tl-date">${esc(e.date)}</div>
        <h3 class="tl-title">${esc(e.title)}</h3>
        <div class="tl-place">${esc(e.place)}</div>
        <p class="tl-desc">${esc(e.description)}</p>
      </div>`).join("");
  })();

  /* ---------------------- CONTACT ---------------------- */
  (function contact() {
    const c = D.contact || {};
    setText("#contactHeading", c.heading);
    setText("#contactText", c.text);
    const btn = $("#contactBtn");
    if (btn) { btn.textContent = c.buttonLabel || "Say hello"; btn.href = "mailto:" + (D.email || ""); }
    // resume button (optional)
    if (D.resumeUrl) {
      const cta = $("#navCta");
      if (cta) { cta.innerHTML = "Resume " + I.download; cta.href = D.resumeUrl; cta.target = "_blank"; cta.rel = "noopener"; cta.removeAttribute("data-route"); }
    }
  })();

  /* ---------------------- DOCUMENTATION (achievements) ---------------------- */
  const docsState = { filter: "All" };
  (function docsFilters() {
    const wrap = $("#docsFilters");
    const filters = D.achievementFilters && D.achievementFilters.length ? D.achievementFilters : ["All"];
    if (!wrap) return;
    wrap.innerHTML = filters.map((f, i) =>
      `<button class="filter-chip ${i === 0 ? "active" : ""}" role="tab" data-filter="${esc(f)}">${esc(f)}</button>`).join("");
    wrap.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      $$(".filter-chip", wrap).forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      docsState.filter = chip.dataset.filter;
      renderDocs();
    });
  })();

  function renderDocs() {
    const grid = $("#docsGrid"), empty = $("#docsEmpty");
    if (!grid) return;
    const all = D.achievements || [];
    const list = docsState.filter === "All" ? all : all.filter(a => a.category === docsState.filter);
    if (empty) empty.hidden = list.length > 0;
    grid.innerHTML = list.map((a, i) => {
      const cover = a.image ? `<div class="ach-cover"><img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy" onerror="this.closest('.ach-cover').remove()"/></div>` : "";
      const metric = a.metric && a.metric.value
        ? `<div class="ach-metric"><span class="ach-metric-value">${esc(a.metric.value)}</span><span class="ach-metric-label">${esc(a.metric.label || "")}</span></div>` : "";
      const link = a.link ? `<a class="ach-link" href="${esc(a.link)}" target="_blank" rel="noopener">View proof ${I.external}</a>` : "";
      return `
        <article class="ach-card reveal" style="transition-delay:${i * 50}ms">
          <div class="ach-top">
            <div class="ach-icon">${icon(a.icon)}</div>
            <span class="ach-date">${esc(a.date || "")}</span>
          </div>
          ${cover}
          <span class="ach-cat-pill">${esc(a.category || "")}</span>
          <h3 class="ach-title">${esc(a.title)}</h3>
          ${metric}
          <p class="ach-desc">${esc(a.description)}</p>
          ${link}
        </article>`;
    }).join("");
    revealObserve(grid);
  }
  renderDocs();

  /* ---------------------- VIEW ROUTING (Portfolio <-> Documentation) ---- */
  const views = { portfolio: $("#view-portfolio"), docs: $("#view-docs") };
  function showView(name, push) {
    const target = views[name] ? name : "portfolio";
    Object.entries(views).forEach(([k, el]) => { if (el) el.classList.toggle("view--active", k === target); });
    $$(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.route === target && (target === "docs" ? l.classList.contains("nav-link--accent") : false)));
    if (target === "portfolio") syncScrollSpy();
    if (push) history.replaceState(null, "", target === "docs" ? "#docs" : "#home");
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    requestAnimationFrame(() => revealObserve(views[target]));
  }

  // Intercept clicks: docs links switch view; portfolio links switch to portfolio then scroll.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;
    const href = a.getAttribute("href");
    const route = a.dataset.route;
    if (href === "#docs" || route === "docs") {
      e.preventDefault(); closeMenu(); showView("docs", true); return;
    }
    if (route === "portfolio") {
      const id = href.slice(1);
      const wasDocs = views.docs && views.docs.classList.contains("view--active");
      if (wasDocs) {
        e.preventDefault(); showView("portfolio", true);
        setTimeout(() => { const t = document.getElementById(id); if (t) t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); }, 60);
      }
      closeMenu();
    }
  });
  if (location.hash === "#docs") showView("docs", false);

  /* ---------------------- MOBILE MENU ---------------------- */
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  if (menuBtn) menuBtn.innerHTML = I.menu;
  function closeMenu() { if (navLinks) navLinks.classList.remove("open"); if (menuBtn) { menuBtn.innerHTML = I.menu; menuBtn.setAttribute("aria-expanded", "false"); } }
  if (menuBtn) menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.innerHTML = open ? I.close : I.menu;
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  /* ---------------------- THEME TOGGLE ---------------------- */
  (function theme() {
    const btn = $("#themeToggle");
    const saved = localStorage.getItem("theme");
    const initial = saved || "dark";
    document.documentElement.setAttribute("data-theme", initial);
    const paint = () => { if (btn) btn.innerHTML = document.documentElement.getAttribute("data-theme") === "dark" ? I.sun : I.moon; };
    paint();
    if (btn) btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      paint();
    });
  })();

  /* ---------------------- SCROLL: navbar, progress, spy ---------------------- */
  const nav = $("#nav"), progress = $("#scrollProgress");
  const sections = ["home", "about", "work", "skills"].map(id => document.getElementById(id)).filter(Boolean);
  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 30);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    if (views.portfolio && views.portfolio.classList.contains("view--active")) syncScrollSpy();
    revealInViewport(document);
  }
  function syncScrollSpy() {
    const y = window.scrollY + 120;
    let current = "home";
    sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
    $$(".nav-link[data-route='portfolio']").forEach(l => {
      if (l.classList.contains("nav-link--accent")) return;
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // back to top
  const toTop = $("#toTop");
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  /* ---------------------- HERO SPOTLIGHT (mouse follow) ---------------------- */
  (function spotlight() {
    const sp = $("#heroSpotlight"), hero = $("#home");
    if (!sp || !hero || reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      sp.style.left = (e.clientX - r.left) + "px";
      sp.style.top = (e.clientY - r.top) + "px";
      sp.style.opacity = "1";
    });
    hero.addEventListener("mouseleave", () => { sp.style.opacity = "0"; });
  })();

  /* ---------------------- REVEAL ON SCROLL + trigger counters/bars ---------- */
  function triggerReveal(el) {
    if (!el || el.classList.contains("in")) return;
    el.classList.add("in");
    $$(".stat-value[data-count]", el).forEach(animateCount);
    $$(".skill-fill", el).forEach(f => { f.style.width = (Number(f.dataset.level) || 0) + "%"; });
  }

  // Fallback / belt-and-suspenders: reveal anything currently within the viewport.
  // (Some renderers don't fire IntersectionObserver for above-the-fold elements
  // until the first scroll, so we check rects directly too.) Hidden views have
  // zero-size rects and are safely skipped.
  function revealInViewport(root) {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    $$(".reveal", root || document).forEach(el => {
      if (el.classList.contains("in")) return;
      const r = el.getBoundingClientRect();
      if (r.width && r.height && r.top < vh * 0.95 && r.bottom > 0) triggerReveal(el);
    });
  }

  var io; // var (not let) so it is hoist-safe: revealObserve() is called early
          // by renderDocs(), before this line is reached in source order.
  function revealObserve(root) {
    root = root || document;
    if ("IntersectionObserver" in window) {
      if (!io) {
        io = new IntersectionObserver((entries) => {
          entries.forEach(entry => { if (entry.isIntersecting) { triggerReveal(entry.target); io.unobserve(entry.target); } });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      }
      $$(".reveal", root).forEach(el => { if (!el.classList.contains("in")) io.observe(el); });
    } else {
      $$(".reveal", root).forEach(triggerReveal);
    }
    revealInViewport(root);
  }

  revealObserve(document);
  window.addEventListener("load", () => revealInViewport(document));
  setTimeout(() => revealInViewport(document), 300);

})();
