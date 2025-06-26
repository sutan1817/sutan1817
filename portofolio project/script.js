const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('rotate');
  dropdownMenu.classList.toggle('active');
});
