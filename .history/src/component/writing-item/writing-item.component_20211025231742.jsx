import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector.js";
import { deleteWritingStart } from "../../redux/writings/wirtings.action";
import "./writing-item.styles.scss";

const WritingItem = ({ ...writing }) => {
  const {
    headText,
    mainText,
    thumbnailUrl,
    month,
    year,
    day,
    userId,
    writingId,
  } = writing;
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const deleteWriting = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deleteWritingStart(writingId));
    }
  };

  return (
    <div className="writing-card">
      <div className="writing-image">
        {thumbnailUrl ? <img src={thumbnailUrl} alt="thumbnailimage" /> : null}
      </div>
      <div className="writing-info">
        <h3 className="writing-title">{headText}</h3>
        <p className="writing-text">{mainText.slice(0, 100)}</p>
        <p className="writing-created-at">{`작성일자 : ${year}/${month}/${day}`}</p>
      </div>
      {userId === currentUser?.id ? (
        <button type="button" onClick={deleteWriting} className="delete-btn">
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default WritingItem;
