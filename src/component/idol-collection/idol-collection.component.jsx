import React from "react";
import IdolCollectionPage from "../../pages/idolcollection/idol-collection.component";
import { useParams } from "react-router-dom";

const IdolCollection = () => {
  const { id } = useParams();
  return <IdolCollectionPage boardId={encodeURIComponent(id)} />;
};

export default IdolCollection;
