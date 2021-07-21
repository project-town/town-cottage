import { addEvent, getElement } from "../common/index.js";

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
  const languageMenu = getElement(".navbar-language");
  addEvent(window, "click");
  const languageToggle = getElement(".navbar-language-selected");
  addEvent(languageToggle, "click", toggleLanguageSelect);
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
