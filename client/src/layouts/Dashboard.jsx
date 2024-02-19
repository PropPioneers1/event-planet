import DashBar from "../pages/Dashboard/DashBar";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoAddCircleOutline, IoCreate } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { CgLogOut } from "react-icons/cg";
import { MdSummarize } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);

  const activeStyle =
    "flex items-center h-16  gap-5 text-xl text-primary p-4 mb-2 rounded font-semibold";
  const inActiveStyle =
    "flex items-center h-16 gap-5  text-xl text-[#707070] p-4 mb-2 font-semibold hover:text-primary ";

  const iconStyle = "text-xl flex items-center";

  const dashLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <FaHome className={iconStyle}></FaHome>
        <li className={isCollapse ? "hidden" : "block"}> Home</li>
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <FaUserAlt className={iconStyle}></FaUserAlt>
        <li className={isCollapse ? "hidden" : "block"}>Profile</li>
      </NavLink>

      {/* <NavLink
        to="/dashboard/add-product"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <FiShoppingCart className={iconStyle}></FiShoppingCart>
        <li className={isCollapse ? "hidden" : "block"}> Add Product</li>
      </NavLink> */}

      {/* <NavLink
        to="/dashboard/create-theme"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <IoAddCircleOutline className={iconStyle}></IoAddCircleOutline>
        <li className={isCollapse ? "hidden" : "block"}>Create Theme</li>
      </NavLink> */}

      {/* <NavLink
        to="/dashboard/create-blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <IoCreate className={iconStyle}></IoCreate>
        <li className={isCollapse ? "hidden" : "block"}> Create Blog</li>
      </NavLink> */}

      <NavLink
        to="/dashboard/my-cart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <IoMdCart className={iconStyle}></IoMdCart>
        <li className={isCollapse ? "hidden" : "block"}> My Cart</li>
      </NavLink>

      <NavLink
        to="/dashboard/payment-history"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <MdPayments className={iconStyle}></MdPayments>
        <li className={isCollapse ? "hidden" : "block"}> Payment History</li>
      </NavLink>
      {/* <NavLink
        to="/dashboard/event-requests"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <FaCodePullRequest className={iconStyle}></FaCodePullRequest>
        <li className={isCollapse ? "hidden" : "block"}> Event Requests</li>
      </NavLink> */}
      {/* <NavLink
        to="/dashboard/admin-summary"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <MdSummarize className={iconStyle}></MdSummarize>
        <li className={isCollapse ? "hidden" : "block"}> Admin Summary</li>
      </NavLink> */}
      <NavLink
        to="/dashboard/my-events"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activeStyle : inActiveStyle
        }
      >
        <FaCalendarAlt className={iconStyle}></FaCalendarAlt>
        <li className={isCollapse ? "hidden" : "block"}>My Events</li>
      </NavLink>

      <hr />
    </>
  );

  return (
    <div className="min-h-screen">
      <DashBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        dashLinks={dashLinks}
      ></DashBar>
      <div className="flex flex-col md:flex-row">
        <div className="md:border-r-2">
          {/* sidebar  */}
          <div
            className={` px-2 min-h-screen ${
              isCollapse ? "w-auto" : "w-72 hidden lg:block"
            } `}
          >
            <ul className="mt-8 ">{dashLinks}</ul>
            <button
              onClick={() => setIsCollapse(!isCollapse)}
              className="flex items-center gap-4 h-16  text-xl text-[#707070] p-4 rounded font-semibold hover:text-primary"
            >
              {isCollapse ? (
                <PiSignInBold className={iconStyle}></PiSignInBold>
              ) : (
                <CgLogOut className={iconStyle}></CgLogOut>
              )}
              <span className={isCollapse ? "hidden" : "block"}> Collapse</span>
            </button>
          </div>
          <div
            onClick={() => setIsSidebarOpen(false)}
            className={`fixed z-30 top-0 w-full min-h-screen lg:hidden  bg-[#000000b3] ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="w-full p-6 lg:p-10 bg-neutral min-h-screen overflow-hidden">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
