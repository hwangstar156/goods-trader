import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./userprofile.styles.scss";
const UserProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { displayName, email, kakaoId, photoUrl } = currentUser;
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={photoUrl} alt="" />
      </div>
      <div className="user-name">displayName</div>
      <div className="user-email">email</div>
      <div className="user-kakao-id">kakaoId</div>
    </div>
  );
};

export default UserProfilePage;
