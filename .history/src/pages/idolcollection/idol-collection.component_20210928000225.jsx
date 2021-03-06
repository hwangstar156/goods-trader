import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWritingStart } from "../../redux/writings/wirtings.action";
import {
  selectCurentWriting,
  selectFetchCount,
} from "../../redux/writings/writings.selector";
import WritingContainer from "../../component/writing-container/writing-container.component";
import "./idol-collection.styles.scss";
const IdolCollectionPage = ({ boardId }) => {
  const dispatch = useDispatch();
  const writings = useSelector(selectCurentWriting);
  const fetchCount = useSelector(selectFetchCount);
  useEffect(() => {
    if (writings.length !== 0) {
      return;
    }
    if (fetchCount >= 1) {
      return;
    }
    dispatch(fetchWritingStart());
  }, [dispatch, writings.length, fetchCount]);

  const isEmptyCollection = () =>
    writings.filter((writing) => writing.boardId === boardId).length;

  return (
    <>
      {!boardId || isEmptyCollection() ? (
        <WritingContainer boardId={boardId} />
      ) : (
        <div className="empty-collection-page">
          <p>π μμ§ μ¬λΌμ¨ κ²μλ¬Όμ΄ μμ΅λλ€;;</p>
          <span>μ΅μ΄λ‘ κΈμ λ±λ‘ν΄ λ³΄μΈμ!!</span>
        </div>
      )}
    </>
  );
};

export default IdolCollectionPage;
