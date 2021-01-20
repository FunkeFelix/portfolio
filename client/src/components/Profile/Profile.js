import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import ReactDOM from "react-dom";
import "./Profile.css";
import ProfilePicture from "../../images/felix.png";
import { Linkedin, Mail, GitHub } from "react-feather";

const Profile = () => {
  return (
    <div id="profile">
      <div className="profilSectionWrapper">
        <div className="profileSectionHeader">
          <h2 className="fontStyle header">Profile</h2>
          <span className=" slogan">
            I am a Business oriented Web Developer
          </span>
        </div>

        <div className="aboutMeDiv">
          <div>
            <h3 className="fontStyle">About Me</h3>
            <div className="aboutMeArticle">
              I am an aspiring Full Stack Web Developer with extensive knowledge
              about Business. After working as a sales executive and finishing
              my BA in Marketing, I wanted to be able to build my ideas from the
              start. Recently I finished a Web Development Bootcamp for which I
              work now as Teachign Assistant.
            </div>
          </div>
          <div className="profilePicture">
            <img
              className="profilePicture"
              src={ProfilePicture}
              alt="Profile Picture Felix"
            />
          </div>
          <div>
            <h3 className="fontStyle">Details</h3>
            <p></p>
            <span>Name:</span> <span>Felix Michael Funke</span>
            <p></p>
            <span>Age:</span> <span>26</span>
            <p></p>
            <span>Location:</span> <span>Berlin, Germany</span>
            <p></p>
            <span>From:</span> <span>Lake Constance, Germany</span>
            <p></p>
            <a
              className="socialLink"
              target="_blank"
              href="https://www.linkedin.com/in/felix-funke-b1a9561b3/"
            >
              <Linkedin />
            </a>{" "}
            <a
              className="socialLink"
              target="_blank"
              href="mailto:felixfunke456@gmail.com"
            >
              <Mail />
            </a>{" "}
            <a
              className="socialLink"
              target="_blank"
              href="https://github.com/FunkeFelix"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
