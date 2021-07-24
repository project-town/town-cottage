import { getElementAttribute } from "../common/index.js";

export const inputValidation = (input) => {
  const isRequired = getElementAttribute(input, "data-required");
  const isEmpty = !input.value;
  if (isEmpty && isRequired) {
    return true;
  }

  const type = getElementAttribute(input, "data-type");
  let isValid = true;
  switch (type) {
    case "email":
      isValid = validateEmail(input.value);
      break;
    case "phone":
      isValid = validatePhone(input.value);
      break;
    default:
      break;
  }
  if (!isValid) {
    return true;
  }
};

export const validatePhone = (value) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const isValid = re.test(String(value).toLowerCase());
  return isValid;
};

export const validateEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = re.test(String(value).toLowerCase());
  return isValidEmail;
};
