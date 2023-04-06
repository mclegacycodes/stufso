import React from 'react'
import CtaButton from '../UI/CtaButton';
import styles from "./HeroPage.module.css";

const HeroPage = () => {
  return (
    <div className={styles.hero}>
        <h1>APPLY FOR UCC SCHOLARSHIP</h1>
        <p>We are committed to providing support to students facing financial challenges, through financial assistance programs.</p>
        <CtaButton title="Create New Application" className={`${styles.yellow} ${styles.mt-4}`}/>
    </div>
  )
}

export default HeroPage