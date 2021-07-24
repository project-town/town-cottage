import React from "react";
import animations from "../../../../../assets/js/animations";

function Forest({ sliderContainer }) {
  return (
    <div
      className="forest section"
      data-aos={animations.up}
      data-aos-delay="100"
    >
      {sliderContainer}
    </div>
  );
}

export default Forest;
