import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";
import { UserAuthProvider } from "./context/userAuthContext";

type Props = {};
function App({}: Props) {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />;
    </UserAuthProvider>
  );
}
export default App;
