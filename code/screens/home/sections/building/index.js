import React from "react";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

const Building = ({ gridSection, title }) => {
  return (
    <div className="building section">
      <div className="indicator" id={title}></div>
      {gridSection}
    </div>
  );
};

export default Building;
