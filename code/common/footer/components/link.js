import React from "react";
import { handleUrl } from "../../../utils/url";

const Link = ({ url, _relativeURL, _ID, name }) => {
  return (
    <a className="footer-links-link" href={handleUrl(url, _relativeURL, _ID)}>
      {name}
    </a>
  );
};

export default Link;
