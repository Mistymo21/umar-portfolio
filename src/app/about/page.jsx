import React from "react";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <br />
      <p className={styles.info}>
        I’m a creative graphic and web designer, creating a
        user-friendly web designs{" "}
      </p>
      <p className={styles.desc}>
        I'm a UI/UX Designer who specializes in creating seamless,
        user-friendly, and visually engaging digital experiences. I'm
        experienced with design tools like Figma and Adobe XD, focusing on
        building intuitive interfaces that are both aesthetically pleasing and
        easy to navigate. I'm passionate about user-centered design, maintaining
        consistency through design systems, and continuously refining my craft
        to deliver high-impact, accessible experiences across web and mobile
        platforms.
      </p>
    </div>
  );
};

export default About;
