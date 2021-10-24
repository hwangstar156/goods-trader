import React from "react";
import { useSelector } from "react-redux";

import { selectCurentWriting } from "../../redux/writings/writings.selector";
import WritingItem from "../writing-item/writing-item.component";
import "./writing-container.styles.scss";

const WritingContainer = ({ boardId }) => {
  const writings = useSelector(selectCurentWriting);

  return (
    <div className="writing-container">
      {writings.map((writing) => {
        if (!boardId || boardId === writing.boardId) {
          return <WritingItem key={writing.writingId} {...writing} />;
        }
        return null;
      })}
    </div>
  );
};

export default WritingContainer;
