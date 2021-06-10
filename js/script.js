// inicio menu mobile
let menuContent = document.querySelector('#menu-content');
let menuClose = document.querySelector('#menu-close');
let menuOpen = document.querySelector('#menu-open');

menuClose.classList.add('visible-true');

const menuOpenHandler = () => {
  menuContent.classList.add('hide-menu');
  menuClose.classList.remove('visible-true');
  menuOpen.classList.add('visible-true');
}

const menuCloseHandler = () => {
  menuContent.classList.remove('hide-menu');
  menuOpen.classList.remove('visible-true');
  menuClose.classList.add('visible-true');
}

// fim menu mobile

// ínicio letras correndo
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 200 * i);
  });
}

const titulo = document.querySelector('.blink');
typeWriter(titulo);
// fim letras correndo


//inicio service function
var showedBox

document.addEventListener('click', event => {
  if (!event.target.classList.contains('buttonservice')) return
  
  const buttonId = event.target.dataset.id
  
  const withIdElements = document.querySelectorAll(`[data-id="${buttonId}"`)
  const box = withIdElements[0]

  showedBox && showedBox.classList.remove('show')
  showedBox = box
  box.classList.contains('show') ? box.classList.remove('show') : box.classList.add('show')
})
//fim service function