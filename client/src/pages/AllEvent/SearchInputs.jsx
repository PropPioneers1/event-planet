import { PropTypes } from "prop-types";
import { getStateCityVenue } from "../../utils/getStateCityVenu";

const SearchInputs = ({
  handleStateChange,
  handleCityChange,
  handleVenuesChange,
  setEventTitle,
  setCategory,
  state,
  city,
  venues,
  refetch,
}) => {
  //   handle search
  const handleSearchEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const eventCategory = form.category.value;

    setEventTitle(title);
    setCategory(eventCategory);
    refetch();
  };

  //   categories
  const categories = [
    "Education",
    "Travel",
    "Food festival",
    "Fashion",
    "Sport",
    "Innovation Showcase",
  ];

  //   states cites, venues
  const states = getStateCityVenue;

  return (
    <div className="mb-20 mt-10">
      <form onSubmit={handleSearchEvent}>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
          {/* Name */}
          <div className="form-control flex-1">
            <input
              type="text"
              name="title"
              placeholder="Enter Name..."
              className="input  md:w-full rounded-md input-bordered focus:outline-none"
            />
          </div>
          {/* Category */}
          <div className="form-control flex-1 ">
            <select
              className="select  w-full rounded-md   focus:border-none focus:outline-none"
              name="category"
            >
              <option value="">All Categories</option>
              {categories?.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* States */}
          <div className="form-control flex-1 ">
            <select
              className="select w-full rounded-md  focus:border-none focus:outline-none"
              name="state"
              onChange={(e) => handleStateChange(e.target.value)}
              value={state}
            >
              <option disabled value="">
                All States
              </option>
              {states?.map((item, idx) => (
                <option key={idx} value={item?.division}>
                  {item?.division}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Raw 2 */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Cities*/}
          <div className="form-control flex-1 ">
            <select
              className="select w-full rounded-md  focus:border-none focus:outline-none"
              name="city"
              onChange={(e) => handleCityChange(e.target.value)}
              value={city}
            >
              <option disabled value="">
                All Cities
              </option>
              {states
                .find((item) => item.division === state)
                ?.districts.map((district, idx) => (
                  <option key={idx} value={district.district}>
                    {district.district}
                  </option>
                ))}
            </select>
          </div>
          {/* Venues */}
          <div className="form-control flex-1 ">
            <select
              className="select w-full rounded-md  focus:border-none focus:outline-none"
              name="venues"
              onChange={(e) => handleVenuesChange(e.target.value)}
              value={venues}
            >
              <option disabled value="">
                All Venues
              </option>
              {states
                .find((item) => item.division === state)
                ?.districts.find((district) => district.district === city)
                ?.venues.map((venue, idx) => (
                  <option key={idx} value={venue}>
                    {venue}
                  </option>
                ))}
            </select>
          </div>
          {/* Submit Button */}
          <div className="form-control flex-1 ">
            <button className="btn w-[189px] md:w-full rounded-md bg-primary text-white text-lg">
              Find Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchInputs.propTypes = {
  handleSearchEvent: PropTypes.func,
  handleStateChange: PropTypes.func,
  handleCityChange: PropTypes.func,
  handleVenuesChange: PropTypes.func,
  setEventTitle: PropTypes.func,
  setCategory: PropTypes.func,
  refetch: PropTypes.func,
  state: PropTypes.string,
  city: PropTypes.string,
  venues: PropTypes.string,
};

export default SearchInputs;
