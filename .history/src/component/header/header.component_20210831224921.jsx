import React from "react";
import UserProfile from "../userprofile/userprofile.component";
import { Link } from "react-router-dom";
import "./header.styles.scss";
const Header = ({ user }) => {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png"
            alt=""
          />
        </div>
        <div className="search-filter">
          <input type="text" />
        </div>
        <div className="header-photocard">포토카드</div>
        <div className="header-sneakers">신발</div>

        {user ? <UserProfile /> : <Link to="/signin">로그인</Link>}
      </div>
    </>
  );
};

export default Header;
