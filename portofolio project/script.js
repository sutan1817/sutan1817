const dropdownMenu = document.getElementsByClassName("dropdownmenuA")[0]; // Ambil elemen pertama
document.querySelector('.dropbutton').onclick = () => {
  dropdownMenu.classList.toggle('active'); // Jangan pakai titik di classList.toggle
};

