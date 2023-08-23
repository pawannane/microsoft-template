const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav-links");
const navLink = document.querySelectorAll(".nav-link");
const html = document.querySelector("html");

//add active
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerNav.classList.toggle("active-header");
  html.classList.toggle("html-scroll");
})

//remove active
navLink.forEach(e => {
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active");
    headerNav.classList.remove("active-header");
    html.classList.remove("html-scroll");
  })
});

