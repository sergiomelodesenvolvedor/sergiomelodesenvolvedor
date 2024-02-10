let SvgLetraSfundo = document.querySelector("#svg-letra-s-fundo");
let SvgLetraMfundo = document.querySelector("#svg-letra-m-fundo");
let SvgLetraDfundo = document.querySelector("#svg-letra-d-fundo");

let subirDescerLetraS = async () => {
    let transformAtual = getComputedStyle(SvgLetraSfundo).transform;
  
    SvgLetraSfundo.style.transform = transformAtual + ' translateY(-1.5vh)' 
  
    SvgLetraSfundo.addEventListener("transitionend", () => {
      if (SvgLetraSfundo.style.transform.slice(-18) == "translateY(-1.5vh)") {
          console.log("sim")
        SvgLetraSfundo.style.transform = transformAtual + "  translateY(1.5vh)";
      } else {
          
          console.log(SvgLetraSfundo.style.transform.slice(-18))
        SvgLetraSfundo.style.transform = transformAtual + " translateY(-1.5vh)";
      }
    });
  };



  let subirDescerLetraM = async () => {
    let transformAtual = getComputedStyle(SvgLetraMfundo).transform;
  
    SvgLetraMfundo.style.transform = transformAtual + ' translateY(-1.5vh)' 
  
    SvgLetraMfundo.addEventListener("transitionend", () => {
      if (SvgLetraMfundo.style.transform.slice(-18) == "translateY(-1.5vh)") {
          console.log("sim")
        SvgLetraMfundo.style.transform = transformAtual + "  translateY(1.5vh)";
      } else {
          
          console.log(SvgLetraMfundo.style.transform.slice(-18))
        SvgLetraMfundo.style.transform = transformAtual + " translateY(-1.5vh)";
      }
    });
  };

  

  let subirDescerLetraD = async () => {
    let transformAtual = getComputedStyle(SvgLetraDfundo).transform;
  
    SvgLetraDfundo.style.transform = transformAtual + ' translateY(-1.5vh)' 
  
    SvgLetraDfundo.addEventListener("transitionend", () => {
      if (SvgLetraDfundo.style.transform.slice(-18) == "translateY(-1.5vh)") {
          console.log("sim")
        SvgLetraDfundo.style.transform = transformAtual + "  translateY(1.5vh)";
      } else {
          
          console.log(SvgLetraDfundo.style.transform.slice(-18))
        SvgLetraDfundo.style.transform = transformAtual + " translateY(-1.5vh)";
      }
    });
  };


  
  
//for(let x=0;x<=10;x+=1){
    subirDescerLetraS();
    subirDescerLetraM();
    subirDescerLetraD();
//}
