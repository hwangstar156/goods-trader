import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWritingStart } from "../../redux/writings/wirtings.action";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
const IdolCollectionPage = () => {
  const dispatch = useDispatch();
  const writings = useSelector(selectCurentWriting);
  console.log(writings);
  useEffect(() => {
    if (!!writings) return;
    dispatch(fetchWritingStart());
  }, [dispatch, writings]);
  return (
    <>
      <div>
        {writings.map((writing) => (
          <div>{writing.mainText}</div>
        ))}
      </div>
    </>
  );
};

export default IdolCollectionPage;
