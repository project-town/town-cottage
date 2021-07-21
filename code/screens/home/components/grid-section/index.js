import React from "react";

const GridSection = ({
  slider,
  _body,
  secondarySlider,
  isLeft,
  callBtn,
  video,
}) => {
  return (
    <div className={`grid-section grid-section-${isLeft ? "left" : "right"}`}>
      {video ? video : slider}
      <div className="grid-section-content">
        <div className="grid-section-content-body">
          {_body} {callBtn}
        </div>
        {secondarySlider}
      </div>
    </div>
  );
};

export default GridSection;
