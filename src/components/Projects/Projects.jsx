import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                <ProjectCard />
            </div>
        </section>
    );
}

export default Projects
