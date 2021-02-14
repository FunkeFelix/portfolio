import React, { useEffect, useState } from "react";
import "./staticProject.css";

import P1homepage from "../../images/screenShots_projectOne/ironCollab Landingpage.png";
import P2homepage from "../../images/projectTwo/homescreen.png";
import P3gameScreen from "../../images/projectThree/gameScreen.png";
import { Heart} from "react-feather"


const staticProjects = () => {

  return (
    <div id="projects" >
      <div>
      <h2 className="project__header">Projects</h2>

      </div>

    <div className="projects__wrapper">
      <div className="projectDiv" >
      <h3>Iron-Collab</h3>
      <img className="project__img" src={P1homepage} /> 
      </div>
      <div className="projectDiv" >
      <h3>LIV.CO</h3>
      <img className="project__img" src={P2homepage} /> 
      </div>
      <div className="projectDiv" >
      <h3>Interactiv-Browsergame</h3>
      <img className="project__img" src={P3gameScreen} /> 
      </div>
    </div>
      <div>
      <p className="footer__slogan">made by Felix with <Heart color="#393e46" size={10} /> </p>

      </div>
    </div>
  )

}

export default staticProjects;
