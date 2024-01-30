let divTodasAsPartes = document.querySelector("#div-todas-as-partes");

window.addEventListener("load", () => {
  setTimeout(() => {
    divTodasAsPartes.style.display = "block";
  }, 9000 /* 9000 */);

  setTimeout(() => {
    divTodasAsPartes.style.opacity = "1";
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

let line1 = document.querySelector("#line1");
let svgCanto1 = document.querySelector("#svg-canto-1");
let circleFora1 = document.querySelector("#circle-fora-1");
let circleDentro1 = document.querySelector("#circle-dentro-1");
let colTudoMinhaHistoria = document.querySelector("#col-tudo-minha-historia");
console.log(colTudoMinhaHistoria.offsetHeight)
//aqui estou ajustando a primeira linha do canto para redimensionar de acordo com o tamanho da tela
line1.setAttribute("y2", "1000vh");
circleFora1.setAttribute("cy", colTudoMinhaHistoria.offsetHeight / 2);
circleDentro1.setAttribute("cy", colTudoMinhaHistoria.offsetHeight / 2);
svgCanto1.style.height = colTudoMinhaHistoria.offsetHeight;

let divQueSeEsconde = document.querySelector("#div-que-se-esconde");
let posicaoPagina = 0;

let ultimoTempoDoWhell = 0;
if (window.innerWidth >= 992 && window.innerWidth <=1200) {
    divTodasAsPartes.addEventListener("wheel", (event) => {
      const agora = new Date().getTime();
  
      if (agora - ultimoTempoDoWhell > 500) {
        if (event.deltaY > 0) {
          if (posicaoPagina !== -234) {
            posicaoPagina -= 117;
            divQueSeEsconde.style.transform = `translateY(${posicaoPagina}vh)`;
          }
        }
        if (event.deltaY < 0) {
          if (posicaoPagina !== 0) {
            posicaoPagina += 117;
            divQueSeEsconde.style.transform = `translateY(${posicaoPagina}vh)`;
          }
        }
        ultimoTempoDoWhell=agora
      }
    });
  }

  
  if (window.innerWidth >= 1200) {
    divTodasAsPartes.addEventListener("wheel", (event) => {
      const agora = new Date().getTime();
  
      if (agora - ultimoTempoDoWhell > 500) {
        if (event.deltaY > 0) {
          if (posicaoPagina !== -210) {
            posicaoPagina -= 105;
            divQueSeEsconde.style.transform = `translateY(${posicaoPagina}vh)`;
          }
        }
        if (event.deltaY < 0) {
          if (posicaoPagina !== 0) {
            posicaoPagina += 105;
            divQueSeEsconde.style.transform = `translateY(${posicaoPagina}vh)`;
          }
        }
        ultimoTempoDoWhell=agora
      }
    });
  }
  