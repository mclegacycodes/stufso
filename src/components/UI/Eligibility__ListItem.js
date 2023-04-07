import React from 'react'
import classes from "./Eligibility__ListItem.module.css";

const Eligibility__ListItem = (props) => {
  return (
    <div className={classes.list}>
      <span>{props.number}</span>
      <p>{props.content}</p>

    </div>
  )
}

export default Eligibility__ListItem