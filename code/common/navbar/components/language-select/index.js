import React from "react";
import images from "../../../../../assets/js/images";
import { handleUrl } from "../../../../utils/url";
import Img from "../../../img/Img";

const LanguageSelect = ({
  selected,
  optionName,
  optionUrl,
  _relativeURL,
  _ID,
}) => {
  return (
    <div className="navbar-language">
      <section className="navbar-language-selected">
        <h5>{selected}</h5>
        <Img
          src={handleUrl(images.common.arrowBottomOrange, _relativeURL, _ID)}
          customClassName="navbar-language-orange"
        />
        <Img
          src={handleUrl(images.common.arrowBottomWhite, _relativeURL, _ID)}
          customClassName="navbar-language-white"
        />
      </section>
      <section className="navbar-language-option">
        <a href={optionUrl}>{optionName}</a>
      </section>
    </div>
  );
};

export default LanguageSelect;
