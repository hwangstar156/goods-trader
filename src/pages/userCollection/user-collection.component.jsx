import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectCurentWriting } from "../../redux/writings/writings.selector";
import WritingItem from "../../component/writing-item/writing-item.component";
const UserCollection = () => {
  const { userId } = useParams();
  const writings = useSelector(selectCurentWriting);
  return (
    <>
      {writings.map((writing) => {
        if (writing.userId === userId) {
          return <WritingItem key={writing.writingId} {...writing} />;
        }
        return null;
      })}
    </>
  );
};

export default UserCollection;
