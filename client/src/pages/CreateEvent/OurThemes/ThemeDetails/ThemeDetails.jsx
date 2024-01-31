import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../../../components/ui/Container";

const ThemeDetails = () => {
  const [categoryTheme, setCategoryTheme] = useState({});
  const { label, idx } = useParams();
  const [index, setIndex] = useState(0);
  console.log(index, "<============");
  console.log(idx, "<============");
  useEffect(() => {
    fetch("../../../../../public/allThemes.json")
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

  console.log(categoryTheme[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventTheme = categoryTheme[0]?.themes[index].theme;
    const themeIndex = index;
    const userRequirement = e.target.userRequirement.value;

    const userTheme = {
      eventTheme,
      themeIndex,
      userRequirement,
    };
    console.log(userTheme);
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
              <form onSubmit={handleSubmit} className="pt-5">
                <textarea
                  type="text"
                  placeholder="Tell us your requirement"
                  name="userRequirement"
                  className="border border-secondary rounded-md w-full h-[100px] p-2"
                />
                <button className="border-2 border-secondary py-2 px-4 rounded-md mt-2 ">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThemeDetails;
