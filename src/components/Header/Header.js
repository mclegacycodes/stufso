import React from 'react'
import logo from "../../images/ucc-logo.png";
import CtaButton from '../UI/CtaButton';
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <div className={styles.brand}>
                <img src={logo} alt="ucc logo" height="54"/>
                <div>
                    <span>University of Cape Coast</span>
                    <p>Student's Financial Support Office</p>
                </div>
            </div>
        
        <nav className={styles.nav}>
            <ul>
                <li>Home</li>
                <li>Gallery</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <CtaButton title="Login" className={styles.blue}/>
        </nav>
        </header>
    </div>
  )
}

export default Header