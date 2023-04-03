let allbuttons = document.querySelectorAll('.js-btn-unknown')
let buttonIdentify = document.querySelector('.js-btn-identify')
let hiddenCard = document.querySelector('.catalogue-info--1')
let visibleCard = document.querySelector('.catalogue-info')


buttonIdentify.addEventListener('click', function() {
  hiddenCard.classList.add('js-hidden');
  visibleCard.classList.remove('js-hidden');
});

allbuttons.forEach((item) => {
  item.addEventListener('click', function() {
    hiddenCard.classList.remove('js-hidden');
    visibleCard.classList.add('js-hidden');
  });
});
