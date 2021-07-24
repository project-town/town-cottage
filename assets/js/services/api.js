import "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";

import {
  USER_ID,
  USER_SERVICE_ID,
  SUBSCRIBE_TEMPLATE_ID,
  CONTACT_TEMPALTE_ID,
} from "../keys/index.js";

emailjs.init(USER_ID);

const subscribe = (body) => {
  return emailjs.send(USER_SERVICE_ID, SUBSCRIBE_TEMPLATE_ID, body);
};

const contact = (body) => {
  return emailjs.send(USER_SERVICE_ID, CONTACT_TEMPALTE_ID, body);
};
export default {
  subscribe,
  contact,
};
