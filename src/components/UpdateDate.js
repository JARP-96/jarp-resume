import "./UpdateDate.css";

const UpdateDate = () => {
  const date = new Date();
  const currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return <div className="update-date-container">{currentDate}</div>;
};

export default UpdateDate;
