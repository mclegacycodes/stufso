import React from 'react'
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import sampleImg from "../../images/sample.jpg";
import classes from "./Eligible.module.css";
import Eligibility__ListItem from './Eligibility__ListItem';

const Eligible = () => {
  return (
    <div>
        <SectionTemplate title="Our Objectives" bgImage={sampleImg} bgColor={classes.blue}>
            <div className={classes.listWrapper}>
                <Eligibility__ListItem number="01" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>

             <Eligibility__ListItem number="02" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>

             <Eligibility__ListItem number="03" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>

             <Eligibility__ListItem number="04" content="Provide financial support in the form of bursaries and
             scholarships to Needy but brilliant students of the University of Cape Coast."/>
            </div>
            
        </SectionTemplate>
    </div>
  )
}

export default Eligible