import { PropTypes } from "prop-types";

const SectionHeading = ({
  align,
  title,
  normalSubTitleWord,
  boldSubTitleWord,
}) => {
  return (
    <div className={`${align ? align : "text-center"} space-y-3 md:mb-14 mb-8`}>
      <h2 className="text-xl md:text-2xl md:tracking-[0.3rem] tracking-[0.2rem] uppercase text-[#636363]">
        {title}
      </h2>
      <h3 className="capitalize md:text-5xl text-secondary text-2xl md:tracking-[0.2rem] tracking-[0.1rem]">
        {normalSubTitleWord}{" "}
        <span className="font-bold">{boldSubTitleWord}</span>
      </h3>
    </div>
  );
};

SectionHeading.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string,
  normalSubTitleWord: PropTypes.string,
  boldSubTitleWord: PropTypes.string,
};

export default SectionHeading;
