import React from "react";
import { Link, useHistory } from "react-router-dom";

import ProfileIcon from "../userprofile/profileicon.component";
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
          Goods Trader
        </div>
        <div className="header-element">
          {isLoggedIn ? (
            <Link className="header-write" to="/write">
              ๐ ๊ธ์ฐ๊ธฐ
            </Link>
          ) : null}

          <Link className="header-photocard" to="/collection">
            ๐ณ ์ ์ฒด ํฌํ ์นด๋
          </Link>
          <div className="header-sneakers">๐ ์ ๋ฐ</div>
          {currentUser ? (
            <ProfileIcon />
          ) : (
            <Link to="/signin" className="sign-in-btn">
              ๋ก๊ทธ์ธ
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
