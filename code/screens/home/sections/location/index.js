import React from "react";

const Location = ({ gridSection, title }) => {
  return (
    <div className="location section">
      <div className="indicator" id={title}></div>
      {gridSection}
    </div>
  );
};

export default Location;
