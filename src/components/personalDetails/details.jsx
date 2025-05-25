import React from "react";
import Link from "next/link";
import styles from "./details.module.css";
import Image from "next/image";
import Bee from "../../../public/bee.jpeg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const details = () => {
  return (
    <div>
      {" "}
      <div className={styles.personal}>
        <h1>Yusuf Muhammed</h1>
        <Image src={Bee} alt="" className={styles.img} />
        <div className={styles.desc}>
          <p>Based in Nigeria</p>
          <span> Frontend Web Developer</span>

          <div className={styles.icons}>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaGithub />
            </Link>
          </div>
        </div>

        <Link href="/contact" className={styles.btn}>
          <button>Hire me!</button>
        </Link>
      </div>
    </div>
  );
};

export default details;
