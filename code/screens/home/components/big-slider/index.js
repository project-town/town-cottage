import React from "react";
import images from "../../../../../assets/js/images";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

function BigSlider({
  slides,
  _relativeURL,
  _ID,
  _body,
  boxes,
  callBtn,
  secondarySlider,
  isLeft,
}) {
  return (
    <div
      className={`big-slider-wrapper big-slider-wrapper-${
        isLeft ? "left" : "right"
      }`}
    >
      <div className="big-slider-body">
        {_body}
        {callBtn}
      </div>
      <div className="big-slider">
        <section className="big-slider-overlay"></section>
        <div className="boxes">{boxes}</div>
        {!secondarySlider && (
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <Img src={handleUrl(images.slider.prev, _relativeURL, _ID)} />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <Img src={handleUrl(images.slider.next, _relativeURL, _ID)} />
            </button>
          </div>
        )}
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
      {secondarySlider && secondarySlider}
    </div>
  );
}

export default BigSlider;
