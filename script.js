// Smooth scroll
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
document.getElementById("darkMode").onclick = () => {
  document.body.classList.toggle("dark");
};