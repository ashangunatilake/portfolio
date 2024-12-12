import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.items}>
            <div className={styles.item}>
                <h3 className={styles.itemTitle}>University of Sri Jayewardenepura</h3>
                <p className={styles.itemPeriod}>Feb 2022 - Present</p>
                <ul className={styles.itemDescription}>
                    <li>Dean's List - Semester 1 and Semester 3</li>
                    <li>Current GPA - 3.76</li>
                </ul>
            </div>
            <div className={styles.item}>
                <h3 className={styles.itemTitle}>Ananda College - Colombo 10</h3>
                <p className={styles.itemPeriod}>May 2018 - Nov 2020</p>
                <ul className={styles.itemDescription}>
                    <li>GCE Advanced Level Examination (2020) - 2A’s (Combined Mathematics, General English) & 2B’s (Chemistry, Physics)</li>
                    <li>Z-Score - 1.8195 </li>
                </ul>
            </div>
            <div className={styles.item}>
                <h3 className={styles.itemTitle}>Yoshida Shokanji International - Sapugaskanda</h3>
                <p className={styles.itemPeriod}>Feb 2014 - May 2018</p>
                <ul className={styles.itemDescription}>
                    <li>GCE Ordinary Level Examination (2017) - 9A’s</li>
                </ul>
            </div>
            <div className={styles.item}>
                <h3 className={styles.itemTitle}>Sussex College - Kiribathgoda</h3>
                <p className={styles.itemPeriod}>Jan 2006 - Feb 2014</p>
                <ul className={styles.itemDescription}>
                    <li>Primary Education</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Education
