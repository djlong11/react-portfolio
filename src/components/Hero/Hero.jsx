import React from 'react';
import styles from "./Hero.module.css";


const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Derek</h1>
                <p className={styles.description}>Former Software Project Manager turned React Developer.</p>
                <a href="mailto:dereklong329@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img className={styles.heroImg} src="/images/hero/derekimage.png" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};

export default Hero
