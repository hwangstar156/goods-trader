import React from "react";
import { auth } from "../../firebase/firebase.utils";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
const UserProfile = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleSignOutClick = () => {
    auth.signOut();
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={toggle}>ddd</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={handleSignOutClick}>signOut</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserProfile;
