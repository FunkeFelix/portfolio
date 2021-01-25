import React, { useEffect, useState } from "react";
import "./Education.css";
import ComponentDraw from "../../images/componentDraw.svg";

const Education = () => {
  const [state, setState] = useState({
    Ironhack: false,
    Triagon: false,
    CVS: false,
    Lynnfield: false,
  });

  const openCity = (educName) => {
    console.log(educName);
    if (state[educName]) {
      setState({
        ...state,
        [educName]: false,
      });
    } else {
      setState({
        ...state,
        [educName]: true,
      });
    }
  };

  return (
    <div id="education">
      <div className="educationWrapper">
        <div className="tab educationButtons">
          <button
            className="glow-on-hover"
            onClick={() => openCity("Ironhack")}
          >
            Full Stack Web Development
          </button>
          <button className="glow-on-hover" onClick={() => openCity("Triagon")}>
            B.Sc. Business Management - Marketing
          </button>
          <button className="glow-on-hover" onClick={() => openCity("CVS")}>
            Economics College Certificate
          </button>
          <button
            className="glow-on-hover"
            onClick={() => openCity("Lynnfield")}
          >
            Junior Highschool
          </button>
        </div>
        <div className="educationText">
          {state.Ironhack && (
            <div id="Ironhack" className="tabcontent">
              <h4 className="contentHeader">
                Full Stack Web Development Bootcamp
              </h4>
              <p>
                In this intensive 3-Month Bootcamp I have learned to design and
                build a robust full-stack web application from end-to-end using
                JavaScript in the front-end and the back-end. Separated in three
                Modules and three on-hand projects I have learned :
              </p>
              <ul>
                <li>HTML | CSS fundamentals to create responsive web design</li>
                <li>
                  Programming a server structure using NodeJS | Express |
                  Handlebars | MongoDB / Mongoose
                </li>
                <li>Using ReactJS framework to create disruptive frontend</li>
              </ul>
              Also we have been introduced to Test Driven Development principles
              and how to think create Clean Code (DRY | YAGNI | KISS). Within
              the projects we have learned how to use 3rd party services through
              API's and how to create database driven applications. Version
              Controll: Git | GitHub
            </div>
          )}
          {state.Triagon && (
            <div id="Triagon" className="tabcontent">
              <h4 className="contentHeader">
                B.Sc. Business Management - Marketing
              </h4>
              <p>
                Additionally to my educational training as an industrial clerk
                for international businesses I decided to manifest my knowledge
                about Marketing with a B.Sc. program. As part of the program I
                acquired knowledge about advertising psychology and a successful
                customer journey within the e-commerce. In my thesis I proved
                how a successful Content-Marketing strategy for the
                Interior-Design industry can be and what the main focus for
                companies should look like.
              </p>
            </div>
          )}
          {state.CVS && (
            <div id="CVS" className="tabcontent">
              <h4 className="contentHeader">Economics College Certificate</h4>
              <p>
                A two year college with a specific focus on economics and
                languages.
              </p>
            </div>
          )}
          {state.Lynnfield && (
            <div id="Lynnfield" className="tabcontent">
              <h4 className="contentHeader">Junior Highschool year abroad</h4>
              <p>
                After successfully finishing my secondary school I had the
                unbelievable luck to have the chance to spend a year abroad.
                Within my year in Lynnfield, MA - USA I could consolidate my
                english skills which proven me many more opportunities. It also
                gave me a more open minded perspective and the ability to adjust
                to new situations immediately.
              </p>
            </div>
          )}
          {state.Triagon === false &&
            state.Ironhack === false &&
            state.CVS === false &&
            state.Lynnfield === false && (
              <div className="infoMissing">
                <img src={ComponentDraw} alt="drawing of components" />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Education;
