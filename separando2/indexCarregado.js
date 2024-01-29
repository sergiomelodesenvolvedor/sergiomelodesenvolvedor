let tudoDepoisDeCarregado = document.querySelector("#tudoDepoisDeCarregado");

window.addEventListener("load", () => {
  setTimeout(() => {
    tudoDepoisDeCarregado.style.display = "block";
  }, 9000 /* 9000 */);

  setTimeout(() => {
    tudoDepoisDeCarregado.style.opacity = "1";
    // Configuração do Typed.js
    var options = {
      strings: ["", "Desenvolvedor Web <br/> Full Stack"],
      typeSpeed: 50, // Velocidade de digitação em milissegundos
      backSpeed: 50, // Velocidade de apagar em milissegundos
      startDelay: 800, // Atraso antes de começar a digitar em milissegundos
      loop: false, // Se deve repetir a animação
    };

    // Inicializa o Typed.js no elemento com o ID "typed-output"
    var typed = new Typed("#h1-desenvolvedor-web-full-stack", options);
  }, 9100 /* 9100 */);
});
