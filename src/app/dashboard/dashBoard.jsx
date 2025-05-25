import React from "react";
import styles from "./dashboard.module.css";
const DashBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Let's Work Together!</h1>
        <p className={styles.name}>Hi, I'm Yusuf,</p>
        <p className={styles.text}>
          A Frontend Developer focused on building clean, responsive, and
          user-friendly interfaces. I specialize in Next.js, React, and modern
          CSS techniques, delivering polished web experiences that prioritize
          performance, accessibility, and design accuracy. I'm passionate about
          creating scalable components and smooth user interactions that bring
          interfaces to life.
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
