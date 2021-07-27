import React from "react";
import Img from "../../../../../common/img/Img";

function Slide({ img }) {
  return img ? (
    <div className="slide splide__slide">
      <Img src={img} />
    </div>
  ) : null;
}
export default Slide;
