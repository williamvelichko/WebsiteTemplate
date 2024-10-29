import React from "react";
import styles from "./styles/schedule.module.scss";
import ScheduleData from "./data/ScheduleData.json";

const Schedule = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.titleSection}>
        <h3 className={styles.scheduleTitle}>Date and Schedule</h3>
        <p>
          Our Event runs from <strong>Start Day</strong> until{" "}
          <strong>End Day</strong>. We have a jam-packed schedule filled with
          exciting activities and a great opportunity to build great
          friendships!
        </p>
      </section>
      <div className={styles.scheduleContainer}>
        <div className={styles.scheduleSection}>
          <h3 className={styles.scheduleSectionTitle}>Day One</h3>
          <ul className={styles.scheduleList}>
            {ScheduleData.arrival.map((item, index) => (
              <li key={index} className={styles.scheduleItem}>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleActivity}>{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
