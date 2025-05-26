import React from "react";
import styles from "./dashboard.module.css";
const DashBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Let's Work Together!</h1>
        <p className={styles.name}>Hi, I'm Umar,</p>
        <p className={styles.text}>
          A UI/UX Designer dedicated to crafting intuitive, visually engaging, and user-centered digital experiences. I specialize in wireframing, prototyping, and high-fidelity design using tools like Figma , with a strong focus on usability, accessibility, and design systems. I’m passionate about translating complex ideas into elegant interfaces and collaborating closely with developers to ensure seamless implementation and pixel-perfect execution.
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
