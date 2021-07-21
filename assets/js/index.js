import { getElement } from "./common/index.js";
import contact from "./contact/index.js";
import navbar from "./navbar/index.js";
import subscribe from "./subscribe/index.js";
import video from "./video/index.js";

export const init = () => {
  subscribe.addEvents();
  contact.addEvents();
  const navbarElement = getElement(".navbar");
  handleOnScroll(navbarElement);
  navbar.init();
  video.makeVideoPlay();
};

const handleOnScroll = (navbarElement) => {
  document.addEventListener(
    "scroll",
    () => {
      navbar.handleNavbarBackground(navbarElement);
      navbar.handleNavbarTransform(navbarElement);
    },
    { passive: true }
  );
};
