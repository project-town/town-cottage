import { addEvent, getElement, getElements } from "../common/index.js";

let scrollPos = 0;

const handleNavbarBackground = (navbar) => {
  const offsetTop = window.pageYOffset;
  if (offsetTop >= 20) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
const handleNavbarTransform = (navbar) => {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    navbar.classList.remove("navbar-hidden");
  } else {
    if (document.body.getBoundingClientRect().top < -100) {
      navbar.classList.add("navbar-hidden");
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
};

const addEvents = () => {
  const languageToggle = getElement(".navbar-language-selected");
  addEvent(languageToggle, "click", toggleLanguageSelect);
  const mobileHamburger = getElement(".hamburger");
  addEvent(mobileHamburger, "click", showMobileMenu);

  const mobileClosBtn = getElement(".mobile-navbar-menu-close");
  addEvent(mobileClosBtn, "click", hideMobileMenu);
  const menuBtns = getElements(".mobile-navbar-menu li");
  menuBtns.forEach((element) => {
    addEvent(element, "click", hideMobileMenu);
  });
};

const showMobileMenu = () => {
  const menu = getElement(".mobile-navbar-menu");
  menu.classList.add("mobile-navbar-menu-active");
};

const hideMobileMenu = () => {
  const menu = getElement(".mobile-navbar-menu");
  menu.classList.remove("mobile-navbar-menu-active");
};

const init = () => {
  addEvents();
};

const toggleLanguageSelect = () => {
  const languageMenu = getElement(".navbar-language");

  if (languageMenu.classList.contains("navbar-language-active")) {
    return languageMenu.classList.remove("navbar-language-active");
  }
  return languageMenu.classList.add("navbar-language-active");
};

export default { init, handleNavbarTransform, handleNavbarBackground };
