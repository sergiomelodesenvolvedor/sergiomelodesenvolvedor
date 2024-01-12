let cardNishi = document.querySelector("#cardMaNishiConsult");

cardNishi.addEventListener("click", () => {
  window.open("./projetoNishiconsult/projetoNishiconsult.html", "_blank");
});

//aqui pra baixo é a função de abrir e fechar menu

let xEstado = "menu";

let divMenuHrs = document.querySelector("#divMenuHrs");

let menuComOptions = document.querySelector("#menuComOptions");

let divHrMenuCelular = document.querySelector("#div-hr-menu-celular")

let divxcelular = document.querySelector("#div-x-celular");

divMenuHrs.addEventListener("click", async () => {
  if (xEstado === "menu") {
    document.querySelector("#menuComOptions").style.height = "40vh";
    document.querySelector("#menuComOptions").style.width = "19vw";
    document.querySelector("#menuComOptions").style.opacity = "1";
    document.querySelector("#hrMenuLinha1").style.width = "1.9vw";
    document.querySelector("#hrMenuLinha2").style.width = "1.9vw";
    document.querySelector("#hrMenuLinha1").style.transform = "rotate(-44deg)";
    document.querySelector("#hrMenuLinha2").style.transform = "rotate(44deg)";
    document.querySelector("#hrMenuLinha2").style.top = "-1.6vh";

    

    xEstado = "x";
  } else {
    menuComOptions.style.opacity = "0";
    menuComOptions.style.height = "0px";
    document.querySelector("#hrMenuLinha1").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.top = "0vh";
    document.querySelector("#hrMenuLinha1").style.width = "4vw";
    document.querySelector("#hrMenuLinha2").style.width = "3vw";
    xEstado = "menu";
  }
});



document.addEventListener("click", (event) => {
  if (
    !menuComOptions.contains(event.target) &&
    !divMenuHrs.contains(event.target) &&
    !divHrMenuCelular.contains(event.target) &&
    !divxcelular.contains(event.target) &&
    xEstado === "x"
  ) {
    menuComOptions.style.opacity = "0";
    menuComOptions.style.width = "0px";
    menuComOptions.style.height = "0px";

    document.querySelector("#hrMenuLinha1").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.top = "0vh";
    document.querySelector("#hrMenuLinha1").style.width = "4vw";
    document.querySelector("#hrMenuLinha2").style.width = "3vw";
    xEstado = "menu";
  }
});




divHrMenuCelular.addEventListener("click", ()=>{
  menuComOptions.style.opacity = "1";
  menuComOptions.style.height = "60vh";
  menuComOptions.style.width = "80vw";
  xEstado = "x"
})



divxcelular.addEventListener("click",()=>{
  menuComOptions.style.opacity = "0";
  menuComOptions.style.width = "0px";
  menuComOptions.style.height = "0px";
  xEstado="menu"
})



