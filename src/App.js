import Excerpts from "./components/Excerpts/Excerpts";
import Header from "./components/Header/Header";
import HeroPage from "./components/Hero/HeroPage";
import NeutralBg from "./components/UI/NeutralBg";
import awardees from "./images/awardees-icon.svg"
import schemes from "./images/books-icon.svg"
import applicants from "./images/applicants-icon.svg"
import sponsors from "./images/sponsors-icon.svg"
import About from "./components/UI/About";
import Eligibility from "./components/UI/Eligibility";
import Objectives from "./components/Objectives/Objectives"


function App() {
  return (
    <div>
      <Header/>
      <HeroPage/>

     <NeutralBg> 
        <Excerpts icon={awardees} title="1,000" subtitle="Students Awarded"/>
        <Excerpts icon={schemes} title="30" subtitle="Scholarship Schemes"/>
        <Excerpts icon={applicants} title="2,000" subtitle="Yearly Applicants"/>
         <Excerpts icon={sponsors} title="1,000" subtitle="Scholarship Sponsors"/>
      </NeutralBg> 

      <About/>
      <Objectives/>
      <Eligibility/>
    </div>
  );
}

export default App;
