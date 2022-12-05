/* eslint-disable */
import React from 'react';
import { RxText } from 'react-icons/rx';
import styles from '../css/Popup.module.css';

// Popup function exported as default popup appears when you type command /1
export default function Popup({ setHeading, setValue, setPopup }) {
  // Implements set heading, seting value and setting popup through lifting up once the heading is selected
  const handletheClick = () => {
    setHeading(true);
    setValue('');
    setPopup(false);
  }

  return (
    <div className={styles.popupcontainer}>
      <div className={styles.popupcontainer_div1}>
        <div className={styles.popupcontainer_div1_divinside}>
          <h3 className={styles.popupcontainer_div1_divinside_h3}>Add blocks</h3>
          <p className={styles.popupcontainer_div1_divinside_p}>
            Keep typing to filter, or escape to exit
          </p>
        </div>
        <p className={styles.popupcontainer_div1_p1}>
          Filtering keyword
          <span className={styles.popupcontainer_div1_p1_span}>1</span>
        </p>
      </div>
      <div className={styles.popupcontainer_div2}>
        <div className={styles.popupcontainer_div2_divs} onClick={handletheClick}>
          <RxText className={styles.popupcontainer_div2_divs_icon} />
          <div className={styles.popupcontainer_div2_divs_insidedv}>
            <h3 className={styles.popupcontainer_div2_divs_insidedv_h3}>Heading 1</h3>
            <p className={styles.popupcontainer_div2_divs_insidedv_p}>Shortcut: type # + space</p>
          </div>
        </div>
        <div className={styles.popupcontainer_div2_divs}>
          <RxText className={styles.popupcontainer_div2_divs_icon} />
          <div className={styles.popupcontainer_div2_divs_insidedv}>
            <h3 className={styles.popupcontainer_div2_divs_insidedv_h3}>Expandable Heading 1</h3>
            <p className={styles.popupcontainer_div2_divs_insidedv_p}>
              Shortcut: type &gt;# + space
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
