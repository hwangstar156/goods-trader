import React from "react";

const HomePage = ({ user }) => {
  return <>{user ? <div>{user.displayName}</div> : null}</>;
};

export default HomePage;
