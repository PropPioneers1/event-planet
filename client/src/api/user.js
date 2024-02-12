import axiosSecure from "."

export const saveUser = async(user) => {
    const userInfo = {
        name: user?.displayName,
        email: user?.email,
        role: "user"
    }
    const {data} = await axiosSecure.put('/users',userInfo);
    return data;
}