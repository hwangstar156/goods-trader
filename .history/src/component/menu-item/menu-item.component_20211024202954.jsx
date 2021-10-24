import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ linkUrl, imageUrl, title }) => {
  return (
    <>
      <Link className="menu-item" to={`collection${linkUrl}`}>
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="background-image"
        >
          <div className="content">
            <div className="title">{title}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
