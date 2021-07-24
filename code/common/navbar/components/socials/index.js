import React from "react";
import images from "../../../../../assets/js/images";
import { handleUrl } from "../../../../utils/url";
import Img from "../../../img/Img";

const Socials = ({ youtube, facebook, instagram, _relativeURL, _ID }) => {
  return (
    <div className="socials">
      <a href={facebook} target="_blank">
        <Img
          src={handleUrl(images.common.socials.facebook, _relativeURL, _ID)}
        />
      </a>
      <a href={instagram} target="_blank">
        <Img
          src={handleUrl(images.common.socials.instagram, _relativeURL, _ID)}
        />
      </a>
      <a href={youtube} target="_blank">
        <Img
          src={handleUrl(images.common.socials.youtube, _relativeURL, _ID)}
        />
      </a>
    </div>
  );
};

export default Socials;
