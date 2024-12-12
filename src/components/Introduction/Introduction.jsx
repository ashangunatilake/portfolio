import React from 'react';
import styles from './Introduction.module.css';
import { getImageUrl } from '../../utils';


const Introduction = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ashan Gunatilake</h1>
            <p className={styles.description}>I’m a Computer Engineering undergraduate who enjoys learning about new technologies and improving my skills. I’m a dedicated learner who values teamwork and takes responsibility seriously. I’m always open to connecting and sharing ideas—feel free to reach out!</p>
            <a className={styles.contactBtn} href='#contact'>Contact me</a>
        </div>
        <img className={styles.photo} src={getImageUrl("introduction/me.png")} alt="image of me"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Introduction
