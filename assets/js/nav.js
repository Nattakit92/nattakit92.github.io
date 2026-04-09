window.addEventListener("load", onload);
window.addEventListener("resize", onload);

let show = true;
function onload() {
  let menu = document.querySelector(".menu");
  if (window.innerWidth > 500) {
    menu.classList.add("null");
  } else {
    menu.classList.remove("null");
  }
  let links = document.querySelectorAll("nav a");
  links.forEach((l) => l.addEventListener("click", () => menu_clicked()));
}

function menu_clicked() {
  let menu = document.querySelector(".menu");
  let nav = document.querySelector("nav");
  if (show) {
    menu.classList.add("show");
    nav.classList.add("show");
  } else {
    menu.classList.remove("show");
    nav.classList.remove("show");
  }
  show = !show;
}
