import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Shopping from "../pages/Shopping/Shopping";


import SelectWay from "../pages/CreateEvent/Chooseway.jsx/SelectWay";
import CreateDesForm from "../pages/CreateEvent/AddEvent/CreateDesForm";
import AllEvent from "../pages/AllEvent/AllEvent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path:"shopping",
        element:<Shopping></Shopping>
      },
      {
        path:'select-way',
        element:<SelectWay></SelectWay>

      },
      {
        path:'create-form',
        element:<CreateDesForm></CreateDesForm>

      },
      {
				path: "event",
				element: <AllEvent></AllEvent>,
			}
    ],
  },
  
]);  
      

export default Router;
