import { useState } from "react";
import { useNavigate } from "react-router-dom";
import leftLogo from "../assets/left.svg";
import "../styles/SendMessage.css";

function SendMessage() {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const navigate = useNavigate();
  const MyTGID = "USERID"

  const handleClick = async () => {
    if (!text) return;

    await fetch("http://localhost:3001/sendmessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatId: MyTGID,
        text: `From ${username || "Anonymous"}:\n${text}`,
      }),
    });

    setText("");
    setShowNotif(true);

    setTimeout(() => {
      setShowNotif(false);
      navigate("/");
    }, 3000);
  };

  return (
    <main>
      <ul>
        <li onClick={() => navigate("/")}>
          <img
            className="back"
            src={leftLogo}
            alt="Back"
            style={{ cursor: "pointer" }}
          />
        </li>{" "}
        <li>Amirhossein.a</li>
      </ul>
      <div className="SendMessage">
        <h1 className="title">Send Me A Message</h1>

        {showNotif && (
          <div className="notification">
            Message sent successfully! Redirecting...
          </div>
        )}

        <main className="SendMessageMain">
          <input
            placeholder="Your Name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Write Your Message"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button id="btn" onClick={handleClick}>
            Send
          </button>
        </main>
      </div>
    </main>
  );
}

export default SendMessage;
