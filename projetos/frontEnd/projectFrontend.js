let cardMa = document.querySelector("#cardMaConsultoriaHospitalar");

cardMa.addEventListener("click", () => {
  window.open("https://maconsultoriahospitalar.com.br", "_blank");
});

let cardNishi = document.querySelector("#cardMaNishiConsult");

cardNishi.addEventListener("click", () => {
  window.open("./projetoNishiconsult/projetoNishiconsult.html", "_blank");
});

let xEstado = "menu";

//aqui vou fazer a parte de abrir o x do menu

let divMenuHrs = document.querySelector("#divMenuHrs");

divMenuHrs.addEventListener("click", async () => {
  console.log(divMenuHrs)
  if (xEstado === "menu") {
    document.querySelector("#menuComOptions").style.height = "40vh";
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

let menuComOptions = document.querySelector("#menuComOptions");

document.addEventListener("click", (event) => {
  if (
    !menuComOptions.contains(event.target) &&
    !divMenuHrs.contains(event.target) &&
    xEstado === "x"
  ) {
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


