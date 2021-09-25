import React from "react";
import "./writing-container.styles.scss";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
import WritingItem from "../writing-item/writing-item.component";
const WritingContainer = () => {
  const writings = useSelector(selectCurentWriting);
  return (
    <div className="writing-container">
      {writings.map((writing) => (
        <WritingItem key={writing.writingId} />
      ))}
    </div>
  );
};

export default WritingContainer;
