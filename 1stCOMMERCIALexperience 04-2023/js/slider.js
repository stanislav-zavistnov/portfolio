const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 10,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  freeMode: true,
  speed: 5000,
  breakpoints: {
    1024: {
      slidesPerView: 10,
    },
    768: {
      slidesPerView: 7,
    },
    576: {
      slidesPerView: 5,
    },
    320: {
      slidesPerView: 4,
    },
  }
});
