import React from "react";
import { Link } from "react-router-dom";

import "../styles/Links.css";

import telegramLogo from "../assets/telegram.svg";
import instagramLogo from "../assets/instagram.svg";
import githubLogo from "../assets/github.svg";
import hiddenmessageLogo from "../assets/chat.svg";

function Links() {
  return (
    <main className="links">
      <Link to="/HiddenMessage" className="link">
        <div className="platform">
          <img src={hiddenmessageLogo} className="socialMediaLogo" alt="" />
          <p className="lable">Hidden message</p>
        </div>
        <div className="addres">amiro.im</div>
      </Link>

      <a href="https://www.instagram.com/amiro.im" className="ig link">
        <div className="platform">
          <img src={instagramLogo} className="socialMediaLogo" alt="" />
          <p className="lable">Instagram</p>
        </div>
        <div className="addres">amiro.im</div>
      </a>

      <a href="https://t.me/amiroim" className="tg link">
        <div className="platform">
          <img src={telegramLogo} className="socialMediaLogo" alt="" />
          <p className="lable">Telegram</p>
        </div>
        <div className="addres">amiroim</div>
      </a>

      <a href="https://github.com/Amiroim" className="gh link">
        <div className="platform">
          <img src={githubLogo} className="socialMediaLogo" alt="" />
          <p className="lable">Github</p>
        </div>
        <div className="addres">Amiroim</div>
      </a>
    </main>
  );
}

export default Links;
