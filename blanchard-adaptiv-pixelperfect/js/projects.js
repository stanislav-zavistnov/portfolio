const pswiper = new Swiper('.projects-swiper-container', {
  a11y: false,
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: '.projects-swiper-pagination',
  },
  navigation: {
    nextEl: ".projects-test-next",
    prevEl: ".projects-test-prev"
  },

  breakpoints: {
    319: {
      a11y: false,
      slidesPerView: 1,
      spaceBetween: 30
    },

    767: {
      a11y: false,
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      a11y: false,
      slidesPerView: 2,
      spaceBetween: 50
    },

    1601: {
      a11y: false,
      slidesPerView: 3,
      spaceBetween: 50,
    }

  },
});
