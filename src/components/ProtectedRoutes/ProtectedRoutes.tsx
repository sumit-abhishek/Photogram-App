import { userAuthContext, useUserAuth } from "@/context/userAuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {};
const ProtectedRoutes = (props: Props) => {
  const { user } = useUserAuth();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};
export default ProtectedRoutes;
