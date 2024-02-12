import axiosSecure from "."

export const saveUser = async(user) => {
    const userInfo = {
        userName: user?.displayName,
        userEmail: user?.email,
        role: "user"
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`,userInfo);
    return data;
}