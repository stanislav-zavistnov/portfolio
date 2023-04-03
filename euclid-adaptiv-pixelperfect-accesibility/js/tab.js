let button1 = document.querySelector('.tab-btn-1');
let text1 = document.querySelector('.process-content__left-text-wrapper-1');
let img1 = document.querySelector('.tab-img-1');

let button2 = document.querySelector('.tab-btn-2');
let text2 = document.querySelector('.process-content__left-text-wrapper-2');
let img2 = document.querySelector('.tab-img-2');

let button3 = document.querySelector('.tab-btn-3');
let text3 = document.querySelector('.process-content__left-text-wrapper-3');
let img3 = document.querySelector('.tab-img-3');

let button4 = document.querySelector('.tab-btn-4');
let text4 = document.querySelector('.process-content__left-text-wrapper-4');
let img4 = document.querySelector('.tab-img-4');


button1.addEventListener('click', function() {
  text1.classList.remove('visually-hidden');
  img1.classList.remove('visually-hidden');
  img2.classList.add('visually-hidden');
  img3.classList.add('visually-hidden');
  img4.classList.add('visually-hidden');
  text2.classList.add('visually-hidden');
  text3.classList.add('visually-hidden');
  text4.classList.add('visually-hidden');
});

button2.addEventListener('click', function() {
  text2.classList.remove('visually-hidden');
  img2.classList.remove('visually-hidden');
  img1.classList.add('visually-hidden');
  img3.classList.add('visually-hidden');
  img4.classList.add('visually-hidden');
  text1.classList.add('visually-hidden');
  text3.classList.add('visually-hidden');
  text4.classList.add('visually-hidden');
});

button3.addEventListener('click', function() {
  text3.classList.remove('visually-hidden');
  img3.classList.remove('visually-hidden');
  img1.classList.add('visually-hidden');
  img2.classList.add('visually-hidden');
  img4.classList.add('visually-hidden');
  text1.classList.add('visually-hidden');
  text2.classList.add('visually-hidden');
  text4.classList.add('visually-hidden');
});

button4.addEventListener('click', function() {
  text4.classList.remove('visually-hidden');
  img4.classList.remove('visually-hidden');
  img1.classList.add('visually-hidden');
  img2.classList.add('visually-hidden');
  img3.classList.add('visually-hidden');
  text1.classList.add('visually-hidden');
  text2.classList.add('visually-hidden');
  text3.classList.add('visually-hidden');
});
