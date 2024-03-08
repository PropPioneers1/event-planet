/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Loader />;
  if (user) return children;
  return <Navigate to="/sign-up" state={{ from: location }} replace="true" />;
};

export default PrivetRoute;
