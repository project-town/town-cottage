import api from "../services/api.js";

import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../common/index.js";
import { inputValidation } from "../common/form-validation.js";

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
    addEvent(input, "blur", () => handleBlur(input));
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

  const successBtns = getElements(".hide-success");
  successBtns.forEach((btn) => {
    addEvent(btn, "click", hidePopup);
  });
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
  popup.classList.remove("contact-submitted");
  const subscribeContainers = getElements(".subscribe-form");
  subscribeContainers.forEach((e) => {
    e.classList.remove("subscribe-submitted");
  });
};

const handleBlur = (input) => {
  const isError = inputValidation(input);
  const name = getElementAttribute(input, "name");
  if (isError) {
    handleError(name, true);
  }
};

const handleFocus = (e) => {
  const name = e.target.name;
  handleError(name);
};

const handleLoading = (val) => {
  const submitBtn = getElement(".contact-form-submit-btn");
  const loader = getElement(".contact-form-submit-loader");
  if (val) {
    submitBtn.style.display = "none";
    loader.classList.add("contact-form-submit-loader-active");
  } else {
    submitBtn.style.display = "block";
    loader.classList.remove("contact-form-submit-loader-active");
  }
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
  const errors = [];
  inputs.forEach((input) => {
    const isError = inputValidation(input);
    const name = getElementAttribute(input, "name");
    if (isError) {
      errors.push(true);
      return handleError(name, true);
    }
    body[name] = input.value;
  });

  if (errors.length > 0) return;

  handleLoading(true);
  try {
    await api.contact(body);
    handleSuccess(inputs);
  } catch (error) {
  } finally {
    handleLoading();
  }
};
const handleError = (name, show) => {
  const error = getElement(`.${name}-error`);

  if (show) {
    return (error.style.display = "block");
  }
  error.style.display = "none";
};
export default {
  addEvents,
};
