import React from "react";
import images from "../../../../../../assets/js/images";
import Img from "../../../../../common/img/Img";
import { handleUrl } from "../../../../../utils/url";
import Slider from "./slider";

function FullPlanMobile(props) {
  const {
    slides,
    bedroomsText,
    bathroomText,
    meters,
    date,
    dateText,
    classLevel,
    classText,
    price,
    priceText,
    familyText,
    firstPay,
    firstPayText,
    btn,
    _relativeURL,
    _ID,
    title,
    id,
    _body,
  } = props;
  return (
    <div className={`full-plan-mobile full-plan ${id}`}>
      <section className="full-plan-overlay"></section>
      <div className="full-plan-mobile-content">
        <button className="full-plan-close">
          <Img src={handleUrl(images.common.closeGray, _relativeURL, _ID)} />
        </button>
        <Slider {...props} />
        <div className="full-plan-mobile-content-bottom">
          <section className="full-plan-mobile-content-bottom-title">
            <h2>{title}</h2>
            <h5>{meters}</h5>
          </section>
          <section className="full-plan-mobile-content-bottom-images">
            <span>
              <Img src={handleUrl(images.plans.familly, _relativeURL, _ID)} />
              <p>{familyText}</p>
            </span>
            <span>
              <Img src={handleUrl(images.plans.badroom2, _relativeURL, _ID)} />
              <p>{bedroomsText}</p>
            </span>
            <span>
              <Img src={handleUrl(images.plans.bathroom2, _relativeURL, _ID)} />
              <p>{bathroomText}</p>
            </span>
          </section>
          <section className="full-plan-mobile-selectors">
            <button className="full-mobile-plan-selector" data-id="plan-info">
              информацыя
            </button>
            <button className="full-mobile-plan-selector" data-id="plan-text">
              описание
            </button>
          </section>
          <div className="full-plan-mobile-content-bottom-selected">
            <section
              className="full-plan-mobile-content-bottom-body plan-text plan-view"
              style={{ display: "none" }}
            >
              {_body}
            </section>
            <ul className="full-plan-mobile-content-bottom-details plan-info plan-view">
              <li>
                <h4>{dateText}:</h4>
                <p>{date}</p>
              </li>
              <li>
                <h4>{classText}:</h4>
                <p>{classLevel}</p>
              </li>
              <li>
                <h4>{priceText}:</h4>
                <span>
                  <p>{price}</p>
                  <p>$/М²</p>
                </span>
              </li>
              <li>
                <h4>{firstPayText}:</h4>
                <p>{firstPay}</p>
              </li>
            </ul>
          </div>
          {btn}
        </div>
      </div>
    </div>
  );
}

export default FullPlanMobile;
