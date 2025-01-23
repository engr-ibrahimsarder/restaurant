import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">  
      <div className="w-96 text-center bg-black h-screen flex flex-col gap-5">
        <Link className="text-white text-2xl" to="cart">cart</Link>
        <Link className="text-white text-2xl" to="userProfile">User Profile</Link>
        <Link className="text-white text-2xl" to="/">Back</Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;