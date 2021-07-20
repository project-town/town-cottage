import React from "react";

function Box({ _body, title, callBtn }) {
  return (
    <div className="box">
      <h4 className="box-title">{title}</h4>
      <div className="box-body">{_body}</div>
    </div>
  );
}

export default Box;
