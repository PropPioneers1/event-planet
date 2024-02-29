import { Link, NavLink } from "react-router-dom";
import Container from "../../ui/Container";
import { SlMenu } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MenuDropdown from "./MenuDropDown";
import NotificationMessage from "../../../pages/NotificationMessage/NotificationMessage";
import logo from "../../../assets/image/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [isMenuTrue, setIsMenuTrue] = useState(false);

  const cartProduct = useSelector((state) => state.cartProduct);

  console.log(cartProduct);

  const navLinkStyles =
    "font-semibold  text-xl hover:text-white lg:text-white hover:bg-[#222831b3] py-2 px-5 rounded-[5px] w-36 lg:w-auto my-2 lg:my-auto";

  const navLinks = (
    <>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/">
        <li className={navLinkStyles}>Home</li>
      </NavLink>
      <NavLink
        onClick={() => setIsMenuTrue(false)}
        to="/dashboard/profile"
        className="block lg:hidden"
      >
        <li className={navLinkStyles}>Dashboard</li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/event">
        <li className={navLinkStyles}>All Event</li>
      </NavLink>

      <NavLink onClick={() => setIsMenuTrue(false)} to="/blogs">
        <li className={navLinkStyles}>Blog</li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/shopping">
        <li className={navLinkStyles}>Shop</li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/about">
        <li className={navLinkStyles}>About</li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/contact">
        <li className={navLinkStyles}>Contact Us</li>
      </NavLink>
      <Link className="">
        <NotificationMessage></NotificationMessage>
      </Link>
      <Link className="relative" to="/dashboard/my-cart">
        <span className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-red-400 text-center flex justify-center items-center">
          {cartProduct}
        </span>
        <FaShoppingCart className="text-3xl text-center" />
      </Link>
    </>
  );

  const authLinks = (
    <>
      {user ? (
        <>
          <hr className="block lg:hidden" />
          <button className="hidden lg:block">
            <MenuDropdown></MenuDropdown>
          </button>
          <NavLink onClick={() => setIsMenuTrue(false)} to="signIn">
            <button
              className="font-semibold border-2 border-accent
         rounded-md py-2 px-4 transition-all duration-500 ease-out hover:text-white hover:bg-accent block lg:hidden"
              onClick={() => logOut()}
            >
              Logout
            </button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink onClick={() => setIsMenuTrue(false)} to="signIn">
            <button
              className="font-semibold border-2 border-accent
         rounded-md py-2 px-4 transition-all duration-500 ease-out hover:bg-accent "
            >
              Sign in
            </button>
          </NavLink>
          <div className="w-[1px] h-[15px] bg-[#EEEEEE] hidden lg:block "></div>
          <NavLink onClick={() => setIsMenuTrue(false)} to="/sign-up">
            <button
              className="font-semibold border-2 border-accent
         rounded-md py-2 px-4 transition-all duration-500 ease-out hover:bg-accent"
            >
              Sign up
            </button>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="">
      <div
        className=" bg-[#16181c] bg-opacity-100 
       top-0 z-50  w-full 
      shadow-2xl
      "
      >
        {/* Container */}
        <Container>
          <div className="flex justify-between items-center text-secondary lg:text-neutral">
            {/* Logo */}
            <div>
              <Link to="/" className="text-2xl font-bold  ">
                <img src={logo} className="w-40" alt="Event Planet" />
              </Link>
            </div>

            {/* navLinks for medium and large device */}
            <ul className="lg:flex items-center gap-1 hidden text-lg">
              {navLinks}
            </ul>
            {/* sign in && sign up ||  account for medium and large device*/}
            <ul className="hidden lg:flex items-center gap-5 ">{authLinks}</ul>

            <div className="block lg:hidden">
              <SlMenu
                onClick={() => setIsMenuTrue(true)}
                className={`text-2xl text-white font-bold cursor-pointer hover:text-accent 
                transition-all duration-300 ${isMenuTrue ? "hidden" : "block"}`}
              />
              <IoCloseOutline
                onClick={() => setIsMenuTrue(false)}
                className={`text-3xl text-white  cursor-pointer hover:text-accent 
                transition-all duration-300 ${isMenuTrue ? "block" : "hidden"}`}
              />
            </div>
          </div>
        </Container>

        <div
          className={`overflow-y-auto block lg:hidden transition-all bg-neutral duration-500 
             text-secondary w-full ${
               isMenuTrue ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
             } px-4 `}
        >
          {/* navLinks for mobile devices */}
          <ul className="pt-5">{navLinks}</ul>
          <ul className="pb-0 lg:pb-5 flex flex-col gap-3">{authLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
