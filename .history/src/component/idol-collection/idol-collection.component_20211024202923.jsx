import React from "react";
import { useParams } from "react-router-dom";

import IdolCollectionPage from "../../pages/idolcollection/idol-collection.component";

const IdolCollection = () => {
  const { id } = useParams();
  return <IdolCollectionPage boardId={encodeURIComponent(id)} />;
};

export default IdolCollection;
