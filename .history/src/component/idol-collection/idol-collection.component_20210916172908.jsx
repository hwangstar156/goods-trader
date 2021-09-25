import React from "react";
import { useParams } from "react-router-dom";
const IdolCollection = () => {
  console.log("load");
  const { id } = useParams();
  return <div>{id}</div>;
};

export default IdolCollection;
