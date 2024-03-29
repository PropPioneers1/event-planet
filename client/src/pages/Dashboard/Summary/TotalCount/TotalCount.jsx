import { useQuery } from "@tanstack/react-query";
import ReactApexChart from "react-apexcharts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */

const TotalCount = () => {
const axiosSecure=useAxiosSecure();

//   total products
const { data: totalEvent,isError: eventError, isLoading: eventLoading } = useQuery({
  queryKey: ["totalEvents"],
  queryFn: async () => {
    const res = await axiosSecure.get('/event/eventCount');
    return res.data.eventCount;
  },
  onSuccess: (data) => {
    console.log("Data fetched successfully:", data);
  },
  onError: (error) => {
    console.error("Error fetching data:", error);
  },
});


// total tickets

const { data: totalTicket, isError: ticketError, isLoading: ticketLoading } = useQuery({
  queryKey: ["totalTickets"],
  queryFn: async () => {
    const res = await axiosSecure.get('/payment/ticketsCount');
    return res.data.ticketCount;
  },
  onSuccess: (data) => {
    console.log("Data fetched successfully:", data);
  },
  onError: (error) => {
    console.error("Error fetching data:", error);
  },
  staleTime: 0,
});


 

  const [state, setState] = useState({
          
    series: [ totalEvent ||0, totalTicket ||0],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Total Events', 'Tickets Sell',],
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



  useEffect(() => {
    setState({
      ...state,
      series: [totalEvent || 0, totalTicket || 0],
    });
  }, [totalEvent, totalTicket]);

  if (eventLoading || ticketLoading) {
    return <p>Loading...</p>;
  }

  if (eventError || ticketError) {
    return <p>Error fetching data</p>;
  }

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
