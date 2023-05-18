const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
  burger.style.display = "none";
  burgerMenu.style.display = "inline-block";
  burgerClose.style.display = "inline-block";
})

burgerClose.addEventListener('click', () => {
  burgerClose.style.display = "none";
  burgerMenu.style.display = "none";
  burger.style.display = "inline-block";
})
