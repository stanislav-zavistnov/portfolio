const btn = document.querySelector('.bottom-menu__btn');
const menu = document.querySelector('.bottom-menu__list');
let tl = gsap.timeline ({paused: true})

tl.fromTo('.bottom-menu__list', { display: 'none', opacity: 0, height: 0, }, { display: 'block', opacity: 1, height: 'auto', duration: 1, ease: "expo", });


btn.onclick = function () {
  tl.play();
  if (menu.style.display === 'block') {
    tl.reverse();
  }
}

