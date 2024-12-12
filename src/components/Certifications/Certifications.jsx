import React, { useEffect } from 'react';
import styles from './Certifications.module.css';
import certificates from '../../data/certificates/certificates.json';
import { getImageUrl } from '../../utils';
import { adjustImageHeights } from '../../utils';

const Certifications = () => {
    useEffect(() => {
        adjustImageHeights(`.${styles.imageContainer}`);
        adjustImageHeights(`.${styles.certificateContent}`);
        window.addEventListener('resize', () => adjustImageHeights(`.${styles.imageContainer}`));
        window.addEventListener('resize', () => adjustImageHeights(`.${styles.certificateContent}`));
    
        return () => {
          window.removeEventListener('resize', () => adjustImageHeights(`.${styles.imageContainer}`));
          window.removeEventListener('resize', () => adjustImageHeights(`.${styles.certificateContent}`));   
        };
      }, []);

  return (
    <section id='certifications' className={styles.container}>
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.certificates}>
            {certificates.map((certificate, id) => {
                return (
                    <div className={styles.certificate}>
                        <div className={styles.certificateOverlay}>
                            <a className={styles.certificateBtn} href={certificate.URL}>View Certificate</a>
                        </div>
                        <div className={styles.certificateContent}>
                            <div className={styles.imageContainer}>
                                <img className={styles.image} src={getImageUrl(certificate.Image)}/>
                            </div>
                            <h3 className={styles.name}>{certificate.Name}</h3>
                            <p className={styles.institute}>{certificate.Institute}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  )
}

export default Certifications
