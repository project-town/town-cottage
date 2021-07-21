import React from "react";
import images from "../../../../../../assets/js/images";
import Img from "../../../../../common/img/Img";
import { handleUrl } from "../../../../../utils/url";

function Video({ src, _relativeURL, _ID }) {
  return (
    <div className="video-container">
      <video className="video">
        <source src={handleUrl(src, _relativeURL, _ID)} type="video/mp4" />
      </video>
      <button className="play-btn video-actions-btn">
        <Img src={handleUrl(images.common.play, _relativeURL, _ID)} />
      </button>
      <button className="pause-btn video-actions-btn">
        <Img src={handleUrl(images.common.play, _relativeURL, _ID)} />
      </button>
    </div>
  );
}

export default Video;
