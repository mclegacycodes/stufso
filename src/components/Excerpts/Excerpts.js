import React from 'react'
import ExcerptCard from './ExcerptCard';
import classes from "./Excerpts.module.css";
const Excerpts = (props) => {
  return (
    <ExcerptCard className={classes.exerpt}> 
      <div>
            <img src={props.icon} alt="icon" />
            </div>
        <div>
            <h3>{props.title}+</h3>
            <p>{props.subtitle}</p>
        </div>
    </ExcerptCard>
    
  )
}

export default Excerpts