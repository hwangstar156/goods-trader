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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import resizeImage from "../../pages/userprofile/userprofile.utils";
const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userIconImage, setUserIconImage] = useState("");
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);
  const { photoUrl } = currentUser;
  const handleSignOutClick = () => {
    auth.signOut();
  };

  const moveToProfilePage = () => {
    history.push("/profile");
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const handleChangeImage = async (e) => {
      const config = {
        file: photoUrl,
        maxSize: 80,
      };
      resizeImage(config)
        .then((resizedImage) => {
          setUserIconImage(resizeImage);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handleChangeImage();
  }, [photoUrl]);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="div"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        className="user-profile"
      >
        <img src={userIconImage} alt="" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={moveToProfilePage}>마이 프로필</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={handleSignOutClick}>로그아웃</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileIcon;
