
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";

const DashBar = () => {
    return (
        <div className="">
            <div className="navbar bg-neutral px-4 py-4">
                <div className="navbar-start">
                    <div className="drawer md:hidden z-50 ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label
                                htmlFor="my-drawer"
                                className="drawer-button">
                                <HiBars3CenterLeft className="text-4xl font-bold cursor-pointer"></HiBars3CenterLeft>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li><a className="text-2xl font-bold">Event Planet</a></li>
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>

                            </ul>
                        </div>
                    </div>
                    <a className="text-2xl font-bold hidden md:block">Event Planet</a>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div className="flex gap-1 items-center">
                            <div tabIndex={0} role="button" className=" avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img alt="User Image" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                </div>
                                <a
                                className="text-xl font-medium flex items-center ml-2" role="button">
                                    John Smith <span><RiArrowDropDownLine className="text-3xl" /></span>
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
        </div>
    );
};

export default DashBar;