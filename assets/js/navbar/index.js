export const handleNavbarBackground = (navbar) => {
  const offsetTop = window.pageYOffset;
  if (offsetTop >= 20) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
let scrollPos = 0;
export const handleNavbarTransform = (navbar) => {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    navbar.classList.remove("navbar-hidden");
  } else {
    if (document.body.getBoundingClientRect().top < -100) {
      navbar.classList.add("navbar-hidden");
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
};
