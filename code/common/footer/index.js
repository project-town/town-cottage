import React from "react";
import images from "../../../assets/js/images";
import { handleUrl } from "../../utils/url";
import Img from "../img/Img";

const Footer = ({ links, socials, contact, _relativeURL, _ID, title }) => {
  return (
    <footer className="footer screen">
      <div className="indicator" id={title}></div>
      <div className="footer-flex">
        <section>
          <a href="#">
            <Img src={handleUrl(images.common.logo, _relativeURL, _ID)} />
          </a>
        </section>
        <section>{links}</section>
        <section>{socials}</section>
        <section>{contact}</section>
      </div>
    </footer>
  );
};

export default Footer;
