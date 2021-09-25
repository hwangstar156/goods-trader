import React from "react";
import "./writing-item.styles.scss";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
const WritingItem = ({ ...writing }) => {
    const {headText,mainText,thumbnailUrl}
  return (
    <div className="writing-card">
      <div className="writing-image">
        <img src={thumbnailUrl} alt="thumbnail-image" />
      </div>
      <div className="writing-info">
        <h3 className="writing-title">{headText}</h3>
        <p className="writing-text">{mainText}</p>
      </div>
    </div>
  );
};

export default WritingItem;
