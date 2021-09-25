import React from "react";
import { firestore } from "../../firebase/firebase.utils";
import "./menu-aside.styles.scss";
const MenuAside = () => {
  const fetchData = async () => {
    const data = await firestore.doc("writings").get();
    console.log(data);
  };

  return (
    <aside>
      <ul className="menu-aside">
        <li onClick={fetchData}>Izone</li>
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
