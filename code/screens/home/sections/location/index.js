import React from "react";
import animations from "../../../../../assets/js/animations";

const Location = ({ gridSection, title }) => {
  return (
    <div className="location section" data-aos={animations.up}>
      <div className="indicator" id={title}></div>
      {gridSection}
    </div>
  );
};

export default Location;
