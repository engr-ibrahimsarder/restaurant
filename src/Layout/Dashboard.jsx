import { useContext } from "react";
import { FaAd, FaHome, FaList, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const isAdmin = true;
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="flex">
      {isAdmin ? (
        <div className="w-96 text-center bg-orange-400 h-screen flex flex-col gap-5">
          <li className="flex justify-center items-center gap-3">
            <FaHome className="text-white"></FaHome>
            <NavLink className="text-white text-2xl" to="/">
              Admin Home
            </NavLink>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaUtensils className="text-white"></FaUtensils>
            <NavLink className="text-white text-2xl" to="/">
              Add Items
            </NavLink>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaList className="text-white"></FaList>
            <NavLink className="text-white text-2xl" to="/">
              Manage Items
            </NavLink>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaAd className="text-white"></FaAd>
            <NavLink className="text-white text-2xl" to="/">
              My Booking
            </NavLink>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaUsers className="text-white"></FaUsers>
            <NavLink className="text-white text-2xl" to="/dashboard/users">
              All Users
            </NavLink>
          </li>
        </div>
      ) : (
        <div className="w-96 text-center bg-orange-400 h-screen flex flex-col gap-5">
          <li className="flex justify-center items-center gap-3">
            <FaHome className="text-white"></FaHome>
            <NavLink className="text-white text-2xl" to="/">
              Home
            </NavLink>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaUser className="text-white"></FaUser>
            <NavLink className="text-white text-2xl" to="userProfile">
              Profile
            </NavLink>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaShoppingCart className="text-white "></FaShoppingCart>
            <NavLink className="text-white text-2xl" to="cart">
              Cart
            </NavLink>
          </li>
          <li
            onClick={handleLogOut}
            className="flex justify-center items-center gap-3"
          >
            <IoLogOut className="text-white"></IoLogOut>
            <NavLink className="text-white text-2xl" to="">
              Logout
            </NavLink>
          </li>
        </div>
      )}

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
