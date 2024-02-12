import bannerBg from "../../../../assets/banner/banner-bg-3.jpg";
import Container from "../../../../components/ui/Container";

const HomeBanner = () => {
  return (
    <div
      className="min-h-screen grid place-items-center bg-cover bg-no-repeat bg-[#000000cd] bg-blend-overlay "
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <Container>
        <div className="font-title space-y-6 lg:space-y-8 py-16 lg:py-20">
          {/* Title and Subtitle for banner */}
          <div className="text-left lg:text-center pt-10 lg:pt-0">
            <h1
              className="text-neutral text-3xl md:text-4xl
             lg:text-5xl font-semibold pb-2 md:pb-4"
            >
              Find Nearby Location
            </h1>
            <p className="text-xl md:text-2xl lg:text-4xl text-neutral pb-2 md:pb-4">
              Explore top-rated attractions, activities and more!
            </p>
          </div>
          {/* Search */}
          <form
            className="lg:bg-neutral lg:rounded-full flex flex-col 
          lg:flex-row justify-between item-center overflow-hidden lg:px-4 px-0 lg:py-4 gap-2
          "
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-none py-3 px-5 lg:px-1 border-0 outline-none rounded-[4px]"
            />
            <select
              name=""
              id=""
              className="lg:py-1 py-3 rounded-[4px] px-5 lg:px-4"
            >
              <option value="">All States</option>
              <option value="">Dhaka</option>
              <option value="">Sylhet</option>
              <option value="">Chattogram</option>
              <option value="">Barishal</option>
              <option value="">Khulna</option>
              <option value="">Rajshahi</option>
              <option value="">Rangpur </option>
              <option value="">Mymensingh </option>
            </select>
            <select
              name=""
              id=""
              className="lg:py-1 py-3 rounded-[4px] px-5 lg:px-4"
            >
              <option value="">All Cities</option>
              <option value="">Molvibazar</option>
              <option value="">Sylhet</option>
              <option value="">Habigang</option>
              <option value="">Sunamgang</option>
              <option value="">Comilla</option>
              <option value="">Rajshahi</option>
              <option value="">Rangpur </option>
              <option value="">Mymensingh </option>
            </select>
            <select
              name=""
              id=""
              className="lg:py-1 py-3 rounded-[4px]  px-5 lg:px-4"
            >
              <option value="">All Venues</option>
              <option value="">Dhaka</option>
              <option value="">Sylhet</option>
              <option value="">Chattogram</option>
              <option value="">Barishal</option>
              <option value="">Khulna</option>
              <option value="">Rajshahi</option>
              <option value="">Rangpur </option>
              <option value="">Mymensingh </option>
            </select>
            <select
              name=""
              id=""
              className="lg:py-1 py-3 rounded-[4px]  px-5 lg:px-4"
            >
              <option value="">Categories</option>
              <option value="">Dhaka</option>
              <option value="">Sylhet</option>
              <option value="">Chattogram</option>
              <option value="">Barishal</option>
              <option value="">Khulna</option>
              <option value="">Rajshahi</option>
              <option value="">Rangpur </option>
              <option value="">Mymensingh </option>
            </select>
            <button
              className="bg-gradient-to-tl from-[#3F72AF] 
            to-[#0e2644]  w-28 md:text-lg text-base text-neutral
            md:px-7 px-4 py-2 rounded-[4px] lg:rounded-full hover:bg-gradient-to-r hover:from-[#0e2644]
            hover:to-[#3F72AF] transition-all duration-300"
            >
              Search
            </button>
          </form>
          {/* more features buttons */}
          <div className="text-neutral">
            <h3 className="text-left md:text-center pb-4">
              Or browse more by feature:
            </h3>
            {/* buttons container */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-center">
              <button className="bg-[#b3b3b352] hover:bg-[#cecece71] transition-all duration-300 ease-out px-4 py-1 text-[15px] rounded-full">
                Upcoming Events
              </button>
              <button className="bg-[#b3b3b352] hover:bg-[#cecece71] transition-all duration-300 ease-out px-4 py-1 text-[15px] rounded-full">
                Featured Events
              </button>
              <button className="bg-[#b3b3b352] hover:bg-[#cecece71] transition-all duration-300 ease-out px-4 py-1 text-[15px] rounded-full">
                All Events
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
