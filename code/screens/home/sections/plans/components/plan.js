import React from "react";
import images from "../../../../../../assets/js/images";
import Img from "../../../../../common/img/Img";
import { handleUrl } from "../../../../../utils/url";
import FullPlan from "./full-plan";
import FullPlanMobile from "./full-plan-mobile";
function plan(props) {
  const {
    title,
    bedroomsText,
    bathroomText,
    meters,
    image,
    draw,
    id,
    _relativeURL,
    _ID,
  } = props;
  return (
    <>
      <div className="plan" data-id={id}>
        <figure className="plan-image">
          <Img
            src={handleUrl(image, _relativeURL, _ID)}
            customClassName="plan-image-big"
          />
          <aside>
            <Img
              src={handleUrl(images.common.arrowRight, _relativeURL, _ID)}
              customClassName="plan-image-arrow plan-image-arrow-inactive"
            />
            <Img
              src={handleUrl(images.common.arrowRightActive, _relativeURL, _ID)}
              customClassName="plan-image-arrow plan-image-arrow-active"
            />
          </aside>
        </figure>
        <div className="plan-details">
          <section className="plan-details-top">
            <h5>{title}</h5>
            <h5>{meters}</h5>
          </section>
          <section className="plan-details-bottom">
            <span>
              <Img src={handleUrl(images.plans.badroom, _relativeURL, _ID)} />
              <p>{bedroomsText}</p>
            </span>
            <span>
              <Img src={handleUrl(images.plans.bathroom, _relativeURL, _ID)} />
              <p>{bathroomText}</p>
            </span>
          </section>
        </div>
        <figure className="plan-draw">
          <Img src={handleUrl(draw, _relativeURL, _ID)} />
        </figure>
      </div>
      <FullPlan {...props} />
      <FullPlanMobile {...props} />
    </>
  );
}

export default plan;
