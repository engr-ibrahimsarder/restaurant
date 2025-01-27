import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import {  NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">  
      <div className="w-96 text-center bg-orange-400 h-screen flex flex-col gap-5">
        <li className="flex justify-center items-center gap-3">
        <FaHome className="text-white"></FaHome>
          <NavLink  className="text-white text-2xl" to="/">
          Home</NavLink>
          </li>
        <li className="flex justify-center items-center gap-3">
        <FaUser className="text-white"></FaUser>
          <NavLink  className="text-white text-2xl" to="userProfile">
          Profile</NavLink>
          </li>
        <li className="flex justify-center items-center gap-3">
        <FaShoppingCart className="text-white"></FaShoppingCart>
          <NavLink  className="text-white text-2xl" to="cart">
          Cart</NavLink>
          </li>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;