import React from 'react'
import classes from "./SectionTemplate.module.css";
import NeutralBg from '../UI/NeutralBg';
import HeadingText3 from '../UI/HeadingText3';

import ImageCard from '../UI/ImageCard';
const SectionTemplate = (props) => {
  return (
    <div className={classes.about}>
        <NeutralBg className={`${classes.white} || ${props.bgColor}`}>
            
            <ImageCard bgImage={props.bgImage}/>
            <div className={classes.texts}>
                <HeadingText3 title={props.title}/>
                <div>
                  {props.children}

                </div>
                           </div>
        </NeutralBg>
    </div>
  )
}

export default SectionTemplate