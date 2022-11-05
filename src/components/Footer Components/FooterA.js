import React from "react";

export default function section1() {
  return (
    <div>
      <section className="main-footer">
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src={require("../Footer Components/slack-logo-2.png")} />
              </a>
            </li>

            <li>
              <ul>
                <li>WHY SLACK?</li>
                <li>Slack vs. Email</li>
                <li>Channels</li>
                <li>Engagement</li>
                <li>Scale</li>
                <li>Watch the Demo</li>
              </ul>
            </li>

            <li>
              <ul>
                <li>PRODUCT</li>
                <li>Features</li>
                <li>Integrations</li>
                <li>Enterprise</li>
                <li>Solutions</li>
              </ul>
            </li>

            <li>
              <ul>
                <li>PRICING</li>
                <li>Plans</li>
                <li>Paid vs. Free</li>
              </ul>
            </li>

            <li>
              <ul>
                <li>RESOURCES</li>
                <li>Partners</li>
                <li>Developers</li>
                <li>Community</li>
                <li>Apps</li>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Events</li>
              </ul>
            </li>

            <li>
              <ul>
                <li>COMPANY</li>
                <li>About Us</li>
                <li>Leadership</li>
                <li>Investor Relations</li>
                <li>News</li>
                <li>Media Kit</li>
                <li>Careers</li>
              </ul>
            </li>
          </ul>
        </nav>
        <hr />
      </section>
    </div>
  );
}
