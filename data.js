const heroImages = [
  { src: "Background-0.png", alt: "Cowok" },
  { src: "Background-1.png", alt: "Cewek" },
];

const siteConfig = {
  logo: "logo.png",
  logoAlt: "Modul Menulis Tujuan Pembelajaran",
  logoHeight: "36"
};

const modul = [
  {
    nomor: "01",
    judul: "Taksonomi Bloom",
    deskripsi: "Memahami enam level kemampuan kognitif sebagai landasan dalam merumuskan tujuan pembelajaran yang tepat sasaran.",
    link: "bloom.html",
    label: "Pelajari →"
  },
  {
    nomor: "02",
    judul: "Metode ABCD",
    deskripsi: "Teknik penulisan tujuan pembelajaran yang mencakup empat komponen: Audience, Behavior, Condition, dan Degree.",
    link: "abcd.html",
    label: "Pelajari →"
  },
  {
    nomor: "03",
    judul: "Latihan Menulis LO",
    deskripsi: "Praktik langsung menulis tujuan pembelajaran menggunakan panduan interaktif dan mendapatkan umpan balik seketika.",
    link: "latihan.html",
    label: "Mulai Latihan →"
  },
  {
    nomor: "04",
    judul: "Referensi & Bacaan Lanjut",
    deskripsi: "Kumpulan sumber bacaan terpilih untuk memperdalam pemahaman tentang desain tujuan pembelajaran.",
    link: "referensi.html",
    label: "Lihat Referensi →"
  },
  {
    nomor: "05",
    judul: "LNGSHOT - Moonwalkin' 𝄟⃝💞",
    deskripsi: "I nEEEeeedDD youuUUU too muuUUuuchh",
    link: "https://youtu.be/HJgdT15UT4k?si=nOvK8XFWtQgAktUi", class: "louis" , target: "_blank",
    label: "▶︎--•၊၊||၊|။|||||။၊|။•--"
  }
];

const navbar = [
  { label: "Beranda", link: "index.html" },
  { label: "Login", link: "abcd.html"},
  { label: "Developer's Profile 🏆", link: "http://www.linkedin.com/in/ahmad-fikri-id", class: "fikri-link", target: "_blank" },
];

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return; // kalau tidak ada sidebar, skip
  
  const currentPage = window.location.pathname.split('/').pop();
  sidebar.innerHTML = '<div class="sidebar-title">Daftar Modul</div>';
  
  for (let i = 0; i < modul.length; i++) {
    const customClass = modul[i].class ? modul[i].class : '';
    const target = modul[i].target ? modul[i].target : '';
    const isActive = modul[i].link === currentPage ? 'active' : '';
    sidebar.innerHTML += `
      <a href="${modul[i].link}" class="sidebar-link ${isActive}" target="${target}">
        <span class="sidebar-num">${modul[i].nomor}</span>
        ${modul[i].judul}
      </a>
    `;
  }
}

renderSidebar()

function renderModul() {
  const container = document.getElementById('modul-container');
  if (!container) return;

  for (let i = 0; i < modul.length; i++) {
    const customClass = modul[i].class ? modul[i].class : '';
    const target = modul[i].target ? modul[i].target : '';
    
    container.innerHTML += `
      <div class="card ${customClass}" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="card-num">Bagian ${modul[i].nomor}</div>
        <h3>${modul[i].judul}</h3>
        <p>${modul[i].deskripsi}</p>
        <a href="${modul[i].link}" class="btn-primary" target="${target}">${modul[i].label}</a>
      </div>
    `;
  }
}
renderModul()