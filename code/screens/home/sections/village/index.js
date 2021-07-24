import React from "react";
import animations from "../../../../../assets/js/animations";

function Village({ sliderContainer }) {
  return (
    <div
      className="village section"
      data-aos={animations.up}
      data-aos-delay="100"
    >
      {sliderContainer}
    </div>
  );
}

export default Village;
