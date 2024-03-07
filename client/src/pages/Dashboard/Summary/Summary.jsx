import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ProductSellLineChart from "./ProductSellLineChart/ProductSellLineChart";
import TotalCount from "./TotalCount/TotalCount";
import UsersCountChart from "./UsersCountChart/UsersCountChart";
import Loader from "../../../components/Loader/Loader";

const Summary = () => {
  const axiosSecure = useAxiosSecure();
  const { data: eventData, isPending } = useQuery({
    queryKey: ["feedbackData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/event/allevents");
      return res?.data?.result;
    },
  });
  console.log(eventData);
  if (isPending) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="mx-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Summary
            </h5>

            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  />
                </div>
              </div>

              <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700">Product Sell Activity</h5>
                <ProductSellLineChart></ProductSellLineChart>
                <div>
                  <h5 className="text-xl text-gray-600 text-center">
                    Product{" "}
                  </h5>
                </div>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-2">Face Mask</td>
                      <td className="text-gray-500">896</td>
                      <td>
                        <svg
                          className="w-16 ml-auto"
                          viewBox="0 0 68 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.4"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="19"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="35"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="51"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <path
                            d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                            stroke="url(#paint0_linear_622:13631)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_622:13631"
                              x1="68"
                              y1="7.74997"
                              x2="1.69701"
                              y2="8.10029"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#E323FF" />
                              <stop offset="1" stopColor="#7517F8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Dress</td>
                      <td className="text-gray-500">1200</td>
                      <td>
                        <svg
                          className="w-16 ml-auto"
                          viewBox="0 0 68 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.4"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="19"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="35"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="51"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <path
                            d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                            stroke="url(#paint0_linear_622:13640)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_622:13640"
                              x1="34"
                              y1="5"
                              x2="34"
                              y2="15.9524"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#8AFF6C" />
                              <stop offset="1" stopColor="#02C751" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Other</td>
                      <td className="text-gray-500">12</td>
                      <td>
                        <svg
                          className="w-16 ml-auto"
                          viewBox="0 0 68 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.4"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="19"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="35"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="51"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <path
                            d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6"
                            stroke="url(#paint0_linear_622:13649)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_622:13649"
                              x1="67"
                              y1="7.96873"
                              x2="1.67368"
                              y2="8.44377"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFD422" />
                              <stop offset="1" stopColor="#FF7D05" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700 mb-10">
                  Tickets Sell Activity
                </h5>

                <TotalCount></TotalCount>
                <table className="mt-6 -mb-2 w-full text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-2 text-center">
                        This walkthrough shows the percentage of total number of
                        events on the website and how many users are buying
                        tickets
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">From old users</td>
                      <td className="text-gray-500">1200</td>
                      <td>
                        <svg
                          className="w-16 ml-auto"
                          viewBox="0 0 68 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.4"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="19"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="35"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="51"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <path
                            d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                            stroke="url(#paint0_linear_622:13640)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_622:13640"
                              x1="34"
                              y1="5"
                              x2="34"
                              y2="15.9524"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#8AFF6C" />
                              <stop offset="1" stopColor="#02C751" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700 mb-10">Users </h5>
                <UsersCountChart></UsersCountChart>

                <table className="mt-6 -mb-2 w-full text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-2">Tailored ui</td>
                      <td className="text-gray-500">896</td>
                      <td>
                        <svg
                          className="w-16 ml-auto"
                          viewBox="0 0 68 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.4"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="19"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="35"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="51"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <path
                            d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                            stroke="url(#paint0_linear_622:13631)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_622:13631"
                              x1="68"
                              y1="7.74997"
                              x2="1.69701"
                              y2="8.10029"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#E323FF" />
                              <stop offset="1" stopColor="#7517F8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Customize</td>
                      <td className="text-gray-500">1200</td>
                      <td>
                        <svg
                          className="w-16 ml-auto"
                          viewBox="0 0 68 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.4"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="19"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="35"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="51"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <path
                            d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                            stroke="url(#paint0_linear_622:13640)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_622:13640"
                              x1="34"
                              y1="5"
                              x2="34"
                              y2="15.9524"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#8AFF6C" />
                              <stop offset="1" stopColor="#02C751" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Other</td>
                      <td className="text-gray-500">12</td>
                      <td>
                        <svg
                          className="w-16 ml-auto"
                          viewBox="0 0 68 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.4"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="19"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="35"
                            width="14"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <rect
                            opacity="0.4"
                            x="51"
                            width="17"
                            height="21"
                            rx="1"
                            fill="#e4e4f2"
                          />
                          <path
                            d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6"
                            stroke="url(#paint0_linear_622:13649)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_622:13649"
                              x1="67"
                              y1="7.96873"
                              x2="1.67368"
                              y2="8.44377"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFD422" />
                              <stop offset="1" stopColor="#FF7D05" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
