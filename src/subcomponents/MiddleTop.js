import React from 'react';
import styles from '../css/MiddleTop.module.css';

// Middle top section exported as default containing explanation of the test details
export default function MiddleTop() {
  return (
    <div className={styles.homemiddlecontainer}>
      <h2 className={styles.homemiddlecontainerh21}>Front-end developer test project</h2>
      <hr className={styles.homemiddlecontainerhr1} />
      <p className={styles.homemiddlecontainerp1}>
        Your goal is to make a page that looks exactly like this one,
        and has the ability to create H1 text simply by
        typing / then 1, then typing text, and hitting enter.
      </p>
    </div>
  );
}
