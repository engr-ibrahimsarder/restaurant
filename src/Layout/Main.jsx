import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Main = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname.includes("login") || location.pathname.includes("signup")
  return (    
    <div >
      {
        hideNavbarAndFooter || <Navbar></Navbar>
      }
        
        <div>
      <Outlet></Outlet>
        </div>
        {
          hideNavbarAndFooter ||     <Footer></Footer> 
        }
      
    </div>
  );
};

export default Main;