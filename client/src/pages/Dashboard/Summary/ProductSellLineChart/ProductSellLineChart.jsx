
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

  
const ProductSellLineChart = () => {
    const axiosSecure=useAxiosSecure()

    const { data: countProduct, error } = useQuery({
        queryKey: ["countProducts"],
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
        console.error("Error fetching countProduct:", error);
      }
      
    const [state,setState]=useState({
          
        series: [{
          name: 'Total Products',
          data: [11, 32, 29, 32, countProduct,   41 ,45]
        }, {
          name: 'Total Sell',
          data: [0,5, 10, 5, 7, 28,0]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          
         
        },
      
      
      })

      useEffect(() => {
        if (countProduct) {
          setState((prev) => ({
            ...prev,
            series: [
              {
                ...prev.series[0],
                data: [11, 32, 29, 32, countProduct, 41, 45]
              },
              ...prev.series.slice(1)
            ]
          }));
        }
      }, [countProduct]);
    
      if (error) {
        console.error("Error fetching countProduct:", error);
      }
      
    return (
        <div>
          <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
    )
};

export default ProductSellLineChart;
