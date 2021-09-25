import React from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";

import "./menu-item.styles.scss";
const MenuItem = ({ linkUrl, imageUrl, title }) => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <>
      <Link
        className="menu-item"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
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
