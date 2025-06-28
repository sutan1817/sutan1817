const hamburger = document.getElementById('dropbutton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropbutton.addEventListener('click', () => {
  dropbutton.classList.toggle('rotate');
  dropdownMenuA.classList.toggle('active');
});