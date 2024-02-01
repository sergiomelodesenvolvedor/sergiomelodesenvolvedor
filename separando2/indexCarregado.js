let divTodasAsPartes = document.querySelector("#div-todas-as-partes");

window.addEventListener("load", () => {
  setTimeout(() => {
    divTodasAsPartes.style.display = "block";
  }, 9000 /* 9000 */);

  setTimeout(() => {
    divTodasAsPartes.style.opacity = "1";
    // Configuração do Typed.js
    var options1 = {
        strings: ["", "Desenvolvedor Web <br/> Full Stack"],
        typeSpeed: 25, // Velocidade de digitação em milissegundos
        backSpeed: 50, // Velocidade de apagar em milissegundos
        startDelay: 800, // Atraso antes de começar a digitar em milissegundos
        loop: false, // Se deve repetir a animação
        showCursor: false,
    };

      var options2 = {
        strings: ["", "Websites responsivos e dinâmicos"],
        typeSpeed: 25, // Velocidade de digitação em milissegundos
        backSpeed: 50, // Velocidade de apagar em milissegundos
        startDelay: 4200, // Atraso antes de começar a digitar em milissegundos
        loop: false, // Se deve repetir a animação
        showCursor: false,
      };

    // Inicializa o Typed.js no elemento com o ID "typed-output"
    var typed = new Typed("#h1-desenvolvedor-web-full-stack", options1);
    var typed2 = new Typed("#h3-websites-responsivos-e-dinamicos", options2);
  }, 9100 /* 9100 */);
});

let line1 = document.querySelector("#line1");
let svgCanto1 = document.querySelector("#svg-canto-1");
let circleFora1 = document.querySelector("#circle-fora-1");
let circleDentro1 = document.querySelector("#circle-dentro-1");
let colTudoMinhaHistoria = document.querySelector("#col-tudo-minha-historia");
//aqui estou ajustando a primeira linha do canto para redimensionar de acordo com o tamanho da tela
setTimeout(() => {
  let divTudoMinhaHistoriaConteudo = document.querySelector("#div-tudo-minha-historia-conteudo")
  line1.setAttribute("y2", "1000vh");
  circleFora1.setAttribute("cy", divTudoMinhaHistoriaConteudo.offsetHeight / 2);
  circleDentro1.setAttribute("cy", divTudoMinhaHistoriaConteudo.offsetHeight / 2);

  svgCanto1.style.height = divTudoMinhaHistoriaConteudo.offsetHeight;
}, 10000);


//aqui estou fazendo a logica para responsivisar para landscape e portrait, a linha do canto
let controleAlturaAnteriorOuProxima = 0

  
window.addEventListener('orientationchange',()=>{
  setTimeout(()=>{
  let divTudoMinhaHistoriaConteudo2 = document.querySelector("#div-tudo-minha-historia-conteudo")

  line1.setAttribute("y2", "1000vh");
  circleFora1.setAttribute("cy", divTudoMinhaHistoriaConteudo2.offsetHeight / 2);
  circleDentro1.setAttribute("cy", divTudoMinhaHistoriaConteudo2.offsetHeight / 2);

  svgCanto1.style.height = divTudoMinhaHistoriaConteudo2.offsetHeight;
},10)
})

//aqui acaba a logica para responsivisar a linha do canto (portrait e landscape)
console.log(window.innerWidth)
console.log(window.innerHeight)


//aqui começa a logica para responsivisar a linha do canto mas no envento resize

window.addEventListener('resize',()=>{
  setTimeout(()=>{
  let divTudoMinhaHistoriaConteudo2 = document.querySelector("#div-tudo-minha-historia-conteudo")

  line1.setAttribute("y2", "1000vh");
  circleFora1.setAttribute("cy", divTudoMinhaHistoriaConteudo2.offsetHeight / 2);
  circleDentro1.setAttribute("cy", divTudoMinhaHistoriaConteudo2.offsetHeight / 2);

  svgCanto1.style.height = divTudoMinhaHistoriaConteudo2.offsetHeight;
},10)
})




let divQueSeEsconde = document.querySelector("#div-que-se-esconde");
let posicaoPagina = 0;

let ultimoTempoDoWhell = 0;
if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
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
      ultimoTempoDoWhell = agora;
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
      ultimoTempoDoWhell = agora;
    }
  });
}
