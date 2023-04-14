const burgerBtn = document.querySelector('.burger');
const links = document.querySelectorAll('.js-burger-close');

let tl = gsap.timeline({ paused: true });

tl.to('.burger__line-top, .burger__line-bottom', { top: 23, duration: 0.5 })
  .fromTo('.burger-background', { display: 'none', opacity: 0, y: -100, }, { display: 'block', opacity: 1, y: 0, duration: 0.5, ease: "expo", })
  .fromTo('.burger-navigation', { display: 'none', opacity: 0, y: 100, }, { display: 'block', opacity: 1, y: 0, duration: 0.5, ease: "power3", });

  const arr = [];
burgerBtn.onclick = function () {
  arr.length === 0 ? (arr.push(1), tl.play()) : (arr.splice(0, 1), tl.reverse());
}

links.forEach((item) => {
  item.addEventListener('click', function() {
    arr.length === 0 ? (arr.push(1), tl.play()) : (arr.splice(0, 1), tl.reverse());
  });
});
