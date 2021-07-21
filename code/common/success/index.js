import React from "react";
import { handleUrl } from "../../utils/url";
import Img from "../img/Img";

function ContactSuccess({ _relativeURL, _ID, image, btnText, _body }) {
  return (
    <div className="success">
      <div className="success-flex">
        <div className="success-text"> {_body}</div>

        <button type="button" className="hide-success btn">
          {btnText}
        </button>
      </div>
      <Img src={handleUrl(image, _relativeURL, _ID)} />
    </div>
  );
}

export default ContactSuccess;
