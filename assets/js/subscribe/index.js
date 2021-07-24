import api from "../services/api.js";
import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../common/index.js";
import { inputValidation } from "../common/form-validation.js";

const addEvents = () => {
  const ids = [".form-1", ".form-2", ".form-3"];
  ids.forEach((id) => {
    const form = getElement(id);

    form.addEventListener("submit", (e) => {
      hadleSubmit(e, id);
    });
    const inputs = getElements(`${id} .subscribe-form-section input`);
    inputs.forEach((input) => {
      input.addEventListener(
        "blur",
        (e) => {
          handleBlur(input, id);
        },
        { passive: true }
      );
      input.addEventListener(
        "focus",
        (e) => {
          handleFocus(e, id);
        },
        { passive: true }
      );
    });
  });
};

const handleBlur = (input, id) => {
  const name = getElementAttribute(input, "name");
  const isError = inputValidation(input);
  if (isError) {
    handleError(name, true, id);
  }
};

const handleFocus = (e, id) => {
  const name = e.target.name;
  handleError(name, false, id);
};

const handleLoading = (id) => {
  const subscribe = getElement(id);
  return subscribe.classList.add("subscribe-loading");
};

const handleSuccess = (inputs, id) => {
  const subscribe = getElement(id);
  subscribe.classList.remove("subscribe-loading");
  inputs.forEach((input) => {
    input.value = "";
  });
  return subscribe.classList.add("subscribe-submitted");
};

const hadleSubmit = async (e, id) => {
  e.preventDefault();
  const inputs = getElements(`${id} .subscribe-form-section input`);
  const body = {};
  const errors = [];
  inputs.forEach((input) => {
    const isError = inputValidation(input);
    const name = getElementAttribute(input, "name");
    if (isError) {
      errors.push(true);
      return handleError(name, true, id);
    }
    body[name] = input.value;
  });

  if (errors.length > 0) return;

  const { name, phone } = body;
  if (!phone || !name) return;
  handleLoading(id);
  try {
    await api.subscribe(body);
    handleSuccess(inputs, id);
  } catch (error) {}
};
const handleError = (name, show, id) => {
  const error = getElement(`${id} .${name}-error`);
  if (show) {
    return error.classList.add("subscribe-form-error-active");
  }
  return error.classList.remove("subscribe-form-error-active");
};
export default {
  addEvents,
};
