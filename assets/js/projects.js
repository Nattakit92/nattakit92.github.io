window.addEventListener("load", onload);
window.addEventListener("resize", onload);
window.addEventListener("scroll", onscroll);

function onload() {
  document.body.style.display = "unset";
  let project_area = document.querySelector(".projects > div");
  let projects = document.querySelectorAll(".project");
  let images = document.querySelector(".projects-img");
  let image = document.querySelectorAll(".project-img");

  if (window.innerWidth < 1200) {
    image.forEach((i) => i.classList.remove("null"));
    images.classList.add("null");
  } else {
    image.forEach((i) => i.classList.add("null"));
    images.classList.remove("null");
    images.style.maxWidth = project_area.offsetWidth / 2 - 16 * 2.5 + "px";
  }
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].offsetHeight < images.offsetHeight) {
      projects[i].style.minHeight = images.offsetHeight + "px";
    }
    new Image().src = "assets/img/Projects/" + i + ".png";
  }

  images.style.top = (window.innerHeight - images.offsetHeight) / 2;
}

function onscroll() {
  let projects = document.querySelectorAll(".project");
  let images = document.querySelector(".projects-img");
  let b = false;
  for (let i = 0; i < projects.length; i++) {
    let pos = projects[i].getBoundingClientRect().top;
    let height = projects[i].getBoundingClientRect().height;
    if (pos < window.innerHeight / 2 && pos + height > window.innerHeight / 2) {
      images.src = "assets/img/Projects/" + i + ".png";
      projects[i].classList.remove("inactive");
      b = true;
    } else {
      projects[i].classList.add("inactive");
    }
  }
  if (b) {
    images.classList.remove("img-inactive");
  } else {
    images.classList.add("img-inactive");
  }
}
