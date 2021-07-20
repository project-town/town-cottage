import React from "react";
import Img from "../../../../../common/img/Img";
import { handleUrl } from "../../../../../utils/url";

function SecondarySlider({ slides, _relativeURL, _ID }) {
  return (
    <div class="secondary-slider">
      <div class="splide__track">
        <ul class="splide__list">
          {slides.map((slide) => {
            return (
              <li className="splide__slide">
                <div className="overlay"></div>
                <Img src={handleUrl(slide, _relativeURL, _ID)} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SecondarySlider;
