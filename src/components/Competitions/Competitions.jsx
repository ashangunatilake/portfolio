import React, { useEffect } from 'react';
import styles from './Competitions.module.css';
import competitions from '../../data/competitions/competitions.json';
import { getImageUrl } from '../../utils';
import { adjustImageHeights } from '../../utils';

const Competitions = () => {
    useEffect(() => {
        adjustImageHeights(`.${styles.imageContainer}`);
        window.addEventListener('resize', () => adjustImageHeights(`.${styles.imageContainer}`));

        return () => {
            window.removeEventListener('resize', () => adjustImageHeights(`.${styles.imageContainer}`));
        };
    }, []);

  return (
    <section className={styles.container} id="competitions">
        <h2 className={styles.title}>Competitions</h2>
        <div className={styles.competitions}>
            {competitions.map((competition, id) => {
                return(
                    <div className={styles.competition}>
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src={getImageUrl(competition.Image)}/>
                        </div>
                        <h3 className={styles.name}>{competition.Name}</h3>
                        <p className={styles.place}>{competition.Place}</p>
                    </div>
                );
            })}
        </div>

    </section>
  )
}

export default Competitions
