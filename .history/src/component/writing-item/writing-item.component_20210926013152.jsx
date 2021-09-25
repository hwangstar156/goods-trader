import React from "react";
import "./writing-item.styles.scss";
import { useSelector } from "react-redux";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
const WritingItem = ({ children }) => {
  const writings = useSelector(selectCurentWriting);

  return (
    <>
      <h3>{writings.headText}</h3>
    </>
  );
};

export default WritingItem;
