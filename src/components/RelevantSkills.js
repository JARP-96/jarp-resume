import "./RelevantSkills.css";
import Title from "./Title";
import Skill from "./Skill";

const skills = ["React", "Figma", "Storybook", "Git", "Enzyme", "Adobe XD"];

const RelevantSkills = () => {
  return (
    <div className="relevant-skills">
      <Title text="Relevant Skills" type />
      <div className="skills">
        {skills.map((skill, i) => {
          return <Skill key={i} text={skill} />;
        })}
      </div>
    </div>
  );
};

export default RelevantSkills;
