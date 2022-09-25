import "./Header.css";
import photo from "../assets/img/photo.jpeg";

const Header = ({ data }) => {
  const { name, label, phone, email, profiles, location } = data;
  const { address, postalCode, city, region, country } = location;
  return (
    <div className="header">
      <div className="detail" />
      <div className="header-contents">
        <img className="photo" src={photo} alt="profile pic" />
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
                <a
                  key={i}
                  href={url}
                  className="header-social-element"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="icon-brand">{network}</p>
                  <h3>{username}</h3>
                </a>
              );
            })}
          </div>
          <div className="header-center">
            <div className="header-center">
              <p className="icon-solid">crosshairs</p>
              <h3>
                {address}, {postalCode}, {city}, {region}, {country}
              </h3>
            </div>
            <div className="header-center">
              <p className="icon-solid">calendar-day</p>
              <h3>28/05/1996</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
