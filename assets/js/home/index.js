import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js";
import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
  toggleBodyOverflow,
} from "../common/index.js";

import { init } from "../index.js";
import { initSliders } from "./sliders/index.js";

window.onload = () => {
  init();
  initSliders();
  showPlan();
  closeEvents();
  toggleMobilePlanView();
};

const closeEvents = () => {
  const closeBtn = getElements(".full-plan-close");
  closeBtn.forEach((btn) => {
    addEvent(btn, "click", hidePlan);
  });
};

const hidePlan = () => {
  const plans = getElements(".full-plan");
  toggleBodyOverflow();
  plans.forEach((plan) => {
    plan.classList.remove("full-plan-active");
  });
};

const showPlan = () => {
  const plans = getElements(".plan");

  plans.forEach((plan) => {
    addEvent(plan, "click", () => {
      sctollToElement();
      toggleBodyOverflow(true);
      const id = getElementAttribute(plan, "data-id");
      const full = getElements(`.${id}`);
      full.forEach((element) => {
        element.classList.add("full-plan-active");
      });
    });
  });
};

const sctollToElement = () => {
  const element = getElement(".plans");
  element.scrollIntoView();
};

const toggleMobilePlanView = () => {
  const selectionBtns = getElements(".full-mobile-plan-selector");

  const allViews = getElements(".plan-view");
  selectionBtns.forEach((btn) => {
    const id = getElementAttribute(btn, "data-id");

    addEvent(btn, "click", () => {
      allViews.forEach((view) => {
        if (view.classList.contains(id)) {
          view.style.display = "block";
        } else {
          view.style.display = "none";
        }
      });
    });
  });
};
