const searchIcon = document.querySelector('.header-search-btn__search-icon');
const searchInput = document.querySelector('.header-search-btn__input');
const closeIcon = document.querySelector('.header-search-btn__close-icon');

searchIcon.addEventListener('click', () => {
  searchIcon.style.display = "none";
  searchInput.style.display = "inline-block";
  closeIcon.style.display = "inline-block";
})

closeIcon.addEventListener('click', () => {
  searchInput.style.display = "none";
  closeIcon.style.display = "none";
  searchIcon.style.display = "inline-block";
})
