import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Lists = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
  // {
  //   id: 4,
  //   title: "Services",
  //   url: "/services",
  // },
  {
    id: 5,
    title: "Projects",
    url: "/projects",
  },
];

const navbar = () => {
  return (
    <div className={styles.container}>
        <h1>Portfolio</h1>
      <div className={styles.link}>
        {Lists.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default navbar;
