import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src='/images/project/KanbanBoard.png' />
                <h3 className={styles.title}>Kanban Board</h3>
                <p className={styles.description}>Drag-and-drop Kanban board built without any external libraries,
                    featuring real-time task management and intuitive user interactions.</p>
                <div className={styles.links}>
                    <a className={styles.link} href='https://djlong-kanban.netlify.app/'>Link</a>
                    <a className={styles.link} href='https://github.com/djlong11/kanban-board'>Source</a>
                </div>
            </div>
            <div className={styles.container}>
                <img className={styles.image} src='/images/project/TaskChecklist.png' />
                <h3 className={styles.title}>Task Checklist</h3>
                <p className={styles.description}>To-do list application created using dnd kit where users can add tasks
                    and reorder them by using intuitive drag-and-drop actions.</p>
                <div className={styles.links}>
                    <a className={styles.link} href='https://djlong-task-checklist.netlify.app/'>Link</a>
                    <a className={styles.link} href='https://github.com/djlong11/task-checklist'>Source</a>
                </div>
            </div>
            <div className={styles.container}>
                <img className={styles.image} src='/images/project/CryptoTracker.png' />
                <h3 className={styles.title}>Crypto Tracker</h3>
                <p className={styles.description}>Crypto Tracker is a responsive React application that displays
                    real-time cryptocurrency data using the CoinGecko API.</p>
                <div className={styles.links}>
                    <a className={styles.link} href='https://djlong-crypto-tracker.netlify.app/'>Link</a>
                    <a className={styles.link} href='https://github.com/djlong11/crypto-tracker'>Source</a>
                </div>
            </div>
        </>
    );
}

export default ProjectCard
