import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
const IdolCollection = () => {
  console.log("load");
  const match = useRouteMatch();
  const { id } = useParams();
  console.log(match);
  return <div>{id}</div>;
};

export default IdolCollection;
