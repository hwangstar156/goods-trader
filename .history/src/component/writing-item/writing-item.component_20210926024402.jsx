import React from "react";
import "./writing-item.styles.scss";

const WritingItem = ({ ...writing }) => {
  const { headText, mainText, thumbnailUrl, createAt } = writing;
  return (
    <div className="writing-card">
      <div className="writing-image">
        <img src={thumbnailUrl} alt="thumbnailimage" />
      </div>
      <div className="writing-info">
        <h3 className="writing-title">{headText}</h3>
        <p className="writing-text">{mainText.slice(0, 100)}</p>
        <p className="writing-created-at"></p>
      </div>
    </div>
  );
};

export default WritingItem;
