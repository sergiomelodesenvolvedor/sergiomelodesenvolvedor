let textTitle = document.querySelector("#sergio-melo-desenvolvedor-text");
let textSubTitle = document.querySelector("#apaixonado-por-tecnologia-text");
let divCarregamento = document.querySelector(".div-carregamento");

document.querySelector("#svg-load").style.display = "block";

textTitle.addEventListener("animationend", function () {
  // A ação que você quer realizar após a animação
  textSubTitle.style.opacity = "1";
});

let strokeDashOffSet = 0;
function animaLogo() {
  requestAnimationFrame(animaLogo);
  strokeDashOffSet += 9;
  document.querySelector("#svg-logo").style.strokeDashoffset = strokeDashOffSet;
}
setTimeout(() => {
  animaLogo();
}, 2000);

let divLoad = document.querySelector("#div-load");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    divLoad.style.opacity = "0";
    console.log("teaste")
  },6000);

  setTimeout(() => {
    divLoad.style.display = "none";
  }, 7000);
});
