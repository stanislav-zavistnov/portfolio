let button1 = document.querySelector('.btn-check');
let button2 = document.querySelector('.btn-select');
let button3 = document.querySelector('.btn-map');
let button4 = document.querySelector('.btn-scroll');
let button5 = document.querySelector('.btn-validation');
let button6 = document.querySelector('.btn-tooltip');

let block1 = document.querySelector('.checkbox');
let block2 = document.querySelector('.select');
let block3 = document.querySelector('.yandexmap');
let block4 = document.querySelector('.scroll');
let block5 = document.querySelector('.validation');
let block6 = document.querySelector('.tooltip');



button1.addEventListener('click', function() {
  block1.classList.remove('visually-hidden');
  block2.classList.add('visually-hidden');
  block3.classList.add('visually-hidden');
  block4.classList.add('visually-hidden');
  block5.classList.add('visually-hidden');
  block6.classList.add('visually-hidden');
});

button2.addEventListener('click', function() {
  block2.classList.remove('visually-hidden');
  block1.classList.add('visually-hidden');
  block3.classList.add('visually-hidden');
  block4.classList.add('visually-hidden');
  block5.classList.add('visually-hidden');
  block6.classList.add('visually-hidden');
});

button3.addEventListener('click', function() {
  block3.classList.remove('visually-hidden');
  block2.classList.add('visually-hidden');
  block1.classList.add('visually-hidden');
  block4.classList.add('visually-hidden');
  block5.classList.add('visually-hidden');
  block6.classList.add('visually-hidden');
});

button4.addEventListener('click', function() {
  block4.classList.remove('visually-hidden');
  block2.classList.add('visually-hidden');
  block3.classList.add('visually-hidden');
  block1.classList.add('visually-hidden');
  block5.classList.add('visually-hidden');
  block6.classList.add('visually-hidden');
});

button5.addEventListener('click', function() {
  block5.classList.remove('visually-hidden');
  block2.classList.add('visually-hidden');
  block3.classList.add('visually-hidden');
  block4.classList.add('visually-hidden');
  block1.classList.add('visually-hidden');
  block6.classList.add('visually-hidden');
});

button6.addEventListener('click', function() {
  block6.classList.remove('visually-hidden');
  block2.classList.add('visually-hidden');
  block3.classList.add('visually-hidden');
  block4.classList.add('visually-hidden');
  block5.classList.add('visually-hidden');
  block1.classList.add('visually-hidden');
});
