import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
/* eslint-disable no-unused-vars */



const UsersCountChart = () => {
const axiosSecure=useAxiosSecure();




    //   total users
const { data: totalUser } = useQuery({
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

  console.log('totalUsers',totalUser)


  const [state, setState] = useState({
    series: [totalUser, 55],
    options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Total Users', 'Tickets Sell',],
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            return 249
          }
        }
      }
    }
}
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

export default UsersCountChart;