// Função para o ativar o menu hamburguer ao clickar 
function onClickMenu(){
  document.getElementById("hambuguer").classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Constante para o selector .btnMenu
const btnMenu1 = document.querySelector('.btnMenu1')
const btnMenu2 = document.querySelector('.btnMenu2')
const btnMenu3 = document.querySelector('.btnMenu3')
const btnMenu4 = document.querySelector('.btnMenu4')

// Evento para fechar o menu após o click nos botões
btnMenu1.addEventListener('click', function() {
  document.getElementById("hambuguer").classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
})

btnMenu2.addEventListener('click', function() {
  document.getElementById("hambuguer").classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
})

btnMenu3.addEventListener('click', function() {
  document.getElementById("hambuguer").classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
})

btnMenu4.addEventListener('click', function() {
  document.getElementById("hambuguer").classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
})

// Criando a variavel mybutton pegando o id do button no html
var btnTop = document.getElementById("btn-top");

// Quando rolar a página 28px para baixo, o botão top será exibido
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 28 || document.documentElement.scrollTop > 28) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

// // quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}