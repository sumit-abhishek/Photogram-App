import { createBrowserRouter } from "react-router-dom";
import Login from "./modules/login/Login";
import Signup from "./modules/signup/Signup";
import Home from "./modules/home/Home";
import MyPhoto from "./modules/myPhotos/MyPhoto";
import Error from "./modules/error/Error";
import Profile from "./modules/profile/Profile";
import CreatePost from "./modules/posts/CreatePost";
import ProtectedRoutes from "./components/ui/ProtectedRoutes/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/home",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/myphotos",
        element: <MyPhoto />,
        errorElement: <Error />,
      },
      {
        path: "/posts",
        element: <CreatePost />,
        errorElement: <Error />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
]);

export default router;
