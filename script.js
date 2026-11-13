/* ============================================================
   Eude Ribeiro — Portfólio
   script.js
   ============================================================ */

/* ---------- Dados dos projetos ---------- */
const PROJECTS = {
  worlds: {
    kicker: "Rebranding · 2026",
    title: "UCI World Championships XCE",
    year: "2026",
    scope: "Rebranding, sistema visual e guidelines de aplicação",
    client: "UCI / City Mountainbike",
    desc: "Em 2025 fiz o Rebranding para a organização UCI World Championships XCE pensando na temporada 2026. Tudo foi aprovado junto à organização mundial de ciclistas. Todo o trabalho feito junto à Barbra Creative Studio.",
    images: [
      "assets/projects/uci-worlds/01.jpg",
      "assets/projects/uci-worlds/02.jpg",
      "assets/projects/uci-worlds/03.jpg",
      "assets/projects/uci-worlds/04.jpg",
      "assets/projects/uci-worlds/05.jpg",
      "assets/projects/uci-worlds/06.jpg",
      "assets/projects/uci-worlds/07.jpg",
      "assets/projects/uci-worlds/08.jpg",
      "assets/projects/uci-worlds/09.jpg",
      "assets/projects/uci-worlds/10.jpg",
      "assets/projects/uci-worlds/11.jpg",
      "assets/projects/uci-worlds/12.jpg",
    ],
  },
  uci: {
    kicker: "Social media · desde 2024",
    title: "UCI Mountain Bike XCE",
    year: "2026",
    scope: "Social media, direção de arte e design editorial",
    client: "City Mountainbike / UCI",
    desc: "Desde 2024 atendo a organização da UCI Mountain Bike XCE. Toda a comunicação visual é feita junto à Barbra Creative Studio: capas de posts, contagem regressiva, guia da prova, programação, onde assistir e cards de vencedores, além dos documentos institucionais, pórticos e comunicação da prova.",
    images: [
      "assets/projects/uci/01.jpg",
      "assets/projects/uci/02.jpg",
      "assets/projects/uci/03.jpg",
      "assets/projects/uci/04.jpg",
      "assets/projects/uci/05.jpg",
    ],
  },
  wall: {
    kicker: "Identidade visual",
    title: "Wall Artek",
    year: "",
    scope: "Identidade visual: símbolo, tipografia, cores e aplicações",
    client: "Wall Artek",
    desc: "Identidade visual da Wall Artek: símbolo em gradiente, tipografia NewBlack, paleta vibrante e um sistema de aplicações para uma marca que transforma espaços com identidade e inovação.",
    images: [
      "assets/projects/wall/01.jpg",
      "assets/projects/wall/02.jpg",
      "assets/projects/wall/03.jpg",
      "assets/projects/wall/04.jpg",
      "assets/projects/wall/05.jpg",
      "assets/projects/wall/06.jpg",
      "assets/projects/wall/07.jpg",
      "assets/projects/wall/08.jpg",
      "assets/projects/wall/09.jpg",
      "assets/projects/wall/10.jpg",
      "assets/projects/wall/11.jpg",
      "assets/projects/wall/12.jpg",
      "assets/projects/wall/13.jpg",
      "assets/projects/wall/14.jpg",
    ],
  },
  tsw: {
    kicker: "Design de produto · 2025",
    title: "TSW Hunch 24″",
    year: "2025",
    scope: "Design de produto, modelagem 3D e identidade",
    client: "TSW",
    url: "https://www.behance.net/gallery/235755151/Desenvolvimento-TSW-bike-aro-24",
    desc: "Desenvolvimento da bike aro 24″ Hunch, da TSW: geometria do quadro, modelagem 3D no Fusion 360, estudo de componentes e acabamento até a pintura e a apresentação final do produto.",
    images: [
      "assets/projects/tsw/01.webp",
      "assets/projects/tsw/02.webp",
      "assets/projects/tsw/03.webp",
      "assets/projects/tsw/04.webp",
      "assets/projects/tsw/05.webp",
      "assets/projects/tsw/06.webp",
      "assets/projects/tsw/07.webp",
      "assets/projects/tsw/08.webp",
      "assets/projects/tsw/09.webp",
      "assets/projects/tsw/10.webp",
      "assets/projects/tsw/11.webp",
      "assets/projects/tsw/12.webp",
    ],
  },
  mapa: {
    kicker: "Identidade visual · 2026",
    title: "Mapa da Receita",
    year: "2026",
    scope: "Identidade visual: logotipo, cores, tipografia e aplicações",
    client: "Mapa da Receita, por Manoel Assad",
    desc: "Identidade visual completa para o Mapa da Receita, por Manoel Assad: logotipo nas versões horizontal, vertical e monocromática, paleta de cores, tipografia e aplicações em cartão de visita, caderno e ambiente corporativo.",
    images: [
      "assets/projects/mapa/01.jpg",
      "assets/projects/mapa/02.jpg",
      "assets/projects/mapa/03.jpg",
      "assets/projects/mapa/04.jpg",
      "assets/projects/mapa/05.jpg",
      "assets/projects/mapa/06.jpg",
      "assets/projects/mapa/07.jpg",
      "assets/projects/mapa/08.jpg",
      "assets/projects/mapa/09.jpg",
      "assets/projects/mapa/10.jpg",
    ],
  },
  wifeed: {
    kicker: "Motion · Nova marca",
    title: "Wifeed",
    year: "",
    scope: "Motion design",
    client: "Wifeed",
    video: "assets/video/wifeed.mp4",
    desc: "Motion de apresentação da nova marca Wifeed — conceito, ritmo e linguagem visual em movimento.",
  },
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/* ---------- Ano e relógio ---------- */
const currentYear = new Date().getFullYear();
["year", "year-2"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.textContent = currentYear;
});

const clock = document.getElementById("clock");
if (clock) {
  const timeFormat = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });
  const tick = () => { clock.textContent = timeFormat.format(new Date()); };
  tick();
  setInterval(tick, 30000);
}

/* ---------- Navegação com scroll ---------- */
const nav = document.getElementById("site-nav");
const onScroll = () => {
  if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Entrada da página ---------- */
const markLoaded = () => document.body.classList.add("is-loaded");
requestAnimationFrame(() => requestAnimationFrame(markLoaded));

/* ---------- Reveal on scroll ---------- */
const revealItems = $$(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );
  revealItems.forEach((el) => io.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-in"));
}

/* Escalona a entrada dos cards dentro dos grids */
$$(".projects-grid, .about-cards, .services-cards, .footer-cards").forEach((grid) => {
  $$(".reveal", grid).forEach((el, i) => {
    if (!el.style.getPropertyValue("--d")) {
      el.style.setProperty("--d", `${Math.min(i * 0.08, 0.32)}s`);
    }
  });
});

/* ---------- Menu mobile ---------- */
const menu = document.getElementById("mobile-menu");
const menuToggle = document.getElementById("nav-toggle");
const menuClose = document.getElementById("mobile-close");
let menuReturnFocus = null;

function openMenu() {
  if (!menu) return;
  menuReturnFocus = document.activeElement;
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
  if (menuClose) menuClose.focus({ preventScroll: true });
}

function closeMenu(restoreFocus = true) {
  if (!menu || !menu.classList.contains("is-open")) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  if (restoreFocus && menuReturnFocus && typeof menuReturnFocus.focus === "function") {
    menuReturnFocus.focus({ preventScroll: true });
  }
}

if (menuToggle) menuToggle.addEventListener("click", openMenu);
if (menuClose) menuClose.addEventListener("click", () => closeMenu());

$$(".mobile-links a, .mobile-menu-foot a").forEach((link) => {
  link.addEventListener("click", () => closeMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (!menu || !menu.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeMenu();
    return;
  }

  if (event.key === "Tab") {
    const focusable = $$(
      'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      menu
    ).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu(false);
});

/* ---------- Carrossel de marcas ---------- */
const marquee = $(".marquee");
const marqueeTrack = document.getElementById("marquee-track");
const marqueeGroup = document.getElementById("marquee-group");

if (marquee && marqueeTrack && marqueeGroup) {
  const clone = marqueeGroup.cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("aria-hidden", "true");
  $$("img", clone).forEach((img) => { img.alt = ""; });
  marqueeTrack.appendChild(clone);

  const speed = 55; // px por segundo
  const resizeLoop = () => {
    const width = marqueeGroup.getBoundingClientRect().width;
    const duration = Math.max(28, width / speed);
    marqueeTrack.style.setProperty("--marquee-duration", `${duration}s`);
  };

  resizeLoop();
  marquee.classList.add("is-ready");
  window.addEventListener("load", resizeLoop);
  window.addEventListener("resize", resizeLoop);
}

/* ---------- Prévias em vídeo dos cards ---------- */
const coverVideos = $$("video.cover-video, video.hero-motion");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (coverVideos.length && "IntersectionObserver" in window) {
  const coverObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          const playing = video.play();
          if (playing && playing.catch) playing.catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.3 }
  );
  coverVideos.forEach((video) => {
    /* Com "reduzir movimento" ativo, o motion do topo fica parado */
    if (video.classList.contains("hero-motion") && reduceMotionQuery.matches) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }
    coverObserver.observe(video);
  });
}

/* ---------- Modal de projeto ---------- */
const modal = document.getElementById("project-modal");
const modalMedia = document.getElementById("modal-media");
const modalKicker = document.getElementById("modal-kicker");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalScope = document.getElementById("modal-scope");
const modalClient = document.getElementById("modal-client");
const modalYear = document.getElementById("modal-year");
const modalCount = document.getElementById("modal-count");
const modalLink = document.getElementById("modal-link");
const modalCloseBtn = modal ? $(".modal-close", modal) : null;

let galleryImages = [];
let galleryTitle = "";
let galleryIndex = 0;
let lastFocus = null;

function showGallery(index) {
  const total = galleryImages.length;
  if (!total) return;

  galleryIndex = (index + total) % total;

  const img = $(".gallery-img", modalMedia);
  if (!img) return;

  img.src = galleryImages[galleryIndex];
  img.alt = `${galleryTitle}: imagem ${galleryIndex + 1} de ${total}`;
  if (modalCount) modalCount.textContent = `${galleryIndex + 1} / ${total}`;

  new Image().src = galleryImages[(galleryIndex + 1) % total];
}

function openProject(key, trigger) {
  const project = PROJECTS[key];
  if (!project || !modal) return;

  lastFocus = trigger || null;
  galleryIndex = 0;

  if (project.images) {
    modalMedia.innerHTML = `
      <div class="gallery">
        <img class="gallery-img" src="${project.images[0]}" alt="${project.title}: imagem 1 de ${project.images.length}" />
        <button class="gallery-nav gallery-prev" type="button" aria-label="Imagem anterior">
          <svg class="icon" aria-hidden="true"><use href="#i-chevron-left"/></svg>
        </button>
        <button class="gallery-nav gallery-next" type="button" aria-label="Próxima imagem">
          <svg class="icon" aria-hidden="true"><use href="#i-chevron-right"/></svg>
        </button>
      </div>`;

    galleryImages = project.images;
    galleryTitle = project.title;
    if (modalCount) modalCount.textContent = `1 / ${galleryImages.length}`;
    showGallery(0);

    $(".gallery-prev", modalMedia).addEventListener("click", () => showGallery(galleryIndex - 1));
    $(".gallery-next", modalMedia).addEventListener("click", () => showGallery(galleryIndex + 1));
  } else if (project.video) {
    modalMedia.innerHTML = `<div class="gallery"><video class="gallery-video" controls autoplay playsinline preload="auto" src="${project.video}"></video></div>`;
    galleryImages = [];
    if (modalCount) modalCount.textContent = "Motion";
  } else {
    modalMedia.innerHTML = "";
    galleryImages = [];
    if (modalCount) modalCount.textContent = "";
  }

  if (modalKicker) modalKicker.textContent = project.kicker;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.desc;
  if (modalScope) modalScope.textContent = project.scope;
  if (modalClient) modalClient.textContent = project.client;
  if (modalYear) {
    modalYear.textContent = project.year;
    modalYear.parentElement.hidden = !project.year;
  }

  if (modalLink) {
    if (project.url) {
      modalLink.href = project.url;
      modalLink.hidden = false;
    } else {
      modalLink.hidden = true;
      modalLink.removeAttribute("href");
    }
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (modalCloseBtn) modalCloseBtn.focus({ preventScroll: true });
}

function closeProject() {
  if (!modal) return;

  const video = $("video", modalMedia);
  if (video) video.pause();

  galleryImages = [];
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  window.setTimeout(() => {
    if (!modal.classList.contains("is-open")) modalMedia.innerHTML = "";
  }, 320);

  if (lastFocus && typeof lastFocus.focus === "function") {
    lastFocus.focus({ preventScroll: true });
  }
}

$$(".project[data-project]").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    openProject(card.dataset.project, card);
  });
});

if (modal) {
  $$("[data-close]", modal).forEach((el) => {
    el.addEventListener("click", closeProject);
  });
}

document.addEventListener("keydown", (event) => {
  if (!modal || !modal.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeProject();
    return;
  }

  if (galleryImages.length && event.key === "ArrowRight") {
    showGallery(galleryIndex + 1);
    return;
  }
  if (galleryImages.length && event.key === "ArrowLeft") {
    showGallery(galleryIndex - 1);
    return;
  }

  if (event.key === "Tab") {
    const focusable = $$(
      'a[href], button:not([disabled]), video[controls], input, [tabindex]:not([tabindex="-1"])',
      modal
    ).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* Swipe no lightbox */
if (modalMedia) {
  let startX = 0;
  let startY = 0;

  modalMedia.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    },
    { passive: true }
  );

  modalMedia.addEventListener(
    "touchend",
    (event) => {
      if (!galleryImages.length) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        showGallery(galleryIndex + (dx < 0 ? 1 : -1));
      }
    },
    { passive: true }
  );
}

/* ---------- Formulário rápido ---------- */
const quickForm = document.getElementById("quick-form");
const quickEmail = document.getElementById("quick-email");
const formNote = document.getElementById("form-note");

if (quickForm && quickEmail && formNote) {
  quickForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = quickEmail.value.trim();

    if (!email || !quickEmail.checkValidity()) {
      formNote.textContent = "Digite um e-mail válido para continuar.";
      formNote.classList.remove("is-success");
      formNote.classList.add("is-error");
      quickEmail.focus();
      return;
    }

    const subject = encodeURIComponent("Contato pelo portfólio");
    const body = encodeURIComponent(
      `Olá, Eude!\n\nMeu e-mail é ${email}.\nGostaria de conversar sobre um projeto.\n`
    );

    formNote.textContent = "Abrindo seu aplicativo de e-mail…";
    formNote.classList.remove("is-error");
    formNote.classList.add("is-success");

    window.location.href = `mailto:eudejoviano@gmail.com?subject=${subject}&body=${body}`;
    quickForm.reset();

    window.setTimeout(() => {
      formNote.textContent = "";
      formNote.classList.remove("is-success");
    }, 7000);
  });
}
