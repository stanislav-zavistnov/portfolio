let burgerbtn = document.querySelector('.js-burger')
let burgerfield = document.querySelector('.js-menu-wrap')
let burgerlinks = document.querySelectorAll('.header-list__item-link')
let body = document.querySelector('.body')


burgerlinks.forEach((link) => {
  link.addEventListener('click', function() {
      burgerfield.classList.remove('is-active');
      burgerbtn.classList.remove('is-active');
      body.style.overflow = 'auto';
  })
  });
