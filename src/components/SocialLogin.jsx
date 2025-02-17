import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import usePublic from "../hooks/usePublic";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const navigate = useNavigate();
  const axiosPublic = usePublic();
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        email: res?.user?.email,
        name: res?.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res);
        if (res.data.insertedId !== null) {
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Already Exist!",
          });
        }
      });
    });
  };
  return (
    <div className="mt-1">
      <button onClick={handleGoogleSignIn}>
        <FaGoogle className="text-2xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
