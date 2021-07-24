import React from "react";
import animations from "../../../../../assets/js/animations";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

const Concept = ({ gridSection, title }) => {
  return (
    <div
      className="concept section"
      data-aos={animations.up}
      data-aos-delay="100"
    >
      <div className="indicator" id={title}></div>

      {gridSection}
    </div>
  );
};

export default Concept;
