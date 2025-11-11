// i18n Translation System
const translations = {
  en: {
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'hero-hello': 'Hello, I am',
    'hero-role': 'Full-Stack Programmer',
    'hero-desc': 'I build scalable web applications, from modern frontend to robust backend. With experience in JavaScript, React, Node.js, and database design.',
    'hero-btn-projects': 'View Projects',
    'hero-btn-contact': 'Contact Me',
    'projects-title': 'Featured Projects',
    'p1-title': 'Smart Clinic - e-Health',
    'p1-desc': 'Integrated healthcare management platform with complete dashboard. Features: E-Prescription, Medical Check, Hospital Registration, Doctor Consultation, Lab Tests, Ambulance Service, Health, Hospitalization, Medical History. Built with Laravel & Blade templates.',
    'p2-title': 'Geospatial Survey Mobile App',
    'p2-desc': 'Mobile application for geographic data collection and area analysis. Responsive interface with intuitive navigation, profile management, and data visualization. Complete documentation available on Google Drive.',
    'p3-title': 'WebGIS - Interactive Map Dusun Teluk',
    'p3-desc': 'Professional WebGIS platform with interactive mapping using Leaflet. Features: Map Legend, Layer Management, Statistics, Gallery, Community Potential. Complete spatial analysis with multiple data layers for planning and decision support.',
    'btn-live': 'Live',
    'btn-docs': 'View Docs',
    'btn-download': 'Download',
    'btn-code': 'Code',
    'about-title': 'About Me',
    'about-desc1': 'I am a developer focused on creating robust, user-friendly, and scalable web and mobile solutions. With experience using various tech stacks like PHP/Laravel, HTML/CSS/JavaScript, and Ionic framework.',
    'about-desc2': 'I am passionate about problem solving, clean code, and continuous learning. I enjoy working with teams and also independently completing projects.',
    'about-skills-title': 'Key Skills',
    'skill-web': 'Web Development',
    'skill-mobile': 'Mobile Apps',
    'skill-backend': 'Backend Systems',
    'skill-db': 'Database Design',
    'skill-problem': 'Problem Solving',
    'skills-title': 'Tech Stack',
    'skills-frontend': 'Frontend',
    'skills-responsive': 'Responsive Design',
    'skills-animation': 'Web Animation',
    'skills-backend': 'Backend & CMS',
    'skills-mobile': 'Mobile & Tools',
    'contact-title': 'Get In Touch',
    'form-name': 'Name',
    'form-email': 'Email',
    'form-message': 'Message',
    'form-send': 'Send Message',
    'contact-email-title': '📧 Email',
    'contact-phone-title': '📱 Contact',
    'contact-social-title': '🔗 Social Links',
    'contact-footer': 'Location: Indonesia | Response: <24 hours'
  },
  id: {
    'nav-projects': 'Proyek',
    'nav-skills': 'Skills',
    'nav-about': 'Tentang',
    'nav-contact': 'Kontak',
    'hero-hello': 'Halo, saya',
    'hero-role': 'Full-Stack Programmer',
    'hero-desc': 'Saya membangun aplikasi web yang scalable, dari frontend modern hingga backend robust. Dengan pengalaman dalam JavaScript, React, Node.js, dan database design.',
    'hero-btn-projects': 'Lihat Proyek',
    'hero-btn-contact': 'Hubungi Saya',
    'projects-title': 'Featured Projects',
    'p1-title': 'Smart Clinic - e-Health',
    'p1-desc': 'Platform manajemen kesehatan terintegrasi dengan dashboard lengkap. Fitur: E-Resep, Cek Medis, Daftar RS, Konsul Dokter, Tes Lab, Layanan Ambulans, Kesehatan, Rawat Inap, Riwayat Medis. Built dengan Laravel & Blade templates.',
    'p2-title': 'Geospatial Survey Mobile App',
    'p2-desc': 'Aplikasi mobile untuk pengumpulan data dan analisis wilayah geografis. Interface responsif dengan navigasi intuitif, profile management, dan data visualization. Dokumentasi lengkap tersedia di Google Drive.',
    'p3-title': 'WebGIS - Peta Interaktif Dusun Teluk',
    'p3-desc': 'Platform WebGIS profesional dengan peta interaktif menggunakan Leaflet. Fitur: Legenda Peta, Layer Management, Statistik, Galeri, Potensi Dusun. Complete spatial analysis dengan multiple data layers untuk planning dan decision support.',
    'btn-live': 'Live',
    'btn-docs': 'View Docs',
    'btn-download': 'Download',
    'btn-code': 'Code',
    'about-title': 'Tentang Saya',
    'about-desc1': 'Saya seorang developer yang berfokus pada pembuatan solusi web dan mobile yang robust, user-friendly, dan scalable. Dengan pengalaman menggunakan berbagai stack tech seperti PHP/Laravel, HTML/CSS/JavaScript, dan Ionic framework.',
    'about-desc2': 'Saya passionate tentang problem solving, clean code, dan continuous learning. Suka bekerja dengan tim dan juga mandiri dalam menyelesaikan project.',
    'about-skills-title': 'Keahlian Utama',
    'skill-web': 'Web Development',
    'skill-mobile': 'Mobile Apps',
    'skill-backend': 'Backend Systems',
    'skill-db': 'Database Design',
    'skill-problem': 'Problem Solving',
    'skills-title': 'Tech Stack',
    'skills-frontend': 'Frontend',
    'skills-responsive': 'Responsive Design',
    'skills-animation': 'Web Animation',
    'skills-backend': 'Backend & CMS',
    'skills-mobile': 'Mobile & Tools',
    'contact-title': 'Get In Touch',
    'form-name': 'Nama',
    'form-email': 'Email',
    'form-message': 'Pesan',
    'form-send': 'Kirim Pesan',
    'contact-email-title': '📧 Email',
    'contact-phone-title': '📱 Kontak',
    'contact-social-title': '🔗 Social Links',
    'contact-footer': 'Lokasi: Indonesia | Response: <24 jam'
  }
};

// Get current language from localStorage, default to 'en'
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Set language and update all elements
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.textContent = lang === 'en' ? '🌐 ID' : '🌐 EN';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
  
  // Add click event to language toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      const newLang = getCurrentLanguage() === 'en' ? 'id' : 'en';
      setLanguage(newLang);
    });
  }
});
