import "./Bio.css";

const Bio = ({ data }) => {
  return (
    <div className="bio">
      <div className="bio-circle">
        <div className="circle" />
      </div>
      <div>
        <p className="bio-text">{data}</p>
      </div>
    </div>
  );
};

export default Bio;
