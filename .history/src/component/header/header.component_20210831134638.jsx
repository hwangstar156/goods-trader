import React from "react";
import UserProfile from "../userprofile/userprofile.component";

const Header = ({ user }) => {
  return (
    <>
      <div className="header-container">
        <div className="logo">goods trader</div>
        <div className="search-filter">
          <input type="text" />
        </div>
        <div className="header-photocard">포토카드</div>
        <div className="header-sneakers">신발</div>

        {/*user ? <ProfileIcon/> : <Link to="/signin">로그인</Link>*/}
      </div>
      <UserProfile />
    </>
  );
};

export default Header;
