import React from 'react';
import styles from '../css/Home.module.css';
import EndTop from '../subcomponents/EndTop';
import MainTop from '../subcomponents/MainTop';
import MiddleTop from '../subcomponents/MiddleTop';

/*
  home function exported as default and contain three sections
  first section contains navigation details
  second section contains details
  third section contains input
*/
export default function Home() {
  return (
    <div className={styles.container_home}>
      <MainTop />
      <MiddleTop />
      <EndTop />
    </div>
  );
}
