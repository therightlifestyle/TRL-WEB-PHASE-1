// TRL Phase 1 - Proof Engine - Simple Professional v4
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.service-card, .problem-card, .pillar, .step, .price-card, .portfolio-card, .founder-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Glow parallax
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const glow = document.querySelector('.glow-1');
        if (glow) glow.style.transform = `translateX(-50%) translateY(${scrolled * 0.08}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });

  console.log('TRL Phase 1 - Proof Engine v4 loaded • WhatsApp 0319 0091456 • Community https://chat.whatsapp.com/BY9440hj8ws9F5034zBhHL');
});
