import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";
import { ROUTE } from "./routes";

export const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.AUTHENTICATION} />;
};
