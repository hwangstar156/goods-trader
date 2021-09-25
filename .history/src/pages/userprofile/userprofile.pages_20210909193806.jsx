import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./userprofile.styles.scss";
import {
  changeUserImage,
  updateUserProfileImage,
} from "../../firebase/firebase.utils";
import resizeImage from "./userprofile.utils";
import { useRef } from "react";
import {
  refreshUserStart,
  refreshUserSuccess,
} from "../../redux/user/user.action";
import HomePage from "../homepage.component";
const UserProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { displayName, email, kakaoId, photoUrl } = currentUser;
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const LoadingImage = (e) => {
    const img = e.target;
    const imgTag = e.target.parentNode;
    const widthDiff = (img.clientWidth - imgTag.offsetWidth) / 2;
    const heightDiff = (img.clientHeight - imgTag.offsetHeight) / 2;
    img.style.transform = `translate( -${widthDiff}px , -${heightDiff}px)`;
  };

  const ChangeImageClick = () => {
    console.log("load");
    inputRef.current.click();
  };

  const handleChangeImage = async (e) => {
    dispatch(refreshUserStart());
    const response = await updateUserProfileImage(
      currentUser,
      e.target.files[0]
    );
    const fileUrl = await response.ref.getDownloadURL();

    const config = {
      file: fileUrl,
      maxSize: 512,
    };
    resizeImage(config)
      .then(async (resizedImage) => {
        changeUserImage(currentUser, resizedImage);
        const newUser = {
          ...currentUser,
          photoUrl: resizedImage,
        };
        dispatch(refreshUserSuccess(newUser));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profile-container">
      {currentUser ? (
        <>
          <div className="profile-img">
            <input
              type="file"
              ref={inputRef}
              onChange={handleChangeImage}
              accept="image/*"
              required
              className="real-input"
            />
            <img
              src={photoUrl}
              alt=""
              onLoad={LoadingImage}
              onClick={ChangeImageClick}
            />
          </div>
          <div className="user-info">
            <div className="user name">이름 : {displayName}</div>
            <div className="user email">이메일 : {email}</div>
            <div className="user kakao-id">카카오톡 아이디 : {kakaoId}</div>
          </div>
        </>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default UserProfilePage;
