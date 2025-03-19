import { RouterProvider } from "react-router-dom";
import router from "./routes";


type Props = {};
function App({}: Props) {
  return (
    <RouterProvider router={router}/>
  )
}
export default App;
