
const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".header-navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);