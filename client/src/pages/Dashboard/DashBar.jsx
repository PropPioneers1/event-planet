
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";

const DashBar = ({ dashLinks, isSidebarOpen, setIsSidebarOpen }) => {

    const { user } = useAuth()

    return (
        <div className="navbar flex justify-between border-b  ">
            <div className="p-2 ">
                <a className="text-3xl hidden md:block font-bold py-2">Event Planet</a>


                {/* sidebar for mobile */}
                <div className="relative md:hidden">
                    <div className="flex justify-between">
                        <HiBars3CenterLeft
                            className="text-5xl cursor-pointer"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        ></HiBars3CenterLeft>
                        <h2 className="text-3xl font-bold hidden md:block">Event Planet</h2>
                    </div>
                    <div
                        className={`transition-all duration-500 w-72 top-0 fixed bg-neutral h-auto min-h-screen z-50 ${isSidebarOpen ? " left-0 top-0" : "fixed top-0 -left-80 "}`} >
                        <ul
                            onClick={() => setIsSidebarOpen(false)}
                            className=" mt-24" >
                            {dashLinks}
                        </ul>

                    </div>
                </div>


            </div>
            {/* Dropdown for user and Profile */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div className="flex gap-1 items-center">
                        <div tabIndex={0} role="button" className=" avatar">
                            <div className="w-10 h-10 rounded-full">
                                <img alt="User Image" src={user?.photoURL ? user?.photoURL :"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" } />

                            </div>
                            <a
                                className="text-xl font-medium flex items-center ml-2" role="button">
                                    {user?.displayName ? user.displayName : "John Smith"}
                                <span><RiArrowDropDownLine className="text-3xl" /></span>
                            </a>
                        </div>


                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <a>Profile</a> </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBar;