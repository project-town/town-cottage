import React from "react";
import animations from "../../../../../assets/js/animations";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

function Map({ _body, _relativeURL, _ID, btn, image, lat, lng }) {
  return (
    <div className="map section" data-aos={animations.up}>
      <Img src={handleUrl(image, _relativeURL, _ID)} customClassName="map-bg" />
      <div className="map-text">
        {_body}
        <button className="map-link" className="btn">
          <a
            target="_blank"
            href={`https://www.google.com/maps/@${lat},${lng},15z`}
          >
            {btn}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Map;
