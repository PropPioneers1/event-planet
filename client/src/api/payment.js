import axiosSecure from "."

  // get checkout data
  export const paymentSuccess = async tran_id => {
    const {data} = await axiosSecure.get(`/payment/${tran_id}`)
    return data
  }