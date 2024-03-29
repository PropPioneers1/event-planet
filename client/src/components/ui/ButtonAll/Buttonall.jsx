import { PropTypes } from "prop-types";
import "./ButtonAll.css";

const Buttonall = ({ children, onClick }) => {
  return (
    <div className="text-end mb-10 p-10">
      <button
        className="c-button c-button--gooey btn h-12 font-bold text-white text-xl bg-gradient-to-tl from-[#861f42]
        to-primary"
        onClick={onClick}
      >
        {children}
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  );
};

Buttonall.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Buttonall;
