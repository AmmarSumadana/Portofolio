// Dark mode toggle and simple contact form handler
(function(){
  const themeToggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') document.documentElement.setAttribute('data-theme','dark');

  themeToggle.addEventListener('click', ()=>{
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if(isDark){
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme','light');
    } else {
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('theme','dark');
    }
  });

  // contact form -> mailto
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    const subject = encodeURIComponent('Pesan dari portofolio — ' + name);
    const body = encodeURIComponent('Dari: ' + name + ' (' + email + ')\n\n' + message);
    const mailto = `mailto:email@domain.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });
})();
