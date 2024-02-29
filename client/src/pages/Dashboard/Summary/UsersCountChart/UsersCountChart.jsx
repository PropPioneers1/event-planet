import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
/* eslint-disable no-unused-vars */



const UsersCountChart = () => {
const axiosSecure=useAxiosSecure();




    //   total users
const { data: totalUser,isLoading,isError } = useQuery({
    queryKey: ["totalUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get('/users/userCount');
      return res.data.userCount;
    },
    onSuccess: (data) => {
      console.log("Data fetched successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });



  const [state, setState] = useState({
    series: [totalUser || 0, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
  labels: ['Users', 'Team B', 'Team C', 'Team D', 'Team E'],
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
  }});
 

  

    return (
        <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {!isLoading && !isError && (
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
      )}
    </div>
    );
};

export default UsersCountChart;