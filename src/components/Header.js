import "./Header.css";
import photo from "../assets/img/photo.jpeg";

const Header = ({ basics }) => {
  const { name, label, phone, email, profiles } = basics;
  return (
    <div className="header">
      <div className="detail" />
      <div className="header-contents">
        <img className="photo" src={photo} alt="profile photo" />
        <div className="header-text">
          <div>
            <h1>{name}</h1>
            <h2>{label}</h2>
          </div>
          <div className="header-social">
            <div className="header-social-element">
              <p className="icon-brand">whatsapp</p>
              <h3>{phone}</h3>
            </div>
            <div className="header-social-element">
              <p className="icon-solid">envelope</p>
              <h3>{email}</h3>
            </div>
            {profiles.map((profile, i) => {
              const { network, username, url } = profile;
              return (
                <div className="header-social-element" key={i}>
                  <p className="icon-brand">{network}</p>
                  <h3>{username}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
