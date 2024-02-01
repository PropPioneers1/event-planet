// import { AiOutlineMenu } from "react-icons/ai";
import { PiSignOutBold } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const MenuDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, logOut } = useAuth();

	// const [roles] = useRole();
	const roles = "admin";

	const handleLogOut = async () => {
		await logOut();
		toast.success("Sign Out Successfully");
	};

	return (
		<div className="relative z-10">
			<div className="flex flex-row items-center text-black gap-3">
				{/* Dropdown btn */}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
				>
					{/* <AiOutlineMenu className="text-white" /> */}
					<div className="hidden md:block">
						{/* Avatar */}
						{user && user.photoURL ? (
							<img
								className="rounded-full"
								referrerPolicy="no-referrer"
								src={user && user.photoURL ? user.photoURL : ""}
								alt="profile"
								height="30"
								width="30"
							/>
						) : (
							<img
								className="h-10 w-10 rounded-full"
								src="https://i.ibb.co/H7vjrrw/profile11.jpg"
								alt=""
							/>
						)}
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="absolute rounded-xl text-black shadow-md w-[40vw] md:w-[15vw] bg-white overflow-hidden right-0 top-12  text-sm">
					<div className=" p-2 ">
						<div className="flex justify-center">
							<img
								className="h-14 w-14  rounded-full"
								src="https://i.ibb.co/H7vjrrw/profile11.jpg"
								alt=""
							/>
						</div>
						<h1 className="mb-1 transition font-semibold">
							User or Admin Name
						</h1>
					</div>
					<hr className="h-[5px] w-full" />
					<div className="flex flex-col cursor-pointer">
						<Link
							to="/"
							className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
						>
							Home
						</Link>

						{user ? (
							<>
								<p className="text-center">
									{user?.displayName}
								</p>

								{/* Admin Rules route */}

								{roles === "admin" && (
									<Link
										to="/dashboard/profile"
										className="px-4 py-3 hover:bg-primary hover:text-white transition font-semibold flex items-center"
									>
										<MdOutlineDashboardCustomize className="w-5 h-5 mr-2" />{" "}
										Dashboard
									</Link>
								)}

								{/* User Rules route */}

								{roles === "user" && (
									<>
										<Link className="px-4 py-3 hover:bg-primary hover:text-white transition font-semibold flex items-center">
											<MdOutlineDashboardCustomize className="w-5 h-5 mr-2" />{" "}
											Dashboard
										</Link>

										<Link
											to="/editProfile"
											className="px-4 border py-3 hover:bg-primary hover:text-white  transition font-semibold flex items-center "
										>
											<CgProfile className="w-5 h-5 mr-2"></CgProfile>{" "}
											Edit Profile
										</Link>
									</>
								)}

								<div
									onClick={handleLogOut}
									className="px-4 py-3 hover:bg-primary hover:text-white border flex items-center  cursor-pointer transition font-semibold"
								>
									<PiSignOutBold className="w-5 h-5 mr-2"></PiSignOutBold>{" "}
									Logout
								</div>
							</>
						) : (
							<>
								<Link
									to="/login"
									className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
								>
									Login
								</Link>
								<Link
									to="/signup"
									className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
								>
									Sign Up
								</Link>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default MenuDropdown;
