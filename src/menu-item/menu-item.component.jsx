import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./menu-item.styles.scss";
const MenuItem = ({ linkUrl, imageUrl, title }) => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <div
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
    </div>
  );
};

export default MenuItem;
