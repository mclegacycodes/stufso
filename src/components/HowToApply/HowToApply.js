import React from 'react'
import HeadingText3 from '../UI/HeadingText3'
import NeutralBg from '../UI/NeutralBg'
import StepCard from './StepCard'
import classes from "./HowToApply.module.css";
import CtaButton from '../UI/CtaButton';

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
            <CtaButton title="Apply Now" className={classes.btn}/>
        </NeutralBg>
    </div>
  )
}

export default HowToApply