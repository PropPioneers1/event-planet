import axiosSecure from "."

export const getFeedBackData = async() => {
    const {data} = axiosSecure.get("/feedback");
    return data;
}