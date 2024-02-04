import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../../../components/ui/Container";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const ThemeDetails = () => {
  const { user } = useAuth();
  const [categoryTheme, setCategoryTheme] = useState({});
  const { label, idx } = useParams();
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/allThemes.json")
      .then((res) => res.json())
      .then((data) => {
        if (label) {
          const themes = data?.filter(
            (category) => category.category === label
          );
          setCategoryTheme(themes);
        }
      });
  }, [label, index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventTheme = categoryTheme[0]?.themes[index].theme;
    const themeIndex = index;
    const guestName = e.target.elements.guestName.value;
    const organizationName = e.target.elements.organizationName.value;
    const userRequirement = e.target.elements.userRequirement.value;

    const userTheme = {
      eventTheme,
      themeIndex,
      guestName,
      organizationName,
      userRequirement,
      ClientEmailth: user.email,
    };
    console.log(userTheme);

    axios
      .post("https://event-planet-server.vercel.app/selectedthm", userTheme)
      .then(() => {
        toast.success("Your Response sent successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("Error submitting Theme form. Please try again.");
      });
  };

  return (
    <div className="py-20">
      <Container>
        <div className="grid md:grid-cols-6 gap-10">
          <div className="col-span-4">
            <img
              className="rounded-md transition-all duration-300 ease-out"
              src={categoryTheme[0]?.themes[idx].themeImages[index]}
              alt=""
            />
            <div className="grid grid-cols-3 gap-2 md:hidden pt-3">
              {categoryTheme[0]?.themes[idx].themeImages.map((image, indx) => (
                <img
                  key={indx}
                  src={image}
                  alt=""
                  className={`border-2 border-accent rounded-md cursor-pointer ${
                    index === indx ? "border-primary" : "rounded-md"
                  }`}
                  onClick={() => setIndex(indx)}
                />
              ))}
            </div>
            <div className="pt-5">
              <h2 className="text-2xl font-semibold pb-2">
                {categoryTheme[0]?.themes[idx].theme}
              </h2>
              <p className="text-sm md:text-base">
                {categoryTheme[0]?.themes[index].themeDescription}
              </p>
              <form onSubmit={handleSubmit} className="pt-5 block md:hidden">
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter your organization name
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    placeholder="Your Organization Name"
                    className="border border-secondary rounded-md w-full p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter the guestsname
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    placeholder="Name Comma-separated"
                    name="guestName"
                    className="border border-secondary rounded-md w-full p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Add description
                  </label>
                  <textarea
                    id="userRequirement"
                    name="userRequirement"
                    placeholder="Add Your Requirement"
                    className="border border-secondary rounded-md w-full h-[100px] p-2"
                    required
                  />
                </div>
                <button className="border-2 border-secondary py-2 px-4 rounded-md mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-2 hidden md:block">
            <div className="grid grid-cols-2 gap-2">
              {categoryTheme[0]?.themes[idx].themeImages.map((image, indx) => (
                <img
                  key={indx}
                  src={image}
                  alt=""
                  className={`border-2 border-accent rounded-md cursor-pointer ${
                    index === indx ? "border-primary" : "rounded-md"
                  }`}
                  onClick={() => setIndex(indx)}
                />
              ))}
            </div>
            <div className="col-span-2 md:block">
              <form onSubmit={handleSubmit} className="pt-5">
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter your organization name
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    placeholder="Your Organization Name"
                    className="border border-secondary rounded-md w-full p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter the guest name
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    name="guestName"
                    placeholder="Name Comma-separated"
                    className="border border-secondary rounded-md w-full p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Add description
                  </label>
                  <textarea
                    id="userRequirement"
                    name="userRequirement"
                    placeholder="Add Your Requirement"
                    className="border border-secondary rounded-md w-full h-[100px] p-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="border-2 border-secondary py-2 px-4 rounded-md mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThemeDetails;
