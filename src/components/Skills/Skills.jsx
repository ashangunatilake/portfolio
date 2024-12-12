import React from 'react';
import styles from './Skills.module.css';
import languages from '../../data/skills/languages/languages.json';
import technologies from '../../data/skills/technologies/technologies.json';
import { getImageUrl } from '../../utils';

const Skills = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.leftPart}>
                <div className={styles.languages}>
                    <h3 className={styles.name}>Languages</h3>
                    <div className={styles.languagesContainer}>
                        {languages.map((language, id) => {
                            return (
                                <div className={styles.language}>
                                    <img className={styles.languageContent} src={getImageUrl(language.Image)}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.technologies}>
                    <h3 className={styles.name}>Technologies and Frameworks</h3>
                    <div className={styles.technologyContainer}>
                        {technologies.map((technology, id) => {
                            return (
                                <div className={styles.technology}>
                                    <img className={styles.technologyContent} src={getImageUrl(technology.Image)}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.rightPart}>
                <h3 className={styles.name}>Soft Skills</h3>
                <ul className={styles.skillsItems}>
                    <li className={styles.skillsItem}>
                        <img src={getImageUrl("/skills/problemsolving.png")}/>
                        <h3>Problem Solving</h3>
                    </li>
                    <li className={styles.skillsItem}>
                        <img src={getImageUrl("/skills/selflearning.png")}/>
                        <h3>Self Learning</h3>
                    </li>
                    <li className={styles.skillsItem}> 
                        <img src={getImageUrl("/skills/teamwork.png")}/>
                        <h3>Team Work</h3>
                    </li>
                    <li className={styles.skillsItem}>
                        <img src={getImageUrl("/skills/communication.png")}/>
                        <h3>Communication</h3>
                    </li>
                    <li className={styles.skillsItem}>
                        <img src={getImageUrl("/skills/adaptability.png")}/>
                        <h3>Adaptability</h3>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Skills
