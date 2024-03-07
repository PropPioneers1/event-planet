import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://server-orpin-alpha.vercel.app",
});
export default axiosSecure;
