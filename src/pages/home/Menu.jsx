import useMenu from "../../hooks/useMenu";
import MenuItem from "../shared/MenuItem";

const Menu = () => {
  const [menu] = useMenu();
  
  const dessert = menu.filter(food => food.category === "dessert")
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      { 
      dessert.map(item=>    
        <MenuItem  
        key={item._id}
        item={item}
        ></MenuItem>
      )}
    </div>
  );
};

export default Menu;