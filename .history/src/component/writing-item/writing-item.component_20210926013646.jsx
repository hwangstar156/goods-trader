import React from "react";
import "./writing-item.styles.scss";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
const WritingItem = ({ ...writing }) => {
  console.log(writing);
  return (
    <div className="writing-card">
      <div className="writing-image"></div>
      <div className="writing-info">
        <h3 className="writing-title">fft}</h3>
        <p className="writing-text">dwdw</p>
      </div>
    </div>
  );
};

export default WritingItem;
