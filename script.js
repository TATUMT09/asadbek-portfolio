document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Xabaringiz muvaffaqiyatli yuborildi! Tez orada aloqaga chiqaman.");
    form.reset();
  });

  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');

  if(navToggle){
    navToggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});
