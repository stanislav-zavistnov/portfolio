const buttons = document.querySelectorAll('.gallery-card__text-btn');
const cards = document.querySelectorAll('.gallery-card-wrapper');
let button1 = document.querySelector('.js-slide-1');
let button2 = document.querySelector('.js-slide-2');
let button3 = document.querySelector('.js-slide-3');
let button4 = document.querySelector('.js-slide-4');
let button5 = document.querySelector('.js-slide-5');
let button6 = document.querySelector('.js-slide-6');
let card1 = document.querySelector('.js-card-1');
let card2 = document.querySelector('.js-card-2');
let card3 = document.querySelector('.js-card-3');
let card4 = document.querySelector('.js-card-4');
let card5 = document.querySelector('.js-card-5');
let card6 = document.querySelector('.js-card-6');


button1.addEventListener('click', function() {
  card1.classList.remove('js-hidden');
});

button2.addEventListener('click', function() {
  card2.classList.remove('js-hidden');
});

button3.addEventListener('click', function() {
  card3.classList.remove('js-hidden');
});

button4.addEventListener('click', function() {
  card4.classList.remove('js-hidden');
});

button5.addEventListener('click', function() {
  card5.classList.remove('js-hidden');
});

button6.addEventListener('click', function() {
  card6.classList.remove('js-hidden');
});

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    cards.forEach((card) => {
      card.classList.add('js-hidden');
  })
  });
});

