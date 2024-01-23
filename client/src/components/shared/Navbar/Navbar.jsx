import { Link, NavLink } from "react-router-dom";
import Container from "../../ui/Container";
import { FaSortDown } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isMenuTrue, setIsMenuTrue] = useState(false);

  const categories = [
    "Education",
    "Business",
    "Travel",
    "Conference",
    "Food Festival",
    "Sports Event",
  ];

  const locations = [
    "Sylhet",
    "Mymensingh",
    "Rangpur",
    "Rajshahi",
    "Khulna",
    "Dhaka",
    "Chattogram",
    "Barishal",
  ];

  const navLinks = (
    <>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/">
        <li className="font-semibold hover:text-accent py-2 lg:py-5">Home</li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/">
        <li className="font-semibold hover:text-accent py-2 lg:py-5">Event</li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/">
        <li className="relative group hover:text-accent py-2 lg:py-5">
          <span className="font-semibold flex  items-center gap-1">
            Categories <FaSortDown />
          </span>
          {/* Drop down menu*/}
          <ul
            className={`absolute hidden group-hover:block lg:w-40 bg-[#EEEEEE]
            text-[#222831] text-sm
            lg:left-0 lg:top-16 left-20 top-10 z-10 space-y-3 transition-all duration-1000 p-4 shadow-md`}
          >
            {categories?.map((category, idx) => (
              <li key={idx} className="hover:text-accent">
                {category}
              </li>
            ))}
          </ul>
        </li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/">
        <li className="relative group py-2  lg:py-5 hover:text-accent">
          <span className="font-semibold flex  items-center gap-1">
            Location <FaSortDown />
          </span>
          {/* Drop down menu*/}
          <ul
            className={`absolute hidden transition-all duration-300 ease-out group-hover:block lg:w-40 bg-[#EEEEEE]
            text-[#222831] text-sm
            lg:left-0 lg:top-16 left-20 top-10 z-10  space-y-3 p-4 shadow-md overflow-y-auto`}
          >
            {locations?.map((location, idx) => (
              <li key={idx} className="hover:text-accent">
                {location}
              </li>
            ))}
          </ul>
        </li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/blogs">
        <li className="font-semibold hover:text-accent py-2 lg:py-5">Blogs</li>
      </NavLink>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/">
        <li className="font-semibold hover:text-accent py-2 lg:py-5">Shop</li>
      </NavLink>
    </>
  );

  const authLinks = (
    <>
      <NavLink onClick={() => setIsMenuTrue(false)} to="/sign-in">
        <button
          className="font-semibold border-2 border-accent
         rounded-md py-2 px-4 transition-all duration-500 ease-out hover:bg-accent"
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
  );

  return (
    <div className="">
      <div
        className="bg-neutral lg:bg-secondary bg-opacity-100 
      fixed top-0 z-50  w-full py-4 lg:py-0
      shadow-2xl
      "
      >
        {/* Container */}
        <Container>
          <div className="flex justify-between items-center text-secondary lg:text-neutral">
            {/* Logo */}
            <div>
              <Link to="/" className="text-2xl font-bold  ">
                Event Planet
              </Link>
            </div>

            {/* navLinks for medium and large device */}
            <ul className="lg:flex item-center gap-5 hidden text-lg">
              {navLinks}
            </ul>
            {/* sign in && sign up ||  account for medium and large device*/}
            <ul className="hidden lg:flex items-center gap-5 ">{authLinks}</ul>

            <div className="block lg:hidden">
              <SlMenu
                onClick={() => setIsMenuTrue(true)}
                className={`text-2xl font-bold cursor-pointer hover:text-accent 
                transition-all duration-300 ${isMenuTrue ? "hidden" : "block"}`}
              />
              <IoCloseOutline
                onClick={() => setIsMenuTrue(false)}
                className={`text-3xl  cursor-pointer hover:text-accent 
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
          <ul className="pb-5 flex flex-col gap-3">{authLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
