//Boton de Menu del navbar
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

window.addEventListener("scroll", () => {
  //SOBRE MI
  let imgSobreMi = document.querySelector(".img-sobremi-pc");
  let position = imgSobreMi.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.05;

  if (position < screenPosition) {
    imgSobreMi.style.animation = "scroll 2s ease-out";
  }
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

//CURRICULUM

//MODAL

// const divModal = document.getElementById('modal');
// const modalContainer = document.getElementById('myModal');
// const modalContent = document.querySelector('.modal-content');
// const close = document.querySelector('.close');
// const btnModal = document.querySelector('#ButtomModal');

// btnModal.addEventListener('click', () => {
//     modalContainer.style.display = 'block';

// });

// close.addEventListener('click', () => {
//     modalContainer.style.display = 'none';
// });
