import React, { useState } from "react";
import "./Style.css";
import Menu from "../menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((curElem) =>{
    return curElem.category;
})), 'All'];
// console.log(uniqueList);

const Restaurent = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category === 'All'){
        setMenuData(Menu);
        return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem = {filterItem} menuList = {menuList}/>
      <MenuCard menuProp={menuData} />
    </>
  );
};

export default Restaurent;
