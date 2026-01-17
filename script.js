function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    // Se estiver no modo light, usa a foto clara
    img.setAttribute('src', './foto-luiz-andre-light.jpg');
  } else {
    // Se não estiver no modo light (modo dark), usa a foto padrão
    img.setAttribute('src', './fotoluizandré.jpg');
  }
}
//pegar a tag image
// se tiver light mode, adicionar a imagem light
//substituir a imagem
//se não tiver light mode, manter a imagem normal
