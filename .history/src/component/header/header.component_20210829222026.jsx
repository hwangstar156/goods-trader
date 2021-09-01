import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ user }) => {
  console.log(user);
  const handleClick = () => {
    console.log("signOut");
    auth.signOut();
  };

  return (
    <>
      {user ? (
        <div onClick={handleClick}>sign Out</div>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </>
  );
};

export default Header;
