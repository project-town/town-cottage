import React from "react";
import animations from "../../../../../assets/js/animations";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

const Building = ({ gridSection, title }) => {
  return (
    <div
      className="building section"
      data-aos={animations.up}
      data-aos-delay="100"
    >
      <div className="indicator" id={title}></div>
      {gridSection}
    </div>
  );
};

export default Building;
