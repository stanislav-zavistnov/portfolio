 const swiper = new Swiper('.events-swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: '.events-swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".events-test-next",
    prevEl: ".events-test-prev"
  },

  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30
    },

    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1601: {
      a11y: false,
      slidesPerView: 3,
      spaceBetween: 50,
    }

  },
});
