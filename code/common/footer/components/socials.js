import React from "react";

const Socials = ({ socials, title }) => {
  return (
    <div className="footer-socials">
      <p>{title}</p>
      {socials}
    </div>
  );
};

export default Socials;
