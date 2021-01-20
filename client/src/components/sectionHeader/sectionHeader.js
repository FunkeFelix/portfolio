import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./sectionHeader.css";
import BackgroundImage from "../../images/marco-schweizer-xceBV_rDszo-unsplash.jpg";

const sectionHeader = (props) => {
  return (
    <div className="sectionHeaderDiv">
      <div className="headline">
        <h1>Felix Michael Funke</h1>
        <hr className="sectionHeaderHr" />
        <p>portfolio page </p>
      </div>
    </div>
  );
};

export default sectionHeader;
