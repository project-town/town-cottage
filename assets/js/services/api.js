import "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";

import {
  USER_ID,
  USER_SERVICE_ID,
  USER_SUBSCRIBE_TEMPLATE_ID,
} from "../keys/index.js";

emailjs.init(USER_ID);

const subscribe = (body) => {
  return emailjs.send(USER_SERVICE_ID, USER_SUBSCRIBE_TEMPLATE_ID, body);
};
export default {
  subscribe,
};
