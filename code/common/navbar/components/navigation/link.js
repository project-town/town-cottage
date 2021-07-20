import React from "react";

const NavigaionLink = ({ url, name, _relativeURL, _ID }) => {
  const createRelativeURL = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="navbar-navigation-link">
      <a href={createRelativeURL(url)}>{name}</a>
    </div>
  );
};

export default NavigaionLink;
