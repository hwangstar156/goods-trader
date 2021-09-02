import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./userprofile.styles.scss";
import {
  changeUserImage,
  updateUserProfileImage,
  auth,
  firestore,
} from "../../firebase/firebase.utils";
import resizeImage from "./userprofile.utils";
import { useRef } from "react";
import { refreshUser } from "../../redux/user/user.action";
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
    inputRef.current.click();
  };

  const handleChangeImage = async (e) => {
    const response = await updateUserProfileImage(
      currentUser,
      e.target.files[0]
    );
    const fileUrl = await response.ref.getDownloadURL();

    const config = {
      file: fileUrl,
      maxSize: 350,
    };
    resizeImage(config)
      .then(async (resizedImage) => {
        changeUserImage(currentUser, resizedImage);
        const user = auth.currentUser;
        const userRef = firestore.doc(`users/${user.uid}`);
        const snapShot = await userRef.get();
        console.log(snapShot);
        console.log(user);
        dispatch(refreshUser(currentUser));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile-img">
        <input
          type="file"
          ref={inputRef}
          onChange={handleChangeImage}
          accept="image/*"
          required
        />
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
