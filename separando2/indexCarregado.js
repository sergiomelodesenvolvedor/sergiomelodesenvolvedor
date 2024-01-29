let containerParte1 = document.querySelector("#container-parte-1");

window.addEventListener("load", () => {
  setTimeout(() => {
    containerParte1.style.display = "block";
  }, 0 /* 9000 */);

  setTimeout(() => {
    containerParte1.style.opacity = "1";
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
  }, 0 /* 9100 */);
});


let line1 = document.querySelector("#line1")
let svgCanto1= document.querySelector("#svg-canto-1")
let circleFora1= document.querySelector("#circle-fora-1")
let circleDentro1= document.querySelector("#circle-dentro-1")
let colTudoMinhaHistoria = document.querySelector("#col-tudo-minha-historia")


//aqui estou ajustando a primeira linha do canto para redimensionar de acordo com o tamanho da tela
line1.setAttribute('y2','1000vh');
circleFora1.setAttribute('cy',colTudoMinhaHistoria.offsetHeight/2)
circleDentro1.setAttribute('cy',colTudoMinhaHistoria.offsetHeight/2)
svgCanto1.style.height=colTudoMinhaHistoria.offsetHeight
    
