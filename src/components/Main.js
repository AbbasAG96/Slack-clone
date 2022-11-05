import React from "react";
import MainCSS from "./Main.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import connectedness from "../images/8 connectedness.mp4";
import flexibility from "../images/9 flexibility.mp4";
import speed from "../images/10 speed.mp4";
import featuring from "../images/11 Video featuring a Slack customer, company name.mp4";

export default function Main() {
  return (
    <div className={MainCSS.mainContent}>
      <section className={MainCSS.section1}>
        <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
        <ul>
          <li>
            <img src={require("../images/2 airbnb-logo.png")} />
          </li>
          <li>
            <img src={require("../images/3 logo-nasa.png")} />
          </li>
          <li>
            <img src={require("../images/4 uber.png")} />
          </li>
          <li>
            <img src={require("../images/5 target-logo.png")} />
          </li>
          <li>
            <img src={require("../images/6 nyt.png")} />
          </li>
          <li>
            <img src={require("../images/7 logo-etsy.png")} />
          </li>
        </ul>
      </section>

      <section className={MainCSS.section2}>
        <div className={MainCSS.innerMain}>
          <div>
            <video autoplay loop muted>
              <source src={connectedness} type="video/mp4" />
            </video>
          </div>
          <div>
            <h2>Bring your team together</h2>
            <p>
              At the heart of Slack are channels: organized spaces for everyone
              and everything you need for work. In channels, it’s easier to
              connect across departments, offices, time zones and even other
              companies.
            </p>
            <a href="#">
              Learn more about flexible communication
              <IoIosArrowRoundForward color="#1264a3" size="15px" />
            </a>
          </div>
        </div>

        <div className={MainCSS.innerMain}>
          <div>
            <h2>Choose how you want to work</h2>
            <p>
              In Slack, you’ve got all the flexibility to work when, where and
              how it’s best for you. You can easily chat, send audio and video
              clips, or hop on a huddle to talk things out live.
            </p>
            <a href="#">
              Learn more about flexible communication
              <IoIosArrowRoundForward color="#1264a3" size="15px" />
            </a>
          </div>
          <div>
            <video play loop muted>
              <source src={flexibility} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={MainCSS.innerMain}>
          <div>
            <video play loop muted>
              <source src={speed} type="video/mp4" />
            </video>
          </div>
          <div>
            <h2>Move faster with your tools in one place</h2>
            <p>
              With your other work apps connected to Slack, you can work faster
              by switching tabs less. And with powerful tools like Workflow
              Builder, you can automate away routine tasks.
            </p>
            <a href="#">
              Learn more about the Slack platform{" "}
              <IoIosArrowRoundForward color="#1264a3" size="15px" />
            </a>
          </div>
        </div>
      </section>

      <section className={MainCSS.section3}>
        <h3>Teams large and small rely on Slack</h3>
        <p className={MainCSS.section3Paragraph}>
          Slack securely scales up to support collaboration at the world’s
          biggest companies.
        </p>
        <div>
          <a className={MainCSS.btn1} href="#">
            MEET SLACK FOR ENTERPRISE
          </a>
          <a className={MainCSS.btn2} href="#">
            TALK TO SALES
          </a>
        </div>
        <div className={MainCSS.number}>
          <div className={MainCSS.percentage}>
            <p>
              <span> 85%</span>
            </p>
            <p>
              of users say Slack has improved communication<sup>*</sup>
            </p>
          </div>
          <div className={MainCSS.percentage}>
            <p>
              <span> 86%</span>
            </p>
            <p>
              feel their ability to work remotely has improved <sup>*</sup>
            </p>
          </div>
          <div className={MainCSS.percentage}>
            <p>
              <span> 88%</span>
            </p>
            <p>
              feel more connected to their teams<sup>*</sup>
            </p>
          </div>
        </div>
      </section>

      <section className={MainCSS.section4}>
        <div className={MainCSS.section4Main}>
          <div>
            <video play loop width={400} height={400}>
              <source
                src={require("../images/1-slack-video.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            <p>
              “We were able to create a large virtual network of employees that
              can communicate as though they are together. There was a lot of
              disruption in terms of where we worked, but in terms of how we
              worked—very little disruption.”
            </p>
            <span>Mark Smith</span>

            <p className={MainCSS.p2}>
              Senior Technical Product Manager, T-Mobile
            </p>
            <a href="#">
              See more customer stories
              <IoIosArrowRoundForward color="#1264a3" size="15px" />
            </a>
          </div>
        </div>
        <p className={MainCSS.p3}>
          <sup> *</sup> Weighted average. Based on 2,707 survey responses from
          weekly Slack users in the U.S., UK, Australia and Canada with a ± 2%
          margin of error at 95% CI (December 2021).
        </p>
      </section>

      <section className={MainCSS.section5}>
        <h2>Take a deeper dive into a new way to work</h2>
        <div className={MainCSS.section5Main}>
          <div className={MainCSS.btn1}>
            <a href="#">
              <span>Collection</span>
              <h3>Slack as your digital HQ</h3>
              <img src={require("../images/12 img-promo-01.png")} />
              <a href="#">
                SEE ALL <IoIosArrowRoundForward color="#fff" size="15px" />
              </a>
            </a>
          </div>
          <div className={MainCSS.btn2}>
            <a href="#">
              <img src={require("../images/12 img-promo-02.jpg")} />
              <span>Resource</span>
              <h3>See how others are building thier digital HQ</h3>
              <a href="#">
                READ MORE <IoIosArrowRoundForward color="#1264a3" size="15px" />
              </a>
            </a>
          </div>
          <div className={MainCSS.btn2}>
            <a href="#">
              <img src={require("../images/14 img-promo-03.png")} />
              <span>Webinar</span>
              <h3>Win the battle for talent with a digital HQ</h3>
              <a href="#">
                WATCH NOW <IoIosArrowRoundForward color="#1264a3" size="15px" />
              </a>
            </a>
          </div>
          <div className={MainCSS.btn2}>
            <a href="#">
              <img src={require("../images/15 img-promo-04.jpg")} />
              <span>E-book</span>
              <h3>
                Reinventing work: New imperatives for the futureof working
              </h3>
              <a href="#">
                GET_EBOOK <IoIosArrowRoundForward color="#1264a3" size="15px" />
              </a>
            </a>
          </div>
        </div>
      </section>

      <section className={MainCSS.section6}>
        <div>
          <h3>Welcome to your new digital HQ</h3>
          <a href="#" className={MainCSS.btn1}>
            TRY FOR FREE
          </a>
          <a href="#" className={MainCSS.btn2}>
            TALK FOR SALES
          </a>
        </div>
      </section>
    </div>
  );
}
