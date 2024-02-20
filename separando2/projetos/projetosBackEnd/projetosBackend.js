//aqui vou fazer a parte de quando clicar no menu hamburguer

let menu = document.querySelector("#menu")
    

let menuHamburguer = document.querySelector("#menu-hamburger")

menuHamburguer.addEventListener('click',()=>{
menu.style.opacity="1"
menuHamburguer.style.opacity="0";
menuHamburguer.style.display="none";  
})

let iconFecharMenu = document.querySelector("#icon-fechar-menu")
iconFecharMenu.addEventListener('click',()=>{
  
  menu.style.opacity="0"
  menuHamburguer.style.display="block"
  menuHamburguer.style.opacity="1"

})

document.addEventListener("click",(e)=>{
  let clicouFora = !menu.contains(e.target) && !menuHamburguer.contains(e.target);
  if(clicouFora){
    menu.style.opacity="0"
    menuHamburguer.style.display="block"
    menuHamburguer.style.opacity="1"
    
  }
  
})
