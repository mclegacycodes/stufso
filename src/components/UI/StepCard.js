import React from 'react'
import ExcerptCard from '../Excerpts/ExcerptCard';
import classes from "./StepCard.module.css";

const StepCard = (props) => {
  return (
    <div className={classes.card}>
        <ExcerptCard className={classes.card}>
            <span className={classes.number}>{props.number}</span>
             <p className={classes.action}>{props.action}</p>
        </ExcerptCard>
        
    </div>
  )
}

export default StepCard