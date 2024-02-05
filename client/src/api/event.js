import axiosSecure from "."

export const bookEvent = async eventData => {
    const { data } = await axiosSecure.post("/upcomingDetails", eventData)
    return data
  }