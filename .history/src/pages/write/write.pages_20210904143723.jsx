import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { firestore, storageRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
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
    console.log(file);
    responce.ref.getDownloadURL().then((url) => {
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
    const reader = new FileReader();
    if (!file) {
      return;
    }
    if (!file.type.match(/image.*/)) {
      return;
    }
    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
      console.log(readerEvent.target.result);
    };
    reader.readAsDataURL(theFile);
  };

  return (
    <div className="write-container">
      <form onSubmit={onSubmit}>
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
        <img src="" alt="" ref={imgRef} />
        <input type="submit" className="submit-btn" />
      </form>
      <input type="text" />
    </div>
  );
};

export default WritePage;
