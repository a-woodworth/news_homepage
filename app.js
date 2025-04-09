const nav = document.querySelector('.main-nav');
const navList = document.querySelector('.main-nav-list');
const burgerTemplate = document.querySelector('#burger-template');
const burgerClone = burgerTemplate.content.cloneNode(true);
const openMenuBtn = burgerClone.querySelector('.mobile-nav__open');
const closeMenuTemplate = document.querySelector(
  '#close-menu-template'
);
const closeMenuClone = closeMenuTemplate.content.cloneNode(true);
const closeMenuBtn = closeMenuClone.querySelector(
  '.mobile-nav__close'
);

function closeMobileMenu() {
  closeMenuBtn.classList.toggle('hidden');
  openMenuBtn.classList.toggle('hidden');
  openMenuBtn.setAttribute('aria-expanded', false);
  openMenuBtn.focus();
}

function openMobileMenu() {
  openMenuBtn.setAttribute('aria-expanded', true);
  openMenuBtn.classList.toggle('hidden');
  closeMenuBtn.classList.toggle('hidden');
  closeMenuBtn.focus();
}

// Add the burger and close menu buttons to the nav
nav.insertBefore(burgerClone, navList);
nav.insertBefore(closeMenuClone, navList);

// Add event listeners to menu buttons
closeMenuBtn.addEventListener('click', closeMobileMenu);
openMenuBtn.addEventListener('click', openMobileMenu);

// Close mobile menu with the Escape key
nav.addEventListener('keyup', (e) => {
  if (e.code === 'Escape') {
    closeMobileMenu();
  }
});
