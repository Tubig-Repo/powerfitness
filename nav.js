const menu = document.querySelector(".menu_container");
const links = document.querySelector(".links__container");
let navExpanded = false;
menu.addEventListener("click", function (e) {
  links.classList.toggle("expand_nav");
});
