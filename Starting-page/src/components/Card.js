import React, {Fragment} from 'react';
import styles from './Card.module.css'


const Card = ({img, name, dev}) => {
  return(
    <Fragment>
      <div className={styles.card}>
        <div className={styles.content}>
          <img src={img} alt="ashray" className={styles.image} />
         <div className={styles.heading}>{name}</div>
         <div className={styles.dev}>{dev}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Card;