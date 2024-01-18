import { PropTypes } from "prop-types";
import { FaShopify } from 'react-icons/fa';
import './ButtonAll.css';
const Buttonall = ({ children }) => {
  return (
    <div>
       <div className="text-center mb-10  p-10">
       
       <button className="c-button 
        c-button--gooey  btn w-72 h-20 font-bold
         text-primary p-y-8 text-xl rounded-2xl"> 
        {children}
        
<div className="c-button__blobs">
<div></div>
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