export const createConceptSlider = () => {
  gridSectionSlider("concept");
};

export const createLocationSlider = () => {
  gridSectionSlider("location", true);
};

export const gridSectionSlider = (name, isSecondary) => {
  const primarySlider = new Splide(`.${name} .simple-slider`, {
    type: "fade",
    rewind: true,
    pagination: false,
    cover: true,
    arrow: false,
  });
  if (!isSecondary) {
    return primarySlider.mount();
  }
  const secondarySlider = new Splide(`.${name} .secondary-slider`, {
    rewind: true,
    type: "loop",
    fixedWidth: 200,
    fixedHeight: 150,
    perPage: 3,
    isNavigation: true,
    pagination: false,
    arrows: false,
    cover: true,
    speed: 300,
    gap: 15,
    breakpoints: {
      700: {
        fixedWidth: 125,
        gap: 10,
        height: 95,
      },
    },
    focus: "center",
    pagination: false,
    cover: true,
  }).mount();
  primarySlider.sync(secondarySlider).mount();
};

export const createHeaderSlider = () => {
  new Splide(".header .big-slider", {
    type: "fade",
    rewind: true,
    pagination: false,
  }).mount();
};

export const simpleSlider = (name) => {
  new Splide(`.${name}`, {
    type: "fade",
    rewind: true,
    pagination: false,
  }).mount();
};

const createBigSlider = (name, isSecondary) => {
  const primarySlider = new Splide(`.${name} .big-slider`, {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
  }).mount();
  if (!isSecondary) {
    return;
  }
  const secondarySlider = new Splide(`.${name} .big-slider-secondary`, {
    type: "loop",
    rewind: true,
    perPage: 4.5,
    speed: 300,
    isNavigation: true,
    fixedWidth: 345,
    gap: 15,
    breakpoints: {
      700: {
        fixedWidth: 300,
        gap: 10,
        height: 180,
      },
    },
    focus: "center",
    pagination: false,
    cover: true,
    perMove: 1,
  }).mount();
  primarySlider.sync(secondarySlider).mount();
};

const createVillageSlider = () => {
  createBigSlider("village", true);
};

export const createForestSlider = () => {
  createBigSlider("forest", true);
};

const initPlanSliders = () => {
  const names = [
    "plan-1-slider",
    "plan-2-slider",
    "plan-3-slider",
    "plan-1-mobile-slider",
    "plan-2-mobile-slider",
    "plan-3-mobile-slider",
  ];

  names.forEach((name) => {
    simpleSlider(name);
  });
};

export const initSliders = () => {
  createLocationSlider();
  createConceptSlider();
  gridSectionSlider("infrastructure", true);
  createHeaderSlider();
  createVillageSlider();
  createForestSlider();
  initPlanSliders();
};
