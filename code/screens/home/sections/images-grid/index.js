import React from "react";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

function ImagesGrid({ list, _relativeURL, _ID }) {
  return (
    <div className="images-grid section">
      <ul className="images-grid-list">
        {list.map((e) => {
          return (
            <li>
              <Img src={handleUrl(e.image, _relativeURL, _ID)} />
              <p>{e.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ImagesGrid;
