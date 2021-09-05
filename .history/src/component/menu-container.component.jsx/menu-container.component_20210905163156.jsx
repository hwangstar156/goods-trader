import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../../menu-item/menu-item.component";
import { selectIdols } from "../../redux/idol/idol.selector";
import "./menu-container.styles.scss";
import MenuAside from "../menu-aside/menu-aside.component";
const MenuContainer = () => {
  const sections = useSelector(selectIdols);

  return (
    <div className="menu-container">
      <div className="menu-items">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
      <MenuAside />
    </div>
  );
};

export default MenuContainer;
