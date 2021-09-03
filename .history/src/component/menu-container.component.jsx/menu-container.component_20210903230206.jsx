import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../../menu-item/menu-item.component";
import { selectIdols } from "../../redux/idol/idol.selector";
import "./menu-container.styles.scss";
const MenuContainer = () => {
  const sections = useSelector(selectIdols);

  return (
    <div className="menu-container">
      <div className="menu-items">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>

      <ul className="menu-aside">
        <li>Izone</li>
        <li>Twice</li>
        <li>Itzy</li>
        <li>Lovelyz</li>
        <li>O,my girl</li>
        <li>Red Velvet</li>
        <li>Aespa</li>
      </ul>
    </div>
  );
};

export default MenuContainer;
