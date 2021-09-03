import React from "react";
import { useRouteMatch } from "react-router-dom";

const MenuItem = ({ linkUrl, photoUrl, title }) => {
  const match = useRouteMatch();
  console.log(match);
  return <div className=""></div>;
};

export default MenuItem;
