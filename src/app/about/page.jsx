import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <br />
       <p className={styles.info}>I'm a Developer who specializes in creating seamless,  responsive, and user-friendly web applications </p>
       <p className={styles.desc}>I'm experienced with React and Next.js, focusing on building high-performance websites that are both visually appealing and easy to use. I'm passionate about writing clean, maintainable code and continuously improving my skills to deliver top-notch user experiences.
       </p>
      
    </div>
  )
}

export default About