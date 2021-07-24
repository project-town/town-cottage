import React from "react";
import animations from "../../../../../assets/js/animations";

const Infrastructure = ({ gridSection, title }) => {
  return (
    <div
      className="infrastructure section"
      data-aos={animations.up}
      data-aos-delay="100"
    >
      <div className="indicator" id={title}></div>

      {gridSection}
    </div>
  );
};

export default Infrastructure;
