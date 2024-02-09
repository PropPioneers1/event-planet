import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const DetailsProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();


  const { data: productDetails, isLoading, isError } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/shop/details-shopCart/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Data fetched successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  const { title, image, description, price, rating } = productDetails.result || {};

  return (
    <div className="card border-4 mt-20 border-violet-500 bg-base-100 shadow-xl md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
  <figure >
    <img src={image} alt="Shoes" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center p-6">
    <h2 className="card-title text-lg md:text-xl lg:text-2xl xl:text-3xl">{title}</h2>
    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">Price: $ {price}</p>
    <span className="flex text-center text-yellow-500">
      {rating} <FaStar className="mt-1" />
    </span>

    <p className="text-sm md:text-base lg:text-lg xl:text-xl">{description}</p>

    <div className="card-actions mt-4">
      <button className="btn btn-outline btn-success">Purchase</button>
    </div>
  </div>
</div>

  );
};

export default DetailsProduct;
