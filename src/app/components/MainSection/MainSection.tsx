import React from "react";
import styles from "./styling/MainSection.module.scss";
import Image from "next/image";

export const MainSection = () => {
  const paymentLink = process.env.PAYMENT_LINK;
  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/mountainExample.jpg"
          alt="Camp Adventure"
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Conference Name</h1>
        <h3 className={styles.topic}>Topic</h3>
        <p className={styles.titleSub}>Message</p>
        <a href={paymentLink} className={styles.registerButton}>
          Register
        </a>
      </div>
      <div className={styles.bounceArrow}>
        <span>&#8595;</span>
      </div>
    </div>
  );
};
