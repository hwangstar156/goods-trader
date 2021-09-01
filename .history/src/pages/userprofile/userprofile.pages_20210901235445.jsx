import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./userprofile.styles.scss";
import { changeUserImage } from "../../firebase/firebase.utils";
import { useState } from "react";
const UserProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { displayName, email, kakaoId, photoUrl } = currentUser;
  const [photoUrl, setPhotoUrl] = useState("");
  const LoadingImage = (e) => {
    const img = e.target;
    const imgTag = e.target.parentNode;
    const widthDiff = (img.clientWidth - imgTag.offsetWidth) / 2;
    const heightDiff = (img.clientHeight - imgTag.offsetHeight) / 2;
    img.style.transform = `translate( -${widthDiff}px , -${heightDiff}px)`;
  };

  const onChangeText = (e) => {
    setPhotoUrl(e.target.value);
  };

  const changeImage = () => {
    changeUserImage(currentUser);
  };
  return (
    <div className="profile-container">
      <form>
        <input type="text" onChange={onChangeText} value={photoUrl} />
        <input type="submit" />
      </form>

      <div className="profile-img">
        <img src="" alt="" onLoad={LoadingImage} />
      </div>
      <div className="user-name">{displayName}</div>
      <div className="user-email">{email}</div>
      <div className="user-kakao-id">{kakaoId}</div>
    </div>
  );
};

export default UserProfilePage;
