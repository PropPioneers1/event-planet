import { FaCalendarAlt, FaHome, FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdPayments, MdSummarize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import { FaCodePullRequest } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoCreate } from "react-icons/io5";
import logo from "../../../assets/image/logo.png";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const DashboardDemo = () => {
  const { user } = useAuth();
  const [isMenuTrue, setIsMenuTrue] = useState(false);
  const iconStyle = `text-[19px] flex items-center  gap-2.5  py-2 px-4 rounded-md  hover:shadow-md hover:shadow-accent text-white transition-all duration-300`;

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
      <NavLink to="/dashboard/add-product" className={iconStyle}>
        <FiShoppingCart></FiShoppingCart>
        <li> Add Product</li>
      </NavLink>

      <NavLink to="/dashboard/create-blog" className={iconStyle}>
        <IoCreate></IoCreate>
        <li> Create Blog</li>
      </NavLink>

      <NavLink to="/dashboard/my-cart" className={iconStyle}>
        <IoMdCart></IoMdCart>
        <li> My Cart</li>
      </NavLink>

      <NavLink to="/dashboard/payment-history" className={iconStyle}>
        <MdPayments></MdPayments>
        <li> Payment History</li>
      </NavLink>
      <NavLink to="/dashboard/event-requests" className={iconStyle}>
        <FaCodePullRequest></FaCodePullRequest>
        <li> Event Requests</li>
      </NavLink>
      <NavLink to="/dashboard/admin-summary" className={iconStyle}>
        <MdSummarize></MdSummarize>
        <li> Admin Summary</li>
      </NavLink>
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
        className={`fixed h-screen w-[280px] bg-[#17283f] border-r shadow-2xl px-4 pt-5 top-0 lg:left-0 z-50 transition-all
         duration-300 ${isMenuTrue ? "left-0" : "-left-[300px]"}`}
        style={{ boxShadow: " 6px 0px 5px 0px rgba(79,79,79,0.75);" }}
      >
        {/* logo */}
        <div className="flex justify-between items-center">
          <img src={logo} alt="Event Planet" className="w-40" />
          <IoMdClose
            className="text-3xl text-white cursor-pointer block lg:hidden"
            onClick={() => setIsMenuTrue(false)}
          />
        </div>
        <ul className=" space-y-3 dashboard-route">{dashLinks}</ul>
      </div>
      <div className="w-[343px] hidden lg:block"></div>

      {/* main */}
      <div className="bg-[#F8F7FA] w-full h-screen col-span-10">
        {/* dashboard nav */}
        <div className="overflow-y-auto w-[95%] mx-auto h-20 shadow-2xl bg-white  my-10 rounded-lg flex justify-between items-center px-4">
          <AiOutlineMenu
            onClick={() => setIsMenuTrue(true)}
            className="text-2xl cursor-pointer block lg:hidden"
          />
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
