const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".header-navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Add Gsap Animation--------*
// =========================
// NAVBAR ANIMATION
// =========================

const navTl = gsap.timeline();

navTl
  .from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })

  .from(
    ".header-logo",
    {
      x: -80,
      opacity: 0,
      duration: 0.8,
    },
    "-=.6",
  )

  .from(
    ".header-navbar ul li",
    {
      y: -30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
    },
    "-=.5",
  )

  .from(
    ".header-navbar-btn",
    {
      x: 50,
      opacity: 0,
      duration: 0.6,
    },
    "-=.4",
  );

// Sticky Header-----------*
gsap.to(".header", {
  background: "#fff",

  boxShadow: "0 10px 40px rgba(0,0,0,.08)",

  scrollTrigger: {
    trigger: "body",
    start: "100 top",
    toggleActions: "play none none reverse",
  },
});
// Menu Hover-------*
document.querySelectorAll(".header-navbar ul li").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, {
      y: -3,
      duration: 0.25,
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      y: 0,
      duration: 0.25,
    });
  });
});
// Button Hover----*
const btn = document.querySelector(".header-navbar-btn button");

if (btn) {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.06,
      duration: 0.25,
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.25,
    });
  });
}
const heroTL = gsap.timeline();

heroTL
  .from(".hero-section-container-text-content span", {
    y: 40,
    opacity: 0,
    duration: 0.6,
  })

  .from(".hero-section-container-text-content h1", {
    y: 60,
    opacity: 0,
    duration: 0.8,
  })

  .from(".hero-section-container-text-content p", {
    y: 30,
    opacity: 0,
    duration: 0.6,
  })

  .from(".hero-content-btns", {
    y: 30,
    opacity: 0,
    duration: 0.6,
  });

// Scroll Animation------------*
gsap.from(".hero-section-container-text-content", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
  },

  opacity: 0,
  duration: 1,
});

// Button Hover Animations---------*
document.querySelectorAll(".hero-content-btns button").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.08,
      duration: 0.25,
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.25,
    });
  });
});

// Floating Backgraund-Effect----------*
gsap.to(".hero-section", {
  backgroundPosition: "50% 100%",

  ease: "none",

  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});
// =======================================
// ABOUT SECTION ANIMATION
// =======================================

const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // Left Image
  gsap.from(".about-left-side-content", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },

    x: -120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  // Right Content
  gsap.from(".about-right-side-content", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },

    x: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });
});
// About Heading---*
gsap.from(".about-right-side-content h2", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
  },

  y: 60,
  opacity: 0,
  duration: 1,
});
// About Paragraph------*
gsap.from(".about-right-side-content p", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 70%",
  },

  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
});
// About Button---------*
gsap.from(".about-right-side-content button", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 65%",
  },

  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
});
// ==========================================
// SERVICES SECTION ANIMATION
// ==========================================

gsap.from(".section-title", {
  scrollTrigger: {
    trigger: ".service-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },

  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});
// Portfolio Cards Strager---------*
gsap.from(".item", {
  scrollTrigger: {
    trigger: ".service-grid",
    start: "top 75%",
  },

  y: 80,
  opacity: 0,
  scale: 0.9,
  stagger: 0.18,
  duration: 1,
  ease: "power4.out",
});
// =====================================
// CONTACT CTA
// =====================================

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".contact-form-section",
      start: "top 75%",
    },
  })

  .from(".contact-form-left-side-text", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })

  .from(
    ".right-side-form-content",
    {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "-=.7",
  );

// Loader-------*
gsap.from(".right-side-form-content input, .right-side-form-content textarea", {
  scrollTrigger: {
    trigger: ".contact-form-section",
  },

  y: 40,
  opacity: 0,
  stagger: 0.12,
  duration: 0.6,
});
// Loader---------*
const loaderTl = gsap.timeline();

loaderTl

  .to(".loader-line span", {
    width: "100%",
    duration: 1.3,
    ease: "power2.inOut",
  })

  .to(".loader-content", {
    opacity: 0,
    scale: 0.95,
    duration: 0.4,
  })

  .to(".loader-wrapper", {
    yPercent: -100,
    duration: 1,
    ease: "power4.inOut",
  });

// Progress---------*
gsap.to(".progress-bar", {
  width: "100%",

  ease: "none",

  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
