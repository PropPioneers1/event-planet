import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";

const Dashboard = () => {

    const activeStyle = "flex item-center gap-4 bg-secondary bg-opacity-70 text-white mb-4 p-2 rounded font-semibold"
    const inActiveStyle = "flex item-center gap-4 bg-secondary text-white  mb-4 p-2 font-semibold"

    const dashLinks = <>
        <NavLink
            to="/dashboard/add-product"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : inActiveStyle
            }
        >
            <FiShoppingCart className="text-2xl"></FiShoppingCart>
            Add Product
        </NavLink>

        <NavLink
            to="/dashboard/create-theme"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : inActiveStyle
            }
        >
            <MdPayments className="text-2xl"></MdPayments>
            Create Theme
        </NavLink>

        <NavLink
            to="/dashboard/create-blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : inActiveStyle
            }
        >
            <MdPayments className="text-2xl"></MdPayments>
            Create Blog
        </NavLink>

        <NavLink
            to="/dashboard/payment-history"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : inActiveStyle
            }
        >
            <MdPayments className="text-2xl"></MdPayments>
            Payment History
        </NavLink>

        <div className="divider"></div>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : inActiveStyle
            }
        >
            <FaHome className="text-2xl"></FaHome>
            Home
        </NavLink>

        <NavLink
            to="/dashboard/profile"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : inActiveStyle
            }
        >
            <FaUserAlt className="text-xl"></FaUserAlt>
            Profile
        </NavLink>

    </>

    return (
        <div className="max-w-7xl mx-auto">
            <div className="min-h-screen">

                <div className="flex flex-col md:flex-row">
                    <div className="md:border-2 ">
                        <div className="drawer md:hidden z-50 ">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex justify-between p-4 bg-neutral">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="drawer-button">
                                    <HiBars3CenterLeft className="text-4xl px-0   font-bold cursor-pointer"></HiBars3CenterLeft>
                                </label>
                                <a className="text-2xl font-bold md:hidden">Event Planet</a>
                            </div>
                            {/* Drawer side for mobile device */}
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-neutral pt-20 w-80 min-h-full text-base-content">
                                    {/* Sidebar content here */}

                                    {
                                        dashLinks
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="w-64 min-h-screen  py-6 px-4 hidden md:block">
                            {/* TODO: Change logo */}
                            {/* <img className="object-cover" src="https://i.ibb.co/T8Xgw50/nexgen.png" alt="" /> */}
                            <a className="text-3xl font-bold py-6">Event Planet</a>    
                            <ul className="mt-8">
                                {dashLinks}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;