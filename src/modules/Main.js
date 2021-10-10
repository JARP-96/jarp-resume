import "./Main.css";
import Header from "../components/Header";
import Bio from "../components/Bio";
import RelevantSkills from "../components/RelevantSkills";
import en from "../assets/json/en.json";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

const Main = () => {
  const { basics, work, relevantSkills, education } = en;
  return (
    <div className="main-container">
      <Header data={basics} />
      <Bio data={basics.summary} />
      <div className="main-columns">
        <div className="main-column">
          <RelevantSkills data={relevantSkills} />
          <Education data={education}/>
        </div>
        <div className="main-column">
          <WorkExperience data={work} />
        </div>
      </div>
    </div>
  );
};

export default Main;
