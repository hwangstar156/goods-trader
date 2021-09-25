import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWritingStart } from "../../redux/writings/wirtings.action";
const IdolCollectionPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWritingStart);
  }, [dispatch]);
  return (
    <div>
      <h1>포토카드</h1>
    </div>
  );
};

export default IdolCollectionPage;
