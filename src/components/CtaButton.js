import React from 'react'
import styles from "./CtaButton.module.css";

const CtaButton = (props) => {
  return (
    <div>
          <button className={`${styles.button} ${props.className}`}> {props.title}</button>
    </div>
  
  )
}

export default CtaButton