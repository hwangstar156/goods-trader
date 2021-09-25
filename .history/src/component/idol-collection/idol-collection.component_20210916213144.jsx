import React from "react";
import { useParams } from "react-router-dom";
const IdolCollection = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default IdolCollection;
