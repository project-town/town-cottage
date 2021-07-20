import React from "react";
import images from "../../../../../../assets/js/images";
import Img from "../../../../../common/img/Img";
import { handleUrl } from "../../../../../utils/url";

function Slider({ slides, _relativeURL, _ID }) {
  return (
    <div class="simple-slider">
      <div class="splide__arrows arrows">
        <button class="splide__arrow splide__arrow--prev">
          <Img src={handleUrl(images.slider.prev, _relativeURL, _ID)} />
        </button>
        <button class="splide__arrow splide__arrow--next">
          <Img src={handleUrl(images.slider.next, _relativeURL, _ID)} />
        </button>
      </div>
      <div class="splide__track">
        <ul class="splide__list">{slides}</ul>
      </div>
    </div>
  );
}

export default Slider;
