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
const media = window.matchMedia('(width < 44.875rem)');
const skipLink = document.querySelector('.skip-link');
const logo = document.querySelector('.logo');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function closeMobileMenu() {
  // Remove inert attribute from elements
  skipLink.removeAttribute('inert');
  logo.removeAttribute('inert');
  main.removeAttribute('inert');
  footer.removeAttribute('inert');

  // Remove overlay
  nav.classList.remove('overlay');

  // Update attributes for menu buttons
  closeMenuBtn.classList.add('hidden');
  openMenuBtn.classList.remove('hidden');
  openMenuBtn.setAttribute('aria-expanded', false);

  // Direct focus to open menu button
  openMenuBtn.focus();

  setTimeout(() => {
    navList.style.transition = 'none';
  }, 500);
}

function openMobileMenu() {
  // Add inert attribute to elements
  skipLink.setAttribute('inert', '');
  logo.setAttribute('inert', '');
  main.setAttribute('inert', '');
  footer.setAttribute('inert', '');

  // Add overlay
  nav.classList.add('overlay');

  // Return transition to navList
  navList.removeAttribute('style');

  // Update attributes for menu buttons
  openMenuBtn.setAttribute('aria-expanded', true);
  openMenuBtn.classList.add('hidden');
  closeMenuBtn.classList.remove('hidden');

  // Direct focus to close menu button
  closeMenuBtn.focus();
}

function setupMainNav(e) {
  if (e.matches) {
    // Get rid of transition animation bug when resizing to mobile
    navList.style.transition = 'none';
  } else {
    // If mobile menu is open, close it if the screen is resized to desktop/tablet
    closeMobileMenu();
  }
}

// Add the burger and close menu buttons to the nav
nav.insertBefore(burgerClone, navList);
nav.insertBefore(closeMenuClone, navList);

// Watch for media query change
setupMainNav(media);
media.addEventListener('change', setupMainNav);

// Add event listeners to menu buttons
closeMenuBtn.addEventListener('click', closeMobileMenu);
openMenuBtn.addEventListener('click', openMobileMenu);

// Close mobile menu with the Escape key
nav.addEventListener('keyup', (e) => {
  if (e.code === 'Escape') {
    closeMobileMenu();
  }
});
