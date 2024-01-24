import { PropTypes } from "prop-types";

const SectionTitle = ({ title, justify, color }) => {
  return (
    <div
      className={`flex justify-${justify ? justify : "center"} items-center`}
    >
      <div className=" relative px-4">
        <h2
          className={`md:text-5xl text-3xl font-semibold font-title opacity-50 ${
            color ? color : "text-secondary"
          }`}
        >
          {title}
        </h2>
        <h2
          className={`md:text-5xl  text-3xl
          font-semibold font-title  absolute z-10 right-3 top-[2px]  ${
            color ? color : "text-secondary"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  justify: PropTypes.string,
  color: PropTypes.string,
};

export default SectionTitle;
