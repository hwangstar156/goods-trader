import React from "react";
import ProfileIcon from "../userprofile/profileicon.component";
import { Link, useHistory } from "react-router-dom";
import "./header.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUserLoggedIn,
} from "../../redux/user/user.selector";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectUserLoggedIn);
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <>
      <div className="header-container">
        <div className="logo" onClick={handleLogoClick}>
          <img
            src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png"
            alt=""
            className="logo-img"
          />
        </div>
        <div className="header-element">
          {isLoggedIn ? (
            <Link className="header-write" to="/write">
              📝글쓰기
            </Link>
          ) : null}

          <div className="header-photocard">🗳포토카드</div>
          <div className="header-sneakers">신발</div>
          {currentUser ? (
            <ProfileIcon />
          ) : (
            <Link to="/signin" className="sign-in-btn">
              로그인
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
