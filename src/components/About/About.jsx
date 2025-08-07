import React from 'react';
import styles from "./About.module.css"

const About = () => {
    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src="/images/about/aboutimage.png" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="/images/about/frontend.png" />
                        <div className={styles.aboutItemText}>
                            <h3>React.js Developer</h3>
                            <p>React Developer with a solid background in software project management
                                and a growing portfolio of front-end development projects.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="/images/about/frontend.png" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Project Manager</h3>
                            <p>I have experience as a Software Project Manager working closely
                                with development teams, designers, product, accessibility and QA teams.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About



