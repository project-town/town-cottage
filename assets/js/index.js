import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "./common/index.js";
import contact from "./contact/index.js";
import navbar from "./navbar/index.js";
import subscribe from "./subscribe/index.js";
import video from "./video/index.js";

const readMoreBtnsEvent = () => {
  const btns = getElements(".read-more");
  btns.forEach((btn) => {
    const id = getElementAttribute(btn, "data-id");
    const text = getElement(`.${id}`);
    if (!text) return;
    addEvent(btn, "click", () => showExtra(text, btn));
  });
};

const showExtra = (text, btn) => {
  console.log(text);
  if (text.style.display !== "flex") {
    btn.classList.add("read-more-hidden");

    return (text.style.display = "flex");
  } else {
    btn.classList.remove("read-more-hidden");
    btn.style.background = "";
    text.style.display = "none";
  }
};

export const init = () => {
  subscribe.addEvents();
  contact.addEvents();
  const navbarElement = getElement(".navbar");
  handleOnScroll(navbarElement);
  navbar.init();
  video.makeVideoPlay();
  readMoreBtnsEvent();
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
