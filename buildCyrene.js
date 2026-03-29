
function bukaTab(evt, levelName){
    var tabel = document.getElementsByClassName("konten");
    for (var i = 0; i < tabel.length; i++){
        tabel[i].style.display = "none";
    }

    var tombol = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabel.length; i++){
        tombol[i].className = tombol[i].className.replace(" active", "");
    }
      document.getElementById(levelName).style.display = "table";
    evt.currentTarget.className += " active";
}

function pindahTab(evt, apalah){
    let buildDasar = document.getElementsByClassName("conten");
    for (let i = 0; i < buildDasar.length; i++){
        buildDasar[i].style.display = "none";
    }

    let buton = document.getElementsByClassName("build");
    for (let i = 0; i < buton.length; i++){
        buton[i].className = buton[i].className.replace(" active", "");
    }

    document.getElementById(apalah).style.display = "table";
    evt.currentTarget.className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Begitu kelihatan dikit, langsung jalanin animasi
                entry.target.classList.add("active");
                // Biar gak kedip-kedip pas scroll balik, stop merhatiin elemen ini
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15 // Animasi jalan pas 15% elemen masuk layar
    });

    // Cari semua elemen yang mau dikasih efek
    const targets = document.querySelectorAll(".reveal");
    targets.forEach((target) => observer.observe(target));
});

const menuTogle = document.getElementById('menu');
const sidebar = document.querySelector('aside');
// Ambil semua tag 'a' (link) yang ada di dalam aside
const sidebarLinks = document.querySelectorAll('aside ul li a');

// Fungsi buat buka/tutup sidebar
menuTogle.addEventListener('click', () => {
    sidebar.classList.toggle('slide');
});

// LOOPING: Kasih perintah ke tiap link biar pas diklik sidebarnya nutup
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hapus class 'slide' biar sidebarnya balik ngumpet
        sidebar.classList.remove('slide');
    });
});