import React, { useState } from 'react';
import styles from "./Navbar.module.css";




const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open or closed
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? ("/images/nav/closeIcon.png") : ("/images/nav/menuIcon.png")}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><a className={styles.link} href="#about">About</a></li>
                    <li><a className={styles.link} href="#experience">Experience</a></li>
                    <li><a className={styles.link} href="#projects">Projects</a></li>
                    <li><a className={styles.link} href="#contact">Contact</a></li>
                </ul>
            </div >
        </nav >
    );
}




export default Navbar
