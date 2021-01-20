import "./App.css";
import SectionHeader from "./components/sectionHeader/sectionHeader";
import Profile from "./components/Profile/Profile";
import Workexpirience from "./components/Workexpirience/Workexpirience";
import NavBar from "./components/navBar/NavBar";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <SectionHeader />
      <NavBar />

      <Profile />
      <Education />
      <Workexpirience />
    </div>
  );
}

export default App;
