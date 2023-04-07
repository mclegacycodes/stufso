import React from 'react'
import classes from "./About.module.css";
import NeutralBg from '../NeutralBg';
import HeadingText3 from '../UI/HeadingText3';
import sampleImg from "../../images/sample.jpg";
import ImageCard from '../UI/ImageCard';
const About = () => {
  return (
    <div className={classes.about}>
        <NeutralBg className={classes.white}>
            
            <ImageCard bgImage={sampleImg}/>
            <div className={classes.texts}>
                <HeadingText3 title="Who We Are"/>
                <p>The Student’s Financial Support Office, in line with the goals and policies of the University of Cape Coast, seeks to make quality tertiary education accessible to any individuals who might not have the financial means to support themselves up the academic ladder. 
As a University which provides equal opporutnity to all students and wants every student to succeed, we offer a number offinancial supporrt options to need but brilliant students in their academic pursuits.</p>
            </div>
        </NeutralBg>
    </div>
  )
}

export default About