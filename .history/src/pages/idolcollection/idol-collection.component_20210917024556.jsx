import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWritingStart } from "../../redux/writings/wirtings.action";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
import { useRef } from "react";
const IdolCollectionPage = () => {
  const dispatch = useDispatch();
  const writings = useSelector(selectCurentWriting);
  const { current: a } = useRef(writings);
  console.log(writings.length);
  useEffect(() => {
    dispatch(fetchWritingStart());
  }, [dispatch, a]);
  return (
    <>
      <div>
        {writings.map((writing) => (
          <div key={writing.writingId}>{writing.mainText}</div>
        ))}
      </div>
    </>
  );
};

export default IdolCollectionPage;
