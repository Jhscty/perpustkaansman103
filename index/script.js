// HEADER SCROLL
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// BARS & DROPDOWN-MENU
const barsBtn = document.querySelector('.bars-btn');
const dropDownMenu = document.querySelector('.dropdown-menu');

barsBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
};
window.addEventListener("resize", function() {
    if (window.innerWidth > 1296) {
        dropDownMenu.classList.remove('open');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const barsBtn = document.getElementById('bars-btn');
    barsBtn.addEventListener('click', function() {
        const icon = barsBtn.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});

// BANNER
let currentImage = 1;

setInterval(() => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (currentImage === 1) {
        image1.style.opacity = 0; // Sembunyikan gambar pertama
        image2.style.opacity = 1; // Tampilkan gambar kedua
        currentImage = 2;
    } else {
        image1.style.opacity = 1; // Tampilkan gambar pertama
        image2.style.opacity = 0; // Sembunyikan gambar kedua
        currentImage = 1;
    }
}, 3000); // Ganti gambar setiap 10 detik