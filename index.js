// START NAMES BACKGROUND
document.addEventListener('DOMContentLoaded', () => {
     var typed = new Typed('.words-wrappen', {
      strings: ['FUTEBOL', 'CAMPEONATO'],
      typeSpeed: 100,
      startDelay: 0,
      loop: true
    });
})
// END NAMES BACKGROUND

// Rondom Images Background
const imagens = [
        "img/background.jpg",
        "img/background-2.jpg",
        "img/background-3.jpg",
        "img/background-4.jpg"
    ];

let indice = 0;
const divFundo = document.querySelector(".background-1");

    function trocarBackground() {
        divFundo.style.backgroundImage = `url('${imagens[indice]}')`;
        indice = (indice + 1) % imagens.length;
    }
    

    // Troca inicial
    trocarBackground();

    // Troca a cada 5 segundos
    setInterval(trocarBackground, 15000);
// END IMAGENS BACKGROUND

// START RESPONSIVE

var menuIcon = document.querySelector('.icone-menu');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', ()=>{
    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.icone-menu img').src = 'img/menu.png';
    }else{
        ul.classList.add('ativo');
        document.querySelector('.icone-menu img').src = 'img/close.png';
    }
})
