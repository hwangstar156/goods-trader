import React from "react";

const HomePage = ({ user }) => {
  console.log(user);
  return <>{user ? <div>{user.displayName}</div> : null}</>;
};

export default HomePage;
