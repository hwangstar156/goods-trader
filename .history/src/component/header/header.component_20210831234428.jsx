import React from "react";
import ProfileIcon from "../userprofile/profileicon.component";
import { Link, useHistory } from "react-router-dom";
import "./header.styles.scss";
const Header = ({ user }) => {
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
          <div className="header-photocard" onClick={}>포토카드</div>
          <div className="header-sneakers" onClick={}>신발</div>

          {user ? <ProfileIcon /> : <Link to="/signin">로그인</Link>}
        </div>
      </div>
    </>
  );
};

export default Header;
