document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('.words-wrappen', {
    strings: ['FUTEBOL', 'CAMPEONATO'],
    typeSpeed: 100,
    startDelay: 0,
    loop: true,
  });

  const imagens = [
    'img/background.jpg',
    'img/background-2.jpg',
    'img/background-3.jpg',
    'img/background-4.jpg',
  ];

  const divFundo = document.querySelector('.background-1');
  const menuIcon = document.querySelector('.icone-menu');
  const menu = document.querySelector('.ul');
  const menuIconImg = document.querySelector('.icone-menu img');

  let indice = 0;

  const trocarBackground = () => {
    if (!divFundo) return;

    divFundo.style.backgroundImage = `url('${imagens[indice]}')`;
    indice = (indice + 1) % imagens.length;
  };

  trocarBackground();
  setInterval(trocarBackground, 15000);

  if (menuIcon && menu && menuIconImg) {
    menuIcon.addEventListener('click', () => {
      const isAtivo = menu.classList.toggle('ativo');
      menuIconImg.src = isAtivo ? 'img/close.png' : 'img/menu.png';
    });
  }
});
