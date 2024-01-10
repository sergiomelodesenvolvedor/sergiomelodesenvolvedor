let cardMa = document.querySelector("#cardMaConsultoriaHospitalar");

cardMa.addEventListener("click", () => {
  window.open("https://maconsultoriahospitalar.com.br", "_blank");
});

let cardNishi = document.querySelector("#cardMaNishiConsult");

cardNishi.addEventListener("click", () => {
  window.open("./projetoNishiconsult.html", "_blank");
});

let divMenuHrs = document.querySelector("#divMenuHrs");

divMenuHrs.addEventListener("mouseover", () => {
  document.querySelector("#menuComOptions").style.height = "40vh";
  document.querySelector("#menuComOptions").style.opacity = "1";
  document.querySelector("#hrMenuLinha1").style.width="1.9vw";
  document.querySelector("#hrMenuLinha2").style.width="1.9vw";  
  document.querySelector("#hrMenuLinha1").style.transform = "rotate(-44deg)"
  document.querySelector("#hrMenuLinha2").style.transform = "rotate(44deg)"
  document.querySelector("#hrMenuLinha2").style.top = "-1.6vh"

});
