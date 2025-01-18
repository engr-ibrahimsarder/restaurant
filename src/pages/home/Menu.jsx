import { useState } from "react";
import MenuItem from "../shared/MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([])
  
  fetch("menu.json")
  .then(res=>res.json())
  .then(data=>{
    const dessert = data.filter(food=> food.category === "dessert")
    setMenu(dessert)
  })
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      {
      menu.map(item=>    
        <MenuItem  
        key={item._id}
        item={item}
        ></MenuItem>
      )}
    </div>
  );
};

export default Menu;