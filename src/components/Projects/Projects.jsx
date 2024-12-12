import React, { useEffect} from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects/projects.json'
import { getImageUrl } from '../../utils';
import { adjustImageHeights } from '../../utils';

const Projects = () => {
    useEffect(() => {
        adjustImageHeights(`.${styles.imageContainer}`);
        adjustImageHeights(`.${styles.projectTitle}`);
        adjustImageHeights(`.${styles.projectDescription}`);
        window.addEventListener('resize', () => adjustImageHeights(`.${styles.imageContainer}`));
        window.addEventListener('resize', () => adjustImageHeights(`.${styles.projectTitle}`));
        window.addEventListener('resize', () => adjustImageHeights(`.${styles.projectDescription}`));
    
        return () => {
            window.removeEventListener('resize', () => adjustImageHeights(`.${styles.imageContainer}`));
            window.removeEventListener('resize', () => adjustImageHeights(`.${styles.projectTitle}`));
            window.removeEventListener('resize', () => adjustImageHeights(`.${styles.projectDescription}`));
        };
      }, []);
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return(
                        <div className={styles.project}>
                            <div className={styles.imageContainer}>
                                <img src= {getImageUrl(project.imageSrc)}/>
                            </div>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <ul className={styles.projectSkills}>
                                {project.skills.map((skill, id) => {
                                return (
                                    <li key={skill.id} className={styles.projectSkill}>
                                    {skill}
                                    </li>
                                );
                                })}
                            </ul>
                            <div className={styles.link}>
                                <a href={project.source} className={styles.link}>Source</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Projects
