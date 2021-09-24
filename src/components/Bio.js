import "./Bio.css";

const Bio = ({ summary }) => {
  return (
    <div className="bio">
      <div className="bio-circle">
        <div className="circle" />
      </div>
      <div>
        <p className="bio-text">{summary}</p>
      </div>
    </div>
  );
};

export default Bio;
