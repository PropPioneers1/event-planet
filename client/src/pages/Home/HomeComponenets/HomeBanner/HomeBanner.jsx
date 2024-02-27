import { Link } from "react-router-dom";
import bannerBg from "../../../../assets/banner/banner-bg-1.jpg";
import Container from "../../../../components/ui/Container";

const HomeBanner = () => {
  return (
    <div
      className="h-[400px] md:min-h-screen grid place-items-center
      bg-cover bg-no-repeat bg-[#000000cd] bg-blend-overlay "
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
              Welcome To Our Event Planet
            </h1>
            <p className="text-xl md:text-2xl lg:text-4xl text-neutral pb-2 md:pb-4">
              Explore top-rated attractions, activities and more!
            </p>
          </div>
          {/* Button */}
          <div className="text-center">
            <Link to="event">
              <button
                className="text-xl bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5 rounded-md from-[#121e2d]
                        to-accent mr-4"
              >
                Explore Events
              </button>
            </Link>
            <Link to="sign-up">
              <button
                className="text-xl bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5 rounded-md from-[#121e2d]
              to-accent"
              >
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
