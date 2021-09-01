import React from "react";
import { auth } from "../../firebase/firebase.utils";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
import "./profileicon.styles.scss";
import { useHistory } from "react-router-dom";
const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory();

  const handleSignOutClick = () => {
    auth.signOut();
  };

  const moveToProfilePage = () => {
    history.push("/profile");
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="div"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        className="user-profile"
      ></DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={moveToProfilePage}>마이 프로필</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={handleSignOutClick}>로그아웃</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileIcon;
