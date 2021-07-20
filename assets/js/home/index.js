import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js";
import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../common/index.js";

import { init } from "../index.js";
import { initSliders } from "./sliders/index.js";

window.onload = () => {
  init();
  initSliders();
  showPlan();
  closeEvents();
};

const closeEvents = () => {
  const closeBtn = getElements(".full-plan-close");
  closeBtn.forEach((btn) => {
    addEvent(btn, "click", hidePlan);
  });
};

const hidePlan = () => {
  const plans = getElements(".full-plan");
  plans.forEach((plan) => {
    plan.classList.remove("full-plan-active");
  });
};

const showPlan = () => {
  const plans = getElements(".plan");
  plans.forEach((plan) => {
    console.log("plan");
    addEvent(plan, "click", () => {
      const id = getElementAttribute(plan, "data-id");
      const full = document.querySelector(`.${id}`);
      console.log(full);
      full.classList.add("full-plan-active");
    });
  });
};
