import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.leftPart}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <div className={styles.rightPart}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt="Email icon" />
                    <a href="mailto:manuruddhaashan@gmail.com">manuruddhaashan@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon"/>
                    <a href="https://www.linkedin.com/in/ashan-gunatilake-3aab86211/">linkedin.com/ashan-gunatilake</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="Github icon" />
                    <a href="https://github.com/ashangunatilake">github.com/ashangunatilake</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Contact
