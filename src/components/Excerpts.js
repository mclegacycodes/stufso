import React from 'react'
import classes from "./Excerpts.module.css";
const Excerpts = (props) => {
  return (
    <div className={classes.exerpt}>
        <div>
            <img src={props.icon} alt="icon" />
            </div>
        <div>
            <h3>{props.title}+</h3>
            <p>{props.subtitle}</p>
        </div>
    </div>
  )
}

export default Excerpts