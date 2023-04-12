import React from 'react'
import classes from "./TestimonyCard.module.css"
import quoteIcon from "../../images/quote.svg";

const TestimonyCard = (props) => {
  return (
    <div className={classes.testimonyCard}>
              <div className={classes.imageRow}>
                <span className={classes.circularImage} >
                    <img src={props.bgImage} alt="" />
                </span>
                <img src={quoteIcon} alt="quote icon" className={classes.quote}/>
              </div>

              <p className={classes.textQuote}>“{props.quote}”</p>

                <div className={classes.details}>
                    <h4 className={classes.name}>{props.name}</h4>
                    <p className={classes.programme}>{props.programme}</p>
                    <span className={classes.level}>{props.level}</span>

                </div>


    </div>
  )
}

export default TestimonyCard