import "../styles/Profile.css";
import logo from "../assets/profile.jpg";

function Profile() {
  return (
    <>
      <main className="P">
          <ul>
            <li>{window.location.href.split("//")[1]}</li>
            <li>Amirhossein.a</li>
          </ul>
        <div className="profile">
          <img src={logo} className="logo" alt="Amiro-Logo" />
          <h1>Amiro</h1>
          <p>| Junior developer |</p>
        </div>
      </main>
    </>
  );
}

export default Profile;
