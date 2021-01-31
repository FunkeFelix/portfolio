import "./App.css";
import SectionHeader from "./components/sectionHeader/sectionHeader";
import Profile from "./components/Profile/Profile";

import NavBar from "./components/navBar/NavBar";
import TimeLine from "./components/TimeLine/TimeLine";
import Projects from "./components/Projetcs/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <SectionHeader />
      <NavBar />

      <Profile />
      <TimeLine />
      <Projects />
    </div>
  );
}

export default App;
