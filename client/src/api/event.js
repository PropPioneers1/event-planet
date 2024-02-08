import axiosSecure from "."

export const bookEvent = async eventData => {
    const { data } = await axiosSecure.post("/upcomingDetails", eventData)
    return data
  }

  // get checkout data
  export const signleCheckOutData = async id => {
    const {data} = await axiosSecure.get(`/upcomingDetails/${id}`)
    return data
  }