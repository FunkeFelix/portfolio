import React, { Component } from "react";
import Switch from "react-switch";
import Workexpirience from "../Workexpirience/Workexpirience";
import Education from "../Education/Education";
import "./Switch.css";

class MaterialDesignSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="switchWrapper">
        <div className="switchFlex">
          {this.state.checked === false && (
            <h2 className="checked">Education </h2>
          )}
          {this.state.checked === true && (
            <h2 className="offChecked ">Education </h2>
          )}
          <div className="switchDiv">
            <label htmlFor="material-switch">
              <div>
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  onColor="#00ADB5"
                  offColor="#00ADB5"
                  onHandleColor="#00ADB5"
                  offHandleColor="#00ADB5"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                  className="react-switch"
                  id="material-switch"
                />
              </div>
            </label>
          </div>
          {this.state.checked === true && (
            <h2 className="checked">Work Experience </h2>
          )}
          {this.state.checked === false && (
            <h2 className="offChecked ">Work Experience </h2>
          )}
        </div>
        {this.state.checked === false && <Education />}
        {this.state.checked === true && <Workexpirience />}
      </div>
    );
  }
}
export default MaterialDesignSwitch;
