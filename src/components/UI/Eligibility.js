import React from 'react'
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import Eligibility__ListItem from './Eligibility__ListItem';
import sampleImg from "../../images/sample.jpg";
import classes from "./Eligibility.module.css";

const Eligibility = () => {
  return (
    <div>
        <SectionTemplate title="Who is Eligible?" bgImage={sampleImg} >
            <div className={classes.listWrapper}>
                <p>To be eligible for consideration for the Centralized Scholarship/Bursary Scheme administered by StuFSO, the applicant must satisfy the following conditions: </p>
 
                <Eligibility__ListItem contentBg={classes.blueBg} number="01" content="Must be a Ghanaian by birth"/>

             <Eligibility__ListItem contentBg={classes.blueBg} number="02" content="Be enrolled as a student of the University of Cape Coast on full-time regular or distance programmes "/>

             <Eligibility__ListItem contentBg={classes.blueBg} number="03" content=" Must have completed at least one academic year of studies "/>

             <Eligibility__ListItem contentBg={classes.blueBg} number="04" content="Be able to demonstrate financial need and 
             must be ready to supply any documentary evidence for decision making"/>
             <Eligibility__ListItem contentBg={classes.blueBg} number="05" content="Be brilliant/promising as determined by the University"/>
            </div>
            
        </SectionTemplate>
    </div>
  )
}

export default Eligibility