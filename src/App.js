import Excerpts from "./components/Excerpts";
import Header from "./components/Header/Header";
import HeroPage from "./components/Hero/HeroPage";
import NeutralBg from "./components/NeutralBg";
import awardees from "./images/awardees-icon.svg"
import schemes from "./images/books-icon.svg"
import applicants from "./images/applicants-icon.svg"
import sponsors from "./images/sponsors-icon.svg"


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
    </div>
  );
}

export default App;
