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

  const { title, image, description, price, rating } =
    productDetails.result || {};

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white flex p-8 rounded shadow-md">
        <div className="card border-2 mt-20  md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
          <div>
            <img src={image} alt="Shoes" className="rounded-xl w-full " />
          </div>
          <div className="card-body items-center text-center p-6">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              Price: $ {price}
            </p>
            <span className="flex text-center text-yellow-500">
              {rating} <FaStar className="mt-1" />
            </span>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl">
              {description}
            </p>

            <div className="card-actions mt-4">
              <button className="btn btn-outline btn-success">Purchase</button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/cg4p2wn/blank-profile-picture-973460-960-720.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="flex gap-4 items-center">
                <p className="text-gray-800 font-semibold">Rifat</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Great shopping experience! Friendly staff and good prices
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/cg4p2wn/blank-profile-picture-973460-960-720.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="flex gap-4 items-center">
                <p className="text-gray-800 font-semibold">Rifat</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Great shopping experience! Friendly staff and good prices
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/cg4p2wn/blank-profile-picture-973460-960-720.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="flex gap-4 items-center">
                <p className="text-gray-800 font-semibold">Rifat</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Great shopping experience! Friendly staff and good prices
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/cg4p2wn/blank-profile-picture-973460-960-720.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="flex gap-4 items-center">
                <p className="text-gray-800 font-semibold">Rifat</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Great shopping experience! Friendly staff and good prices
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/cg4p2wn/blank-profile-picture-973460-960-720.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="flex gap-4 items-center">
                <p className="text-gray-800 font-semibold">Rifat</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Great shopping experience! Friendly staff and good prices
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/cg4p2wn/blank-profile-picture-973460-960-720.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="flex gap-4 items-center">
                <p className="text-gray-800 font-semibold">Rifat</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Great shopping experience! Friendly staff and good prices
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/cg4p2wn/blank-profile-picture-973460-960-720.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="flex gap-4 items-center">
                <p className="text-gray-800 font-semibold">Rifat</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Great shopping experience! Friendly staff and good prices
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
