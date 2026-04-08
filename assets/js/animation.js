window.addEventListener("load", onload);
window.addEventListener("scroll", onscroll);

async function sleep(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

async function onload() {
  document.body.style.visibility = "visible";
  let home = document.querySelector(".home > div");
  let home_decendent = home.children;
  for (let i = 0; i < home_decendent.length; i++) {
    home_decendent[i].classList.add("appear-top");
    await sleep(100);
  }
  document.querySelector(".home > img").classList.add("appear-top");
}

function onscroll() {
  let h2 = document.querySelectorAll("h2:not(#Contacts > h2)");
  for (let i = 0; i < h2.length; i++) {
    pos = h2[i].getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      h2[i].classList.add("appear-top");
    }
  }
  let skills = document.querySelectorAll(".skill-grid > div");
  let animations = ["appear-left", "appear-right", "appear-bottom"];
  for (let i = 0; i < skills.length; i++) {
    pos = skills[i].getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      skills[i].classList.add(animations[i]);
    }
  }
}
