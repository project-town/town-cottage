import React from "react";
import images from "../../../../../../assets/js/images";
import Img from "../../../../../common/img/Img";
import FullPlan from "./full-plan";

function plan(props) {
  const { title, bedroomsText, bathroomText, meters, image, draw, id } = props;
  return (
    <>
      <div className="plan" data-id={id}>
        <figure className="plan-image">
          <Img src={image} />
        </figure>
        <div className="plan-details">
          <section className="plan-details-top">
            <h5>{title}</h5>
            <h5>{`${meters} м²`}</h5>
          </section>
          <section className="plan-details-bottom">
            <span>
              <Img src={images.plans.badroom} />
              <p>{bedroomsText}</p>
            </span>
            <span>
              <Img src={images.plans.bathroom} />
              <p>{bathroomText}</p>
            </span>
          </section>
        </div>
        <figure className="plan-draw">
          <Img src={draw} />
        </figure>
      </div>
      <FullPlan {...props} />
    </>
  );
}

export default plan;
