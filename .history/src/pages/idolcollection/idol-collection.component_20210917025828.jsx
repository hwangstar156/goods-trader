import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWritingStart } from "../../redux/writings/wirtings.action";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
const IdolCollectionPage = () => {
  const dispatch = useDispatch();
  const writings = useSelector(selectCurentWriting);
  const dep = writings.join();
  console.log(dep);
  useEffect(() => {
    dispatch(fetchWritingStart());
  }, [dispatch, dep]);
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