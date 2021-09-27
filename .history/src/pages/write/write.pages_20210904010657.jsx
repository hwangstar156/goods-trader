import React from "react";
import { useState } from "react";

const WritePage = () => {
  const [text, setText] = useState({
    headText: "",
    mainText: "",
  });
  const [file, setFile] = useState("");

  const onChangeTextInput = () => {};

  const onChangeFiles = (e) => {
    const theFile = e.target.files[0];
    const reader = new FileReader();
    if (!file) {
      return;
    }
    if (!file.type.match(/image.*/)) {
      return;
    }
    reader.onloadend = (readerEvent) => {
      setFile(readerEvent.currentTarget.result);
    };
    reader.readAsDataURL(theFile);
  };

  return (
    <div className="write-container">
      <form>
        <input
          type="file"
          accept="image/*"
          onChange={onChangeFiles}
          className="file-input"
        />
        <input type="text" name="headText" className="head-input" />
        <input
          type="text"
          placeholder="글을 작성해보세요"
          className="main-input"
          name="mainText"
        />
        <input type="submit" className="submit-btn" />
      </form>
      <input type="text" />
    </div>
  );
};

export default WritePage;