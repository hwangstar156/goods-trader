import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ linkUrl, photoUrl, title }) => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    ></div>
  );
};

export default MenuItem;
