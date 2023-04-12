import React from 'react'
import NeutralBg from '../UI/NeutralBg'
import classes from "./Testimonial.module.css";
import TestimonyCard from './TestimonyCard';
import sampleImg from "../../images/student.png"


const Testimonial = () => {
  return (
    <div>
        <NeutralBg className={classes.bg}>
            <TestimonyCard
             bgImage={sampleImg}
             quote="Being able to focus on my education without worrying about my fees has helped me attain
better grades. I am able to look forward to a brighter future."

              name="Michael Akrofi"
              programme="BSc Information & Communication
Technology"
              level="Level 300"



             />
        </NeutralBg>
    </div>
  )
}

export default Testimonial