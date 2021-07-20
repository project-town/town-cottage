import React from "react";
import Img from "../../../../../common/img/Img";

function Slide({ img }) {
  return (
    <div className="slide splide__slide">
      <Img src={img} />
    </div>
  );
}
export default Slide;
