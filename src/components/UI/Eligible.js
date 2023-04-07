import React from 'react'
import SectionTemplate from '../About/SectionTemplate';
import sampleImg from "../../images/sample.jpg";
import classes from "./Eligible.module.css";
import Eligibility__ListItem from './Eligibility__ListItem';

const Eligible = () => {
  return (
    <div>
        <SectionTemplate title="Our Objectives" bgImage={sampleImg} bgColor={classes.blue}>
            <Eligibility__ListItem/>
        </SectionTemplate>
    </div>
  )
}

export default Eligible