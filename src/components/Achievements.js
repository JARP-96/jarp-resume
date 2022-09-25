import "./Achievements.css";
import Title from "./Title";

const Achievements = ({ data }) => {
  return (
    <div>
      <Title text="Achievements" />
      {data.map((achievement, i) => {
        const { awarder, area, date, summary, title } = achievement;
        return (
          <div className="education-item" key={i}>
            <h5>
              {awarder} - {title}
            </h5>
            <div className="achievement-place">
              <h6>{area}</h6>
              <h6>{date}</h6>
            </div>
            <p className="summary">{summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
