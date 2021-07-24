import React from "react";
import images from "../../../assets/js/images";
import { handleUrl } from "../../utils/url";
import MobileMenu from "./mobile-menu";

const Navbar = (props) => {
  const { links, number, _relativeURL, _ID, _body, languages } = props;
  return (
    <nav className="navbar screen">
      <MobileMenu {...props} />
      <div className="navbar-flex">
        <a href="/#" className="navbar-logo">
          <img src={handleUrl(images.common.logo, _relativeURL, _ID)} />
        </a>
        <ul className="navbar-links">
          {links.map((link) => {
            return (
              <li>
                <a href={`#${link.value}`}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="navbar-right">
          <p className="navbar-number">{number}</p>
          {languages}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
