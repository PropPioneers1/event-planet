import Loader from "../../../components/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "./../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const paymentHistory = [
    {
      price: 25.5,
      transactionId: "T12345",
      date: "2024-01-01",
      status: "Successful",
    },
    {
      price: 40.2,
      transactionId: "T12346",
      date: "2024-01-05",
      status: "Failed",
    },
    {
      price: 15.75,
      transactionId: "T12347",
      date: "2024-01-10",
      status: "Pending",
    },
    {
      price: 60.0,
      transactionId: "T12348",
      date: "2024-01-15",
      status: "Successful",
    },
    {
      price: 12.3,
      transactionId: "T12349",
      date: "2024-01-20",
      status: "Successful",
    },
    {
      price: 35.8,
      transactionId: "T12350",
      date: "2024-01-25",
      status: "Failed",
    },
    {
      price: 50.45,
      transactionId: "T12351",
      date: "2024-01-30",
      status: "Successful",
    },
    {
      price: 18.9,
      transactionId: "T12352",
      date: "2024-02-05",
      status: "Pending",
    },
    {
      price: 42.6,
      transactionId: "T12353",
      date: "2024-02-10",
      status: "Successful",
    },
    {
      price: 28.75,
      transactionId: "T12354",
      date: "2024-02-15",
      status: "Failed",
    },
  ];
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: ["my-payment"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/payment?email=${user?.email}`);
      return result?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  console.log(data);

  return (
    <div className="p-10 bg-white">
      <h2 className="text-2xl font-bold my-6">
        Total Payments: {paymentHistory.length}
      </h2>
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-neutral text-xl">
                <th>#</th>
                <th>Price</th>
                <th>Transition Id</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {data?.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>${item?.totalAmount?.toFixed(2)}</td>
                  <td>{item?.tran_id}</td>
                  <td>{item?.paymentDate}</td>
                  <td className="capitalize">{item?.paidstatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
