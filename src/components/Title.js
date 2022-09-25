import "./Title.css";

const Title = ({ text, type }) => {
  return (
    <div className={`${type ? "title-alt" : "title"}`}>
      <h4>{text}</h4>
      <hr />
    </div>
  );
};

export default Title;
