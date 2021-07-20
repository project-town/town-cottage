import { getElement } from "./common/index.js";
import contact from "./contact/index.js";
import {
  handleNavbarBackground,
  handleNavbarTransform,
} from "./navbar/index.js";
import subscribe from "./subscribe/index.js";

export const init = () => {
  subscribe.addEvents();
  contact.addEvents();
  const navbar = getElement(".navbar");
  handleOnScroll(navbar);
};

const handleOnScroll = (navbar) => {
  document.addEventListener(
    "scroll",
    () => {
      handleNavbarBackground(navbar);
      handleNavbarTransform(navbar);
    },
    { passive: true }
  );
};
