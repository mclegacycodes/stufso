import React from 'react'
import HeadingText3 from './HeadingText3'
import NeutralBg from './NeutralBg'
import StepCard from './StepCard'
import classes from "./HowToApply.module.css";

const HowToApply = () => {
  return (
    <div>
        <NeutralBg>
            <HeadingText3 title="How to Apply"/>
            <div className={classes.stepsWrapper}>
               <StepCard number="1" action="Visit apply-stufso.ucc.edu.gh"/>
               <StepCard number="1" action="Visit apply-stufso.ucc.edu.gh"/>
               <StepCard number="1" action="Visit apply-stufso.ucc.edu.gh"/>
               <StepCard number="1" action="Visit apply-stufso.ucc.edu.gh"/>
            </div>
        </NeutralBg>
    </div>
  )
}

export default HowToApply