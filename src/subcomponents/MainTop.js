import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsCheck2Circle, BsThreeDotsVertical, BsArrowDownLeft } from 'react-icons/bs';
import { CiCloud } from 'react-icons/ci';
import styles from '../css/MainTop.module.css';

// Maintop section exported as default containing navigation content
export default function MainTop() {
  return (
    <div className={styles.maintopcontainer}>
      <div className={styles.maintopcontainer_div1}>
        <button type="button" className={styles.maintopcontainer_div1_btn1}>P</button>
        <span className={styles.maintopcontainer_div1_span}>|</span>
        <button type="button" className={styles.maintopcontainer_div1_btn2}>
          <BiTimeFive className={styles.maintopcontainer_div1_btn2_icon} />
          0min
        </button>
        <span className={styles.maintopcontainer_div1_span}>|</span>
        <img src="/rabbit.png" className={styles.maintopcontainer_div1_icon2} width="25px" alt="rabbit avatar" />
        <span className={styles.maintopcontainer_div1_span}>|</span>
        <button type="button" className={styles.maintopcontainer_div1_btn3}>
          <BsArrowDownLeft />
          0
        </button>
      </div>
      <div className={styles.maintopcontainer_div2}>
        <BsCheck2Circle className={styles.maintopcontainer_div2_icon1} />
        <CiCloud className={styles.maintopcontainer_div2_icon2} />
        <BsThreeDotsVertical className={styles.maintopcontainer_div2_icon3} />
      </div>
    </div>
  );
}
