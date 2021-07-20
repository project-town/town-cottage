import React from "react";

const Infrastructure = ({ gridSection, title }) => {
  return (
    <div className="infrastructure section">
      <div className="indicator" id={title}></div>

      {gridSection}
    </div>
  );
};

export default Infrastructure;
