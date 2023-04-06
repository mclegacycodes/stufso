import React from 'react'
import classes from "./NeutralBg.module.css";

const NeutralBg = (props) => {
  return (
    <div className={`${classes.bg} ${props.className}`}>{props.children}</div>
  )
}

export default NeutralBg