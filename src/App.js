import "./App.css";
import SectionHeader from "./components/sectionHeader/sectionHeader";
import Profile from "./components/Profile/Profile";

import NavBar from "./components/navBar/NavBar";
import TimeLine from "./components/TimeLine/TimeLine";
import Projects from "./components/Projetcs/Projects";
import ImageSlider from "./components/Projetcs/SilderComponent/Slider";
import StaticProjects from "./components/Projetcs/staticProject";

//import of images

import P1homepage from "./images/screenShots_projectOne/ironCollab Landingpage.png";
import P1profile from "./images/screenShots_projectOne/profile.png";
import P1signup from "./images/screenShots_projectOne/signUp.png";
import P1addProjects from "./images/screenShots_projectOne/addProjects.png";
import P1overviewProjects from "./images/screenShots_projectOne/overviewProjects.png";
import P1projectDetails from "./images/screenShots_projectOne/projectDetails.png";
import P2homepage from "./images/projectTwo/homescreen.png";
import P2createTask from "./images/projectTwo/createTask.png";
import P2createGroup from "./images/projectTwo/createGroup.png";
import P2costsplitter from "./images/projectTwo/costsplitter.png";
import P2calender from "./images/projectTwo/calander.png";
import P3homeScreen from "./images/projectThree/stratingScreen.png";
import P3endingScreen from "./images/projectThree/endingScreen.png";
import P3gameScreen from "./images/projectThree/gameScreen.png";
import P3jaegerScreen from "./images/projectThree/jaegerScreen.png";
import { ExternalLink } from "react-feather";
import { Heart} from "react-feather"


function App() {
  return (
    <div className="App">
      <SectionHeader />
      <NavBar />

      <Profile />
      <TimeLine />
    <Projects />
      <StaticProjects />
      
    </div>
  );
}

export default App;
