import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://event-planet-server.vercel.app",
});
export default axiosSecure;
