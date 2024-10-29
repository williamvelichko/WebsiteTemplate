import React from "react";
import styles from "./styles/Expectations.module.scss";
import Expectations from "./components/Expectations";

const Activities = () => {
  return (
    <div>
      <section className={styles.activities}>
        <div className={styles.activityContent}>
          <h3>What to Expect</h3>
          <p>Expectactions</p>
        </div>
      </section>
      <Expectations />
    </div>
  );
};

export default Activities;
