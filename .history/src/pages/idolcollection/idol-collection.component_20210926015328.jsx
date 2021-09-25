import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWritingStart } from "../../redux/writings/wirtings.action";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
import WritingContainer from "../../component/writing-container/writing-container.component";

const IdolCollectionPage = () => {
  const dispatch = useDispatch();
  const writings = useSelector(selectCurentWriting);

  useEffect(() => {
    if (writings.length !== 0) {
      return;
    }
    dispatch(fetchWritingStart());
  }, [dispatch, writings.length]);
  return (
    <>
      <WritingContainer />
    </>
  );
};

export default IdolCollectionPage;
