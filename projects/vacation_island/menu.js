const menuBtn = document.querySelector('.header__menu');
const menu = document.querySelector('.header__drop');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
