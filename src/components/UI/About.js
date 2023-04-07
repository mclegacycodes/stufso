import React from 'react'
import SectionTemplate from '../SectionTemplate/SectionTemplate'
import sampleImg from "../../images/sample.jpg";

const About = () => {
  return (
    <div>
        <SectionTemplate title="About STUFSO UCC" bgImage={sampleImg}>
            <p>The Student’s Financial Support Office, in line with the goals and policies of the University of Cape Coast, seeks to make quality tertiary education accessible to any individuals who might not have the financial means to support themselves up the academic ladder. 
            As a University which provides equal opporutnity to all students and wants every student to succeed, we offer a number offinancial supporrt options to need but brilliant students in their academic pursuits.</p>
 
        </SectionTemplate>
    </div>
  )
}

export default About