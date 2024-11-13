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
    // Ambil semua gambar
    const images = [
        document.getElementById('image1'),
        document.getElementById('image2'),
        document.getElementById('image3'),
        document.getElementById('image4'),
        document.getElementById('image5')
    ];

    images.forEach((image, index) => {
        if (index + 1 === currentImage) {
            image.style.opacity = 1; 
        } else {
            image.style.opacity = 0;
        }
    });

    currentImage = currentImage < images.length ? currentImage + 1 : 1; // Jika sudah sampai gambar terakhir, kembali ke gambar pertama
}, 3000);