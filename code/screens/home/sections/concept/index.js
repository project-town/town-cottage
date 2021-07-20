import React from "react";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

const Concept = ({ gridSection, title }) => {
  return (
    <div className="concept section">
      <div className="indicator" id={title}></div>

      {gridSection}
    </div>
  );
};

export default Concept;
