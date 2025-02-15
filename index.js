//Boton de Menu del navbar
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

window.addEventListener("scroll", () => {
  //HABILIDADES
  let habilidadesImg = document.querySelector(".habilidades-links");
  let positionHabilidades = habilidadesImg.getBoundingClientRect().top;
  let screenPositionH = window.innerHeight / 1.02;

  if (positionHabilidades < screenPositionH) {
    habilidadesImg.style.animation = "scroll 1.5s ease-out";
  }
  //PORTAFOLIO
  let portafolio = document.querySelector(".portafolio");
  let positionPortafolio = portafolio.getBoundingClientRect().top;
  let screenPositionP = window.innerHeight / 1.02;

  if (positionPortafolio < screenPositionP) {
    portafolio.style.animation = "scroll 1.5s ease-out";
  }
});
