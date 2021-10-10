import "./Education.css";
import Title from "./Title";

const Education = ({ data }) => {
  return (
    <div>
      <Title text="Education" />
      {data.map((education, i) => {
        console.log(education);
        const { studyType, area, institution, startDate, endDate } = education;
        return (
          <div className="education-item" key={i}>
            <h5>
              {studyType} {area}
            </h5>
            <h6>{institution}</h6>
            <h6>
              {startDate} - {endDate}
            </h6>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
