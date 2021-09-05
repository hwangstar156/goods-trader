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
          type="file"
          accept="image/*"
          onChange={onChangeFiles}
          className="file-input"
        />
        <input
          type="text"
          name="headText"
          className="head-input"
          value={headText}
          placeholder="제목"
          onChange={onChangeTextInput}
        />
        <input
          type="text"
          placeholder="글을 작성해보세요"
          className="main-input"
          name="mainText"
          value={mainText}
          onChange={onChangeTextInput}
        />
        <input type="submit" className="submit-btn" />
      </form>
      <article className="markdown-body">
        <h1>아이즈원 장원영 포토카드 구매 희망 합니다.</h1>
        <img
          src="https://data.ygosu.com/editor/attach/20190226/20190226183618_zltermyq.png"
          alt=""
        />
        ## 안녕
        <p>
          저는 블랙핑크 로제 사진 가지고 있고 아이즈원 장원영 거래 하실분
          구합니다.
        </p>
      </article>
      <div className="image-preview">
        <img src="" alt="" ref={imgRef} />
      </div>
    </div>
  );
};

export default WritePage;
