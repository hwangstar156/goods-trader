import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { storageRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import MenuAside from "../../component/menu-aside/menu-aside.component";
import "github-markdown-css";
import "./write.styles.scss";
import { selectIdols } from "../../redux/idol/idol.selector";
import resizeImage from "../userprofile/userprofile.utils";
import { useHistory } from "react-router";
const WritePage = () => {
  const history = useHistory();
  const imgRef = useRef(null);
  const inputRef = useRef(null);
  const currentUser = useSelector(selectCurrentUser);
  const idolCollection = useSelector(selectIdols);
  const [text, setText] = useState({
    headText: "",
    mainText: "",
  });
  const [boardId, setBoardId] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const { headText, mainText } = text;
  const nextId = useRef(0);
  const onSubmit = async (e) => {
    e.preventDefault();

    const writing = {
      userId: currentUser.id,
      headText,
      mainText,
      createAt: Date.now(),
      fileUrl,
      thumbnailUrl,
      boardId,
      writingId: uuidv4(),
    };
    nextId.current += 1;
    setText({
      ...text,
      headText: "",
      mainText: "",
    });
    setFileUrl("");
    setThumbnailUrl("");
    history.push("/");
  };

  const onChangeTextInput = (e) => {
    const name = e.target.name;
    setText({
      ...text,
      [name]: e.target.value,
    });
  };

  const onChangeFiles = async (e) => {
    const theFile = e.target.files[0];
    if (!theFile) {
      return;
    }
    if (!theFile.type.match(/image.*/)) {
      return;
    }
    const fileRef = storageRef.child(`${currentUser.id}/${uuidv4()}`);
    const responce = await fileRef.put(theFile);
    const url = await responce.ref.getDownloadURL();
    const thumbnailConfig = {
      file: url,
      maxSize: 200,
    };
    resizeImage(thumbnailConfig)
      .then((resizedImage) => {
        setThumbnailUrl(resizedImage);
      })
      .catch((err) => console.log(err));

    const config = {
      file: url,
      maxSize: 524,
    };
    resizeImage(config)
      .then((resizedImage) => {
        setFileUrl(resizedImage);
      })
      .catch((err) => console.log(err));
  };

  const onChangeSelectIdol = (e) => {
    setBoardId(encodeURIComponent(e.target.value));
  };

  const onClickRealFileInput = () => {
    inputRef.current.click();
  };

  return (
    <div className="write-container">
      <form onSubmit={onSubmit} className="inputs-form">
        <div className="select-container">
          <label htmlFor="">게시판을 선택해주세요</label>
          <select
            name="idol"
            id="select-collection"
            onChange={onChangeSelectIdol}
            className="idol-selector"
          >
            {idolCollection.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

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
          ref={inputRef}
        />
        <div className="image-preview">
          <p>사진</p>
          <img src={thumbnailUrl} alt="" ref={imgRef} />
        </div>
        <footer className="footer-element">
          <button
            type="button"
            className="file-btn"
            onClick={onClickRealFileInput}
          >
            사진 등록
          </button>
          <input type="submit" className="submit-btn" value="등록하기" />
        </footer>
      </form>
      <MenuAside className="menu-aside" />
    </div>
  );
};

export default WritePage;
