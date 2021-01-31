import React, { useEffect, useState } from "react";
import "./TimeLine.css";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Star as StarIcon,
} from "@material-ui/icons/";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
  return (
    <div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            id="work"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#00adb5", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - present"
            iconStyle={{ background: "#00adb5", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Teaching Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Berlin, Germany @Ironhack
            </h4>
            <p>
              Web Development Bootcamp, working close with Team and Students to
              ensure education
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: "#00adb5", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Sales Executive</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Munich, BY @mySPOTTi GmbH
            </h4>
            <p>
              B2B | B2C , Business Development, Key Account, Project Management,
              Online Marketing, Team Leading, construct and applying Main
              Business Strategy
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2016"
            iconStyle={{ background: "#00adb5", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">CEO</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lake Constance, BW @CUBE18 GmbH
            </h4>
            <p>
              Business Development, Building Supply Chain, Evaluating Suppliers,
              Setting fundamental Strategy for and with customers
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2016"
            iconStyle={{ background: "#00adb5", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Area Sales Manager Export
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              St.Georgen, BW @ALPRO Medical GmbH
            </h4>
            <p>Key Account Management, controlling 50% of export value</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2015"
            iconStyle={{ background: "#00adb5", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Industrial clerk for international business management{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lake Constance, BW @MSI MedServ International DE GmbH
            </h4>
            <p>Apprentisship to gain first expirience and knowledge</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            id="education"
            className="vertical-timeline-element--education"
            date="Winter 2020"
            contentStyle={{ background: "#393e46", color: "#fff" }}
            iconStyle={{ background: "#393e46", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Web Development Bootcamp @Ironhack
            </h4>
            <p>
              {" "}
              In this intensive 3-Month Bootcamp I have learned to design and
              build a robust full-stack web application from end-to-end using
              JavaScript in the front-end and the back-end.
              <ul>
                <li>HTML | CSS </li>
                <li>Node.js | express.js | Handlebars | MongoDB </li>
                <li>React</li>
                <li>Test Driven Development</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2021"
            iconStyle={{ background: "#393e46", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Business Management - Marketing
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>
              Customer Journey, User Interactions and perception, Thesis on
              Content Marketing and application in the interior industry
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2011"
            iconStyle={{ background: "#393e46", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Junior High-School Year
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              year abroad @Lynnfield, MA USA
            </h4>
            <p>
              Consolidating my english skills which proven me many more
              opportunities. It also gave me a more open minded perspective and
              the ability to adjust to new situations immediately.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#00adb5", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLine;
