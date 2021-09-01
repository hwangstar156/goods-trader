import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./userprofile.styles.scss";
import { changeUserImage } from "../../firebase/firebase.utils";
import { useState } from "react";
import { checkUserSession } from "../../redux/user/user.action";
const UserProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState("");
  const { displayName, email, kakaoId } = currentUser;

  const LoadingImage = (e) => {
    const img = e.target;
    const imgTag = e.target.parentNode;
    const widthDiff = (img.clientWidth - imgTag.offsetWidth) / 2;
    const heightDiff = (img.clientHeight - imgTag.offsetHeight) / 2;
    img.style.transform = `translate( -${widthDiff}px , -${heightDiff}px)`;
  };

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const onChangeText = (e) => {
    setPhoto(e.target.value);
  };

  const changeImage = (e) => {
    e.preventDefault();
    changeUserImage(currentUser, photo);
  };
  return (
    <div className="profile-container">
      <form onSubmit={changeImage}>
        <input type="text" onChange={onChangeText} value={photo} />
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
