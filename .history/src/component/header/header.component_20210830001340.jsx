import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ user }) => {
  const handleClick = () => {
    auth.signOut();
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img src="../../../public/goods trader.png" alt="logo" />
      </div>
      <div className="search-filter">
        <input type="text" />
      </div>
      <div className="header-photocard">포토카드</div>
      <div clssName="header-sneakers">신발</div>
    </div>
  );
};

export default Header;
