import { useEffect, useState } from 'react';
import './trending.css';

const Trendingproducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/trendprod.json')  // Assuming trendprod.json is in the public folder
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []);

  return (
    <div className='trending-products'>
      {data.map((item, index) => (
        <div key={index}>{item.itemName}</div>
      ))}
    </div>
  );
};

export default Trendingproducts;
