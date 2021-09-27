import React from "react";
import "./writing-container.styles.scss";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
import WritingItem from "../writing-item/writing-item.component";
const WritingContainer = ({ boardId }) => {
  const writings = useSelector(selectCurentWriting);
  return (
    <div className="writing-container">
      {
          
        writings.map((writing) => {
        console.log(boardId, writing.boardId);
        if (!boardId || boardId === writing.boardId) {
          return <WritingItem key={writing.writingId} {...writing} />;
        }
        return null;
      })}
    </div>
  );
};

export default WritingContainer;
