import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import userImg from "../../../../assets/image/user.png";
import useAuth from "../../../../hooks/useAuth";

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
    <div className="">
      {/* user profile */}
      <div className="w-[95%] mx-auto shadow-xl shadow-gray-300 rounded-md overflow-hidden">
        {/* banner */}
        <div className="bg-gradient-to-tr from-30% from-[#DA6DA8]  via-[#9B96F1] to-[#36A2ED] h-[250px]"></div>
        {/* Profile */}
        <div className="bg-white h-28 ">
          {/* user image */}
          <div className="w-28 h-28 p-3 border rounded-lg">
            <img
              src={currentUser?.image ? currentUser.image : userImg}
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
