import "./App.css";
import SectionHeader from "./components/sectionHeader/sectionHeader";
import Profile from "./components/Profile/Profile";

import NavBar from "./components/navBar/NavBar";

import Projects from "./components/Projetcs/Projects";
import MaterialDesignSwitch from "./components/Switch/Switch";

function App() {
  return (
    <div className="App">
      <SectionHeader />
      <NavBar />

      <Profile />
      <MaterialDesignSwitch />

      <Projects />
    </div>
  );
}

export default App;
