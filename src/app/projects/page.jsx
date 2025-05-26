import React from "react";
import styles from "./projects.module.css";
const Blog = () => {
  return (
    <div>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>DASHIT Dashboard | Figma UI Concept</h2>
          <p>
            Designed admin dashboard with focus on data visualization and user
            workflow Implemented dark mode and responsive layouts
          </p>
          <a
            href="https://www.figma.com/proto/o8B3ZEGf0pw3qBCQA6m4zQ/DASHIT?node-id=101-2273&p=f&t=WhkjiHSbwbimQYA7-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=101%3A2273"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.button}>View Project</button>
          </a>
        </div>

        <div className={styles.card}>
          <h2>Spedi E-Commerce App</h2>
          <p>
            Created mobile app UI with streamlined checkout process, Reduced user
            steps by 30% through UX optimization
          </p>
          <a
            href="https://www.figma.com/proto/NkO0PlWP1WuPtBc9N6MzPs/Spedi?node-id=3-373&p=f&t=WhkjiHSbwbimQYA7-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=3%3A373"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.button}>View Project</button>
          </a>
        </div>

        <div className={styles.card}>
          <h2> MAZHUB - E-Learning Web App(UI/UX)</h2>
          <p>
           An intuitive and engaging e-learning platform designed to enhance digital learning experiences. Focused on clear navigation, accessible design, and interactive course structures to support diverse learning needs.

          </p>
          <a
            href="https://www.figma.com/proto/BYZ3WkU0s6U4yiJXEURswn/MAZHUB?node-id=33-372&t=37HjIE5PubS4HJbE-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=33%3A372&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.button}>View Project</button>
          </a>
        </div>

       
      </div>
    </div>
  );
};

export default Blog;
