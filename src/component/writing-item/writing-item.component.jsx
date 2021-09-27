import React from "react";
import "./writing-item.styles.scss";

const WritingItem = ({ ...writing }) => {
  const { headText, mainText, thumbnailUrl, month, year, day } = writing;
  return (
    <div className="writing-card">
      <div className="writing-image">
        {thumbnailUrl ? <img src={thumbnailUrl} alt="thumbnailimage" /> : null}
      </div>
      <div className="writing-info">
        <h3 className="writing-title">{headText}</h3>
        <p className="writing-text">{mainText.slice(0, 100)}</p>
        <p className="writing-created-at">{`${year}/${month}/${day}`}</p>
      </div>
    </div>
  );
};

export default WritingItem;
