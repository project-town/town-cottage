import React from "react";

function Img({ src, alt, customClassName }) {
  console.log(src);
  return (
    <img
      className={customClassName ? customClassName : ""}
      src={src}
      alt={alt || "img"}
    />
  );
}

export default Img;
