import "./Languages.css";
import Title from "./Title";

const Languages = ({ data }) => {
  return (
    <div>
      <Title text="Languages" />
      <div className="languages-container">
        {data.map((items, i) => {
          const { language, fluency } = items;
          return (
            <div className="coso" key={i}>
              <div className="marker-triangle-right" />
              <div>
                <h5 className="language">{language}</h5>
                <h6>{fluency}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
