const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  overlay.classList.toggle("fade");
}

hamburger.addEventListener("click", toggleMenu);
