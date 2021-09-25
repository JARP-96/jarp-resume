import "./Main.css";
import Header from "../components/Header";
import Bio from "../components/Bio";
import RelevantSkills from "../components/RelevantSkills";
import en from "../assets/json/en.json";
import WorkExperience from "../components/WorkExperience";

const Main = () => {
  const { basics, work, relevantSkills } = en;
  return (
    <div className="main-container">
      <Header data={basics} />
      <Bio data={basics.summary} />
      <div className="main-columns">
        <div>
          <RelevantSkills data={relevantSkills} />
        </div>
        <div>
          <WorkExperience data={work} />
        </div>
      </div>
    </div>
  );
};

export default Main;
