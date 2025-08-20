// Get saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

document.getElementById('toggle-theme').addEventListener('click', () => {
  // Get theme
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Set theme
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#navbar-links a");
  const currentPath = window.location.pathname;

  // TODO make this dynamic, blegh
  for (let i = 0; i < 3; ++i) {
    const link = links[i];
    const url = new URL(link.href).pathname;

    if (url === currentPath) {
      link.classList.add("active-link");
    }
  }
});
