import React from "react";
import images from "../../../../../../assets/js/images";
import Img from "../../../../../common/img/Img";
import { handleUrl } from "../../../../../utils/url";

function Slide({ id, _relativeURL, _ID, slides }) {
  return (
    <div className={`full-plan-slider ${id}-slider`}>
      <div className="splide__arrows arrows">
        <button className="splide__arrow splide__arrow--prev">
          <Img src={handleUrl(images.slider.prev, _relativeURL, _ID)} />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <Img src={handleUrl(images.slider.next, _relativeURL, _ID)} />
        </button>
      </div>
      <div className="splide__track">
        <ul className="splide__list">
          {slides.map((slide) => {
            return (
              <li className="splide__slide">
                <Img src={handleUrl(slide, _relativeURL, _ID)} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Slide;
