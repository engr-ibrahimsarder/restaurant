import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://restaurant-server-navy.vercel.app",
});
const usePublic = () => {
  return axiosPublic;
};

export default usePublic;
