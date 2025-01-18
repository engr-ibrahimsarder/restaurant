import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <div >
        <Navbar></Navbar>
        <div>
      <Outlet></Outlet>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;