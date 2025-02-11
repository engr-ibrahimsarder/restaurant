import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";
import CustomLink from "../../CustomLink/CustomLink";

const Navbar = () => {
  const [cart] = useCart();

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  const navLink = (
    <ul className="flex md:flex-row flex-col  uppercase text-black md:text-white">
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/contact">Contact Us</CustomLink>
      </li>
      <li>
        <CustomLink to="/ourMenu">Our Menu</CustomLink>
      </li>
      <li>
        <CustomLink to="/ourShop">Our Shop</CustomLink>
      </li>
      {user ? (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      ) : (
        <></>
      )}

      <li>
        <CustomLink className="mr-4" to="/dashboard/cart">
          <FaShoppingCart className="text-2xl"></FaShoppingCart>
          <div className="badge badge-secondary absolute -top-2 mb-6 ml-3">
            +{cart.length}
          </div>
        </CustomLink>
      </li>
      {user ? (
        <button
          onClick={handleLogOut}
          style={{ color: "yellow" }}
          className="text-sm uppercase"
        >
          LogOut
        </button>
      ) : (
        <li>
          <CustomLink to="/login">Login</CustomLink>
        </li>
      )}
    </ul>
  );
  return (
    <div className="bg-black bg-opacity-30 fixed z-10 w-full">
      <div className="navbar  text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <Link to="" className="text-xl">
            <h1 className="text-white uppercase">
              chicken <br /> <span className="text-xs">Street</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
