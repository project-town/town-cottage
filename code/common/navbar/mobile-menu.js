import React from "react";
import images from "../../../assets/js/images";
import { handleUrl } from "../../utils/url";
import Img from "../img/Img";

const MobileMenu = ({
  links,
  socials,
  _relativeURL,
  _ID,
  _body,
  languages,
}) => {
  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-flex">
        <a href="/#" className="mobile-navbar-logo navbar-logo">
          <img src={handleUrl(images.common.logo, _relativeURL, _ID)} />
        </a>
        <div className="mobile-navbar-right">
          {languages}
          <button className="hamburger">
            <Img src={handleUrl(images.common.hamburger, _relativeURL, _ID)} />
          </button>
        </div>
      </div>
      <div className="mobile-navbar-menu">
        <section className="mobile-navbar-menu-overlay"></section>
        <div className="mobile-navbar-menu-content">
          <button className="mobile-navbar-menu-close">
            <Img src={handleUrl(images.common.closeWhite, _relativeURL, _ID)} />
          </button>
          <ul className="mobile-navbar-menu-links">
            {links.map((link) => {
              return (
                <li>
                  <a href={`#${link.value}`}>{link.name}</a>
                </li>
              );
            })}
          </ul>
          {socials}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
