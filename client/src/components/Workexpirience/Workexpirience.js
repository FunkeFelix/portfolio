import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Workexpirience.css";

const Workexpirience = () => {
  const [state, setState] = useState({
    TA: true,
    Myspotti: false,
    Cube: false,
    Alpro: false,
  });

  const changeHandler = (job) => {
    console.log(job);
    if (state[job]) {
      setState({
        ...state,
        [job]: false,
      });
    } else {
      setState({
        ...state,
        [job]: true,
      });
    }
  };
  return (
    <div className="jobWrapper">
      <h2 className="workExpirienceH2">Work Expirience</h2>
      <div className="buttonWrapper">
        <button className="glow-on-hover" onClick={() => changeHandler("TA")}>
          Ironhack
        </button>
        <button
          className="glow-on-hover"
          onClick={() => changeHandler("Myspotti")}
        >
          mySPOTTi GmbH
        </button>
        <button className="glow-on-hover" onClick={() => changeHandler("Cube")}>
          Cube18 GmbH
        </button>
        <button
          className="glow-on-hover"
          onClick={() => changeHandler("Alpro")}
        >
          Alpro Medical GmbH
        </button>
      </div>
      <div id="work">
        {state.TA && (
          <div>
            <h4> Teaching Assistant </h4>
            Teaching Assistant for the 9-Week Web Development Bootcamp. Helping
            Students to understand the first concepts of Web Development.
            Following Stack is used:
            <ul>
              <li>JavaScript</li>

              <li>HTML/CSS</li>
              <li>React.JS</li>
              <li>MongoDB & express.js</li>
            </ul>
          </div>
        )}
        {state.Myspotti && (
          <div>
            <h4>Sales Executive</h4>
            mySPOTTi GmbH is a manufacturer based in South-Germany which creates
            Interior-Design products with a functionality. As Sales Executive I
            was responsible for all customer related subjects.
            <ul>
              <li>creating new markets for new and existing products</li>
              <li>evaluating the market for possible new products</li>
              <li>
                supervise all Key-Accounts for retail as well as e-commerce
              </li>
              <li>setting KPI's for and with Key-Accounts</li>
              <li>training sales staff of Key-Accounts across Europe</li>
              <li>
                supervising sales materials and creating USP focused POS/POP
              </li>
              <li>
                Develop individual quotas and assign territories for team
                members
              </li>
            </ul>
            As part of the Management-Team I also was responsible and contact
            person for the CEO/owner in different matters.
            <ul>
              <li>creating and supervising online marketing team</li>
              <li>groundwork and enforcing new business plan and strategy</li>
              <li>
                supervising design team and 3rd party agency for company owned
                e-commerce
              </li>
            </ul>
          </div>
        )}
        {state.Cube && (
          <div>
            <h4> CEO </h4>
            After investigating the potential market for digital print products
            within the interior-design industry, I was building up a trading
            company for raw materials of the print industry with special
            features usable in be-said industry.
            <ul>
              <li>locate new Supplier and carry out evaluation</li>
              <li>Developing business partnerships with manufacturers</li>
              <li>Setting up a client base</li>
              <li>Finding new Product-applications for clients</li>
              <li>
                Creating customized delivery chains for clients to maximize
                efficien
              </li>
              <li>Creating Financial & Business Reports for shareholders</li>
            </ul>
          </div>
        )}
        {state.Alpro && (
          <div>
            <h4>Area Sales Manager Export</h4>
            Alpro Medical GmbH is a manufacturer for disinfections mainly used
            within the dental industry. As part of the Sales Team I was
            responsible for market-shares in East-Europe and Asia. My main tasks
            included:
            <ul>
              <li>
                establish business relationship with existing and new customers
              </li>
              <li>arranging marketing solutions with Key-Accounts</li>
              <li>Provide detailed monthly sales forecast</li>
              <li>Introducing new products to Key-Accounts</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workexpirience;
