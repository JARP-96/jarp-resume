import "./Main.css";
import Header from "../components/Header";
import Bio from "../components/Bio";
import RelevantSkills from "../components/RelevantSkills";
import en from "../assets/json/en.json";
import WorkExperience from "../components/WorkExperience";

const Main = () => {
  const { basics } = en;
  return (
    <div className="main-container">
      <Header basics={basics} />
      <Bio summary={basics.summary} />
      <div className="main-columns">
        <RelevantSkills />
        <WorkExperience />
      </div>
    </div>
  );
};

export default Main;
