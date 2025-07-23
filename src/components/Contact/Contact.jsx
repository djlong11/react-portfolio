import React from 'react';
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="/images/contact/emailIcon.png" />
                    <a href="mailto:dereklong329@gmail.com">DerekLong329@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="/images/contact/linkedInIcon.png" />
                    <a href="https://www.linkedin.com/in/dereklong2/">linkedin.com/derek</a>
                </li>
                <li className={styles.link}>
                    <img src="/images/contact/githubIcon.png" />
                    <a href="https://github.com/djlong11">github.com</a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact
