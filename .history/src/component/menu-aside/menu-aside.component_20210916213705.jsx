import React from "react";
import { firestore } from "../../firebase/firebase.utils";
import "./menu-aside.styles.scss";
const MenuAside = () => {
  return (
    <aside>
      <ul className="menu-aside">
        <li>Izone</li>
        <li>Twice</li>
        <li>Itzy</li>
        <li>Lovelyz</li>
        <li>Oh my girl</li>
        <li>Red Velvet</li>
        <li>Aespa</li>
        <li>BlackPink</li>
      </ul>
    </aside>
  );
};

export default MenuAside;
