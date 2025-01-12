import { useState } from "react";

const Menu = () => {
    const [Menus, setMenus] = useState()
    fetch("menu.json")
    .then(res=> res.json())
    .then(data=> {
        setMenus(data)
        console.log(data)})
  return (
    <div>
      get started with coding! 🤗
    </div>
  );
};

export default Menu;