window.addEventListener("scroll", () => {
  // HABILIDADES
  let habilidadesImg = document.querySelector(".habilidades-links");
  let positionHabilidades = habilidadesImg.getBoundingClientRect().top;
  let screenPositionH = window.innerHeight / 1.02;

  if (positionHabilidades < screenPositionH) {
    habilidadesImg.style.animation = "scroll 1.5s ease-out";
  }

  // PORTAFOLIO
  let portafolio = document.querySelector(".portafolio");
  let positionPortafolio = portafolio.getBoundingClientRect().top;
  let screenPositionP = window.innerHeight / 1.02;

  if (positionPortafolio < screenPositionP) {
    portafolio.style.animation = "scroll 1.5s ease-out";
  }

  // TIMELINE
  let timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    let positionTimeline = item.getBoundingClientRect().top;
    let screenPositionT = window.innerHeight / 1.2;

    if (positionTimeline < screenPositionT) {
      item.classList.add("scroll");
    }
  });

  // SOBRE MÍ
  let sobremiContainer = document.querySelector(".sobremi-container");
  let positionSobremi = sobremiContainer.getBoundingClientRect().top;
  let screenPositionS = window.innerHeight / 1.02;

  if (positionSobremi < screenPositionS) {
    sobremiContainer.style.animation = "scroll 1.5s ease-out";
  }

  // CAROUSEL
  let carousel = document.querySelector(".carousel-container");
  let positionCarousel = carousel.getBoundingClientRect().top;
  let screenPositionC = window.innerHeight / 1.02;

  if (positionCarousel < screenPositionC) {
    carousel.style.animation = "scroll 1.5s ease-out";
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

// navbar
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  // Desplazamiento suave al hacer clic en los enlaces del navbar
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
