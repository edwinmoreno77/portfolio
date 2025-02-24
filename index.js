//Boton de Menu del navbar
const navToggle = document.querySelector(".nav-toggle");
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

toggle.addEventListener("click", () => {
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

//  CERTIFICACIONES
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");

function moveSlide(direction, event) {
  if (event) event.preventDefault();

  const itemWidth = items[0].offsetWidth; // Ancho de un elemento
  const maxScroll = carousel.scrollWidth - carousel.clientWidth; // Máximo scroll posible
  let newScroll = carousel.scrollLeft + itemWidth * direction;

  // Ajustar newScroll para que no se pase de los límites
  if (newScroll < 0) {
    newScroll = 0; // Bloquear al inicio
  } else if (newScroll > maxScroll) {
    newScroll = maxScroll; // Bloquear al final
  }

  // Mover suavemente
  carousel.scrollTo({
    left: newScroll,
    behavior: "smooth",
  });
}
