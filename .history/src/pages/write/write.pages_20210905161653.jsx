import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { firestore, storageRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import "github-markdown-css";
import "./write.styles.scss";
const WritePage = () => {
  const imgRef = useRef(null);
  const currentUser = useSelector(selectCurrentUser);
  const [text, setText] = useState({
    headText: "",
    mainText: "",
  });
  const [file, setFile] = useState("");
  const { headText, mainText } = text;

  const onSubmit = async (e) => {
    e.preventDefault();
    let fileUrl = "";
    const fileRef = storageRef.child(`${currentUser.id}/${uuidv4()}`);
    const responce = await fileRef.put(file);
    console.log(responce);
    responce.ref.getDownloadURL().then((url) => {
      fileUrl = url;
      imgRef.current.src = url;
    });

    const writing = {
      headText,
      mainText,
      createAt: Date.now(),
      fileUrl,
    };
    firestore.collection("writings").add(writing);
    setFile("");
    setText({
      ...text,
      headText: "",
      mainText: "",
    });
  };

  const onChangeTextInput = (e) => {
    const name = e.target.name;
    setText({
      ...text,
      [name]: e.target.value,
    });
  };

  const onChangeFiles = (e) => {
    const theFile = e.target.files[0];
    if (!theFile) {
      return;
    }
    if (!theFile.type.match(/image.*/)) {
      return;
    }
    setFile(theFile);
  };

  return (
    <div className="write-container">
      <form onSubmit={onSubmit} className="inputs-form">
        <input
          type="text"
          name="headText"
          className="head-input"
          value={headText}
          placeholder="제목"
          onChange={onChangeTextInput}
        />
        <textarea
          type="text"
          placeholder="글을 작성해보세요"
          className="main-input"
          name="mainText"
          value={mainText}
          onChange={onChangeTextInput}
        />
        <input
          type="file"
          accept="image/*"
          onChange={onChangeFiles}
          className="file-input"
        />
        <footer className="footer-element">
          <button type="button" className="file-btn">
            🎨
          </button>
          <input type="submit" className="submit-btn" value="등록하기" />
        </footer>
      </form>
      <div className="image-preview">
        <img src="" alt="" ref={imgRef} />
      </div>
    </div>
  );
};

export default WritePage;
