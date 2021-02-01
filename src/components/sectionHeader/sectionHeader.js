import React, { useEffect, useState } from "react";
import "./sectionHeader.css";

const sectionHeader = (props) => {
  return (
    <div className="backgroundWrapper">
      <div className="sectionHeaderDiv">
        <div className="headline">
          <h1>Felix Michael Funke</h1>
          <div className="sectionHeaderHr"> </div>
          <p>Full Stack Web Developer && B.Sc. Business Management</p>
        </div>
      </div>
    </div>
  );
};

export default sectionHeader;
