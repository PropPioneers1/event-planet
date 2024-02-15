import useAuth from "../../../hooks/useAuth";
import userImg from "../../../assets/image/user.png";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Profile = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  const { data: currentUser, isPending } = useQuery({
    queryKey: ["pendingEvents"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/${user?.email}`);
      return result?.data;
    },
  });

  console.log(currentUser);


  if (isPending) {
    return <h3>loading...</h3>
  }



  return (
    <div className="p-8  bg-white rounded-md">
      <h2 className="text-2xl font-bold  py-4">
        Profile Information
      </h2>
      <hr className="font-bold" />
      {/* left side content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6 ">
        <div className=" md:col-span-1 lg:col-span-1  md:border-r-2 ">
          {/* user image */}
          <div className=" md:pr-6">
            <img
              src={currentUser?.image ? currentUser.image : userImg}
              alt=""
              className="w-full object-cover md:h-[400px] rounded-md"
            />
          </div>
          {/* user information */}
          <div className="mt-6 pr-4">
            {/* Name */}
            <div className="grid grid-cols-2 py-4 ">
              <div className="col-span-1 ">
                <p className="text-lg font-normal">Name:</p>
              </div>
              <div className="col-span-1 ">
                <p className="text-lg font-semibold">{currentUser?.name}</p>
              </div>
            </div>
            <hr />
            {/* email */}
            <div className="grid grid-cols-2 py-4 ">
              <div className="col-span-1 ">
                <p className="text-lg font-normal">Email Address:</p>
              </div>
              <div className="col-span-1 ">
                <p className="text-lg font-semibold">{currentUser?.email}</p>
              </div>
            </div>
            <hr />
            {/* Phone number */}
            <div className="grid grid-cols-2 py-4 ">
              <div className="col-span-1 ">
                <p className="text-lg font-normal">Phone Number:</p>
              </div>
              <div className="col-span-1 ">
                <p
                  className="text-lg font-semibold">
                  {currentUser?.phone ? currentUser.phone : "N/A"}
                </p>
              </div>
            </div>
            <hr />
            {/* Gender */}
            <div className="grid grid-cols-2 py-4">
              <div className="col-span-1 ">
                <p className="text-lg font-normal">Gender:</p>
              </div>
              <div className="col-span-1 ">
                <p
                  className="text-lg font-semibold">
                  {currentUser?.gender ? currentUser.gender : "N/A"}
                </p>
              </div>
            </div>
            <hr />
            {/* Language */}
            <div className="grid grid-cols-2 py-4">
              <div className="col-span-1 text-lg font-normal">
                <p className="text-lg font-normal">Language:</p>
              </div>
              <div className="col-span-1 text-lg font-semibold">
                <p
                  className="text-lg font-semibold">
                  {currentUser?.language ? currentUser.language : "N/A"}
                </p>
              </div>
            </div>
            <hr />
            {/* Address */}
            <div className="grid grid-cols-2 py-4">
              <div className=" text-lg font-normal">
                <p className="text-lg font-normal">Address:</p>
              </div>
              <div className=" text-lg font-semibold">
                <p
                  className="text-lg font-semibold">
                  {currentUser?.address ? currentUser.address : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right side content */}
        <div className=" md:col-span-1 lg:col-span-2">
          <h2 className="text-lg font-bold mb-6">About Me</h2>
          <p className="text-justify p-0 lg:pr-20">
            {currentUser?.about}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
