import { PropTypes } from "prop-types";
import { FaShopify } from 'react-icons/fa';
import './ButtonAll.css';
const Buttonall = ({ children }) => {
  return (
    <div>
       <div className="text-end mb-10  p-10">
       
       <button className="c-button 
        c-button--gooey  btn  h-12 font-bold
         text-primary  text-xl  "> 
        {children}
        
<div className="c-button__blobs">
<div className=""></div>
<div></div>
<div></div>
</div>
</button>
</div>
      
    </div>
  );
};
Buttonall.propTypes = {
  children: PropTypes.node,
};

export default Buttonall;