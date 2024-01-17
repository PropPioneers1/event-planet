import { Link, NavLink } from "react-router-dom";
import Container from "../../ui/Container";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = (
    <>
      <NavLink to="/">
        <li className="font-semibold hover:text-[#3F72AF]">Home</li>
      </NavLink>
      <NavLink to="/">
        <li className="font-semibold hover:text-[#3F72AF]">Event</li>
      </NavLink>
      <NavLink to="/">
        <li
          className="relative hover:text-[#3F72AF]"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span className="font-semibold ">Categories</span>
          {/* Drop down */}
          {/* <ul
            className={`absolute lg:w-40 bg-[#EEEEEE]
            text-[#222831] text-sm
             -left-7 top-12 space-y-3 transition-all duration-1000 p-4 
              ${isDropdownOpen ? "h-auto opacity-100 block" : "h-0 opacity-0"}`}
          >
            <li className="hover:text-[#3F72AF]">
              <a>Education</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Business</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Travel</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Conference</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Food Festival</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Sports Event</a>
            </li>
          </ul> */}
        </li>
      </NavLink>
      <NavLink to="/">
        <li
          className="font-semibold hover:text-[#3F72AF] relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span className="font-semibold">Location</span>
          {/* Dropdown */}
          {/* <ul
            className={`absolute lg:w-40 bg-[#EEEEEE]
            text-[#222831] text-sm
             -left-7 top-12 space-y-3 transition-all duration-1000 p-4 
              ${isDropdownOpen ? "h-auto opacity-100 block" : "h-0 opacity-0"}`}
          >
            <li className="hover:text-[#3F72AF]">
              <a>Education</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Business</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Travel</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Conference</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Food Festival</a>
            </li>
            <li className="hover:text-[#3F72AF]">
              <a>Sports Event</a>
            </li>
          </ul> */}
        </li>
      </NavLink>
      <NavLink to="/">
        <li className="font-semibold hover:text-[#3F72AF]">Blog</li>
      </NavLink>
      <NavLink to="/">
        <li className="font-semibold hover:text-[#3F72AF]">Shop</li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-[#222831] sticky top-0 z-20">
      {/* Container */}
      <Container>
        <div className="flex justify-between items-center text-[#EEEEEE] py-5 ">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-[#3F72AF] ">
            Event Planet
          </Link>

          {/* navlinks */}
          <ul className="md:flex item-center gap-5 hidden">{navLinks}</ul>

          {/* sign in && sign up ||  account*/}
          <ul className="flex items-center gap-5">
            <NavLink to="/">
              <li className="font-semibold hover:text-[#3F72AF]">Sign in</li>
            </NavLink>
            <div className="w-[1px] h-[15px] bg-[#EEEEEE]"></div>
            <NavLink to="/">
              <li className="font-semibold hover:text-[#3F72AF]">Sign up</li>
            </NavLink>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
