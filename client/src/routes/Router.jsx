import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import UpcomingDetails from "../pages/Home/HomeComponenets/UpComingEvent/UpcomingDetails";
import AllEvent from "../pages/AllEvent/AllEvent";
import Dashboard from "../layouts/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import CreateBlog from "../pages/Dashboard/CreateBlog/CreateBlog";
import CreateTheme from "../pages/Dashboard/CreateTheme/CreateTheme";
import Shopping from "../pages/Shopping/Shopping";

import SelectWay from "../pages/CreateEvent/Chooseway.jsx/SelectWay";
import CreateDesForm from "../pages/CreateEvent/AddEvent/CreateDesForm";
import Blogs from "../pages/Blogs/Blogs";
import ThemeDetails from "../pages/CreateEvent/OurThemes/ThemeDetails/ThemeDetails";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AdminSummary from "../pages/Dashboard/AdminSummary/AdminSummary";
import CheckOut from "../pages/Home/HomeComponenets/UpComingEvent/CheckOut";
import DetailsProduct from "../pages/Shopping/DetailsProduct/DetailsProduct";
import EventRequests from "../pages/Dashboard/EventRequests/EventRequests";
import PaymentSuccess from "../components/shared/PaymentPage/PaymentSuccess";
import PaymentFaild from "../components/shared/PaymentPage/PaymentFaild";

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
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "select-way/:label",
        element: <SelectWay></SelectWay>,
      },

      {
        path: "upcomingDetails/:id",
        element: <UpcomingDetails></UpcomingDetails>,
      },
      {
        path:"checkOut/:id",
        element:<CheckOut></CheckOut>
      },
      {
        path:"payment/success/:tran_id",
        element:<PaymentSuccess></PaymentSuccess>
      },
      {
        path:"payment/failure/:tran_id",
        element:<PaymentFaild></PaymentFaild>
      },
      {
        path:"checkOut",
        element:<CheckOut></CheckOut>
      },
      {
        path: "shopping",
        element: <Shopping></Shopping>,
      },
      {
        path:"details-shopCart/:id",
        element:<DetailsProduct></DetailsProduct>
      },
      {
        path: "create-form/:label",
        element: <CreateDesForm></CreateDesForm>,
      },
      {
        path: "theme-details/:idx/:label",
        element: <ThemeDetails />,
      },
      {
        path: "event",
        element: <AllEvent></AllEvent>,
      },
      {
        path: "editProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "create-theme",
        element: <CreateTheme></CreateTheme>,
      },

      {
        path: "create-blog",
        element: <CreateBlog></CreateBlog>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "admin-summary",
        element: <AdminSummary></AdminSummary>,
      },
      {
        path:"event-requests",
        element: <EventRequests></EventRequests>
      }
    ],
  },
]);

export default Router;
