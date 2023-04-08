import React from 'react'
import classes from "./ExcerptCard.module.css"

const ExcerptCard = (props) => {
  return (
    <div className={`${classes.exerpt} ${props.className}`}>{props.children}</div>
  )
}

export default ExcerptCard