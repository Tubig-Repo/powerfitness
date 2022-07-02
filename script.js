const menu = document.querySelector(".menu_container");
const links = document.querySelector(".links__container");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
// Navigation Slider
let navExpanded = false;
menu.addEventListener("click", function (e) {
  links.classList.toggle("expand_nav");
});

// Stikck Navigation

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
