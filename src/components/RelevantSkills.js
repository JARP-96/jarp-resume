import "./RelevantSkills.css";
import Title from "./Title";
import Skill from "./Skill";

const RelevantSkills = ({ data }) => {
  return (
    <div className="relevant-skills">
      <Title text="Relevant Skills" type />
      <div className="skills">
        {data.map((skill, i) => {
          return <Skill key={i} text={skill} />;
        })}
      </div>
    </div>
  );
};

export default RelevantSkills;
