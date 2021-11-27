import "./Main.css";
import Header from "../components/Header";
import Bio from "../components/Bio";
import RelevantSkills from "../components/RelevantSkills";
import en from "../assets/json/en.json";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Languages from "../components/Languages";
import UpdateDate from "../components/UpdateDate";

const Main = () => {
  const { basics, work, relevantSkills, education, achievements, languages } = en;
  return (
    <div className="main-container">
      <Header data={basics} />
      <UpdateDate />
      <Bio data={basics.summary} />
      <div className="main-columns">
        <div className="main-column">
          <RelevantSkills data={relevantSkills} />
          <Education data={education}/>
          <Achievements data={achievements}/>
          <Languages data={languages}/>
        </div>
        <div className="main-column">
          <WorkExperience data={work} />
        </div>
      </div>
    </div>
  );
};

export default Main;
