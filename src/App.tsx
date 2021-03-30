import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DvirWebNavbar from "./components/Navbar/DvirWebNavbar";
import StartSection from "./components/StartSection/StartSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProtfolioSection from './components/ProtfolioSection/ProtfolioSection';
import CustomeFooter from './components/Footer/CustomeFooter';

function App() {
  return (
    <div>
      <DvirWebNavbar className="navbar"></DvirWebNavbar>
      <StartSection></StartSection>
      <SkillsSection></SkillsSection>
      <ProtfolioSection></ProtfolioSection>
      <CustomeFooter></CustomeFooter>
    </div>
  );
}

export default App;
