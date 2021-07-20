import api from "../services/api.js";

import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../common/index.js";

const addEvents = () => {
  const btns = getElements(".popup-btn");
  btns.forEach((btn) => {
    addEvent(btn, "click", showPopup);
  });
  const successBtn = getElement(".success .btn");
  addEvent(successBtn, "click", hidePopup);
  const form = getElement(".contact-form");

  form.addEventListener("submit", (e) => {
    hadleSubmit(e);
  });
  const inputs = getElements(".contact-form-input");
  inputs.forEach((input) => {
    const isRequired = getElementAttribute(input, "data-required");
    if (!isRequired) return;

    addEvent(input, "blur", handleBlur);
    addEvent(input, "focus", handleFocus);
  });
  closePopupEvent();
  showPopupEvent();
};

const closePopupEvent = () => {
  const closeBtn = getElement(".contact-form-close");
  addEvent(closeBtn, "click", hidePopup);
  const overlay = getElement(".contact-overlay");
  addEvent(overlay, "click", hidePopup);
};

const showPopupEvent = () => {
  const showPopupBtns = getElements(".show-contact-popup");
  showPopupBtns.forEach((btn) => {
    addEvent(btn, "click", showPopup);
  });
};

const showPopup = () => {
  const popup = getElement(".contact");
  popup.classList.add("contact-active");
};

const hidePopup = () => {
  const popup = getElement(".contact");

  popup.classList.remove("contact-active");
};

const handleBlur = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  if (!value) {
    handleError(name, true);
  }
};

const handleFocus = (e) => {
  const name = e.target.name;
  handleError(name);
};

const handleLoading = () => {
  //   const subscribe = getElement(".subscribe");
  //   return subscribe.classList.add("subscribe-loading");
};

const handleSuccess = (inputs) => {
  const contact = getElement(".contact");
  contact.classList.add("contact-submitted");
  inputs.forEach((input) => {
    input.value = "";
  });
};

const hadleSubmit = async (e) => {
  e.preventDefault();
  const inputs = getElements(".contact-form-input");
  const body = {};
  inputs.forEach((input) => {
    const name = input.name;
    const value = input.value;
    const isRequired = getElementAttribute(input, "data-required");
    if (!value && isRequired) {
      return handleError(name, true);
    }
    body[name] = value;
  });

  const { contactName, contactPhone } = body;
  if (!contactName || !contactPhone) return;
  handleLoading();
  try {
    // await api.sendUserDetails(body);
    handleSuccess(inputs);
  } catch (error) {}
};
const handleError = (name, show) => {
  const error = getElement(`.${name}-error`);
  console.log(error);
  if (show) {
    return (error.style.display = "block");
  }
  error.style.display = "none";
};
export default {
  addEvents,
};
