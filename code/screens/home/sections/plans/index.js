import React from "react";
import animations from "../../../../../assets/js/animations";

function Planes({ _body, plansList, title }) {
  return (
    <div className="plans section">
      <div className="indicator" id={title}></div>

      {_body}
      <div className="plans-list">{plansList}</div>
    </div>
  );
}

export default Planes;
