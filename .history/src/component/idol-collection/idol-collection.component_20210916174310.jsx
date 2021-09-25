import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
const IdolCollection = () => {
  console.log("load");
  let match = useRouteMatch();
  const { id } = useParams();
  console.log(match);
  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default IdolCollection;
