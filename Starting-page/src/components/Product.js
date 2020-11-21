import React, { Fragment } from "react";
import styles from "./Product.module.css";
import whatproduct from "./../assets/whatproduct.jpg";
import howworks from "./../assets/how_it_works.png";

const Product = () => {
  return (
    <Fragment>
      <section className={styles.main}>
        <div className={styles.heading}>Product</div>
        <div className={styles.center}>
          <div style={{ marginTop: "2rem", padding: "1rem" }}>
            <h1 style={{ fontSize: "2rem" }}>What is Sachait?</h1>
            <h3 style={{ fontWeight: 500 }}>
            It aims at improving the quality of E-education over a local network, through one-to-many Video communication, i.e., techer-to-students live classes in a local college or university network. We are making it more analysis-oriented by using in it technologies like Facial Detection using Deep Learning, real-time Feedback using Charts and Alert systems, etc. We are also creating a summary at the end of the video lecture, both for the teacher's and the students' sides. At the end of the session, based on the data received by the ML Model, we can show the general attentiveness of all the students in the class to the teacher, highlighting the durations of the lecture where the students felt the most boredom or where most students had doubts, giving the lecturer an analysis on his/her performance and helping him in furtehr improving the course. On the Students' side, he/she would receive the feedback about his/her own concentration for the whole duration. 
            </h3>
          </div>
          <div>
            {" "}
            <img
              src={whatproduct}
              alt="product1"
              className={styles.whatproduct}
            />{" "}
          </div>
          <div>
            {" "}
            <img src={howworks} alt="works" className={styles.howworks} />{" "}
          </div>
          <div style={{marginLeft: '3rem' }}>
            <h1 style={{ fontSize: "2rem" }}>How it works</h1>
            <h3 style={{ fontWeight: 500}}>
            The main goal of this project is to develop an autonomous agent able to provide information to both teachers and students. Student engagement is positively linked to desirable academic outcomes, such as critical thinking, and grades obtained in the subject. Features and Pose Extraction: One immediate feature that comes to mind is eye tracking but eye tracking tends to suffer from low resolution images. Hence we use head position which tends to contribute highly in the overall gaze direction. Although head position already is highly accurate in attention detection, paired with another technique vastly improves the results. Students that are paying attention normally react to stimulus the same way, that is students having their motions synchronised to the majority are paying attention. An example of this synchronization is when the class has to bend down to write when the teachers instructs them to.
            </h3>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Product;
