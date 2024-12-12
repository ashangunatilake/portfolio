import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.helloImage} src={getImageUrl('about/sticker.png')} alt="hello sticker"/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/image1.png')} alt='user icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Name</h3>
                        <p>Ashan Gunatilake</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/image2.png')} alt='age icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Age</h3>
                        <p>23 years</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/image3.png')} alt='degree icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Degree</h3>
                        <p>Currently pursuing a Bsc Eng Hons in Computer Engineering at University of Sri Jayewardenepura</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/image4.png')} alt='home icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Hometown</h3>
                        <p>Kelaniya, Sri Lanka</p>
                    </div>
                </li>
                <li className={styles.cvBtnItem}>
                    <div  className={styles.cvBtn}>
                        <a href='#'>Curriculum Vitae</a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
