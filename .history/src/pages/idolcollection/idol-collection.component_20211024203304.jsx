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
          <p>😅 아직 올라온 게시물이 없습니다;;</p>
          <span>최초로 글을 등록해 보세요!!</span>
        </div>
      )}
    </>
  );
};

export default IdolCollectionPage;
