import PropTypes from 'prop-types';

const CategoryCard = ({ label, icon: Icon }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-neutral px-8 py-10 group hover:bg-primary transition-all">
            <div>
                {<Icon className="text-primary group-hover:text-white" size={36} />}
            </div>
            <div className="text-lg text-gray-600 group-hover:text-white font-medium mt-4">
                {label}
            </div>

        </div>
    );
};

CategoryCard.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string
  };

export default CategoryCard;