import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {};
const ProtectedRoutes = (props: Props) => {
  const isAuth: boolean = false;
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};
export default ProtectedRoutes;
