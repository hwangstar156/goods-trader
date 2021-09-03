import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../../menu-item/menu-item.component";
import { selectIdols } from "../../redux/idol/idol.selector";

const MenuContainer = () => {
  const sections = useSelector(selectIdols);

  return (
    <div className="menu-container">
      <div className="menu-items">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>

      <div className="menu-aside">menu aside</div>
    </div>
  );
};

export default MenuContainer;
