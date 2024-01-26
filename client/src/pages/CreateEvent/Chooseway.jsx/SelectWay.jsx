import { Link } from "react-router-dom";

import OurThemes from "../OurThemes/OurThemes";
import "./select.css";

const SelectWay = () => {
  return (
    <div className="mt-20 bg-neutral pt-20 min-h-screen ">
      <div className="flex justify-center ">
        <Link to="/create-form">
          {/* <button  className='btn btn-outline w-full'>  Create Your Event</button> */}

          <button className="go learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow "></span>
            </span>
            <span className="go-text">
              <span className="text-white">c</span>reate your event{" "}
            </span>
          </button>
        </Link>
      </div>
      <OurThemes></OurThemes>
    </div>
  );
};

export default SelectWay;
