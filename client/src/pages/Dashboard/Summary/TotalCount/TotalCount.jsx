import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TotalCount = () => {
  const axiosSecure = useAxiosSecure();







//   total products
const { data: countEvent } = useQuery({
    queryKey: ["countEvents"],
    queryFn: async () => {
      const res = await axiosSecure.get('/shop/count');
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Data fetched successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  const [state, setState] = useState({
          
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart 
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default TotalCount;
