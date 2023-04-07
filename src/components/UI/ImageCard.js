import React from 'react'
import classes from "./ImageCard.module.css";

const ImageCard = (props) => {
  return (
    <div id='bgImage' className={classes.bgImage} style={{backgroundImage:`url(${props.bgImage})`}}>
                
    </div>
  )
}

export default ImageCard