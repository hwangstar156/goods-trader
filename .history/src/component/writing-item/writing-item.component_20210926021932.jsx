import React from "react";
import "./writing-item.styles.scss";

const WritingItem = ({ ...writing }) => {
  const { headText, mainText, thumbnailUrl } = writing;
  return (
    <div className="writing-card">
      <div className="writing-image">
        <img src={thumbnailUrl} alt="thumbnailimage" />
      </div>
      <div className="writing-info">
        <h3 className="writing-title">{headText}</h3>
        <p className="writing-text">{mainText.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default WritingItem;
