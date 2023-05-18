const btn = document.querySelector('.autopark-nav__btn');
const iconBtn = document.querySelector('.autopark-nav__btn-icon');
let tl = gsap.timeline({ paused: true });
let t2 = gsap.timeline({ paused: true });

tl.fromTo('.autopark-cards-wrap', { display: 'none', opacity: 0, y: -100, }, { display: 'block', opacity: 1, y: 0, duration: 1, ease: "expo", })
t2.fromTo('.autopark-cards-slider-wrap', { display: 'none', opacity: 0, y: -100, }, { display: 'block', opacity: 1, y: 0, duration: 1, ease: "expo", })

btn.addEventListener('click', () => {
  if (window.screen.width > 576) {
    if (iconBtn.classList.contains("js-list-closed")) {
      iconBtn.classList.remove('js-list-closed');
      iconBtn.classList.add('js-list-opened');
      tl.play();
    } else {
      iconBtn.classList.remove('js-list-opened');
      iconBtn.classList.add('js-list-closed');
      tl.reverse();
    }
  } else {
    if (iconBtn.classList.contains("js-list-closed")) {
      iconBtn.classList.remove('js-list-closed');
      iconBtn.classList.add('js-list-opened');
      t2.play();
    } else {
      iconBtn.classList.remove('js-list-opened');
      iconBtn.classList.add('js-list-closed');
      t2.reverse();
    }
  }
})
