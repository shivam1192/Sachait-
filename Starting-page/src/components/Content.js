import React, { Fragment } from "react";
import styles from "./Content.module.css";
import mainimg  from "./../assets/mainpage.jpg";
const Content = () => {
  return (
    <Fragment>
      <section className={styles.main}>
        <div className={styles.center}>
          <div className={styles.text}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 500 }}>
              Sachait - analysing platform for students
            </h1>
            <h3 style={{fontWeight: 500 }}>
            An online Platform for analysing Student Behaviour and Attention Span in the online classroom. It also Provide Detailed and statiscally data to teacher and student in the form of pie chart.
            </h3>
            <div><button><a href="http://localhost:5500/">Enter in Broadcast Media</a></button></div>
          </div>
          <div>
            <img src={mainimg} alt="study" className={styles.image}/>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Content;
