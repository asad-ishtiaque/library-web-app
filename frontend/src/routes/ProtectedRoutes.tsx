import { Navigate } from "react-router-dom";
import RouteNames from "./RouteNames";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? <>{children}</> : <Navigate to={RouteNames.Signin.route} />;
};

export default ProtectedRoute;
