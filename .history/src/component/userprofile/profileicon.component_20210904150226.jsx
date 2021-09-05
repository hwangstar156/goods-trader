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
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import resizeImage from "../../pages/userprofile/userprofile.utils";
import { signOutStart } from "../../redux/user/user.action";
const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userIconImage, setUserIconImage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const { photoUrl } = currentUser;
  const handleSignOutClick = () => {
    dispatch(signOutStart());
  };

  const LoadingImage = (e) => {
    const img = e.target;
    const imgTag = e.target.parentNode;
    const widthDiff = (img.clientWidth - imgTag.offsetWidth) / 2;
    const heightDiff = (img.clientHeight - imgTag.offsetHeight) / 2;
    img.style.transform = `translate( -${widthDiff}px , -${heightDiff}px)`;
  };

  const moveToProfilePage = () => {
    history.push("/profile");
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const handleChangeImage = async (e) => {
      const config = {
        file: photoUrl,
        maxSize: 150,
      };
      resizeImage(config)
        .then(async (resizedImage) => {
          console.log(resizedImage);
          setUserIconImage(resizedImage);
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
        <img src={userIconImage} alt="" onLoad={LoadingImage} />
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
