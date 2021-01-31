import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import ReactDOM from "react-dom";
import "./Profile.css";
import ProfilePicture from "../../images/felix.png";
import { Linkedin, Mail, GitHub } from "react-feather";

const Profile = () => {
  const calculateAge = () => {
    let today = new Date();
    const birthDate = new Date("06/01/1994");
    let ageNow = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageNow--;
    }

    return ageNow;
  };

  calculateAge();

  return (
    <div id="profile">
      <div className="profilSectionWrapper">
        <div className="profileSectionHeader">
          <h2 className="fontStyle header">Profile</h2>
          <span className="slogan">I am a Business oriented Web Developer</span>
        </div>

        <div className="aboutMeDiv">
          <div>
            <h3 className="fontStyle" style={{ marginBottom: 5 }}>
              About Me
            </h3>
            <div className="aboutMeArticle">
              I am an aspiring Full Stack Web Developer with extensive knowledge
              about Business. After working as a sales executive and finishing
              my BA in Marketing, I wanted to be able to build my ideas from the
              start. Recently I finished a Web Development Bootcamp for which I
              work now as Teachign Assistant.
            </div>
          </div>

          <img
            className="profilePicture"
            src={ProfilePicture}
            height="250px"
            alt="Profile Picture Felix"
          />

          <div>
            <div className="details container">
              <h3
                className="fontStyle "
                style={{ marginBottom: 5, marginTop: 0, color: "#ffffff" }}
              >
                Details
              </h3>
              <div style={{ marginBottom: 5 }}>
                <span>Name:</span> <span>Felix Michael Funke</span>
              </div>
              <div>
                <span style={{ marginBottom: 5 }}>Age:</span>{" "}
                <span>{calculateAge()}</span>
              </div>
              <div style={{ marginBottom: 5 }}>
                <span>Location:</span> <span>Berlin, Germany</span>
              </div>
              <div style={{ marginBottom: 5 }}>
                <span>From:</span> <span>Lake Constance, Germany</span>
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <a
                  className="socialLink"
                  target="_blank"
                  href="https://www.linkedin.com/in/felix-funke-b1a9561b3/"
                >
                  <Linkedin color="#ffffff" size={24} />
                </a>{" "}
                <a
                  className="socialLink"
                  target="_blank"
                  href="mailto:felixfunke456@gmail.com"
                >
                  <Mail color="#ffffff" size={24} />
                </a>{" "}
                <a
                  className="socialLink"
                  target="_blank"
                  href="https://github.com/FunkeFelix"
                >
                  <GitHub color="#ffffff" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
