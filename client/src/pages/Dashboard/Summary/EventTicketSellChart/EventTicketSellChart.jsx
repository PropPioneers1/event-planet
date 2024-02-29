import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';


const EventTicketSellChart = () => {

    const axiosSecure=useAxiosSecure();
    const { data: countEvent, error } = useQuery({
        queryKey: ["countEvents"],
        queryFn: async () => {
          const res = await axiosSecure.get('/shop/count');
          return res.data.count;
        },
        onSuccess: (data) => {
          setState((prev) => ({
            ...prev,
            series: [
              {
                ...prev.series[0],
                data: [11, 32, 29, 32, data, 41, 45]
              },
              ...prev.series.slice(1)
            ]
          }));
        },
        onError: (error) => {
          console.error("Error fetching data:", error);
        },
      });
      if (error) {
        console.error("Error fetching countEvent:", error);
      }

    const [state,setState]=useState({
          
        series: [{
          data: [44, 55, 41, 64, countEvent, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
          xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
          },
        },
      
      
      })

  
    

    return (
        <div>
          <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
    );
};

export default EventTicketSellChart;



