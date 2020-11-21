import React, { Fragment } from 'react';
import Card from './Card';
import styles from './Developer.module.css'
import ashray from './../assets/ashray.png'
import shivam from './../assets/shivam.png'
import siddhant from './../assets/siddhnat.png'
import unnati from './../assets/unnati.png'

const Developer = () => {
  return (
    <Fragment>
      <section className={styles.main}>
        <div className={styles.heading}>Team</div>
        <div className={styles.card}> <Card img={ashray} name="Ashray Gupta" dev="Frontend Developer" /> </div>
        <div className={styles.card}> <Card img={shivam} name="Shivam Agarwal" dev = "Python Developer" /> </div>
        <div className={styles.card}> <Card img={siddhant} name="Siddhnat Paikra" dev="" /> </div><br/>
      </section>
      <div className={styles.cards}> <Card img={unnati} name="Unnati Rusia" dev="Unnati" /> </div>
    </Fragment>
  )
}

export default Developer;