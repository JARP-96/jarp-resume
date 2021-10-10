import "./WorkExperience.css";
import Title from "./Title";

const WorkExperience = ({ data }) => {
  return (
    <div>
      <Title text="Work Experience" />
      {data.map((item, i) => {
        const { position, company, location, startDate, endDate, summary, highlights } =
          item;
        return (
          <div className="experience-item" key={i}>
            <h5>{position}</h5>
            {company && (
              <div className="experience-place">
                <p>at {company} - {location}</p>
                <p>
                  {startDate} - {endDate}
                </p>
              </div>
            )}
            <p className="experience-summary">{summary}</p>
            <h6 className="highlight-title">Highlights</h6>
            {highlights.map((highlight, i) => {
              return (
                <div key={i} className="highlight">
                  <div />
                  <p>{highlight}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
