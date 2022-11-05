import React from "react";
import Navbar from "./Navbar";
import HeaderCSS from "./Header.module.css";
import { FcGoogle } from "react-icons/fc";
import Video from "../images/1-slack-video.webm";

export default function Header() {
  return (
    <div className={HeaderCSS.Header}>
      <Navbar />
      <div className={HeaderCSS.headerContents}>
        <div>
          <h1>Great teamwork starts</h1>
          <h1>with digital HQ</h1>
          <p>
            <span>Slack is free to try</span> for as long as you'd like
          </p>
          <a href="#" className={HeaderCSS.button}>
            SIGN UP WITH EMAIL
          </a>

          <a href="#" className={HeaderCSS.button2}>
            <FcGoogle size="22px" /> SIGN UP WITH GOOGLE
          </a>
        </div>
        <div>
          <video play loop muted>
            <source src={Video} type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}
