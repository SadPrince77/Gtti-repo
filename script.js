// script.js - Unified for all pages (no form code)

document.addEventListener('DOMContentLoaded', () => {
  // 🔹 Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
    .forEach(el => observer.observe(el));

  // 🔹 Smooth scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 🔹 Set active link based on current page
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

});

// 🔹 Toggle course details (for courses.html)
function toggleCourseDetails(id) {
  document.querySelectorAll('.course-details').forEach(d => d.style.display = 'none');
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
}
