import axiosSecure from "."

export const saveUser = async(user) => {
    const userInfo = {
        name: user?.displayName,
        email: user?.email,
        role: "user",
        image:user?.userImage,
        phone:user?.phone,
        language:user?.language,
        gender:user?.gender,
        address:user?.address
    }
    const {data} = await axiosSecure.put('/users',userInfo);
    return data;
}

// Get All users
export const getAllUsers = async() => {
    const {data} = await axiosSecure.get('/users');
    return data;
}
// Get Single User
export const getSingleUsers = async(email) => {
    const {data} = await axiosSecure.get(`/users/${email}`)
    return data;
}
