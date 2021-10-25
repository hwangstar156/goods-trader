import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { selectCurentWriting } from "../../redux/writings/writings.selector";
import WritingItem from "../../component/writing-item/writing-item.component";
import { fetchWritingStart } from "../../redux/writings/wirtings.action";
import { selectFetchCount } from "../../redux/writings/writings.selector";

const UserCollection = () => {
  const { userId } = useParams();
  const writings = useSelector(selectCurentWriting);
  const dispatch = useDispatch();
  const fetchCount = useSelector(selectFetchCount);
  const checkUserCollectionIsEmpty = () =>
    writings.filter((writing) => writing.userId === userId).length;

  useEffect(() => {
    if (writings.length !== 0) {
      return;
    }
    if (fetchCount >= 1) {
      return;
    }
    dispatch(fetchWritingStart());
  }, [dispatch, writings.length, fetchCount]);
  return (
    <div className="user-collection-container">
      {checkUserCollectionIsEmpty() ? (
        writings.map((writing) => {
          if (writing.userId === userId) {
            return <WritingItem key={writing.writingId} {...writing} />;
          }
          return null;
        })
      ) : (
        <div className="empty-collection-page">
          <p>😅 아직 등록한 게시물이 없습니다;;</p>
          <span>첫번째 글을 등록해 보세요!!</span>
        </div>
      )}
    </div>
  );
};

export default UserCollection;
