import React from "react";
import animations from "../../../../../assets/js/animations";

function Planes({ _body, plansList, title }) {
  return (
    <div
      className="plans section"
      data-aos={animations.up}
      data-aos-delay="100"
    >
      <div className="indicator" id={title}></div>

      {_body}
      <div className="plans-list">{plansList}</div>
    </div>
  );
}

export default Planes;
