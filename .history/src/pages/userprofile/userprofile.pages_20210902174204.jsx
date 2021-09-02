import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./userprofile.styles.scss";
import { changeUserImage } from "../../firebase/firebase.utils";
import resizeImage from "./userprofile.utils";
import { useRef } from "react";
const UserProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { displayName, email, kakaoId, photoUrl } = currentUser;
  const inputRef = useRef(null);

  const LoadingImage = (e) => {
    const img = e.target;
    const imgTag = e.target.parentNode;
    const widthDiff = (img.clientWidth - imgTag.offsetWidth) / 2;
    const heightDiff = (img.clientHeight - imgTag.offsetHeight) / 2;
    img.style.transform = `translate( -${widthDiff}px , -${heightDiff}px)`;
  };

  const ChangeImageClick = () => {
    inputRef.current.click();
  };

  const handleChangeImage = (e) => {
    const config = {
      file: e.target.files[0],
      maxSize: 350,
    };
    resizeImage(config)
      .then((resizedImage) => {
        const url = window.URL.createObjectURL(resizedImage);
        console.log(url);
        changeUserImage(currentUser, url);
        console.log(currentUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile-img">
        <input type="file" ref={inputRef} onChange={handleChangeImage} />
        <img
          src={photoUrl}
          alt=""
          onLoad={LoadingImage}
          onClick={ChangeImageClick}
        />
      </div>
      <div className="user-name">{displayName}</div>
      <div className="user-email">{email}</div>
      <div className="user-kakao-id">{kakaoId}</div>
    </div>
  );
};

export default UserProfilePage;
