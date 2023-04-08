import React from 'react'
import HeadingText3 from './HeadingText3'
import NeutralBg from './NeutralBg'
import StepCard from './StepCard'
import classes from "./HowToApply.module.css";

const HowToApply = () => {
  return (
    <div>
        <NeutralBg className={classes.col}>
            <HeadingText3 title="How to Apply"/>
            <div className={classes.stepsWrapper}>
               <StepCard number="1" action="Visit apply-stufso.ucc.edu.gh"/>
               <StepCard number="2" action="Create account using the Sign Up button"/>
               <StepCard number="3" action="Complete the application form and upload the necessary documents."/>
               <StepCard number="4" action="Short listed application will be invited to a selection interview. the University"/>
            </div>
        </NeutralBg>
    </div>
  )
}

export default HowToApply