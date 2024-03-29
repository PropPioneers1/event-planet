import { useEffect, useState } from "react";
import "./Ourtheme.css";
import { PropTypes } from "prop-types";
import { Link, useParams } from "react-router-dom";

const OurThemes = () => {
  const [categoryTheme, setCategoryTheme] = useState({});
  const { label } = useParams();

  useEffect(() => {
    fetch("/allThemes.json")
      .then((res) => res.json())
      .then((data) => {
        if (label) {
          const themes = data?.filter(
            (category) => category.category === label
          );
          setCategoryTheme(themes[0]);
        }
      });
  }, [label]);

  // get themes
  const themes = categoryTheme?.themes;

  return (
    <div className="m-10 ">
   
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4
          mt-10 place-items-center"
      >
        {/* <div className=""/>    */}
        {/* theme one */}
        {themes?.map((theme, idx) => (
          <div key={idx} className="card-container card-2">
            <div className="cardth">
              <p className="title ">{theme?.theme}</p>
              <p className="font-bold ">Theme-{idx + 1}</p>
              <div className="card-hidden ">
                <p className="title-in ">{theme?.theme}</p>
                {/* <p>{theme?.themeDescription.slice(0, 60)}... </p> */}
                <Link to={`/theme-details/${idx}/${label}`}>
                  <button className="button text-neutral">Details</button>
                </Link>
              </div>
            </div>
            <div className="card-border"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

OurThemes.propTypes = {
  label: PropTypes.string,
};

export default OurThemes;
