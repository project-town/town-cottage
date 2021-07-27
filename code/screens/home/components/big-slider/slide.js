import React from "react";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

function Slide({ _relativeURL, _ID, img }) {
  return img ? (
    <li className="splide__slide">
      <Img src={handleUrl(img, _relativeURL, _ID)} />
    </li>
  ) : null;
}

export default Slide;
