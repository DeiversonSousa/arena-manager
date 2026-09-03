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

  const etapas = [...document.querySelectorAll('.etapa')];
  const visuais = [...document.querySelectorAll('.simulador-visual')];
  const tituloSimulador = document.querySelector('#simulador-titulo');
  const descricaoSimulador = document.querySelector('#simulador-descricao');
  const etapaAtual = document.querySelector('#etapa-atual');
  const proximaEtapa = document.querySelector('.proxima-etapa');
  const titulos = ['Cadastre suas equipes', 'Monte a tabela de jogos', 'Lance os resultados', 'Acompanhe a classificação'];
  const descricoes = [
    'Adicione equipes e deixe o sistema cuidar do resto.',
    'Crie os confrontos da rodada em poucos segundos.',
    'Atualize os placares e mantenha todos informados.',
    'Veja quem está mais perto da grande final.',
  ];
  let etapaSelecionada = 0;

  const mostrarEtapa = (indice) => {
    etapaSelecionada = indice;
    etapas.forEach((etapa, etapaIndice) => {
      const ativa = etapaIndice === indice;
      etapa.classList.toggle('ativa', ativa);
      etapa.setAttribute('aria-selected', ativa);
    });
    visuais.forEach((visual, visualIndice) => visual.classList.toggle('oculto', visualIndice !== indice));
    if (tituloSimulador) tituloSimulador.textContent = titulos[indice];
    if (descricaoSimulador) descricaoSimulador.textContent = descricoes[indice];
    if (etapaAtual) etapaAtual.textContent = indice + 1;
    if (proximaEtapa) proximaEtapa.innerHTML = indice === etapas.length - 1 ? 'Voltar ao início <span aria-hidden="true">↺</span>' : 'Próxima etapa <span aria-hidden="true">→</span>';
  };

  etapas.forEach((etapa, indice) => etapa.addEventListener('click', () => mostrarEtapa(indice)));
  if (proximaEtapa) proximaEtapa.addEventListener('click', () => mostrarEtapa((etapaSelecionada + 1) % etapas.length));
});
