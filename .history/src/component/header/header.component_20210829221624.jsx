import React from "react";
import { auth } from "../../firebase/firebase.utils";

const Header = (user) => {
  const handleClick = () => {
    auth.signOut();
  };

  return (
    <>{user ? <div onClick={handleClick}>sign Out</div> : <div>Sign In</div>}</>
  );
};

export default Header;
