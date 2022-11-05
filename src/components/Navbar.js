import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className={NavbarCSS.Navbar}>
      <nav>
        <a href="#">
          <img
            className={NavbarCSS.logo}
            src={require("../images/slack-logo-1")}
          />
        </a>
        <ul className={NavbarCSS.NavbarUl}>
          <li>
            <a href="#">
              Products <IoIosArrowDown size="15px" />
            </a>
            <ul className={NavbarCSS.NavbarUlUl}>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Channels</a>
              </li>
              <li>
                <a href="#">Digital HQ</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Slack Connect</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <FaCloudDownloadAlt size="18px" /> Download Slack
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Enterprise</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li className={NavbarCSS.search}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a href="#" className={NavbarCSS.button}>
              TALK TO SALES
            </a>
          </li>
          <li>
            <a href="#" className={NavbarCSS.button2}>
              TRY FOR FREE
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
