import React from "react";
import { useParams } from "react-router-dom";
const idolCollection = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
