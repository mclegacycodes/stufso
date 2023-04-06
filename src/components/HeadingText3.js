import React from 'react'
import classes from "./HeadingText3.module.css";

const HeadingText3 = (props) => {
  return (
    <h3 className={classes.h3}>{props.title}</h3>
  )
}

export default HeadingText3