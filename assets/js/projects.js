window.addEventListener("load", onload);
window.addEventListener("resize", onload);
addEventListener("scroll", onscroll);

function onload() {
  let project_area = document.querySelector(".projects > div");
  let projects = document.querySelectorAll(".project");
  let image = document.querySelector(".project-img");

  if (window.innerWidth < 1200) {
    image.classList.add("null");
  } else {
    image.style.maxWidth = project_area.offsetWidth / 2 - 16 * 2.5;
    image.classList.remove("null");
  }
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].offsetHeight < image.offsetHeight) {
      projects[i].style.minHeight = image.offsetHeight;
    }
  }

  image.style.top = (window.innerHeight - image.offsetHeight) / 2;
}

function onscroll() {
  let projects = document.querySelectorAll(".project");
  let image = document.querySelector(".project-img");
  let b = false;
  for (let i = 0; i < projects.length; i++) {
    let pos = projects[i].getBoundingClientRect().top;
    let height = projects[i].getBoundingClientRect().height;
    if (pos < window.innerHeight / 2 && pos + height > window.innerHeight / 2) {
      image.src = "assets/img/Projects/" + i + ".png";
      projects[i].classList.remove("inactive");
      b = true;
    } else {
      projects[i].classList.add("inactive");
    }
  }
  if (b) {
    image.classList.remove("img-inactive");
  } else {
    image.classList.add("img-inactive");
  }
}
