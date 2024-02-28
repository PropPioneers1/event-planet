import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import userImg from "../../../../assets/image/user.png";
import useAuth from "../../../../hooks/useAuth";
import { IoIosPerson } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: currentUser, isPending } = useQuery({
    queryKey: ["pendingEvents", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/${user?.email}`);
      return result?.data;
    },
  });

  console.log(currentUser);

  if (isPending) {
    return <h3>loading...</h3>;
  }

  return (
    <div className="w-[95%] mx-auto ">
      {/* user profile */}
      <div className="shadow-xl shadow-gray-300 rounded-md overflow-hidden">
        {/* banner */}
        <div className="bg-gradient-to-tr from-30% from-[#DA6DA8]  via-[#9B96F1] to-[#36A2ED] md:h-[250px] h-[200px]"></div>
        {/* Profile */}
        <div className="bg-white flex justify-center  lg:justify-between flex-col lg:flex-row items-center pb-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* user image */}

            <img
              src={currentUser?.image ? currentUser.image : userImg}
              alt=""
              className="w-28 h-28 rounded-md border-8 border-white relative left-0 md:left-7 bottom-10 object-cover "
            />
            {/* user info */}
            <div className=" md:pl-12 pl-auto -pt-10 md:pt-2">
              <h3 className="text-secondary text-xl font-semibold">
                {currentUser && currentUser?.name}
              </h3>
              <div className="text-lg  text-gray-500 pt-1 flex md:items-center items-start flex-col md:flex-row gap-3 md:gap-6">
                <h2 className="flex items-center gap-2">
                  <IoIosPerson className="text-xl" />{" "}
                  <span className="pb-0.5">Profession</span>{" "}
                </h2>
                <h2 className="flex items-center gap-2">
                  <ImLocation className="text-xl" />{" "}
                  <span className="pb-0.5">{currentUser?.address}</span>{" "}
                </h2>
                <h2 className="flex items-center gap-2">
                  <FaCalendar className="text-xl" />{" "}
                  <span className="pb-0.5">Joined 25 Jan, 2024</span>{" "}
                </h2>
              </div>
            </div>
          </div>
          <Link to="/dashboard/editProfile">
            <button
              className="py-2 px-4 text-white bg-gradient-to-tl cursor-pointer  from-primary  
                  to-[#861f42] hover:bg-gradient-to-tr font-semibold rounded-md mr-5 mt-4 md:mt-auto"
            >
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      {/* user all info */}
      <div className="flex flex-col-reverse md:flex-row gap-8 my-10">
        <div className=" bg-white shadow-lg shadow-gray-300 rounded-lg border w-full md:w-1/2 ">
          {/* Name */}
          <div className="grid grid-cols-2 py-4 px-4">
            <div className="col-span-1 ">
              <p className="text-base md:text-lg font-normal">Name:</p>
            </div>
            <div className="col-span-1 ">
              <p className="text-base md:text-lg font-semibold text-wrap">
                {currentUser?.name}
              </p>
            </div>
          </div>
          <hr />
          {/* email */}
          <div className="grid grid-cols-2 py-4 px-4 text-wrap">
            <div className=" ">
              <p className="text-base md:text-lg font-normal">Email Address:</p>
            </div>
            <div className=" ">
              <p className="text-base md:text-lg font-semibold text-wrap">
                {currentUser?.email}
              </p>
            </div>
          </div>
          <hr />
          {/* Phone number */}
          <div className="grid grid-cols-2 py-4 px-4">
            <div className="col-span-1 ">
              <p className="text-base md:text-lg font-normal">Phone Number:</p>
            </div>
            <div className="col-span-1 ">
              <p className="text-base md:text-lg font-semibold">
                {currentUser?.phone ? currentUser.phone : "N/A"}
              </p>
            </div>
          </div>
          <hr />
          {/* Gender */}
          <div className="grid grid-cols-2 py-4 px-4">
            <div className="col-span-1 ">
              <p className="text-base md:text-lg font-normal">Gender:</p>
            </div>
            <div className="col-span-1 ">
              <p className="text-base md:text-lg font-semibold">
                {currentUser?.gender ? currentUser.gender : "N/A"}
              </p>
            </div>
          </div>
          <hr />
          {/* Language */}
          <div className="grid grid-cols-2 py-4 px-4">
            <div className="col-span-1 text-base md:text-lg font-normal">
              <p className="text-base md:text-lg font-normal">Language:</p>
            </div>
            <div className="col-span-1 text-base md:text-lg font-semibold">
              <p className="text-base md:text-lg font-semibold">
                {currentUser?.language ? currentUser.language : "N/A"}
              </p>
            </div>
          </div>
          <hr />
          {/* Address */}
          <div className="grid grid-cols-2 py-4 px-4">
            <div className=" text-base md:text-lg font-normal">
              <p className="text-base md:text-lg font-normal">Address:</p>
            </div>
            <div className=" text-base md:text-lg font-semibold">
              <p className="text-base md:text-lg font-semibold">
                {currentUser?.address ? currentUser?.address : "N/A"}
              </p>
            </div>
          </div>
        </div>
        {/* about */}
        <div className="bg-white shadow-lg shadow-gray-300 rounded-lg p-4 border w-full md:w-1/2 ">
          <h2 className="text-xl font-semibold text-gray-500 pb-5">About</h2>
          <p>{currentUser?.about}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
