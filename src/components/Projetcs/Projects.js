import React, { useEffect, useState } from "react";
import "./Project.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import P1homepage from "../../images/screenShots_projectOne/ironCollab Landingpage.png";
import P1profile from "../../images/screenShots_projectOne/profile.png";
import P1signup from "../../images/screenShots_projectOne/signUp.png";
import P1addProjects from "../../images/screenShots_projectOne/addProjects.png";
import P1overviewProjects from "../../images/screenShots_projectOne/overviewProjects.png";
import P1projectDetails from "../../images/screenShots_projectOne/projectDetails.png";
import P2homepage from "../../images/projectTwo/homescreen.png";
import P2createTask from "../../images/projectTwo/createTask.png";
import P2createGroup from "../../images/projectTwo/createGroup.png";
import P2costsplitter from "../../images/projectTwo/costsplitter.png";
import P2calender from "../../images/projectTwo/calander.png";
import P3homeScreen from "../../images/projectThree/stratingScreen.png";
import P3endingScreen from "../../images/projectThree/endingScreen.png";
import P3gameScreen from "../../images/projectThree/gameScreen.png";
import P3jaegerScreen from "../../images/projectThree/jaegerScreen.png";
import { ExternalLink } from "react-feather";

const Projects = () => {
  const projectOne = [
    P1homepage,
    P1profile,
    P1signup,
    P1addProjects,
    P1overviewProjects,
    P1projectDetails,
  ];

  const projectTwo = [
    P2homepage,
    P2createGroup,
    P2createTask,
    P2calender,
    P2costsplitter,
  ];

  const projectThree = [
    P3homeScreen,
    P3gameScreen,
    P3jaegerScreen,
    P3endingScreen,
  ];

  const fadeProps = {
    duration: 3000,
    canSwipe: false,
    arrows: false,
  };

  return (
    <div className="projectsDiv">
      <h2 className="headerProjects" id="projects">
        Projects
      </h2>
      <div className="projectWrapper">
        <div className="project fadeOne">
          <div className="flexBox">
            <h3 className="projectHeader">Iron Collab</h3>

            <a
              className="socialLink"
              target="_blank"
              href="https://iron-collab.herokuapp.com/"
            >
              <ExternalLink color="#eeeeee" size={24} />
            </a>
          </div>
          <div className="slideWrapper">
            <div className="slide-container">
              <Fade {...fadeProps}>
                <div className="each-fade">
                  <div>
                    <img src={projectOne[0]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>Iron Collab</strong> is a tool which allowes students
                  of the Ironhack Bootcamp to pitch their project ideas to
                  fellow students. It tackles the problem of students not able
                  to come up with an own idea to take part in a project.
                </p> */}
                </div>
                <div className="each-fade">
                  {/* <p className="sliderText">
                  <strong>Profile</strong> as you can signup with Google all the
                  inforamtion Accesable over the API is implemented in your own
                  profile. You have an overview of your own created projects as
                  well as projects you have applied for.
                </p> */}
                  <div>
                    <img src={projectOne[1]} />
                  </div>
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectOne[2]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>Sign Up</strong> The abbility to use social login is
                  implemented over Google's API and passport. It allowes a fast
                  and convinient sign up. Also a generic sign up is possible.
                </p> */}
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectOne[3]} />
                  </div>
                  {/* <p className="sliderText">
                  {" "}
                  <strong>Add a Project</strong> In order for other students to
                  apply to your project you need to create one. Here you can
                  specify what it is and who you are looking for. The more
                  infomation implemented the better since students have the
                  possbility to filter e.g. which location.
                </p> */}
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectOne[4]} />
                  </div>
                  {/* <p className="sliderText">
                  {" "}
                  <strong>Project Overview</strong> In this view students can
                  see all ongoing projects. There is the possiblity to filter
                  for all interesting inforamtion e.g. the location of the
                  cohort or what kind of students are needed.
                </p> */}
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectOne[5]} />
                  </div>
                  {/* <p className="sliderText">
                  {" "}
                  <strong>Detailed Project</strong> In order to see all
                  inframtion you can interact with a single project. This view
                  allweos you to apply to a project if you area a user. If you
                  are the owner of the project you can edit | delete | accept
                  students.
                </p> */}
                </div>
              </Fade>
            </div>
          </div>
          <div className="project fadeTwo">
            <h3 className="projectHeader">LIV.CO</h3>
            <div className="slide-container">
              <Fade {...fadeProps}>
                <div className="each-fade">
                  <div>
                    <img src={projectTwo[0]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>LIV.CO</strong> was created because when organizing a
                  co living situation you use many tools to do so.
                  <br /> In order to .reduce() the used applications to one all
                  important tools have been implemented in one website.
                </p> */}
                </div>
                <div className="each-fade">
                  {/* <p className="sliderText">
                  {" "}
                  <strong>Houshold</strong> In order to use LIV.CO you have to
                  firstly create a group or houshold. The application allowes
                  you to directly invite other users to the group. All the tools
                  will have access to the users e.g. to split costs to each user
                  of the group.
                </p> */}
                  <div>
                    <img src={projectTwo[1]} />
                  </div>
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectTwo[2]} />
                  </div>
                  {/* <p className="sliderText">
                  {" "}
                  <strong>Create a Task</strong> You can create a Task with a
                  specific start and ending date. The Task will also appear in
                  the shared calendar.
                </p> */}
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectTwo[3]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>Shared Calendar</strong> in order to organize time
                  between multiple residents a shared time table is essential.
                  Now you can enter shared dinner and nobody is going to be
                  late.
                </p> */}
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectTwo[4]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>Costsplitter</strong> One of the most obvious problems
                  coliving sitaution have is to share the expenses which are to
                  split between everyone evenely or specific. The cost splitting
                  tool of LIV.CO allowes you to that and always keeps track of
                  who is paying and who is owing what amount.
                </p> */}
                </div>
              </Fade>
            </div>
          </div>
          <div className="project fadeOne">
            <h3 className="projectHeader">Interactive Browsergame</h3>
            <div className="slide-container">
              <Fade {...fadeProps}>
                <div className="each-fade">
                  <div>
                    <img src={projectThree[0]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>Felix's Shooting Range</strong> was my first web
                  application every build. It is a homage to a very popular 90's
                  game "Moorhuhn".
                </p> */}
                </div>
                <div className="each-fade">
                  {/* <p className="sliderText">
                  <strong> Game</strong> The player has a specific amount of
                  time to try to collect as many points as possible. Points are
                  colelcted when shooting a "Moorhuhn". If a Jägermeister is
                  popping up and the player missed the deer => Shots counter++
                </p> */}
                  <div>
                    <img src={projectThree[1]} />
                  </div>
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectThree[2]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>Strong Liver</strong>The game has 9 different
                  difficult combinations. The player can select at what ratio
                  the images are Jägermeister Deers or "Moorhuhn". The other
                  option is to increase the spead of the appearance.
                </p> */}
                </div>
                <div className="each-fade">
                  <div>
                    <img src={projectThree[3]} />
                  </div>
                  {/* <p className="sliderText">
                  <strong>Scoreboard</strong> At the end and overview is
                  presented with the collected points and the amount of shots
                  the player has to drink. Have fun!
                </p> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
