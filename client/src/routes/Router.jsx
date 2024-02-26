import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
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
// import Blogs from "../pages/Blogs/Blogs";
import ThemeDetails from "../pages/CreateEvent/OurThemes/ThemeDetails/ThemeDetails";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AdminSummary from "../pages/Dashboard/AdminSummary/AdminSummary";
import CheckOut from "../pages/Home/HomeComponenets/UpComingEvent/CheckOut";
import DetailsProduct from "../pages/Shopping/DetailsProduct/DetailsProduct";
import EventRequests from "../pages/Dashboard/EventRequests/EventRequests";

import PaymentFaild from "../components/shared/PaymentPage/PaymentFaild";
import OurBlogs from "../pages/Demo/OurBlogs/OurBlogs";
import BlogDetails from "../pages/Demo/OurBlogs/BlogDetails/BlogDetails";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import About from "../pages/About/About";

import MyEvents from "../pages/Dashboard/MyEvents/MyEvents";
import ContactUs from "../pages/Contact/ContactUs";
import Successrout from "../components/shared/PaymentPage/Successrout";
import SignIn from "../pages/SignIn/SignIn";
// import LogIn from "../pages/SignIn/LogIn";

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
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "blogs",
        element: <OurBlogs />,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "select-way/:label",
        element: <SelectWay></SelectWay>,
      },

      {
        path: "event/upcomingDetails/:id",
        element: <UpcomingDetails></UpcomingDetails>,
      },
      {
        path: "checkout/:from/:ids",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "payment/successful/:tranid",
        element: <Successrout></Successrout>
      },
      {
        path: "payment/failure/:tran_id",
        element: <PaymentFaild></PaymentFaild>,
      },

      {
        path: "shopping",
        element: <Shopping></Shopping>,
      },
      {
        path: "details-shopCart/:id",
        element: <DetailsProduct></DetailsProduct>,
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
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
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
        path: "event-requests",
        element: <EventRequests></EventRequests>,
      },
      {
        path: "editProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "my-events",
        element: <MyEvents></MyEvents>,
      },
    ],
  },
]);

export default Router;
