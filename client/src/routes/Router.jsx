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
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

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
				path: "upcomingDetails/:id",
				element: <UpcomingDetails></UpcomingDetails>,
			},
			{
				path: "select-way/:lebel",
				element: <SelectWay></SelectWay>,
			},
			{
				path: "shopping",
				element: <Shopping></Shopping>,
			},
			{
				path: "create-form",
				element: <CreateDesForm></CreateDesForm>,
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
		],
	},
]);

export default Router;
