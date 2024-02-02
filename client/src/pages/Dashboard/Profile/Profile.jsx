import useAuth from "../../../hooks/useAuth";
import userImg from "../../../assets/image/user.png";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold border-b border-black py-2">
        Profile Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 py-8 gap-6 place-items-center md:place-items-start">
        <div className="col-span-1 lg:col-span-3  border-black">
          <img
            src={user ? user.photoURL : userImg}
            alt=""
            className="md:w-[200px] md:h-[200px] w-20 h-20 rounded-full"
          />
        </div>
        <div className="w-[2px] h-full bg-black"></div>
        <div className="col-span-1 ">
          <h2 className="text-lg font-bold">About Me</h2>
          <h3 className="text-xl font-semibold">{user?.displayName}</h3>
          <p className="font-semibold">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
