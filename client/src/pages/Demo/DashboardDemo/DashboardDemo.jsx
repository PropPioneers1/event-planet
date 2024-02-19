import { FaCalendarAlt, FaHome, FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

const DashboardDemo = () => {
  const { user } = useAuth();
  const iconStyle = `text-[19px] flex items-center  gap-2.5  py-2 px-4 rounded-md bg-gradient-to-tl hover:from-accent  
  hover:to-[#1c324e] hover:shadow-md hover:shadow-accent text-white transition-all duration-300`;

  const dashLinks = (
    <>
      <NavLink to="/" className={iconStyle}>
        <FaHome></FaHome>
        <li> Home</li>
      </NavLink>

      <NavLink to="/dashboard/profile" className={iconStyle}>
        <FaUserAlt></FaUserAlt>
        <li>My Profile</li>
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

      <NavLink to="/dashboard/my-cart" className={iconStyle}>
        <IoMdCart></IoMdCart>
        <li> My Cart</li>
      </NavLink>

      <NavLink to="/dashboard/payment-history" className={iconStyle}>
        <MdPayments></MdPayments>
        <li> Payment History</li>
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
      <NavLink to="/dashboard/my-events" className={iconStyle}>
        <FaCalendarAlt></FaCalendarAlt>
        <li>My Events</li>
      </NavLink>
    </>
  );

  return (
    <div className="flex">
      {/* side bar */}
      <div
        className="fixed h-screen w-[280px] bg-[#17283f] border-r shadow-2xl px-4 pt-10 top-0 hidden lg:block"
        style={{ boxShadow: " 6px 0px 5px 0px rgba(79,79,79,0.75);" }}
      >
        {/* logo */}
        <h2 className="text-3xl font-semibold mb-5 text-white">EventPlanet</h2>
        <ul className=" space-y-3">{dashLinks}</ul>
      </div>
      <div className="w-[343px] hidden lg:block"></div>

      {/* main */}
      <div className="bg-[#F8F7FA] w-full h-screen col-span-10">
        {/* dashboard nav */}
        <div className="overflow-y-auto w-[95%] mx-auto h-20 shadow-2xl bg-white  my-10 rounded-lg flex justify-between items-center px-4">
          <AiOutlineMenu className="text-2xl cursor-pointer block lg:hidden " />
          {/* user */}
          {/* empty div for large device */}
          <div></div>
          <div>
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
              title={user?.displayName}
            />
          </div>
        </div>
        {/* outlet */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardDemo;
