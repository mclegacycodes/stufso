import React from 'react'
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import sampleImg from "../../images/sample.jpg";
import classes from "./Objectives.module.css";
import Eligibility__ListItem from '../UI/Eligibility__ListItem';


const Objectives = () => {
  
  return (
    <div>
        <SectionTemplate title="Our Objectives" bgImage={sampleImg} bgColor={classes.blue}>
            <div className={classes.listWrapper}>
                <Eligibility__ListItem contentBg={classes.white} number="01" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>

             <Eligibility__ListItem contentBg={classes.white} number="02" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>

             <Eligibility__ListItem contentBg={classes.white} number="03" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>

             <Eligibility__ListItem contentBg={classes.white} number="04" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>
            </div>
            
        </SectionTemplate>
    </div>
  )
}

export default Objectives