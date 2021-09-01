import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="../../../public/goods-trader.png" alt="logo" />
      </div>
      <div className="search-filter">
        <input type="text" />
      </div>
      <div className="header-photocard">포토카드</div>
      <div clssName="header-sneakers">신발</div>
      {/*user ? <ProfileIcon/> : <Link to="/signin">로그인</Link>*/}
    </div>
  );
};

export default Header;
