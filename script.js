//Header variables
const menu = document.querySelector(".menu_container");
const links = document.querySelector(".links__container");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
// Slider Variables
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
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

//Sliders and Dot Function
let curSlide = 0;
let maxSlide = slides.length;

//Creating dot Buttons

// Dynamically Creating dots depending on the number of elements
const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};

//Sliding function
const goToSlide = function (slide) {
  slides.forEach((el, index) => {
    el.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};
// Dot Navigation function
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

// dots active styling function
const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((t) => t.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add(`dots__dot--active`);
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};

init();
