import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main"
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;