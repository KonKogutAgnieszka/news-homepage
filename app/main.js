const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".overlay__links > a");

function toggleMenu() {
  hamburger.classList.toggle("open");
  overlay.classList.toggle("fade");
}

hamburger.addEventListener("click", toggleMenu);
links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
