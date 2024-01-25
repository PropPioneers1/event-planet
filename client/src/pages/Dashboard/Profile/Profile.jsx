

const Profile = () => {
    return (
        <div className="bg-white p-4 min-h-screen">
            <h2 className="text-2xl font-bold border-b border-black py-2">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 py-8 gap-6">
                <div className="col-span-1 md:col-span-1 lg:col-span-3 border-r border-black">
                    <img src="https://i.ibb.co/yhDhtw9/cute-smiling-young-man-with-bristle-looking-satisfied.jpg" alt="" />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                    <h2 className="text-lg font-bold">About Me</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;