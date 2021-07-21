import React from "react";
import images from "../../../../../../assets/js/images";
import Img from "../../../../../common/img/Img";
import { handleUrl } from "../../../../../utils/url";
import Slider from "./slider";

function FullPlan({
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
  draw,
  drawSecond,
  _relativeURL,
  _ID,
  title,
  id,
  _body,
}) {
  return (
    <div className={`full-plan ${id}`}>
      <section className="full-plan-overlay"></section>
      <div className="full-plan-content">
        <button className="full-plan-close">
          <Img src={handleUrl(images.common.closeGray, _relativeURL, _ID)} />
        </button>
        <div className="full-plan-content-left">
          <Slider
            _relativeURL={_relativeURL}
            _ID={_ID}
            id={id}
            slides={slides}
          />
          <div className="full-plan-content-draws">
            <Img src={handleUrl(draw, _relativeURL, _ID)} />
            <Img src={handleUrl(drawSecond, _relativeURL, _ID)} />
          </div>
        </div>
        <div className="full-plan-content-right">
          <section className="full-plan-content-right-title">
            <h2>{title}</h2>
            <h5>{meters}</h5>
          </section>
          <section className="full-plan-content-right-images">
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
          <section className="full-plan-content-right-body">{_body}</section>
          <ul className="full-plan-content-right-details">
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
          {btn}
        </div>
      </div>
    </div>
  );
}

export default FullPlan;
