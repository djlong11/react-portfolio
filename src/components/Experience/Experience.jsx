import React from 'react';
import styles from "./Experience.module.css"


const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>EXPERIENCE</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="/images/experience/html.png" />
                        </div>
                        <p>HTML</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="/images/experience/css.png" />
                        </div>
                        <p>CSS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="/images/experience/react.png" />
                        </div>
                        <p>React</p>
                    </div>
                </div>
                <div className={styles.experienceContainer}>
                    <ul className={styles.history}>
                        <li className={styles.historyItem}>
                            <img src="/images/experience/assistrx.png"></img>
                            <div className={styles.historyItemDetails}>
                                <h3>Software Project Manager, AssistRx</h3>
                                <p>2024 - 2025</p>
                                <ul>
                                    <li>Defined project scope and objectives</li>
                                    <li>Delivered cross-functional project initiatives</li>
                                    <li>Tracked progress and adjusted plans</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul className={styles.history}>
                        <li className={styles.historyItem}>
                            <img src="/images/experience/disney.png"></img>
                            <div className={styles.historyItemDetails}>
                                <h3>Sr Technical Project Manager, Disney</h3>
                                <p>2022 - 2024</p>
                                <ul>
                                    <li>Managed timelines and deliverables</li>
                                    <li>Led resource allocation and issue management</li>
                                    <li>Mitigated project risks and issues</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul className={styles.history}>
                        <li className={styles.historyItem}>
                            <img src="/images/experience/accesso.png"></img>
                            <div className={styles.historyItemDetails}>
                                <h3>Software Project Manager, accesso</h3>
                                <p>2021 - 2022</p>
                                <ul>
                                    <li>Created project plans that followed SDLC standardization</li>
                                    <li>Coordinated cross-functional teams</li>
                                    <li>Communicated with stakeholders</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </section >
    )
};

export default Experience
