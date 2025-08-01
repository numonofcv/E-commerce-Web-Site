const mobileMenuIcon = document.getElementById('bar');
const closeNav = document.getElementById('close-nav');
const navList = document.querySelector('.nav-list');

mobileMenuIcon.addEventListener('click', () => {
  navList.classList.add('show');
});

closeNav.addEventListener('click', () => {
  navList.classList.remove('show');
});
